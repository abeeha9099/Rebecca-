import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { links, phones } from '../data/content.js';
import { ease } from './ui.jsx';

// Appears once the hero's own call and consultation buttons have scrolled away.
export default function MobileCallBar() {
  const [show, setShow] = useState(false);
  const [sheet, setSheet] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > 560;
      setShow(past);
      if (!past) setSheet(false);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="callbar"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.3, ease }}
        >
          {sheet && (
            <ul id="call-sheet" className="callbar__sheet">
              {phones.map((phone) => (
                <li key={phone.office}><a href={phone.href}><span>{phone.office}</span>{phone.display}</a></li>
              ))}
            </ul>
          )}
          <div className="callbar__row">
            <button type="button" className="btn btn--outline" aria-expanded={sheet} aria-controls="call-sheet" onClick={() => setSheet((value) => !value)}>
              <Phone size={18} strokeWidth={1.75} aria-hidden="true" />
              <span className="btn__label">Call</span>
            </button>
            <a className="btn btn--primary" href={links.contact}><span className="btn__label">Schedule a Consultation</span></a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
