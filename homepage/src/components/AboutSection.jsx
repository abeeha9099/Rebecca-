import { aboutText, links, stats } from '../data/content.js';
import { Button, Reveal } from './ui.jsx';

export default function AboutSection() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__inner">
        <Reveal className="about__photo">
          <img src="./images/office.webp" width="1000" height="750" loading="lazy" decoding="async" alt="Rebecca Medina reviewing documents across a desk in her office" />
        </Reveal>
        <Reveal className="about__copy" delay={0.1}>
          <p className="eyebrow">About the Firm</p>
          <h2 id="about-title">A Healthier, More Holistic Approach to Family Transitions</h2>
          <p className="about__text">{aboutText}</p>
          <Button variant="dark" href={links.about}>About the Firm</Button>
        </Reveal>
      </div>
      <dl className="about__stats">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.08} className="stat">
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
