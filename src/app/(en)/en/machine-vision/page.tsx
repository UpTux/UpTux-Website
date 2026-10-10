import MachineVision from '@/content/en/MachineVision';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('vision', 'en');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('vision', 'en')} />
      <MachineVision />
    </>
  );
}
