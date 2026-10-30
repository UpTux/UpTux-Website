import { PageHero } from '@/components/Blocks';
import { site } from '@/lib/site';

export default function OpenSourceCompliance() {
  return (
    <>
      <PageHero lang="de" crumbs={[{ name: 'Open Source Compliance' }]} title="Open Source Compliance" />
      <section className="section">
        <div className="container narrow prose">
          <p>
            Open-Source-Software ist ein fester Bestandteil unserer Arbeit. Wir setzen sie in Kundenprojekten und eigenen
            Produkten ein und veröffentlichen selbst Software unter Open-Source-Lizenzen. Damit Sie die Software, die wir
            liefern, sicher und rechtskonform nutzen können, gehen wir mit Open-Source-Komponenten nach klaren internen
            Regeln um.
          </p>
          <h2>Lizenz-Compliance nach OpenChain ISO/IEC 5230</h2>
          <p>
            OpenChain ISO/IEC 5230:2020 ist der internationale Standard für Open-Source-Lizenz-Compliance. UpTux ist nach
            ISO/IEC 5230:2020 selbstzertifiziert. Damit stellen wir sicher, dass die Lösungen, die wir liefern, dem
            OpenChain-Standard entsprechen.
          </p>
          <p>
            Bevor wir eine Open-Source-Komponente einsetzen, prüfen wir ihre Lizenz und deren Pflichten. Wir halten fest,
            welche Komponenten in welcher Version in einer Lieferung enthalten sind, und liefern die erforderlichen
            Lizenztexte und Urheberrechtshinweise mit.
          </p>
          <h2>Anfragen nach Quellcode</h2>
          <p>
            Enthält eine Lieferung Software unter einer Lizenz, die das Recht auf den Quellcode einräumt (z. B. GPL oder
            LGPL), stellen wir Ihnen den entsprechenden Quellcode zur Verfügung, mindestens drei Jahre ab der Auslieferung.
            Wurde der Quellcode nicht zusammen mit der Software ausgeliefert, können Sie eine Kopie anfordern, auf Wunsch
            auch auf einem physischen Datenträger.
          </p>
          <p>
            Anfragen richten Sie bitte an <a href={`mailto:${site.ossComplianceEmail}`}>{site.ossComplianceEmail}</a>. Nennen Sie dabei das Produkt,
            die Version und, falls vorhanden, Ihre Projekt- oder Lieferreferenz.
          </p>
          <h2>Sicherheit von Open-Source-Komponenten nach OpenChain ISO/IEC 18974</h2>
          <p>
            OpenChain ISO/IEC 18974:2023 ist der Industriestandard für Security Assurance von Open-Source-Software. UpTux
            ist nach ISO/IEC 18974:2023 selbstzertifiziert und betreibt ein Programm zur Sicherheit der eingesetzten
            Open-Source-Komponenten.
          </p>
          <p>
            Wir verfolgen bekannte Schwachstellen in den Open-Source-Komponenten, die wir einsetzen, und stellen bei
            Bedarf Updates bereit. Hinweise auf bekannte Schwachstellen oder Meldungen neu entdeckter Sicherheitslücken
            senden Sie bitte an <a href={`mailto:${site.securityEmail}`}>{site.securityEmail}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
