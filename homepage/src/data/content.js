// Client content only: every fact here comes from rmfamilylaw.com.
// See CONTENT-INVENTORY.md for sources and open conflicts, and VERIFICATION.md for check results.
const SITE = 'https://rmfamilylaw.com';
const PRACTICE = `${SITE}/fresno-san-diego-family-law-practices`;

export const links = {
  contact: `${SITE}/contact-family-law-attorney/`,
  about: `${SITE}/about-the-firm/`,
  attorney: `${SITE}/fresno-san-diego-family-law-attorney/`,
  practice: `${PRACTICE}/`,
  blog: `${SITE}/divorce-family-law-tips/`,
  testimonials: `${SITE}/fresno-san-diego-family-lawyer-testimonials/`,
  review: `${SITE}/review-our-firm/`,
  privacy: `${SITE}/privacy-policy-2/`,
  resources: `${SITE}/divorce-family-law-tips/fresno-san-diego-divorce-family-law-attorney-areas-we-serve/`,
};

export const phones = [
  { office: 'Fresno', display: '(559) 354-4397', href: 'tel:+15593544397' },
  { office: 'Encinitas', display: '(760) 239-0845', href: 'tel:+17602390845' },
  { office: 'San Diego', display: '(858) 285-4315', href: 'tel:+18582854315' },
];

export const offices = [
  { area: 'Fresno Area', lines: ['2525 Alluvial Ave, Suite 171', 'Clovis, CA 93611'], map: 'https://www.google.com/maps?cid=10429306894541301687' },
  { area: 'San Diego Area', lines: ['2211 Encinitas Blvd.', 'Encinitas, CA 92024'], map: 'https://www.google.com/maps/place/SHAW+FINANCIAL+BUILDING,+2211+Encinitas+Blvd,+Encinitas,+CA+92024/@33.0376047,-117.240423,17z' },
];

export const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/lawofficeofrebeccamedina/' },
  { label: 'Twitter', href: 'https://twitter.com/RMFamilyLaw' },
  { label: 'Instagram', href: 'https://www.instagram.com/law_office_rebecca_medina/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/law-office-of-rebecca-m-medina' },
];

// Navigation labels match the original site.
export const practiceMenu = [
  { label: 'Divorce', href: `${PRACTICE}/divorce-attorney/` },
  { label: 'Spousal Support', href: `${PRACTICE}/spousal-support-services/` },
  { label: 'Child Custody and Visitation (Parenting Plans)', href: `${PRACTICE}/child-custody-attorney/` },
  { label: 'Child Support', href: `${PRACTICE}/child-support-attorney/` },
  { label: 'Paternity Actions', href: `${PRACTICE}/paternity-action-services/` },
  { label: 'Modification of Family Law Order', href: `${PRACTICE}/enforcement-of-family-law-order/` },
  { label: 'Mediation', href: `${PRACTICE}/mediation/` },
  { label: 'FAQ’s About Mediation', href: `${SITE}/divorce-family-law-tips/faqs-about-mediation/` },
  { label: 'Prenuptial Agreements', href: `${SITE}/prenuptial-agreements/` },
  { label: 'Post-Nuptial Agreements', href: `${SITE}/post-nuptial-agreements/` },
  { label: 'Collaborative Divorce', href: `${PRACTICE}/collaborative-divorce/` },
  { label: 'Uncontested Divorce', href: `${PRACTICE}/uncontested-divorce/` },
  { label: 'QDRO', href: `${SITE}/qdro/` },
  { label: 'FAQ’s about QDROs', href: `${SITE}/divorce-family-law-tips/faqs-about-qdros/` },
];

// Same labels, order and sub-items as the original navigation.
export const nav = [
  {
    label: 'Our Firm',
    menu: [
      { label: 'About the Firm', href: links.about },
      { label: 'Rebecca Medina', href: links.attorney },
    ],
  },
  { label: 'Practice Areas', menu: practiceMenu, all: { label: 'All Practice Areas', href: links.practice }, wide: true },
  { label: 'Blog', href: links.blog },
  { label: 'Testimonials', href: links.testimonials },
  {
    label: 'Contact',
    menu: [
      { label: 'Contact Our Offices', href: links.contact },
      { label: 'Fresno & San Diego Helpful Resources', href: links.resources },
    ],
  },
];

export const trust = [
  { title: '10 Best', note: 'American Institute of Family Law Attorneys, 2016' },
  {
    title: 'Rising Star',
    note: 'Super Lawyer, 2015–2016',
    href: 'https://profiles.superlawyers.com/california/clovis/lawyer/rebecca-margaret-medina/9c974323-5b78-48fb-ad20-20944112650b.html',
  },
  { title: 'Wiley W. Manuel', note: 'State Bar of California Award for Pro Bono Services, 2010 & 2015' },
  { title: 'Pro Bono Attorney', note: 'of the Year, Fresno County Bar Association, 2010' },
  { title: 'Client’s Choice', note: 'Avvo, 2012', href: 'https://www.avvo.com/attorneys/93611-ca-rebecca-medina-1844703.html' },
  { title: 'J.D.', note: 'University of the Pacific, McGeorge School of Law, 2008' },
];

