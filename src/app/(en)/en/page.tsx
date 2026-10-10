import Home from '@/content/en/Home';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('home', 'en');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('home', 'en')} />
      <Home />
    </>
  );
}
