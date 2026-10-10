import { PageHero } from '@/components/Blocks';
import Link from 'next/link';
import { site } from '@/lib/site';

export default function Imprint() {
  return (
    <>
      <PageHero lang="en" crumbs={[{ name: 'Legal notice' }]} title="Legal notice" />
      <section className="section">
        <div className="container narrow prose">
          <p className="muted small">
            This is a translation for convenience. The legally binding version is the German{' '}
            <Link href={'/impressum/'} hrefLang="de">Impressum</Link>.
          </p>
          <h2>Information according to § 5 DDG</h2>
          <p>
            {site.legalName}<br />
            {site.street}<br />
            {site.zip} {site.city}, Germany
          </p>
          <p>
            <strong>Represented by the managing director:</strong><br />
            {site.managingDirector}
          </p>
          <h2>Contact</h2>
          <p>
            Email: <a href={`mailto:${site.email}`}>{site.email}</a><br />
            Security reports: <a href={`mailto:${site.securityEmail}`}>{site.securityEmail}</a>
          </p>
          <h2>Commercial register</h2>
          <p>
            Register court: {site.court}<br />
            Registration number: {site.hrb}
          </p>
          <h2>VAT ID</h2>
          <p>VAT identification number according to § 27a of the German VAT Act: {site.vatId}</p>
          <h2>Responsible for content according to § 18 (2) MStV</h2>
          <p>
            {site.contentResponsible.join(', ')}<br />
            {site.street}, {site.zip} {site.city}
          </p>
          <h2>Consumer dispute resolution</h2>
          <p>We are neither willing nor obliged to take part in dispute resolution proceedings before a consumer arbitration board.</p>
          <h2>Liability for content and links</h2>
          <p>
            The content of these pages was created with great care. However, we cannot guarantee that it is correct, complete
            or up to date. The operators of external websites we link to are solely responsible for their content.
          </p>
        </div>
      </section>
    </>
  );
}
