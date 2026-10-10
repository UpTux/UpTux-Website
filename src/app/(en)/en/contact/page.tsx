import Contact from '@/content/en/Contact';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('contact', 'en');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('contact', 'en')} />
      <Contact />
    </>
  );
}
