import Link from 'next/link';
import { Seo, Crumbs, CtaBand } from '../../lib/Layout';
import { COURSES, SITE, bySlug } from '../../lib/data';
import { logoFor } from '../../lib/logos';
import { VendorMark } from '../../lib/CourseCard';

export default function Course({ slug, logo }) {
  const c = bySlug(slug);
  const path = `/courses/${c.slug}`;
  const n = c.modules.length;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course', name: `${c.title} course`, description: c.intro, url: SITE + path, inLanguage: 'en',
        provider: { '@type': 'Organization', name: 'IAMNerds', url: `${SITE}/` },
        hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: `PT${c.hours}H` },
        syllabusSections: c.modules.map((m) => ({ '@type': 'Syllabus', name: m.name, description: m.topics })),
      },
      { '@type': 'BreadcrumbList', itemListElement: [['/', 'Home'], ['/courses', 'Courses'], [path, c.title]].map(([h, t], i) => ({ '@type': 'ListItem', position: i + 1, name: t, item: SITE + h })) },
    ],
  };
  return (
    <>
      <Seo
        title={`${c.title} Course: 30-Hour Online Training with Labs | IAMNerds`}
        description={`${c.title} online course by IAMNerds: 30 hours, ${n} modules with hands-on labs${c.capstone ? ' and a capstone project' : ''}. ${c.intro}`.slice(0, 300)}
        path={path}
        jsonLd={jsonLd}
      />
      <section className="hero page-hero">
        <div className="wrap">
          <Crumbs items={[['/', 'Home'], ['/courses', 'Courses'], [path, c.title]]} />
          <div className="course-head"><div className="eyebrow">{c.tag} · Course</div><VendorMark course={c} logo={logo} big /></div>
          <h1>{c.title}: <em>{c.tagline}</em></h1>
          <p className="lede">{c.intro}</p>
          <div className="course-facts">
            <div className="fact"><div className="n">{c.hours} h</div><div className="l">training and labs</div></div>
            <div className="fact"><div className="n">{n}</div><div className="l">modules, each with a lab</div></div>
          </div>
          <div className="cta" style={{ marginTop: 'var(--s6)' }}>
            <Link className="btn primary" href={`/contact?course=${encodeURIComponent(c.title)}#talk`}>Enquire about this course</Link>
            <a className="btn" href="#curriculum">See the curriculum</a>
          </div>
        </div>
      </section>

      <section className="band" id="curriculum"><div className="wrap">
        <div className="sec-head"><h2>Curriculum</h2><p>{c.scope}. Modules run in order, from the basics to architecture.</p></div>
        <div className="mod-wrap"><table className="mod-table">
          <thead><tr><th scope="col">#</th><th scope="col">Module</th><th scope="col">Lab</th></tr></thead>
          <tbody>
            {c.modules.map((m, i) => (
              <tr key={m.name}>
                <td className="mn">{String(i + 1).padStart(2, '0')}</td>
                <td><strong>{m.name}</strong><span>{m.topics}</span></td>
                <td>{m.lab}</td>
              </tr>
            ))}
          </tbody>
        </table></div>
        <div className="register-row">
          <p><b>Next batch forming now.</b> Reserve your seat for the {c.title} course.</p>
          <Link className="btn primary btn-lg" href={`/contact?course=${encodeURIComponent(c.title)}#talk`}>Register for a Batch</Link>
        </div>
      </div></section>

      {c.capstone && (
        <section className="band"><div className="wrap">
          <div className="nhi capstone">
            <div><div className="eyebrow" style={{ color: 'var(--violet)' }}>Capstone project</div><h2 style={{ marginTop: 'var(--s4)' }}>Build it <em>end to end.</em></h2></div>
            <div><p className="lead">{c.capstone}.</p><p className="lead" style={{ marginTop: 'var(--s3)' }}>Reviewed by an instructor who has built the same thing on real projects.</p></div>
          </div>
        </div></section>
      )}

      <section className="band"><div className="wrap">
        <div className="services three">
          <article className="svc"><span className="k">PREREQUISITES</span><h3>{c.free ? 'None' : 'IAM Fundamentals recommended'}</h3><p>Basic IT administration experience helps. No prior experience with {c.title} needed.</p></article>
          <article className="svc"><span className="k">LAB ENVIRONMENT</span><h3>{c.lab}</h3><p>Step-by-step guides and worked solutions for every lab.</p></article>
          <article className="svc"><span className="k">IN EVERY MODULE</span><h3>Session, lab, quiz, cheat sheet</h3><p>Focused lessons, a hands-on lab, a short quiz and a PDF cheat sheet.</p></article>
        </div>
      </div></section>

      <section className="band"><div className="wrap">
        <div className="sec-head"><h2>Frequently asked questions</h2><p /></div>
        <div className="faq">
          <details><summary>Is this an official {c.title} course?</summary><p>No. It is independent training written by practitioners. Vendor and product names are used only to describe what the course covers.</p></details>
          <details><summary>When does the next batch start?</summary><p>Send an enquiry or message us on WhatsApp and we will share the next batch dates and timings.</p></details>
          <details><summary>Can my team take it together?</summary><p>Yes. Get in touch for team batches and private sessions.</p></details>
        </div>
      </div></section>
      <CtaBand title="Want in?" text={`Ask about the next ${c.title} batch.`} href={`/contact?course=${encodeURIComponent(c.title)}#talk`} label="Enquire now" />
    </>
  );
}

export function getStaticPaths() {
  return { paths: COURSES.map((c) => ({ params: { slug: c.slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug, logo: logoFor(params.slug) } };
}
