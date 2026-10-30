import { Card, CheckList, CtaBand, PageHero, SectionHead, Steps } from '@/components/Blocks';
import { Icon, type IconName } from '@/components/Icon';
import Link from 'next/link';

const duties: [IconName, string, string][] = [
  ['shield', 'Security by design', 'Products must ship without known exploitable vulnerabilities, with a secure default configuration, access control and a limited attack surface.'],
  ['layers', 'Vulnerabilities under control', 'Manufacturers need a software bill of materials (SBOM), a vulnerability handling process and a public reporting contact.'],
  ['refresh', 'Updates for years', 'Security updates must be available for the whole support period, usually at least five years.'],
  ['clock', 'Early warning within 24 hours', 'Actively exploited vulnerabilities and severe security incidents must be reported: an early warning within 24 hours, a notification within 72 hours and a final report after that.'],
];

const timeline: { title: string; text: string }[] = [
  { title: '10 December 2024:', text: 'The CRA (Regulation (EU) 2024/2847) enters into force.' },
  { title: '11 September 2026:', text: 'The reporting obligations apply, including to products already on the market.' },
  { title: '20 January 2027:', text: 'The new Machinery Regulation applies, with its own requirements for protection against corruption.' },
  { title: '11 December 2027:', text: 'All obligations apply. New products only get the CE marking if they comply with the CRA.' },
];

const services: [IconName, string, string][] = [
  ['compass', 'CRA check', 'We assess which of your products are affected, which category they fall into and where you stand today. The result is a prioritised action plan.'],
  ['activity', 'Risk assessment', 'A structured threat and risk analysis of your product as the basis for requirements and technical documentation.'],
  ['code', 'Security by design', 'We implement the requirements in software and firmware: hardening, authentication, encryption and secure defaults.'],
  ['package', 'SBOM & open source', 'Software bills of materials and licence and vulnerability checks of the components you use, following our own OpenChain processes.'],
  ['eye', 'Penetration testing', 'We test devices, interfaces and software for vulnerabilities before attackers do, and help you fix them.'],
  ['wrench', 'Updates & reporting', 'Secure update mechanisms, vulnerability management and a reporting process that actually meets the 24-hour deadline.'],
];

export default function Cra() {
  return (
    <>
      <PageHero lang="en"
        crumbs={[{ name: 'Services', path: '/en/services/' }, { name: 'Cyber Resilience Act' }]}
        eyebrow="Cyber Resilience Act"
        title="Get your machines and devices ready for the Cyber Resilience Act"
        lead="With the Cyber Resilience Act (CRA), cybersecurity becomes a requirement for the CE marking. We show you what the CRA means for your products and implement the requirements with you: in software, firmware and processes."
      />
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="What the CRA requires"
            title="Cybersecurity across the whole product life cycle"
            intro="The CRA applies to almost all products with digital elements and a data or network connection sold in the EU: controllers, gateways, HMIs, connected machines and software. Most obligations fall on the manufacturer."
          />
          <div className="pain-grid">
            {duties.map(([icon, t, d]) => (
              <div className="pain" key={t}>
                <Icon name={icon} />
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container split">
          <SectionHead
            eyebrow="Deadlines"
            title="The first obligations already apply"
            intro="Violations can be fined up to 15 million euros or 2.5% of worldwide annual turnover. If you start now, you have enough time to adapt products and processes without rushing."
          />
          <CheckList items={timeline} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Services"
            title="We help where you need it"
            intro="From the first overview to implementation in your product. You decide which parts you handle yourself and where you bring us in."
          />
          <div className="card-grid">
            {services.map(([icon, t, d]) => (
              <Card key={t} lang="en" icon={icon} title={t}>
                <p>{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container">
          <SectionHead eyebrow="Approach" title="Four steps to CRA compliance" center />
          <Steps
            steps={[
              { title: 'Assessment', text: 'We capture your products, their software and your existing processes and map them to the CRA requirements.' },
              { title: 'Action plan', text: 'You get a prioritised plan with effort and order, matched to your deadlines and resources.' },
              { title: 'Implementation', text: 'We implement the technical measures with your team and verify the result with penetration tests.' },
              { title: 'Operation', text: 'Vulnerability management, updates and reporting keep running. We stay at your side.' },
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <SectionHead
            eyebrow="Why UpTux"
            title="Security from practice, not from paper"
            intro="Documents alone won't make you CRA compliant. The requirements have to reach your software, and that is exactly our craft."
          />
          <CheckList
            items={[
              { title: 'Experience with critical systems:', text: 'More than 15 years of software development for safety-critical systems including automation and automated driving.' },
              { title: 'We know the attack paths:', text: 'As penetration testers we know where connected machines are vulnerable.' },
              { title: 'Open source under control:', text: 'UpTux is self-certified under OpenChain ISO/IEC 5230 and ISO/IEC 18974. We bring these processes into your project.' },
              { title: 'Right-sized for SMEs:', text: 'Pragmatic solutions at a scale your team can sustain in the long run.' },
            ]}
          />
        </div>
      </section>
      <section className="section section-tint">
        <div className="container narrow prose">
          <p className="muted small">
            This page is an overview and does not replace legal advice. To see how we handle open source software
            ourselves, read our <Link href="/en/open-source-compliance/">open source compliance</Link> page.
          </p>
        </div>
      </section>
      <CtaBand lang="en"
        title="Do you know what the CRA means for your products?"
        text="Tell us which machines or devices you make. We'll get back to you with an honest assessment of what's coming and where to start."
      />
    </>
  );
}
