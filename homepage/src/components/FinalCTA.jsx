import { Phone } from 'lucide-react';
import { links, phones } from '../data/content.js';
import SocialLinks from './SocialLinks.jsx';
import { Button, Reveal } from './ui.jsx';

export default function FinalCTA() {
  return (
    <section className="final" id="contact" aria-labelledby="final-title">
      <span className="final__glow" aria-hidden="true" />
      <div className="final__inner">
        <Reveal className="final__copy">
          <h2 id="final-title">Contact a Fresno/San Diego County Lawyer Today</h2>
          <p>Family law matters are best resolved with an experienced attorney who knows California statutes and how they may affect your case.</p>
          <Button href={links.contact}>Schedule a Consultation</Button>
        </Reveal>
        <Reveal className="final__phones" delay={0.1}>
          {phones.map((phone) => (
            <a key={phone.office} href={phone.href}>
              <span className="final__office">{phone.office}</span>
              <span className="final__number"><Phone size={18} strokeWidth={1.5} aria-hidden="true" />{phone.display}</span>
            </a>
          ))}
          <SocialLinks className="final__social" />
        </Reveal>
      </div>
    </section>
  );
}
