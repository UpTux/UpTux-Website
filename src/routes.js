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
import HomeEn from './pages/en/Home.jsx';
import ServicesEn from './pages/en/Services.jsx';
import RetrofitEn from './pages/en/Retrofit.jsx';
import MachineVisionEn from './pages/en/MachineVision.jsx';
import PenTestEn from './pages/en/PenTest.jsx';
import ProductsEn from './pages/en/Products.jsx';
import CloudPlcEn from './pages/en/CloudPlc.jsx';
import DamperEn from './pages/en/Damper.jsx';
import AsamMdfEn from './pages/en/AsamMdf.jsx';
import AboutEn from './pages/en/About.jsx';
import ContactEn from './pages/en/Contact.jsx';
import ImprintEn from './pages/en/Imprint.jsx';
import PrivacyEn from './pages/en/Privacy.jsx';
import { paths } from './paths.js';

// One entry per page. title/description feed <title>, meta description and
// Open Graph tags; crumbs feed the BreadcrumbList structured data.
export const routes = [
  {
    id: 'home', lang: 'de', path: '/', Page: Home, priority: '1.0',
    title: 'UpTux | Digitalisierung & Retrofit für Industrie und Mittelstand',
    description: 'UpTux unterstützt mittelständische Industrieunternehmen bei der Digitalisierung: Anlagendaten erfassen, Retrofit mit OPC UA & MQTT, individuelle Software und Bildverarbeitung.',
  },
  {
    id: 'services', lang: 'de', path: '/leistungen/', Page: Leistungen, priority: '0.9', crumbs: ['Leistungen'],
    title: 'Leistungen: Industrie-Software, Retrofit & Anlagenanbindung | UpTux',
    description: 'Anlagendaten erfassen, Bestandsanlagen modernisieren, individuelle Software, industrielle Bildverarbeitung, Legacy-Modernisierung und Penetration Testing aus einer Hand.',
  },
  {
    id: 'retrofit', lang: 'de', path: '/retrofit/', Page: Retrofit, priority: '0.9', crumbs: ['Leistungen', 'Retrofit'],
    title: 'Retrofit von Bestandsanlagen: neue Schnittstellen für alte Maschinen | UpTux',
    description: 'Alte Maschinen fit für Industrie 4.0: Wir rüsten Bestandsanlagen mit OPC UA, MQTT und modernen HMIs nach und binden sie an MES, ERP und Cloud an.',
  },
  {
    id: 'vision', lang: 'de', path: '/machine-vision/', Page: MachineVision, priority: '0.8', crumbs: ['Leistungen', 'Machine Vision'],
    title: 'Machine Vision: industrielle Bildverarbeitung & optische Prüfung | UpTux',
    description: 'Montageprüfung, 3D-Oberflächeninspektion, optische Messtechnik im Mikrometerbereich sowie Code- und Zeichenerkennung für Ihre Produktion.',
  },
  {
    id: 'pentest', lang: 'de', path: '/penetration-testing/', Page: PenTest, priority: '0.7', crumbs: ['Leistungen', 'Penetration Testing'],
    title: 'Penetration Testing für Embedded, OT und Software | UpTux',
    description: 'Sicherheitsprüfung vernetzter Anlagen, Embedded-Geräte, Software und APIs: strukturierte Penetrationstests mit priorisierten Befunden und Unterstützung bei der Behebung.',
  },
  {
    id: 'products', lang: 'de', path: '/produkte/', Page: Produkte, priority: '0.7', crumbs: ['Produkte'],
    title: 'Produkte: Cloud PLC, Damper & AsamMdf | UpTux',
    description: 'Software-Bausteine aus der Praxis: Cloud PLC als SPS-Runtime für Ihre IT, die C++17-Bibliothek Damper und AsamMdf zum Lesen von MDF4-Dateien in .NET.',
  },
  {
    id: 'cloudplc', lang: 'de', path: '/cloud-plc/', Page: CloudPlc, priority: '0.8', crumbs: ['Produkte', 'Cloud PLC'],
    title: 'Cloud PLC: SPS-Runtime in der Cloud oder On-Premises | UpTux',
    description: 'Die UpTux Cloud PLC führt Automatisierung auf AWS, Azure, Kubernetes oder eigener IT aus. Mit OPC UA, MQTT, DDS, Zenoh und EtherCAT, unabhängig von SPS-Hardware.',
  },
  {
    id: 'damper', lang: 'de', path: '/damper/', Page: Damper, priority: '0.6', crumbs: ['Produkte', 'Damper'],
    title: 'Damper: modulare C++17-Bibliothek für Embedded-Software | UpTux',
    description: 'Damper ist eine schlanke C++17-Bibliothek ohne externe Abhängigkeiten: Datenstrukturen, asynchrones I/O und Kryptografie für Embedded- und Unternehmenssoftware.',
  },
  {
    id: 'asammdf', lang: 'de', path: '/asammdf/', Page: AsamMdf, priority: '0.6', crumbs: ['Produkte', 'AsamMdf'],
    title: 'AsamMdf: MDF4-Dateien in .NET lesen (NuGet) | UpTux',
    description: 'AsamMdf ist eine performante .NET-Bibliothek zum Lesen von ASAM MDF4-Messdaten mit Streaming-API, Konvertierungen und Array-Kanälen. Kostenlos testen.',
  },
  {
    id: 'about', lang: 'de', path: '/ueber-uns/', Page: UeberUns, priority: '0.6', crumbs: ['Über uns'],
    title: 'Über uns: IT aus der Industrie, für die Industrie | UpTux',
    description: 'UpTux ist ein junges IT-Unternehmen aus Mainhardt (Baden-Württemberg) mit über zehn Jahren Erfahrung in sicherheitskritischer Softwareentwicklung.',
  },
  {
    id: 'contact', lang: 'de', path: '/kontakt/', Page: Kontakt, priority: '0.7', crumbs: ['Kontakt'],
    title: 'Kontakt | UpTux',
    description: 'Sprechen Sie mit uns über Ihre Anlage, Ihr Protokoll oder Ihre Idee. UpTux UG, Mainhardt, info@uptux.de.',
  },
  {
    id: 'imprint', lang: 'de', path: '/impressum/', Page: Impressum, priority: '0.2', crumbs: ['Impressum'],
    title: 'Impressum | UpTux',
    description: 'Impressum der UpTux UG (haftungsbeschränkt), Mainhardt.',
  },
  {
    id: 'privacy', lang: 'de', path: '/datenschutz/', Page: Datenschutz, priority: '0.2', crumbs: ['Datenschutz'],
    title: 'Datenschutzerklärung | UpTux',
    description: 'Datenschutzerklärung der UpTux UG: keine Cookies, kein Tracking.',
  },
  // English
  {
    id: 'home', lang: 'en', path: '/en/', Page: HomeEn, priority: '0.9',
    title: 'UpTux | Digitalisation & retrofit for industrial SMEs',
    description: 'UpTux helps mid-sized manufacturers go digital: machine data acquisition, retrofit with OPC UA & MQTT, custom software and machine vision.',
  },
  {
    id: 'services', lang: 'en', path: '/en/services/', Page: ServicesEn, priority: '0.8', crumbs: ['Services'],
    title: 'Services: industrial software, retrofit & machine connectivity | UpTux',
    description: 'Machine data acquisition, modernising existing equipment, custom software, machine vision, legacy modernisation and penetration testing from one partner.',
  },
  {
    id: 'retrofit', lang: 'en', path: '/en/retrofit/', Page: RetrofitEn, priority: '0.8', crumbs: ['Services', 'Retrofit'],
    title: 'Retrofit for existing machines: modern interfaces for legacy equipment | UpTux',
    description: 'Get legacy machines ready for Industry 4.0: we retrofit existing equipment with OPC UA, MQTT and modern HMIs and connect it to MES, ERP and the cloud.',
  },
  {
    id: 'vision', lang: 'en', path: '/en/machine-vision/', Page: MachineVisionEn, priority: '0.7', crumbs: ['Services', 'Machine vision'],
    title: 'Machine vision: industrial image processing & optical inspection | UpTux',
    description: 'Assembly inspection, 3D surface inspection, optical metrology with micrometre accuracy and code and character reading for your production.',
  },
  {
    id: 'pentest', lang: 'en', path: '/en/penetration-testing/', Page: PenTestEn, priority: '0.6', crumbs: ['Services', 'Penetration testing'],
    title: 'Penetration testing for embedded, OT and software | UpTux',
    description: 'Security testing of connected machines, embedded devices, software and APIs: structured penetration tests with prioritised findings and help with fixes.',
  },
  {
    id: 'products', lang: 'en', path: '/en/products/', Page: ProductsEn, priority: '0.6', crumbs: ['Products'],
    title: 'Products: Cloud PLC, Damper & AsamMdf | UpTux',
    description: 'Software building blocks from real projects: Cloud PLC as a PLC runtime for your IT, the C++17 library Damper and AsamMdf for reading MDF4 files in .NET.',
  },
  {
    id: 'cloudplc', lang: 'en', path: '/en/cloud-plc/', Page: CloudPlcEn, priority: '0.7', crumbs: ['Products', 'Cloud PLC'],
    title: 'Cloud PLC: PLC runtime in the cloud or on-premises | UpTux',
    description: 'The UpTux Cloud PLC runs automation on AWS, Azure, Kubernetes or your own IT, with OPC UA, MQTT, DDS, Zenoh and EtherCAT, independent of PLC hardware.',
  },
  {
    id: 'damper', lang: 'en', path: '/en/damper/', Page: DamperEn, priority: '0.5', crumbs: ['Products', 'Damper'],
    title: 'Damper: modular C++17 library for embedded software | UpTux',
    description: 'Damper is a lean C++17 library without external dependencies: data structures, asynchronous I/O and cryptography for embedded and enterprise software.',
  },
  {
    id: 'asammdf', lang: 'en', path: '/en/asammdf/', Page: AsamMdfEn, priority: '0.5', crumbs: ['Products', 'AsamMdf'],
    title: 'AsamMdf: read MDF4 files in .NET (NuGet) | UpTux',
    description: 'AsamMdf is a high-performance .NET library for reading ASAM MDF4 measurement data with a streaming API, conversions and array channels. Try it for free.',
  },
  {
    id: 'about', lang: 'en', path: '/en/about/', Page: AboutEn, priority: '0.5', crumbs: ['About us'],
    title: 'About us: IT from industry, for industry | UpTux',
    description: 'UpTux is a young IT company from Mainhardt, Germany, with more than ten years of experience in safety-critical software development.',
  },
  {
    id: 'contact', lang: 'en', path: '/en/contact/', Page: ContactEn, priority: '0.6', crumbs: ['Contact'],
    title: 'Contact | UpTux',
    description: 'Talk to us about your machine, protocol or idea. UpTux UG, Mainhardt, Germany, info@uptux.de.',
  },
  {
    id: 'imprint', lang: 'en', path: '/en/imprint/', Page: ImprintEn, priority: '0.1', crumbs: ['Legal notice'],
    title: 'Legal notice | UpTux',
    description: 'Legal notice of UpTux UG (haftungsbeschränkt), Mainhardt, Germany.',
  },
  {
    id: 'privacy', lang: 'en', path: '/en/privacy/', Page: PrivacyEn, priority: '0.1', crumbs: ['Privacy'],
    title: 'Privacy policy | UpTux',
    description: 'Privacy policy of UpTux UG: no cookies, no tracking.',
  },
];

export const notFound = {
  id: 'notfound', lang: 'de', path: '/404', Page: NotFound, noindex: true,
  title: 'Seite nicht gefunden | UpTux',
  description: 'Diese Seite existiert nicht.',
};

// Old URLs that should forward to their new home.
export const redirects = { '/philosophy/': '/ueber-uns/' };

export function findRoute(path) {
  return routes.find((r) => r.path === path) || notFound;
}

// The same page in each language, for the language switch and hreflang.
export function alternatesOf(route) {
  return paths[route.id] || { de: '/', en: '/en/' };
}
