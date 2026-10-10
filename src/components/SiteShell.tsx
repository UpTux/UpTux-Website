import type { ReactNode } from 'react';
import '@fontsource-variable/inter';
import '@/app/globals.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { ui } from '@/lib/i18n';
import type { Lang } from '@/lib/paths';

// The <html> document shared by the German and English root layouts.
export function SiteShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang}>
      <body>
        <a className="skip-link" href="#inhalt">{ui[lang].skip}</a>
        <Header lang={lang} />
        <main id="inhalt">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
