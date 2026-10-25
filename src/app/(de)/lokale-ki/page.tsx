import LokaleKi from '@/content/de/LokaleKi';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('localai', 'de');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('localai', 'de')} />
      <LokaleKi />
    </>
  );
}
