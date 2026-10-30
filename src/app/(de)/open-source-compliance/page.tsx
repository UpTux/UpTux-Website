import OpenSourceCompliance from '@/content/de/OpenSourceCompliance';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('osscompliance', 'de');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('osscompliance', 'de')} />
      <OpenSourceCompliance />
    </>
  );
}
