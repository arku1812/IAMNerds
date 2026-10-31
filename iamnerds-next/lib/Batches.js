import Link from 'next/link';
import { BATCHES, PRICES, bySlug } from './data';

const fmt = (iso) => new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
const money = (n, cur) => new Intl.NumberFormat(cur === 'INR' ? 'en-IN' : 'en-US', { style: 'currency', currency: cur, maximumFractionDigits: 0 }).format(n);

// Called at build time (getStaticProps): only batches that have not started yet, soonest first.
export function upcomingBatches(slug) {
  const today = new Date().toISOString().slice(0, 10);
  return BATCHES.filter((b) => b.start >= today && (!slug || b.course === slug)).sort((a, b) => a.start.localeCompare(b.start));
}

export function Price({ slug }) {
  const p = PRICES[slug];
  if (!p) return <span className="price">Fee on request</span>;
  return (
    <span className="price">
      {p.inr ? money(p.inr, 'INR') : null}
      {p.inr && p.usd ? <span className="price-sep"> · </span> : null}
      {p.usd ? money(p.usd, 'USD') : null}
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
        <p className="batches-none">New batch dates are announced soon. Book a free demo session and we will share the next start date and timings.</p>
      )}
      <div className="register-row">
        <p><b>Not sure yet?</b> Join a free demo session before you register for the {c.title} course.</p>
        <div className="register-btns">
          <Link className="btn btn-lg" href={demoHref(c.title)}>Book a free demo</Link>
          <Link className="btn primary btn-lg" href={registerHref(c.title)}>Register for a Batch</Link>
        </div>
      </div>
    </div>
  );
}

export { demoHref, registerHref };
