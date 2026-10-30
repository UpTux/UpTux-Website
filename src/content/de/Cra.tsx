import { Card, CheckList, CtaBand, PageHero, SectionHead, Steps } from '@/components/Blocks';
import { Icon, type IconName } from '@/components/Icon';
import Link from 'next/link';

const duties: [IconName, string, string][] = [
  ['shield', 'Security by Design', 'Produkte müssen ohne bekannte ausnutzbare Schwachstellen ausgeliefert werden, mit sicherer Standardkonfiguration, Zugriffsschutz und minimaler Angriffsfläche.'],
  ['layers', 'Schwachstellen im Griff', 'Hersteller brauchen eine Software-Stückliste (SBOM), einen Prozess zur Behandlung von Schwachstellen und eine öffentliche Meldeadresse.'],
  ['refresh', 'Updates über Jahre', 'Sicherheitsupdates müssen über den gesamten Supportzeitraum bereitstehen, in der Regel mindestens fünf Jahre.'],
  ['clock', 'Meldung in 24 Stunden', 'Aktiv ausgenutzte Schwachstellen und schwere Sicherheitsvorfälle müssen innerhalb von 24 Stunden gemeldet werden.'],
];

const timeline: { title: string; text: string }[] = [
  { title: '10. Dezember 2024:', text: 'Der CRA (Verordnung (EU) 2024/2847) tritt in Kraft.' },
  { title: '11. September 2026:', text: 'Die Meldepflichten gelten, auch für Produkte, die bereits auf dem Markt sind.' },
  { title: '20. Januar 2027:', text: 'Die neue Maschinenverordnung gilt, mit eigenen Anforderungen an den Schutz vor Manipulation.' },
  { title: '11. Dezember 2027:', text: 'Alle Pflichten gelten. Neue Produkte erhalten das CE-Kennzeichen nur noch mit CRA-Konformität.' },
];

const services: [IconName, string, string][] = [
  ['compass', 'CRA-Check', 'Wir prüfen, welche Ihrer Produkte betroffen sind, in welche Kategorie sie fallen und wo Sie heute stehen. Ergebnis ist ein priorisierter Maßnahmenplan.'],
  ['activity', 'Risikobewertung', 'Strukturierte Bedrohungs- und Risikoanalyse Ihres Produkts als Grundlage für Anforderungen und technische Dokumentation.'],
  ['code', 'Security by Design', 'Wir setzen Anforderungen in Software und Firmware um: Härtung, Authentifizierung, Verschlüsselung und sichere Standardeinstellungen.'],
  ['package', 'SBOM & Open Source', 'Software-Stücklisten, Lizenz- und Schwachstellenprüfung der eingesetzten Komponenten, nach unseren eigenen OpenChain-Prozessen.'],
  ['eye', 'Penetrationstests', 'Wir prüfen Geräte, Schnittstellen und Software auf Schwachstellen, bevor es Angreifer tun, und unterstützen bei der Behebung.'],
  ['wrench', 'Updates & Meldeprozess', 'Sichere Update-Mechanismen, Schwachstellenmanagement und ein Meldeprozess, der die 24-Stunden-Frist auch wirklich einhält.'],
];

