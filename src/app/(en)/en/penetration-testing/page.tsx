import PenTest from '@/content/en/PenTest';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('pentest', 'en');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('pentest', 'en')} />
      <PenTest />
    </>
  );
}
