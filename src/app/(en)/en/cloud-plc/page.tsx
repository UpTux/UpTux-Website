import CloudPlc from '@/content/en/CloudPlc';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('cloudplc', 'en');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('cloudplc', 'en')} />
      <CloudPlc />
    </>
  );
}
