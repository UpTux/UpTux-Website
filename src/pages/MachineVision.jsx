import { CheckList, CtaBand, PageHero, SectionHead } from '../components/Blocks.jsx';

const areas = [
  ['Montageprüfung bei hohem Durchsatz', ['Stationäre Kamerasysteme für hohe Taktraten', 'Asynchron getaktete LED-Beleuchtung für optimalen Kontrast', 'Farbige LED-Blitzbeleuchtung für bewegte Teile']],
  ['Flexible Montageprüfung', ['Für komplexe Baugruppen wie Getriebe, Motoren, Kettensägen oder Medizinprodukte', 'Anpassbar an viele Merkmale und Varianten', 'Stationär oder robotergeführt, in 2D und 3D']],
  ['Optische Messtechnik', ['2D- und 3D-Messsysteme mit Genauigkeit im Mikrometerbereich', 'Berührungslos und reproduzierbar', 'Sichere Einhaltung enger Toleranzen']],
  ['3D-Oberflächenprüfung', ['Inline-Prüfung per Laser-Triangulation', 'Zuverlässig auch bei matt-schwarzen oder verschmutzten Oberflächen, wo 2D an Grenzen stößt', 'Hardwareunabhängig: der passende Laser für Ihre Aufgabe']],
  ['Code- und Zeichenerkennung', ['Lesen von 2D-Codes und Klarschrift auch bei hoher Geschwindigkeit', 'Erkennung kaum sichtbarer Beschriftungen', '3D-Lesen mit kundenspezifischen Systemen']],
  ['Qualität & Rückverfolgbarkeit', ['Statistische Auswertungen decken Schwachstellen in der Produktion auf', 'Protokollierung und Archivierung der Bilddaten', 'Lückenlose Dokumentation']],
];

export default function MachineVision() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Leistungen', path: '/leistungen/' }, { name: 'Machine Vision' }]}
        eyebrow="Industrielle Bildverarbeitung"
        title="Machine Vision für Prüfung und Messung in der Produktion"
        lead="Wir planen und implementieren Bildverarbeitungssysteme, die Fehler zuverlässig erkennen, Maße präzise prüfen und jedes Bauteil dokumentieren. Von der Beratung bis zur Integration in Ihre Linie."
      />
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {areas.map(([t, pts]) => (
              <article className="card" key={t}>
                <h2 className="h3">{t}</h2>
                <CheckList items={pts} />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container split">
          <SectionHead
            eyebrow="Systemsoftware"
            title="Modular, einfach bedienbar, variantenfähig"
            intro="Unsere Software bündelt Standardfunktionen der Bildverarbeitung: Werkstückidentifikation, 2D/3D-Messung, Merkmalsprüfung sowie Code- und Zeichenerkennung."
          />
          <CheckList
            items={[
              'Beliebig viele Werkstücktypen und Varianten verwalten',
              'Modularer Aufbau, der mit Ihren Anforderungen wächst',
              'Einfache Bedienung für Ihr Produktionspersonal',
              'Anbindung an Steuerung, MES und Qualitätsdatenbank',
            ]}
          />
        </div>
      </section>
      <CtaBand title="Welche Prüfaufgabe wollen Sie automatisieren?" />
    </>
  );
}
