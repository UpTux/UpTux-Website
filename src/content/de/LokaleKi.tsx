import { Card, CheckList, CtaBand, PageHero, SectionHead, Steps } from '@/components/Blocks';
import { Icon, type IconName } from '@/components/Icon';

const reasons: [IconName, string, string][] = [
  ['shield', 'Ihre Daten bleiben im Haus', 'Konstruktionsdaten, Angebote und Kundendaten verlassen Ihr Netz nicht. Kein Training fremder Modelle mit Ihrem Know-how.'],
  ['layers', 'Unabhängig von Anbietern', 'Keine Preisänderungen, Abkündigungen oder Nutzungsbedingungen, die Ihnen jemand von außen diktiert.'],
  ['factory', 'Läuft auch in der Werkshalle', 'Kurze Antwortzeiten und Betrieb ohne Internetverbindung, direkt im Produktionsnetz.'],
  ['check', 'Datenschutz, der hält', 'DSGVO, Geheimhaltungsvereinbarungen und Vorgaben Ihrer Kunden lassen sich sauber einhalten und nachweisen.'],
];

const useCases: [IconName, string, string][] = [
  ['book', 'Wissensassistent', 'Fragen in natürlicher Sprache an Handbücher, Normen, Wikis und Projektablagen, mit Quellenangabe und unter Beachtung Ihrer Zugriffsrechte.'],
  ['wrench', 'Service & Instandhaltung', 'Fehlermeldungen, Wartungshistorie und Dokumentation zusammenführen, damit Ihr Team Störungen schneller eingrenzt.'],
  ['file', 'Dokumente auswerten', 'Prüfberichte, Lieferscheine, Anfragen und Verträge lesen, Daten extrahieren und in Ihre Systeme übertragen.'],
  ['code', 'Assistent für Entwickler', 'Code-Assistenz auf eigener Hardware, damit Quellcode und Firmware nicht bei Cloud-Diensten landen.'],
  ['activity', 'Produktionsdaten verstehen', 'Maschinen- und Qualitätsdaten per Frage auswerten und verständliche Berichte erzeugen lassen.'],
  ['cpu', 'KI an der Maschine', 'Modelle auf Edge-Hardware direkt an der Anlage, etwa für Bildverarbeitung, Anomalieerkennung oder Sprachbedienung.'],
];

