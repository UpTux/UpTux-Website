import Kontakt from '@/content/de/Kontakt';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('contact', 'de');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('contact', 'de')} />
      <Kontakt />
    </>
  );
}
