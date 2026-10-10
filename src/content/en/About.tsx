import type { IconName } from '@/components/Icon';
import { Card, CtaBand, PageHero, SectionHead } from '@/components/Blocks';

const values = [
  ['compass', 'Users come first', 'Whether it is our own core software or a customer solution, we build for the people who use it. Their interests come before internal goals.'],
  ['cpu', 'Do one thing really well', 'We focus on software. A dedicated team solves hard problems and carries what it learns into new projects.'],
  ['clock', 'Fast is better than slow', 'Good software saves time. We avoid unnecessary complexity and optimise for short response times.'],
  ['handshake', 'Integrity and transparency', 'We ensure quality without shortcuts, communicate openly and name challenges clearly.'],
  ['layers', 'Affordable technology', 'Digital solutions must stay affordable over their whole life cycle to make a real difference.'],
  ['activity', 'Great just isn’t good enough', 'Excellence is our starting point. We set ambitious goals and improve proven things through iteration.'],
];

export default function About() {
  return (
    <>
      <PageHero lang="en"
        crumbs={[{ name: 'About us' }]}
        eyebrow="About UpTux"
        title="From industry. For industry."
        lead="UpTux is a young IT company from Mainhardt in Baden-Württemberg, Germany. Our team brings more than 15 years of experience in safety-critical software development, including automation, automated driving, smart home and digital health."
      />
      <section className="section">
        <div className="container split">
          <SectionHead eyebrow="Our mission" title="Making mid-sized manufacturers digitally strong" />
          <div className="prose">
            <p>
              Mid-sized companies are the backbone of German industry. Their machines are solid and their process knowledge is
              unique. What is often missing is a partner who understands both worlds: the shop floor and modern IT.
            </p>
            <p>
              That is exactly who we are. We know controllers, fieldbuses and industrial protocols from our own practice and
              develop tailor-made software that helps you understand your machines better, make data usable and modernise proven
              equipment with new interfaces.
            </p>
            <p><strong>Get your software right.</strong> That is what we aim for in every project.</p>
          </div>
        </div>
      </section>
      <section className="section section-tint" id="philosophy">
        <div className="container">
          <SectionHead eyebrow="Philosophy" title="What we stand for" intro="We regularly review these principles ourselves and hold ourselves to them." />
          <div className="card-grid">
            {values.map(([icon, t, d]) => (
              <Card lang="en" key={t} icon={icon as IconName} title={t}><p>{d}</p></Card>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <h2>Serious about the work, without rigid structures</h2>
          <p>
            Work can be challenging and still be fun. Here, ideas sometimes start over coffee and are put into practice quickly.
            We celebrate shared successes and recognise individual achievement. Our customers feel this too: short paths,
            direct contacts and genuine interest in your task.
          </p>
        </div>
      </section>
      <CtaBand lang="en" title="Let's get to know each other." />
    </>
  );
}
