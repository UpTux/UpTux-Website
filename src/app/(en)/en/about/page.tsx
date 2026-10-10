import About from '@/content/en/About';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('about', 'en');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('about', 'en')} />
      <About />
    </>
  );
}
