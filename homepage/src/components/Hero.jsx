import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { links, phones } from '../data/content.js';
import { Button, ease } from './ui.jsx';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } };
const rise = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } };

const Words = ({ text, className = '' }) =>
  text.split(' ').map((word, index) => (
    <motion.span key={`${word}-${index}`} className={`hero__word ${className}`} variants={rise}>
      {word}{' '}
    </motion.span>
  ));

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <motion.div className="hero__copy" variants={container} initial="hidden" animate="show">
          <motion.p className="eyebrow" variants={rise}>Fresno and San Diego Family Law</motion.p>
          <h1 id="hero-title" className="hero__title">
            <span className="hero__line"><Words text="An Experienced" /></span>
            <span className="hero__line"><Words text="Family Law" /></span>
            <span className="hero__line"><Words text="Attorney and Mediator" className="hero__word--accent" /></span>
          </h1>
          <motion.p className="hero__lede" variants={rise}>
            Select a family law attorney who can help you sort through your situation with compassion and with the goal of guiding you to a better future.
          </motion.p>
          <motion.div className="hero__actions" variants={rise}>
            <Button href={links.contact}>Schedule a Consultation</Button>
            <Button variant="light" href={phones[0].href} icon={Phone}>Call {phones[0].display}</Button>
          </motion.div>
          <motion.p className="hero__served" variants={rise}>Serving San Diego, Fresno, Clovis, and Madera</motion.p>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease }}
        >
          <motion.img
            className="hero__portrait"
            src="./images/portrait.webp"
            srcSet="./images/portrait-640.webp 640w, ./images/portrait.webp 1200w"
            sizes="(max-width: 767px) 100vw, 600px"
            width="1200"
            height="1205"
            fetchPriority="high"
            alt="Rebecca Medina, family law attorney and mediator"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease }}
          />
        </motion.div>
      </div>

      <aside className="hero__offices" aria-label="Call for a consultation">
        <ul>
          {phones.map((phone) => (
            <li key={phone.office}>
              <span>{phone.office}</span>
              <a href={phone.href}>{phone.display}</a>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
