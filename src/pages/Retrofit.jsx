import { CheckList, CtaBand, PageHero, ProtocolGrid, SectionHead, Steps } from '../components/Blocks.jsx';
import { href } from '../link.js';

export default function Retrofit() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Leistungen', path: '/leistungen/' }, { name: 'Retrofit' }]}
        eyebrow="Retrofit & Anlagenanbindung"
        title="Bestehende Anlagen fit machen für Industrie 4.0"
        lead="Eine neue Maschine kostet viel Geld. Eine neue Schnittstelle oft nur einen Bruchteil davon. Wir bringen Ihre bewährten Anlagen mit modernen Schnittstellen in die vernetzte Produktion, ohne dass Sie sie ersetzen müssen."
      >
        <div className="hero-actions">
          <a className="btn btn-primary" href={href('/kontakt/')}>Anlage besprechen</a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container split">
          <SectionHead
            eyebrow="Warum Retrofit?"
            title="Nachrüsten statt neu kaufen"
            intro="Viele Maschinen im Mittelstand sind mechanisch in einem Zustand, der noch Jahrzehnte hält. Was fehlt, ist die Verbindung zur digitalen Welt. Genau hier setzen wir an."
          />
          <CheckList
            items={[
              { title: 'Investitionen schützen.', text: 'Abgeschriebene Anlagen bleiben produktiv und werden zur Datenquelle.' },
              { title: 'Transparenz schaffen.', text: 'Stückzahlen, Zustände, Störungen und Energieverbrauch werden in Echtzeit sichtbar.' },
              { title: 'Abkündigungen abfangen.', text: 'Nicht mehr lieferbare Steuerungen, PCs oder Panels werden durch moderne Lösungen ersetzt.' },
              { title: 'Integrieren.', text: 'Standardisierte Schnittstellen wie OPC UA oder MQTT verbinden die Anlage mit MES, ERP und Cloud.' },
            ]}
          />
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHead
            eyebrow="Typische Projekte"
            title="Was wir in Bestandsanlagen umsetzen"
          />
          <div className="card-grid">
            {[
              ['Protokoll-Gateway', 'Ein Gateway übersetzt die proprietäre oder serielle Schnittstelle Ihrer Maschine in ein offenes Protokoll und stellt die Daten sicher bereit.'],
              ['Neue Bedienoberfläche', 'Veraltete HMI-Software wird durch eine moderne, web-basierte Oberfläche ersetzt, die auf jedem Gerät läuft.'],
              ['Steuerung in Software', 'Mit unserer Cloud PLC laufen Automatisierungsprozesse auf Standard-IT statt auf knapper SPS-Hardware.'],
              ['Daten zurückholen', 'Wo keine Dokumentation mehr existiert, analysieren wir die Kommunikation und machen die Daten der Anlage wieder nutzbar.'],
              ['Monitoring nachrüsten', 'Zusätzliche Sensorik und Datenerfassung liefern Zustandsdaten für Wartung und Qualitätssicherung.'],
              ['Sicher vernetzen', 'Verschlüsselung, Authentifizierung und Netzsegmentierung sorgen dafür, dass Vernetzung kein Einfallstor wird.'],
            ].map(([t, d]) => (
              <article className="card" key={t}>
                <h3>{t}</h3>
                <div className="card-body"><p>{d}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Protokolle" title="Wir sprechen alte und neue Industriesprachen" />
          <ProtocolGrid />
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHead eyebrow="Ablauf" title="Vom Bestandscheck zur vernetzten Anlage" center />
          <Steps
            steps={[
              { title: 'Bestandsaufnahme', text: 'Wir sehen uns Maschine, Steuerung und vorhandene Schnittstellen vor Ort an und klären Ihre Ziele.' },
              { title: 'Machbarkeit', text: 'Ein kurzer technischer Proof of Concept zeigt, welche Daten wir zuverlässig erreichen.' },
              { title: 'Umsetzung', text: 'Gateway, Software und Oberflächen entstehen in Iterationen, getestet an der echten Anlage.' },
              { title: 'Inbetriebnahme', text: 'Wir nehmen die Lösung mit Ihnen in Betrieb, schulen Ihr Team und bleiben Ansprechpartner.' },
            ]}
          />
        </div>
      </section>
      <CtaBand title="Welche Anlage wollen Sie vernetzen?" />
    </>
  );
}
