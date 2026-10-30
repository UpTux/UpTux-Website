import OpenSourceCompliance from '@/content/en/OpenSourceCompliance';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('osscompliance', 'en');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('osscompliance', 'en')} />
      <OpenSourceCompliance />
    </>
  );
}
