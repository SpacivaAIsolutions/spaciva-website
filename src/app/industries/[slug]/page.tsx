import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Activity,
  ShoppingCart,
  Box,
  GraduationCap,
  Truck,
  Megaphone,
  Compass,
  Car,
  Home,
  Utensils,
  Trophy,
  Factory,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap,
  Layers,
  Database
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

// Type definitions
interface ProblemSolution {
  painPoint: string;
  consequence: string;
  resolution: string;
}

interface IndustryData {
  title: string;
  metaDesc: string;
  keywords: string[];
  name: string;
  headline: string;
  subheadline: string;
  icon: any;
  overview: string;
  problems: ProblemSolution[];
  solutions: { title: string; desc: string }[];
  impactMetric: { value: string; label: string };
  techStack: string[];
}

// 12 Industries Data Dictionary
const industries: Record<string, IndustryData> = {
  healthcare: {
    title: "Custom Healthcare Software Development | HIPAA Compliant | SPACIVA",
    metaDesc: "SPACIVA engineers custom secure, HIPAA-compliant healthcare software, medical QMS, CAPA platforms, patient portals, and automated clinical workflows.",
    keywords: ["healthcare software development", "medical QMS system", "HIPAA compliant software", "clinical workflow automation", "pharmaceutical quality management"],
    name: "Healthcare & Pharmaceuticals",
    headline: "Secure, HIPAA-Compliant Healthcare Product Engineering",
    subheadline: "We build medical-grade Quality Management Systems (QMS), automated compliance workflows, and patient data portals with 100% data auditability.",
    icon: Activity,
    overview: "Modern healthcare and pharma operations demand absolute reliability, complete data security, and flawless regulatory alignment. We bridge the gap between complex medical standards and highly usable, automated software systems.",
    problems: [
      {
        painPoint: "Struggling with manual CAPA (Corrective and Preventive Action) and clinical audit tracking.",
        consequence: "Results in high operational friction, lost audit trails, and extreme regulatory non-compliance risks.",
        resolution: "We build automated compliance dashboards that log audit steps in real-time with automated follow-ups."
      },
      {
        painPoint: "Patient records and clinical telemetry are locked in fragmented legacy databases.",
        consequence: "Delays decision-making and poses severe patient data privacy leak vulnerabilities.",
        resolution: "We engineer secure, central, HIPAA-compliant databases featuring end-to-end encryption."
      },
      {
        painPoint: "Doctors and lab quality controllers spend hours on repetitive manual documentation.",
        consequence: "Increases burn-out rates and introduces human-entry transcription errors in critical test results.",
        resolution: "We deploy AI-powered clinical report summarization tools and optical form character recognition."
      }
    ],
    solutions: [
      { title: "Compliant QMS Platforms", desc: "Digital systems managing standard operating procedures (SOPs), employee training logs, and equipment calibrations." },
      { title: "Interactive Patient Portals", desc: "User-friendly client hubs for telehealth bookings, direct laboratory telemetry downloads, and digital prescriptions." },
      { title: "Clinical Workflow Engines", desc: "Automate lab intake tasks, schedule patient check-ins, and orchestrate emergency room queues." }
    ],
    impactMetric: { value: "100%", label: "HIPAA & FDA CFR Part 11 Compliance Audits Passed" },
    techStack: ["Next.js", "Python / FastAPI", "AWS KMS", "PostgreSQL", "Docker"]
  },
  "retail-ecommerce": {
    title: "E-Commerce & Retail Software Development Company | SPACIVA",
    metaDesc: "We build high-converting headless storefronts, custom e-commerce web applications, secure single-page checkouts, and ERP inventory integrations.",
    keywords: ["custom ecommerce website", "headless Shopify development", "retail inventory management", "omnichannel ecommerce platform"],
    name: "Retail & E-commerce",
    headline: "Headless E-Commerce & Retail Product Engineering",
    subheadline: "Achieve 100/100 Google PageSpeed scores, custom multi-currency checkout routes, and automated warehouse inventory syncing.",
    icon: ShoppingCart,
    overview: "In retail, a millisecond delay is a lost sale. We build high-performance e-commerce software that scales from small boutique catalogs to multi-million user checkout rushes.",
    problems: [
      {
        painPoint: "Bloated template storefronts take 4+ seconds to load on mobile connections.",
        consequence: "Leads to sky-high bounce rates and expensive ad-click budget waste.",
        resolution: "We construct ultra-light Next.js headless storefronts that load statically in under 300ms."
      },
      {
        painPoint: "Mismatched stock numbers between physical warehouses and the online catalog.",
        consequence: "Causes accidental overselling, customer disappointment, and operational chaos.",
        resolution: "We establish real-time API sync bridges connecting storefront checkouts directly to ERP databases."
      },
      {
        painPoint: "Rigid SaaS billing models restrict custom loyalty discounts and bundle pricing.",
        consequence: "Forces you into high-commission transaction fees and limits marketing campaign creativity.",
        resolution: "We architect custom headless logic layers that handle dynamic bundles, discounting, and subscriptions."
      }
    ],
    solutions: [
      { title: "Headless Storefront Frontend", desc: "Decoupled visual architecture using React and Next.js, integrating Shopify or WooCommerce backends via GraphQL API." },
      { title: "Omnichannel Stock Managers", desc: "Centralized inventory software coordinating offline POS, regional warehouses, and online marketplaces." },
      { title: "Customized Payment Flows", desc: "Seamless checkout platforms with integrated multi-provider gateways, localized tax calculations, and fraud alerts." }
    ],
    impactMetric: { value: "3.2x", label: "Average Page Loading Speed Acceleration" },
    techStack: ["React / Next.js", "GraphQL", "Node.js", "Typesense Search", "Shopify Engine"]
  },
  "isv-software-product": {
    title: "ISV & SaaS Product Development Company | SPACIVA",
    metaDesc: "Partner with SPACIVA to build multi-tenant SaaS MVPs, scalable customer platforms, custom billing databases, and high-performance admin dashboards.",
    keywords: ["ISV software development", "SaaS MVP builder", "multi tenant architecture", "custom platform modernization"],
    name: "ISVs & Software Product",
    headline: "SaaS MVP & Production-Grade Product Engineering",
    subheadline: "We act as your dedicated co-engineering team, transforming raw product visions into scalable multi-tenant SaaS platforms.",
    icon: Box,
    overview: "Software companies (ISVs) need clean code, secure multi-tenancy, and rapid launch frameworks. We build robust SaaS platforms prepared for rigorous venture capital audits.",
    problems: [
      {
        painPoint: "Stuck in perpetual 'development purgatory' without launching a functional MVP.",
        consequence: "Allows competitors to capture market share first while draining startup capital.",
        resolution: "We build fully working, launch-ready core MVPs in 6 to 10 weeks using pre-engineered boilerplates."
      },
      {
        painPoint: "Unoptimized database queries scale poorly as the multi-tenant user base grows.",
        consequence: "Generates massive server bills, slow page responses, and frequent platform downtime.",
        resolution: "We construct secure tenant-isolated databases with advanced indexing and query caching."
      },
      {
        painPoint: "Clunky, slow, and outdated dashboard designs that scare away high-paying enterprise users.",
        consequence: "Increases user churn, prevents upsells, and lowers customer satisfaction.",
        resolution: "We design premium Figma layouts and code them into responsive, pixel-perfect Tailwind dashboards."
      }
    ],
    solutions: [
      { title: "Multi-Tenant SaaS Architecture", desc: "Build robust multi-tenant platforms with secure organization-level isolation and role-based access control." },
      { title: "SaaS Billing & Subscriptions", desc: "Integrate Stripe or Chargebee databases for tiered, usage-based, and metered billing plans." },
      { title: "API Integration & Dev Portals", desc: "Design secure public API layers and complete developer documentation hubs to foster platform expansion." }
    ],
    impactMetric: { value: "8-10 Wks", label: "Average Time-to-Market for Scalable SaaS MVPs" },
    techStack: ["Next.js / TypeScript", "Node.js", "Prisma ORM", "PostgreSQL", "Stripe API"]
  },
  "education-elearning": {
    title: "E-Learning & LMS Development Company | SPACIVA",
    metaDesc: "SPACIVA develops custom Learning Management Systems (LMS), corporate training platforms, SCORM compliant tools, and student portals.",
    keywords: ["custom LMS development", "elearning platform builder", "SCORM compliance software", "corporate training portal"],
    name: "Education & E-learning",
    headline: "Interactive E-Learning & Custom LMS Development",
    subheadline: "We build high-retention student portals, secure course creator hubs, automated grading, and SCORM/xAPI compliant architectures.",
    icon: GraduationCap,
    overview: "Education technology succeeds when interfaces are engaging, video delivery is lag-free, and training completion rates are verifiable. We build platforms that make learning effortless.",
    problems: [
      {
        painPoint: "Using clunky off-the-shelf LMS systems that look outdated and offer poor student engagement.",
        consequence: "Causes high student dropout rates, low user reviews, and weak training completion metrics.",
        resolution: "We design modern, gamified learning paths with progress bars, certificates, and interactive cards."
      },
      {
        painPoint: "Video hosting costs skyrocket as course libraries and student bases expand.",
        consequence: "Drains course platform profit margins and degrades streaming speeds on slow networks.",
        resolution: "We deploy optimized video encoding pipelines (HLS/DASH) on global CDN delivery networks."
      },
      {
        painPoint: "Inability to easily track, export, and report mandatory compliance certificate updates.",
        consequence: "Triggers heavy regulatory compliance audits for corporate training departments.",
        resolution: "We program automated certification tracking engines that trigger email renewals."
      }
    ],
    solutions: [
      { title: "Custom Learner Portals", desc: "Immersive learning environments with progress tracking, interactive quizzes, bookmarks, and mobile-first responsive screens." },
      { title: "Course Management Dashboards", desc: "Drag-and-drop course builders for instructors, supporting secure video uploads, PDF assets, and text modules." },
      { title: "Automated Evaluation Systems", desc: "Engines that handle automated quiz scoring, instant certificates generation, and progress analytical charts." }
    ],
    impactMetric: { value: "92%", label: "Average Student Course Completion Rate Achieved" },
    techStack: ["Next.js", "AWS S3 / CloudFront", "Mux Video", "Supabase", "Tailwind CSS"]
  },
  "logistics-transportation": {
    title: "Logistics & Transportation Software Development | SPACIVA",
    metaDesc: "SPACIVA engineers custom logistics tracking systems, route optimization software, dispatch dashboards, and warehouse management tools.",
    keywords: ["logistics software development", "route optimization tools", "custom fleet tracking", "warehouse management software"],
    name: "Logistics & Transportation",
    headline: "Intelligent Fleet, Route, & Logistics Engineering",
    subheadline: "We build real-time GPS tracking hubs, mathematical route planning engines, and automated warehouse dispatch software.",
    icon: Truck,
    overview: "Efficiency is everything in supply chain networks. We develop reliable, high-performance tracking and dispatch systems that minimize transport delays and maximize load utility.",
    problems: [
      {
        painPoint: "Dispatchers planning routes manually using spreadsheets and scattered maps.",
        consequence: "Leads to massive fuel waste, delayed deliveries, and low fleet capacity optimization.",
        resolution: "We integrate route-finding APIs (Mapbox, Google Maps) that calculate routes instantly."
      },
      {
        painPoint: "Warehouse teams lacking real-time visibility on incoming and outgoing freight loads.",
        consequence: "Triggers warehouse dock bottlenecks, costly trailer detention fees, and tracking errors.",
        resolution: "We build live, collaborative schedule boards displaying dock allocations and load updates."
      },
      {
        painPoint: "Drivers struggling with outdated, heavy mobile apps that crash and drain battery.",
        consequence: "Results in missing proof-of-delivery (PoD) signs, tracking gaps, and driver frustration.",
        resolution: "We develop ultra-lightweight progressive web apps (PWAs) that work seamlessly offline."
      }
    ],
    solutions: [
      { title: "Real-Time Fleet Dashboards", desc: "Live web dashboards map fleet vehicle telemetry, fuel consumption, speed alerts, and ETA updates." },
      { title: "Digital Proof of Delivery", desc: "Secure mobile client signature capture, photo upload confirmations, and automated invoicing on delivery." },
      { title: "Route Optimization Tools", desc: "Sophisticated algorithms that match multi-stop drop locations to minimize travel times and fuel consumption." }
    ],
    impactMetric: { value: "24%", label: "Average Reduction in Fleet Operational Fuel Costs" },
    techStack: ["React / Leaflet", "Go / Rust", "PostGIS", "Redis", "Mapbox APIs"]
  },
  "digital-marketing-agencies": {
    title: "Software Development for Digital & Marketing Agencies | SPACIVA",
    metaDesc: "We build custom analytics aggregators, client report portals, lead routing software, and marketing workflow automations for agencies.",
    keywords: ["agency report portals", "custom marketing software", "analytics aggregation platform", "lead routing engine"],
    name: "Digital & Marketing Agencies",
    headline: "Custom Analytics Portals & Agency Automations",
    subheadline: "We build branded client dashboard portals, multi-source marketing data aggregators, and custom automated client reporting systems.",
    icon: Megaphone,
    overview: "Marketing agencies scale when they automate repetitive reporting pipelines and present results to clients via beautifully branded, interactive dashboard portals.",
    problems: [
      {
        painPoint: "Account managers spending the first week of every month copy-pasting data into PDF reports.",
        consequence: "Consumes hundreds of non-billable hours and slows down creative strategy work.",
        resolution: "We engineer automated PDF generation pipelines pulling live data from Meta, Google, and TikTok APIs."
      },
      {
        painPoint: "Clients asking for status updates constantly because they lack direct data access.",
        consequence: "Spams your inbox with 'quick questions' and stresses your account management team.",
        resolution: "We build white-labeled client portals where brands log in to view their performance metrics."
      },
      {
        painPoint: "Valuable ad-clicks landing on generic, unoptimized forms that leak prospective leads.",
        consequence: "Lowers campaign ROI, inflates cost-per-lead metrics, and hurts client satisfaction.",
        resolution: "We code custom, hyper-fast single-page landing systems with automated routing logic."
      }
    ],
    solutions: [
      { title: "White-Label Client Portals", desc: "Beautifully branded web dashboards where your clients can view real-time ROI, ad metrics, and deliverables." },
      { title: "Marketing API Aggregators", desc: "Databases that consolidate advertising metrics from Meta Ads, Google Ads, TikTok Ads, and Shopify in one view." },
      { title: "Automated Lead Routers", desc: "Intelligent databases that parse incoming leads and instantly assign them to correct sales reps via Slack or SMS." }
    ],
    impactMetric: { value: "350+ Hrs", label: "Saved Monthly on Manual Client Reporting Tasks" },
    techStack: ["Next.js", "Python / Airflow", "Google BigQuery", "Tailwind CSS", "OAuth Integrations"]
  },
  "travel-hospitality": {
    title: "Travel & Hospitality Software Development Company | SPACIVA",
    metaDesc: "SPACIVA develops custom hotel booking engines, travel itinerary builders, guest management systems, and hospitality reservation apps.",
    keywords: ["hospitality software development", "hotel booking engines", "travel itinerary builder", "reservation management system"],
    name: "Travel & Hospitality",
    headline: "High-Converting Hospitality & Booking Software",
    subheadline: "We design and build custom direct-booking reservation systems, itinerary planners, and administrative hospitality panels.",
    icon: Compass,
    overview: "The travel sector thrives on ease of use. We build elegant booking engines and smart itinerary management software that simplify travel and raise direct booking profit margins.",
    problems: [
      {
        painPoint: "Using clunky third-party reservation software that charges high commission percentages.",
        consequence: "Eats directly into your hotel or resort profit margins while limiting brand styling freedom.",
        resolution: "We develop custom direct-booking engines integrated with your website, charging 0% commissions."
      },
      {
        painPoint: "Itinerary planning is painful for users due to non-interactive, long PDF pages.",
        consequence: "Leads to cart abandonment and lower bookings for custom guided tours.",
        resolution: "We build drag-and-drop itinerary builders that map out trips with live map paths."
      },
      {
        painPoint: "Staff managing customer room bookings and billing schedules via disconnected systems.",
        consequence: "Triggers accidental overbookings, incorrect invoices, and poor review ratings.",
        resolution: "We coordinate a single booking database that syncs rooms, calendar dates, and checkout bills."
      }
    ],
    solutions: [
      { title: "Direct Booking Engines", desc: "Lightweight, highly optimized booking widgets that integrate seamlessly on your site with instant credit card sweeps." },
      { title: "Interactive Itinerary Builders", desc: "Elegantly designed client tools that structure multi-day travel trips, complete with flight, stay, and dining widgets." },
      { title: "Staff Front-Desk Calendars", desc: "Clean administrative calendars coordinating check-ins, housekeeping duties, and custom client bills." }
    ],
    impactMetric: { value: "+18%", label: "Average Increase in Direct, Commission-Free Room Bookings" },
    techStack: ["Next.js / React", "Node.js", "Redis / BullMQ", "PostgreSQL", "Stripe API"]
  },
  automotive: {
    title: "Automotive Software Development | Connected Fleet & IoT | SPACIVA",
    metaDesc: "SPACIVA builds custom automotive diagnostic software, fleet tracking boards, vehicle inventory systems, and dealer CRM software.",
    keywords: ["automotive software builder", "dealer inventory system", "fleet OBD tracking", "connected vehicle dashboard"],
    name: "Automotive",
    headline: "Automotive Fleet Telemetry & Inventory Engineering",
    subheadline: "We build OBD-II telemetry databases, connected car analytics, and automated dealer vehicle inventory management boards.",
    icon: Car,
    overview: "From fleet diagnostics to dealer lots, the automotive industry requires deep data pipelines, hardware-to-cloud connections, and reliable inventory management systems.",
    problems: [
      {
        painPoint: "Inability to monitor critical engine diagnostics and fuel levels of field fleets in real-time.",
        consequence: "Leads to expensive vehicle breakdowns, unexpected repair bills, and transport downtime.",
        resolution: "We develop databases that parse OBD-II API inputs, alerting mechanics before issues escalate."
      },
      {
        painPoint: "Car dealerships relying on slow, outdated software to track vehicle models on lot.",
        consequence: "Causes sales reps to misquote options, slow client queries, and drop hot leads.",
        resolution: "We build fast, cloud-based dealer inventory systems featuring immediate advanced keyword search."
      },
      {
        painPoint: "Manual, paper-based vehicle rental handovers and dent tracking.",
        consequence: "Triggers disputes over damages, delays vehicle pickups, and clutters office space.",
        resolution: "We design custom mobile appraisal portals where staff snap photos to log damages."
      }
    ],
    solutions: [
      { title: "OBD Telemetry Systems", desc: "IoT data integrations tracking speed patterns, diagnostic error codes (DTC), and actual fuel use." },
      { title: "Dealer Inventory Platforms", desc: "Faceted search databases managing multi-location vehicles, photos, VIN decoding, and sales pipeline statuses." },
      { title: "Appraisal Mobile Web Apps", desc: "Intuitive dealer inspection portals with photo logging, damage mapping, and instant value estimates." }
    ],
    impactMetric: { value: "4.7x", label: "Dealer Lot Vehicle Inventory Search Speeds" },
    techStack: ["React Native", "Go / Rust", "AWS IoT Core", "Postgres GIS", "InfluxDB"]
  },
  "real-estate": {
    title: "Real Estate Software Development | Custom CRMs & MLS | SPACIVA",
    metaDesc: "We build custom real estate portal websites, client lead tracking CRMs, automated property alert systems, and document vault hubs.",
    keywords: ["real estate custom CRM", "property listing portal", "RETS MLS integration", "real estate lead software"],
    name: "Real Estate",
    headline: "Scalable Property Portals & Custom Real Estate CRMs",
    subheadline: "We build fast-loading MLS listing search platforms, custom real estate CRM pipelines, and secure buyer document vaults.",
    icon: Home,
    overview: "Real estate transactions depend on clear property displays, rapid listing searches, and automated pipeline follow-ups that turn prospects into finalized handshakes.",
    problems: [
      {
        painPoint: "Property listing search pages take 5+ seconds to display matching results on mobile.",
        consequence: "Frustrated house hunters bounce away to competitor national platforms immediately.",
        resolution: "We construct lightning-fast listing searches using server-side filters and Algolia indexing."
      },
      {
        painPoint: "Agents manually forwarding new properties to matching buyers using generic emails.",
        consequence: "Consumes endless hours daily and runs high risks of missing interested, qualified buyers.",
        resolution: "We develop automated property matching algorithms that email buyers custom listings daily."
      },
      {
        painPoint: "Secure mortgage and sale agreements scattered across unencrypted email folders.",
        consequence: "Exposes sensitive personal client financials to dangerous hacker intercepts.",
        resolution: "We deploy secure, client-encrypted document vaults where buyers upload records safely."
      }
    ],
    solutions: [
      { title: "Faceted Property Searches", desc: "Lighting-fast property portals with Mapbox maps, advanced filters, and photo portfolios." },
      { title: "Automated Match Engines", desc: "Background processes that compare client desires to active MLS properties, matching lists dynamically." },
      { title: "Secure Client Doc Vaults", desc: "Encrypted document hubs supporting multi-factor auth, electronic signatures, and secure mortgage scans." }
    ],
    impactMetric: { value: "3.4x", label: "Average Increase in Direct Listing Search Interactions" },
    techStack: ["React / Next.js", "Python / FastAPI", "Algolia / Typesense", "AWS S3", "Mapbox GL"]
  },
  "food-restaurant": {
    title: "Food & Restaurant Software Development | Custom Ordering | SPACIVA",
    metaDesc: "SPACIVA engineers custom direct-ordering restaurant websites, kitchen dispatch displays, reservation tools, and delivery tracking apps.",
    keywords: ["restaurant software development", "custom food ordering platform", "kitchen display system", "delivery dispatch dashboard"],
    name: "Food & Restaurant",
    headline: "Direct-to-Consumer Food Ordering & Kitchen Systems",
    subheadline: "We develop custom direct online ordering panels (0% commission), kitchen dispatch display screens, and delivery routing hubs.",
    icon: Utensils,
    overview: "In food service, margins are razor-thin. We build direct ordering channels and kitchen dispatch monitors that eliminate marketplace commission fees and raise kitchen speeds.",
    problems: [
      {
        painPoint: "Losing 15% to 30% of order values to major delivery aggregator commissions.",
        consequence: "Eats your restaurant's thin margins and controls valuable customer email databases.",
        resolution: "We build custom branded web ordering portals integrated directly with Stripe, charging 0% commissions."
      },
      {
        painPoint: "Kitchen staff drowning in paper tickets printed from scattered tablet devices.",
        consequence: "Triggers meal prep delays, missed order modifications, and negative restaurant reviews.",
        resolution: "We create unified Kitchen Display Systems (KDS) coordinating orders on one digital screen."
      },
      {
        painPoint: "Customers calling the restaurant because they have zero tracking on their delivery driver.",
        consequence: "Spams your busy front-of-house staff while degrading customer satisfaction scores.",
        resolution: "We build real-time GPS delivery tracking links, showing driver transit paths on live maps."
      }
    ],
    solutions: [
      { title: "Commission-Free Ordering", desc: "Beautifully responsive, fast web menus enabling seamless desktop and mobile food checkout in under 1 minute." },
      { title: "Kitchen Display Screens (KDS)", desc: "Interactive tablets or screens for chefs, featuring visual timers, auto-sorting categories, and sound alerts." },
      { title: "Delivery Driver Trackers", desc: "Live-map delivery widgets using browser geolocation coordinates, displaying delivery driver ETAs." }
    ],
    impactMetric: { value: "$12k+", label: "Average Annual Savings in Aggregator Commission Fees Per Location" },
    techStack: ["Next.js / TypeScript", "Node.js / WebSockets", "Redis / BullMQ", "Tailwind CSS", "Stripe Checkout"]
  },
  sports: {
    title: "Sports Technology & Performance Analytics Software | SPACIVA",
    metaDesc: "We develop custom sports league schedulers, player performance trackers, team booking systems, and sports analytics databases.",
    keywords: ["sports technology builder", "player performance software", "league scheduling database", "sports analytics dashboard"],
    name: "Sports Technology",
    headline: "Sports Performance Analytics & League Schedulers",
    subheadline: "We build detailed player performance monitoring tools, league scheduling engines, and team booking dashboards.",
    icon: Trophy,
    overview: "From amateur leagues to professional teams, sports tech demands deep mathematical schedulers, video logs, and player analytics software that make data actionable.",
    problems: [
      {
        painPoint: "League coordinators planning multi-team tournament schedules manually on calendars.",
        consequence: "Causes scheduling conflicts, referee shortages, field double-bookings, and layout delay.",
        resolution: "We program algorithmic scheduling engines that resolve conflicts and map out seasons in seconds."
      },
      {
        painPoint: "Coaches tracking player fitness, statistics, and training drills via loose paper notebooks.",
        consequence: "Makes long-term trends impossible to spot, leading to sub-optimal player development plans.",
        resolution: "We build intuitive player performance databases with detailed charts tracking weights, speeds, and times."
      },
      {
        painPoint: "Parents and fans having to navigate scattered social posts to find active league scores.",
        consequence: "Hurts fan engagement, decreases game attendance, and lowers local league sponsorship revenue.",
        resolution: "We code clean, real-time sports results portals with active bracket views and score tracking."
      }
    ],
    solutions: [
      { title: "League Scheduling Engines", desc: "Custom administrative dashboards calculating season timelines based on field limits and team availability." },
      { title: "Player Tracking Portals", desc: "Intuitive dashboards mapping fitness telemetry, performance statistics, and training drill logs." },
      { title: "Live Bracket & Scores Hubs", desc: "Beautiful, interactive league websites tracking tournament progress, team rosters, and active game schedules." }
    ],
    impactMetric: { value: "100%", label: "Schedule Conflict Errors Eliminated Across Entire Tournaments" },
    techStack: ["Next.js", "Python / NumPy", "PostgreSQL", "Tailwind CSS", "Recharts Analytics"]
  },
  "manufacturing-it-services": {
    title: "Manufacturing IT Services | Custom MES & IoT Solutions | SPACIVA",
    metaDesc: "SPACIVA develops custom manufacturing execution systems (MES), industrial IoT dashboards, quality control logs, and predictive maintenance portals.",
    keywords: ["manufacturing execution system", "industrial IoT software", "factory quality control", "predictive maintenance database"],
    name: "Manufacturing IT Services",
    headline: "Industrial IoT Dashboards & Factory Automation",
    subheadline: "We construct custom Manufacturing Execution Systems (MES), factory IoT data boards, and digital compliance quality control logs.",
    icon: Factory,
    overview: "Modern manufacturing thrives on data visibility. We bridge physical machines and digital dashboards, delivering execution and quality systems that keep assembly lines optimized.",
    problems: [
      {
        painPoint: "Factory managers tracking assembly line output and scrap rates using paper log sheets.",
        consequence: "Delays efficiency reporting by days, meaning problems are spotted only after wasting materials.",
        resolution: "We deploy live IoT dashboards showing actual machine counts, scrap rates, and efficiency rates."
      },
      {
        painPoint: "Unplanned machine breakdowns halting production and delaying crucial enterprise orders.",
        consequence: "Generates massive emergency mechanic fees and triggers heavy shipment delay penalties.",
        resolution: "We build predictive maintenance charts tracking vibrations and temperatures, flagging odd trends."
      },
      {
        painPoint: "Factory quality assurance (QA) reports scattered in mismatched filing cabinets.",
        consequence: "Dreads client QA audits and takes hours to track down historical raw material certificates.",
        resolution: "We construct digital QA logs tying component batches to tracking IDs with immediate lookup."
      }
    ],
    solutions: [
      { title: "Manufacturing Execution (MES)", desc: "Centralized web software tracking machine uptime, employee shifts, batch runs, and raw inventory counts." },
      { title: "Industrial IoT Boards", desc: "Real-time databases tracking hardware sensors telemetry (heat, vibration, cycle time) on active plant floors." },
      { title: "Traceability & QA Vaults", desc: "Digital inspection logs logging raw materials, batch certifications, and testing files securely." }
    ],
    impactMetric: { value: "OEE Up 14%", label: "Average Increase in Overall Equipment Effectiveness (OEE)" },
    techStack: ["Next.js / TypeScript", "Go", "InfluxDB / TimescaleDB", "MQTT Broker", "Docker"]
  }
};

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const data = industries[params.slug];

  if (!data) {
    notFound();
  }

  const IconComponent = data.icon;

  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Background radial highlight */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-1), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              SPACIVA Industry Focus · {data.name}
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
            >
              {data.headline.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="gradient-text">{data.headline.split(" ").slice(-2).join(" ")}</span>
            </h1>
            <p className="text-sm sm:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {data.subheadline}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg hover:shadow-violet/30 hover:scale-[1.02] transition-all duration-300"
              >
                Inquire About Custom Solutions <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Overview Section */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-16" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-3 flex justify-center">
                <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-100/50 text-indigo-600">
                  <IconComponent size={54} />
                </div>
              </div>
              <div className="md:col-span-9 text-left">
                <h2 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>Industry Overview</h2>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {data.overview}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Problems We Solve Section (Problem-Led Content) */}
        <AnimatedSection>
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Client Friction Points We Solve</h2>
            <p className="text-sm max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              We don&apos;t just build features; we solve underlying structural business problems. Here is the actual operational friction we eliminate for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mb-16">
            {data.problems.map((prob, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border bg-white border-slate-200/60 shadow-sm hover:border-slate-300 transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="p-1 rounded bg-rose-50 text-rose-500 border border-rose-100">
                        <AlertTriangle size={14} />
                      </span>
                      <h4 className="text-[11.5px] uppercase font-bold text-rose-500 tracking-wider">The Problem</h4>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug mb-1">
                      {prob.painPoint}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed italic">
                      Consequence: {prob.consequence}
                    </p>
                  </div>
                  <div className="hidden md:block md:col-span-1 h-full border-r border-slate-100 self-stretch my-1" />
                  <div className="md:col-span-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="p-1 rounded bg-emerald-50 text-emerald-500 border border-emerald-100">
                        <CheckCircle2 size={14} />
                      </span>
                      <h4 className="text-[11.5px] uppercase font-bold text-emerald-500 tracking-wider">The SPACIVA Resolution</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {prob.resolution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Deliverable Solutions */}
        <AnimatedSection>
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Our Custom Capabilities</h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Core digital software and integrations we engineer for {data.name}.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {data.solutions.map((sol, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-[13px] font-bold text-slate-800 mb-2">{sol.title}</h3>
                  <p className="text-[11.5px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Results & Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          <div className="md:col-span-6 p-8 rounded-3xl border bg-slate-50 border-slate-200/60 flex flex-col justify-center items-center text-center">
            <span className="text-xs uppercase font-bold text-indigo-600 tracking-widest mb-2">Proven Track Record</span>
            <div className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-2 font-mono tracking-tight">{data.impactMetric.value}</div>
            <p className="text-[12px] text-slate-500 font-medium max-w-sm">{data.impactMetric.label}</p>
          </div>
          <div className="md:col-span-6 p-8 rounded-3xl border bg-white border-slate-200/60 flex flex-col justify-center text-left">
            <h3 className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-4">Core Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {data.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <AnimatedSection>
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Transform Your {data.name} Operations</h3>
            <p className="text-sm max-w-xl mx-auto mb-6" style={{ color: "var(--text-secondary)" }}>
              Work with our senior engineers and domain specialists to scope your requirements, draft databases layouts, and coordinate a secure rollout plan.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Book an Industry Discovery Call <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}

// Generate static params for Next.js static export/build optimizations
export function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}
