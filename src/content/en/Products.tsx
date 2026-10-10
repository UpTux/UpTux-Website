import { CtaBand, PageHero } from '@/components/Blocks';
import { ProductOverview } from '@/components/ProductDetail';
import { products } from '@/content/products';

export default function Products() {
  return (
    <>
      <PageHero lang="en"
        crumbs={[{ name: 'Products' }]}
        eyebrow="Products"
        title="Software building blocks from real projects"
        lead="Our projects have produced products we use ourselves every day: from protocol stacks and PLC connectivity to real-time frameworks and HMI software. They speed up your development and integrate flexibly into existing systems."
      />
      <ProductOverview lang="en" products={products} />
      <CtaBand lang="en" title="Interested in one of our products?" text="We're happy to advise you on use cases, licensing and integration into your project." />
    </>
  );
}
