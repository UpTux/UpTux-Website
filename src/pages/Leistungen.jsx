import { CheckList, CtaBand, PageHero, ProtocolGrid, SectionHead } from '../components/Blocks.jsx';
import { Icon } from '../components/Icon.jsx';
import { href } from '../link.js';

const services = [
  {
    id: 'anlagendaten',
    icon: 'activity',
    title: 'Anlagendaten erfassen & verstehen',
    text: 'Bevor man optimieren kann, muss man wissen, was eine Anlage tut. Wir holen Daten aus Steuerungen, Sensoren und Feldbussen, auch dort, wo es keine fertige Schnittstelle gibt, und machen sie verständlich.',
    points: ['Maschinen- und Prozessdatenerfassung', 'Live-Dashboards und Zustandsüberwachung', 'Grundlage für OEE, Energie-Monitoring und Predictive Maintenance', 'Auswertung historischer Messdaten'],
  },
  {
    id: 'retrofit',
    icon: 'plug',
    title: 'Retrofit & Schnittstellen-Modernisierung',
    text: 'Ihre Maschine ist mechanisch top, aber digital stumm? Wir rüsten bestehende Anlagen mit modernen, standardisierten Schnittstellen nach und binden sie an MES, ERP oder Cloud an.',
    points: ['Protokoll-Gateways und Adapter, z. B. auf OPC UA oder MQTT', 'Ersatz abgekündigter Steuerungs- und HMI-Software', 'Web-basierte Bedienoberflächen', 'Schrittweise Migration ohne langen Stillstand'],
    link: '/retrofit/',
  },
  {
    id: 'software',
    icon: 'code',
    title: 'Individuelle Softwareentwicklung',
    text: 'Wenn Standardsoftware nicht passt, entwickeln wir maßgeschneiderte Lösungen für Embedded-, Desktop-, Web- und Mobilplattformen, optimiert für Ressourcen, Schnittstellen und Ihre Abläufe.',
    points: ['Embedded-Software in C und C++', 'Desktop- und Serveranwendungen, z. B. in .NET', 'Web-Anwendungen und Apps', 'Produktentwicklung für den weltweiten Einsatz'],
  },
  {
    id: 'bildverarbeitung',
    icon: 'eye',
    title: 'Industrielle Bildverarbeitung',
    text: 'Kamerasysteme für Montageprüfung, Oberflächeninspektion, optische Messtechnik sowie Code- und Zeichenerkennung, in 2D und 3D und direkt in Ihre Linie integriert.',
    points: ['Vollständigkeits- und Montageprüfung', '3D-Oberflächenprüfung per Laser-Triangulation', 'Messtechnik im Mikrometerbereich', 'Rückverfolgbarkeit durch Bildarchivierung'],
    link: '/machine-vision/',
  },
  {
    id: 'legacy',
    icon: 'refresh',
    title: 'Legacy-Software modernisieren',
    text: 'Alte Software ist oft geschäftskritisch und schlecht dokumentiert. Wir analysieren sie, sichern das enthaltene Wissen und modernisieren sie schrittweise oder ersetzen sie durch aktuelle Technologien.',
    points: ['Analyse und Dokumentation von Bestandscode', 'Portierung auf aktuelle Plattformen und Betriebssysteme', 'Absicherung durch automatisierte Tests', 'Planbare Ablösung ohne Big-Bang-Risiko'],
  },
  {
    id: 'security',
    icon: 'shield',
    title: 'Security & Penetration Testing',
    text: 'Vernetzte Anlagen brauchen Schutz. Wir prüfen Software, Geräte und Schnittstellen auf Schwachstellen und helfen, sie zu schließen.',
    points: ['Penetrationstests für Geräte, Software und Schnittstellen', 'Sicherheitsanalyse von OT-Netzen', 'Härtung, Verschlüsselung und Authentifizierung', 'Code-Reviews mit Security-Fokus'],
    link: '/penetration-testing/',
  },
];

export default function Leistungen() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Leistungen' }]}
        eyebrow="Leistungen"
        title="Digitalisierung für Industrie und Mittelstand"
        lead="Wir verbinden Know-how aus der Automatisierungstechnik mit moderner Softwareentwicklung. So entstehen Lösungen, die in der Werkshalle funktionieren und sich nahtlos in Ihre IT einfügen."
      />
      <section className="section">
        <div className="container">
          <nav className="jump-nav" aria-label="Leistungen auf dieser Seite">
            {services.map((s) => (
              <a key={s.id} href={href(`/leistungen/#${s.id}`)}><Icon name={s.icon} size={18} /> {s.title}</a>
            ))}
          </nav>
          <div className="service-list">
            {services.map((s) => (
              <article className="service" id={s.id} key={s.id}>
                <div className="service-head">
                  <span className="card-icon"><Icon name={s.icon} /></span>
                  <h2>{s.title}</h2>
                </div>
                <div className="service-body">
                  <p>{s.text}</p>
                  <CheckList items={s.points} />
                  {s.link && <a className="text-link" href={href(s.link)}>Mehr erfahren <Icon name="arrow" size={18} /></a>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container">
          <SectionHead eyebrow="Industrie-Protokolle" title="Protokolle und Formate, mit denen wir arbeiten" />
          <ProtocolGrid />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
