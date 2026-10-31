import { Seo, Crumbs, CtaBand } from '../lib/Layout';
import { SITE } from '../lib/data';

export default function VisionMission() {
  return (
    <>
      <Seo
        title="Our Vision & Mission | IAMNerds"
        description="The vision and mission behind IAMNerds: practical, hands-on Identity & Access Management training for learners worldwide."
        path="/vision-mission"
        jsonLd={{ '@context': 'https://schema.org', '@type': 'WebPage', url: `${SITE}/vision-mission`, name: 'Our Vision & Mission | IAMNerds', inLanguage: 'en' }}
      />
      <section className="hero page-hero">
        <div className="wrap">
          <Crumbs items={[['/', 'Home'], ['/vision-mission', 'Vision & Mission']]} />
          <div className="eyebrow">Vision &amp; Mission</div>
          <h1>Why IAMNerds <em>exists.</em></h1>
          <p className="lede">Identity is the new perimeter, yet good IAM engineers are still hard to find. We want to change that.</p>
        </div>
      </section>

      <section className="band"><div className="wrap">
        <div className="detail-list">
          <article className="detail">
            <span className="k">OUR VISION</span>
            <h2>Every organization secured by people who really understand identity.</h2>
            <p>We see a world where every identity, human or machine, gets exactly the access it needs and nothing more, because the people running IAM platforms know them inside out. Wherever you are, the skills to get there should be within reach.</p>
          </article>
          <article className="detail">
            <span className="k">OUR MISSION</span>
            <h2>Turn learners into job-ready IAM professionals.</h2>
            <p>We teach Identity &amp; Access Management the way it is practised on real projects: hands-on labs, real-world scenarios and instructors with years of enterprise experience, in focused 30-hour courses for the platforms organizations actually run.</p>
          </article>
        </div>
      </div></section>

      <section className="band"><div className="wrap">
        <div className="sec-head"><h2>What we stand for</h2><p>The values behind every course.</p></div>
        <div className="services">
          <article className="svc"><span className="k">PRACTICAL</span><h3>Labs, not slides</h3><p>Every module ends in a hands-on lab, because nobody learned provisioning from a diagram.</p></article>
          <article className="svc"><span className="k">HONEST</span><h3>Real-world scenarios</h3><p>We teach where platforms break and how to fix them, not just the happy path.</p></article>
          <article className="svc"><span className="k">NEUTRAL</span><h3>Vendor-independent</h3><p>Courses for every major platform, so you learn concepts that carry over between products.</p></article>
          <article className="svc"><span className="k">ACCESSIBLE</span><h3>Open to everyone</h3><p>Online training for learners worldwide, from first-time IAM learners to senior engineers.</p></article>
        </div>
      </div></section>
      <CtaBand title="Join the nerds." text="Tell us which course you want and we will share the next batch dates." href="/contact#talk" label="Enquire now" />
    </>
  );
}
