import { Card, CheckList, CtaBand, PageHero, SectionHead } from '@/components/Blocks';
import { ProductLinks } from '@/components/ProductDetail';
import { site } from '@/lib/site';

export default function AsamMdf() {
  return (
    <>
      <PageHero lang="en"
        crumbs={[{ name: 'Products', path: '/en/products/' }, { name: 'AsamMdf' }]}
        eyebrow="Product · .NET library"
        title="AsamMdf: read MDF4 measurement data fast in .NET"
        lead="MDF4 is the standard format for measurement data in vehicle and ECU development. AsamMdf is a lean, high-performance NuGet library that lets .NET developers process MDF4 files quickly and conveniently."
      />
      <section className="section">
        <div className="container">
          <div className="card-grid">
            <Card lang="en" icon="file" title="Full MDF4 support"><p>Channel data with automatic type conversion, including VLSD, CANopen date/time, complex numbers and MIME data.</p></Card>
            <Card lang="en" icon="refresh" title="Conversions"><p>Linear, rational and algebraic conversions, lookup tables and automatic unit conversion.</p></Card>
            <Card lang="en" icon="layers" title="Array channels"><p>Multi-dimensional data such as maps and curves are detected and flattened, ideal for engine calibration.</p></Card>
            <Card lang="en" icon="activity" title="Performance & streaming"><p>Memory-efficient streaming API, lazy loading and support for deflate and transpose+deflate blocks.</p></Card>
            <Card lang="en" icon="code" title="Clean API"><p>A minimalist, consistent and type-safe interface with descriptive method names.</p></Card>
            <Card lang="en" icon="check" title="Tested"><p>More than 200 tests with dedicated sample files, including edge cases in byte order, bit widths and conversions.</p></Card>
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container split">
          <div>
            <SectionHead eyebrow="Installation" title="Up and running in a minute" intro="AsamMdf targets .NET Standard 2.1 and is compatible with .NET 5 to .NET 10." />
            <pre className="code"><code>dotnet add package AsamMdf</code></pre>
            <ProductLinks lang="en" slug="asammdf" />
          </div>
          <div>
            <h2 className="h3">Licensing</h2>
            <CheckList
              items={[
                'Free beta for evaluation with files up to 50 MB',
                'Commercial licence for larger files',
                'Individual quotes based on use case, team size and deployment',
              ]}
            />
            <p>Send enquiries to <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
          </div>
        </div>
      </section>
      <CtaBand lang="en" title="Request an AsamMdf licence" text="Tell us briefly about your use case and we'll prepare a suitable quote." />
    </>
  );
}
