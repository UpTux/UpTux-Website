import { Card, CheckList, CtaBand, PageHero, SectionHead, Steps } from '@/components/Blocks';
import { Icon, type IconName } from '@/components/Icon';

const reasons: [IconName, string, string][] = [
  ['shield', 'Your data stays in-house', "Design data, quotes and customer records never leave your network. Nobody else's model is trained on your know-how."],
  ['layers', 'Independent of vendors', 'No price changes, discontinued models or terms of use dictated to you from outside.'],
  ['factory', 'Works on the shop floor', 'Short response times and operation without an internet connection, right inside your production network.'],
  ['check', 'Data protection that holds', "GDPR, non-disclosure agreements and your customers' requirements can be met and demonstrated cleanly."],
];

const useCases: [IconName, string, string][] = [
  ['book', 'Knowledge assistant', 'Ask questions in plain language across manuals, standards, wikis and project folders, with sources and respecting your access rights.'],
  ['wrench', 'Service & maintenance', 'Bring together error messages, maintenance history and documentation so your team can narrow down faults faster.'],
  ['file', 'Document processing', 'Read inspection reports, delivery notes, enquiries and contracts, extract the data and pass it on to your systems.'],
  ['code', 'Developer assistant', "Code assistance on your own hardware, so source code and firmware don't end up with cloud services."],
  ['activity', 'Understand production data', 'Query machine and quality data by asking questions and generate reports people can actually read.'],
  ['cpu', 'AI at the machine', 'Models on edge hardware right at the line, for example for machine vision, anomaly detection or voice control.'],
];

export default function LocalAi() {
  return (
    <>
      <PageHero lang="en"
        crumbs={[{ name: 'Services', path: '/en/services/' }, { name: 'Local AI' }]}
        eyebrow="Local AI"
        title="AI on your own hardware: secure, independent, productive"
        lead="Large language models don't have to run in the cloud. We advise you, choose hardware and models to fit your tasks and set up an AI environment that runs in your network, uses your knowledge and protects your data."
      />
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Why local?"
            title="The benefits of AI without handing over your data"
            intro="In mid-sized companies, the data an AI is supposed to make useful holds designs, recipes and customer relationships. It belongs on your servers."
          />
          <div className="pain-grid">
            {reasons.map(([icon, t, d]) => (
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
            eyebrow="What we do"
            title="From the first idea to a running system"
            intro="We don't deliver slide decks. We deliver an AI environment that works in your day-to-day business and that your team understands."
          />
          <CheckList
            items={[
              { title: 'Consulting & feasibility:', text: "which tasks are worth it, what today's open models can really do, and where AI is not the right answer." },
              { title: 'Hardware sizing:', text: 'GPU server, workstation or edge device, sized for model size, number of users and budget rather than the data sheet.' },
              { title: 'Models & inference:', text: 'selecting and running open models with proven runtimes such as vLLM, llama.cpp or Ollama, including quantisation and benchmarks with your data.' },
              { title: 'Connect your knowledge:', text: 'retrieval-augmented generation (RAG) over documents, databases and file shares, with sources and a permission model.' },
              { title: 'Integration:', text: 'connecting existing software, ERP, MES and machines via APIs, so AI helps where the work happens.' },
              { title: 'Security:', text: 'access control, logging, network segmentation and testing against prompt injection and data leakage.' },
              { title: 'Operation & training:', text: 'updates, monitoring and onboarding your team, so the environment stays useful in the long run.' },
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Use cases"
            title="Where local AI pays off quickly"
            intro="The best starting point is a concrete problem that costs time today. Typical candidates:"
          />
          <div className="card-grid">
            {useCases.map(([icon, t, d]) => (
              <Card key={t} lang="en" icon={icon} title={t}>
                <p>{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container">
          <SectionHead eyebrow="How we work" title="Start small, grow on solid ground" center />
          <Steps
            steps={[
              { title: 'Workshop', text: 'We collect use cases, check data and constraints and give you an honest assessment of benefit and effort.' },
              { title: 'Pilot', text: 'A focused pilot with your real data shows what works before you invest in hardware.' },
              { title: 'Build', text: 'We install hardware and software, connect your systems and secure the environment.' },
              { title: 'Operate', text: 'We support the launch, train your team and keep models and software up to date.' },
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <SectionHead
            eyebrow="Why UpTux"
            title="Software engineers, not AI salespeople"
            intro="AI is software. And software that has to run reliably is what we have been working on for more than 15 years."
          />
          <CheckList
            items={[
              { title: 'Experience with critical systems:', text: 'we develop safety-critical software and know how to build systems you can rely on.' },
              { title: 'Security by habit:', text: 'as penetration testers we know the attack paths and build protection in from the start.' },
              { title: 'Vendor-independent:', text: 'we recommend hardware and models based on your needs, not on commission.' },
              { title: 'Honest assessment:', text: "if a cloud service, a classic algorithm or no AI at all is the better solution, we'll tell you." },
            ]}
          />
        </div>
      </section>
      <CtaBand lang="en"
        title="Want to use AI without giving away your data?"
        text="Tell us which task you'd like to solve with AI. We'll get back to you with an honest assessment of what's possible locally and what it costs."
      />
    </>
  );
}
