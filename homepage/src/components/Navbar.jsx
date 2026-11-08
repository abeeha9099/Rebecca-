import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { links, nav, phones } from '../data/content.js';
import { ease } from './ui.jsx';

const menuId = (label) => `${label.toLowerCase().replace(/\s+/g, '-')}-menu`;

function NavDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const wrap = useRef(null);
  const button = useRef(null);
  const id = menuId(item.label);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        button.current?.focus();
      }
    };
    const onPointer = (event) => {
      if (!wrap.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  return (
    <li
      className="nav-drop"
      ref={wrap}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(event) => {
        if (!wrap.current?.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={button}
        type="button"
        className="nav-link"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
      >
        {item.label}
        <ChevronDown size={16} strokeWidth={1.75} className={open ? 'chev chev--open' : 'chev'} aria-hidden="true" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={id}
            className={item.wide ? 'nav-drop__panel nav-drop__panel--wide' : 'nav-drop__panel'}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease }}
          >
            <ul>
              {item.menu.map((sub) => (
                <li key={sub.label}><a href={sub.href}>{sub.label}</a></li>
              ))}
            </ul>
            {item.all && <a className="nav-drop__all" href={item.all.href}>{item.all.label}</a>}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function MobileGroup({ item, onNavigate }) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <button type="button" className="mobile-menu__link" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        {item.label}
        <ChevronDown size={20} strokeWidth={1.5} className={open ? 'chev chev--open' : 'chev'} aria-hidden="true" />
      </button>
      {open && (
        <ul className="mobile-menu__sub">
          {item.menu.map((sub) => (
            <li key={sub.label}><a href={sub.href} onClick={onNavigate}>{sub.label}</a></li>
          ))}
          {item.all && <li><a href={item.all.href} onClick={onNavigate}>{item.all.label}</a></li>}
        </ul>
      )}
    </li>
  );
}

export default function Navbar() {
  const [stuck, setStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = useRef(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className={stuck ? 'header header--stuck' : 'header'}>
      <div className="header__row">
        <a className="header__logo" href="#main" aria-label="Law Office of Rebecca Medina, home">
          <img src="./images/logo-258.png" srcSet="./images/logo-258.png 258w, ./images/logo-516.png 516w, ./images/logo-640.png 640w" sizes="(min-width: 1140px) 258px, (min-width: 1024px) 202px, 210px" width="258" height="64" alt="" />
        </a>

        <nav className="header__nav" aria-label="Primary">
          <ul>
            {nav.map((item) =>
              item.menu ? (
                <NavDropdown key={item.label} item={item} />
              ) : (
                <li key={item.label}><a className="nav-link" href={item.href}>{item.label}</a></li>
              ),
            )}
          </ul>
        </nav>

        <div className="header__actions">
          <a className="header__phone" href={phones[0].href}>
            <Phone size={16} strokeWidth={1.75} aria-hidden="true" />
            {phones[0].display}
          </a>
          <a className="btn btn--primary btn--sm header__cta" href={links.contact}>
            <span className="btn__label">Schedule a Consultation</span>
          </a>
          <button
            ref={toggle}
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={26} strokeWidth={1.5} aria-hidden="true" /> : <Menu size={26} strokeWidth={1.5} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease }}
          >
            <ul>
              {nav.map((item) =>
                item.menu ? (
                  <MobileGroup key={item.label} item={item} onNavigate={() => setMenuOpen(false)} />
                ) : (
                  <li key={item.label}>
                    <a className="mobile-menu__link" href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
                  </li>
                ),
              )}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
