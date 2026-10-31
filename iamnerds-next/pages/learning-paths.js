import Link from 'next/link';
import { Seo, Crumbs, CtaBand } from '../lib/Layout';
import { PATHS, SITE, bySlug } from '../lib/data';

function Step({ step }) {
  const opts = step.split('|');
  return (
    <li>
      {opts.length > 1 && 'One of: '}
      {opts.map((o, i) => (
        <span key={o}>{i > 0 && (i === opts.length - 1 ? ' or ' : ', ')}<Link href={`/courses/${o}`}>{bySlug(o).title}</Link></span>
      ))}
    </li>
  );
}

export default function LearningPaths() {
  return (
    <>
      <Seo
        title="IAM Learning Paths: IGA, SAP Security, Access Management, PAM | IAMNerds"
        description="IAMNerds learning paths: IGA Track, SAP Security Track, Access Management Track and PAM Track, 30 hours per course."
        path="/learning-paths"
        jsonLd={{ '@context': 'https://schema.org', '@type': 'WebPage', url: `${SITE}/learning-paths`, name: 'Learning paths | IAMNerds', inLanguage: 'en' }}
      />
      <section className="hero page-hero">
        <div className="wrap">
          <Crumbs items={[['/', 'Home'], ['/learning-paths', 'Learning paths']]} />
          <div className="eyebrow">Learning paths</div>
          <h1>Pick a track, <em>then go deep.</em></h1>
          <p className="lede">Each track bundles courses in the order a real project needs them. Every course is 30 hours with hands-on labs.</p>
        </div>
      </section>

      <section className="band"><div className="wrap">
        <div className="phases">
          {PATHS.map((p, i) => (
            <article className="phase" key={p.name}>
              <div className="n">0{i + 1}</div>
              <div>
                <h2>{p.name}</h2>
                <p>{p.text}</p>
                <h3>Courses, in order · {p.steps.length * 30} hours</h3>
                <ol className="path-list">{p.steps.map((s) => <Step key={s} step={s} />)}</ol>
              </div>
            </article>
          ))}
        </div>
      </div></section>
      <CtaBand title="Training a team?" text="We put together tracks, labs and sessions for whole teams." href="/contact#talk" label="Enquire now" />
    </>
  );
}
