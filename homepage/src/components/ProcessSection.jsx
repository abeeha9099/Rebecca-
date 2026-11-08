import { links, steps } from '../data/content.js';
import { Button, Reveal } from './ui.jsx';

export default function ProcessSection() {
  return (
    <section className="how" aria-labelledby="how-title">
      <Reveal className="how__intro">
        <h2 id="how-title">How to Get Started</h2>
        <p>If you&rsquo;re not sure where to begin, that&rsquo;s okay. Simply tell the firm a little about your situation.</p>
      </Reveal>

      <ol className="how__list">
        {steps.map((step, index) => (
          <Reveal as="li" key={step.title} delay={index * 0.07} className="how__step">
            <span className="how__num" aria-hidden="true">{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </Reveal>
        ))}
      </ol>

      <Reveal className="how__cta">
        <Button href={links.contact}>Schedule a Consultation</Button>
      </Reveal>
    </section>
  );
}
