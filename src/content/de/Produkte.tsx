import { CtaBand, PageHero } from '@/components/Blocks';
import { ProductOverview } from '@/components/ProductDetail';
import { products } from '@/content/products';

export default function Produkte() {
  return (
    <>
      <PageHero lang="de"
        crumbs={[{ name: 'Produkte' }]}
        eyebrow="Produkte"
        title="Software-Bausteine aus der Praxis"
        lead="Aus unseren Projekten sind Produkte entstanden, die wir selbst täglich einsetzen: von Protokoll-Stacks und Steuerungsanbindung über Echtzeit-Frameworks bis zu HMI-Software. Sie beschleunigen Ihre Entwicklung und lassen sich flexibel in bestehende Systeme integrieren."
      />
      <ProductOverview lang="de" products={products} />
      <CtaBand lang="de" title="Interesse an einem unserer Produkte?" text="Wir beraten Sie gern zu Einsatzmöglichkeiten, Lizenzen und Integration in Ihr Projekt." />
    </>
  );
}
