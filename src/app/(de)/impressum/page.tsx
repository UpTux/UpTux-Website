import Impressum from '@/content/de/Impressum';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('imprint', 'de');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('imprint', 'de')} />
      <Impressum />
    </>
  );
}
