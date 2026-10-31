import Link from 'next/link';
import { Seo, Crumbs, CtaBand } from '../lib/Layout';
import CourseCard from '../lib/CourseCard';
import { COURSES, GROUPS, SITE, bySlug } from '../lib/data';
import { logoMap } from '../lib/logos';

export default function Courses({ logos }) {
  return (
    <>
      <Seo
        title="IAM, IGA & PAM Courses | IAMNerds"
        description={`All IAMNerds courses, 30 hours each: ${COURSES.map((c) => c.title).join(', ')}.`}
        path="/courses"
        jsonLd={{ '@context': 'https://schema.org', '@type': 'CollectionPage', url: `${SITE}/courses`, name: 'IAM courses | IAMNerds', inLanguage: 'en' }}
      />
      <section className="hero page-hero">
        <div className="wrap">
          <Crumbs items={[['/', 'Home'], ['/courses', 'Courses']]} />
          <div className="eyebrow">Courses</div>
          <h1>One course per platform. <em>Every module a lab.</em></h1>
          <p className="lede">{COURSES.length} courses of 30 hours each, with hands-on labs and a capstone project. Start with IAM Fundamentals, then go deep on the platform you run.</p>
        </div>
      </section>

      <section className="band"><div className="wrap">
        <div className="plat-groups">
          {GROUPS.map((g) => (
            <div className="plat-group" key={g.title}>
              <h2>{g.title}</h2>
              <p>{g.text}</p>
              <div className="plat-cards">
                {g.slugs.map((s) => <CourseCard key={s} course={bySlug(s)} logo={logos[s]} />)}
              </div>
            </div>
          ))}
        </div>
      </div></section>

      <section className="band"><div className="wrap">
        <div className="sec-head"><h2>Frequently asked questions</h2><p /></div>
        <div className="faq">
          <details><summary>Are these official vendor courses?</summary><p>No. IAMNerds courses are independent training written by practitioners. Product names are used only to describe what the course covers.</p></details>
          <details><summary>How long is each course?</summary><p>Every course is 30 hours, including hands-on labs and the capstone project.</p></details>
          <details><summary>Do I need my own licence for the labs?</summary><p>No. Each course comes with a lab environment: vendor trial or developer tenants where they exist, and prepared virtual machines for on-premises products.</p></details>
          <details><summary>Can I train a whole team?</summary><p>Yes. <Link href="/contact#talk">Get in touch</Link> and we will put together courses and sessions for your team.</p></details>
        </div>
      </div></section>
      <CtaBand title="Not sure where to start?" text="Tell us your role and we will suggest a course or learning path." href="/contact#talk" label="Enquire now" />
    </>
  );
}

export function getStaticProps() {
  return { props: { logos: logoMap(COURSES.map((c) => c.slug)) } };
}
