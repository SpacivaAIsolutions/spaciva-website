// Single source for the site's service and industry directories: the navbar mega-menu, the
// footer, and the /services hub all render from these lists, so a new page only needs adding once.

export type NavLink = { label: string; href: string; desc: string };
export type NavGroup = { title: string; shortTitle: string; blurb: string; items: NavLink[] };

export const SERVICE_GROUPS: NavGroup[] = [
  {
    title: "AI Automation & Agents",
    shortTitle: "AI Automation",
    blurb: "Agents and automations that take repetitive work off your team, built on your data and monitored monthly.",
    items: [
      { label: "AI Agents", href: "/services/ai-agent-development", desc: "Agents that handle support, intake, and document work, live in about 3 weeks." },
      { label: "AI Chatbots (RAG-powered)", href: "/services/rag-chatbot-development", desc: "Chatbots that answer from your own docs, cite sources, and escalate when unsure." },
      { label: "Workflow Automation", href: "/services/workflow-automation", desc: "Onboarding, reporting, data entry, and follow-ups automated end to end." },
      { label: "Document & Invoice Processing", href: "/services/document-invoice-processing", desc: "Invoices, POs, and contracts read, checked, and posted into your systems." },
      { label: "Email & Inbox Automation", href: "/services/email-inbox-automation", desc: "Shared inboxes sorted, routed, and drafted, with nothing sent outside your rules." },
      { label: "WhatsApp Automation", href: "/services/whatsapp-automation", desc: "Support, order updates, and lead capture on the official Business API." },
      { label: "CRM Automation", href: "/services/crm-automation", desc: "CRM data cleaned up, connected, and kept current without manual entry." },
      { label: "AI Assistants", href: "/services/ai-assistants", desc: "Assistants in Slack, Teams, or your own app that know your clients and process." },
      { label: "Generative AI & Custom LLMs", href: "/services/generative-ai-custom-llms", desc: "Model selection, retrieval, fine-tuning, and evaluation for teams with a product or data." },
    ],
  },
  {
    title: "Custom Software & Internal Tools",
    shortTitle: "Custom Software",
    blurb: "The systems automation runs on: CRMs, dashboards, ERPs, and internal tools you own outright.",
    items: [
      { label: "Custom Software Development", href: "/services/custom-software-development", desc: "Bespoke web applications, internal tools, and cloud platforms engineered to a fixed price." },
      { label: "CRM Development", href: "/services/crm-development", desc: "A CRM built around your data model and workflow when HubSpot or Salesforce don't fit." },
      { label: "Custom Dashboards", href: "/services/custom-dashboards", desc: "Ops and client-reporting dashboards on a real, auto-refreshing data layer." },
      { label: "Internal Business Tools", href: "/services/internal-business-tools", desc: "Admin panels, trackers, approval systems, and internal portals." },
      { label: "ERP Systems", href: "/services/erp-systems", desc: "Integrations and custom modules for QuickBooks, Xero, NetSuite, Sage, and Business Central." },
      { label: "Inventory Management", href: "/services/inventory-management", desc: "One accurate stock number across every channel and location." },
      { label: "Business Intelligence", href: "/services/business-intelligence", desc: "A governed metric layer and self-serve analytics on top of your data." },
    ],
  },
  {
    title: "Web & Product Engineering",
    shortTitle: "Web & Product",
    blurb: "Web applications and SaaS products in Next.js, React, and Node, shipped in two-week loops.",
    items: [
      { label: "Web Applications (Next.js / React)", href: "/services/web-applications", desc: "Custom web apps built to a fixed price and handed over with tests and docs." },
      { label: "SaaS Platforms", href: "/services/saas-platforms", desc: "Multi-tenant B2B SaaS with billing and onboarding, without giving up equity." },
      { label: "Client Portals", href: "/services/client-portals", desc: "Portals where clients, vendors, and partners self-serve instead of emailing you." },
      { label: "Discovery Sprint", href: "/services/discovery-sprint", desc: "A fixed-fee scoping sprint that ends in a specification you own." },
      { label: "Progressive Web Apps", href: "/guides/pwa-vs-native-app", desc: "Guide: when a PWA is enough and when you really need a native app." },
      { label: "UI/UX Design", href: "/guides/ux-for-internal-software", desc: "Guide: UX design for internal tools and B2B software." },
    ],
  },
  {
    title: "Cloud, Data & Managed Services",
    shortTitle: "Cloud & Data",
    blurb: "Pipelines, warehouses, forecasting, infrastructure, and the monthly plan that keeps it all running.",
    items: [
      { label: "Cloud & DevOps (AWS, Docker, CI/CD)", href: "/services/cloud-devops", desc: "Lower cloud bills, boring deploys, and alerts before customers notice." },
      { label: "Data Warehousing & ETL Pipelines", href: "/services/data-warehousing-etl", desc: "Ingestion, warehouse, orchestration, and monitoring, built and run for you." },
      { label: "Predictive Analytics", href: "/services/predictive-analytics", desc: "Churn, demand, and revenue forecasting, tested against a simple baseline first." },
      { label: "Ongoing Maintenance & AI Monitoring (retainer)", href: "/services/ai-monitoring-maintenance", desc: "Monitoring, tuning, and fixes on AI systems, ours or someone else's." },
    ],
  },
];

