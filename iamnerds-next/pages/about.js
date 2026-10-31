import { Seo, Crumbs, CtaBand } from '../lib/Layout';
import { COURSES, SITE, STUDENTS } from '../lib/data';
import { LinkedInButton } from '../lib/Showcase';

export default function About() {
  return (
    <>
      <Seo
        title="About IAMNerds | IAM Training by Practitioners"
        description="IAMNerds is an online training platform purely for Identity & Access Management technologies, based in India and open to learners worldwide."
        path="/about"
        jsonLd={{ '@context': 'https://schema.org', '@type': 'AboutPage', url: `${SITE}/about`, name: 'About IAMNerds', inLanguage: 'en' }}
      />
      <section className="hero page-hero">
        <div className="wrap">
          <Crumbs items={[['/', 'Home'], ['/about', 'About']]} />
          <div className="eyebrow">About</div>
          <h1>Nerds, <em>on purpose.</em></h1>
          <p className="lede">IAMNerds is an online training platform purely for Identity &amp; Access Management technologies, based in India and open to learners worldwide.</p>
          <div className="cta" style={{ marginTop: 'var(--s5)' }}><LinkedInButton /></div>
        </div>
      </section>

      <section className="band"><div className="wrap about">
        <div><h2>Who teaches</h2></div>
        <div>
          <p>IAMNerds was founded by an IAM/IGA architect with more than 18 years of hands-on enterprise identity projects, from greenfield rollouts to rescuing implementations that had stalled.</p>
          <p>The courses teach what those projects taught: how the platforms really behave, where they break and how to design them so they still work when the auditors arrive.</p>
          <div className="facts" style={{ marginTop: 'var(--s6)' }}>
            <div className="fact"><div className="n">18+</div><div className="l">years in enterprise IAM</div></div>
            <div className="fact"><div className="n">{COURSES.length}</div><div className="l">IAM courses</div></div>
            <div className="fact"><div className="n">{STUDENTS}</div><div className="l">students trained across the world</div></div>
            <div className="fact"><div className="n">0</div><div className="l">orphaned accounts tolerated</div></div>
          </div>
        </div>
      </div></section>

      <section className="band"><div className="wrap">
        <div className="sec-head"><h2>How we teach</h2><p>A few principles behind every course.</p></div>
        <div className="services">
          <article className="svc"><span className="k">NEUTRAL</span><h3>Vendor-neutral</h3><p>Independent courses for every major platform, so you learn the concepts that carry over, not just one product's menus.</p></article>
          <article className="svc"><span className="k">HANDS-ON</span><h3>Labs, not slides</h3><p>Every module ends in a lab in a real environment, with a worked solution when you get stuck.</p></article>
          <article className="svc"><span className="k">REAL</span><h3>Project scenarios</h3><p>Messy HR feeds, slow job queues and audit findings, solved the way they are solved on real projects.</p></article>
          <article className="svc"><span className="k">PROVEN</span><h3>Reviewed capstones</h3><p>Your capstone is reviewed by an instructor who has built the same thing for real clients.</p></article>
        </div>
      </div></section>
      <CtaBand title="Questions about a course?" text="A nerd reads every enquiry personally." href="/contact#talk" label="Enquire now" />
    </>
  );
}
