import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import NotFound from '@/components/NotFound';
import { sharedMetadata } from '@/lib/seo';

// Becomes 404.html, which GitHub Pages shows for every unknown URL.
export const metadata: Metadata = {
  ...sharedMetadata,
  title: 'Seite nicht gefunden | UpTux',
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <SiteShell lang="de">
      <NotFound />
    </SiteShell>
  );
}
