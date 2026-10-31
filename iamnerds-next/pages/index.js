import Link from 'next/link';
import Chamber from '../lib/Chamber';
import { Seo, CtaBand } from '../lib/Layout';
import CourseCard from '../lib/CourseCard';
import { COURSES, PATHS, SITE, STUDENTS, bySlug } from '../lib/data';
import { logoMap } from '../lib/logos';
import { CompanyMarquee, LinkedInButton, StudentsStat } from '../lib/Showcase';
import Testimonials from '../lib/Testimonials';

const FEATURED = ['one-identity-manager', 'sailpoint', 'sap-identity-authorizations', 'microsoft-entra-id', 'okta', 'cyberark', 'active-directory', 'saviynt'];

export default function Home({ logos }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'EducationalOrganization', '@id': `${SITE}/#organization`, name: 'IAMNerds', url: `${SITE}/`, logo: `${SITE}/icon-512.png`, email: 'hello@iamnerds.io', sameAs: ['https://www.linkedin.com/company/iamnerds/'] },
      { '@type': 'WebSite', '@id': `${SITE}/#website`, url: `${SITE}/`, name: 'IAMNerds', inLanguage: 'en' },
      { '@type': 'ItemList', name: 'IAMNerds courses', itemListElement: COURSES.map((c, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/courses/${c.slug}`, name: c.title })) },
    ],
  };
  return (
    <>
      <Seo
        title="IAMNerds | Online IAM, IGA & PAM Training"
        description="Hands-on online training for Identity & Access Management: One Identity Manager, SailPoint, Omada, Saviynt, SAP, Entra ID, Okta, Ping, CyberArk and BeyondTrust. 30 hours per course."
        path="/"
        jsonLd={jsonLd}
      />
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>Least privilege, <em>maximum learning.</em></h1>
            <p className="lede">Hands-on online training for Identity &amp; Access Management, taught by people who have run the projects and fixed the war rooms. {COURSES.length} courses, 30 hours each, real labs, zero fluff.</p>
            <div className="cta">
              <Link className="btn primary" href="/courses">Browse courses</Link>
              <Link className="btn" href="/contact?type=demo#talk">Book a free demo</Link>
            </div>
            <p className="hero-proof"><b>{STUDENTS}</b> students trained across the world in IAM platforms</p>
          </div>
          <Chamber />
        </div>
      </section>

      <StudentsStat />

      <section className="band" id="courses">
        <div className="wrap">
          <div className="sec-head">
            <h2>Courses for the platforms you actually run</h2>
            <p>One course per technology, from the first login to architecture and tuning. Every module ends in a lab, not a slide.</p>
          </div>
          <div className="plat-cards">
            {FEATURED.map((s) => <CourseCard key={s} course={bySlug(s)} logo={logos[s]} />)}
          </div>
          <p className="more"><Link href="/courses">All {COURSES.length} courses →</Link></p>
        </div>
      </section>

      <CompanyMarquee />

      <section className="band" id="how">
        <div className="wrap">
          <div className="sec-head">
            <h2>How learning works</h2>
            <p>The same rhythm in every 30-hour course, so you always know what comes next.</p>
          </div>
          <ol className="steps">
            <li><h3>Learn</h3><p>Instructor-led sessions with a cheat sheet per module and a real-world scenario solved step by step.</p></li>
            <li><h3>Lab</h3><p>Hands-on exercises in a prepared environment, with a step-by-step guide and a worked solution.</p></li>
            <li><h3>Build</h3><p>An end-to-end capstone project, reviewed by an instructor who has done it for real.</p></li>
            <li><h3>Apply</h3><p>Interview-ready skills: you leave able to configure, troubleshoot and explain the platform.</p></li>
          </ol>
        </div>
      </section>

      <Testimonials />

      <section className="band" id="paths">
        <div className="wrap">
          <div className="sec-head">
            <h2>Learning paths</h2>
            <p>Courses grouped into tracks, in the order a real project needs them.</p>
          </div>
          <div className="services">
            {PATHS.map((p) => (
              <article className="svc" key={p.name}><span className="k">{p.tag}</span><h3>{p.name}</h3><p>{p.text}</p></article>
            ))}
          </div>
          <p className="more"><Link href="/learning-paths">All learning paths →</Link></p>
        </div>
      </section>

      <section className="band" id="about">
        <div className="wrap about">
          <div>
            <div className="eyebrow">Who teaches</div>
            <h2 style={{ marginTop: 'var(--s4)' }}>Nerds, on purpose</h2>
          </div>
          <div>
            <p>IAMNerds courses are built by an IAM/IGA architect with more than 18 years of hands-on enterprise identity projects, from greenfield rollouts to rescuing implementations that had stalled.</p>
            <p>So the labs look like real projects: messy HR feeds, slow job queues, audit findings and service accounts nobody owns.</p>
            <div className="facts" style={{ marginTop: 'var(--s6)' }}>
              <div className="fact"><div className="n">18+</div><div className="l">years in enterprise IAM</div></div>
              <div className="fact"><div className="n">{STUDENTS}</div><div className="l">students trained worldwide</div></div>
              <div className="fact"><div className="n">{COURSES.length}</div><div className="l">IAM courses</div></div>
              <div className="fact"><div className="n">30 h</div><div className="l">per course</div></div>
            </div>
          </div>
          <div className="more more-row"><Link href="/about">More about IAMNerds →</Link><LinkedInButton /></div>
        </div>
      </section>

      <CtaBand title="Ready to start?" text="Book a free demo session, meet the instructor and see the labs before you register." href="/contact?type=demo#talk" label="Book a free demo" />
    </>
  );
}

export function getStaticProps() {
  return { props: { logos: logoMap(COURSES.map((c) => c.slug)) } };
}
