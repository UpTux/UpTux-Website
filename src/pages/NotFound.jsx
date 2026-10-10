import { PageHero } from '../components/Blocks.jsx';
import { href } from '../link.js';

// One 404 page serves both languages, so it speaks both.
export default function NotFound() {
  return (
    <PageHero
      eyebrow="Fehler 404 · Error 404"
      title="Diese Seite gibt es nicht (mehr)."
      lead="This page doesn't exist (anymore). Vielleicht hilft Ihnen einer dieser Links weiter."
    >
      <div className="hero-actions">
        <a className="btn btn-primary" href={href('/')}>Zur Startseite</a>
        <a className="btn btn-outline" href={href('/en/')} hrefLang="en">English homepage</a>
        <a className="btn btn-outline" href={href('/kontakt/')}>Kontakt</a>
      </div>
    </PageHero>
  );
}
