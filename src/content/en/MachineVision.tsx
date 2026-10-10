import { CheckList, CtaBand, PageHero, SectionHead } from '@/components/Blocks';

const areas: [string, string[]][] = [
  ['High-throughput assembly inspection', ['Stationary camera systems for high cycle rates', 'Asynchronously triggered LED lighting for optimal contrast', 'Coloured LED flash lighting for moving parts']],
  ['Flexible assembly inspection', ['For complex assemblies such as gearboxes, motors, chainsaws or medical devices', 'Adaptable to many features and variants', 'Stationary or robot-guided, in 2D and 3D']],
  ['Optical metrology', ['2D and 3D measuring systems with micrometre accuracy', 'Contactless and reproducible', 'Reliable compliance with tight tolerances']],
  ['3D surface inspection', ['Inline inspection via laser triangulation', 'Reliable even on matt black or dirty surfaces where 2D reaches its limits', 'Hardware-independent: the right laser for your task']],
  ['Code and character reading', ['Reading 2D codes and plain text even at high speed', 'Recognition of barely visible markings', '3D reading with custom systems']],
  ['Quality & traceability', ['Statistical analysis reveals weak spots in production', 'Logging and archiving of image data', 'Complete documentation']],
];

export default function MachineVision() {
  return (
    <>
      <PageHero lang="en"
        crumbs={[{ name: 'Services', path: '/en/services/' }, { name: 'Machine vision' }]}
        eyebrow="Machine vision"
        title="Machine vision for inspection and measurement in production"
        lead="We design and implement vision systems that reliably detect defects, check dimensions precisely and document every part. From consulting to integration into your line."
      />
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {areas.map(([t, pts]) => (
              <article className="card" key={t}>
                <h2 className="h3">{t}</h2>
                <CheckList items={pts} />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container split">
          <SectionHead
            eyebrow="System software"
            title="Modular, easy to use, variant-ready"
            intro="Our software bundles standard vision functions: part identification, 2D/3D measurement, feature inspection and code and character reading."
          />
          <CheckList
            items={[
              'Manage any number of part types and variants',
              'Modular design that grows with your requirements',
              'Simple operation for your production staff',
              'Connection to PLC, MES and quality database',
            ]}
          />
        </div>
      </section>
      <CtaBand lang="en" title="Which inspection task do you want to automate?" />
    </>
  );
}
