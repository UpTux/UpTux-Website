import Products from '@/content/en/Products';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('products', 'en');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('products', 'en')} />
      <Products />
    </>
  );
}
