import Link from 'next/link';
import { Seo, Crumbs } from '../lib/Layout';
import { EMAIL, SITE } from '../lib/data';

const UPDATED = '31 October 2026';

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms and Conditions | IAMNerds"
        description="Terms and Conditions for using the IAMNerds website and enrolling in IAMNerds Identity & Access Management courses."
        path="/terms"
        jsonLd={{ '@context': 'https://schema.org', '@type': 'WebPage', url: `${SITE}/terms`, name: 'Terms and Conditions | IAMNerds', inLanguage: 'en' }}
      />
      <section className="hero page-hero">
        <div className="wrap">
          <Crumbs items={[['/', 'Home'], ['/terms', 'Terms and Conditions']]} />
          <div className="eyebrow">Legal</div>
          <h1>Terms and <em>conditions.</em></h1>
          <p className="lede">Last updated: {UPDATED}. Please read these terms before using this website or enrolling in a course.</p>
        </div>
      </section>

      <section className="band"><div className="wrap legal">
        <h2>1. About these terms</h2>
        <p>These Terms and Conditions (&ldquo;Terms&rdquo;) apply to your use of iamnerds.io and to all courses, live sessions, labs and materials provided by IAMNerds (&ldquo;we&rdquo;, &ldquo;us&rdquo;), operated from Hyderabad, India. By using the website or enrolling in a course, you agree to these Terms and to our <Link href="/privacy-policy">Privacy policy</Link>.</p>

        <h2>2. Courses and batches</h2>
        <ul>
          <li>Courses are delivered online in batches. Course content, schedules and instructors are described on each course page and confirmed when you register.</li>
          <li>We may adjust batch dates, timings, session order or instructors for operational reasons. We will inform registered learners of material changes in advance.</li>
          <li>Course descriptions and module lists describe the planned content; individual sessions may be updated to reflect product changes by the vendor.</li>
        </ul>

        <h2>3. Eligibility and registration</h2>
        <ul>
          <li>You must be at least 18 years old, or have the consent of a parent or lawful guardian, to enrol.</li>
          <li>You must provide accurate details when registering and keep them up to date.</li>
          <li>Your enrolment is personal. Access to sessions, recordings, labs and materials may not be shared with or transferred to anyone else without our written consent.</li>
        </ul>

        <h2>4. Fees and payment</h2>
        <p>Course fees, applicable taxes and payment terms are communicated to you before registration and confirmed on your invoice. Your seat in a batch is confirmed once payment is received. Any cancellation or transfer terms that apply to your batch are stated in your registration confirmation.</p>

        <h2>5. Course materials and intellectual property</h2>
        <ul>
          <li>All course content, including videos, slides, lab guides, cheat sheets, quizzes and recordings, is owned by or licensed to IAMNerds and is protected by copyright.</li>
          <li>You receive a personal, non-transferable licence to use the materials for your own learning.</li>
          <li>You may not copy, record, resell, publish, share or upload course materials or session recordings, in whole or in part, without our written permission.</li>
        </ul>

        <h2>6. Lab environments</h2>
        <ul>
          <li>Lab environments are provided for training only. Do not store real personal data, production credentials or confidential company information in them.</li>
          <li>Do not attempt to misuse, overload or gain unauthorised access to lab systems or to other learners&apos; data.</li>
          <li>Labs that rely on vendor trial or developer tenants are subject to that vendor&apos;s terms, and may change or become unavailable at the vendor&apos;s discretion.</li>
        </ul>

        <h2>7. Learner conduct</h2>
        <p>Be respectful to instructors and fellow learners. We may suspend or end access, without refund, for harassment, sharing course materials, disrupting sessions or misusing labs.</p>

        <h2>8. Trademarks and independence</h2>
        <p>IAMNerds provides independent training. Vendor and product names, such as One Identity, SailPoint, Omada, Saviynt, SAP, Microsoft, Okta, Ping Identity, CyberArk and BeyondTrust, are trademarks of their respective owners. IAMNerds is not affiliated with, endorsed by or sponsored by these vendors, and our courses are not official vendor training or certification.</p>

        <h2>9. No guarantee of employment</h2>
        <p>Our courses are designed to build practical skills. Completing a course does not guarantee employment, a job offer, a promotion or a particular salary. Company names shown on this website indicate where learners have worked or work; they do not imply any partnership with or endorsement by those companies.</p>

        <h2>10. Disclaimer and limitation of liability</h2>
        <p>The website and course materials are provided for educational purposes on an &ldquo;as is&rdquo; basis. Configurations shown in training should be reviewed and tested before use in any production system. To the extent permitted by law, IAMNerds is not liable for indirect or consequential losses, and our total liability for any claim relating to a course is limited to the fees you paid for that course.</p>

        <h2>11. Third-party services</h2>
        <p>The website links to or uses third-party services such as WhatsApp, LinkedIn and Google reCAPTCHA. Their use is governed by those providers&apos; own terms and policies.</p>

        <h2>12. Changes to these terms</h2>
        <p>We may update these Terms from time to time. The latest version is always on this page with its &ldquo;last updated&rdquo; date. Terms in force when you registered apply to that batch.</p>

        <h2>13. Governing law and jurisdiction</h2>
        <p>These Terms are governed by the laws of India. Subject to applicable consumer protection law, the courts at Hyderabad, Telangana have exclusive jurisdiction over any dispute arising from these Terms or our courses.</p>

        <h2>14. Contact</h2>
        <p>
          IAMNerds<br />
          Hyderabad, India<br />
          Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </div></section>
    </>
  );
}
