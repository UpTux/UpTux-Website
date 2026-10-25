import { CheckList, CtaBand, PageHero, ProtocolGrid, SectionHead } from '@/components/Blocks';
import { Icon, type IconName } from '@/components/Icon';
import Link from 'next/link';

const services: { id: string; icon: IconName; title: string; text: string; points: string[]; link?: string }[] = [
  {
    id: 'data',
    icon: 'activity',
    title: 'Capture & understand machine data',
    text: 'Before you can optimise, you need to know what a machine is doing. We pull data from controllers, sensors and fieldbuses, even where no ready-made interface exists, and make it understandable.',
    points: ['Machine and process data acquisition', 'Live dashboards and condition monitoring', 'Foundation for OEE, energy monitoring and predictive maintenance', 'Analysis of historical measurement data'],
  },
  {
    id: 'retrofit',
    icon: 'plug',
    title: 'Retrofit & interface modernisation',
    text: 'Mechanically sound but digitally silent? We retrofit existing machines with modern, standardised interfaces and connect them to MES, ERP or the cloud.',
    points: ['Protocol gateways and adapters, e.g. to OPC UA or MQTT', 'Replacement of discontinued control and HMI software', 'Web-based user interfaces', 'Step-by-step migration without long downtime'],
    link: '/en/retrofit/',
  },
  {
    id: 'software',
    icon: 'code',
    title: 'Custom software development',
    text: "When off-the-shelf software doesn't fit, we build tailor-made solutions for embedded, desktop, web and mobile platforms, optimised for resources, interfaces and your workflows.",
    points: ['Embedded software in C and C++', 'Desktop and server applications, e.g. in .NET', 'Web applications and apps', 'Product development for worldwide use'],
  },
  {
    id: 'vision',
    icon: 'eye',
    title: 'Machine vision',
    text: 'Camera systems for assembly inspection, surface inspection, optical metrology and code and character reading, in 2D and 3D and integrated directly into your line.',
    points: ['Completeness and assembly inspection', '3D surface inspection via laser triangulation', 'Metrology with micrometre accuracy', 'Traceability through image archiving'],
    link: '/en/machine-vision/',
  },
  {
    id: 'legacy',
    icon: 'refresh',
    title: 'Legacy software modernisation',
    text: 'Old software is often business-critical and poorly documented. We analyse it, secure the knowledge it contains and modernise it step by step or replace it with current technology.',
    points: ['Analysis and documentation of existing code', 'Porting to current platforms and operating systems', 'Safeguarding with automated tests', 'Planned replacement without big-bang risk'],
  },
  {
    id: 'security',
    icon: 'shield',
    title: 'Security & penetration testing',
    text: 'Connected machines need protection. We test software, devices and interfaces for vulnerabilities and help you close them.',
    points: ['Penetration tests for devices, software and interfaces', 'Security analysis of OT networks', 'Hardening, encryption and authentication', 'Security-focused code reviews'],
    link: '/en/penetration-testing/',
  },
  {
    id: 'ai',
    icon: 'cpu',
    title: 'Local AI',
    text: 'Use AI without handing over your data: we advise you, size the hardware and set up language models that run in your network and use your knowledge.',
    points: ['Consulting, feasibility and hardware sizing', 'Running open language models on your own hardware', 'Knowledge assistants over your documents (RAG)', 'Integration and security to professional standards'],
    link: '/en/local-ai/',
  },
];

export default function Services() {
  return (
    <>
      <PageHero lang="en"
        crumbs={[{ name: 'Services' }]}
        eyebrow="Services"
        title="Digitalisation for industry and mid-sized companies"
        lead="We combine automation know-how with modern software development. The result is solutions that work on the shop floor and fit seamlessly into your IT."
      />
      <section className="section">
        <div className="container">
          <nav className="jump-nav" aria-label="Services on this page">
            {services.map((s) => (
              <Link key={s.id} href={`/en/services/#${s.id}`}><Icon name={s.icon} size={18} /> {s.title}</Link>
            ))}
          </nav>
          <div className="service-list">
            {services.map((s) => (
              <article className="service" id={s.id} key={s.id}>
                <div className="service-head">
                  <span className="card-icon"><Icon name={s.icon} /></span>
                  <h2>{s.title}</h2>
                </div>
                <div className="service-body">
                  <p>{s.text}</p>
                  <CheckList items={s.points} />
                  {s.link && <Link className="text-link" href={s.link}>Learn more <Icon name="arrow" size={18} /></Link>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container">
          <SectionHead eyebrow="Industrial protocols" title="Protocols and formats we work with" />
          <ProtocolGrid lang="en" />
        </div>
      </section>
      <CtaBand lang="en" />
    </>
  );
}
