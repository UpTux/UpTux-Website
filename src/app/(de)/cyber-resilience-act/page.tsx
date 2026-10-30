import Cra from '@/content/de/Cra';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('cra', 'de');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('cra', 'de')} />
      <Cra />
    </>
  );
}
