import AsamMdf from '@/content/en/AsamMdf';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('asammdf', 'en');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('asammdf', 'en')} />
      <AsamMdf />
    </>
  );
}
