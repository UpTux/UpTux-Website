import { CheckList, CtaBand, PageHero, ProtocolGrid, SectionHead, Steps } from '../../components/Blocks.jsx';
import { href } from '../../link.js';

export default function Retrofit() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Services', path: '/en/services/' }, { name: 'Retrofit' }]}
        eyebrow="Retrofit & machine connectivity"
        title="Making existing machines ready for Industry 4.0"
        lead="A new machine costs a lot of money. A new interface often costs a fraction of that. We bring your proven equipment into connected production with modern interfaces, without replacing it."
      >
        <div className="hero-actions">
          <a className="btn btn-primary" href={href('/en/contact/')}>Discuss your machine</a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container split">
          <SectionHead
            eyebrow="Why retrofit?"
            title="Upgrade instead of buying new"
            intro="Many machines in mid-sized companies are mechanically good for decades. What they lack is a connection to the digital world. That is where we come in."
          />
          <CheckList
            items={[
              { title: 'Protect investments.', text: 'Depreciated machines stay productive and become a data source.' },
              { title: 'Create transparency.', text: 'Output, states, faults and energy use become visible in real time.' },
              { title: 'Handle obsolescence.', text: 'Discontinued controllers, PCs or panels are replaced with modern solutions.' },
              { title: 'Integrate.', text: 'Standardised interfaces such as OPC UA or MQTT connect the machine to MES, ERP and the cloud.' },
            ]}
          />
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHead eyebrow="Typical projects" title="What we implement in existing machines" />
          <div className="card-grid">
            {[
              ['Protocol gateway', "A gateway translates your machine's proprietary or serial interface into an open protocol and provides the data securely."],
              ['New user interface', 'Outdated HMI software is replaced with a modern, web-based interface that runs on any device.'],
              ['Control in software', 'With our Cloud PLC, automation runs on standard IT instead of scarce PLC hardware.'],
              ['Recover data', 'Where documentation no longer exists, we analyse the communication and make the machine data usable again.'],
              ['Add monitoring', 'Additional sensors and data acquisition provide condition data for maintenance and quality assurance.'],
              ['Connect securely', "Encryption, authentication and network segmentation make sure connectivity doesn't become an entry point."],
            ].map(([t, d]) => (
              <article className="card" key={t}>
                <h3>{t}</h3>
                <div className="card-body"><p>{d}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Protocols" title="We speak old and new industrial languages" />
          <ProtocolGrid />
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHead eyebrow="Process" title="From assessment to connected machine" center />
          <Steps
            steps={[
              { title: 'Assessment', text: 'We look at the machine, controller and existing interfaces on site and clarify your goals.' },
              { title: 'Feasibility', text: 'A short technical proof of concept shows which data we can reach reliably.' },
              { title: 'Implementation', text: 'Gateway, software and interfaces are built in iterations and tested on the real machine.' },
              { title: 'Commissioning', text: 'We commission the solution with you, train your team and remain your point of contact.' },
            ]}
          />
        </div>
      </section>
      <CtaBand title="Which machine do you want to connect?" />
    </>
  );
}