export default function LokaleKi() {
  return (
    <>
      <PageHero lang="de"
        crumbs={[{ name: 'Leistungen', path: '/leistungen/' }, { name: 'Lokale KI' }]}
        eyebrow="Lokale KI"
        title="KI auf Ihrer eigenen Hardware: sicher, unabhängig, produktiv"
        lead="Große Sprachmodelle müssen nicht in der Cloud laufen. Wir beraten Sie, wählen Hardware und Modelle passend zu Ihren Aufgaben aus und richten eine KI-Umgebung ein, die in Ihrem Netz läuft, Ihr Wissen nutzt und Ihre Daten schützt."
      />
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Warum lokal?"
            title="Die Vorteile von KI, ohne Ihre Daten aus der Hand zu geben"
            intro="Gerade im Mittelstand stecken Konstruktionen, Rezepturen und Kundenbeziehungen in den Daten, die eine KI nutzbar machen soll. Die gehören auf Ihre Server."
          />
          <div className="pain-grid">
            {reasons.map(([icon, t, d]) => (
              <div className="pain" key={t}>
                <Icon name={icon} />
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container split">
          <SectionHead
            eyebrow="Leistungsumfang"
            title="Von der ersten Idee bis zum laufenden System"
            intro="Wir liefern keine Folien, sondern eine KI-Umgebung, die in Ihrem Alltag funktioniert und die Ihr Team versteht."
          />
          <CheckList
            items={[
              { title: 'Beratung & Machbarkeit:', text: 'Welche Aufgaben lohnen sich, was leisten heutige offene Modelle wirklich, und wo ist KI nicht die richtige Antwort?' },
              { title: 'Hardware-Auslegung:', text: 'GPU-Server, Workstation oder Edge-Gerät, dimensioniert nach Modellgröße, Nutzerzahl und Budget statt nach Datenblatt.' },
              { title: 'Modelle & Inferenz:', text: 'Auswahl und Betrieb offener Modelle mit bewährten Laufzeitumgebungen wie vLLM, llama.cpp oder Ollama, inklusive Quantisierung und Benchmarks mit Ihren Daten.' },
              { title: 'Ihr Wissen anbinden:', text: 'Retrieval-Augmented Generation (RAG) über Dokumente, Datenbanken und Ablagen, mit Quellenangaben und Rechtekonzept.' },
              { title: 'Integration:', text: 'Anbindung an bestehende Software, ERP, MES und Anlagen über APIs, damit die KI dort hilft, wo gearbeitet wird.' },
              { title: 'Absicherung:', text: 'Zugriffsschutz, Protokollierung, Netzsegmentierung und Tests gegen Prompt Injection und Datenabfluss.' },
              { title: 'Betrieb & Schulung:', text: 'Updates, Monitoring und Einweisung Ihres Teams, damit die Umgebung langfristig nutzbar bleibt.' },
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Einsatzbeispiele"
            title="Wo lokale KI im Unternehmen schnell Nutzen stiftet"
            intro="Der beste Einstieg ist ein konkretes Problem, das heute Zeit kostet. Typische Kandidaten:"
          />
          <div className="card-grid">
            {useCases.map(([icon, t, d]) => (
              <Card key={t} lang="de" icon={icon} title={t}>
                <p>{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container">
          <SectionHead eyebrow="Vorgehen" title="Klein anfangen, belastbar wachsen" center />
          <Steps
            steps={[
              { title: 'Workshop', text: 'Wir sammeln Anwendungsfälle, prüfen Daten und Rahmenbedingungen und bewerten Nutzen und Aufwand ehrlich.' },
              { title: 'Pilot', text: 'Ein überschaubarer Pilot mit Ihren echten Daten zeigt, was funktioniert, bevor Sie in Hardware investieren.' },
              { title: 'Aufbau', text: 'Wir installieren Hardware und Software, binden Ihre Systeme an und sichern die Umgebung ab.' },
              { title: 'Betrieb', text: 'Wir begleiten den Start, schulen Ihr Team und halten Modelle und Software aktuell.' },
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <SectionHead
            eyebrow="Warum UpTux"
            title="Softwareentwickler, keine KI-Verkäufer"
            intro="KI ist Software. Und mit Software, die zuverlässig laufen muss, beschäftigen wir uns seit über 15 Jahren."
          />
          <CheckList
            items={[
              { title: 'Erfahrung mit kritischen Systemen:', text: 'Wir entwickeln sicherheitskritische Software und wissen, wie man Systeme baut, auf die man sich verlassen kann.' },
              { title: 'Security im Blut:', text: 'Als Penetrationstester kennen wir die Angriffswege und denken Absicherung von Anfang an mit.' },
              { title: 'Herstellerunabhängig:', text: 'Wir empfehlen Hardware und Modelle nach Ihrem Bedarf, nicht nach Provision.' },
              { title: 'Ehrliche Einschätzung:', text: 'Wenn ein Cloud-Dienst, ein klassischer Algorithmus oder gar keine KI die bessere Lösung ist, sagen wir Ihnen das.' },
            ]}
          />
        </div>
      </section>
      <CtaBand lang="de"
        title="Sie wollen KI nutzen, ohne Ihre Daten herzugeben?"
        text="Erzählen Sie uns, welche Aufgabe Sie mit KI lösen möchten. Wir melden uns mit einer ehrlichen Einschätzung, was lokal möglich ist und was es kostet."
      />
    </>
  );
}
