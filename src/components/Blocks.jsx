import { Icon } from './Icon.jsx';
import { href } from '../link.js';
import { pathOf } from '../paths.js';
import { useLang, useT } from '../i18n.js';

export function PageHero({ eyebrow, title, lead, crumbs = [], children }) {
  const lang = useLang();
  const t = useT();
  return (
    <section className="page-hero">
      <div className="container">
        {crumbs.length > 0 && (
          <nav className="crumbs" aria-label={t.crumbsLabel}>
            <a href={href(pathOf('home', lang))}>{t.home}</a>
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

export function Card({ icon, title, children, link, linkLabel, id }) {
  const t = useT();
  return (
    <article className="card" id={id}>
      {icon && <span className="card-icon"><Icon name={icon} /></span>}
      <h3>{title}</h3>
      <div className="card-body">{children}</div>
      {link && (
        <a className="card-link" href={href(link)}>
          {linkLabel || t.more} <Icon name="arrow" size={18} />
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

export function CtaBand({ title, text }) {
  const lang = useLang();
  const t = useT();
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>{title || t.ctaTitle}</h2>
          <p>{text || t.ctaText}</p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-primary" href={href(pathOf('contact', lang))}>{t.cta}</a>
          <a className="btn btn-ghost-light" href="mailto:info@uptux.de">info@uptux.de</a>
        </div>
      </div>
    </section>
  );
}

export const protocols = [
  { name: 'OPC UA', de: 'Standard für herstellerunabhängige Maschine-zu-Maschine-Kommunikation', en: 'The vendor-independent standard for machine-to-machine communication' },
  { name: 'MQTT', de: 'Leichtgewichtiges Messaging, ideal für IoT und unzuverlässige Netze', en: 'Lightweight messaging, ideal for IoT and unreliable networks' },
  { name: 'EtherCAT', de: 'Echtzeit-Feldbus für schnelle, synchronisierte Datenübertragung', en: 'Real-time fieldbus for fast, synchronised data transfer' },
  { name: 'DDS', de: 'Echtzeit-Middleware für skalierbaren Datenaustausch', en: 'Real-time middleware for scalable data exchange' },
  { name: 'Zenoh', de: 'Effizientes Protokoll vom Sensor bis in die Cloud', en: 'Efficient protocol from sensor to cloud' },
  { name: 'CANopen', de: 'Bewährter Standard in Maschinenbau und Fahrzeugtechnik', en: 'Proven standard in machine building and automotive' },
  { name: 'ASAM MDF4', de: 'Messdatenformat aus Fahrzeug- und Steuergeräteentwicklung', en: 'Measurement data format from vehicle and ECU development' },
];

export function ProtocolGrid() {
  const lang = useLang();
  const t = useT();
  return (
    <ul className="protocol-grid">
      {protocols.map((p) => (
        <li key={p.name}>
          <strong>{p.name}</strong>
          <span>{p[lang]}</span>
        </li>
      ))}
      <li className="protocol-more">
        <strong>{t.protoMoreTitle}</strong>
        <span>{t.protoMoreText}</span>
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
