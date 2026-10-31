// Azure Function: POST /api/contact
// Receives the course enquiry form and emails it to hello@iamnerds.io via Microsoft Graph
// (app-only, client credentials). hello@iamnerds.io is a shared mailbox, so Graph sends as it
// directly; no mailbox password or SMTP AUTH involved.
// Settings come from the Static Web App's environment variables (Azure portal → Settings → Environment variables),
// or from api/local.settings.json when running locally:
//   GRAPH_TENANT_ID, GRAPH_CLIENT_ID, GRAPH_CLIENT_SECRET  (app registration with Mail.Send, Application)
//   MAIL_FROM   mailbox Graph sends as (default hello@iamnerds.io)
//   CONTACT_TO  where form messages go (default hello@iamnerds.io)

const { app } = require('@azure/functions');

const CONTACT_TO = process.env.CONTACT_TO || 'hello@iamnerds.io';
const MAIL_FROM = process.env.MAIL_FROM || 'hello@iamnerds.io';

const COURSES = new Set([
  "IAM Fundamentals",
  "One Identity Manager",
  "SailPoint",
  "Omada",
  "Saviynt",
  "SAP Identity & Authorizations",
  "SAP Cloud Identity Services",
  "Microsoft Entra ID",
  "Active Directory",
  "Okta",
  "OneLogin",
  "Ping Identity",
  "CyberArk",
  "BeyondTrust",
]);
const PHONE_RE = /^\+\d{1,4}$/;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Microsoft Graph: app-only token (cached until shortly before expiry) and sendMail.
const graphConfigured = () =>
  !!(process.env.GRAPH_TENANT_ID && process.env.GRAPH_CLIENT_ID && process.env.GRAPH_CLIENT_SECRET);

let cachedToken = null;
async function getGraphToken() {
  if (cachedToken && cachedToken.expires > Date.now() + 60 * 1000) return cachedToken.value;
  const res = await fetch(
    `https://login.microsoftonline.com/${encodeURIComponent(process.env.GRAPH_TENANT_ID)}/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: process.env.GRAPH_CLIENT_ID,
        client_secret: process.env.GRAPH_CLIENT_SECRET,
        scope: 'https://graph.microsoft.com/.default',
        grant_type: 'client_credentials',
      }),
    }
  );
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.access_token) {
    throw new Error(`Token request failed (${res.status}): ${json.error || ''} ${json.error_description || ''}`.trim());
  }
  cachedToken = { value: json.access_token, expires: Date.now() + (Number(json.expires_in) || 3600) * 1000 };
  return cachedToken.value;
}

async function sendMail({ subject, text, replyToName, replyToEmail }) {
  const token = await getGraphToken();
  const res = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(MAIL_FROM)}/sendMail`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: {
        subject,
        body: { contentType: 'Text', content: text },
        toRecipients: [{ emailAddress: { address: CONTACT_TO } }],
        replyTo: [{ emailAddress: { address: replyToEmail, name: replyToName } }],
      },
      saveToSentItems: false,
    }),
  });
  if (res.status !== 202) {
    const detail = await res.text().catch(() => '');
    throw new Error(`Graph sendMail failed (${res.status}): ${detail.slice(0, 300)}`);
  }
}

// Best-effort rate limit per function instance: 5 messages per IP per 15 minutes.
const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 10000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const clean = (v, max) =>
  String(v == null ? '' : v).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);

function validate(body) {
  const data = {
    name: clean(body.name, 100),
    company: clean(body.company, 120),
    email: clean(body.email, 160),
    dialCode: clean(body.dialCode, 6),
    country: clean(body.country, 2).toUpperCase(),
    phone: clean(body.phone, 20).replace(/[^\d]/g, ''),
    course: clean(body.course, 80),
    message: clean(body.message, 5000),
    consent: body.consent === true,
  };
  const errors = {};
  if (!data.name) errors.name = 'Enter your full name.';
  if (!EMAIL_RE.test(data.email)) errors.email = 'Enter a valid email address.';
  if (!PHONE_RE.test(data.dialCode) || data.phone.length < 5 || data.phone.length > 15) errors.phone = 'Enter a valid mobile number.';
  if (!COURSES.has(data.course)) errors.course = 'Choose a course.';
  if (!data.consent) errors.consent = 'Tick the box so we can reply to you.';
  return { data, errors };
}

function clientIp(request) {
  const fwd = request.headers.get('x-forwarded-for') || request.headers.get('x-azure-clientip') || '';
  return fwd.split(',')[0].trim().replace(/:\d+$/, '') || 'unknown';
}

async function contactHandler(request, context) {
  let body;
  try {
    body = await request.json();
  } catch {
    return { status: 400, jsonBody: { ok: false, error: 'Bad request' } };
  }
  if (!body || typeof body !== 'object') {
    return { status: 400, jsonBody: { ok: false, error: 'Bad request' } };
  }

  // Honeypot: bots fill the hidden "website" field. Pretend success, send nothing.
  if (body.website) return { status: 200, jsonBody: { ok: true } };

  if (rateLimited(clientIp(request))) {
    return { status: 429, jsonBody: { ok: false, error: 'Too many requests' } };
  }

  const { data, errors } = validate(body);
  if (Object.keys(errors).length) {
    return { status: 400, jsonBody: { ok: false, error: 'Validation failed', errors } };
  }

  if (!graphConfigured()) {
    context.error(`Graph is not configured: set GRAPH_TENANT_ID, GRAPH_CLIENT_ID and GRAPH_CLIENT_SECRET. Message from ${data.email} was NOT delivered to ${CONTACT_TO}.`);
    return { status: 503, jsonBody: { ok: false, error: 'Email is not configured' } };
  }

  try {
    await sendMail({
      replyToName: data.name.replace(/[<>"]/g, ''),
      replyToEmail: data.email,
      subject: `Course enquiry: ${data.course} — ${data.name}${data.company ? ` (${data.company})` : ''}`,
      text: [
        `Name:    ${data.name}`,
        `Email:   ${data.email}`,
        `Mobile:  ${data.dialCode} ${data.phone} (${data.country || '-'})`,
        `Company: ${data.company || '-'}`,
        `Course:  ${data.course}`,
        `Sent:    ${new Date().toISOString()}`,
        '',
        data.message || '(no message)',
      ].join('\n'),
    });
    context.log(`Course enquiry: ${data.course} from ${data.email} emailed to ${CONTACT_TO}`);
    return { status: 200, jsonBody: { ok: true } };
  } catch (err) {
    context.error(`Contact form email failed: ${err.message}`);
    return { status: 502, jsonBody: { ok: false, error: 'Delivery failed' } };
  }
}

app.http('contact', {
  methods: ['POST'],
  authLevel: 'anonymous',
  route: 'contact',
  handler: contactHandler,
});

module.exports = { contactHandler };
