import { CheckList, PageHero } from '@/components/Blocks';
import { Icon } from '@/components/Icon';
import { site } from '@/lib/site';

const subject = encodeURIComponent('Projektanfrage über uptux.de');
const body = encodeURIComponent('Hallo UpTux-Team,\n\nunser Unternehmen:\nWorum es geht (Anlage, Protokoll, Idee):\nGewünschter Zeitrahmen:\n\nViele Grüße\n');

export default function Kontakt() {
  return (
    <>
      <PageHero lang="de"
        crumbs={[{ name: 'Kontakt' }]}
        eyebrow="Kontakt"
        title="Erzählen Sie uns von Ihrem Projekt"
        lead="Ob konkrete Anfrage oder erste Idee: Schreiben Sie uns. Sie erhalten eine ehrliche Einschätzung, was möglich ist und was es braucht."
      />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-card">
            <span className="card-icon"><Icon name="mail" /></span>
            <h2 className="h3">Per E-Mail</h2>
            <p>Am schnellsten erreichen Sie uns per E-Mail.</p>
            <a className="btn btn-primary" href={`mailto:${site.email}?subject=${subject}&body=${body}`}>{site.email}</a>
            <p className="muted small">Sicherheitsmeldungen bitte an <a href={`mailto:${site.securityEmail}`}>{site.securityEmail}</a>.</p>
          </div>
          <div className="contact-card">
            <span className="card-icon"><Icon name="pin" /></span>
            <h2 className="h3">Anschrift</h2>
            <address>
              {site.legalName}<br />
              {site.street}<br />
              {site.zip} {site.city}<br />
              Deutschland
            </address>
            <p className="muted small">Wir sind für Kunden in ganz Deutschland tätig, vor Ort und remote.</p>
          </div>
          <div className="contact-card">
            <span className="card-icon"><Icon name="check" /></span>
            <h2 className="h3">Hilfreich für Ihre Anfrage</h2>
            <CheckList
              items={[
                'Um welche Anlage oder Software geht es?',
                'Welche Steuerung oder Schnittstellen sind vorhanden?',
                'Was soll am Ende besser sein?',
                'Gibt es einen Zeitrahmen?',
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
