import { COMPANIES, STUDENTS, LINKEDIN } from './data';

export function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function LinkedInButton({ className = 'btn' }) {
  return (
    <a className={`${className} li-btn`} href={LINKEDIN} target="_blank" rel="noopener noreferrer">
      <LinkedInIcon /> Connect on LinkedIn
    </a>
  );
}

export function StudentsStat() {
  return (
    <section className="band students">
      <div className="wrap students-inner">
        <div className="students-n">{STUDENTS}</div>
        <p className="students-t">
          students trained across the world in <em>Identity &amp; Access Management</em> platforms.
        </p>
      </div>
    </section>
  );
}

// Scrolling strip of company names. Hidden while COMPANIES is empty.
export function CompanyMarquee() {
  if (!COMPANIES.length) return null;
  const row = (k) => COMPANIES.map((c) => (
    <span className="mq-item" key={k + c.name}><b>{c.name}</b><small>{c.sector}</small></span>
  ));
  return (
    <section className="band companies" aria-labelledby="companies-h">
      <div className="wrap">
        <h2 id="companies-h" className="companies-h">Join the world&apos;s leading companies <em>after completing your course.</em></h2>
      </div>
      <div className="mq" role="img" aria-label={`Companies: ${COMPANIES.map((c) => c.name).join(', ')}`}>
        <div className="mq-track" aria-hidden="true">{row('a')}{row('b')}</div>
      </div>
    </section>
  );
}
