import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BATCHES, BATCH_NOTE, PRICES, bySlug } from './data';

const fmt = (iso) => new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
const money = (n, cur) => new Intl.NumberFormat(cur === 'INR' ? 'en-IN' : 'en-US', { style: 'currency', currency: cur, maximumFractionDigits: 0 }).format(n);

// Called at build time (getStaticProps): only batches that have not started yet, soonest first.
export function upcomingBatches(slug) {
  const today = new Date().toISOString().slice(0, 10);
  return BATCHES.filter((b) => b.start >= today && (!slug || b.course === slug)).sort((a, b) => a.start.localeCompare(b.start));
}

// Visitors in India see INR first; everyone else sees USD first. Both amounts are always shown.
// Detected in the browser from the time zone / language, so no IP lookup or cookies are needed.
export function useCurrency() {
  const [cur, setCur] = useState('INR');
  useEffect(() => {
    let india = false;
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      india = /^Asia\/(Kolkata|Calcutta)$/.test(tz) || (navigator.languages || [navigator.language]).some((l) => /-IN$/i.test(l || ''));
    } catch (_) { india = false; }
    setCur(india ? 'INR' : 'USD');
  }, []);
  return cur;
}

export function Price({ slug, block = false }) {
  const cur = useCurrency();
  const p = PRICES[slug];
  if (!p) return <span className="price">Fee on request</span>;
  const inr = money(p.inr, 'INR');
  const usd = money(p.usd, 'USD');
  const [main, alt] = cur === 'INR' ? [inr, usd] : [usd, inr];
  return (
    <span className={`price ${block ? 'price-block' : ''}`}>
      <span className="price-main">{main}</span> <span className="price-alt">({alt})</span>
    </span>
  );
}

const demoHref = (title) => `/contact?type=demo${title ? `&course=${encodeURIComponent(title)}` : ''}#talk`;
const registerHref = (title) => `/contact?type=register&course=${encodeURIComponent(title)}#talk`;

export function BatchTable({ batches, showCourse = false }) {
  if (!batches.length) return null;
  return (
    <div className="mod-wrap"><table className="mod-table batch-table">
      <thead><tr>
        {showCourse && <th scope="col">Course</th>}
        <th scope="col">Starts</th><th scope="col">Schedule</th><th scope="col">Fee</th><th scope="col"><span className="sr">Action</span></th>
      </tr></thead>
      <tbody>
        {batches.map((b) => {
          const c = bySlug(b.course);
          return (
            <tr key={b.course + b.start}>
              {showCourse && <td><Link href={`/courses/${c.slug}`}><strong>{c.title}</strong></Link></td>}
              <td><strong>{fmt(b.start)}</strong>{b.seats ? <span>{b.seats} seats</span> : null}</td>
              <td>{b.days}<span>{b.time}</span></td>
              <td><Price slug={b.course} /></td>
              <td className="batch-act"><Link className="btn primary" href={registerHref(c.title)}>Register</Link></td>
            </tr>
          );
        })}
      </tbody>
    </table></div>
  );
}

// Section for a course page: upcoming batches, or a prompt to book a demo when none are scheduled.
export function CourseBatches({ course: c, batches }) {
  return (
    <div className="batches">
      <div className="batches-head">
        <h3>Upcoming batches</h3>
        <span className="batches-fee">Course fee: <Price slug={c.slug} /></span>
      </div>
      {batches.length ? (
        <BatchTable batches={batches} />
      ) : (
        <p className="batches-none"><b>{BATCH_NOTE}</b> Enquire now for the next start date and timings, or book a free demo session first.</p>
      )}
      <div className="register-row">
        <p><b>Not sure yet?</b> Join a free demo session before you register for the {c.title} course.</p>
        <div className="register-btns">
          <Link className="btn btn-lg" href={demoHref(c.title)}>Book a free demo</Link>
          <Link className="btn primary btn-lg" href={registerHref(c.title)}>{batches.length ? 'Register for a Batch' : 'Enquire now'}</Link>
        </div>
      </div>
    </div>
  );
}

export { demoHref, registerHref };

// All courses with their fee, for the batches page.
export function FeeTable({ courses }) {
  return (
    <div className="mod-wrap"><table className="mod-table batch-table">
      <thead><tr><th scope="col">Course</th><th scope="col">Duration</th><th scope="col">Fee</th><th scope="col"><span className="sr">Action</span></th></tr></thead>
      <tbody>
        {courses.map((c) => (
          <tr key={c.slug}>
            <td><Link href={`/courses/${c.slug}`}><strong>{c.title}</strong></Link><span>{c.tag}</span></td>
            <td>{c.hours} hours<span>{c.modules.length} modules</span></td>
            <td><Price slug={c.slug} /></td>
            <td className="batch-act"><Link className="btn primary" href={registerHref(c.title)}>Enquire now</Link></td>
          </tr>
        ))}
      </tbody>
    </table></div>
  );
}
