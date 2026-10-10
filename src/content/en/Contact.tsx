import { CheckList, PageHero } from '@/components/Blocks';
import { Icon } from '@/components/Icon';
import { site } from '@/lib/site';

const subject = encodeURIComponent('Project enquiry via uptux.de');
const body = encodeURIComponent('Hello UpTux team,\n\nOur company:\nWhat it is about (machine, protocol, idea):\nPreferred timeline:\n\nBest regards\n');

export default function Contact() {
  return (
    <>
      <PageHero lang="en"
        crumbs={[{ name: 'Contact' }]}
        eyebrow="Contact"
        title="Tell us about your project"
        lead="Whether you have a concrete request or just a first idea, write to us. You'll get an honest assessment of what's possible and what it takes."
      />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-card">
            <span className="card-icon"><Icon name="mail" /></span>
            <h2 className="h3">By email</h2>
            <p>Email is the fastest way to reach us. We work in German and English.</p>
            <a className="btn btn-primary" href={`mailto:${site.email}?subject=${subject}&body=${body}`}>{site.email}</a>
            <p className="muted small">Please send security reports to <a href={`mailto:${site.securityEmail}`}>{site.securityEmail}</a>.</p>
          </div>
          <div className="contact-card">
            <span className="card-icon"><Icon name="pin" /></span>
            <h2 className="h3">Address</h2>
            <address>
              {site.legalName}<br />
              {site.street}<br />
              {site.zip} {site.city}<br />
              Germany
            </address>
            <p className="muted small">We work with customers on site and remotely.</p>
          </div>
          <div className="contact-card">
            <span className="card-icon"><Icon name="check" /></span>
            <h2 className="h3">Helpful for your enquiry</h2>
            <CheckList
              items={[
                'Which machine or software is it about?',
                'Which controller or interfaces are in place?',
                'What should be better in the end?',
                'Is there a timeline?',
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
