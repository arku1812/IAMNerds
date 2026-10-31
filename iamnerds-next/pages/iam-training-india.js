import MarketPage from '../lib/MarketPage';
import { COURSES } from '../lib/data';
import { logoMap } from '../lib/logos';

const M = {
  path: '/iam-training-india',
  lang: 'en-IN',
  country: 'India',
  crumb: 'IAM training in India',
  title: 'IAM Training in India: SailPoint, One Identity, Okta, CyberArk Online Courses | IAMNerds',
  description: 'Online Identity & Access Management training for learners in India: SailPoint, One Identity Manager, Saviynt, Omada, Entra ID, Okta, CyberArk and more. Live batches in IST, fees in INR, free demo.',
  eyebrow: 'IAM training in India',
  h1: 'IAM training in India,',
  h1em: 'live in IST.',
  lede: 'Hands-on online training for Identity & Access Management platforms, from Hyderabad to learners across India: Bengaluru, Pune, Chennai, Hyderabad, Noida, Gurugram, Mumbai and beyond. Weekday and weekend batches in IST, fees in Indian rupees.',
  points: [
    ['IST BATCHES', 'Weekday and weekend timings', 'New batches every month, scheduled in Indian Standard Time around working hours.'],
    ['FEES IN INR', 'Clear course fees', 'Every course shows its fee in rupees, from ₹19,999, with payment options shared when you register.'],
    ['JOB-READY', 'Built for IAM roles in India', 'Labs and interview preparation for the IGA, access management and PAM roles that Indian IT services and product companies hire for.'],
  ],
  coursesHeading: 'IAM courses for learners in India',
  faq: [
    ['Do you offer SailPoint, Saviynt and One Identity Manager training in India?', 'Yes. All IAMNerds courses run online with live batches in IST, so you can join from any city in India.'],
    ['What are the batch timings?', 'New batches start every month, with weekday and weekend options in IST. Tell us your preferred timing when you enquire.'],
    ['How do I pay the course fee?', 'Fees are in Indian rupees. We share payment options such as UPI, cards and net banking when you register.'],
    ['Can I attend a demo first?', 'Yes. Book a free demo session to meet the instructor and see how the labs work before you register.'],
  ],
  ctaTitle: 'Start your IAM career in India.',
  ctaText: 'Book a free demo session and get the next IST batch dates for your course.',
};

export default function IndiaPage({ logos }) {
  return <MarketPage m={M} logos={logos} />;
}

export function getStaticProps() {
  return { props: { logos: logoMap(COURSES.map((c) => c.slug)) } };
}
