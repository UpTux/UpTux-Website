import { PageHero } from '@/components/Blocks';
import Link from 'next/link';
import { site } from '@/lib/site';

export default function Privacy() {
  return (
    <>
      <PageHero lang="en" crumbs={[{ name: 'Privacy' }]} title="Privacy policy" />
      <section className="section">
        <div className="container narrow prose">
          <p className="muted small">
            This is a translation for convenience. The legally binding version is the German{' '}
            <Link href={'/datenschutz/'} hrefLang="de">Datenschutzerklärung</Link>.
          </p>
          <h2>1. Controller</h2>
          <p>
            {site.legalName}, {site.street}, {site.zip} {site.city}, Germany<br />
            Represented by: {site.managingDirector}<br />
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>

          <h2>2. In brief</h2>
          <p>
            This website uses no cookies, no tracking, no analytics tools and no embedded third-party content such as maps,
            videos or font services. All fonts are served from our own server.
          </p>

          <h2>3. Hosting on GitHub Pages</h2>
          <p>
            This website is provided via GitHub Pages, a service of GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco,
            CA 94107, USA. When you visit the website, GitHub processes technically necessary data such as your IP address, the
            date and time of access, the page requested and browser and system information in order to deliver the website and
            keep the service secure.
          </p>
          <p>
            The legal basis is Art. 6 (1) (f) GDPR. Our legitimate interest is the secure and reliable provision of the website.
            Data is transferred to the USA on the basis of the EU-US Data Privacy Framework, under which GitHub is certified.
            For more information, see{' '}
            <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub's privacy statement</a>.
          </p>

          <h2>4. Contact by email</h2>
          <p>
            If you contact us by email, we process the information you provide (e.g. name, email address, content of the
            message) to handle your enquiry. The legal basis is Art. 6 (1) (b) GDPR if your enquiry relates to a contract, and
            Art. 6 (1) (f) GDPR otherwise. We delete the data once it is no longer needed for this purpose and no statutory
            retention obligations apply.
          </p>

          <h2>5. Your rights</h2>
          <p>
            You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing
            (Art. 18), data portability (Art. 20) and to object to processing (Art. 21). Simply contact us at{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <p>
            You also have the right to lodge a complaint with a data protection supervisory authority. The authority
            responsible for us is the State Commissioner for Data Protection and Freedom of Information of Baden-Württemberg.
          </p>
          <p className="muted small">Last updated: October 2026</p>
        </div>
      </section>
    </>
  );
}