export const aboutText =
  'The Law Office of Rebecca M. Medina is committed to helping individuals and families in the greater Fresno and San Diego areas with family law matters. We believe that there is a better way to help our clients, with a healthier and more holistic approach to family transitions.';

export const stats = [
  { value: '2009', label: 'Admitted to the California Bar' },
  { value: '40-Hour', label: 'Family Law Mediation Certificate' },
  { value: '2', label: 'Office Areas, Fresno and San Diego' },
];

export const featuredPractice = [
  {
    key: 'collaborative',
    title: 'Collaborative Divorce',
    text: 'A court-free way of getting divorced, working with a team of professionals to settle all aspects by written agreement.',
    href: `${PRACTICE}/collaborative-divorce/`,
  },
  {
    key: 'mediation',
    title: 'Mediation',
    text: 'You and your spouse or partner reach an agreement with the help of a trained mediator without going to Court.',
    href: `${PRACTICE}/mediation/`,
  },
  {
    key: 'divorce',
    title: 'Divorce',
    text: 'Going to Court is not the only way to get a divorce. You have alternative choices.',
    href: `${PRACTICE}/divorce-attorney/`,
  },
  {
    key: 'custody',
    title: 'Child Custody and Visitation',
    text: 'Your children are your number one priority, and any decision involving them should not be taken lightly.',
    href: `${PRACTICE}/child-custody-attorney/`,
  },
];

export const morePractice = [
  { label: 'Child Support', href: `${PRACTICE}/child-support-attorney/` },
  { label: 'Spousal Support', href: `${PRACTICE}/spousal-support-services/` },
  // The original "Property Division" card has a placeholder link, so this routes to contact.
  { label: 'Property Division', href: links.contact },
  { label: 'Family Law Order Modification', href: `${PRACTICE}/enforcement-of-family-law-order/` },
  { label: 'Prenuptial Agreements', href: `${SITE}/prenuptial-agreements/` },
  { label: 'Post-Nuptial Agreements', href: `${SITE}/post-nuptial-agreements/` },
  { label: 'Uncontested Divorce', href: `${PRACTICE}/uncontested-divorce/` },
  { label: 'Paternity Actions', href: `${PRACTICE}/paternity-action-services/` },
  { label: 'QDRO', href: `${SITE}/qdro/` },
];

export const reasons = [
  {
    title: 'A Better Way Than Litigation',
    text: 'Processes based on negotiation and compromise, empowering clients to keep control over the decisions in their family law matter.',
  },
  {
    title: 'Mediator and Collaborative Attorney',
    text: 'Holds a 40-hour certificate in family law mediation and completed basic interdisciplinary collaborative training.',
  },
  {
    title: 'Honest, Direct, Committed',
    text: 'Rebecca’s philosophy is to be honest, direct, and committed toward helping her clients resolve their family matters.',
  },
];

export const steps = [
  { title: 'Contact the office nearest you.', text: 'Call Fresno, Encinitas or San Diego, or complete the contact form.' },
  { title: 'Share a brief summary of your legal needs.', text: 'If you’re unsure which option fits, that’s completely okay. The firm will help you explore your options.' },
  { title: 'Your information is reviewed.', text: 'The firm reviews whether your matter is a good fit and completes an initial conflict check before scheduling a consultation.' },
  { title: 'Receive your options for scheduling a consultation.', text: 'You will receive additional information about services, resources, and available options for scheduling.' },
];

// Verbatim excerpts from the firm's testimonials page. `lead` and `rest` are one continuous passage.
export const testimonials = [
  { lead: 'The communication was great,', rest: ' I was well informed of all the steps and knew the status of my case at all times.', name: 'Bianca P.' },
  { lead: 'I was truly stressing about getting my case started.', rest: ' I was referred to Rebecca and all my stress went away.', name: 'Joseph F.' },
  { lead: 'Rebecca doesn’t just take on your case', rest: ' but also cares about you as a person.', name: 'Sara M.' },
  { lead: 'You know right away that she is not just out to bill you as many hours as she can,', rest: ' but she wants you to understand your issue(s) and provide honest feedback regarding your options.', name: 'Richard' },
  { lead: 'She was also very truthful with me', rest: ' and never made any empty promises and was very straight with me from the beginning on what’s realistic.', name: 'Gregg W.' },
];
