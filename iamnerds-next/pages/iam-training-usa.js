import MarketPage from '../lib/MarketPage';
import { COURSES } from '../lib/data';
import { logoMap } from '../lib/logos';

const M = {
  path: '/iam-training-usa',
  lang: 'en-US',
  country: 'United States',
  crumb: 'IAM training in the USA',
  title: 'IAM Training in the USA: SailPoint, Okta, Entra ID, CyberArk Online Courses | IAMNerds',
  description: 'Online Identity & Access Management training for learners in the United States: SailPoint, Saviynt, One Identity Manager, Okta, Microsoft Entra ID, Ping Identity, CyberArk and more. US-friendly batch timings, free demo.',
  eyebrow: 'IAM training in the USA',
  h1: 'IAM training in the USA,',
  h1em: 'on your time zone.',
  lede: 'Live, hands-on online training for Identity & Access Management platforms, for learners across the United States, from New York and Dallas to Chicago and the Bay Area. Batch timings arranged for US time zones, with fees shown in US dollars.',
  points: [
    ['US TIME ZONES', 'Evening and weekend sessions', 'New batches every month. Tell us your time zone (ET, CT, MT or PT) and we arrange a batch that fits.'],
    ['FEES IN USD', 'Clear course fees', 'Every course shows its fee in US dollars alongside rupees, from about $219, with card payment options shared when you register.'],
    ['PRACTITIONER-LED', 'Real project experience', 'Courses built by an IAM/IGA architect with 18+ years of enterprise projects, with labs that mirror real US and global deployments.'],
  ],
  coursesHeading: 'IAM courses for learners in the USA',
  faq: [
    ['Can I join from the United States?', 'Yes. All courses are online and live. We schedule batches for US time zones based on demand, so tell us your time zone when you enquire.'],
    ['Do you offer Okta, SailPoint and CyberArk training in the USA?', 'Yes, along with Saviynt, One Identity Manager, Omada, Microsoft Entra ID, Active Directory, Ping Identity, OneLogin, BeyondTrust and SAP Cloud Identity Services.'],
    ['How do I pay from the USA?', 'Fees are shown in US dollars. We share secure international card payment options when you register; your bank may apply its own foreign transaction fee.'],
    ['Will this help with US IAM job interviews?', 'Every course includes interview-style scenarios and a capstone project, and our blog has interview questions for each major platform.'],
  ],
  ctaTitle: 'Learn IAM from the USA.',
  ctaText: 'Book a free demo session and tell us your time zone. We will match you to a batch.',
};

export default function UsaPage({ logos }) {
  return <MarketPage m={M} logos={logos} />;
}

export function getStaticProps() {
  return { props: { logos: logoMap(COURSES.map((c) => c.slug)) } };
}
