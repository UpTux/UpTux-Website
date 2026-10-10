import PenTest from '@/content/de/PenTest';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('pentest', 'de');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('pentest', 'de')} />
      <PenTest />
    </>
  );
}
