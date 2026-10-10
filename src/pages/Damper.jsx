import { Card, CheckList, CtaBand, PageHero, SectionHead } from '../components/Blocks.jsx';

export default function Damper() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Produkte', path: '/produkte/' }, { name: 'Damper' }]}
        eyebrow="Produkt"
        title="Damper: schlanke C++17-Bibliothek für robuste Software"
        lead="Damper ist ein modularer Grundbaustein für Embedded- und Unternehmenssoftware. Die Bibliothek bietet effiziente, standardkonforme Implementierungen gängiger Algorithmen, hat einen geringen Speicherbedarf und kommt ohne Abhängigkeiten zu bestimmten Mikrocontrollern, Betriebssystemen oder externen Bibliotheken aus."
      />
      <section className="section">
        <div className="container">
          <div className="card-grid">
            <Card icon="check" title="Zuverlässig"><p>Fehlerfälle sind durchgängig berücksichtigt. Rund 20.000 Unit-, Integrations- und Qualifikationstests sichern die Qualität.</p></Card>
            <Card icon="layers" title="Skalierbar"><p>Eigenes asynchrones I/O-Framework mit Thread-Pools nutzt mehrere Kerne. Eigene Allokatoren vermeiden Speicherallokationen zur Laufzeit.</p></Card>
            <Card icon="wrench" title="Wartbar"><p>Modulare, gut dokumentierte Architektur, die sich auch neuen Entwicklern schnell erschließt.</p></Card>
            <Card icon="shield" title="Sicher"><p>Authentifizierung und Verschlüsselung nach gängigen Industriestandards, gehärtet gegen Angriffe aus dem Internet.</p></Card>
            <Card icon="code" title="Einfach zu nutzen"><p>Vereinfachte APIs und optionale Trennung von Kontextzuständen erleichtern nebenläufige Entwicklung.</p></Card>
            <Card icon="cpu" title="Ressourcenschonend"><p>Gemacht für Systeme mit begrenzten Ressourcen, etwa Mikrocontroller mit ausreichend RAM und ROM.</p></Card>
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container split">
          <SectionHead eyebrow="Umfang" title="Was in Damper steckt" />
          <CheckList
            items={[
              { title: 'Datenstrukturen:', text: 'Status-Typen, Queues, Ringpuffer, Listen, Vektoren, Hashes, Bäume, Matrizen und BitArrayView.' },
              { title: 'Kryptografie:', text: 'AES, Hash-Verfahren, X.509-Parser, Diffie-Hellman, RSA, ECC und EdDSA.' },
              { title: 'System:', text: 'Dateisystemzugriff, asynchrones I/O und Bildverarbeitungsalgorithmen.' },
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <h2>Hinweis zu Zertifizierungen</h2>
          <p>Damper ist derzeit nicht nach Normen wie ISO 26262, IEC 62304, ASPICE, SIL/ASIL oder FIPS zertifiziert. Wenn Ihr Projekt ein zertifiziertes Produkt erfordert, sprechen Sie uns bitte direkt an.</p>
        </div>
      </section>
      <CtaBand title="Damper in Ihrem Produkt einsetzen?" text="Wir beraten Sie zu Lizenz, Integration und Erweiterungen." />
    </>
  );
}
