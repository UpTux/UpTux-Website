import type { IconName } from '@/components/Icon';
import { Card, CtaBand, PageHero, SectionHead } from '@/components/Blocks';

const values = [
  ['compass', 'Der Nutzer im Mittelpunkt', 'Ob eigene Basissoftware oder Kundenlösung: Wir bauen für die Menschen, die damit arbeiten. Ihre Interessen gehen internen Zielen vor.'],
  ['cpu', 'Eine Sache richtig gut', 'Wir konzentrieren uns auf Software. Ein engagiertes Team löst schwierige Probleme und überträgt das Gelernte in neue Projekte.'],
  ['clock', 'Schnell statt langsam', 'Gute Software spart Zeit. Wir vermeiden unnötige Komplexität und optimieren auf kurze Reaktionszeiten.'],
  ['handshake', 'Integrität und Transparenz', 'Wir sichern Qualität ohne Abkürzungen, kommunizieren offen und benennen Herausforderungen klar.'],
  ['layers', 'Bezahlbare Technologie', 'Digitale Lösungen müssen über ihren gesamten Lebenszyklus bezahlbar bleiben, damit sie wirklich ankommen.'],
  ['activity', 'Großartig reicht nicht', 'Exzellenz ist unser Ausgangspunkt. Wir setzen uns ehrgeizige Ziele und verbessern Bewährtes durch Iteration.'],
];

export default function UeberUns() {
  return (
    <>
      <PageHero lang="de"
        crumbs={[{ name: 'Über uns' }]}
        eyebrow="Über UpTux"
        title="Aus der Industrie. Für die Industrie."
        lead="UpTux ist ein junges IT-Unternehmen aus Mainhardt in Baden-Württemberg. Unser Team bringt über 15 Jahre Erfahrung in sicherheitskritischer Softwareentwicklung mit, unter anderem aus Automatisierungstechnik, automatisiertem Fahren, Smart Home und Digital Health."
      />
      <section className="section">
        <div className="container split">
          <SectionHead eyebrow="Unsere Mission" title="Den Mittelstand digital stark machen" />
          <div className="prose">
            <p>
              Mittelständische Unternehmen sind das Rückgrat der deutschen Industrie. Ihre Anlagen sind solide, ihr Prozesswissen
              ist einzigartig. Was oft fehlt, ist ein Partner, der beide Welten versteht: die Werkshalle und die moderne IT.
            </p>
            <p>
              Genau das sind wir. Wir kennen Steuerungen, Feldbusse und Industrieprotokolle aus eigener Praxis und entwickeln
              maßgeschneiderte Software, mit der Sie Ihre Anlagen besser verstehen, Daten nutzbar machen und bewährte Maschinen
              mit neuen Schnittstellen modernisieren.
            </p>
            <p><strong>Get your software right.</strong> Das ist unser Anspruch an jedes Projekt.</p>
          </div>
        </div>
      </section>
      <section className="section section-tint" id="philosophie">
        <div className="container">
          <SectionHead eyebrow="Philosophie" title="Wofür wir stehen" intro="Diese Leitsätze prüfen wir regelmäßig selbst und messen uns an ihnen." />
          <div className="card-grid">
            {values.map(([icon, t, d]) => (
              <Card lang="de" key={t} icon={icon as IconName} title={t}><p>{d}</p></Card>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <h2>Ernsthaft bei der Sache, ohne steife Strukturen</h2>
          <p>
            Arbeit darf herausfordernd sein und trotzdem Spaß machen. Bei uns entstehen Ideen auch mal in der Kaffeepause und
            werden schnell umgesetzt. Wir feiern gemeinsame Erfolge und erkennen individuelle Leistung an. Diese Haltung spüren
            auch unsere Kunden: kurze Wege, direkte Ansprechpartner und echtes Interesse an Ihrer Aufgabe.
          </p>
        </div>
      </section>
      <CtaBand lang="de" title="Lernen wir uns kennen." />
    </>
  );
}
