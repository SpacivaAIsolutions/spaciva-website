"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, ChevronDown, Cpu, Database, Globe, Smartphone, Cloud, PenTool, Zap, BarChart3 } from "lucide-react";

const NAV = [
  { name: "Services", href: "/#services", hasMegaMenu: true, type: "services" },
  { name: "Industries", href: "/#industries", hasMegaMenu: true, type: "industries" },
  { name: "Case Studies", href: "/#case-studies", hasMegaMenu: true, type: "caseStudies" },
  { name: "Contact", href: "/contact", hasMegaMenu: false },
];

const MEGA_MENUS = {
  services: [
    {
      title: "AI & Machine Learning",
      icon: Cpu,
      color: "text-purple-600",
      bg: "bg-purple-100",
      items: ["AI Agents", "AI Chatbots", "Generative AI", "RAG Systems", "Custom LLMs", "AI Automation"]
    },
    {
      title: "Web Engineering",
      icon: Globe,
      color: "text-blue-600",
      bg: "bg-blue-100",
      items: ["Business Websites", "Enterprise Portals", "SaaS Platforms", "E-Commerce", "Progressive Web Apps"]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "text-emerald-600",
      bg: "bg-emerald-100",
      items: ["iOS Apps", "Android Apps", "Flutter Development", "React Native", "Enterprise Mobile Apps"]
    },
    {
      title: "Custom Software",
      icon: Database,
      color: "text-indigo-600",
      bg: "bg-indigo-100",
      items: ["CRM Development", "ERP Systems", "HRMS", "Inventory Management", "Internal Business Tools", "Custom Dashboards"]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-cyan-600",
      bg: "bg-cyan-100",
      items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Monitoring", "Infrastructure Automation"]
    },
    {
      title: "Product Design",
      icon: PenTool,
      color: "text-pink-600",
      bg: "bg-pink-100",
      items: ["UI/UX Design", "Product Strategy", "Design Systems", "UX Research", "Wireframing", "Prototyping"]
    },
    {
      title: "Business Automation",
      icon: Zap,
      color: "text-orange-600",
      bg: "bg-orange-100",
      items: ["Workflow Automation", "WhatsApp Automation", "Email Automation", "CRM Automation", "Document Automation", "AI Assistants"]
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      color: "text-teal-600",
      bg: "bg-teal-100",
      items: ["Business Intelligence", "Dashboards", "Data Warehousing", "ETL Pipelines", "Predictive Analytics"]
    }
  ],
  solutions: [
    { title: "Business Growth", desc: "Scale operations & revenue" },
    { title: "AI Automation", desc: "Intelligent workflows" },
    { title: "Workflow Automation", desc: "Streamline daily tasks" },
    { title: "WhatsApp Automation", desc: "Engage customers 24/7" },
    { title: "CRM Solutions", desc: "Manage client relationships" },
    { title: "HR Management", desc: "Modernize workforce tools" },
    { title: "Inventory Management", desc: "Real-time stock tracking" },
    { title: "Lead Management", desc: "Convert more prospects" },
    { title: "Customer Support AI", desc: "Automated helpdesk" },
    { title: "Knowledge Base AI", desc: "Instant information retrieval" },
    { title: "Document Processing", desc: "Automated data extraction" },
    { title: "Analytics Dashboard", desc: "Data-driven insights" },
  ],
  industries: [
    { title: "Healthcare", href: "/industries/healthcare" },
    { title: "Finance & FinTech", href: "/industries/fintech" },
    { title: "Manufacturing", href: "/industries/manufacturing" },
    { title: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
    { title: "Real Estate", href: "/industries/real-estate" },
    { title: "Education", href: "/industries/education" },
    { title: "Logistics", href: "/industries/logistics" },
    { title: "Hospitality", href: "/industries/hospitality" },
    { title: "Energy & Utilities", href: "/industries/energy-utilities" },
    { title: "Construction", href: "/industries/construction" },
    { title: "Government", href: "/industries/government" },
    { title: "Startups", href: "/industries/startups" }
  ],
  caseStudies: [
    { title: "Unified Accounting", href: "/case-studies/unified-accounting", desc: "Multi-Platform Sync" },
    { title: "PartsFlow", href: "/case-studies/partsflow", desc: "Spare Parts Inventory" }
  ]
};

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
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
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <srv.icon className={cn("w-4 h-4", srv.color)} />
                    <span className="font-bold text-sm text-gray-900">{srv.title}</span>
                  </div>
                  <div className="flex flex-col gap-1.5 ml-7">
                    {srv.items.map((item, i) => (
                      <span key={i} className="text-xs text-gray-500 hover:text-[#7C3AED] cursor-pointer">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              {n.type === 'solutions' && MEGA_MENUS.solutions.map((sol, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-bold text-sm text-gray-900">{sol.title}</span>
                  <span className="text-xs text-gray-500 mt-0.5">{sol.desc}</span>
                </div>
              ))}
              {n.type === 'industries' && (
                <>
                  {MEGA_MENUS.industries.map((ind, idx) => (
                    <a key={idx} href={ind.href} onClick={() => setOpen(false)} className="flex flex-col">
                      <span className="font-bold text-sm text-gray-900 hover:text-[#7C3AED] transition-colors">{ind.title}</span>
                    </a>
                  ))}
                  <div className="mt-2 pt-4 border-t border-gray-100">
                    <a href="/industries" className="text-sm font-bold text-[#7C3AED] flex items-center gap-2">
                      Explore All Industries <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </>
              )}
              {n.type === 'caseStudies' && (
                <>
                  {MEGA_MENUS.caseStudies.map((cs, idx) => (
                    <a key={idx} href={cs.href} onClick={() => setOpen(false)} className="flex flex-col mb-4">
                      <span className="font-bold text-sm text-gray-900 hover:text-[#7C3AED] transition-colors">{cs.title}</span>
                      <span className="text-xs text-gray-500 mt-0.5">{cs.desc}</span>
                    </a>
                  ))}
                  <div className="pt-2 border-t border-gray-100">
                    <a href="/case-studies" className="text-sm font-bold text-[#7C3AED] flex items-center gap-2">
                      Explore All Case Studies <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
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
    const fn = () => {
      setScrolled(window.scrollY > 24);

      let dark = false;
      const navBottom = 80;

      const whatWeDo = document.getElementById("what-we-do");
      if (whatWeDo) {
        const rect = whatWeDo.getBoundingClientRect();
        if (rect.top <= navBottom && rect.bottom >= navBottom) dark = true;
      }

      const cta = document.getElementById("cta");
      if (cta) {
        const rect = cta.getBoundingClientRect();
        if (rect.top <= navBottom && rect.bottom >= navBottom) dark = true;
      }

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
      <div className="max-w-[1800px] mx-auto px-5 lg:px-10 2xl:px-16 pointer-events-auto relative" onMouseLeave={() => setHoveredMenu(null)}>
        <div className="flex items-center justify-between h-[64px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity -ml-2">
            <img
              src={isDark ? "/logos/white.svg" : "/logos/darklogo.svg"}
              alt="Spaciva"
              className="h-12 md:h-[56px] w-auto object-contain transition-all duration-300 scale-125 md:scale-[1.4] origin-left"
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
                  Let's Talk
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
          <button className={cn("md:hidden p-2", isDark ? "text-white" : "text-[#0E0E0C]")} onClick={() => setOpen(!open)}>
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
                className="absolute top-[60px] left-5 right-5 lg:left-10 lg:right-10 bg-white rounded-3xl shadow-2xl shadow-[#7C3AED]/10 border border-[#E2E8F0] p-8 cursor-default"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'top center' }}
              >
                {hoveredMenu === 'services' && (
                  <div className="grid grid-cols-4 gap-x-8 gap-y-10">
                    {MEGA_MENUS.services.map((srv, idx) => (
                      <div key={idx} className="flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", srv.bg)}>
                            <srv.icon className={cn("w-5 h-5", srv.color)} />
                          </div>
                          <h4 className="font-bold text-gray-900">{srv.title}</h4>
                        </div>
                        <ul className="space-y-2.5 ml-[52px]">
                          {srv.items.map((item, i) => (
                            <li key={i} className="text-sm font-medium text-gray-500 hover:text-[#7C3AED] cursor-pointer transition-colors">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {hoveredMenu === 'solutions' && (
                  <div className="grid grid-cols-4 gap-6">
                    {MEGA_MENUS.solutions.map((sol, idx) => (
                      <div key={idx} className="group/item cursor-pointer p-3 -m-3 rounded-xl hover:bg-gray-50 transition-colors">
                        <h4 className="font-bold text-gray-900 mb-1 group-hover/item:text-[#7C3AED] transition-colors flex items-center justify-between">
                          {sol.title}
                          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#7C3AED]" />
                        </h4>
                        <p className="text-xs text-gray-500 line-clamp-1">{sol.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {hoveredMenu === 'industries' && (
                  <div className="flex flex-col">
                    <div className="grid grid-cols-4 gap-4 mb-6">
                      {MEGA_MENUS.industries.map((ind, idx) => (
                        <a key={idx} href={ind.href} className="group/item py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 block">
                          <h4 className="font-bold text-gray-900 group-hover/item:text-[#7C3AED] transition-colors flex items-center justify-between">
                            {ind.title}
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#7C3AED]" />
                          </h4>
                        </a>
                      ))}
                    </div>
                    <div className="pt-6 border-t border-gray-100 flex justify-end">
                      <a href="/industries" className="text-sm font-bold text-[#7C3AED] flex items-center gap-2 hover:gap-3 transition-all">
                        Explore All Industries <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}

                {hoveredMenu === 'caseStudies' && (
                  <div className="flex flex-col">
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      {MEGA_MENUS.caseStudies.map((cs, idx) => (
                        <a key={idx} href={cs.href} className="group/item p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 block">
                          <h4 className="font-bold text-gray-900 mb-1 group-hover/item:text-[#7C3AED] transition-colors flex items-center justify-between">
                            {cs.title}
                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#7C3AED]" />
                          </h4>
                          <p className="text-xs text-gray-500">{cs.desc}</p>
                        </a>
                      ))}
                    </div>
                    <div className="pt-6 border-t border-gray-100 flex justify-end">
                      <a href="/case-studies" className="text-sm font-bold text-[#7C3AED] flex items-center gap-2 hover:gap-3 transition-all">
                        Explore All Case Studies <ArrowRight className="w-4 h-4" />
                      </a>
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
              className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#E2E8F0] shadow-2xl absolute top-[64px] left-0 w-full overflow-hidden"
            >
              <div className="flex flex-col gap-1 py-4 px-5">
                {NAV.map((n) => (
                  <MobileNavItem key={n.name} n={n} setOpen={setOpen} />
                ))}
                <div className="px-4 pt-4 pb-2 flex flex-col gap-2">
                  <a
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-3 py-2 pl-6 pr-2 rounded-full text-sm font-bold bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/20"
                  >
                    Let's Talk
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
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
