"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";

const NAV = [
  { name: "Services", href: "/#what-we-do", hasMegaMenu: true, type: "services" },
  { name: "Industries", href: "/#industries", hasMegaMenu: true, type: "industries" },
  { name: "Case Studies", href: "/case-studies/partsflow", hasMegaMenu: true, type: "caseStudies" },
  { name: "Contact", href: "/contact", hasMegaMenu: false },
];

const MEGA_MENUS = {
  services: [
    {
      title: "AI Automation & Agents",
      items: [
        { label: "AI Agents", href: "/services/ai-agent-development" },
        { label: "AI Chatbots (RAG-powered)", href: "/services/rag-chatbot-development" },
        { label: "Workflow Automation", href: "/services/workflow-automation" },
        { label: "Document & Invoice Processing", href: "/services/document-invoice-processing" },
        { label: "Email & Inbox Automation", href: "/services/email-inbox-automation" },
        { label: "WhatsApp Automation", href: "/services/whatsapp-automation" },
        { label: "CRM Automation", href: "/services/crm-automation" },
        { label: "AI Assistants", href: "/services/ai-assistants" },
        { label: "Generative AI & Custom LLMs", href: "/services/generative-ai-custom-llms" }
      ] as { label: string; href?: string }[]
    },
    {
      title: "Custom Software & Internal Tools",
      items: [
        { label: "CRM Development", href: "/services/crm-development" },
        { label: "Custom Dashboards", href: "/services/custom-dashboards" },
        { label: "Internal Business Tools", href: "/services/internal-business-tools" },
        { label: "ERP Systems", href: "/services/erp-systems" },
        { label: "Inventory Management", href: "/services/inventory-management" },
        { label: "Business Intelligence", href: "/services/business-intelligence" }
      ] as { label: string; href?: string }[]
    },
    {
      title: "Web & Product Engineering",
      items: [
        { label: "Web Applications (Next.js / React)", href: "/services/web-applications" },
        { label: "SaaS Platforms", href: "/services/saas-platforms" },
        { label: "Client Portals", href: "/services/client-portals" },
        { label: "Progressive Web Apps" },
        { label: "UI/UX Design", href: "/guides/ux-for-internal-software" },
        { label: "Product Strategy", href: "/services/discovery-sprint" }
      ] as { label: string; href?: string }[]
    },
    {
      title: "Cloud, Data & Managed Services",
      items: [
        { label: "Cloud & DevOps (AWS, Docker, CI/CD)", href: "/services/cloud-devops" },
        { label: "Data Warehousing & ETL Pipelines", href: "/services/data-warehousing-etl" },
        { label: "Predictive Analytics", href: "/services/predictive-analytics" },
        { label: "Ongoing Maintenance & AI Monitoring (retainer)", href: "/services/ai-monitoring-maintenance" }
      ] as { label: string; href?: string }[]
    }
  ],
  industries: [
    {
      title: "Healthcare",
      items: [
        { label: "Healthcare Software", href: "/industries/healthcare" }
      ] as { label: string; href?: string }[]
    },
    {
      title: "Fintech",
      items: [
        { label: "Fintech Software", href: "/industries/fintech" }
      ] as { label: string; href?: string }[]
    },
    {
      title: "Real Estate & Hospitality",
      items: [
        { label: "Real Estate", href: "/industries/real-estate" },
        { label: "Hospitality", href: "/industries/hospitality" }
      ] as { label: string; href?: string }[]
    },
    {
      title: "Retail & Logistics",
      items: [
        { label: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
        { label: "Logistics", href: "/industries/logistics" }
      ] as { label: string; href?: string }[]
    },
    {
      title: "Industrial & Infrastructure",
      items: [
        { label: "Manufacturing", href: "/industries/manufacturing" },
        { label: "Construction", href: "/industries/construction" },
        { label: "Energy & Utilities", href: "/industries/energy-utilities" }
      ] as { label: string; href?: string }[]
    },
    {
      title: "Startups & Public Sector",
      items: [
        { label: "Startups & SaaS", href: "/industries/startups" },
        { label: "Education", href: "/industries/education" },
        { label: "Government", href: "/industries/government" }
      ] as { label: string; href?: string }[]
    }
  ],
  caseStudies: [
    { title: "Unified Accounting", href: "/case-studies/unified-accounting", desc: "Multi-Platform Sync" },
    { title: "PartsFlow", href: "/case-studies/partsflow", desc: "Spare Parts Inventory" }
  ]
};

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

function MobileIndustryAccordion({ industry, setOpen }: { industry: { title: string; items: { label: string; href?: string }[] }; setOpen: (v: boolean) => void }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between gap-3 py-1 text-left"
      >
        <span className="font-bold text-sm leading-snug text-[#0F172A]">{industry.title}</span>
        <ChevronDown className={cn("w-4 h-4 shrink-0 opacity-50 transition-transform", expanded && "rotate-180")} />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col pt-1 pb-1">
              {industry.items.map((item, i) => (
                item.href ? (
                  <a key={i} href={item.href} onClick={() => setOpen(false)} className="py-1 text-xs font-medium leading-snug text-[#475569] hover:text-[#7C3AED] transition-colors">
                    {item.label}
                  </a>
                ) : (
                  <span key={i} className="py-1 text-xs font-medium leading-snug text-[#94A3B8]">
                    {item.label}
                  </span>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNavItem({ n, setOpen }: { n: any, setOpen: any }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          if (n.hasMegaMenu) {
            setExpanded(!expanded);
          } else {
            setOpen(false);
          }
        }}
        className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-[#334155] hover:text-[#7C3AED] hover:bg-[#F8FAFC] cursor-pointer"
      >
        <a href={n.hasMegaMenu ? '#' : n.href} className="flex-1">{n.name}</a>
        {n.hasMegaMenu && <ChevronDown className={cn("w-4 h-4 opacity-50 transition-transform", expanded && "rotate-180")} />}
      </div>

      <AnimatePresence>
        {n.hasMegaMenu && expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden px-4"
          >
            <div className="py-2 pl-4 border-l-2 border-[#E2E8F0] ml-2 flex flex-col gap-4">
              {n.type === 'services' && MEGA_MENUS.services.map((srv, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-bold text-sm leading-snug text-[#0F172A]">
                    {srv.title}
                  </span>
                  <div className="flex flex-col mt-2">
                    {srv.items.map((item, i) => (
                      item.href ? (
                        <a key={i} href={item.href} onClick={() => setOpen(false)} className="py-1 text-xs font-medium leading-snug text-[#475569] hover:text-[#7C3AED] transition-colors">
                          {item.label}
                        </a>
                      ) : (
                        <span key={i} className="py-1 text-xs font-medium leading-snug text-[#94A3B8]">
                          {item.label}
                        </span>
                      )
                    ))}
                  </div>
                </div>
              ))}
              {n.type === 'industries' && (
                <>
                  {MEGA_MENUS.industries.map((ind, idx) => (
                    <MobileIndustryAccordion key={idx} industry={ind} setOpen={setOpen} />
                  ))}
                  <div className="mt-2 pt-4 border-t border-gray-100">
                    <p className="text-xs leading-relaxed text-gray-400">
                      We also work with select clients in other industries —{" "}
                      <a
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="font-semibold text-[#7C3AED] inline-flex items-center gap-1"
                      >
                        Let&apos;s talk
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </p>
                  </div>
                </>
              )}
              {n.type === 'caseStudies' && (
                <>
                  {MEGA_MENUS.caseStudies.map((cs, idx) => (
                    <a key={idx} href={cs.href} onClick={() => setOpen(false)} className="flex flex-col mb-4 last:mb-0">
                      <span className="font-bold text-sm text-[#0F172A] hover:text-[#7C3AED] transition-colors">{cs.title}</span>
                      <span className="text-xs text-[#94A3B8] mt-0.5">{cs.desc}</span>
                    </a>
                  ))}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const { scrollYProgress } = useScroll();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  useEffect(() => {
    // CSS selectors that identify dark-background containers across the site.
    // Covers bg-[#0F172A], bg-[#0E0E0C], and any element whose computed
    // background-color is sufficiently dark.
    const DARK_BG_SELECTORS = [
      '[class*="bg-[#0F172A"]',
      '[class*="bg-[#0E0E0C"]',
      '[class*="bg-[#0f172a"]',
      '[class*="bg-[#0e0e0c"]',
    ].join(', ');

    const fn = () => {
      setScrolled(window.scrollY > 24);

      let dark = false;
      const probeY = 40; // vertical centre of the navbar

      // Check every dark-background element on the page
      const darkEls = document.querySelectorAll(DARK_BG_SELECTORS);
      darkEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom >= probeY) {
          dark = true;
        }
      });

      setIsDark(dark);
    };

    window.addEventListener("scroll", fn);
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-0 right-0 z-50 transition-all duration-300 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 pointer-events-auto relative" onMouseLeave={() => setHoveredMenu(null)}>
        <div className="flex items-center justify-between h-[64px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity -ml-2">
            <img
              src={isDark ? "/logos/white.svg" : "/logos/darklogo.svg"}
              alt="Spaciva AI"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-all duration-300"
            />
          </a>

          {/* Desktop links */}
          <nav className={cn(
            "hidden md:flex items-center gap-1 h-[48px] px-3 rounded-full backdrop-blur-md shadow-sm transition-all duration-300 border relative",
            scrolled || isDark ? (isDark ? "bg-[#0F172A]/40 border-white/10" : "bg-white/60 border-gray-200/50") : "bg-transparent border-transparent"
          )}>
            {/* Scroll Progress Border */}
            {isLandingPage && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                <defs>
                  <linearGradient id="nav-progress-gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
                {/* Faint track so it's visible by default */}
                <rect
                  x="0" y="0" width="100%" height="100%" rx="24"
                  fill="none"
                  stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"}
                  strokeWidth="2.5"
                />
                {/* Colorful progress line */}
                <motion.rect
                  x="0" y="0" width="100%" height="100%" rx="24"
                  fill="none"
                  stroke="url(#nav-progress-gradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  style={{ pathLength: scrollYProgress }}
                />
              </svg>
            )}
            {NAV.map((n) => (
              <div
                key={n.name}
                className="h-full flex items-center group"
                onMouseEnter={() => setHoveredMenu(n.hasMegaMenu ? (n.type || null) : null)}
              >
                <a
                  href={n.href}
                  className={cn(
                    "px-4 py-2 text-sm rounded-full font-semibold transition-all duration-150 flex items-center relative",
                    isDark
                      ? "text-white/80 hover:text-white hover:bg-white/5"
                      : "text-[#334155] hover:text-[#7C3AED] hover:bg-black/5"
                  )}
                >
                  <span className="relative">
                    {n.name}
                    {n.hasMegaMenu && (
                      <span className={cn(
                        "absolute -bottom-1 left-0 right-0 h-[2px] transition-all duration-300 ease-out rounded-full origin-center",
                        hoveredMenu === n.type ? "opacity-0 scale-x-50" : "opacity-100 scale-x-100",
                        isDark ? "bg-white/30" : "bg-gray-300"
                      )} />
                    )}
                  </span>
                </a>
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/contact"
              className="flex items-center gap-1 pl-6 pr-1.5 py-1.5 rounded-full text-sm font-bold bg-[#7C3AED] text-white hover:bg-[#6D28D9] transition-all duration-300 shadow-lg shadow-[#7C3AED]/20 hover:-translate-y-0.5 group overflow-hidden"
            >
              <div className="relative h-5 w-[110px] overflow-hidden">
                <span className="absolute inset-0 flex items-center transition-transform duration-300 group-hover:-translate-y-full">
                  Let&apos;s Talk
                </span>
                <span className="absolute inset-0 flex items-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  About Solution
                </span>
              </div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 shrink-0 z-10">
                <ArrowRight className="w-4 h-4 text-[#7C3AED]" />
              </div>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            className={cn("md:hidden -mr-2 flex h-11 w-11 items-center justify-center", isDark ? "text-white" : "text-[#0E0E0C]")}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Dropdown Menu Desktop */}
        <div className="hidden md:block">
          <AnimatePresence>
            {hoveredMenu && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                className="absolute top-[60px] left-5 right-5 lg:left-10 lg:right-10 bg-white rounded-3xl shadow-2xl shadow-[#7C3AED]/10 border border-[#E2E8F0] p-5 md:p-6 lg:p-8 cursor-default max-h-[min(80vh,720px)] overflow-y-auto"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'top center' }}
              >
                {hoveredMenu === 'services' && (
                  // Flat directory style, matching Industries: bold header, plain list,
                  // no icon badge, no card box. Kept as the one shared dropdown template.
                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-8">
                    {MEGA_MENUS.services.map((srv, idx) => (
                      <div key={idx} className="flex flex-col">
                        <h4 className="text-[15px] font-bold leading-snug tracking-tight text-[#0F172A] mb-3">
                          {srv.title}
                        </h4>
                        <ul className="flex flex-col gap-2.5">
                          {srv.items.map((item, i) => (
                            <li key={i}>
                              {item.href ? (
                                <a href={item.href} className="text-[13px] font-medium leading-snug text-[#475569] hover:text-[#7C3AED] transition-colors block">
                                  {item.label}
                                </a>
                              ) : (
                                <span className="text-[13px] font-medium leading-snug text-[#94A3B8] block">
                                  {item.label}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {hoveredMenu === 'industries' && (
                  <div className="flex flex-col">
                    {/* Flat directory style: bold header, plain list, no icon badge, no card
                        box. Uneven column lengths (1 to 3 links) don't need row-alignment
                        tricks here — there's no divider or box edge for them to misalign
                        against, so a short and a tall column both just read as plain lists. */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-8">
                      {MEGA_MENUS.industries.map((ind, idx) => (
                        <div key={idx} className="flex flex-col">
                          <h4 className="text-[15px] font-bold leading-snug tracking-tight text-[#0F172A] mb-3">
                            {ind.title}
                          </h4>
                          <ul className="flex flex-col gap-2.5">
                            {ind.items.map((item, i) => (
                              <li key={i}>
                                {item.href ? (
                                  <a href={item.href} className="text-[13px] font-medium leading-snug text-[#475569] hover:text-[#7C3AED] transition-colors block">
                                    {item.label}
                                  </a>
                                ) : (
                                  <span className="text-[13px] font-medium leading-snug text-[#94A3B8] block">
                                    {item.label}
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <p className="text-sm text-slate-500">
                        We also work with select clients in other industries —{" "}
                        <a href="/contact" className="font-semibold text-[#7C3AED] hover:text-[#6D28D9] transition-colors inline-flex items-center gap-1">
                          Let&apos;s talk
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                {hoveredMenu === 'caseStudies' && (
                  <div className="flex flex-col">
                    {/* Same flat template as Services/Industries: bold title, plain text
                        below, no card box — the link itself carries the hover state. */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                      {MEGA_MENUS.caseStudies.map((cs, idx) => (
                        <a key={idx} href={cs.href} className="group/item flex flex-col">
                          <h4 className="text-[15px] font-bold leading-snug tracking-tight text-[#0F172A] group-hover/item:text-[#7C3AED] transition-colors mb-1">
                            {cs.title}
                          </h4>
                          <p className="text-[13px] font-medium leading-relaxed text-[#94A3B8]">{cs.desc}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#E2E8F0] shadow-2xl absolute top-[64px] left-0 w-full max-h-[min(80dvh,640px)] overflow-y-auto overscroll-contain"
            >
              <div className="flex flex-col gap-1 py-4 px-4 sm:px-5">
                {NAV.map((n) => (
                  <MobileNavItem key={n.name} n={n} setOpen={setOpen} />
                ))}
                <div className="px-2 sm:px-4 pt-4 pb-2 flex flex-col gap-2">
                  <a
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-3 py-2 pl-6 pr-2 rounded-full text-sm font-bold bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/20"
                  >
                    Let&apos;s Talk
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
                      <ArrowRight className="w-4 h-4 text-[#7C3AED]" />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header >
  );
}
