"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  DollarSign, Activity, Rocket, Lock, GitBranch,
  Cloud, Server, Database, Eye, ShieldCheck,
  Repeat, Building2, FileSearch,
} from "lucide-react";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const RAIL = [
  { id: "what-we-do", label: "What we do" },
  { id: "before-after", label: "Before & after" },
  { id: "audit", label: "Cost audit" },
  { id: "how-it-works", label: "How it works" },
  { id: "systems", label: "Systems" },
  { id: "questions", label: "Questions" },
];

const STAGES = ["Written", "Tested", "Reviewed", "Deployed", "Verified"];
const TODAY_GAPS = ["", "waiting for review", "manual QA", "“let's do Tuesday”", ""];

const DEPLOY_TABLE = [
  { label: "Code to live", today: "Days, sometimes weeks", after: "Under an hour" },
  { label: "Gaps", today: "Waiting for review · manual QA · “let's do it Tuesday” · someone's laptop", after: "Automated tests · automated deploy" },
  { label: "Rollback", today: "Restore from backup, hope", after: "One command, two minutes" },
  { label: "Who can do it", today: "One person", after: "Anyone on the team" },
];

const WE_DO = [
  { title: "Cloud cost reduction", desc: "Find what you're paying for and don't use, and cut it. Measurable, and usually the first thing worth doing." },
  { title: "CI/CD and automated deployment", desc: "Testing, building, and shipping without anyone's laptop involved, with a rollback that works." },
  { title: "Infrastructure as code", desc: "Your environment reproducible from a repository instead of assembled by hand and remembered by one person." },
  { title: "Migrations", desc: "Off Heroku, off a legacy VPS, between clouds, or onto managed services. Planned, staged, reversible." },
  { title: "Monitoring and alerting", desc: "So problems reach someone before a customer does, and so an incident can be investigated rather than guessed at." },
  { title: "Security and access hardening", desc: "Least-privilege IAM, secrets out of code, encryption, and the controls your customers' security questionnaires ask about." },
];

const WE_DONT = [
  { title: "24/7 on-call incident response", desc: "We're one team in one timezone. We won't sell you a rotation we can't staff, and a vendor promising 3am hands from a single office should worry you. What we do instead is set up monitoring that alerts your people, write runbooks so whoever is awake can act, and commit to same-business-day response in our overlap hours. If you genuinely need someone awake at all hours, hire a managed provider, and we'll happily set the infrastructure up so they can run it." },
  { title: "Large-scale Kubernetes platform engineering", desc: "Running a multi-tenant Kubernetes platform with a dedicated team is a specialism. We'll containerise your application properly with Docker and run it on managed services, ECS, Fargate, Cloud Run, App Runner, which is what most teams at your size actually need." },
  { title: "Managed security operations", desc: "We harden infrastructure and follow sound practice. We're not a SOC, we don't do threat monitoring or incident forensics, and we won't pretend to." },
  { title: "Compliance certification", desc: "We build so SOC 2 or ISO 27001 is achievable and we'll implement the technical controls. The audit itself needs an auditor. Any firm telling you they'll “get you SOC 2” is describing something they can't deliver alone." },
];

