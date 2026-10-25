import { detailProducts } from '@/content/products';

export type Lang = 'de' | 'en';
export const langs: Lang[] = ['de', 'en'];

// URL of every page in each language. Pages that exist in both languages
// share an id, which is how the language switch finds the counterpart.
const staticPaths = {
  home: { de: '/', en: '/en/' },
  services: { de: '/leistungen/', en: '/en/services/' },
  retrofit: { de: '/retrofit/', en: '/en/retrofit/' },
  vision: { de: '/machine-vision/', en: '/en/machine-vision/' },
  pentest: { de: '/penetration-testing/', en: '/en/penetration-testing/' },
  localai: { de: '/lokale-ki/', en: '/en/local-ai/' },
  products: { de: '/produkte/', en: '/en/products/' },
  cloudplc: { de: '/cloud-plc/', en: '/en/cloud-plc/' },
  damper: { de: '/damper/', en: '/en/damper/' },
  asammdf: { de: '/asammdf/', en: '/en/asammdf/' },
  about: { de: '/ueber-uns/', en: '/en/about/' },
  contact: { de: '/kontakt/', en: '/en/contact/' },
  imprint: { de: '/impressum/', en: '/en/imprint/' },
  privacy: { de: '/datenschutz/', en: '/en/privacy/' },
} satisfies Record<string, Record<Lang, string>>;

export type StaticPageId = keyof typeof staticPaths;
/** Static pages by name, generated product pages as `product:<slug>`. */
export type PageId = StaticPageId | `product:${string}`;

export const paths: Record<PageId, Record<Lang, string>> = {
  ...staticPaths,
  ...Object.fromEntries(
    detailProducts.map((p) => [`product:${p.slug}`, { de: `/produkte/${p.slug}/`, en: `/en/products/${p.slug}/` }]),
  ),
};
export const pageIds = Object.keys(paths) as PageId[];

export function pathOf(id: PageId, lang: Lang, anchor?: string): string {
  return paths[id][lang] + (anchor ? `#${anchor}` : '');
}

/** Finds which page a URL path (without base path) belongs to. */
export function pageFromPath(pathname: string): { id: PageId; lang: Lang } | null {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  for (const id of pageIds) {
    for (const lang of langs) {
      if (paths[id][lang] === normalized) return { id, lang };
    }
  }
  return null;
}
