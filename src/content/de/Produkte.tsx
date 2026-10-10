import { Card, CtaBand, PageHero } from '@/components/Blocks';

export default function Produkte() {
  return (
    <>
      <PageHero lang="de"
        crumbs={[{ name: 'Produkte' }]}
        eyebrow="Produkte"
        title="Software-Bausteine aus der Praxis"
        lead="Aus unseren Projekten sind Produkte entstanden, die wir selbst täglich einsetzen. Sie beschleunigen Ihre Entwicklung und lassen sich flexibel in bestehende Systeme integrieren."
      />
      <section className="section">
        <div className="container">
          <div className="card-grid card-grid-3">
            <Card lang="de" icon="cloud" title="Cloud PLC" link="/cloud-plc/">
              <p>Die UpTux Runtime führt Automatisierungsprozesse auf AWS, Azure, Kubernetes oder Ihrer eigenen IT aus, statt auf klassischer SPS-Hardware.</p>
            </Card>
            <Card lang="de" icon="cpu" title="Damper" link="/damper/">
              <p>Modulare C++17-Bibliothek mit Datenstrukturen, asynchronem I/O und Kryptografie. Ohne externe Abhängigkeiten, ideal für Embedded.</p>
            </Card>
            <Card lang="de" icon="file" title="AsamMdf" link="/asammdf/">
              <p>Performante .NET-Bibliothek zum Lesen von ASAM MDF4-Messdateien mit Streaming-API, als NuGet-Paket.</p>
            </Card>
          </div>
        </div>
      </section>
      <CtaBand lang="de" title="Interesse an einem unserer Produkte?" text="Wir beraten Sie gern zu Einsatzmöglichkeiten, Lizenzen und Integration in Ihr Projekt." />
    </>
  );
}
