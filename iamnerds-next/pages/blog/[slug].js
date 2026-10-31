import Link from 'next/link';
import { Seo, Crumbs } from '../../lib/Layout';
import { ARTICLES, articleBySlug } from '../../lib/articles';
import { SITE, bySlug } from '../../lib/data';
import { demoHref } from '../../lib/Batches';

const fmt = (iso) => new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const anchor = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function Article({ slug }) {
  const a = articleBySlug(slug);
  const c = bySlug(a.course);
  const path = `/blog/${a.slug}`;
  const count = a.sections.reduce((n, s) => n + s.qa.length, 0);
  let i = 0;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', headline: a.title, description: a.description, datePublished: a.date, dateModified: a.date, url: SITE + path, inLanguage: 'en', author: { '@type': 'Organization', name: 'IAMNerds', url: `${SITE}/` }, publisher: { '@type': 'Organization', name: 'IAMNerds', logo: { '@type': 'ImageObject', url: `${SITE}/icon-512.png` } }, image: `${SITE}/og.png` },
      { '@type': 'FAQPage', mainEntity: a.sections.flatMap((s) => s.qa.map(([q, ans]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: ans } }))) },
      { '@type': 'BreadcrumbList', itemListElement: [['/', 'Home'], ['/blog', 'Blog'], [path, a.short]].map(([h, t], n) => ({ '@type': 'ListItem', position: n + 1, name: t, item: SITE + h })) },
    ],
  };
  return (
    <>
      <Seo title={`${a.title} | IAMNerds`} description={a.description} path={path} jsonLd={jsonLd} />
      <section className="hero page-hero">
        <div className="wrap">
          <Crumbs items={[['/', 'Home'], ['/blog', 'Blog'], [path, a.short]]} />
          <div className="eyebrow">{a.tag} · Interview prep · {count} questions</div>
          <h1>{a.title}</h1>
          <p className="lede">Updated {fmt(a.date)}</p>
        </div>
      </section>
      <section className="band"><div className="wrap article">
        <div className="article-body">
          {a.intro.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          <nav className="toc" aria-label="Contents">
            <b>Contents</b>
            <ol>{a.sections.map((s) => <li key={s.title}><a href={`#${anchor(s.title)}`}>{s.title}</a></li>)}</ol>
          </nav>
          {a.sections.map((s) => (
            <div key={s.title}>
              <h2 id={anchor(s.title)}>{s.title}</h2>
              {s.qa.map(([q, ans]) => {
                i += 1;
                return (
                  <div className="qa" key={q}>
                    <h3><span className="qn">{String(i).padStart(2, '0')}</span>{q}</h3>
                    <p>{ans}</p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <aside className="article-side">
          <div className="side-card">
            <span className="k">{c.tag} · COURSE</span>
            <h3>{c.title}</h3>
            <p>{c.tagline} 30 hours, {c.modules.length} modules, every module with a lab.</p>
            <Link className="btn primary" href={demoHref(c.title)}>Book a free demo</Link>
            <Link className="btn" href={`/courses/${c.slug}`}>See the curriculum</Link>
          </div>
        </aside>
      </div></section>
    </>
  );
}

export function getStaticPaths() {
  return { paths: ARTICLES.map((a) => ({ params: { slug: a.slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}
