import type { IconName } from '@/components/Icon';

// Product catalogue. Products with `detail` get their own page under
// /produkte/<slug>/ and /en/products/<slug>/, generated from this data.
// Products without `detail` have a hand-written page at `href`.

type Lang = 'de' | 'en';

export type ProductGroup = 'runtime' | 'communication' | 'libraries' | 'hmi';

export const productGroups: Record<ProductGroup, Record<Lang, { title: string; intro: string }>> = {
  runtime: {
    de: { title: 'Laufzeit & Echtzeit', intro: 'Steuerungs- und Echtzeitsoftware, die auf Standard-IT und Linux läuft.' },
    en: { title: 'Runtime & real-time', intro: 'Control and real-time software running on standard IT and Linux.' },
  },
  communication: {
    de: { title: 'Industrielle Kommunikation', intro: 'Protokoll-Stacks und Werkzeuge, mit denen Maschinen, Steuerungen und IT miteinander sprechen.' },
    en: { title: 'Industrial communication', intro: 'Protocol stacks and tools that let machines, controllers and IT talk to each other.' },
  },
  libraries: {
    de: { title: 'Bibliotheken', intro: 'Schlanke Grundbausteine für Ihre eigene Software.' },
    en: { title: 'Libraries', intro: 'Lean building blocks for your own software.' },
  },
  hmi: {
    de: { title: 'HMI & Geräte', intro: 'Bedienoberflächen und Software für Bediengeräte in der Produktion.' },
    en: { title: 'HMI & devices', intro: 'User interfaces and software for operator devices in production.' },
  },
};

type Feature = { icon: IconName; title: string; text: string };

export type ProductLink = { type: 'github' | 'nuget' | 'npm' | 'docs'; url: string; label?: string };

type ProductText = {
  /** One sentence for cards on the overview page. */
  summary: string;
  /** SEO title and meta description of the detail page. */
  seoTitle?: string;
  seoDescription?: string;
  tagline?: string;
  lead?: string;
  features?: Feature[];
  /** Short facts shown as a list, e.g. platform or licence. */
  facts?: { label: string; value: string }[];
};

export type Product = {
  slug: string;
  name: string;
  icon: IconName;
  group: ProductGroup;
  /** Hand-written page; detail pages are generated for products without it. */
  href?: Record<Lang, string>;
  /** Technologies and protocols, shown as tags. */
  tech?: string[];
  /** Source code, packages and documentation. */
  links?: ProductLink[];
} & Record<Lang, ProductText>;

