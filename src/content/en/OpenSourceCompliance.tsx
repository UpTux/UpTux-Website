import { PageHero } from '@/components/Blocks';
import { site } from '@/lib/site';

export default function OpenSourceCompliance() {
  return (
    <>
      <PageHero lang="en" crumbs={[{ name: 'Open source compliance' }]} title="Open source compliance" />
      <section className="section">
        <div className="container narrow prose">
          <p>
            Open source software is a core part of our work. We use it in customer projects and in our own products, and we
            publish software under open source licences ourselves. So that you can use the software we deliver safely and in
            line with its licences, we handle open source components according to clear internal rules.
          </p>
          <h2>Licence compliance according to OpenChain ISO/IEC 5230</h2>
          <p>
            OpenChain ISO/IEC 5230:2020 is the international standard for open source licence compliance. UpTux is
            self-certified under ISO/IEC 5230:2020, which ensures that the solutions we deliver adhere to the OpenChain
            standard.
          </p>
          <p>
            Before we use an open source component, we check its licence and the obligations that come with it. We record
            which components in which versions are part of a delivery, and we ship the required licence texts and copyright
            notices with it.
          </p>
          <h2>Source code requests</h2>
          <p>
            If a delivery contains software under a licence that grants the right to obtain the source code (for example GPL
            or LGPL), we provide the corresponding source code for at least three years from delivery. If the source code was
            not delivered together with the software, you can request a copy, on physical media if you prefer.
          </p>
          <p>
            Please send requests to <a href={`mailto:${site.ossComplianceEmail}`}>{site.ossComplianceEmail}</a>, stating the product, the version and,
            if available, your project or delivery reference.
          </p>
          <h2>Security assurance according to OpenChain ISO/IEC 18974</h2>
          <p>
            OpenChain ISO/IEC 18974:2023 is the industry standard for open source security assurance. UpTux is self-certified
            under ISO/IEC 18974:2023 and runs a security assurance program for the open source components it uses.
          </p>
          <p>
            We track known vulnerabilities in the open source components we use and provide updates where needed. Please
            send information about known vulnerabilities or reports of newly discovered ones to{' '}
            <a href={`mailto:${site.securityEmail}`}>{site.securityEmail}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
