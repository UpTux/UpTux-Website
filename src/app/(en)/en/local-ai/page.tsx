import LocalAi from '@/content/en/LocalAi';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('localai', 'en');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('localai', 'en')} />
      <LocalAi />
    </>
  );
}
