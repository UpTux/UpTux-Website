'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { Icon } from './Icon';
import { ui } from '@/lib/i18n';
import { langs, pageFromPath, pathOf, paths, type Lang, type PageId } from '@/lib/paths';

const navIds = ['services', 'retrofit', 'products', 'about'] as const;
const productIds: PageId[] = ['products', 'cloudplc', 'damper', 'asammdf'];

function isActive(pageId: PageId | undefined, navId: PageId) {
  return pageId === navId || (navId === 'products' && !!pageId && (productIds.includes(pageId) || pageId.startsWith('product:')));
}

export function Header({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const page = pageFromPath(usePathname());
  const t = ui[lang];
  // The language switch leads to the same page in the other language.
  const alternates = page ? paths[page.id] : paths.home;
  return (
    <header className={`site-header${open ? ' is-open' : ''}`}>
      <div className="container header-inner">
        <Link href={pathOf('home', lang)} className="header-logo" aria-label={t.homeLabel}>
          <Logo id="hdr" />
        </Link>
        <nav id="main-nav" className="main-nav" aria-label={t.mainNav}>
          {navIds.map((id) => (
            <Link key={id} href={pathOf(id, lang)} aria-current={isActive(page?.id, id) ? 'page' : undefined} onClick={() => setOpen(false)}>
              {t.nav[id]}
            </Link>
          ))}
          <Link href={pathOf('contact', lang)} className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>{t.cta}</Link>
        </nav>
        <nav className="lang-switch" aria-label={t.langLabel}>
          {langs.map((l) => (
            <Link key={l} href={alternates[l]} hrefLang={l} lang={l} aria-current={l === lang ? 'true' : undefined} title={l === 'de' ? 'Deutsch' : 'English'}>
              {l.toUpperCase()}
            </Link>
          ))}
        </nav>
        <button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} />
          <span className="sr-only">{t.menu}</span>
        </button>
      </div>
    </header>
  );
}
