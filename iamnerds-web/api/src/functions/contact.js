'use strict';

// Azure Function: POST /api/contact
// Receives the "Talk to a nerd" form and emails it to hello@iamnerds.io via SMTP.
// Settings come from the Static Web App's environment variables (Azure portal → Settings → Environment variables),
// or from api/local.settings.json when running locally.

const { app } = require('@azure/functions');
const nodemailer = require('nodemailer');

const CONTACT_TO = process.env.CONTACT_TO || 'hello@iamnerds.io';
const MAIL_FROM = process.env.MAIL_FROM || process.env.SMTP_USER || 'hello@iamnerds.io';

const TOPICS = new Set([
  'IGA strategy & architecture',
  'Joiner, mover, leaver',
  'Role models & certifications',
  'Privileged access (PAM)',
  'Non-human identities',
  'AI agent identity governance',
  'SAP & directories',
  'Audit readiness',
  'Something else',
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

let transporter = null;
function getTransporter() {
  if (!process.env.SMTP_HOST) return null;
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for port 465
      auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
    });
  }
  return transporter;
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
    topic: clean(body.topic, 60),
    message: clean(body.message, 5000),
    consent: body.consent === true,
    lang: body.lang === 'de' ? 'DE' : 'EN',
  };
  const errors = {};
  if (!data.name) errors.name = 'Enter your name.';
  if (!EMAIL_RE.test(data.email)) errors.email = 'Enter a valid email address, like alex@acme.com.';
  if (data.message.length < 10) errors.message = 'Tell us a little more, at least 10 characters.';
  if (!data.consent) errors.consent = 'Tick the box so we can reply to you.';
  if (!TOPICS.has(data.topic)) data.topic = 'Something else';
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

  const mailer = getTransporter();
  if (!mailer) {
    context.error(`SMTP is not configured: set SMTP_HOST, SMTP_USER and SMTP_PASS. Message from ${data.email} was NOT delivered to ${CONTACT_TO}.`);
    return { status: 503, jsonBody: { ok: false, error: 'Email is not configured' } };
  }

  try {
    await mailer.sendMail({
      from: `IAMNerds website <${MAIL_FROM}>`,
      to: CONTACT_TO,
      replyTo: `${data.name.replace(/[<>"]/g, '')} <${data.email}>`,
      subject: `Talk to a nerd: ${data.topic} — ${data.name}${data.company ? ` (${data.company})` : ''}`,
      text: [
        `Name:    ${data.name}`,
        `Company: ${data.company || '-'}`,
        `Email:   ${data.email}`,
        `Topic:   ${data.topic}`,
        `Page:    ${data.lang}`,
        `Sent:    ${new Date().toISOString()}`,
        '',
        data.message,
      ].join('\n'),
    });
    context.log(`Contact form: ${data.topic} from ${data.email} emailed to ${CONTACT_TO}`);
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
