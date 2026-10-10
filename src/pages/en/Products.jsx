import { Card, CtaBand, PageHero } from '../../components/Blocks.jsx';

export default function Products() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Products' }]}
        eyebrow="Products"
        title="Software building blocks from real projects"
        lead="Our projects have produced products we use ourselves every day. They speed up your development and integrate flexibly into existing systems."
      />
      <section className="section">
        <div className="container">
          <div className="card-grid card-grid-3">
            <Card icon="cloud" title="Cloud PLC" link="/en/cloud-plc/">
              <p>The UpTux runtime executes automation on AWS, Azure, Kubernetes or your own IT instead of classic PLC hardware.</p>
            </Card>
            <Card icon="cpu" title="Damper" link="/en/damper/">
              <p>A modular C++17 library with data structures, asynchronous I/O and cryptography. No external dependencies, ideal for embedded.</p>
            </Card>
            <Card icon="file" title="AsamMdf" link="/en/asammdf/">
              <p>A high-performance .NET library for reading ASAM MDF4 measurement files with a streaming API, available on NuGet.</p>
            </Card>
          </div>
        </div>
      </section>
      <CtaBand title="Interested in one of our products?" text="We're happy to advise you on use cases, licensing and integration into your project." />
    </>
  );
}