const TABS = [
  {
    label: "Cost", icon: DollarSign,
    items: [
      { title: "Find what you're paying for and don't use", desc: "Idle instances, oversized databases, unattached volumes, forgotten environments, data transfer nobody understands. This is almost always the first pass and it's almost always significant." },
      { title: "Right-size and commit", desc: "Match instance types to actual load, then use reserved or savings plans on the baseline. Most teams are paying on-demand rates for capacity they've run continuously for two years." },
      { title: "Architecture changes that cut the bill", desc: "Moving to managed services, containerising to pack workloads better, or shifting batch work to spot capacity where interruption is fine." },
      { title: "Ongoing visibility", desc: "Spend broken down by service and environment, with alerts when something moves, so the next increase gets noticed in days rather than at renewal." },
    ],
  },
  {
    label: "Reliability", icon: Activity,
    items: [
      { title: "Monitoring that reaches a person", desc: "Uptime, errors, and performance, wired to Slack, Teams, or PagerDuty. The most common gap we find isn't missing monitoring; it's monitoring installed and never routed anywhere." },
      { title: "Backups that have been restored", desc: "A backup nobody has tested is a hypothesis. We test the restore and document how long it takes." },
      { title: "Removing single points of failure", desc: "The one server, the one database with no replica, the one person who knows the deploy." },
      { title: "Runbooks", desc: "What to check first, how to roll back, who to call. So an incident doesn't depend on the right person being awake." },
    ],
  },
  {
    label: "Deploy speed", icon: Rocket,
    items: [
      { title: "CI/CD pipelines", desc: "Automated test, build, and deploy on merge. No laptops, no manual steps, no ceremony." },
      { title: "Staging that matches production", desc: "Because “it worked on staging” is only useful if staging resembles the thing it's predicting." },
      { title: "Rollback in one command", desc: "The single change that does most to make deploying unscary." },
      { title: "Infrastructure as code", desc: "Terraform or equivalent, so environments are reproducible and changes are reviewable instead of clicked into a console at midnight." },
    ],
  },
  {
    label: "Security", icon: Lock,
    items: [
      { title: "Access and IAM hardening", desc: "Least privilege, no shared root credentials, no long-lived keys in a Slack thread from 2022." },
      { title: "Secrets management", desc: "Out of code and out of environment files, into a proper secrets store." },
      { title: "Encryption and network boundaries", desc: "In transit and at rest, with databases that aren't reachable from the public internet." },
      { title: "Security questionnaire readiness", desc: "The technical controls your customers' IT departments ask about, implemented and documented. Especially relevant if you run a SaaS platform selling into larger companies.", link: { href: "/services/saas-platforms", label: "SaaS platform" } },
    ],
  },
  {
    label: "Migration", icon: GitBranch,
    items: [
      { title: "Off Heroku or a legacy host", desc: "Planned, staged, and reversible, onto infrastructure that costs less and does more." },
      { title: "Onto managed services", desc: "Moving self-managed databases, queues, and caches onto managed equivalents, which is usually cheaper once someone's time is counted." },
      { title: "Between clouds or accounts", desc: "Including the unglamorous parts: DNS, certificates, cutover sequencing, and a rollback plan." },
      { title: "Containerisation", desc: "Docker-ising an application that currently runs on a hand-configured server, so it can be deployed reproducibly anywhere." },
    ],
  },
];

const MONTH_NOW = [
  { week: "Week 1", desc: "A fix is ready. It ships next Tuesday, with the other changes, when the person who does deploys is in." },
  { week: "Week 2", desc: "The site is slow. Nobody can say why. Someone SSHes in and looks at top." },
  { week: "Week 3", desc: "A customer reports an outage. It had been running for forty minutes." },
  { week: "Week 4", desc: "The AWS bill arrives, up again. Nobody can say which service moved." },
  { week: "Any week", desc: "A new developer takes three days to get running locally." },
  { week: "In the background", desc: "One person knows how the deploy works, and they're on leave next month." },
];

const MONTH_AFTER = [
  { week: "Week 1", desc: "The fix shipped forty minutes after it was written, by whoever wrote it." },
  { week: "Week 2", desc: "The slow query was in the dashboard before anyone asked." },
  { week: "Week 3", desc: "The alert fired at minute one. The runbook said what to check." },
  { week: "Week 4", desc: "The bill is lower, broken down by service, and an alert would have flagged a jump." },
  { week: "Any week", desc: "A new developer is running locally in an hour, from the README." },
  { week: "In the background", desc: "The deploy is a pipeline. Anyone can run it. Nobody is a single point of failure." },
];

const AUDIT_GETS = [
  { title: "A costed list of savings", desc: "Each with the change required and the risk of making it, sorted by ratio of saving to effort. Most lists have several items that are an afternoon's work." },
  { title: "A readiness assessment", desc: "Backups, monitoring, deploy process, access control, single points of failure, with what's fine, what's urgent, and what can wait." },
  { title: "A straight answer on whether you need ongoing help", desc: "Sometimes the finding is that your setup is sound and the fixes are three afternoons your own developer can do. We'll say so, in writing." },
];

const PROCESS = [
  { step: "01", title: "Audit and baseline", duration: "1 week", desc: "The cost and readiness audit above, whether or not you bought it separately. We baseline deploy frequency and monthly spend so the outcome is provable rather than asserted. You get the written assessment regardless of what happens next." },
  { step: "02", title: "Fixed scope and quote", duration: "2–3 days", desc: "A written scope, fixed price, and delivery date, sequenced so the highest-value and lowest-risk changes come first. If scope moves, we re-quote in writing first." },
  { step: "03", title: "Change one thing at a time", duration: "scoped per project", desc: "Infrastructure work is not a rewrite. Each change is made, verified, and left running before the next begins, with a documented way back from every one. Nothing gets migrated on a Friday. Written update every Friday plus a short Loom walkthrough." },
  { step: "04", title: "Hand over, then monitor", duration: "ongoing", desc: "Everything documented, runbooks, architecture notes, access inventory, and walked through with your team so they can operate it. Then, if you want it: monitoring review, cost review, dependency and security patching, and a set amount of work each month." },
];

