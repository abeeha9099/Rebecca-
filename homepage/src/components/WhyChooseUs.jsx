import { Handshake, Scale, ShieldCheck } from 'lucide-react';
import { reasons } from '../data/content.js';
import { Reveal } from './ui.jsx';

const icons = [Handshake, Scale, ShieldCheck];

export default function WhyChooseUs() {
  return (
    <section className="why" aria-labelledby="why-title">
      <div className="why__inner">
        <Reveal className="why__photo">
          <img src="./images/contact.webp" width="655" height="363" loading="lazy" decoding="async" alt="Rebecca Medina looking at a laptop with another woman" />
          <p>Legally, financially, and emotionally: helping clients resolve their issues on all levels.</p>
        </Reveal>
        <div className="why__copy">
          <Reveal>
            <h2 id="why-title">Why Families Choose Rebecca Medina</h2>
          </Reveal>
          <ul className="why__list">
            {reasons.map((reason, index) => {
              const Icon = icons[index];
              return (
                <Reveal as="li" key={reason.title} delay={0.08 * index} className="why__item">
                  <Icon size={28} strokeWidth={1.25} aria-hidden="true" />
                  <div>
                    <h3>{reason.title}</h3>
                    <p>{reason.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
