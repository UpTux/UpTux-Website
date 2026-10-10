import CloudPlc from '@/content/de/CloudPlc';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('cloudplc', 'de');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('cloudplc', 'de')} />
      <CloudPlc />
    </>
  );
}
