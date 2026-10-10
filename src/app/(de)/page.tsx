import Home from '@/content/de/Home';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('home', 'de');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('home', 'de')} />
      <Home />
    </>
  );
}
