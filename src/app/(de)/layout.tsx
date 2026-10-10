import type { ReactNode } from 'react';
import { SiteShell } from '@/components/SiteShell';
import { sharedMetadata } from '@/lib/seo';

export const metadata = sharedMetadata;

export default function GermanLayout({ children }: { children: ReactNode }) {
  return <SiteShell lang="de">{children}</SiteShell>;
}
