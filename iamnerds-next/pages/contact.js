import { useRouter } from 'next/router';
import { Seo, Crumbs } from '../lib/Layout';
import ContactForm, { countryList } from '../lib/ContactForm';
import { COURSES, EMAIL, ENQUIRY_TYPES, SITE, WHATSAPP } from '../lib/data';
import { LinkedInButton } from '../lib/Showcase';

export default function Contact({ countries }) {
  const { query, isReady } = useRouter();
  const type = isReady && query.type === 'register' ? ENQUIRY_TYPES[1] : isReady && query.type === 'question' ? ENQUIRY_TYPES[2] : ENQUIRY_TYPES[0];
  const pre = isReady && COURSES.some((c) => c.title === query.course) ? query.course : '';
  return (
    <>
      <Seo
        title="Book a Free Demo | Contact IAMNerds"
        description="Book a free demo session or register for an IAMNerds course batch. Reach us by form, email or WhatsApp."
        path="/contact"
        jsonLd={{ '@context': 'https://schema.org', '@type': 'ContactPage', url: `${SITE}/contact`, name: 'Contact IAMNerds', inLanguage: 'en' }}
      />
      <section className="contact page-contact">
        <div className="wrap"><Crumbs items={[['/', 'Home'], ['/contact', 'Contact']]} /></div>
        <div className="wrap contact-grid">
          <div className="contact-copy">
            <div className="eyebrow">Contact</div>
            <h1 className="contact-h1">Want in? Grab a seat before the <em>access review.</em></h1>
            <p className="contact-lead">Tell us which course you are interested in and we will share the next batch dates and timings. A nerd reads every enquiry personally.</p>
            <div className="ways">
              <a className="btn primary" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
              <LinkedInButton />
              <a className="email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>
          <ContactForm key={pre + type} countries={countries} defaultCourse={pre} defaultType={type} />
        </div>
      </section>
    </>
  );
}

export function getStaticProps() {
  return { props: { countries: countryList() } };
}
