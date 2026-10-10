import { PageHero } from '../components/Blocks.jsx';
import { site } from '../site.js';

export default function Impressum() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Impressum' }]} title="Impressum" />
      <section className="section">
        <div className="container narrow prose">
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            {site.legalName}<br />
            {site.street}<br />
            {site.zip} {site.city}
          </p>
          <p>
            <strong>Vertreten durch den Geschäftsführer:</strong><br />
            {site.managingDirector}
          </p>
          <h2>Kontakt</h2>
          <p>
            E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a><br />
            Sicherheitsmeldungen: <a href={`mailto:${site.securityEmail}`}>{site.securityEmail}</a>
          </p>
          <h2>Registereintrag</h2>
          <p>
            Registergericht: {site.court}<br />
            Registernummer: {site.hrb}
          </p>
          <h2>Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: {site.vatId}</p>
          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            {site.contentResponsible.join(', ')}<br />
            {site.street}, {site.zip} {site.city}
          </p>
          <h2>Verbraucherstreitbeilegung</h2>
          <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          <h2>Haftung für Inhalte und Links</h2>
          <p>
            Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
            übernehmen wir jedoch keine Gewähr. Für Inhalte externer Websites, auf die wir verlinken, sind ausschließlich deren
            Betreiber verantwortlich.
          </p>
        </div>
      </section>
    </>
  );
}
