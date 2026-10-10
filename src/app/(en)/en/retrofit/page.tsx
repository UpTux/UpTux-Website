import Retrofit from '@/content/en/Retrofit';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('retrofit', 'en');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('retrofit', 'en')} />
      <Retrofit />
    </>
  );
}
