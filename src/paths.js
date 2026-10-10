// URL of every page in each language. Pages that exist in both languages
// share an id, which is how the language switch finds the counterpart.
export const paths = {
  home: { de: '/', en: '/en/' },
  services: { de: '/leistungen/', en: '/en/services/' },
  retrofit: { de: '/retrofit/', en: '/en/retrofit/' },
  vision: { de: '/machine-vision/', en: '/en/machine-vision/' },
  pentest: { de: '/penetration-testing/', en: '/en/penetration-testing/' },
  products: { de: '/produkte/', en: '/en/products/' },
  cloudplc: { de: '/cloud-plc/', en: '/en/cloud-plc/' },
  damper: { de: '/damper/', en: '/en/damper/' },
  asammdf: { de: '/asammdf/', en: '/en/asammdf/' },
  about: { de: '/ueber-uns/', en: '/en/about/' },
  contact: { de: '/kontakt/', en: '/en/contact/' },
  imprint: { de: '/impressum/', en: '/en/imprint/' },
  privacy: { de: '/datenschutz/', en: '/en/privacy/' },
};

export function pathOf(id, lang, anchor) {
  return paths[id][lang] + (anchor ? `#${anchor}` : '');
}
