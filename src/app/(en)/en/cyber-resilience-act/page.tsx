import Cra from '@/content/en/Cra';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('cra', 'en');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('cra', 'en')} />
      <Cra />
    </>
  );
}
