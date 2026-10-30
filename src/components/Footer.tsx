import Link from 'next/link';
import { Logo } from './Logo';
import { site } from '@/lib/site';
import { ui } from '@/lib/i18n';
import { pathOf, type Lang, type PageId } from '@/lib/paths';

export function Footer({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const l = (id: PageId, anchor?: string) => pathOf(id, lang, anchor);
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
          <Link href={l('retrofit')}>{t.footLinks.retrofit}</Link>
          <Link href={l('services', 'data')}>{t.footLinks.data}</Link>
          <Link href={l('services', 'software')}>{t.footLinks.software}</Link>
          <Link href={l('vision')}>{t.footLinks.vision}</Link>
          <Link href={l('pentest')}>{t.footLinks.pentest}</Link>
          <Link href={l('localai')}>{t.footLinks.localai}</Link>
          <Link href={l('cra')}>{t.footLinks.cra}</Link>
        </nav>
        <nav aria-label={t.footProducts}>
          <h2>{t.footProducts}</h2>
          <Link href={l('cloudplc')}>Cloud PLC</Link>
          <Link href={l('product:opc-ua-stack')}>OPC UA Stack</Link>
          <Link href={l('product:adsify')}>Adsify</Link>
          <Link href={l('product:openec-diagnostics')}>OpenEC Diagnostics</Link>
          <Link href={l('products')}>{t.footLinks.all} →</Link>
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
          <Link href={l('contact')}>{t.contact}</Link>
          <Link href={l('imprint')}>{t.imprint}</Link>
          <Link href={l('privacy')}>{t.privacy}</Link>
          <Link href={l('osscompliance')}>{t.osscompliance}</Link>
        </span>
      </div>
    </footer>
  );
}
