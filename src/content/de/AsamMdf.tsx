import { Card, CheckList, CtaBand, PageHero, SectionHead } from '@/components/Blocks';
import { ProductLinks } from '@/components/ProductDetail';
import { site } from '@/lib/site';

export default function AsamMdf() {
  return (
    <>
      <PageHero lang="de"
        crumbs={[{ name: 'Produkte', path: '/produkte/' }, { name: 'AsamMdf' }]}
        eyebrow="Produkt · .NET-Bibliothek"
        title="AsamMdf: MDF4-Messdaten schnell lesen in .NET"
        lead="MDF4 ist das Standardformat für Messdaten in der Fahrzeug- und Steuergeräteentwicklung. AsamMdf ist eine schlanke, performante NuGet-Bibliothek, mit der .NET-Entwickler MDF4-Dateien bequem und schnell verarbeiten."
      />
      <section className="section">
        <div className="container">
          <div className="card-grid">
            <Card lang="de" icon="file" title="Volle MDF4-Unterstützung"><p>Kanaldaten mit automatischer Typkonvertierung, inklusive VLSD, CANopen-Datum/Zeit, komplexen Zahlen und MIME-Daten.</p></Card>
            <Card lang="de" icon="refresh" title="Konvertierungen"><p>Lineare, rationale und algebraische Umrechnungen, Lookup-Tabellen und automatische Einheitenumrechnung.</p></Card>
            <Card lang="de" icon="layers" title="Array-Kanäle"><p>Mehrdimensionale Daten wie Kennfelder und Kurven werden erkannt und abgeflacht, ideal für die Motorkalibrierung.</p></Card>
            <Card lang="de" icon="activity" title="Performance & Streaming"><p>Speichersparende Streaming-API, Lazy Loading und Unterstützung für Deflate- sowie Transpose+Deflate-Blöcke.</p></Card>
            <Card lang="de" icon="code" title="Klare API"><p>Minimalistische, konsistente und typsichere Schnittstelle mit sprechenden Methodennamen.</p></Card>
            <Card lang="de" icon="check" title="Getestet"><p>Über 200 Tests mit eigenen Beispieldateien, inklusive Randfällen bei Byte-Reihenfolge, Bitbreiten und Konvertierungen.</p></Card>
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container split">
          <div>
            <SectionHead eyebrow="Installation" title="In einer Minute startklar" intro="AsamMdf zielt auf .NET Standard 2.1 und ist mit .NET 5 bis .NET 10 kompatibel." />
            <pre className="code"><code>dotnet add package AsamMdf</code></pre>
            <ProductLinks lang="de" slug="asammdf" />
          </div>
          <div>
            <h2 className="h3">Lizenz</h2>
            <CheckList
              items={[
                'Kostenlose Beta zur Evaluierung für Dateien bis 50 MB',
                'Kommerzielle Lizenz für größere Dateien',
                'Individuelle Angebote je nach Anwendungsfall, Teamgröße und Einsatzszenario',
              ]}
            />
            <p>Anfragen gern an <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
          </div>
        </div>
      </section>
      <CtaBand lang="de" title="Lizenz für AsamMdf anfragen" text="Erzählen Sie uns kurz von Ihrem Anwendungsfall, und wir erstellen Ihnen ein passendes Angebot." />
    </>
  );
}
