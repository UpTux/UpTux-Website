import { Card, CheckList, CtaBand, PageHero, SectionHead } from '../components/Blocks.jsx';

export default function CloudPlc() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Produkte', path: '/produkte/' }, { name: 'Cloud PLC' }]}
        eyebrow="Produkt"
        title="Cloud PLC: die SPS-Runtime für Ihre IT-Infrastruktur"
        lead="Die UpTux Runtime führt Automatisierungsprozesse in einer flexiblen IT-Umgebung aus, statt auf klassischer SPS-Hardware. Das macht Sie unabhängiger von Lieferengpässen und Preissteigerungen und öffnet die Tür für IT-Integration, Skalierung und Microservices."
      />
      <section className="section">
        <div className="container split">
          <SectionHead eyebrow="Einsatzumgebungen" title="Läuft dort, wo Ihre IT läuft" intro="Betreiben Sie die Runtime in der Public Cloud oder vollständig auf Ihrer eigenen Infrastruktur im Werk." />
          <CheckList items={['Amazon Web Services (AWS)', 'Microsoft Azure', 'Kubernetes', 'Ihre lokale IT-Infrastruktur (On-Premises)']} />
        </div>
      </section>
      <section className="section section-tint">
        <div className="container">
          <SectionHead eyebrow="Funktionen" title="Was Cloud PLC auszeichnet" />
          <div className="card-grid">
            <Card icon="layers" title="Skalierbar"><p>Wächst mit Ihrem Betrieb, ohne Hardware tauschen oder aufrüsten zu müssen.</p></Card>
            <Card icon="shield" title="Sicher"><p>Hohe Sicherheitsstandards zum Schutz Ihrer Daten und Infrastruktur.</p></Card>
            <Card icon="activity" title="Effizient"><p>Weniger Ausfallzeiten durch Echtzeitüberwachung, Fernzugriff und Predictive Maintenance.</p></Card>
            <Card icon="plug" title="Interoperabel"><p>Arbeitet mit vorhandener Industrie-Hardware und -Software als einheitliche Plattform zusammen.</p></Card>
            <Card icon="eye" title="Moderne HMI"><p>Bedienoberflächen entstehen mit aktueller Webtechnologie und laufen auf jedem Endgerät.</p></Card>
            <Card icon="code" title="Erweiterbar"><p>Plugin-Architektur und Einbindung Ihres bestehenden C/C++-Codes.</p></Card>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <SectionHead eyebrow="Protokolle" title="Unterstützte Kommunikation" />
          <CheckList
            items={[
              { title: 'OPC UA', text: 'für herstellerunabhängige Maschine-zu-Maschine-Kommunikation' },
              { title: 'MQTT', text: 'für leichtgewichtiges Messaging, auch in instabilen Netzen' },
              { title: 'Zenoh', text: 'für effizienten Datenaustausch mit geringer Netzlast' },
              { title: 'DDS', text: 'als Echtzeit-Middleware für skalierbaren Datenaustausch' },
              { title: 'EtherCAT', text: 'als Ethernet-Feldbus für schnelle, synchronisierte Übertragung' },
            ]}
          />
        </div>
      </section>
      <CtaBand title="Cloud PLC in Ihrer Umgebung testen?" text="Sprechen Sie uns an. Wir zeigen Ihnen, wie die Runtime mit Ihrer Anlage zusammenarbeitet." />
    </>
  );
}
