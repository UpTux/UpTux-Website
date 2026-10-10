import { Card, CheckList, CtaBand, PageHero, SectionHead } from '../../components/Blocks.jsx';

export default function CloudPlc() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Products', path: '/en/products/' }, { name: 'Cloud PLC' }]}
        eyebrow="Product"
        title="Cloud PLC: the PLC runtime for your IT infrastructure"
        lead="The UpTux runtime executes automation processes in a flexible IT environment instead of on classic PLC hardware. That makes you less dependent on supply shortages and price increases and opens the door to IT integration, scaling and microservices."
      />
      <section className="section">
        <div className="container split">
          <SectionHead eyebrow="Deployment" title="Runs wherever your IT runs" intro="Operate the runtime in the public cloud or entirely on your own infrastructure at the plant." />
          <CheckList items={['Amazon Web Services (AWS)', 'Microsoft Azure', 'Kubernetes', 'Your local IT infrastructure (on-premises)']} />
        </div>
      </section>
      <section className="section section-tint">
        <div className="container">
          <SectionHead eyebrow="Features" title="What sets Cloud PLC apart" />
          <div className="card-grid">
            <Card icon="layers" title="Scalable"><p>Grows with your operations without replacing or upgrading hardware.</p></Card>
            <Card icon="shield" title="Secure"><p>High security standards to protect your data and infrastructure.</p></Card>
            <Card icon="activity" title="Efficient"><p>Less downtime through real-time monitoring, remote access and predictive maintenance.</p></Card>
            <Card icon="plug" title="Interoperable"><p>Works with existing industrial hardware and software as a unified platform.</p></Card>
            <Card icon="eye" title="Modern HMI"><p>User interfaces are built with current web technology and run on any device.</p></Card>
            <Card icon="code" title="Extensible"><p>Plugin architecture and integration of your existing C/C++ code.</p></Card>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <SectionHead eyebrow="Protocols" title="Supported communication" />
          <CheckList
            items={[
              { title: 'OPC UA', text: 'for vendor-independent machine-to-machine communication' },
              { title: 'MQTT', text: 'for lightweight messaging, even on unstable networks' },
              { title: 'Zenoh', text: 'for efficient data exchange with low network load' },
              { title: 'DDS', text: 'as real-time middleware for scalable data exchange' },
              { title: 'EtherCAT', text: 'as an Ethernet fieldbus for fast, synchronised transfer' },
            ]}
          />
        </div>
      </section>
      <CtaBand title="Want to try Cloud PLC in your environment?" text="Get in touch. We'll show you how the runtime works with your machines." />
    </>
  );
}
