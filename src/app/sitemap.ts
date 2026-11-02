import type { MetadataRoute } from 'next';
import { pageIds, paths } from '@/lib/paths';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

// No lastModified: every build would stamp all pages with the build date, and
// search engines ignore the field once it proves unreliable.
export default function sitemap(): MetadataRoute.Sitemap {
  return pageIds.flatMap((id) =>
    (['de', 'en'] as const).map((lang) => ({
      url: `${site.url}${paths[id][lang]}`,
      priority: lang === 'de' ? pageMeta[id].priority : Math.round(pageMeta[id].priority * 9) / 10,
      alternates: { languages: { de: `${site.url}${paths[id].de}`, en: `${site.url}${paths[id].en}` } },
    })),
  );
}
