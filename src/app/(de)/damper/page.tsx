import Damper from '@/content/de/Damper';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('damper', 'de');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('damper', 'de')} />
      <Damper />
    </>
  );
}
