import Datenschutz from '@/content/de/Datenschutz';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('privacy', 'de');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('privacy', 'de')} />
      <Datenschutz />
    </>
  );
}
