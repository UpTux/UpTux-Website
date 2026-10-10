import { PageHero } from '@/components/Blocks';
import { site } from '@/lib/site';

export default function Datenschutz() {
  return (
    <>
      <PageHero lang="de" crumbs={[{ name: 'Datenschutz' }]} title="Datenschutzerklärung" />
      <section className="section">
        <div className="container narrow prose">
          <h2>1. Verantwortlicher</h2>
          <p>
            {site.legalName}, {site.street}, {site.zip} {site.city}<br />
            Vertreten durch: {site.managingDirector}<br />
            E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>

          <h2>2. Das Wichtigste in Kürze</h2>
          <p>
            Diese Website verwendet keine Cookies, kein Tracking, keine Analyse-Tools und keine eingebundenen Inhalte von
            Drittanbietern wie Karten, Videos oder Schriftarten-Dienste. Alle Schriftarten werden von unserem eigenen Server
            ausgeliefert.
          </p>

          <h2>3. Hosting über GitHub Pages</h2>
          <p>
            Diese Website wird über GitHub Pages bereitgestellt, einen Dienst der GitHub Inc., 88 Colin P. Kelly Jr. Street,
            San Francisco, CA 94107, USA. Beim Aufruf der Website verarbeitet GitHub technisch notwendige Daten wie Ihre
            IP-Adresse, Datum und Uhrzeit des Zugriffs, die aufgerufene Seite sowie Browser- und Systeminformationen, um die
            Website auszuliefern und die Sicherheit des Dienstes zu gewährleisten.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in einer sicheren und
            zuverlässigen Bereitstellung der Website. Eine Übermittlung in die USA erfolgt auf Grundlage des
            EU-US Data Privacy Framework, unter dem GitHub zertifiziert ist. Weitere Informationen finden Sie in der{' '}
            <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">Datenschutzerklärung von GitHub</a>.
          </p>

          <h2>4. Kontakt per E-Mail</h2>
          <p>
            Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Angaben (z. B. Name, E-Mail-Adresse, Inhalt der
            Nachricht), um Ihre Anfrage zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage auf
            einen Vertrag abzielt, andernfalls Art. 6 Abs. 1 lit. f DSGVO. Wir löschen die Daten, sobald sie für den Zweck nicht
            mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>

          <h2>5. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der
            Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen die Verarbeitung (Art. 21). Wenden Sie
            sich dazu einfach an <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <p>
            Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig für uns ist der
            Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg.
          </p>
          <p className="muted small">Stand: Oktober 2026</p>
        </div>
      </section>
    </>
  );
}
