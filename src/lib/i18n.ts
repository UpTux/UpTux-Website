import type { Lang } from './paths';

// Interface text shared by all pages (navigation, footer, buttons).
type UiText = {
  skip: string; homeLabel: string; menu: string; mainNav: string;
  nav: { services: string; retrofit: string; products: string; about: string };
  cta: string; langLabel: string; claim: string;
  footServices: string; footProducts: string; footContact: string;
  footLinks: Record<'retrofit' | 'data' | 'software' | 'vision' | 'pentest' | 'localai' | 'damper' | 'asammdf' | 'all', string>;
  contact: string; imprint: string; privacy: string; country: string;
  crumbsLabel: string; home: string; more: string;
  ctaTitle: string; ctaText: string; protoMoreTitle: string; protoMoreText: string;
  art: Record<'machine' | 'year' | 'bus' | 'dash' | 'avail' | 'it' | 'kpi', string>;
};

export const ui = {
  de: {
    skip: 'Zum Inhalt springen',
    homeLabel: 'UpTux Startseite',
    menu: 'Menü',
    mainNav: 'Hauptnavigation',
    nav: { services: 'Leistungen', retrofit: 'Retrofit', products: 'Produkte', about: 'Über uns' },
    cta: 'Projekt anfragen',
    langLabel: 'Sprache',
    claim: 'Digitalisierung für den Mittelstand. Aus der Industrie, für die Industrie.',
    footServices: 'Leistungen',
    footProducts: 'Produkte',
    footContact: 'Kontakt',
    footLinks: {
      retrofit: 'Retrofit & Schnittstellen',
      data: 'Anlagendaten & Monitoring',
      software: 'Individuelle Software',
      vision: 'Industrielle Bildverarbeitung',
      pentest: 'Security & Penetration Testing',
      localai: 'Lokale KI',
      damper: 'Damper C++ Bibliothek',
      asammdf: 'AsamMdf für .NET',
      all: 'Alle Produkte',
    },
    contact: 'Kontakt',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    country: 'Deutschland',
    crumbsLabel: 'Brotkrümelnavigation',
    home: 'Start',
    more: 'Mehr erfahren',
    ctaTitle: 'Lassen Sie uns über Ihre Anlage sprechen.',
    ctaText: 'Erzählen Sie uns, welche Maschine, welches Protokoll oder welche Idee Sie beschäftigt. Wir melden uns mit einer ehrlichen Einschätzung, was möglich ist.',
    protoMoreTitle: 'Ihr Protokoll fehlt?',
    protoMoreText: 'Proprietäre Schnittstellen und alte Feldbusse sind unser Alltag. Sprechen Sie uns an.',
    art: { machine: 'Bestandsanlage', year: 'Baujahr 2004', bus: 'Feldbus · seriell', dash: 'Live-Dashboard', avail: 'Verfügbarkeit', it: 'IT-Systeme', kpi: '98,4 %' },
  },
  en: {
    skip: 'Skip to content',
    homeLabel: 'UpTux home',
    menu: 'Menu',
    mainNav: 'Main navigation',
    nav: { services: 'Services', retrofit: 'Retrofit', products: 'Products', about: 'About us' },
    cta: 'Start a project',
    langLabel: 'Language',
    claim: 'Digitalisation for mid-sized manufacturers. From industry, for industry.',
    footServices: 'Services',
    footProducts: 'Products',
    footContact: 'Contact',
    footLinks: {
      retrofit: 'Retrofit & interfaces',
      data: 'Machine data & monitoring',
      software: 'Custom software',
      vision: 'Machine vision',
      pentest: 'Security & penetration testing',
      localai: 'Local AI',
      damper: 'Damper C++ library',
      asammdf: 'AsamMdf for .NET',
      all: 'All products',
    },
    contact: 'Contact',
    imprint: 'Legal notice',
    privacy: 'Privacy',
    country: 'Germany',
    crumbsLabel: 'Breadcrumb',
    home: 'Home',
    more: 'Learn more',
    ctaTitle: "Let's talk about your machines.",
    ctaText: "Tell us which machine, protocol or idea is on your mind. We'll get back to you with an honest assessment of what's possible.",
    protoMoreTitle: 'Protocol not listed?',
    protoMoreText: 'Proprietary interfaces and legacy fieldbuses are our daily business. Just ask us.',
    art: { machine: 'Existing machine', year: 'Built 2004', bus: 'Fieldbus · serial', dash: 'Live dashboard', avail: 'Availability', it: 'IT systems', kpi: '98.4 %' },
  },
} satisfies Record<Lang, UiText>;
