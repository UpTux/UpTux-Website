import Home from './pages/Home.jsx';
import Leistungen from './pages/Leistungen.jsx';
import Retrofit from './pages/Retrofit.jsx';
import MachineVision from './pages/MachineVision.jsx';
import PenTest from './pages/PenTest.jsx';
import Produkte from './pages/Produkte.jsx';
import CloudPlc from './pages/CloudPlc.jsx';
import Damper from './pages/Damper.jsx';
import AsamMdf from './pages/AsamMdf.jsx';
import UeberUns from './pages/UeberUns.jsx';
import Kontakt from './pages/Kontakt.jsx';
import Impressum from './pages/Impressum.jsx';
import Datenschutz from './pages/Datenschutz.jsx';
import NotFound from './pages/NotFound.jsx';

// One entry per page. title/description feed <title>, meta description and
// Open Graph tags; crumbs feed the BreadcrumbList structured data.
export const routes = [
  {
    path: '/', Page: Home, priority: '1.0',
    title: 'UpTux | Digitalisierung & Retrofit für Industrie und Mittelstand',
    description: 'UpTux unterstützt mittelständische Industrieunternehmen bei der Digitalisierung: Anlagendaten erfassen, Retrofit mit OPC UA & MQTT, individuelle Software und Bildverarbeitung.',
  },
  {
    path: '/leistungen/', Page: Leistungen, priority: '0.9', crumbs: ['Leistungen'],
    title: 'Leistungen: Industrie-Software, Retrofit & Anlagenanbindung | UpTux',
    description: 'Anlagendaten erfassen, Bestandsanlagen modernisieren, individuelle Software, industrielle Bildverarbeitung, Legacy-Modernisierung und Penetration Testing aus einer Hand.',
  },
  {
    path: '/retrofit/', Page: Retrofit, priority: '0.9', crumbs: ['Leistungen', 'Retrofit'],
    title: 'Retrofit von Bestandsanlagen: neue Schnittstellen für alte Maschinen | UpTux',
    description: 'Alte Maschinen fit für Industrie 4.0: Wir rüsten Bestandsanlagen mit OPC UA, MQTT und modernen HMIs nach und binden sie an MES, ERP und Cloud an.',
  },
  {
    path: '/machine-vision/', Page: MachineVision, priority: '0.8', crumbs: ['Leistungen', 'Machine Vision'],
    title: 'Machine Vision: industrielle Bildverarbeitung & optische Prüfung | UpTux',
    description: 'Montageprüfung, 3D-Oberflächeninspektion, optische Messtechnik im Mikrometerbereich sowie Code- und Zeichenerkennung für Ihre Produktion.',
  },
  {
    path: '/penetration-testing/', Page: PenTest, priority: '0.7', crumbs: ['Leistungen', 'Penetration Testing'],
    title: 'Penetration Testing für Embedded, OT und Software | UpTux',
    description: 'Sicherheitsprüfung vernetzter Anlagen, Embedded-Geräte, Software und APIs: strukturierte Penetrationstests mit priorisierten Befunden und Unterstützung bei der Behebung.',
  },
  {
    path: '/produkte/', Page: Produkte, priority: '0.7', crumbs: ['Produkte'],
    title: 'Produkte: Cloud PLC, Damper & AsamMdf | UpTux',
    description: 'Software-Bausteine aus der Praxis: Cloud PLC als SPS-Runtime für Ihre IT, die C++17-Bibliothek Damper und AsamMdf zum Lesen von MDF4-Dateien in .NET.',
  },
  {
    path: '/cloud-plc/', Page: CloudPlc, priority: '0.8', crumbs: ['Produkte', 'Cloud PLC'],
    title: 'Cloud PLC: SPS-Runtime in der Cloud oder On-Premises | UpTux',
    description: 'Die UpTux Cloud PLC führt Automatisierung auf AWS, Azure, Kubernetes oder eigener IT aus. Mit OPC UA, MQTT, DDS, Zenoh und EtherCAT, unabhängig von SPS-Hardware.',
  },
  {
    path: '/damper/', Page: Damper, priority: '0.6', crumbs: ['Produkte', 'Damper'],
    title: 'Damper: modulare C++17-Bibliothek für Embedded-Software | UpTux',
    description: 'Damper ist eine schlanke C++17-Bibliothek ohne externe Abhängigkeiten: Datenstrukturen, asynchrones I/O und Kryptografie für Embedded- und Unternehmenssoftware.',
  },
  {
    path: '/asammdf/', Page: AsamMdf, priority: '0.6', crumbs: ['Produkte', 'AsamMdf'],
    title: 'AsamMdf: MDF4-Dateien in .NET lesen (NuGet) | UpTux',
    description: 'AsamMdf ist eine performante .NET-Bibliothek zum Lesen von ASAM MDF4-Messdaten mit Streaming-API, Konvertierungen und Array-Kanälen. Kostenlos testen.',
  },
  {
    path: '/ueber-uns/', Page: UeberUns, priority: '0.6', crumbs: ['Über uns'],
    title: 'Über uns: IT aus der Industrie, für die Industrie | UpTux',
    description: 'UpTux ist ein junges IT-Unternehmen aus Mainhardt (Baden-Württemberg) mit über zehn Jahren Erfahrung in sicherheitskritischer Softwareentwicklung.',
  },
  {
    path: '/kontakt/', Page: Kontakt, priority: '0.7', crumbs: ['Kontakt'],
    title: 'Kontakt | UpTux',
    description: 'Sprechen Sie mit uns über Ihre Anlage, Ihr Protokoll oder Ihre Idee. UpTux UG, Mainhardt, info@uptux.de.',
  },
  {
    path: '/impressum/', Page: Impressum, priority: '0.2', crumbs: ['Impressum'],
    title: 'Impressum | UpTux',
    description: 'Impressum der UpTux UG (haftungsbeschränkt), Mainhardt.',
  },
  {
    path: '/datenschutz/', Page: Datenschutz, priority: '0.2', crumbs: ['Datenschutz'],
    title: 'Datenschutzerklärung | UpTux',
    description: 'Datenschutzerklärung der UpTux UG: keine Cookies, kein Tracking.',
  },
];

export const notFound = {
  path: '/404', Page: NotFound, noindex: true,
  title: 'Seite nicht gefunden | UpTux',
  description: 'Diese Seite existiert nicht.',
};

// Old URLs that should forward to their new home.
export const redirects = { '/philosophy/': '/ueber-uns/' };

export function findRoute(path) {
  return routes.find((r) => r.path === path) || notFound;
}
