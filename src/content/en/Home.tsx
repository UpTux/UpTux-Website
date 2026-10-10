import { HeroArt, HeroBrand } from '@/components/HeroArt';
import { Icon, type IconName } from '@/components/Icon';
import { Card, CheckList, CtaBand, ProtocolGrid, SectionHead, Steps } from '@/components/Blocks';
import Link from 'next/link';

const processSteps = [
  { title: 'Understand', text: 'We look at your machines on site, talk to the people who run them, and find out which data and interfaces are available.' },
  { title: 'Plan', text: 'You get a clear concept with effort, risks and alternatives. We choose technology for your needs, not for commission.' },
  { title: 'Build', text: 'We develop in short iterations and test early on the real machine, so you see results quickly and stay in control.' },
  { title: 'Support', text: 'After go-live we stay available, document properly and keep improving the solution with you.' },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">IT partner for mid-sized manufacturers</p>
            <h1>
              Digitalisation that <span className="grad-text">understands your machines.</span>
            </h1>
            <p className="hero-lead">
              We come from industry and speak the language of your machines. With tailor-made software we make your existing
              equipment transparent and bring ageing machines into the digital future with modern interfaces.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href={'/en/contact/'}>Start a project</Link>
              <Link className="btn btn-ghost-light" href={'/en/services/'}>Our services</Link>
            </div>
            <ul className="hero-facts">
              <li><strong>10+ years</strong> of software development for safety-critical systems</li>
              <li><strong>Vendor-independent</strong> with no commissions or platform lock-in</li>
              <li><strong>From sensor to cloud</strong> everything from one partner</li>
            </ul>
          </div>
          <div className="hero-visual">
            <HeroBrand />
            <HeroArt lang="en" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Sound familiar?"
            title="Your machines are running. But what do you really know about them?"
            intro="Many machines in mid-sized companies are robust, paid off and have done their job reliably for years. That is exactly why it pays to make them smarter instead of replacing them."
          />
          <div className="pain-grid">
            {[
              ['clock', 'Downtime comes as a surprise', 'Failures are noticed only when production stops, because condition data is not being recorded.'],
              ['layers', 'Data is stuck on islands', 'Every machine speaks its own protocol. MES, ERP or cloud cannot reach the data.'],
              ['wrench', 'Spare parts are running out', 'Old controllers and HMI panels are discontinued, and knowledge about their software is barely documented.'],
              ['shield', 'Connectivity raises security questions', 'As soon as machines go online, questions about access control, updates and attack surface follow.'],
            ].map(([icon, t, d]) => (
              <div className="pain" key={t}>
                <Icon name={icon as IconName} />
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHead
            eyebrow="Services"
            title="What we do for you"
            intro="From the first data query on an old controller to finished software running in your production."
          />
          <div className="card-grid">
            <Card lang="en" icon="activity" title="Understand your machines" link="/en/services/#data">
              <p>We capture machine data, make states visible and lay the groundwork for monitoring, OEE and predictive maintenance.</p>
            </Card>
            <Card lang="en" icon="plug" title="Retrofit & interfaces" link="/en/retrofit/">
              <p>Existing machines get modern interfaces such as OPC UA or MQTT and connect to your IT landscape.</p>
            </Card>
            <Card lang="en" icon="code" title="Custom software" link="/en/services/#software">
              <p>Tailor-made software for embedded, desktop, web and mobile, built around your processes and resources.</p>
            </Card>
            <Card lang="en" icon="eye" title="Machine vision" link="/en/machine-vision/">
              <p>Assembly inspection, surface inspection and optical metrology in 2D and 3D, right on the line.</p>
            </Card>
            <Card lang="en" icon="refresh" title="Legacy modernisation" link="/en/services/#legacy">
              <p>Outdated software is modernised step by step or replaced with future-proof technology, without risk to production.</p>
            </Card>
            <Card lang="en" icon="shield" title="Security & penetration testing" link="/en/penetration-testing/">
              <p>We test connected machines, devices and software for vulnerabilities and harden them against attacks.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionHead
              eyebrow="Industrial protocols"
              title="We speak the language of your machines."
              intro="Our roots are in automation engineering. We know industrial protocols and data formats from hands-on work and connect the old world with the new."
            />
            <Link className="text-link" href={'/en/retrofit/'}>More on retrofit and machine connectivity <Icon name="arrow" size={18} /></Link>
          </div>
          <ProtocolGrid lang="en" />
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHead eyebrow="How we work" title="Pragmatic, transparent, at your machine." center />
          <Steps steps={processSteps} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Products"
            title="Proven building blocks for faster projects"
            intro="Our projects have produced products of our own. They save development time and make your solution more robust."
          />
          <div className="card-grid card-grid-3">
            <Card lang="en" icon="cloud" title="Cloud PLC" link="/en/cloud-plc/">
              <p>The PLC runtime in the cloud or on your own IT. Independent of scarce PLC hardware, scalable and IT-friendly.</p>
            </Card>
            <Card lang="en" icon="cpu" title="Damper" link="/en/damper/">
              <p>A lean, modular C++17 library for embedded and enterprise software with built-in cryptography.</p>
            </Card>
            <Card lang="en" icon="file" title="AsamMdf" link="/en/asammdf/">
              <p>A fast .NET library for reading ASAM MDF4 measurement data, available as a NuGet package.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container split">
          <div>
            <SectionHead eyebrow="Our promise" title="Honest advice. Clean software. Delivered on time." />
          </div>
          <CheckList
            items={[
              { title: 'Technology that fits your needs.', text: 'We recommend what solves your problem, not what happens to be trending.' },
              { title: 'Independent.', text: "We don't resell third-party platforms and don't earn from licences you don't need." },
              { title: 'On schedule.', text: 'Delivering on time is our top priority.' },
              { title: 'No lock-in.', text: 'Clean documentation and open interfaces keep you in control of your solution.' },
            ]}
          />
        </div>
      </section>

      <CtaBand lang="en" />
    </>
  );
}
