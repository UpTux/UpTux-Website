import UeberUns from '@/content/de/UeberUns';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('about', 'de');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('about', 'de')} />
      <UeberUns />
    </>
  );
}
