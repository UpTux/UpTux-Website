import Produkte from '@/content/de/Produkte';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('products', 'de');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('products', 'de')} />
      <Produkte />
    </>
  );
}
