import { socials } from '../data/content.js';

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round' };

const icons = {
  Facebook: <path {...stroke} d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  Twitter: <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
  Instagram: (
    <g {...stroke}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </g>
  ),
  LinkedIn: (
    <g {...stroke}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </g>
  ),
};

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`social-links ${className}`}>
      {socials.map((social) => (
        <li key={social.label}>
          <a href={social.href} rel="noreferrer" aria-label={`Law Office of Rebecca Medina on ${social.label}`}>
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">{icons[social.label]}</svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
