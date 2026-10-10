import Damper from '@/content/en/Damper';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('damper', 'en');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('damper', 'en')} />
      <Damper />
    </>
  );
}
