import { HeroArt } from '../components/HeroArt.jsx';
import { Icon } from '../components/Icon.jsx';
import { Card, CheckList, CtaBand, ProtocolGrid, SectionHead, Steps } from '../components/Blocks.jsx';
import { href } from '../link.js';

export const processSteps = [
  { title: 'Verstehen', text: 'Wir schauen uns Ihre Anlage vor Ort an, sprechen mit den Menschen, die damit arbeiten, und klären, welche Daten und Schnittstellen es gibt.' },
  { title: 'Konzipieren', text: 'Sie bekommen ein klares Konzept mit Aufwand, Risiken und Alternativen. Technologie wählen wir nach Ihrem Bedarf, nicht nach Provision.' },
  { title: 'Umsetzen', text: 'Wir entwickeln in kurzen Iterationen und testen früh an der echten Maschine. So sehen Sie schnell Ergebnisse und behalten die Kontrolle.' },
  { title: 'Betreuen', text: 'Nach dem Go-live bleiben wir ansprechbar, dokumentieren sauber und entwickeln die Lösung mit Ihnen weiter.' },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">IT-Partner für den industriellen Mittelstand</p>
            <h1>
              Digitalisierung, die Ihre <span className="grad-text">Anlagen versteht.</span>
            </h1>
            <p className="hero-lead">
              Wir kommen aus der Industrie und sprechen die Sprache Ihrer Maschinen. Mit maßgeschneiderter Software machen wir
              Ihre bestehenden Anlagen transparent und bringen in die Jahre gekommene Maschinen mit modernen Schnittstellen in
              die digitale Zukunft.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={href('/kontakt/')}>Projekt anfragen</a>
              <a className="btn btn-ghost-light" href={href('/leistungen/')}>Unsere Leistungen</a>
            </div>
            <ul className="hero-facts">
              <li><strong>10+ Jahre</strong> Softwareentwicklung für sicherheitskritische Systeme</li>
              <li><strong>Herstellerunabhängig</strong> ohne Provisionen oder Plattformbindung</li>
              <li><strong>Vom Sensor bis zur Cloud</strong> alles aus einer Hand</li>
            </ul>
          </div>
          <HeroArt />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Kommt Ihnen das bekannt vor?"
            title="Ihre Maschinen laufen. Aber was wissen Sie wirklich über sie?"
            intro="Viele Anlagen im Mittelstand sind robust, bezahlt und tun seit Jahren zuverlässig ihren Dienst. Genau deshalb lohnt es sich, sie nicht zu ersetzen, sondern klüger zu machen."
          />
          <div className="pain-grid">
            {[
              ['clock', 'Stillstände kommen überraschend', 'Ausfälle werden erst bemerkt, wenn die Produktion steht, weil Zustandsdaten nicht erfasst werden.'],
              ['layers', 'Daten bleiben auf Inseln', 'Jede Maschine spricht ihr eigenes Protokoll. MES, ERP oder Cloud kommen an die Daten nicht heran.'],
              ['wrench', 'Ersatzteile werden knapp', 'Alte Steuerungen und Bedienpanels sind abgekündigt, das Wissen über die Software ist kaum dokumentiert.'],
              ['shield', 'Vernetzung macht unsicher', 'Sobald Anlagen ins Netz sollen, stellen sich Fragen zu Zugriffsschutz, Updates und Angriffsfläche.'],
            ].map(([icon, t, d]) => (
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
        <div className="container">
          <SectionHead
            eyebrow="Leistungen"
            title="Was wir für Sie tun"
            intro="Von der ersten Datenabfrage an einer alten Steuerung bis zur fertigen Software, die in Ihrer Produktion läuft."
          />
          <div className="card-grid">
            <Card icon="activity" title="Anlagen verstehen" link="/leistungen/#anlagendaten">
              <p>Wir erfassen Maschinendaten, machen Zustände sichtbar und schaffen die Basis für Monitoring, OEE und vorausschauende Wartung.</p>
            </Card>
            <Card icon="plug" title="Retrofit & Schnittstellen" link="/retrofit/">
              <p>Bestandsanlagen bekommen moderne Schnittstellen wie OPC UA oder MQTT und lassen sich in Ihre IT-Landschaft einbinden.</p>
            </Card>
            <Card icon="code" title="Individuelle Software" link="/leistungen/#software">
              <p>Maßgeschneiderte Software für Embedded, Desktop, Web und Mobile, passgenau für Ihre Prozesse und Ressourcen.</p>
            </Card>
            <Card icon="eye" title="Industrielle Bildverarbeitung" link="/machine-vision/">
              <p>Montageprüfung, Oberflächeninspektion und optische Messtechnik in 2D und 3D, direkt an der Linie.</p>
            </Card>
            <Card icon="refresh" title="Legacy-Modernisierung" link="/leistungen/#legacy">
              <p>Veraltete Software wird schrittweise modernisiert oder durch zukunftssichere Technologie ersetzt, ohne Produktionsrisiko.</p>
            </Card>
            <Card icon="shield" title="Security & Penetration Testing" link="/penetration-testing/">
              <p>Wir prüfen vernetzte Anlagen, Geräte und Software auf Schwachstellen und härten sie gegen Angriffe.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionHead
              eyebrow="Industrie-Protokolle"
              title="Wir sprechen die Sprache Ihrer Maschinen."
              intro="Unsere Wurzeln liegen in der Automatisierungstechnik. Deshalb kennen wir die Protokolle und Datenformate der Industrie aus der Praxis und verbinden alte Welt mit neuer."
            />
            <a className="text-link" href={href('/retrofit/')}>Mehr zu Retrofit und Anlagenanbindung <Icon name="arrow" size={18} /></a>
          </div>
          <ProtocolGrid />
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHead eyebrow="So arbeiten wir" title="Pragmatisch, transparent, an Ihrer Maschine." center />
          <Steps steps={processSteps} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Produkte"
            title="Bewährte Bausteine für schnellere Projekte"
            intro="Aus unseren Projekten sind eigene Produkte entstanden. Sie sparen Entwicklungszeit und machen Ihre Lösung robuster."
          />
          <div className="card-grid card-grid-3">
            <Card icon="cloud" title="Cloud PLC" link="/cloud-plc/">
              <p>Die SPS-Runtime in der Cloud oder auf Ihrer eigenen IT. Unabhängig von knapper SPS-Hardware, skalierbar und IT-nah.</p>
            </Card>
            <Card icon="cpu" title="Damper" link="/damper/">
              <p>Schlanke, modulare C++17-Bibliothek für Embedded- und Unternehmenssoftware mit integrierter Kryptografie.</p>
            </Card>
            <Card icon="file" title="AsamMdf" link="/asammdf/">
              <p>Schnelle .NET-Bibliothek zum Lesen von ASAM MDF4-Messdaten, verfügbar als NuGet-Paket.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container split">
          <div>
            <SectionHead
              eyebrow="Unser Versprechen"
              title="Ehrliche Beratung. Saubere Software. Pünktlich geliefert."
            />
          </div>
          <CheckList
            items={[
              { title: 'Technologie nach Ihrem Bedarf.', text: 'Wir empfehlen, was zu Ihrem Problem passt, nicht was gerade im Trend liegt.' },
              { title: 'Unabhängig.', text: 'Wir verkaufen keine Drittanbieter-Plattformen weiter und verdienen nicht an Lizenzen, die Sie nicht brauchen.' },
              { title: 'Termintreu.', text: 'Eine pünktliche Fertigstellung hat für uns höchste Priorität.' },
              { title: 'Kein Lock-in.', text: 'Saubere Dokumentation und offene Schnittstellen, damit Sie die Kontrolle über Ihre Lösung behalten.' },
            ]}
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
