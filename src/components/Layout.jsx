import { useState } from 'react';
import { Logo } from './Logo.jsx';
import { Icon } from './Icon.jsx';
import { href } from '../link.js';
import { site } from '../site.js';
import { pathOf } from '../paths.js';
import { useLang, useT } from '../i18n.js';

const navIds = ['services', 'retrofit', 'products', 'about'];
const productIds = ['products', 'cloudplc', 'damper', 'asammdf'];

function isActive(pageId, navId) {
  return pageId === navId || (navId === 'products' && productIds.includes(pageId));
}

function LangSwitch({ alternates }) {
  const lang = useLang();
  const t = useT();
  return (
    <nav className="lang-switch" aria-label={t.langLabel}>
      {['de', 'en'].map((l) => (
        <a
          key={l}
          href={href(alternates[l])}
          hrefLang={l}
          lang={l}
          aria-current={l === lang ? 'true' : undefined}
          title={l === 'de' ? 'Deutsch' : 'English'}
        >
          {l.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}

export function Header({ pageId, alternates }) {
  const [open, setOpen] = useState(false);
  const lang = useLang();
  const t = useT();
  return (
    <header className={`site-header${open ? ' is-open' : ''}`}>
      <div className="container header-inner">
        <a href={href(pathOf('home', lang))} className="header-logo" aria-label={t.homeLabel}>
          <Logo id="hdr" />
        </a>
        <nav id="main-nav" className="main-nav" aria-label={t.mainNav}>
          {navIds.map((id) => (
            <a key={id} href={href(pathOf(id, lang))} aria-current={isActive(pageId, id) ? 'page' : undefined}>
              {t.nav[id]}
            </a>
          ))}
          <a href={href(pathOf('contact', lang))} className="btn btn-primary btn-sm">{t.cta}</a>
        </nav>
        <LangSwitch alternates={alternates} />
        <button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} />
          <span className="sr-only">{t.menu}</span>
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  const lang = useLang();
  const t = useT();
  const l = (id, anchor) => href(pathOf(id, lang, anchor));
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo id="ftr" />
          <p className="footer-claim">{t.claim}</p>
          <p className="footer-slogan">Get your software right.</p>
        </div>
        <nav aria-label={t.footServices}>
          <h2>{t.footServices}</h2>
          <a href={l('retrofit')}>{t.footLinks.retrofit}</a>
          <a href={l('services', 'data')}>{t.footLinks.data}</a>
          <a href={l('services', 'software')}>{t.footLinks.software}</a>
          <a href={l('vision')}>{t.footLinks.vision}</a>
          <a href={l('pentest')}>{t.footLinks.pentest}</a>
        </nav>
        <nav aria-label={t.footProducts}>
          <h2>{t.footProducts}</h2>
          <a href={l('cloudplc')}>Cloud PLC</a>
          <a href={l('damper')}>{t.footLinks.damper}</a>
          <a href={l('asammdf')}>{t.footLinks.asammdf}</a>
        </nav>
        <div>
          <h2>{t.footContact}</h2>
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
          <a href={l('contact')}>{t.contact}</a>
          <a href={l('imprint')}>{t.imprint}</a>
          <a href={l('privacy')}>{t.privacy}</a>
        </span>
      </div>
    </footer>
  );
}
