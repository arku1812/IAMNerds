import Link from 'next/link';
import { Seo, Crumbs, CtaBand } from '../../lib/Layout';
import { ARTICLES, isGuide, questionCount, readMinutes } from '../../lib/articles';
import { SITE } from '../../lib/data';

const fmt = (iso) => new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export default function Blog() {
  return (
    <>
      <Seo
        title="IAM Blog: Interview Questions, Guides & Career Tips | IAMNerds"
        description="Practical Identity & Access Management articles from IAMNerds: interview questions, platform guides and career tips for IGA, PAM and access management."
        path="/blog"
        jsonLd={{ '@context': 'https://schema.org', '@type': 'Blog', url: `${SITE}/blog`, name: 'IAMNerds blog', inLanguage: 'en', blogPost: ARTICLES.map((a) => ({ '@type': 'BlogPosting', headline: a.title, url: `${SITE}/blog/${a.slug}`, datePublished: a.date })) }}
      />
      <section className="hero page-hero">
        <div className="wrap">
          <Crumbs items={[['/', 'Home'], ['/blog', 'Blog']]} />
          <div className="eyebrow">Blog</div>
          <h1>Notes from the <em>identity trenches.</em></h1>
          <p className="lede">Interview questions, platform guides and career tips for Identity &amp; Access Management.</p>
        </div>
      </section>
      <section className="band"><div className="wrap">
        {[['Career guides', ARTICLES.filter(isGuide)], ['Interview questions', ARTICLES.filter((a) => !isGuide(a))]].map(([label, list]) => (
          <div className="plat-group blog-group" key={label}>
            <h2>{label}</h2>
            <div className="plat-cards">
              {list.map((a) => (
                <Link className="plat course-card" key={a.slug} href={`/blog/${a.slug}`}>
                  <span className="k">{isGuide(a) ? 'CAREER GUIDE' : `${a.tag} · INTERVIEW PREP`}</span>
                  <h3>{a.title}</h3>
                  <p>{a.description}</p>
                  <span className="meta">{fmt(a.date)} · {isGuide(a) ? `${readMinutes(a)} min read` : `${questionCount(a)} questions`}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div></section>
      <CtaBand title="Prepare with a nerd." text="Our courses include interview-style scenarios in every module." href="/contact?type=demo#talk" label="Book a free demo" />
    </>
  );
}
