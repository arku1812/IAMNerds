import Link from 'next/link';
import { Seo, Crumbs } from '../lib/Layout';
import { EMAIL, SITE } from '../lib/data';

// Placeholders in [square brackets] must be completed before relying on this policy.
const UPDATED = '31 October 2026';

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy | IAMNerds"
        description="How IAMNerds collects, uses and protects personal data under India's Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000."
        path="/privacy-policy"
        jsonLd={{ '@context': 'https://schema.org', '@type': 'WebPage', url: `${SITE}/privacy-policy`, name: 'Privacy Policy | IAMNerds', inLanguage: 'en' }}
      />
      <section className="hero page-hero">
        <div className="wrap">
          <Crumbs items={[['/', 'Home'], ['/privacy-policy', 'Privacy policy']]} />
          <div className="eyebrow">Legal</div>
          <h1>Privacy <em>policy.</em></h1>
          <p className="lede">Last updated: {UPDATED}. This policy explains what personal data IAMNerds collects, why, and the rights you have under Indian law.</p>
        </div>
      </section>

      <section className="band"><div className="wrap legal">
        <h2>1. Who we are</h2>
        <p>IAMNerds (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is an online training platform for Identity &amp; Access Management technologies, operated by <b>[Legal entity name]</b>, <b>[Registered address, India]</b>. For the purposes of the Digital Personal Data Protection Act, 2023 (&ldquo;DPDP Act&rdquo;), we are the Data Fiduciary for the personal data described in this policy.</p>
        <p>This policy is published in line with the DPDP Act and the Digital Personal Data Protection Rules, 2025, the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Consumer Protection (E-Commerce) Rules, 2020.</p>

        <h2>2. Personal data we collect</h2>
        <table className="legal-table">
          <thead><tr><th scope="col">Data</th><th scope="col">When</th><th scope="col">Purpose</th></tr></thead>
          <tbody>
            <tr><td>Full name, email address, mobile number with country code, company (optional), chosen course, your message (optional)</td><td>When you submit the course enquiry form</td><td>To reply to your enquiry, share batch dates, timings and fees, and register you for a batch</td></tr>
            <tr><td>Messages and your WhatsApp number</td><td>When you contact us on WhatsApp</td><td>To answer your questions about courses and batches</td></tr>
            <tr><td>Registration and payment details (name, contact details, invoice details, payment reference)</td><td>When you register and pay for a batch</td><td>To enrol you, issue invoices, process refunds and meet tax and accounting obligations</td></tr>
            <tr><td>reCAPTCHA signals (such as IP address, browser and device information, interaction data)</td><td>When you use the enquiry form</td><td>To protect the form from spam and automated abuse</td></tr>
            <tr><td>Anonymous usage data (pages viewed, browser type, approximate region)</td><td>When you browse the website</td><td>To understand which pages are useful and keep the site working; no advertising cookies are used</td></tr>
          </tbody>
        </table>
        <p>We do not ask for passwords, financial account details or other sensitive personal data on this website. Card or UPI payments, where offered, are processed by our payment provider, which does not share full card or account details with us.</p>

        <h2>3. Consent and lawful use</h2>
        <p>We process your personal data on the basis of the consent you give when you submit the enquiry form, register for a batch or message us, and for the legitimate uses permitted by Section 7 of the DPDP Act, such as complying with law. You can withdraw consent at any time by writing to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>; withdrawal is as easy as giving consent and does not affect processing that already took place. After withdrawal we stop processing your data unless the law requires us to keep it.</p>

        <h2>4. Who we share data with</h2>
        <p>We do not sell personal data. We share it only with service providers (Data Processors) who help us run IAMNerds, under contracts that require them to protect it:</p>
        <ul>
          <li>Microsoft (Azure website hosting, email and analytics)</li>
          <li>Google (reCAPTCHA spam protection, subject to Google&apos;s privacy policy and terms)</li>
          <li>WhatsApp / Meta (if you choose to contact us on WhatsApp)</li>
          <li>[Payment provider, e.g. Razorpay] (payments and refunds)</li>
          <li>[Learning platform / video meeting provider] (delivering live sessions and course material)</li>
        </ul>
        <p>We may also disclose data where required by law, court order or a government authority.</p>

        <h2>5. Transfers outside India</h2>
        <p>Some of our service providers store or process data outside India, for example in the European Union. Such transfers are made as permitted under Section 16 of the DPDP Act and are not made to any country restricted by the Central Government.</p>

        <h2>6. How long we keep data</h2>
        <ul>
          <li>Enquiries that do not lead to registration: up to [12] months after our last contact, then deleted.</li>
          <li>Registration and payment records: as long as required by tax and accounting laws (generally up to 8 years).</li>
          <li>Anonymous usage data: up to [90] days.</li>
        </ul>
        <p>We erase personal data once the purpose is served and no law requires us to keep it.</p>

        <h2>7. Security</h2>
        <p>We use reasonable security practices, including encrypted connections (HTTPS), access restricted to authorised staff, logging and monitoring, and protection against automated abuse. If a personal data breach occurs, we will inform affected users and the Data Protection Board of India as required by law.</p>

        <h2>8. Your rights</h2>
        <p>Under the DPDP Act you have the right to:</p>
        <ul>
          <li>obtain a summary of the personal data we process about you and the processing activities;</li>
          <li>request correction, completion, updating or erasure of your personal data;</li>
          <li>withdraw your consent at any time;</li>
          <li>have a readily available means of grievance redressal;</li>
          <li>nominate another person to exercise your rights in the event of death or incapacity.</li>
        </ul>
        <p>To use any of these rights, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or contact our Grievance Officer below. We may ask you to verify your identity before acting on a request.</p>

        <h2>9. Children</h2>
        <p>Our courses are intended for adults. We do not knowingly process personal data of anyone under 18 without verifiable consent from a parent or lawful guardian. If you believe a child has sent us personal data, contact us and we will delete it.</p>

        <h2>10. Grievance Officer</h2>
        <p>
          <b>[Name of Grievance Officer]</b><br />
          [Designation], [Legal entity name]<br />
          [Address, India]<br />
          Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a> · Phone: [+91 phone number]
        </p>
        <p>We acknowledge grievances within 48 hours and aim to resolve them within one month of receipt. If you are not satisfied with our response, you may complain to the Data Protection Board of India.</p>

        <h2>11. Changes to this policy</h2>
        <p>We may update this policy from time to time. The latest version is always on this page with its &ldquo;last updated&rdquo; date. Material changes will be highlighted on the website.</p>

        <p className="legal-foot">See also our <Link href="/refund-policy">Refund policy</Link>.</p>
      </div></section>
    </>
  );
}
