import Link from 'next/link';
import { TESTIMONIALS, bySlug } from './data';
import { LinkedInIcon } from './Showcase';

// Hidden until TESTIMONIALS in lib/data.js has entries. `course` limits it to one course page.
export default function Testimonials({ course }) {
  const list = TESTIMONIALS.filter((t) => !course || t.course === course);
  if (!list.length) return null;
  return (
    <section className="band" id="testimonials">
      <div className="wrap">
        <div className="sec-head"><h2>What our students say</h2><p>Real words from IAMNerds learners.</p></div>
        <div className="quotes">
          {list.map((t) => {
            const c = t.course && bySlug(t.course);
            return (
              <figure className="quote" key={t.name + (t.course || '')}>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption>
                  <b>{t.name}</b>
                  <span>{[t.role, t.company].filter(Boolean).join(', ')}</span>
                  {c && <Link className="quote-course" href={`/courses/${c.slug}`}>{c.title} course</Link>}
                  {t.linkedin && <a className="quote-li" href={t.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${t.name} on LinkedIn`}><LinkedInIcon size={16} /></a>}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
