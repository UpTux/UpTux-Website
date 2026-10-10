import Services from '@/content/en/Services';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('services', 'en');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('services', 'en')} />
      <Services />
    </>
  );
}
