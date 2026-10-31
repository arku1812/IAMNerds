import Link from 'next/link';
import { Seo, Crumbs, CtaBand } from '../lib/Layout';
import { BatchTable, upcomingBatches } from '../lib/Batches';
import { COURSES, SITE } from '../lib/data';

export default function Batches({ batches }) {
  return (
    <>
      <Seo
        title="Upcoming Batches & Fees | IAMNerds IAM Training"
        description="Upcoming IAMNerds batch start dates, schedules and course fees for One Identity Manager, SailPoint, Saviynt, SAP, Entra ID, Okta, CyberArk and more."
        path="/batches"
        jsonLd={{ '@context': 'https://schema.org', '@type': 'WebPage', url: `${SITE}/batches`, name: 'Upcoming batches | IAMNerds', inLanguage: 'en' }}
      />
      <section className="hero page-hero">
        <div className="wrap">
          <Crumbs items={[['/', 'Home'], ['/batches', 'Batches']]} />
          <div className="eyebrow">Batches</div>
          <h1>Upcoming batches, <em>pick your start date.</em></h1>
          <p className="lede">Every course is 30 hours of live, hands-on training. Book a free demo first if you want to meet the instructor before you register.</p>
          <div className="cta" style={{ marginTop: 'var(--s5)' }}>
            <Link className="btn primary" href="/contact?type=demo#talk">Book a free demo</Link>
            <Link className="btn" href="/courses">Browse courses</Link>
          </div>
        </div>
      </section>

      <section className="band"><div className="wrap">
        {batches.length ? (
          <BatchTable batches={batches} showCourse />
        ) : (
          <div className="batches-empty">
            <h2>New batches are being scheduled.</h2>
            <p>Tell us which course you want and your preferred timing (weekday or weekend, IST or another time zone). We will confirm the next start date and fee.</p>
            <div className="cta">
              <Link className="btn primary btn-lg" href="/contact?type=register#talk">Reserve a seat</Link>
              <Link className="btn btn-lg" href="/contact?type=demo#talk">Book a free demo</Link>
            </div>
            <ul className="chip-list" aria-label="Courses">
              {COURSES.map((c) => <li key={c.slug}><Link href={`/courses/${c.slug}`}>{c.title}</Link></li>)}
            </ul>
          </div>
        )}
      </div></section>
      <CtaBand title="Training a team?" text="We run private batches for teams, on your schedule." href="/contact?type=question#talk" label="Ask about team batches" />
    </>
  );
}

export function getStaticProps() {
  return { props: { batches: upcomingBatches() } };
}
