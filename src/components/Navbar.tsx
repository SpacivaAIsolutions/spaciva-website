"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, ChevronDown, Cpu, Database, Globe, Smartphone } from "lucide-react";

const NAV = [
  {
    name: "Solutions",
    href: "/#solutions",
    hasMegaMenu: true,
    type: "solutions"
  },
  {
    name: "Industries",
    href: "/#industries",
    hasMegaMenu: true,
    type: "industries"
  },
  { name: "Contact", href: "/contact" },
];

const MEGA_MENUS = {
  solutions: [
    {
      title: "AI Automation",
      items: ["Chatbots", "WhatsApp Bots", "Workflows", "LLMs"],
      icon: Cpu,
      color: "text-purple-600",
      bg: "bg-purple-100"
    },
    {
      title: "Custom Software",
      items: ["CRMs", "ERPs", "Dashboards"],
      icon: Database,
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      title: "Web Applications",
      items: ["Corporate", "E-Commerce", "SaaS"],
      icon: Globe,
      color: "text-indigo-600",
      bg: "bg-indigo-100"
    },
    {
      title: "Mobile Apps",
      items: ["iOS Apps", "Android Apps", "React Native"],
      icon: Smartphone,
      color: "text-emerald-600",
      bg: "bg-emerald-100"
    }
  ],
  industries: [
    { title: "Healthcare", desc: "Patient portals & telemedicine" },
    { title: "Fintech", desc: "Secure payment gateways & apps" },
    { title: "Real Estate", desc: "Property management solutions" },
    { title: "E-Commerce", desc: "Scalable online retail platforms" },
    { title: "Startups", desc: "MVPs and rapid scaling" }
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
              {n.type === 'solutions' && MEGA_MENUS.solutions.map((sol, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-bold text-sm text-gray-900">{sol.title}</span>
                  <span className="text-xs text-gray-500 mt-0.5">{sol.items.join(', ')}</span>
                </div>
              ))}
              {n.type === 'industries' && MEGA_MENUS.industries.map((ind, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-bold text-sm text-gray-900">{ind.title}</span>
                  <span className="text-xs text-gray-500 mt-0.5">{ind.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
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
      <div className="max-w-7xl mx-auto px-5 lg:px-10 pointer-events-auto relative" onMouseLeave={() => setHoveredMenu(null)}>
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
            "hidden md:flex items-center gap-1 h-[48px] px-3 rounded-full backdrop-blur-md shadow-sm transition-all duration-300 border",
            scrolled || isDark ? (isDark ? "bg-[#0F172A]/40 border-white/10" : "bg-white/60 border-gray-200/50") : "bg-transparent border-transparent"
          )}>
            {NAV.map((n) => (
              <div
                key={n.name}
                className="h-full flex items-center group"
                onMouseEnter={() => setHoveredMenu(n.hasMegaMenu ? (n.type || null) : null)}
              >
                <a
                  href={n.href}
                  className={cn(
                    "px-4 py-2 text-sm rounded-full font-semibold transition-all duration-150 flex items-center gap-1",
                    isDark
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-[#334155] hover:text-[#7C3AED] hover:bg-[#F8FAFC]"
                  )}
                >
                  {n.name}
                  {n.hasMegaMenu && <ChevronDown className={cn("w-4 h-4 opacity-70 transition-transform duration-300", hoveredMenu === n.type && "rotate-180")} />}
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
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute top-[70px] left-5 right-5 lg:left-10 lg:right-10 bg-white rounded-3xl shadow-2xl shadow-[#7C3AED]/10 border border-[#E2E8F0] p-8 cursor-default before:absolute before:-top-6 before:left-0 before:right-0 before:h-6 before:content-[''] before:bg-transparent"
                style={{ transformOrigin: 'top center' }}
              >
                {hoveredMenu === 'solutions' && (
                  <div className="grid grid-cols-4 gap-8">
                    {MEGA_MENUS.solutions.map((sol, idx) => (
                      <div key={idx} className="flex gap-4 group/item cursor-pointer p-2 rounded-2xl hover:bg-gray-50 transition-colors">
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0", sol.bg)}>
                          <sol.icon className={cn("w-6 h-6", sol.color)} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1 group-hover/item:text-[#7C3AED] transition-colors">{sol.title}</h4>
                          <p className="text-xs text-gray-500">{sol.items.join(' • ')}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {hoveredMenu === 'industries' && (
                  <div className="grid grid-cols-5 gap-6">
                    {MEGA_MENUS.industries.map((ind, idx) => (
                      <div key={idx} className="p-4 rounded-2xl hover:bg-gray-50 cursor-pointer transition-colors group/item">
                        <h4 className="font-bold text-gray-900 mb-1 flex items-center justify-between">
                          {ind.title}
                          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#7C3AED]" />
                        </h4>
                        <p className="text-xs text-gray-500">{ind.desc}</p>
                      </div>
                    ))}
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
    </motion.header>
  );
}
