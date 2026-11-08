import { trust } from '../data/content.js';
import { Reveal } from './ui.jsx';

export default function TrustIndicators() {
  return (
    <section className="trust" aria-labelledby="trust-title">
      <h2 id="trust-title" className="sr-only">Awards and credentials</h2>
      <ul className="trust__list">
        {trust.map((item, index) => {
          const content = (
            <>
              <strong>{item.title}</strong>
              <span>{item.note}</span>
            </>
          );
          return (
            <Reveal as="li" key={item.title} className="medal" delay={index * 0.06}>
              {item.href ? <a className="medal__link" href={item.href} rel="noreferrer">{content}</a> : content}
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
