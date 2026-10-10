import { notFound } from 'next/navigation';
import { ProductDetail } from '@/components/ProductDetail';
import { JsonLd } from '@/components/Blocks';
import { detailProducts } from '@/content/products';
import { pageMetadata, structuredData } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return detailProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return pageMetadata(`product:${slug}`, 'de');
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = detailProducts.find((p) => p.slug === slug);
  if (!product) notFound();
  return (
    <>
      <JsonLd data={structuredData(`product:${slug}`, 'de')} />
      <ProductDetail product={product} lang="de" />
    </>
  );
}