const NEED_SIGNALS = [
  { title: "You need this if one person can deploy", desc: "Not “one person usually does”, one person can. That's a business risk before it's a technical one, and it's the most common reason teams call." },
  { title: "You need this if you found out about an outage from a customer", desc: "Monitoring either doesn't exist or isn't routed to a human. This is the cheapest gap on the list to close and the most expensive to leave." },
  { title: "You need this if the bill grows and nobody can explain it", desc: "Untracked spend compounds quietly. It's also the easiest thing to fix and the easiest to prove, which is why we lead with it." },
  { title: "You need this if a new developer takes days to get running", desc: "That's a symptom of infrastructure that exists in someone's head rather than in a repository, and it slows everything downstream." },
];

const SYSTEM_GROUPS = [
  { category: "Cloud", icon: Cloud, items: ["AWS", "Google Cloud", "Azure", "DigitalOcean", "Vercel", "Railway", "Fly.io"] },
  { category: "Containers and compute", icon: Server, items: ["Docker", "ECS", "Fargate", "Cloud Run", "App Runner", "EC2", "Lambda", "Cloud Functions"] },
  { category: "CI/CD", icon: GitBranch, items: ["GitHub Actions", "GitLab CI", "CircleCI", "AWS CodePipeline", "Bitbucket Pipelines"] },
  { category: "Infrastructure as code", icon: Repeat, items: ["Terraform", "AWS CDK", "CloudFormation", "Pulumi", "Ansible"] },
  { category: "Data and storage", icon: Database, items: ["RDS", "Aurora", "Postgres", "MySQL", "Redis", "ElastiCache", "S3", "CloudFront"] },
  { category: "Monitoring and observability", icon: Eye, items: ["CloudWatch", "Sentry", "Grafana", "Prometheus", "Datadog", "Better Stack", "Uptime monitoring"] },
  { category: "Security", icon: ShieldCheck, items: ["IAM and least-privilege policies", "AWS Secrets Manager", "Vault", "WAF", "VPC design", "Encryption in transit and at rest"] },
];

const ROUTING = [
  { title: "Cloud & DevOps", desc: "You already have software and the infrastructure is the problem.", icon: Cloud, current: true },
  { title: "Web applications", desc: "You're building something new, and infrastructure comes as part of the build rather than as its own project.", icon: Building2, href: "/services/web-applications" },
  { title: "SaaS platforms", desc: "Your software is your product, and the infrastructure questions are tenancy, scale, and enterprise security review.", icon: Repeat, href: "/services/saas-platforms" },
  { title: "Product strategy", desc: "You're not sure what the project is yet. A discovery sprint ends in a specification you own.", icon: FileSearch, href: "/services/discovery-sprint" },
];

const PRICING_TIERS = [
  { label: "Cost and readiness audit", desc: "One week, read-only access, a costed savings list and a readiness assessment you keep. Comes off the cost of any work that follows.", bestFor: "finding out whether there's a problem worth paying to fix.", from: "$299" },
  { label: "Infrastructure project", desc: "A defined piece of work: CI/CD implementation, a migration, containerisation, monitoring and alerting, or security hardening. Scoped, fixed price, documented, handed over. Includes the first month of support.", bestFor: "you know what's broken and want it fixed properly once.", from: "Scoped and quoted after the audit" },
  { label: "Ongoing infrastructure partner", desc: "Monitoring review, cost review, security and dependency patching, and a set amount of infrastructure work each month. Business-hours support in our overlap window, not a 24/7 rotation.", bestFor: "teams without a DevOps hire who need someone watching. Most clients end up here.", from: "A monthly plan sized to your infrastructure" },
];

