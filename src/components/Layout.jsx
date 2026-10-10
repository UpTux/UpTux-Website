import { useState } from 'react';
import { Logo } from './Logo.jsx';
import { Icon } from './Icon.jsx';
import { href } from '../link.js';
import { site } from '../site.js';

const nav = [
  { path: '/leistungen/', label: 'Leistungen' },
  { path: '/retrofit/', label: 'Retrofit' },
  { path: '/produkte/', label: 'Produkte' },
  { path: '/ueber-uns/', label: 'Über uns' },
];

function isActive(current, path) {
  return current === path || (path === '/produkte/' && ['/cloud-plc/', '/damper/', '/asammdf/'].includes(current));
}

export function Header({ path }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={`site-header${open ? ' is-open' : ''}`}>
      <div className="container header-inner">
        <a href={href('/')} className="header-logo" aria-label="UpTux Startseite">
          <Logo id="hdr" />
        </a>
        <button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} />
          <span className="sr-only">Menü</span>
        </button>
        <nav id="main-nav" className="main-nav" aria-label="Hauptnavigation">
          {nav.map((n) => (
            <a key={n.path} href={href(n.path)} aria-current={isActive(path, n.path) ? 'page' : undefined}>
              {n.label}
            </a>
          ))}
          <a href={href('/kontakt/')} className="btn btn-primary btn-sm">Projekt anfragen</a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo id="ftr" />
          <p className="footer-claim">Digitalisierung für den Mittelstand. Aus der Industrie, für die Industrie.</p>
          <p className="footer-slogan">Get your software right.</p>
        </div>
        <nav aria-label="Leistungen">
          <h2>Leistungen</h2>
          <a href={href('/retrofit/')}>Retrofit &amp; Schnittstellen</a>
          <a href={href('/leistungen/#anlagendaten')}>Anlagendaten &amp; Monitoring</a>
          <a href={href('/leistungen/#software')}>Individuelle Software</a>
          <a href={href('/machine-vision/')}>Industrielle Bildverarbeitung</a>
          <a href={href('/penetration-testing/')}>Security &amp; Penetration Testing</a>
        </nav>
        <nav aria-label="Produkte">
          <h2>Produkte</h2>
          <a href={href('/cloud-plc/')}>Cloud PLC</a>
          <a href={href('/damper/')}>Damper C++ Bibliothek</a>
          <a href={href('/asammdf/')}>AsamMdf für .NET</a>
        </nav>
        <div>
          <h2>Kontakt</h2>
          <address>
            {site.legalName}<br />
            {site.street}<br />
            {site.zip} {site.city}<br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </address>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {site.copyrightFrom}–{new Date().getFullYear()} {site.legalName}</span>
        <span className="footer-legal">
          <a href={href('/kontakt/')}>Kontakt</a>
          <a href={href('/impressum/')}>Impressum</a>
          <a href={href('/datenschutz/')}>Datenschutz</a>
        </span>
      </div>
    </footer>
  );
}
