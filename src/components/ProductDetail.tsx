import Link from 'next/link';
import { Card, CheckList, CtaBand, PageHero, SectionHead } from './Blocks';
import { pathOf, type Lang } from '@/lib/paths';
import { productGroups, productHref, type Product } from '@/content/products';

const labels = {
  de: { products: 'Produkte', product: 'Produkt', features: 'Funktionen', facts: 'Auf einen Blick', tech: 'Technologien', cta: 'Angebot anfragen', ctaTitle: (n: string) => `Interesse an ${n}?`, ctaText: 'Wir beraten Sie zu Lizenz, Integration und Anpassungen für Ihr Projekt.', all: 'Alle Produkte' },
  en: { products: 'Products', product: 'Product', features: 'Features', facts: 'At a glance', tech: 'Technologies', cta: 'Request a quote', ctaTitle: (n: string) => `Interested in ${n}?`, ctaText: "We'll advise you on licensing, integration and customisation for your project.", all: 'All products' },
};

// Detail page generated from the product catalogue in src/content/products.ts.
export function ProductDetail({ product, lang }: { product: Product; lang: Lang }) {
  const t = labels[lang];
  const text = product[lang];
  return (
    <>
      <PageHero
        lang={lang}
        crumbs={[{ name: t.products, path: pathOf('products', lang) }, { name: product.name }]}
        eyebrow={`${t.product} · ${productGroups[product.group][lang].title}`}
        title={text.tagline ? `${product.name}: ${text.tagline}` : product.name}
        lead={text.lead}
      >
        {product.tech && (
          <ul className="tag-list" aria-label={t.tech}>
            {product.tech.map((x) => <li key={x}>{x}</li>)}
          </ul>
        )}
        <div className="hero-actions">
          <Link className="btn btn-primary" href={pathOf('contact', lang)}>{t.cta}</Link>
          <Link className="btn btn-outline" href={pathOf('products', lang)}>{t.all}</Link>
        </div>
      </PageHero>
      {text.features && (
        <section className="section">
          <div className="container">
            <SectionHead eyebrow={t.features} title={product.name} />
            <div className="card-grid">
              {text.features.map((f) => (
                <Card key={f.title} lang={lang} icon={f.icon} title={f.title}><p>{f.text}</p></Card>
              ))}
            </div>
          </div>
        </section>
      )}
      {text.facts && (
        <section className="section section-tint">
          <div className="container split">
            <SectionHead eyebrow={t.facts} title={product.name} />
            <CheckList items={text.facts.map((f) => ({ title: `${f.label}:`, text: f.value }))} />
          </div>
        </section>
      )}
      <CtaBand lang={lang} title={t.ctaTitle(product.name)} text={t.ctaText} />
    </>
  );
}

/** Product overview, grouped by product family. */
export function ProductOverview({ lang, products }: { lang: Lang; products: Product[] }) {
  return (
    <>
      {(Object.keys(productGroups) as (keyof typeof productGroups)[]).map((g, i) => {
        const items = products.filter((p) => p.group === g);
        if (items.length === 0) return null;
        return (
          <section key={g} className={`section${i % 2 ? ' section-tint' : ''}`} id={g}>
            <div className="container">
              <SectionHead title={productGroups[g][lang].title} intro={productGroups[g][lang].intro} />
              <div className="card-grid">
                {items.map((p) => (
                  <Card key={p.slug} lang={lang} icon={p.icon} title={p.name} link={productHref(p, lang)}>
                    <p>{p[lang].summary}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