const FAQS = [
  { q: "Do you offer 24/7 support?", a: "No, and we'd rather say so plainly. We're one team in one timezone and we won't sell an on-call rotation we can't staff. What we do is configure monitoring that alerts your people, write runbooks so whoever is available can act, and commit to same-business-day response in our overlap hours with US Eastern and UK time. If you genuinely need 3am hands, hire a managed provider, we'll set things up so they can run it." },
  { q: "How much can you actually cut our cloud bill?", a: "It depends entirely on what's running, which is why we start with an audit rather than a promise. The common findings are consistent: environments nobody uses, instances sized for a load that never arrived, storage nobody deleted, and on-demand pricing on capacity that's been running for years. The audit gives you a costed list and you decide what's worth doing." },
  { q: "Will you need access to our production systems?", a: "For the audit, read-only access is enough and that's what we ask for. For implementation, we agree the access needed for each piece of work and remove it afterwards. Everything is in your accounts under your control, and you can revoke access at any moment." },
  { q: "We don't have a DevOps person. Is that a problem?", a: "That's most of who this page is for. Teams of ten to fifty who know what they're missing and can't justify a specialist hire. We set things up so your existing developers can operate them, mainstream tools, defined in code, documented, rather than building something that needs us." },
  { q: "Can you migrate us off Heroku?", a: "Yes, it's a common project. Staged and reversible, usually onto containers on managed services, typically at meaningfully lower cost. The main work is the unglamorous part, environment variables, add-ons, background workers, DNS, and cutover sequencing, and that's where migrations go wrong when they go wrong." },
  { q: "Do you do Kubernetes?", a: "We'll containerise your application with Docker and run it on managed services, ECS, Fargate, Cloud Run, App Runner, which is what most teams at this size need. Running a full Kubernetes platform is a specialism with a dedicated team behind it, and if you genuinely need that, you need a platform engineering firm." },
  { q: "Can you get us SOC 2 compliant?", a: "We implement the technical controls, access management, encryption, logging, backup and recovery, change management, and we build so certification is achievable. The audit itself requires an auditor, and any firm claiming they'll “get you SOC 2” on their own is describing something they can't deliver." },
  { q: "What if we stop working with you?", a: "Everything keeps running. It's in your cloud accounts, defined as code in your repository, and documented with runbooks. There's no agency-owned infrastructure and no proprietary tooling to unpick. That's deliberate, it's what makes the monthly plan a choice rather than a dependency." },
  { q: "How long does the work take?", a: "The audit is a week. A defined project, CI/CD, a migration, monitoring, is typically scoped and quoted after that audit, done one change at a time with each verified before the next. Infrastructure work that moves fast is infrastructure work that breaks things." },
  { q: "Do you work with Azure and Google Cloud too?", a: "Yes. AWS is the most common in our work, and the practices are the same across all three. If you're choosing between them, we'll give you an honest opinion on the call, we hold no partner relationships that would shape the answer." },
  { q: "How do you work with clients abroad?", a: "We're in Ahmedabad, India, with 2–3 hours of daily overlap with US Eastern and UK working hours and a same-business-day response commitment during those hours. A written update every Friday plus a short Loom walkthrough of what changed." },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cloud & DevOps Services",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "Cloud cost reduction, CI/CD, infrastructure as code, migrations, monitoring, and security hardening for teams who already have software and need the infrastructure fixed. Fixed price, no 24/7 on-call sold.",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spaciva.tech/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://spaciva.tech/#what-we-do" },
    { "@type": "ListItem", position: 3, name: "Cloud & DevOps", item: "https://spaciva.tech/services/cloud-devops" },
  ],
};

const OFFER_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Offer",
  name: "Cloud Cost and Readiness Audit",
  description: "A one-week, read-only cloud cost and readiness audit: a costed savings list and a readiness assessment across backups, monitoring, deploy process, access control, and single points of failure.",
  price: "299",
  priceCurrency: "USD",
  url: "https://spaciva.tech/services/cloud-devops",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Spaciva AI", url: "https://spaciva.tech" },
};

function DeployTimeline() {
  const nodeW = 88;
  const gapNarrow = 14;
  const xs = [20, 20 + nodeW + gapNarrow, 20 + 2 * (nodeW + gapNarrow), 20 + 3 * (nodeW + gapNarrow), 20 + 4 * (nodeW + gapNarrow)];
  const width = xs[4] + nodeW + 20;

  return (
    <svg
      viewBox={`0 0 ${width} 220`}
      className="w-full h-auto"
      role="img"
      aria-label="Diagram: two tracks showing the same five-stage journey, written, tested, reviewed, deployed, verified. The top track, labelled today, has long gaps between stages labelled waiting for review, manual QA, and let's do it Tuesday, taking days or weeks in total. The bottom track, labelled after, moves through the same five stages with no meaningful gaps, in under an hour."
    >
      <text x={20} y={20} fontSize={11} fontWeight={800} fill="#94A3B8" letterSpacing={1}>TODAY</text>
      {STAGES.map((s, i) => (
        <g key={`today-${s}`}>
          <rect x={xs[i]} y={30} width={nodeW} height={40} rx={10} fill="#F1F5F9" stroke="#E2E8F0" />
          <text x={xs[i] + nodeW / 2} y={54} textAnchor="middle" fontSize={11} fontWeight={700} fill="#334155">{s}</text>
          {i < 4 && (
            <>
              <line x1={xs[i] + nodeW} y1={50} x2={xs[i + 1]} y2={50} stroke="#F59E0B" strokeWidth={2} strokeDasharray="3,3" />
              {TODAY_GAPS[i] && (
                <text x={(xs[i] + nodeW + xs[i + 1]) / 2} y={78} textAnchor="middle" fontSize={8.5} fontWeight={700} fill="#B45309">{TODAY_GAPS[i]}</text>
              )}
            </>
          )}
        </g>
      ))}
      <text x={20} y={100} fontSize={13} fontWeight={800} fill="#0F172A">Days, sometimes weeks</text>

      <line x1={0} y1={125} x2={width} y2={125} stroke="#E2E8F0" strokeWidth={1} />

      <text x={20} y={150} fontSize={11} fontWeight={800} fill="#7C3AED" letterSpacing={1}>AFTER</text>
      {STAGES.map((s, i) => (
        <g key={`after-${s}`}>
          <rect x={xs[i]} y={160} width={nodeW} height={40} rx={10} fill="#F5F3FF" stroke="#DDD6FE" />
          <text x={xs[i] + nodeW / 2} y={184} textAnchor="middle" fontSize={11} fontWeight={700} fill="#5B21B6">{s}</text>
          {i < 4 && <line x1={xs[i] + nodeW} y1={180} x2={xs[i + 1]} y2={180} stroke="#7C3AED" strokeWidth={2} />}
        </g>
      ))}
      <text x={20} y={214} fontSize={13} fontWeight={800} fill="#7C3AED">Under an hour</text>
    </svg>
  );
}

