import AsamMdf from '@/content/de/AsamMdf';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('asammdf', 'de');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('asammdf', 'de')} />
      <AsamMdf />
    </>
  );
}