// Primary buyer groups first, then the sectors with a dedicated page.
export const INDUSTRY_LINKS: NavLink[] = [
  { label: "Agencies", href: "/industries/agencies", desc: "Client reporting, onboarding, lead routing, and inbox automation for agencies." },
  { label: "Professional Services", href: "/industries/professional-services", desc: "Document processing, intake, and client portals for accounting, legal, and consulting firms." },
  { label: "E-commerce & DTC", href: "/industries/retail-ecommerce", desc: "Inventory sync, order and support automation, and reporting for DTC brands." },
  { label: "Startups & SaaS", href: "/industries/startups", desc: "MVPs and SaaS platforms for founders, scoped before you commit." },
  { label: "Finance & Accounting", href: "/industries/fintech", desc: "Ledger sync, invoice processing, and ERP integration for finance teams." },
  { label: "Manufacturing", href: "/industries/manufacturing", desc: "Inventory, ERP integration, and document automation for manufacturers." },
  { label: "Real Estate", href: "/industries/real-estate", desc: "Lead routing, CRM automation, and client portals for real-estate teams." },
];

export const CASE_STUDY_LINKS = [
  { title: "Unified Accounting", href: "/case-studies/unified-accounting", desc: "Multi-Platform Sync" },
  { title: "PartsFlow", href: "/case-studies/partsflow", desc: "Spare Parts Inventory" },
];

// Newest first. The /guides index and each guide's "more guides" list render from this.
export const GUIDES = [
  { title: "RAG vs Fine-Tuning vs Prompting, Explained", href: "/guides/rag-vs-fine-tuning-vs-prompting", desc: "Five ways to make a model work on your problem, ordered by cost, and how to tell which one you need.", published: "2026-10-29" },
  { title: "Workflow Automation or AI Agent? How to Choose", href: "/guides/automation-vs-ai-agent", desc: "Most processes need automation, not an agent. A practical test for telling the two apart.", published: "2026-10-29" },
  { title: "Build vs License a CRM: The Five-Year Cost Math", href: "/guides/build-vs-license-crm", desc: "Why build-cost-versus-annual-licence is the wrong comparison, and the arithmetic to run instead.", published: "2026-10-29" },
  { title: "UX Design for Internal Tools & B2B Software", href: "/guides/ux-for-internal-software", desc: "Design for software people have to use, not choose, and the symptoms that show it's failing.", published: "2026-08-26" },
  { title: "PWA vs Native App: Which Do You Actually Need?", href: "/guides/pwa-vs-native-app", desc: "What progressive web apps do well, where they genuinely fall short, and how to decide.", published: "2026-08-25" },
];
