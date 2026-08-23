"use client";

import { motion } from "framer-motion";

const PARTNERS = [
  { type: "img", name: "Siddhraj", logo: "/partnerslogo/siddhraj.jpeg", className: "h-14 md:h-16 object-contain mix-blend-darken shrink-0" },
  { type: "img", name: "Unoloft", logo: "/partnerslogo/unoloft.webp", className: "h-7 md:h-8 object-contain shrink-0" },
  { type: "img", name: "Kofeko", logo: "/partnerslogo/Kofeko.svg", className: "h-4 md:h-5 object-contain shrink-0" },
  { type: "img", name: "3nStar", logo: "/partnerslogo/3nstar.png", className: "h-7 md:h-9 object-contain shrink-0" },
  { type: "img", name: "Veda", logo: "/partnerslogo/veda.webp", className: "h-9 md:h-11 object-contain mix-blend-darken shrink-0" },
  { type: "img", name: "Cerata", logo: "/partnerslogo/cerata.webp", className: "h-8 md:h-10 object-contain shrink-0" },
  { type: "img", name: "Shubham", logo: "/partnerslogo/shubham.png", className: "h-8 md:h-10 object-contain shrink-0" },
  { type: "img", name: "Consultup India", logo: "/partnerslogo/consultupindia.webp", className: "h-8 md:h-10 object-contain shrink-0" },
  { type: "text", name: "navdrin", className: "text-xl md:text-2xl font-extrabold text-[#0F172A] tracking-tight shrink-0" },
] as const;

/**
 * The site's single trust-strip pattern: an infinite marquee of partner logos with a caption
 * under each, faded at both edges. Same component everywhere it appears (homepage, About, and
 * every service page) so the site never shows two different "trusted by" treatments.
 */
export default function TrustStrip({
  label = "Trusted by teams in the US, UK, and India",
  sectionClassName = "py-10 bg-white border-y border-[#E2E8F0]",
  containerClassName = "max-w-7xl mx-auto px-5 lg:px-10",
  fadeFrom = "white",
}: {
  label?: string;
  sectionClassName?: string;
  containerClassName?: string;
  fadeFrom?: "white" | "slate-50";
}) {
  return (
    <section className={`${sectionClassName} relative z-20 overflow-hidden`}>
      <div className={`${containerClassName} relative`}>
        <p className="text-center text-sm font-bold text-[#94A3B8] uppercase tracking-wider mb-8">{label}</p>

        <div
          className={
            fadeFrom === "slate-50"
              ? "absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"
              : "absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
          }
        />
        <div
          className={
            fadeFrom === "slate-50"
              ? "absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"
              : "absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
          }
        />

        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            className="flex w-max"
          >
            {/* Render 2 identical sets for seamless infinite scroll */}
            {[1, 2].map((set) => (
              <div key={set} className="flex items-end gap-12 md:gap-20 pr-12 md:pr-20">
                {PARTNERS.map((p, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    {p.type === "text" ? (
                      <span className={`${p.className} whitespace-nowrap px-4`}>{p.name}</span>
                    ) : (
                      <img src={p.logo} alt={p.name} className={`${p.className} w-auto max-w-none`} />
                    )}
                    {p.type !== "text" && (
                      <span className="text-xs font-semibold text-[#94A3B8] whitespace-nowrap">{p.name}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
