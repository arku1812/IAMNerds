import Link from 'next/link';
import { Seo, Crumbs } from '../lib/Layout';
import { EMAIL, SITE, WHATSAPP } from '../lib/data';

// Placeholders in [square brackets] must be completed before relying on this policy.
const UPDATED = '31 October 2026';

export default function RefundPolicy() {
  return (
    <>
      <Seo
        title="Refund Policy | IAMNerds"
        description="Cancellation, refund and batch transfer rules for IAMNerds Identity & Access Management courses."
        path="/refund-policy"
        jsonLd={{ '@context': 'https://schema.org', '@type': 'WebPage', url: `${SITE}/refund-policy`, name: 'Refund Policy | IAMNerds', inLanguage: 'en' }}
      />
      <section className="hero page-hero">
        <div className="wrap">
          <Crumbs items={[['/', 'Home'], ['/refund-policy', 'Refund policy']]} />
          <div className="eyebrow">Legal</div>
          <h1>Refund <em>policy.</em></h1>
          <p className="lede">Last updated: {UPDATED}. Clear rules for cancellations, refunds and batch transfers, so you know where you stand before you register.</p>
        </div>
      </section>

      <section className="band"><div className="wrap legal">
        <h2>1. Scope</h2>
        <p>This policy applies to all IAMNerds course fees paid by learners or their employers. It is issued by <b>[Legal entity name]</b>, <b>[Registered address, India]</b>, in line with the Consumer Protection Act, 2019 and the Consumer Protection (E-Commerce) Rules, 2020.</p>

        <h2>2. Cancellation by you</h2>
        <table className="legal-table">
          <thead><tr><th scope="col">When you cancel</th><th scope="col">Refund</th></tr></thead>
          <tbody>
            <tr><td>[7] or more days before the batch start date</td><td>Full refund of the course fee</td></tr>
            <tr><td>Less than [7] days before the batch start date, or before the second session</td><td>[50]% of the course fee</td></tr>
            <tr><td>After the second session</td><td>No refund; you can transfer to a later batch once (see section 4)</td></tr>
          </tbody>
        </table>
        <p>Payment gateway charges and taxes already paid to the government, if any, may be deducted where the law allows. [Review these values before publishing.]</p>

        <h2>3. Cancellation or changes by IAMNerds</h2>
        <p>If we cancel a batch, or move its start date by more than [14] days, you can choose a full refund or a free transfer to another batch of the same course.</p>

        <h2>4. Batch transfers</h2>
        <p>You can transfer to a later batch of the same course once, free of charge, if you request it before the [fourth] session of your current batch. Further transfers are at our discretion.</p>

        <h2>5. How to request a refund</h2>
        <p>Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or message us on <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">WhatsApp</a> with your full name, registered email, course, batch and payment reference. We acknowledge refund requests within 48 hours.</p>

        <h2>6. Processing time</h2>
        <p>Approved refunds are paid to the original payment method within [7&ndash;10] business days. Your bank or card issuer may take a few more days to show the credit.</p>

        <h2>7. Non-refundable items</h2>
        <ul>
          <li>Fees for a batch you completed or attended beyond the second session, except as stated in section 3.</li>
          <li>[Any third-party exam vouchers or lab subscriptions bought on your behalf, once issued.]</li>
        </ul>

        <h2>8. Grievances</h2>
        <p>If you are not satisfied with how your refund request was handled, contact our Grievance Officer, <b>[Name]</b>, at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We aim to resolve grievances within one month of receipt.</p>

        <p className="legal-foot">See also our <Link href="/privacy-policy">Privacy policy</Link>.</p>
      </div></section>
    </>
  );
}
