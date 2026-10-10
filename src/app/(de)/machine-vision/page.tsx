import MachineVision from '@/content/de/MachineVision';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('vision', 'de');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('vision', 'de')} />
      <MachineVision />
    </>
  );
}
