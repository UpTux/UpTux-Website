import Leistungen from '@/content/de/Leistungen';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('services', 'de');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('services', 'de')} />
      <Leistungen />
    </>
  );
}
