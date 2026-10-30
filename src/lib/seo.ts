import type { Metadata } from 'next';
import { basePath, isTestBuild, site } from './site';
import { paths, type Lang, type PageId, type StaticPageId } from './paths';
import { detailProducts } from '@/content/products';

type PageText = { title: string; description: string; crumbs?: string[] };

// Title, meta description and breadcrumb names of every page, per language.
const staticMeta: Record<StaticPageId, { priority: number } & Record<Lang, PageText>> = {
  home: {
    priority: 1.0,
    de: { title: "UpTux | Digitalisierung & Retrofit für Industrie und Mittelstand", description: "UpTux unterstützt mittelständische Industrieunternehmen bei der Digitalisierung: Anlagendaten erfassen, Retrofit mit OPC UA & MQTT, individuelle Software und Bildverarbeitung." },
    en: { title: "UpTux | Digitalisation & retrofit for industrial SMEs", description: "UpTux helps mid-sized manufacturers go digital: machine data acquisition, retrofit with OPC UA & MQTT, custom software and machine vision." },
  },
  services: {
    priority: 0.9,
    de: { title: "Leistungen: Industrie-Software, Retrofit & Anlagenanbindung | UpTux", description: "Anlagendaten erfassen, Bestandsanlagen modernisieren, individuelle Software, industrielle Bildverarbeitung, Legacy-Modernisierung, Penetration Testing und lokale KI aus einer Hand.", crumbs: ["Leistungen"] },
    en: { title: "Services: industrial software, retrofit & machine connectivity | UpTux", description: "Machine data acquisition, modernising existing equipment, custom software, machine vision, legacy modernisation, penetration testing and local AI from one partner.", crumbs: ["Services"] },
  },
  retrofit: {
    priority: 0.9,
    de: { title: "Retrofit von Bestandsanlagen: neue Schnittstellen für alte Maschinen | UpTux", description: "Alte Maschinen fit für Industrie 4.0: Wir rüsten Bestandsanlagen mit OPC UA, MQTT und modernen HMIs nach und binden sie an MES, ERP und Cloud an.", crumbs: ["Leistungen", "Retrofit"] },
    en: { title: "Retrofit for existing machines: modern interfaces for legacy equipment | UpTux", description: "Get legacy machines ready for Industry 4.0: we retrofit existing equipment with OPC UA, MQTT and modern HMIs and connect it to MES, ERP and the cloud.", crumbs: ["Services", "Retrofit"] },
  },
  vision: {
    priority: 0.8,
    de: { title: "Machine Vision: industrielle Bildverarbeitung & optische Prüfung | UpTux", description: "Montageprüfung, 3D-Oberflächeninspektion, optische Messtechnik im Mikrometerbereich sowie Code- und Zeichenerkennung für Ihre Produktion.", crumbs: ["Leistungen", "Machine Vision"] },
    en: { title: "Machine vision: industrial image processing & optical inspection | UpTux", description: "Assembly inspection, 3D surface inspection, optical metrology with micrometre accuracy and code and character reading for your production.", crumbs: ["Services", "Machine vision"] },
  },
  pentest: {
    priority: 0.7,
    de: { title: "Penetration Testing für Embedded, OT und Software | UpTux", description: "Sicherheitsprüfung vernetzter Anlagen, Embedded-Geräte, Software und APIs: strukturierte Penetrationstests mit priorisierten Befunden und Unterstützung bei der Behebung.", crumbs: ["Leistungen", "Penetration Testing"] },
    en: { title: "Penetration testing for embedded, OT and software | UpTux", description: "Security testing of connected machines, embedded devices, software and APIs: structured penetration tests with prioritised findings and help with fixes.", crumbs: ["Services", "Penetration testing"] },
  },
  localai: {
    priority: 0.8,
    de: { title: "Lokale KI: Beratung & Einrichtung von KI auf eigener Hardware | UpTux", description: "Wir beraten zu lokaler KI und richten sie ein: Hardware-Auslegung, offene Sprachmodelle, RAG über Ihre Dokumente, Integration und Absicherung. Ihre Daten bleiben im Haus.", crumbs: ["Leistungen", "Lokale KI"] },
    en: { title: "Local AI: consulting & setup for AI on your own hardware | UpTux", description: "We advise on local AI and set it up: hardware sizing, open language models, RAG over your documents, integration and security. Your data stays in-house.", crumbs: ["Services", "Local AI"] },
  },
  products: {
    priority: 0.7,
    de: { title: "Produkte: Cloud PLC, Damper & AsamMdf | UpTux", description: "Software-Bausteine aus der Praxis: Cloud PLC als SPS-Runtime für Ihre IT, die C++17-Bibliothek Damper und AsamMdf zum Lesen von MDF4-Dateien in .NET.", crumbs: ["Produkte"] },
    en: { title: "Products: Cloud PLC, Damper & AsamMdf | UpTux", description: "Software building blocks from real projects: Cloud PLC as a PLC runtime for your IT, the C++17 library Damper and AsamMdf for reading MDF4 files in .NET.", crumbs: ["Products"] },
  },
  cloudplc: {
    priority: 0.8,
    de: { title: "Cloud PLC: SPS-Runtime in der Cloud oder On-Premises | UpTux", description: "Die UpTux Cloud PLC führt Automatisierung auf AWS, Azure, Kubernetes oder eigener IT aus. Mit OPC UA, MQTT, DDS, Zenoh und EtherCAT, unabhängig von SPS-Hardware.", crumbs: ["Produkte", "Cloud PLC"] },
    en: { title: "Cloud PLC: PLC runtime in the cloud or on-premises | UpTux", description: "The UpTux Cloud PLC runs automation on AWS, Azure, Kubernetes or your own IT, with OPC UA, MQTT, DDS, Zenoh and EtherCAT, independent of PLC hardware.", crumbs: ["Products", "Cloud PLC"] },
  },
  damper: {
    priority: 0.6,
    de: { title: "Damper: modulare C++17-Bibliothek für Embedded-Software | UpTux", description: "Damper ist eine schlanke C++17-Bibliothek ohne externe Abhängigkeiten: Datenstrukturen, asynchrones I/O und Kryptografie für Embedded- und Unternehmenssoftware.", crumbs: ["Produkte", "Damper"] },
    en: { title: "Damper: modular C++17 library for embedded software | UpTux", description: "Damper is a lean C++17 library without external dependencies: data structures, asynchronous I/O and cryptography for embedded and enterprise software.", crumbs: ["Products", "Damper"] },
  },
  asammdf: {
    priority: 0.6,
    de: { title: "AsamMdf: MDF4-Dateien in .NET lesen (NuGet) | UpTux", description: "AsamMdf ist eine performante .NET-Bibliothek zum Lesen von ASAM MDF4-Messdaten mit Streaming-API, Konvertierungen und Array-Kanälen. Kostenlos testen.", crumbs: ["Produkte", "AsamMdf"] },
    en: { title: "AsamMdf: read MDF4 files in .NET (NuGet) | UpTux", description: "AsamMdf is a high-performance .NET library for reading ASAM MDF4 measurement data with a streaming API, conversions and array channels. Try it for free.", crumbs: ["Products", "AsamMdf"] },
  },
  about: {
    priority: 0.6,
    de: { title: "Über uns: IT aus der Industrie, für die Industrie | UpTux", description: "UpTux ist ein junges IT-Unternehmen aus Mainhardt (Baden-Württemberg) mit über 15 Jahren Erfahrung in sicherheitskritischer Softwareentwicklung.", crumbs: ["Über uns"] },
    en: { title: "About us: IT from industry, for industry | UpTux", description: "UpTux is a young IT company from Mainhardt, Germany, with more than 15 years of experience in safety-critical software development.", crumbs: ["About us"] },
  },
  contact: {
    priority: 0.7,
    de: { title: "Kontakt | UpTux", description: "Sprechen Sie mit uns über Ihre Anlage, Ihr Protokoll oder Ihre Idee. UpTux UG, Mainhardt, info@uptux.de.", crumbs: ["Kontakt"] },
    en: { title: "Contact | UpTux", description: "Talk to us about your machine, protocol or idea. UpTux UG, Mainhardt, Germany, info@uptux.de.", crumbs: ["Contact"] },
  },
  imprint: {
    priority: 0.2,
    de: { title: "Impressum | UpTux", description: "Impressum der UpTux UG (haftungsbeschränkt), Mainhardt.", crumbs: ["Impressum"] },
    en: { title: "Legal notice | UpTux", description: "Legal notice of UpTux UG (haftungsbeschränkt), Mainhardt, Germany.", crumbs: ["Legal notice"] },
  },
  privacy: {
    priority: 0.2,
    de: { title: "Datenschutzerklärung | UpTux", description: "Datenschutzerklärung der UpTux UG: keine Cookies, kein Tracking.", crumbs: ["Datenschutz"] },
    en: { title: "Privacy policy | UpTux", description: "Privacy policy of UpTux UG: no cookies, no tracking.", crumbs: ["Privacy"] },
  },
  osscompliance: {
    priority: 0.2,
    de: { title: "Open Source Compliance | UpTux", description: "Open Source Compliance bei UpTux: selbstzertifiziert nach OpenChain ISO/IEC 5230 und ISO/IEC 18974, Lizenz-Compliance, Anfragen nach Quellcode und Meldung von Sicherheitslücken.", crumbs: ["Open Source Compliance"] },
    en: { title: "Open source compliance | UpTux", description: "Open source compliance at UpTux: self-certified under OpenChain ISO/IEC 5230 and ISO/IEC 18974, licence compliance, source code requests and reporting security vulnerabilities.", crumbs: ["Open source compliance"] },
  },
};

