import { PageHero } from '../components/Blocks.jsx';
import { href } from '../link.js';

export default function NotFound() {
  return (
    <PageHero eyebrow="Fehler 404" title="Diese Seite gibt es nicht (mehr)." lead="Vielleicht hilft Ihnen einer dieser Links weiter.">
      <div className="hero-actions">
        <a className="btn btn-primary" href={href('/')}>Zur Startseite</a>
        <a className="btn btn-outline" href={href('/leistungen/')}>Leistungen</a>
        <a className="btn btn-outline" href={href('/kontakt/')}>Kontakt</a>
      </div>
    </PageHero>
  );
}
