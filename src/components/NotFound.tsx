import { PageHero } from '@/components/Blocks';
import Link from 'next/link';

// One 404 page serves both languages, so it speaks both.
export default function NotFound() {
  return (
    <PageHero lang="de"
      eyebrow="Fehler 404 · Error 404"
      title="Diese Seite gibt es nicht (mehr)."
      lead="This page doesn't exist (anymore). Vielleicht hilft Ihnen einer dieser Links weiter."
    >
      <div className="hero-actions">
        <Link className="btn btn-primary" href={'/'}>Zur Startseite</Link>
        <Link className="btn btn-outline" href={'/en/'} hrefLang="en">English homepage</Link>
        <Link className="btn btn-outline" href={'/kontakt/'}>Kontakt</Link>
      </div>
    </PageHero>
  );
}