export default function Cra() {
  return (
    <>
      <PageHero lang="de"
        crumbs={[{ name: 'Leistungen', path: '/leistungen/' }, { name: 'Cyber Resilience Act' }]}
        eyebrow="Cyber Resilience Act"
        title="Ihre Maschinen und Geräte fit für den Cyber Resilience Act"
        lead="Mit dem Cyber Resilience Act (CRA) wird Cybersecurity zur Voraussetzung für das CE-Kennzeichen. Wir zeigen Ihnen, was der CRA für Ihre Produkte bedeutet, und setzen die Anforderungen mit Ihnen um: in Software, Firmware und Prozessen."
      />
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Was der CRA verlangt"
            title="Cybersecurity über den gesamten Produktlebenszyklus"
            intro="Der CRA gilt für fast alle Produkte mit digitalen Elementen, die in der EU verkauft werden: Steuerungen, Gateways, HMIs, vernetzte Maschinen und Software. Die Pflichten treffen vor allem den Hersteller."
          />
          <div className="pain-grid">
            {duties.map(([icon, t, d]) => (
              <div className="pain" key={t}>
                <Icon name={icon} />
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container split">
          <SectionHead
            eyebrow="Fristen"
            title="Die ersten Pflichten gelten bereits"
            intro="Bei Verstößen drohen Bußgelder von bis zu 15 Millionen Euro oder 2,5 % des weltweiten Jahresumsatzes. Wer jetzt beginnt, hat genug Zeit, Produkte und Prozesse in Ruhe anzupassen."
          />
          <CheckList items={timeline} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Leistungsumfang"
            title="Wir unterstützen Sie dort, wo Sie Hilfe brauchen"
            intro="Vom ersten Überblick bis zur Umsetzung in Ihrem Produkt. Sie entscheiden, welche Bausteine Sie selbst übernehmen und wo Sie uns dazuholen."
          />
          <div className="card-grid">
            {services.map(([icon, t, d]) => (
              <Card key={t} lang="de" icon={icon} title={t}>
                <p>{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container">
          <SectionHead eyebrow="Vorgehen" title="In vier Schritten zur CRA-Konformität" center />
          <Steps
            steps={[
              { title: 'Bestandsaufnahme', text: 'Wir erfassen Ihre Produkte, deren Software und die bestehenden Prozesse und ordnen sie den Anforderungen des CRA zu.' },
              { title: 'Maßnahmenplan', text: 'Sie erhalten einen priorisierten Plan mit Aufwand und Reihenfolge, abgestimmt auf Ihre Fristen und Ressourcen.' },
              { title: 'Umsetzung', text: 'Wir setzen die technischen Maßnahmen mit Ihrem Team um und prüfen das Ergebnis mit Penetrationstests.' },
              { title: 'Betrieb', text: 'Schwachstellenmanagement, Updates und Meldeprozess laufen weiter. Wir bleiben an Ihrer Seite.' },
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <SectionHead
            eyebrow="Warum UpTux"
            title="Security aus der Praxis, nicht vom Papier"
            intro="Den CRA erfüllen Sie nicht mit Dokumenten allein. Die Anforderungen müssen in Ihrer Software ankommen, und genau das ist unser Handwerk."
          />
          <CheckList
            items={[
              { title: 'Erfahrung mit kritischen Systemen:', text: 'Über 15 Jahre Softwareentwicklung für sicherheitskritische Systeme unter anderem in Automatisierung und automatisiertem Fahren.' },
              { title: 'Wir kennen die Angriffswege:', text: 'Als Penetrationstester wissen wir, wo vernetzte Maschinen verwundbar sind.' },
              { title: 'Open Source im Griff:', text: 'UpTux ist nach OpenChain ISO/IEC 5230 und ISO/IEC 18974 selbstzertifiziert. Diese Prozesse bringen wir in Ihr Projekt ein.' },
              { title: 'Passend für den Mittelstand:', text: 'Pragmatische Lösungen in einem Umfang, den Ihr Team langfristig tragen kann.' },
            ]}
          />
        </div>
      </section>
      <section className="section section-tint">
        <div className="container narrow prose">
          <p className="muted small">
            Diese Seite gibt einen Überblick und ersetzt keine Rechtsberatung. Wie wir selbst mit Open-Source-Software
            umgehen, lesen Sie unter <Link href="/open-source-compliance/">Open Source Compliance</Link>.
          </p>
        </div>
      </section>
      <CtaBand lang="de"
        title="Wissen Sie, was der CRA für Ihre Produkte bedeutet?"
        text="Erzählen Sie uns, welche Maschinen oder Geräte Sie herstellen. Wir melden uns mit einer ehrlichen Einschätzung, was auf Sie zukommt und wo Sie anfangen sollten."
      />
    </>
  );
}
