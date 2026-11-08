import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const ease = [0.22, 1, 0.36, 1];

// Scroll-triggered reveal. MotionConfig removes the movement for reduced-motion users.
export function Reveal({ as = 'div', delay = 0, y = 24, className, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.8, delay, ease }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function Button({ variant = 'primary', href, icon: Icon = ArrowUpRight, children, className = '', ...rest }) {
  return (
    <motion.a className={`btn btn--${variant} ${className}`} href={href} whileTap={{ scale: 0.97 }} {...rest}>
      <span className="btn__label">{children}</span>
      {Icon && <Icon className="btn__icon" size={18} strokeWidth={1.75} aria-hidden="true" />}
    </motion.a>
  );
}
