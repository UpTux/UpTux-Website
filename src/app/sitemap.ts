import type { MetadataRoute } from 'next';
import { pageIds, paths } from '@/lib/paths';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return pageIds.flatMap((id) =>
    (['de', 'en'] as const).map((lang) => ({
      url: `${site.url}${paths[id][lang]}`,
      lastModified: now,
      priority: lang === 'de' ? pageMeta[id].priority : Math.round(pageMeta[id].priority * 9) / 10,
      alternates: { languages: { de: `${site.url}${paths[id].de}`, en: `${site.url}${paths[id].en}` } },
    })),
  );
}