export const products: Product[] = [
  {
    slug: 'cloud-plc',
    name: 'Cloud PLC',
    icon: 'cloud',
    group: 'runtime',
    href: { de: '/cloud-plc/', en: '/en/cloud-plc/' },
    de: { summary: 'Die UpTux Runtime führt Automatisierungsprozesse auf AWS, Azure, Kubernetes oder Ihrer eigenen IT aus, statt auf klassischer SPS-Hardware.' },
    en: { summary: 'The UpTux runtime executes automation on AWS, Azure, Kubernetes or your own IT instead of classic PLC hardware.' },
  },
  {
    slug: 'taktora',
    name: 'taktora',
    icon: 'activity',
    group: 'runtime',
    links: [{ type: 'docs', url: 'https://taktora.eu', label: 'taktora.eu' }],
    tech: ['Rust', 'Linux', 'iceoryx2', 'Zenoh', 'EtherCAT', 'CAN / SocketCAN'],
    de: {
      summary: 'Executor- und Connector-Framework in Rust für deterministische Echtzeitsysteme mit Zero-Copy-Kommunikation.',
      seoTitle: 'taktora: Echtzeit-Executor & Connector-Framework in Rust | UpTux',
      seoDescription: 'taktora plant Echtzeit-Tasks deterministisch und verbindet sie ohne Kopien und Allokationen mit EtherCAT, Zenoh und anderen Prozessen. Rust, Linux, iceoryx2.',
      tagline: 'Echtzeit ohne Middleware-Overhead',
      lead: 'taktora ist ein Executor- und Connector-Framework für Echtzeitsysteme. Der Executor plant Ihre Tasks, das Connector-Framework verbindet sie mit Feldbussen, Netzwerkprotokollen und anderen Prozessen. Nachrichten kommen im Hot Path ohne Serialisierung und ohne Speicherallokation aus.',
      features: [
        { icon: 'layers', title: 'Zero-Copy-IPC', text: 'Nutzdaten wandern über Shared Memory (iceoryx2) zwischen Prozessen. Kopien, Heap-Allokationen und Broker-Syscalls entfallen.' },
        { icon: 'clock', title: 'Deterministische Ausführung', text: 'Sequenzielle Ketten, parallele DAGs und Signal/Slot-Muster. Tasks lassen sich an Kerne binden, das Timing ist messbar.' },
        { icon: 'plug', title: 'Einheitliche Connectoren', text: 'Ein protokollunabhängiger Kanal: Der Transport lässt sich austauschen, ohne die Anwendung umzuschreiben.' },
        { icon: 'cpu', title: 'Für Echtzeit gebaut', text: 'Kein Garbage Collector, keine versteckten Allokationen und kein Broker zwischen Anwendung und Daten.' },
        { icon: 'cloud', title: 'Über mehrere Rechner', text: 'Lokal über iceoryx2, verteilt über Zenoh. Der Anwendungscode muss nicht wissen, welcher Transport genutzt wird.' },
        { icon: 'compass', title: 'Einsatzgebiete', text: 'Robotik-Regelungen, Gateways für die Automatisierung und verteilte Echtzeitsysteme, in denen Middleware zum Engpass wird.' },
      ],
      facts: [
        { label: 'Sprache', value: 'Rust' },
        { label: 'Plattform', value: 'Linux' },
        { label: 'Connectoren', value: 'EtherCAT, Zenoh, CAN/SocketCAN' },
      ],
    },
    en: {
      summary: 'A Rust executor and connector framework for deterministic real-time systems with zero-copy communication.',
      seoTitle: 'taktora: real-time executor & connector framework in Rust | UpTux',
      seoDescription: 'taktora schedules real-time tasks deterministically and connects them to EtherCAT, Zenoh and other processes without copies or allocations. Rust, Linux, iceoryx2.',
      tagline: 'Real-time without middleware overhead',
      lead: 'taktora is an executor and connector framework for real-time systems. The executor schedules your tasks, and the connector framework links them to fieldbuses, network protocols and other processes. Messages need no serialisation and no memory allocation in the hot path.',
      features: [
        { icon: 'layers', title: 'Zero-copy IPC', text: 'Payloads move between processes through shared memory (iceoryx2). No copies, heap allocations or broker syscalls.' },
        { icon: 'clock', title: 'Deterministic execution', text: 'Sequential chains, parallel DAGs and signal/slot patterns. Tasks can be pinned to cores and timing is measurable.' },
        { icon: 'plug', title: 'Unified connectors', text: 'One protocol-independent channel: swap the transport without rewriting the application.' },
        { icon: 'cpu', title: 'Built for real time', text: 'No garbage collector, no hidden allocations and no broker between application and data.' },
        { icon: 'cloud', title: 'Across machines', text: 'Local via iceoryx2, distributed via Zenoh. Application code does not need to know which transport is used.' },
        { icon: 'compass', title: 'Use cases', text: 'Robot control, automation gateways and distributed real-time systems where middleware has become the bottleneck.' },
      ],
      facts: [
        { label: 'Language', value: 'Rust' },
        { label: 'Platform', value: 'Linux' },
        { label: 'Connectors', value: 'EtherCAT, Zenoh, CAN/SocketCAN' },
      ],
    },
  },
  {
    slug: 'ros2-bridge',
    name: 'SOME/IP–ROS 2 Bridge',
    icon: 'refresh',
    group: 'communication',
    tech: ['SOME/IP', 'ROS 2', 'DDS'],
    de: {
      summary: 'Protokoll-Bridge zwischen SOME/IP und ROS 2: SOME/IP-Services erscheinen als ROS-2-Topics und -Services und umgekehrt.',
      seoTitle: 'SOME/IP–ROS 2 Bridge: SOME/IP-Services in ROS 2 nutzen | UpTux',
      seoDescription: 'Die UpTux SOME/IP–ROS 2 Bridge übersetzt SOME/IP-Methoden, -Events und -Felder in ROS-2-Topics und -Services und umgekehrt.',
      tagline: 'SOME/IP und ROS 2 verbinden',
      lead: 'Steuergeräte kommunizieren über SOME/IP, Entwicklungs- und Prototyp-Software läuft oft auf ROS 2. Die UpTux SOME/IP–ROS 2 Bridge übersetzt zwischen diesen beiden Protokollen, nicht mehr und nicht weniger. Sie basiert auf unserem SOME/IP-Stack.',
      features: [
        { icon: 'refresh', title: 'Beide Richtungen', text: 'SOME/IP-Events und -Felder werden als ROS-2-Topics veröffentlicht, SOME/IP-Methoden als ROS-2-Services aufrufbar, und umgekehrt.' },
        { icon: 'plug', title: 'Reine Protokoll-Bridge', text: 'Die Bridge übersetzt ausschließlich zwischen SOME/IP und ROS 2. Weitere Protokolle oder Funktionen sind nicht Teil des Produkts.' },
        { icon: 'wrench', title: 'Projektbezogen angepasst', text: 'Wir konfigurieren die Bridge für Ihre Service-Definitionen und Nachrichtentypen.' },
      ],
    },
    en: {
      summary: 'Protocol bridge between SOME/IP and ROS 2: SOME/IP services appear as ROS 2 topics and services, and vice versa.',
      seoTitle: 'SOME/IP–ROS 2 Bridge: use SOME/IP services in ROS 2 | UpTux',
      seoDescription: 'The UpTux SOME/IP–ROS 2 Bridge translates SOME/IP methods, events and fields into ROS 2 topics and services, and vice versa.',
      tagline: 'Connecting SOME/IP and ROS 2',
      lead: 'ECUs communicate over SOME/IP, while development and prototype software often runs on ROS 2. The UpTux SOME/IP–ROS 2 Bridge translates between these two protocols, nothing more and nothing less. It is built on our SOME/IP stack.',
      features: [
        { icon: 'refresh', title: 'Both directions', text: 'SOME/IP events and fields are published as ROS 2 topics and SOME/IP methods can be called as ROS 2 services, and vice versa.' },
        { icon: 'plug', title: 'Protocol bridge only', text: 'The bridge translates only between SOME/IP and ROS 2. Other protocols or functions are not part of the product.' },
        { icon: 'wrench', title: 'Adapted to your project', text: 'We configure the bridge for your service definitions and message types.' },
      ],
    },
  },
  {
    slug: 'opc-ua-stack',
    name: 'OPC UA Stack (OpcSharp)',
    icon: 'plug',
    group: 'communication',
    links: [{ type: 'docs', url: 'https://patdhlk.com/OpcSharp' }],
    tech: ['OPC UA', 'C#', '.NET', 'UA TCP', 'X.509'],
    de: {
      summary: 'Schlanker OPC-UA-Stack in C# für Client und Server: genau die Teile der Spezifikation, die Sie im Alltag brauchen.',
      seoTitle: 'OPC UA Stack in C# (OpcSharp): Client und Server | UpTux',
      seoDescription: 'OpcSharp ist ein schlanker OPC-UA-Stack in C#: Sessions, Browsen, Lesen, Schreiben, Subscriptions und Security über UA TCP, ohne Codegenerierung und XML-Konfiguration.',
      tagline: 'OPC UA ohne Ballast',
      lead: 'OPC UA ist der Standard für die herstellerunabhängige Kommunikation in der Industrie, die Spezifikation ist aber riesig. OpcSharp setzt bewusst die Teile um, die im Alltag gebraucht werden, und verzichtet auf Codegenerierung, XML-Konfigurationsdateien und Reflection. So binden Sie Maschinen schnell an und behalten den Überblick über Ihren Code.',
      features: [
        { icon: 'refresh', title: 'Sessions', text: 'Verbinden, Authentifizieren und automatisches Wiederverbinden bei Verbindungsfehlern.' },
        { icon: 'compass', title: 'Browsen', text: 'Den Adressraum eines OPC-UA-Servers durchsuchen.' },
        { icon: 'code', title: 'Lesen und Schreiben', text: 'Node-Werte lesen und schreiben, mit Zuordnung auf .NET-Typen.' },
        { icon: 'activity', title: 'Subscriptions', text: 'Über Datenänderungen benachrichtigt werden, statt zu pollen.' },
        { icon: 'shield', title: 'Security', text: 'Signieren und Verschlüsseln nach den OPC-UA-Security-Policies mit X.509-Zertifikaten.' },
        { icon: 'layers', title: 'Client und Server', text: 'Daten von Maschinen abholen oder eigene Anlagen und Anwendungen per OPC UA bereitstellen.' },
      ],
      facts: [
        { label: 'Sprache', value: 'C# / .NET' },
        { label: 'Transport', value: 'Binäre Kodierung über UA TCP' },
      ],
    },
    en: {
      summary: 'A lean OPC UA stack in C# for client and server: exactly the parts of the specification you need day to day.',
      seoTitle: 'OPC UA stack in C# (OpcSharp): client and server | UpTux',
      seoDescription: 'OpcSharp is a lean OPC UA stack in C#: sessions, browsing, read, write, subscriptions and security over UA TCP, without code generation or XML configuration.',
      tagline: 'OPC UA without the bloat',
      lead: 'OPC UA is the standard for vendor-independent communication in industry, but the specification is huge. OpcSharp deliberately implements the parts you need day to day and avoids code generation, XML configuration files and reflection. You connect machines quickly and keep your code easy to follow.',
      features: [
        { icon: 'refresh', title: 'Sessions', text: 'Connect, authenticate and reconnect automatically after connection errors.' },
        { icon: 'compass', title: 'Browsing', text: "Browse an OPC UA server's address space." },
        { icon: 'code', title: 'Read and write', text: 'Read and write node values, mapped to .NET types.' },
        { icon: 'activity', title: 'Subscriptions', text: 'Get notified of data changes instead of polling.' },
        { icon: 'shield', title: 'Security', text: 'Signing and encryption according to the OPC UA security policies with X.509 certificates.' },
        { icon: 'layers', title: 'Client and server', text: 'Fetch data from machines or expose your own equipment and applications via OPC UA.' },
      ],
      facts: [
        { label: 'Language', value: 'C# / .NET' },
        { label: 'Transport', value: 'Binary encoding over UA TCP' },
      ],
    },
  },
  {
    slug: 'some-ip-stack',
    name: 'SOME/IP Stack',
    icon: 'cpu',
    group: 'communication',
    tech: ['SOME/IP', 'C#', 'Rust', 'C', 'C++'],
    de: {
      summary: 'SOME/IP-Stack für service-orientierte Kommunikation, verfügbar in C#, Rust, C und C++.',
      seoTitle: 'SOME/IP Stack in C#, Rust, C und C++ | UpTux',
      seoDescription: 'Der SOME/IP-Stack von UpTux für service-orientierte Kommunikation über Ethernet, verfügbar in C#, Rust, C und C++.',
      tagline: 'Service-orientierte Kommunikation in vier Sprachen',
      lead: 'SOME/IP ist das etablierte Protokoll für service-orientierte Kommunikation über Ethernet, bekannt aus der Fahrzeugtechnik. Unser Stack ist in C#, Rust, C und C++ verfügbar, vom Steuergerät bis zum Test- und Analysewerkzeug auf dem PC.',
      features: [
        { icon: 'code', title: 'Vier Sprachen', text: 'Implementierungen in C#, Rust, C und C++, damit der Stack zu Ihrer Plattform und Ihrem Team passt.' },
        { icon: 'cpu', title: 'Embedded bis Desktop', text: 'Von ressourcenarmen Steuergeräten bis zu Simulations-, Test- und Analysewerkzeugen.' },
        { icon: 'layers', title: 'Services statt Signale', text: 'Methoden, Events und Felder als Services, die Teilnehmer im Netzwerk anbieten und nutzen.' },
      ],
      facts: [{ label: 'Sprachen', value: 'C#, Rust, C, C++' }],
    },
    en: {
      summary: 'A SOME/IP stack for service-oriented communication, available in C#, Rust, C and C++.',
      seoTitle: 'SOME/IP stack in C#, Rust, C and C++ | UpTux',
      seoDescription: 'The UpTux SOME/IP stack for service-oriented communication over Ethernet, available in C#, Rust, C and C++.',
      tagline: 'Service-oriented communication in four languages',
      lead: 'SOME/IP is the established protocol for service-oriented communication over Ethernet, well known from the automotive industry. Our stack is available in C#, Rust, C and C++, from the ECU to test and analysis tools on the PC.',
      features: [
        { icon: 'code', title: 'Four languages', text: 'Implementations in C#, Rust, C and C++, so the stack fits your platform and your team.' },
        { icon: 'cpu', title: 'Embedded to desktop', text: 'From resource-constrained ECUs to simulation, test and analysis tools.' },
        { icon: 'layers', title: 'Services instead of signals', text: 'Methods, events and fields as services that participants offer and consume on the network.' },
      ],
      facts: [{ label: 'Languages', value: 'C#, Rust, C, C++' }],
    },
  },
  {
    slug: 'twincat-ads',
    name: 'Dahlke.TwinCAT.Ads',
    icon: 'plug',
    group: 'communication',
    links: [
      { type: 'github', url: 'https://github.com/patdhlk/Dahlke.TwinCAT.Ads' },
      { type: 'nuget', url: 'https://www.nuget.org/packages/Dahlke.TwinCAT.Ads' },
    ],
    tech: ['C#', '.NET', 'Beckhoff TwinCAT', 'ADS', 'EtherCAT', 'NuGet'],
    de: {
      summary: '.NET-Bibliothek für Beckhoff TwinCAT: typisierter Zugriff auf SPS-Variablen per ADS, mit Reconnect, Subscriptions und Simulation.',
      seoTitle: 'Dahlke.TwinCAT.Ads: Beckhoff TwinCAT ADS für .NET | UpTux',
      seoDescription: '.NET-Bibliothek für Beckhoff TwinCAT ADS: typisierte Reads und Writes per Symbolname, automatischer Reconnect, Live-Subscriptions, Alarme und Simulation ohne SPS.',
      tagline: 'TwinCAT-Steuerungen sauber aus .NET ansprechen',
      lead: 'Dahlke.TwinCAT.Ads verbindet .NET-Anwendungen mit Beckhoff-TwinCAT-SPSen über ADS. Sie lesen und schreiben Variablen typisiert per Symbolname und arbeiten mit gewöhnlichen .NET-Typen, ohne ADS-Low-Level-Code zu schreiben.',
      features: [
        { icon: 'code', title: 'Typisierter Zugriff', text: 'ReadValueAsync<T> und WriteValueAsync<T>. PLC-Structs, Function Blocks, Unions und Arrays werden auf Records, Klassen und Structs abgebildet.' },
        { icon: 'refresh', title: 'Stabile Verbindungen', text: 'Ein Objekt pro SPS. Bricht die Verbindung ab, baut die Bibliothek sie selbst wieder auf, das Handle bleibt gleich.' },
        { icon: 'activity', title: 'Live-Subscriptions', text: 'Änderungen werden gemeldet, auch nach einem Reconnect. Optional als IObservable<T>-Streams.' },
        { icon: 'shield', title: 'Alarme', text: 'Offene SPS-Alarme lesen, bei Änderungen benachrichtigt werden und Alarme quittieren (optionales Paket).' },
        { icon: 'layers', title: 'Batch, RPC und EtherCAT', text: 'Mehrere Zugriffe in einem Roundtrip, PLC-Methoden aufrufen sowie Diagnose von EtherCAT-Master und -Slaves.' },
        { icon: 'check', title: 'Testen ohne SPS', text: 'Simulationsmodus und Testhelfer, sodass Tests keine TwinCAT-Installation brauchen.' },
      ],
      facts: [
        { label: 'Plattform', value: '.NET 8, 9, 10 und .NET Standard 2.0' },
        { label: 'Einsatz', value: 'ASP.NET Core, Konsole, WPF, WinForms' },
        { label: 'Bezug', value: 'NuGet-Paket' },
      ],
    },
    en: {
      summary: '.NET library for Beckhoff TwinCAT: typed access to PLC variables via ADS, with reconnect, subscriptions and simulation.',
      seoTitle: 'Dahlke.TwinCAT.Ads: Beckhoff TwinCAT ADS for .NET | UpTux',
      seoDescription: '.NET library for Beckhoff TwinCAT ADS: typed reads and writes by symbol name, automatic reconnect, live subscriptions, alarms and simulation without a PLC.',
      tagline: 'Talk to TwinCAT controllers cleanly from .NET',
      lead: 'Dahlke.TwinCAT.Ads connects .NET applications to Beckhoff TwinCAT PLCs via ADS. You read and write variables by symbol name with ordinary .NET types, without writing low-level ADS code.',
      features: [
        { icon: 'code', title: 'Typed access', text: 'ReadValueAsync<T> and WriteValueAsync<T>. PLC structs, function blocks, unions and arrays map to records, classes and structs.' },
        { icon: 'refresh', title: 'Stable connections', text: 'One object per PLC. If the connection drops, the library reconnects by itself and the handle stays the same.' },
        { icon: 'activity', title: 'Live subscriptions', text: 'Changes are reported, even after a reconnect. Optionally as IObservable<T> streams.' },
        { icon: 'shield', title: 'Alarms', text: 'Read open PLC alarms, get notified of changes and acknowledge alarms (optional package).' },
        { icon: 'layers', title: 'Batch, RPC and EtherCAT', text: 'Several accesses in one round trip, PLC method calls, and diagnostics for EtherCAT master and slaves.' },
        { icon: 'check', title: 'Test without a PLC', text: 'Simulation mode and test helpers, so tests need no TwinCAT installation.' },
      ],
      facts: [
        { label: 'Platform', value: '.NET 8, 9, 10 and .NET Standard 2.0' },
        { label: 'Hosting', value: 'ASP.NET Core, console, WPF, WinForms' },
        { label: 'Distribution', value: 'NuGet package' },
      ],
    },
  },
  {
    slug: 'adsify',
    name: 'Adsify',
    icon: 'cloud',
    group: 'communication',
    links: [{ type: 'docs', url: 'https://patdhlk.com/adsify' }],
    tech: ['C#', 'ASP.NET Core', 'REST', 'SignalR', 'Beckhoff ADS', 'EtherCAT', 'MCP'],
    de: {
      summary: 'REST-API für Beckhoff TwinCAT: SPS-Variablen als sichere HTTP-Endpunkte, mit Echtzeit-Updates und EtherCAT-Diagnose.',
      seoTitle: 'Adsify: REST-API für Beckhoff TwinCAT SPS-Daten | UpTux',
      seoDescription: 'Adsify stellt SPS-Variablen von Beckhoff TwinCAT als HTTP-Endpunkte bereit: Lesen, Schreiben, Live-Updates per WebSocket, EtherCAT-Diagnose und Sicherheit ab Werk.',
      tagline: 'HTTP rein, SPS-Daten raus',
      lead: 'Adsify sitzt vor Beckhoff TwinCAT ADS und stellt SPS-Variablen als HTTP-Endpunkte bereit. Ihre Anwendungen brauchen keine ADS-Client-Bibliothek, kein AMS-Routing und kein Binärprotokoll. Adsify ersetzt die vielen Eigenbau-Brücken zur SPS, jede mit ihrem eigenen Sicherheitsmodell.',
      features: [
        { icon: 'code', title: 'Lesen und Schreiben per HTTP', text: 'Variablen als JSON lesen und schreiben, Batch-Zugriffe auf bis zu 100 Variablen auf einmal.' },
        { icon: 'compass', title: 'Symbolbrowser', text: 'Den Symbolbaum der SPS durchsuchen und Typinformationen abfragen, ohne TwinCAT XAE.' },
        { icon: 'activity', title: 'Echtzeit-Updates', text: 'Variablenänderungen per Server-Sent Events oder WebSocket (SignalR). Mehrere Clients teilen sich eine ADS-Notification.' },
        { icon: 'layers', title: 'EtherCAT-Diagnose', text: 'Master-Status, Slave-Zustände, CRC-Fehler und Topologie, über HTTP abrufbar.' },
        { icon: 'shield', title: 'Sicher ab Werk', text: 'JWT und OIDC, Rollen und Rechte pro SPS, Wertebegrenzungen, Allow-/Denylists für Schreibzugriffe und Rate Limiting.' },
        { icon: 'handshake', title: 'KI-Anbindung', text: 'Eingebauter MCP-Server: KI-Assistenten können Ihre Steuerungen in natürlicher Sprache abfragen.' },
      ],
      facts: [
        { label: 'Plattform', value: '.NET 8, 9, 10, läuft unter Linux' },
        { label: 'Besonderheit', value: 'Eingebauter ADS-Router, keine TwinCAT-Installation auf dem API-Host' },
      ],
    },
    en: {
      summary: 'A REST API for Beckhoff TwinCAT: PLC variables as secure HTTP endpoints, with real-time updates and EtherCAT diagnostics.',
      seoTitle: 'Adsify: REST API for Beckhoff TwinCAT PLC data | UpTux',
      seoDescription: 'Adsify exposes Beckhoff TwinCAT PLC variables as HTTP endpoints: read, write, live updates via WebSocket, EtherCAT diagnostics and security by default.',
      tagline: 'HTTP in, PLC data out',
      lead: 'Adsify sits in front of Beckhoff TwinCAT ADS and exposes PLC variables as HTTP endpoints. Your applications need no ADS client library, no AMS routing and no binary protocol. Adsify replaces the many home-made bridges to the PLC, each with its own security model.',
      features: [
        { icon: 'code', title: 'Read and write over HTTP', text: 'Read and write variables as JSON, with batch access to up to 100 variables at once.' },
        { icon: 'compass', title: 'Symbol browser', text: "Browse the PLC's symbol tree and query type information without TwinCAT XAE." },
        { icon: 'activity', title: 'Real-time updates', text: 'Variable changes via server-sent events or WebSocket (SignalR). Several clients share one ADS notification.' },
        { icon: 'layers', title: 'EtherCAT diagnostics', text: 'Master status, slave states, CRC errors and topology, available over HTTP.' },
        { icon: 'shield', title: 'Secure by default', text: 'JWT and OIDC, roles and permissions per PLC, value limits, allow/deny lists for writes and rate limiting.' },
        { icon: 'handshake', title: 'AI integration', text: 'Built-in MCP server: AI assistants can query your controllers in natural language.' },
      ],
      facts: [
        { label: 'Platform', value: '.NET 8, 9, 10, runs on Linux' },
        { label: 'Highlight', value: 'Built-in ADS router, no TwinCAT installation on the API host' },
      ],
    },
  },
  {
    slug: 'openec-diagnostics',
    name: 'OpenEC Diagnostics',
    icon: 'eye',
    group: 'communication',
    links: [{ type: 'github', url: 'https://github.com/patdhlk/OpenEC-Diagnostics' }],
    tech: ['EtherCAT', 'C#', '.NET 8', 'Avalonia', 'pcap', 'Apache 2.0'],
    de: {
      summary: 'Passive EtherCAT-Diagnose: Live-Verkehr über einen TAP oder aus Capture-Dateien dekodieren, ohne die Maschine zu stören.',
      seoTitle: 'OpenEC Diagnostics: passive EtherCAT-Diagnose | UpTux',
      seoDescription: 'OpenEC Diagnostics überwacht EtherCAT-Netzwerke passiv über einen TAP oder aus pcap-Dateien: Gerätezustände, Prozessdaten, Topologie und Fehlerzähler. Windows, Linux, macOS.',
      tagline: 'Sehen, was auf dem EtherCAT-Bus passiert',
      lead: 'OpenEC Diagnostics liest EtherCAT-Verkehr live über einen Netzwerk-TAP oder aus einer gespeicherten Capture-Datei, dekodiert ihn und zeigt, was jedes Gerät gerade tut. Das Werkzeug sendet selbst nie etwas auf den Bus und lässt sich deshalb an laufende Maschinen anschließen, ohne sie zu stören.',
      features: [
        { icon: 'eye', title: 'Rein passiv', text: 'Überwachung über einen Standard-TAP, ohne Eingriff in Master oder Geräte.' },
        { icon: 'layers', title: 'Tiefe Dekodierung', text: 'Datagramme, Working Counter, Mailbox-Protokolle (CoE, FoE, EoE, SoE) und Prozessdaten.' },
        { icon: 'file', title: 'ENI-Unterstützung', text: 'Mit einer ENI.xml werden Rohbytes zu benannten Variablen. Ohne ENI lernt das Tool die Buskonfiguration aus dem Startup-Verkehr und exportiert sie.' },
        { icon: 'compass', title: 'Topologie und Zustände', text: 'Gerätebaum, Status von Master und Geräten sowie Link-Status jedes Ports in der Desktop-Oberfläche.' },
        { icon: 'code', title: 'SDK und CLI', text: 'C#-Bibliothek für eigene Anwendungen und ein Kommandozeilenwerkzeug für den Betrieb ohne Oberfläche.' },
        { icon: 'clock', title: 'Offline-Analyse', text: 'Auswertung von .pcap- und .pcapng-Dateien, z. B. Aufzeichnungen von der Inbetriebnahme.' },
      ],
      facts: [
        { label: 'Plattform', value: 'Windows, Linux, macOS (.NET 8, Avalonia)' },
        { label: 'Kompatibel mit', value: 'TwinCAT, Acontis, IgH, SOEM und Geräten aller Hersteller' },
        { label: 'Lizenz', value: 'Apache 2.0' },
      ],
    },
    en: {
      summary: 'Passive EtherCAT diagnostics: decode live traffic via a TAP or from capture files, without disturbing the machine.',
      seoTitle: 'OpenEC Diagnostics: passive EtherCAT diagnostics | UpTux',
      seoDescription: 'OpenEC Diagnostics monitors EtherCAT networks passively via a TAP or from pcap files: device states, process data, topology and error counters. Windows, Linux, macOS.',
      tagline: 'See what is happening on the EtherCAT bus',
      lead: 'OpenEC Diagnostics reads EtherCAT traffic live via a network TAP or from a saved capture file, decodes it and shows what every device is doing. The tool never sends anything onto the bus, so you can connect it to running machines without disturbing them.',
      features: [
        { icon: 'eye', title: 'Purely passive', text: 'Monitoring via a standard TAP, without touching the master or devices.' },
        { icon: 'layers', title: 'Deep decoding', text: 'Datagrams, working counters, mailbox protocols (CoE, FoE, EoE, SoE) and process data.' },
        { icon: 'file', title: 'ENI support', text: 'An ENI.xml turns raw bytes into named variables. Without one, the tool learns the bus configuration from start-up traffic and exports it.' },
        { icon: 'compass', title: 'Topology and states', text: 'Device tree, master and device status and the link state of every port in the desktop app.' },
        { icon: 'code', title: 'SDK and CLI', text: 'A C# library for your own applications and a command-line tool for headless use.' },
        { icon: 'clock', title: 'Offline analysis', text: 'Analysis of .pcap and .pcapng files, for example recordings from commissioning.' },
      ],
      facts: [
        { label: 'Platform', value: 'Windows, Linux, macOS (.NET 8, Avalonia)' },
        { label: 'Works with', value: 'TwinCAT, Acontis, IgH, SOEM and devices from any vendor' },
        { label: 'Licence', value: 'Apache 2.0' },
      ],
    },
  },
  {
    slug: 'damper',
    name: 'Damper',
    icon: 'cpu',
    group: 'libraries',
    href: { de: '/damper/', en: '/en/damper/' },
    de: { summary: 'Modulare C++17-Bibliothek mit Datenstrukturen, asynchronem I/O und Kryptografie. Ohne externe Abhängigkeiten, ideal für Embedded.' },
    en: { summary: 'A modular C++17 library with data structures, asynchronous I/O and cryptography. No external dependencies, ideal for embedded.' },
  },
  {
    slug: 'asammdf',
    name: 'AsamMdf',
    icon: 'file',
    group: 'libraries',
    links: [{ type: 'nuget', url: 'https://www.nuget.org/packages/AsamMdf' }],
    href: { de: '/asammdf/', en: '/en/asammdf/' },
    de: { summary: 'Performante .NET-Bibliothek zum Lesen von ASAM MDF4-Messdateien mit Streaming-API, als NuGet-Paket.' },
    en: { summary: 'A high-performance .NET library for reading ASAM MDF4 measurement files with a streaming API, available on NuGet.' },
  },
  {
    slug: 'ifm-cr1140',
    name: 'ifm CR1140 HAL & SDK',
    icon: 'cpu',
    group: 'hmi',
    links: [
      { type: 'github', url: 'https://github.com/uptux/ifm-cr1140' },
      { type: 'nuget', url: 'https://www.nuget.org/packages/Cr1140.Avalonia', label: 'Cr1140.Avalonia' },
    ],
    tech: ['Rust', 'C#', '.NET', 'Avalonia', 'Slint', 'Yocto Linux', 'SocketCAN'],
    de: {
      summary: 'Eigene Anwendungen in Rust oder .NET auf dem ifm ecomatDisplay CR1140/CR1141, statt der CODESYS-Runtime.',
      seoTitle: 'ifm CR1140 HAL & SDK: Rust und .NET statt CODESYS | UpTux',
      seoDescription: 'HAL und SDK für das ifm ecomatDisplay CR1140/CR1141: eigene Anwendungen in Rust oder .NET (Avalonia) mit Display, Tasten, CAN, LEDs und Persistenz statt CODESYS.',
      tagline: 'Volle Kontrolle über das ecomatDisplay',
      lead: 'Mit HAL und SDK für das ifm CR1140/CR1141 ecomatDisplay läuft Ihre eigene Anwendung anstelle der CODESYS-Runtime. Sie entwickeln in Rust oder .NET und haben vollen Zugriff auf Display, Tasten, CAN-Bus und Systemfunktionen des 4,3″-Bediengeräts.',
      features: [
        { icon: 'eye', title: 'Display', text: 'Framebuffer-Ausgabe mit 800×480, optional Double Buffering und Backlight-Steuerung. Unterstützt fbdev und DRM/KMS.' },
        { icon: 'wrench', title: 'Tasten und CAN', text: 'Tastatureingaben über evdev und CAN-Kommunikation über SocketCAN.' },
        { icon: 'activity', title: 'Systemzugriff', text: 'LEDs, Hintergrundbeleuchtung und SoC-Temperatur typisiert ansprechen.' },
        { icon: 'file', title: 'Persistenz', text: 'Ein Retain-Speicher, der auch ein erneutes Flashen übersteht.' },
        { icon: 'code', title: 'Rust oder .NET', text: 'Rust-SDK mit Slint-Beispielen oder .NET mit Avalonia, inklusive Desktop-Emulator für die Entwicklung am PC.' },
        { icon: 'refresh', title: 'Reversibel', text: 'Deploy-Skripte deaktivieren CODESYS und bieten einen getesteten Rückweg zum Werkszustand.' },
      ],
      facts: [
        { label: 'Gerät', value: 'ifm CR1140/CR1141 ecomatDisplay' },
        { label: 'Hardware', value: 'NXP i.MX 8M Nano (aarch64), Yocto Linux' },
      ],
    },
    en: {
      summary: 'Run your own Rust or .NET applications on the ifm ecomatDisplay CR1140/CR1141 instead of the CODESYS runtime.',
      seoTitle: 'ifm CR1140 HAL & SDK: Rust and .NET instead of CODESYS | UpTux',
      seoDescription: 'HAL and SDK for the ifm ecomatDisplay CR1140/CR1141: your own applications in Rust or .NET (Avalonia) with display, keys, CAN, LEDs and persistence instead of CODESYS.',
      tagline: 'Full control over the ecomatDisplay',
      lead: 'With the HAL and SDK for the ifm CR1140/CR1141 ecomatDisplay, your own application runs in place of the CODESYS runtime. You develop in Rust or .NET and have full access to the display, keys, CAN bus and system functions of the 4.3″ operator device.',
      features: [
        { icon: 'eye', title: 'Display', text: 'Framebuffer output at 800×480, optional double buffering and backlight control. Supports fbdev and DRM/KMS.' },
        { icon: 'wrench', title: 'Keys and CAN', text: 'Keyboard input via evdev and CAN communication via SocketCAN.' },
        { icon: 'activity', title: 'System access', text: 'Typed access to LEDs, backlight and SoC temperature.' },
        { icon: 'file', title: 'Persistence', text: 'A retain store that survives reflashing.' },
        { icon: 'code', title: 'Rust or .NET', text: 'A Rust SDK with Slint examples or .NET with Avalonia, including a desktop emulator for development on the PC.' },
        { icon: 'refresh', title: 'Reversible', text: 'Deploy scripts disable CODESYS and provide a tested way back to factory state.' },
      ],
      facts: [
        { label: 'Device', value: 'ifm CR1140/CR1141 ecomatDisplay' },
        { label: 'Hardware', value: 'NXP i.MX 8M Nano (aarch64), Yocto Linux' },
      ],
    },
  },
  {
    slug: 'presscenter',
    name: 'Press Center',
    icon: 'factory',
    group: 'hmi',
    links: [{ type: 'docs', url: 'https://patdhlk.com/Dahlke.PressCenter/' }],
    tech: ['C#', '.NET', 'Avalonia', 'MVVM', 'Beckhoff ADS', 'RethinkDB'],
    de: {
      summary: 'HMI/SCADA-Software zur Überwachung und Steuerung industrieller Druckmaschinen, bedient per Multitouch.',
      seoTitle: 'Press Center: HMI/SCADA für industrielle Druckmaschinen | UpTux',
      seoDescription: 'Press Center ist eine HMI/SCADA-Lösung zur Echtzeit-Überwachung und Steuerung industrieller Druckmaschinen, z. B. im Metalldruck. C#, Avalonia, Beckhoff ADS.',
      tagline: 'HMI/SCADA für Druckmaschinen',
      lead: 'Press Center ist eine Software zur Überwachung und Steuerung industrieller Druckmaschinen in Echtzeit, entstanden für eine Produktionslinie im Metalldruck. Eine durchdachte Navigation, mehrere Assistenzsysteme und vorhersagbare Ergebnisse machen die Bedienung einfach.',
      features: [
        { icon: 'activity', title: 'Echtzeit-Überwachung', text: 'Zustände und Prozessdaten der Maschine live im Blick.' },
        { icon: 'handshake', title: 'Assistenzsysteme', text: 'Mehrere Assistenten führen durch die Bedienung und sorgen für vorhersagbare Ergebnisse.' },
        { icon: 'eye', title: 'Multitouch-Bedienung', text: 'Optimiert für die Bedienung an einem 24-Zoll-Multitouch-Bildschirm direkt an der Linie.' },
        { icon: 'plug', title: 'Steuerungsanbindung', text: 'Kommunikation mit der Steuerung über Beckhoff ADS, Fernzugriff über Ethernet und VPN.' },
      ],
      facts: [
        { label: 'Plattform', value: 'Windows, Linux, macOS (C#, Avalonia)' },
        { label: 'Einsatz', value: 'Produktionslinie im Metalldruck' },
      ],
    },
    en: {
      summary: 'HMI/SCADA software for monitoring and controlling industrial printing presses, operated by multitouch.',
      seoTitle: 'Press Center: HMI/SCADA for industrial printing presses | UpTux',
      seoDescription: 'Press Center is an HMI/SCADA solution for real-time monitoring and control of industrial printing presses, e.g. in metal printing. C#, Avalonia, Beckhoff ADS.',
      tagline: 'HMI/SCADA for printing presses',
      lead: 'Press Center is software for monitoring and controlling industrial printing presses in real time, built for a metal printing production line. Well-designed navigation, several assistance systems and predictable results make operation simple.',
      features: [
        { icon: 'activity', title: 'Real-time monitoring', text: 'Machine states and process data at a glance, live.' },
        { icon: 'handshake', title: 'Assistance systems', text: 'Several assistants guide operators and ensure predictable results.' },
        { icon: 'eye', title: 'Multitouch operation', text: 'Optimised for operation on a 24-inch multitouch screen right at the line.' },
        { icon: 'plug', title: 'PLC connectivity', text: 'Communication with the controller via Beckhoff ADS, remote access via Ethernet and VPN.' },
      ],
      facts: [
        { label: 'Platform', value: 'Windows, Linux, macOS (C#, Avalonia)' },
        { label: 'In use', value: 'Metal printing production line' },
      ],
    },
  },
];

/** Products that get a generated detail page. */
export const detailProducts = products.filter((p) => !p.href);

export function productHref(p: Product, lang: Lang): string {
  return p.href ? p.href[lang] : lang === 'de' ? `/produkte/${p.slug}/` : `/en/products/${p.slug}/`;
}
