import { useCallback, useRef, useState } from 'react';
import { getCountries, getCountryCallingCode, isValidPhoneNumber } from 'libphonenumber-js';
import { COURSES, EMAIL, ENQUIRY_TYPES, RECAPTCHA_SITE_KEY } from './data';
import CountrySelect from './CountrySelect';
import Recaptcha from './Recaptcha';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Built at export time (getStaticProps) so server and browser render identical option text.
export function countryList() {
  let names;
  try { names = new Intl.DisplayNames(['en'], { type: 'region' }); } catch (_) { names = null; }
  return getCountries()
    .map((iso) => ({ iso, code: getCountryCallingCode(iso), name: (names && names.of(iso)) || iso }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export default function ContactForm({ countries, defaultCourse = '', defaultType = ENQUIRY_TYPES[0] }) {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ kind: '', text: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [country, setCountry] = useState('IN');
  const [captcha, setCaptcha] = useState('');
  const captchaRef = useRef(null);
  const onCaptcha = useCallback((t) => { setCaptcha(t); if (t) setErrors((e) => ({ ...e, captcha: '' })); }, []);

  const clear = (k) => setErrors((e) => (e[k] ? { ...e, [k]: '' } : e));

  async function onSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const v = (n) => f.elements.namedItem(n);
    const data = {
      name: v('name').value.trim(),
      email: v('email').value.trim(),
      country,
      dialCode: '+' + getCountryCallingCode(country),
      phone: v('phone').value.trim(),
      company: v('company').value.trim(),
      course: v('course').value,
      enquiryType: v('enquiryType').value,
      message: v('message').value.trim(),
      consent: v('consent').checked,
      website: v('website').value,
      recaptcha: captcha,
    };
    const err = {};
    if (!data.name) err.name = 'Enter your full name.';
    if (!EMAIL_RE.test(data.email)) err.email = 'Enter a valid email address, like priya@example.com.';
    if (!data.phone || !isValidPhoneNumber(data.phone, country)) err.phone = `Enter a valid mobile number for ${data.dialCode}.`;
    if (!data.course) err.course = 'Choose a course.';
    if (!data.consent) err.consent = 'Tick the box so we can reply to you.';
    if (RECAPTCHA_SITE_KEY && !captcha) err.captcha = 'Please confirm you are not a robot.';
    setErrors(err);
    if (Object.keys(err).length) {
      setStatus({ kind: 'fail', text: 'Check the highlighted fields.' });
      const first = f.querySelector(`[name="${Object.keys(err)[0]}"]`);
      if (first) first.focus();
      return;
    }
    setSending(true);
    setStatus({ kind: '', text: '' });
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok) {
        f.reset();
        setSent(true);
        setStatus({ kind: 'ok', text: 'Thanks! A nerd will get back to you soon.' });
        return;
      }
      if (captchaRef.current) captchaRef.current.reset();
      setCaptcha('');
      if (r.status === 400 && j.errors) setErrors(j.errors);
      throw new Error(r.status === 429 ? 'rate' : 'fail');
    } catch (ex) {
      setStatus({
        kind: 'fail',
        text: ex.message === 'rate'
          ? 'Too many messages in a short time. Try again in a few minutes.'
          : `Your enquiry couldn't be sent from here. Email ${EMAIL} or message us on WhatsApp instead.`,
      });
    } finally {
      setSending(false);
    }
  }

  const fieldClass = (k, extra = '') => `field ${extra} ${errors[k] ? 'bad' : ''}`.trim();

  return (
    <form className={`talk ${sent ? 'sent' : ''}`} id="talk" noValidate onSubmit={onSubmit}>
      <h3>{defaultType === ENQUIRY_TYPES[0] ? 'Book a free demo' : 'Course enquiry'}</h3>
      <div className="fields">
        <div className={fieldClass('name', 'full')}>
          <label htmlFor="f-name">Full name <span className="req">*</span></label>
          <input id="f-name" name="name" type="text" autoComplete="name" placeholder="Priya Sharma" required maxLength={100} onInput={() => clear('name')} />
          <span className="err">{errors.name}</span>
        </div>
        <div className={fieldClass('email', 'full')}>
          <label htmlFor="f-email">Email <span className="req">*</span></label>
          <input id="f-email" name="email" type="email" autoComplete="email" placeholder="priya@example.com" required maxLength={160} onInput={() => clear('email')} />
          <span className="err">{errors.email}</span>
        </div>
        <div className={fieldClass('phone', 'full')}>
          <label htmlFor="f-phone">Mobile number <span className="req">*</span></label>
          <div className="phone-row">
            <CountrySelect countries={countries} value={country} onChange={(iso) => { setCountry(iso); clear('phone'); }} invalid={!!errors.phone} />
            <input id="f-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel-national" placeholder="98765 43210" required maxLength={20} onInput={() => clear('phone')} />
          </div>
          <span className="err">{errors.phone}</span>
        </div>
        <div className="field">
          <label htmlFor="f-company">Company <span className="opt">optional</span></label>
          <input id="f-company" name="company" type="text" autoComplete="organization" placeholder="Acme Ltd" maxLength={120} />
          <span className="err" />
        </div>
        <div className="field full">
          <span className="lbl" id="l-type">I&apos;d like to <span className="req">*</span></span>
          <div className="seg" role="radiogroup" aria-labelledby="l-type">
            {ENQUIRY_TYPES.map((t) => (
              <label key={t} className="seg-opt">
                <input type="radio" name="enquiryType" value={t} defaultChecked={t === defaultType} />
                <span>{t === ENQUIRY_TYPES[0] ? 'Book a free demo' : t === ENQUIRY_TYPES[1] ? 'Register for a batch' : 'Ask a question'}</span>
              </label>
            ))}
          </div>
        </div>
        <div className={fieldClass('course')}>
          <label htmlFor="f-course">Course <span className="req">*</span></label>
          <select id="f-course" name="course" required defaultValue={defaultCourse} onChange={() => clear('course')}>
            <option value="" disabled>Choose a course</option>
            {COURSES.map((c) => <option key={c.slug} value={c.title}>{c.title}</option>)}
          </select>
          <span className="err">{errors.course}</span>
        </div>
        <div className="field full">
          <label htmlFor="f-message">Message <span className="opt">optional</span></label>
          <textarea id="f-message" name="message" rows={4} placeholder="Preferred batch timing, questions about the course…" maxLength={5000} />
          <span className="err" />
        </div>
        <div className="hp" aria-hidden="true">
          <label htmlFor="f-website">Website</label>
          <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <div className={`field full check ${errors.consent ? 'bad' : ''}`}>
          <input id="f-consent" name="consent" type="checkbox" required onChange={() => clear('consent')} />
          <label htmlFor="f-consent">IAMNerds may use my details to reply to this enquiry. More in the <a href="/privacy-policy">privacy policy</a>.</label>
          <span className="err">{errors.consent}</span>
        </div>
        {RECAPTCHA_SITE_KEY && (
          <div className={`field full ${errors.captcha ? 'bad' : ''}`}>
            <Recaptcha ref={captchaRef} onChange={onCaptcha} />
            <span className="err">{errors.captcha}</span>
          </div>
        )}
      </div>
      <div className="talk-foot">
        <button className="btn primary" type="submit" disabled={sending || sent}>
          {sent ? 'Sent' : sending ? 'Sending…' : 'Submit enquiry'}
        </button>
        <p className={`status ${status.kind}`} role="status" aria-live="polite">{status.text}</p>
      </div>
    </form>
  );
}
