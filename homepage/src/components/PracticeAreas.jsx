import { ArrowUpRight, Handshake, House, Scale, Users } from 'lucide-react';
import { featuredPractice, links, morePractice } from '../data/content.js';
import { Button, Reveal } from './ui.jsx';

const icons = { collaborative: Users, mediation: Handshake, divorce: Scale, custody: House };

export default function PracticeAreas() {
  return (
    <section className="practice" id="practice" aria-labelledby="practice-title">
      <div className="practice__panel">
        <span className="practice__glow" aria-hidden="true" />
        <Reveal className="practice__head">
          <h2 id="practice-title">What Kind of Help Do You Need?</h2>
          <p>No matter what your needs are, Rebecca Medina can help.</p>
        </Reveal>

        <div className="practice__grid">
          {featuredPractice.map((item, index) => {
            const Icon = icons[item.key];
            return (
              <Reveal key={item.key} delay={index * 0.06} className="pcard-wrap">
                <a className="pcard" href={item.href}>
                  <Icon className="pcard__icon" size={30} strokeWidth={1.25} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="pcard__go">
                    Learn More
                    <ArrowUpRight size={18} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal as="ul" className="practice__rows">
          {morePractice.map((item) => (
            <li key={item.label}>
              <a href={item.href}>
                {item.label}
                <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </li>
          ))}
        </Reveal>

        <div className="practice__all">
          <Button variant="dark" href={links.practice}>All Practice Areas</Button>
        </div>
      </div>
    </section>
  );
}