function TabbedExplorer() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = e.key === "ArrowRight" ? (active + 1) % TABS.length : (active - 1 + TABS.length) % TABS.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Infrastructure problems we solve" className="flex flex-wrap gap-2 mb-8" onKeyDown={onKeyDown}>
        {TABS.map((tab, i) => (
          <button
            key={tab.label}
            ref={(el) => { tabRefs.current[i] = el; }}
            role="tab"
            id={`cloud-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`cloud-tabpanel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all border",
              active === i
                ? "bg-[#7C3AED] text-white border-[#7C3AED] shadow-lg shadow-[#7C3AED]/20"
                : "bg-white text-slate-600 border-[#E2E8F0] hover:border-[#C4B5FD] hover:text-[#7C3AED]"
            )}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid">
        {TABS.map((tab, i) => (
          <div
            key={tab.label}
            role="tabpanel"
            id={`cloud-tabpanel-${i}`}
            aria-labelledby={`cloud-tab-${i}`}
            aria-hidden={active !== i}
            className={cn(
              "[grid-area:1/1] transition-all duration-300 ease-out",
              active === i ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-1 pointer-events-none"
            )}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {tab.items.map((item) => (
                <div key={item.title} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-[#C4B5FD] hover:bg-white hover:shadow-md transition-all">
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.link ? (
                      <>
                        {item.desc.split(item.link.label)[0]}
                        <Link href={item.link.href} className="font-bold text-[#7C3AED] hover:underline">{item.link.label}</Link>
                        {item.desc.split(item.link.label)[1]}
                      </>
                    ) : item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CloudDevopsClient() {
  const [activeRail, setActiveRail] = useState(RAIL[0].id);

  useEffect(() => {
    const sections = RAIL.map((r) => document.getElementById(r.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveRail(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-clip selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(OFFER_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero — light, centred. Beneath the copy: a two-track deploy timeline diagram plus
          the same comparison as real semantic text, distinct from every other B hero device. */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50 to-slate-50 -z-10" />

        <div className="max-w-[900px] mx-auto px-5 lg:px-10 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
              Cloud &amp; DevOps
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Deploys shouldn&apos;t be an event
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-[700px] mx-auto">
              If nobody ships on a Friday, if a release needs a specific person&apos;s laptop, if you found out about the last outage from a customer, none of that is a discipline problem. It&apos;s missing infrastructure, and it&apos;s fixable in weeks. We do that work for teams who need it done properly and can&apos;t justify a full-time DevOps hire.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
              <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
              <a href="#audit" className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#7C3AED] transition-colors">
                Start with a cost audit
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm font-semibold text-slate-500 mb-10">
              Your AWS account, your code, your control · Fixed price · No lock-in and no proprietary tooling
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
            <div className="bg-white border border-slate-200 rounded-[1.5rem] shadow-lg p-6 sm:p-8">
              <DeployTimeline />
            </div>
          </motion.div>

          <div className="mt-6 max-w-2xl mx-auto text-left">
            <table className="w-full border-collapse text-sm">
              <caption className="sr-only">Deploy comparison: today versus after</caption>
              <thead>
                <tr className="border-b border-slate-200">
                  <th scope="col" className="py-2 text-xs font-bold uppercase tracking-widest text-slate-400 text-left"></th>
                  <th scope="col" className="py-2 text-xs font-bold uppercase tracking-widest text-slate-400 text-left">Today</th>
                  <th scope="col" className="py-2 text-xs font-bold uppercase tracking-widest text-[#7C3AED] text-left">After</th>
                </tr>
              </thead>
              <tbody>
                {DEPLOY_TABLE.map((row, idx) => (
                  <tr key={row.label} className={idx > 0 ? "border-t border-slate-100" : ""}>
                    <th scope="row" className="py-3 pr-3 text-sm font-bold text-slate-900 align-top whitespace-nowrap">{row.label}</th>
                    <td className="py-3 pr-3 text-slate-500 align-top">{row.today}</td>
                    <td className="py-3 text-slate-700 font-semibold align-top">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-500">The cost isn&apos;t the deploy. It&apos;s every fix that waited for one.</p>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip sectionClassName="py-10 bg-white border-y border-[#E2E8F0]" fadeFrom="white" />

      {/* What we don't do — the most important section on the page, equal weight */}
      <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Scope, before anything else</h2>
            <p className="text-lg text-slate-600">DevOps buyers assume a vendor is claiming 24/7 coverage unless told otherwise. Here&apos;s the honest boundary.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-12 mb-12">
            <div>
              <h3 className="text-xl font-extrabold tracking-tight mb-6 text-slate-900">What we do</h3>
              <div className="flex flex-col gap-7">
                {WE_DO.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-bold text-slate-900 mb-1.5">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight mb-6 text-slate-900">What we don&apos;t do</h3>
              <div className="flex flex-col gap-7">
                {WE_DONT.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-bold text-slate-900 mb-1.5">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <blockquote className="border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-lg md:text-xl font-bold text-slate-900 leading-snug max-w-3xl">
            A vendor who won&apos;t tell you what they can&apos;t cover is a vendor you&apos;ll find out about during an incident.
          </blockquote>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-16">
          <nav aria-label="Page sections" className="hidden lg:block">
            <div className="sticky top-32 py-16">
              <div className="relative flex flex-col gap-7">
                <span className="absolute left-[7px] top-[7px] bottom-[7px] w-px bg-slate-200" aria-hidden="true" />
                {RAIL.map((item) => {
                  const isActive = activeRail === item.id;
                  return (
                    <a key={item.id} href={`#${item.id}`} className="group relative flex items-center gap-3">
                      <span
                        className={cn(
                          "relative z-10 w-[15px] h-[15px] rounded-full border-2 shrink-0 transition-all duration-300",
                          isActive
                            ? "bg-[#7C3AED] border-[#7C3AED] shadow-[0_0_0_4px_rgba(124,58,237,0.15)]"
                            : "bg-white border-slate-300 group-hover:border-[#C4B5FD]"
                        )}
                      />
                      <span
                        className={cn(
                          "text-sm font-semibold leading-snug transition-colors duration-300",
                          isActive ? "text-[#7C3AED]" : "text-slate-400 group-hover:text-slate-600"
                        )}
                      >
                        {item.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </nav>

          <div className="min-w-0">
            {/* What we build — tabbed explorer, by problem */}
            <section id="what-we-do" className="py-16 md:py-24 scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
                  What We Do
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Five problems, in the order people usually have them</h2>
              </div>
              <TabbedExplorer />
              <p className="mt-10 text-slate-600 max-w-[680px]">
                If you&apos;re also building something new, infrastructure comes as part of the build rather than as a separate engagement, see{" "}
                <Link href="/services/web-applications" className="font-bold text-[#7C3AED] hover:underline">web applications</Link>.
              </p>
            </section>

            {/* Before and after — a month, not a week, deliberately */}
            <section id="before-after" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">What changes in your month</h2>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div>
                  <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest mb-4">A month now</h3>
                  <div className="flex flex-col gap-4">
                    {MONTH_NOW.map((row) => (
                      <div key={row.week} className="bg-slate-50 rounded-2xl p-5">
                        <span className="font-bold text-slate-900 text-sm block mb-1">{row.week}</span>
                        <p className="text-slate-500 text-sm leading-relaxed">{row.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 md:mt-0">
                  <h3 className="font-bold text-[#7C3AED] text-xs uppercase tracking-widest mb-4">A month after</h3>
                  <div className="flex flex-col gap-4">
                    {MONTH_AFTER.map((row) => (
                      <div key={row.week} className="bg-[#F5F3FF] rounded-2xl p-5">
                        <span className="font-bold text-slate-900 text-sm block mb-1">{row.week}</span>
                        <p className="text-slate-700 text-sm leading-relaxed">{row.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-10 text-slate-600 max-w-[680px]">
                The two numbers we baseline in week one are <strong className="text-slate-900">deploy frequency</strong> and <strong className="text-slate-900">monthly cloud spend</strong>, because both are unambiguous and both are yours to verify. Everything else on this page is downstream of those two.
              </p>
            </section>

            {/* The cost audit — entry offer, priced, real prominence */}
            <section id="audit" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="rounded-[2rem] border-2 border-[#7C3AED]/30 bg-slate-50 shadow-xl p-8 sm:p-10 md:p-12">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-6">
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">A cloud cost and readiness audit</h2>
                  <span className="text-2xl font-extrabold text-[#7C3AED]">$299</span>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-wide">One week</span>
                </div>
                <p className="text-slate-600 leading-relaxed mb-8 max-w-[680px]">
                  The easiest way to find out whether we&apos;re useful, and the one engagement that frequently pays for itself before it finishes.
                </p>

                <div className="mb-8">
                  <h3 className="font-bold text-slate-900 mb-2">What we do</h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-[680px]">
                    Read-only access to your cloud account. We go through every running resource, what it costs, and whether anything uses it. Then the same for the things a bill doesn&apos;t show: whether backups restore, whether monitoring reaches anyone, whether deploys depend on a person, and where the access model is loose.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold text-slate-900 mb-4">What you get</h3>
                  <div className="grid sm:grid-cols-3 gap-5">
                    {AUDIT_GETS.map((item) => (
                      <div key={item.title}>
                        <h4 className="font-bold text-slate-900 text-sm mb-1.5">{item.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold text-slate-900 mb-2">What you&apos;re not committing to</h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-[680px]">
                    <strong className="text-slate-900">Nothing.</strong> The report is yours. Hand it to your team, another firm, or nobody. We&apos;d rather run audits that go elsewhere than have you wonder whether the findings were shaped by wanting the follow-on work.
                  </p>
                </div>

                <AnimatedCtaButton href="/contact" label="Book a cost audit" hoverLabel="Let's Talk" size="lg" />
                <p className="mt-4 text-sm text-slate-500">If you go ahead with the work, the audit fee comes off it.</p>
              </div>
            </section>

            {/* How it works — horizontal step rail */}
            <section id="how-it-works" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Four phases</h2>
              </div>

              <div className="lg:flex lg:items-start lg:gap-4">
                {PROCESS.map((item, idx) => (
                  <div key={item.step} className="lg:flex-1 relative">
                    <div className="flex lg:flex-col gap-4 lg:gap-0 pb-10 lg:pb-0">
                      <div className="flex lg:flex-col items-center lg:items-start gap-2 shrink-0">
                        <div className="flex items-center w-full">
                          <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white font-bold flex items-center justify-center text-sm shrink-0 shadow-md shadow-[#7C3AED]/25">
                            {item.step}
                          </span>
                          {idx < PROCESS.length - 1 && (
                            <span className="hidden lg:block flex-1 h-px bg-gradient-to-r from-[#C4B5FD] to-[#E2E8F0] ml-2" />
                          )}
                        </div>
                      </div>
                      <div className="lg:mt-4 lg:pr-4">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="font-bold text-slate-900">{item.title}</h3>
                          <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wide">{item.duration}</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    {idx < PROCESS.length - 1 && (
                      <span className="lg:hidden absolute left-5 top-10 bottom-0 w-px bg-[#E2E8F0]" />
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Do you actually need this — qualifying section, placed after the offer */}
            <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Four signals, and one that means you don&apos;t need us</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {NEED_SIGNALS.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-bold text-slate-900 mb-1.5">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
                <h3 className="font-bold text-slate-900 mb-1.5">You probably don&apos;t need us if&hellip;</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  You have a working pipeline, tested backups, monitoring that reaches someone, and a bill you can explain. Some teams call us and the honest answer is that their setup is fine and they&apos;ve been told otherwise by someone selling something. We&apos;ll tell you that on the call rather than after the audit.
                </p>
              </div>

              <p className="text-slate-600 max-w-[680px]">
                If you&apos;re not sure what you&apos;re buying yet, a{" "}
                <Link href="/services/discovery-sprint" className="font-bold text-[#7C3AED] hover:underline">discovery sprint</Link>{" "}
                is the more useful first step, it ends in a written specification you own either way.
              </p>
            </section>

            {/* Systems we work with — grouped chip grid */}
            <section id="systems" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">The stack</h2>
                <p className="text-lg text-slate-600">Deliberately mainstream. Nothing proprietary, nothing that needs us specifically to operate.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {SYSTEM_GROUPS.map((group, idx) => (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#C4B5FD] transition-all"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center shrink-0">
                        <group.icon className="w-5 h-5 text-[#7C3AED]" />
                      </div>
                      <h3 className="font-bold text-slate-900">{group.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((name) => (
                        <span key={name} className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-600">{name}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="mt-10 text-slate-600 max-w-[680px]">
                We work in your accounts, with your billing, under your control. No agency-owned infrastructure, no proprietary tooling, nothing you&apos;d have to unpick if you stopped working with us.
              </p>
            </section>

            {/* Cloud work, or something else — routing */}
            <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10 text-slate-900">Is infrastructure work what you need?</h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {ROUTING.map((item) => {
                  const inner = (
                    <>
                      <span className={cn("w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mb-3", item.current ? "bg-[#7C3AED]" : "bg-slate-50")}>
                        <item.icon className={cn("w-4.5 h-4.5", item.current ? "text-white" : "text-[#7C3AED]")} />
                      </span>
                      <h3 className="font-bold text-slate-900 text-sm mb-1.5">{item.title}{item.current && <span className="text-slate-400 font-normal"> (this page)</span>}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </>
                  );
                  return item.href ? (
                    <Link key={item.title} href={item.href} className="flex flex-col p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#C4B5FD] transition-all">
                      {inner}
                    </Link>
                  ) : (
                    <div key={item.title} className="flex flex-col p-5 rounded-2xl bg-[#7C3AED]/10 border-2 border-[#7C3AED]/30">
                      {inner}
                    </div>
                  );
                })}
              </div>

              <p className="text-slate-600 max-w-[720px]">
                <span className="font-bold text-slate-900">Honest answer:</span> if the complaint is &quot;it&apos;s slow&quot; and nobody has measured what&apos;s slow, that&apos;s an afternoon of investigation before it&apos;s a project. Start with the audit, it&apos;s the cheapest way to find out whether there&apos;s a project here at all.
              </p>
            </section>

            {/* Pricing — Template B's open price table */}
            <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">What it costs</h2>
                <p className="text-lg text-slate-600">Fixed price, quoted in writing before we start. No hourly billing, no surprise change orders.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {PRICING_TIERS.map((tier, idx) => (
                  <div key={tier.label} className={cn("flex flex-col rounded-3xl p-6 md:p-7", idx === 1 ? "bg-[#0F172A] text-white shadow-2xl md:-translate-y-3" : "bg-slate-50 border border-slate-100")}>
                    <h3 className={cn("font-bold text-lg mb-3", idx === 1 ? "text-white" : "text-slate-900")}>{tier.label}</h3>
                    <p className={cn("text-sm leading-relaxed mb-4", idx === 1 ? "text-white/70" : "text-slate-600")}>{tier.desc}</p>
                    <p className={cn("text-sm font-bold mb-5", idx === 1 ? "text-[#C4B5FD]" : "text-[#7C3AED]")}>{tier.from}</p>
                    <p className={cn("mt-auto pt-4 border-t text-xs font-semibold", idx === 1 ? "border-white/10 text-white/50" : "border-slate-200 text-slate-500")}>Good for: {tier.bestFor}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-slate-600 max-w-[680px]">
                You can stop the monthly plan at any time and everything keeps running, it&apos;s in your accounts, defined in code in your repository, and documented. That&apos;s the whole design. This project work sets monitoring up; running it afterwards is{" "}
                <Link href="/services/ai-monitoring-maintenance" className="font-bold text-[#7C3AED] hover:underline">infrastructure &amp; monitoring</Link>.
              </p>
            </section>

            {/* FAQ — two-column plain list, no accordion */}
            <section id="questions" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-slate-900">Common questions</h2>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                {FAQS.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Closing CTA — light bordered panel, Template B's signature */}
      <section className="px-5 lg:px-10 max-w-4xl mx-auto py-16 md:py-24">
        <div className="relative rounded-[2rem] border-2 border-[#E2E8F0] bg-gradient-to-b from-slate-50 to-white p-8 sm:p-12 md:p-16 text-center shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#7C3AED]/25">
            <Cloud className="w-7 h-7 text-white" />
          </div>
          <h2 className="relative text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 text-slate-900">
            Find out what you&apos;re paying for.
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            A week, a fixed fee, read-only access, and a costed list of what to fix, yours to keep whether you work with us or not.
          </p>
          <div className="flex justify-center">
            <AnimatedCtaButton href="/contact" label="Book a cost audit — $299" hoverLabel="Let's Talk" size="lg" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
