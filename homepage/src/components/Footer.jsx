import { links, offices, phones, practiceMenu } from '../data/content.js';

const firmLinks = [
  { label: 'About the Firm', href: links.about },
  { label: 'Rebecca Medina', href: links.attorney },
  { label: 'Blog', href: links.blog },
  { label: 'Testimonials', href: links.testimonials },
  { label: 'Review Our Firm', href: links.review },
  { label: 'Contact Our Offices', href: links.contact },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <img src="./images/logo-258.png" srcSet="./images/logo-258.png 258w, ./images/logo-516.png 516w, ./images/logo-640.png 640w" sizes="258px" width="258" height="64" loading="lazy" alt="Law Office of Rebecca Medina, A Professional Law Corporation" />
        </div>

        <nav aria-label="Firm">
          <h2>Our Firm</h2>
          <ul>{firmLinks.map((item) => <li key={item.label}><a href={item.href}>{item.label}</a></li>)}</ul>
        </nav>

        <nav aria-label="Practice areas">
          <h2>Practice Areas</h2>
          <ul>{practiceMenu.filter((item) => !item.label.startsWith('FAQ')).slice(0, 6).map((item) => <li key={item.label}><a href={item.href}>{item.label.replace(' (Parenting Plans)', '')}</a></li>)}</ul>
        </nav>

        <div>
          <h2>Offices</h2>
          {offices.map((office) => (
            <address key={office.area}>
              <strong>{office.area}</strong>
              <a href={office.map} rel="noreferrer">{office.lines[0]}<br />{office.lines[1]}</a>
            </address>
          ))}
          <ul className="footer__phones">
            {phones.map((phone) => <li key={phone.office}><span>{phone.office}</span><a href={phone.href}>{phone.display}</a></li>)}
          </ul>
        </div>
      </div>

      <div className="footer__legal">
        <p>&copy; {new Date().getFullYear()} Law Office of Rebecca M. Medina, PLC. All Rights Reserved.</p>
        <p>Submitting a form does not create an attorney-client relationship.</p>
        <a href={links.privacy}>Privacy Policy</a>
      </div>
    </footer>
  );
}
