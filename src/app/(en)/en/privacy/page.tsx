import Privacy from '@/content/en/Privacy';
import { JsonLd } from '@/components/Blocks';
import { pageMetadata, structuredData } from '@/lib/seo';

export const metadata = pageMetadata('privacy', 'en');

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData('privacy', 'en')} />
      <Privacy />
    </>
  );
}
