import Link from 'next/link';

export default function CourseCard({ course: c }) {
  return (
    <Link className="plat course-card" href={`/courses/${c.slug}`}>
      <span className="k">{c.tag}</span>
      <h3>{c.title}</h3>
      <p>{c.tagline}</p>
      <span className="meta">{c.modules.length} modules · {c.hours} h</span>
    </Link>
  );
}