export const pageMeta: Record<PageId, { priority: number } & Record<Lang, PageText>> = {
  ...staticMeta,
  ...Object.fromEntries(
    detailProducts.map((p) => [
      `product:${p.slug}`,
      {
        priority: 0.6,
        de: { title: p.de.seoTitle ?? `${p.name} | UpTux`, description: p.de.seoDescription ?? p.de.summary, crumbs: ['Produkte', p.name] },
        en: { title: p.en.seoTitle ?? `${p.name} | UpTux`, description: p.en.seoDescription ?? p.en.summary, crumbs: ['Products', p.name] },
      },
    ]),
  ),
};

/** Next.js metadata for one page: title, description, canonical, hreflang, Open Graph. */
export function pageMetadata(id: PageId, lang: Lang): Metadata {
  const { title, description } = pageMeta[id][lang];
  const url = `${site.url}${paths[id][lang]}`;
  return {
    metadataBase: new URL(site.url),
    title: { absolute: title },
    description,
    robots: isTestBuild ? { index: false, follow: false } : undefined,
    alternates: isTestBuild
      ? undefined
      : {
          canonical: url,
          languages: { de: `${site.url}${paths[id].de}`, en: `${site.url}${paths[id].en}`, 'x-default': `${site.url}${paths[id].de}` },
        },
    openGraph: {
      type: 'website',
      siteName: 'UpTux',
      locale: lang === 'en' ? 'en_GB' : 'de_DE',
      title,
      description,
      url,
      images: [{ url: `${site.url}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image' },
  };
}

/** Icons and theme color shared by both language layouts. */
export const sharedMetadata: Metadata = {
  icons: {
    icon: [
      { url: `${basePath}/favicon.svg`, type: 'image/svg+xml' },
      { url: `${basePath}/favicon-32.png`, sizes: '32x32', type: 'image/png' },
    ],
    apple: `${basePath}/apple-touch-icon.png`,
  },
};

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: `${site.url}/`,
  logo: `${site.url}/logo.png`,
  email: site.email,
  slogan: 'Get your software right',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.street,
    postalCode: site.zip,
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
  vatID: site.vatId,
  knowsAbout: ['Industrie 4.0', 'Retrofit', 'OPC UA', 'MQTT', 'EtherCAT', 'DDS', 'Zenoh', 'CANopen', 'ASAM MDF4', 'Machine Vision', 'Embedded Software', 'Penetration Testing', 'Local AI', 'Large Language Models'],
  areaServed: 'DE',
};

/** Structured data (schema.org) for one page. */
export function structuredData(id: PageId, lang: Lang): object[] {
  if (id === 'home') {
    return [
      organization,
      { '@context': 'https://schema.org', '@type': 'WebSite', name: 'UpTux', url: `${site.url}${paths.home[lang]}`, inLanguage: lang, publisher: { '@id': organization['@id'] } },
    ];
  }
  const crumbs = pageMeta[id][lang].crumbs ?? [];
  const items = [{ name: lang === 'en' ? 'Home' : 'Start', path: paths.home[lang] }];
  crumbs.forEach((name, i) => {
    const isLast = i === crumbs.length - 1;
    const parent = (Object.keys(pageMeta) as PageId[]).find((p) => pageMeta[p][lang].crumbs?.at(-1) === name);
    items.push({ name, path: isLast ? paths[id][lang] : parent ? paths[parent][lang] : paths.home[lang] });
  });
  return [{
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${site.url}${it.path}` })),
  }];
}
