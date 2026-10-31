import Link from 'next/link';
import { Seo, Crumbs, CtaBand } from './Layout';
import CourseCard from './CourseCard';
import { COURSES, HOURS_RANGE, SITE, STUDENTS } from './data';

// Country landing page (India / USA) for local search: same courses, local timing and pricing notes.
export default function MarketPage({ m, logos }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', url: SITE + m.path, name: m.title, inLanguage: m.lang, about: 'Identity & Access Management training', isPartOf: { '@id': `${SITE}/#website` } },
      { '@type': 'EducationalOrganization', '@id': `${SITE}/#organization`, name: 'IAMNerds', url: `${SITE}/`, areaServed: { '@type': 'Country', name: m.country } },
      { '@type': 'ItemList', name: `IAM courses for learners in ${m.country}`, itemListElement: COURSES.map((c, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/courses/${c.slug}`, name: `${c.title} training` })) },
      { '@type': 'FAQPage', mainEntity: m.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ],
  };
  return (
    <>
      <Seo title={m.title} description={m.description} path={m.path} jsonLd={jsonLd} />
      <section className="hero page-hero">
        <div className="wrap">
          <Crumbs items={[['/', 'Home'], [m.path, m.crumb]]} />
          <div className="eyebrow">{m.eyebrow}</div>
          <h1>{m.h1} <em>{m.h1em}</em></h1>
          <p className="lede">{m.lede}</p>
          <div className="cta" style={{ marginTop: 'var(--s5)' }}>
            <Link className="btn primary" href="/contact?type=demo#talk">Book a free demo</Link>
            <Link className="btn" href="/courses">Browse courses</Link>
          </div>
        </div>
      </section>

      <section className="band"><div className="wrap">
        <div className="services three">
          {m.points.map(([k, h, p]) => (
            <article className="svc" key={k}><span className="k">{k}</span><h3>{h}</h3><p>{p}</p></article>
          ))}
        </div>
      </div></section>

      <section className="band"><div className="wrap">
        <div className="sec-head"><h2>{m.coursesHeading}</h2><p>{COURSES.length} courses of {HOURS_RANGE} hours, every module with a hands-on lab. {STUDENTS} students trained worldwide.</p></div>
        <div className="plat-cards">
          {COURSES.map((c) => <CourseCard key={c.slug} course={c} logo={logos[c.slug]} />)}
        </div>
      </div></section>

      <section className="band"><div className="wrap">
        <div className="sec-head"><h2>Frequently asked questions</h2><p /></div>
        <div className="faq">
          {m.faq.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </div></section>
      <CtaBand title={m.ctaTitle} text={m.ctaText} href="/contact?type=demo#talk" label="Book a free demo" />
    </>
  );
}
