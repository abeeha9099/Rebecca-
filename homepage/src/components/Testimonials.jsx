import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { links, testimonials } from '../data/content.js';
import { Reveal, ease } from './ui.jsx';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  const quote = testimonials[index];

  return (
    <section className="voices" aria-labelledby="voices-title">
      <Reveal className="voices__inner">
        <h2 id="voices-title" className="eyebrow">Testimonials</h2>
        <span className="voices__mark" aria-hidden="true">&ldquo;</span>
        <div className="voices__stage" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={quote.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease }}
            >
              <blockquote>{quote.lead}{quote.rest}</blockquote>
              <figcaption>{quote.name}</figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="voices__controls">
          <motion.button whileTap={{ scale: 0.94 }} type="button" className="ctrl" aria-label="Previous testimonial" onClick={() => setIndex((index - 1 + count) % count)}>
            <ArrowLeft size={20} strokeWidth={1.5} aria-hidden="true" />
          </motion.button>
          <span className="voices__count">{index + 1} of {count}</span>
          <motion.button whileTap={{ scale: 0.94 }} type="button" className="ctrl" aria-label="Next testimonial" onClick={() => setIndex((index + 1) % count)}>
            <ArrowRight size={20} strokeWidth={1.5} aria-hidden="true" />
          </motion.button>
        </div>

        <p className="voices__note">
          Testimonials do not guarantee or predict a similar outcome.{' '}
          <a href={links.testimonials}>Read All Testimonials<ArrowUpRight size={14} aria-hidden="true" /></a>
        </p>
      </Reveal>
    </section>
  );
}
