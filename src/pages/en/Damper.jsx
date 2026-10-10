import { Card, CheckList, CtaBand, PageHero, SectionHead } from '../../components/Blocks.jsx';

export default function Damper() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Products', path: '/en/products/' }, { name: 'Damper' }]}
        eyebrow="Product"
        title="Damper: a lean C++17 library for robust software"
        lead="Damper is a modular foundation for embedded and enterprise software. It provides efficient, standards-compliant implementations of common algorithms, has a small memory footprint and does not depend on specific microcontrollers, operating systems or external libraries."
      />
      <section className="section">
        <div className="container">
          <div className="card-grid">
            <Card icon="check" title="Reliable"><p>Error cases are handled throughout. Around 20,000 unit, integration and qualification tests safeguard quality.</p></Card>
            <Card icon="layers" title="Scalable"><p>Its own asynchronous I/O framework with thread pools uses multiple cores. Custom allocators avoid memory allocation at runtime.</p></Card>
            <Card icon="wrench" title="Maintainable"><p>A modular, well-documented architecture that new developers pick up quickly.</p></Card>
            <Card icon="shield" title="Secure"><p>Authentication and encryption to common industry standards, hardened against attacks from the internet.</p></Card>
            <Card icon="code" title="Easy to use"><p>Simplified APIs and optional separation of context state make concurrent development easier.</p></Card>
            <Card icon="cpu" title="Resource-efficient"><p>Made for resource-constrained systems such as microcontrollers with sufficient RAM and ROM.</p></Card>
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container split">
          <SectionHead eyebrow="Scope" title="What's inside Damper" />
          <CheckList
            items={[
              { title: 'Data structures:', text: 'status types, queues, ring buffers, lists, vectors, hashes, trees, matrices and BitArrayView.' },
              { title: 'Cryptography:', text: 'AES, hash functions, X.509 parser, Diffie-Hellman, RSA, ECC and EdDSA.' },
              { title: 'System:', text: 'file system access, asynchronous I/O and image processing algorithms.' },
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <h2>A note on certifications</h2>
          <p>Damper is currently not certified to standards such as ISO 26262, IEC 62304, ASPICE, SIL/ASIL or FIPS. If your project requires a certified product, please contact us directly.</p>
        </div>
      </section>
      <CtaBand title="Using Damper in your product?" text="We'll advise you on licensing, integration and extensions." />
    </>
  );
}
