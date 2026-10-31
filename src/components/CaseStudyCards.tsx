import Link from "next/link";
import { ArrowRight } from "lucide-react";

// One source for the case-study proof cards (the "What we've built" pattern first used on the
// BI page), so every page quotes the same headline numbers and the same platform count.
export const CASE_STUDIES = {
  "unified-accounting": {
    num: "70%",
    metric: "Less manual data entry",
    title: "Unified Accounting",
    desc: "Vendors, invoices, and payments moved through one sync engine instead of copy-paste between accounting UIs, across 12+ platforms including QuickBooks, Xero, NetSuite, Sage, Business Central, and Odoo.",
    tags: ["Document processing", "ERP integration", "Data pipelines"],
    href: "/case-studies/unified-accounting",
  },
  partsflow: {
    num: "80%",
    metric: "Faster data entry",
    title: "PartsFlow",
    desc: "A spare-parts distributor's 5,000+ SKU catalogue moved off row-by-row spreadsheet work onto validated bulk imports and a live QuickBooks sync.",
    tags: ["Inventory management", "ERP integration", "Web application"],
    href: "/case-studies/partsflow",
  },
} as const;

export type CaseStudySlug = keyof typeof CASE_STUDIES;

export default function CaseStudyCards({
  studies = ["unified-accounting", "partsflow"],
  heading = "What we've built",
  intro,
  sectionClassName = "py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]",
  showTags = false,
  layout = "full",
  tone = "light",
}: {
  studies?: CaseStudySlug[];
  heading?: string;
  intro?: string;
  sectionClassName?: string;
  showTags?: boolean;
  // "column" drops the page-width container and centring, for pages with a sidebar layout.
  layout?: "full" | "column";
  // "dark" for pages whose section background is dark; the cards themselves stay white.
  tone?: "light" | "dark";
}) {
  const column = layout === "column";
  return (
    <section id="case-studies" className={`${sectionClassName} scroll-mt-24`}>
      <div className={column ? "" : "max-w-7xl mx-auto px-5 lg:px-10"}>
        <div className={column ? "max-w-[680px] mb-10" : "text-center max-w-2xl mx-auto mb-10"}>
          <h2 className={`${column ? "text-3xl md:text-4xl" : "text-3xl md:text-5xl"} font-extrabold tracking-tight mb-4 ${tone === "dark" ? "text-white" : "text-slate-900"}`}>{heading}</h2>
          {intro && <p className={tone === "dark" ? "text-white/60" : "text-slate-500"}>{intro}</p>}
        </div>

        <div className={`grid gap-6 ${studies.length > 1 ? "md:grid-cols-2" : column ? "" : "max-w-2xl mx-auto"}`}>
          {studies.map((slug) => {
            const cs = CASE_STUDIES[slug];
            return (
              <Link
                key={slug}
                href={cs.href}
                className="group flex flex-col h-full bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-[#C4B5FD] transition-all"
              >
                <span className="text-5xl md:text-6xl font-extrabold text-[#7C3AED] tracking-tight mb-2">{cs.num}</span>
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-6">{cs.metric}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{cs.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{cs.desc}</p>
                {showTags && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <span className="mt-auto inline-flex items-center gap-1.5 font-bold text-[#7C3AED]">
                  Read the case study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
