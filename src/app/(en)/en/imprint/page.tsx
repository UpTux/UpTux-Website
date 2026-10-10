import Imprint from '@/content/en/Imprint';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('imprint', 'en');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('imprint', 'en')} />
      <Imprint />
    </>
  );
}
