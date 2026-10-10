import { Icon } from './Icon.jsx';
import { href } from '../link.js';

export function PageHero({ eyebrow, title, lead, crumbs = [], children }) {
  return (
    <section className="page-hero">
      <div className="container">
        {crumbs.length > 0 && (
          <nav className="crumbs" aria-label="Brotkrümelnavigation">
            <a href={href('/')}>Start</a>
            {crumbs.map((c) => (
              <span key={c.name}>
                <span aria-hidden="true">/</span>
                {c.path ? <a href={href(c.path)}>{c.name}</a> : <span aria-current="page">{c.name}</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, intro, center }) {
  return (
    <div className={`section-head${center ? ' center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

export function Card({ icon, title, children, link, linkLabel = 'Mehr erfahren', id }) {
  return (
    <article className="card" id={id}>
      {icon && <span className="card-icon"><Icon name={icon} /></span>}
      <h3>{title}</h3>
      <div className="card-body">{children}</div>
      {link && (
        <a className="card-link" href={href(link)}>
          {linkLabel} <Icon name="arrow" size={18} />
        </a>
      )}
    </article>
  );
}

export function CheckList({ items }) {
  return (
    <ul className="checklist">
      {items.map((it) => (
        <li key={typeof it === 'string' ? it : it.title}>
          <Icon name="check" size={20} />
          <span>{typeof it === 'string' ? it : <><strong>{it.title}</strong> {it.text}</>}</span>
        </li>
      ))}
    </ul>
  );
}

export function CtaBand({ title = 'Lassen Sie uns über Ihre Anlage sprechen.', text = 'Erzählen Sie uns, welche Maschine, welches Protokoll oder welche Idee Sie beschäftigt. Wir melden uns mit einer ehrlichen Einschätzung, was möglich ist.' }) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-primary" href={href('/kontakt/')}>Projekt anfragen</a>
          <a className="btn btn-ghost-light" href="mailto:info@uptux.de">info@uptux.de</a>
        </div>
      </div>
    </section>
  );
}

export const protocols = [
  { name: 'OPC UA', text: 'Standard für herstellerunabhängige Maschine-zu-Maschine-Kommunikation' },
  { name: 'MQTT', text: 'Leichtgewichtiges Messaging, ideal für IoT und unzuverlässige Netze' },
  { name: 'EtherCAT', text: 'Echtzeit-Feldbus für schnelle, synchronisierte Datenübertragung' },
  { name: 'DDS', text: 'Echtzeit-Middleware für skalierbaren Datenaustausch' },
  { name: 'Zenoh', text: 'Effizientes Protokoll vom Sensor bis in die Cloud' },
  { name: 'CANopen', text: 'Bewährter Standard in Maschinenbau und Fahrzeugtechnik' },
  { name: 'ASAM MDF4', text: 'Messdatenformat aus Fahrzeug- und Steuergeräteentwicklung' },
];

export function ProtocolGrid() {
  return (
    <ul className="protocol-grid">
      {protocols.map((p) => (
        <li key={p.name}>
          <strong>{p.name}</strong>
          <span>{p.text}</span>
        </li>
      ))}
      <li className="protocol-more">
        <strong>Ihr Protokoll fehlt?</strong>
        <span>Proprietäre Schnittstellen und alte Feldbusse sind unser Alltag. Sprechen Sie uns an.</span>
      </li>
    </ul>
  );
}

export function Steps({ steps }) {
  return (
    <ol className="steps">
      {steps.map((s, i) => (
        <li key={s.title}>
          <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
