export interface SpecPanelItem {
  label: string;
  value: string;
  /** Optional section heading. When it differs from the previous item's section, a plain
   * rule and caption are inserted above this item. Lets each page express its own natural
   * grouping (stack / delivery / ownership, etc.) without a fixed taxonomy. */
  section?: string;
}

/**
 * The Template C "at a glance" spec sheet — the persistent right-hand panel on the
 * Generative AI, CRM Development, Custom Dashboards, and Internal Business Tools pages.
 * A numbered ledger, not an icon grid: reuses the light large-numeral treatment already
 * established on these pages (the four-tests / process-step sections) rather than the
 * icon-in-a-rounded-square pattern common to generic feature-list templates. Same component
 * everywhere it appears, matching the site's TrustStrip precedent.
 */
export default function SpecPanel({ items, title = "At a glance" }: { items: SpecPanelItem[]; title?: string }) {
  return (
    <div className="bg-white text-[#0F172A] rounded-3xl border border-white/10 shadow-xl p-6 sm:p-7">
      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-[11px] font-bold uppercase tracking-widest mb-6">
        {title}
      </span>

      <dl>
        {items.map((item, idx) => {
          const showHeading = item.section && item.section !== items[idx - 1]?.section;
          return (
            <div key={item.label}>
              {showHeading && (
                <div className={idx === 0 ? "mb-3" : "mt-5 mb-3 pt-5 border-t border-slate-100"}>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.section}</span>
                </div>
              )}
              <div className="flex items-baseline gap-3 mb-3 last:mb-0">
                <span className="text-lg font-light text-[#7C3AED] tabular-nums shrink-0 w-6">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <dt className="text-[11px] font-bold uppercase tracking-wide text-slate-400 mb-0.5">{item.label}</dt>
                  <dd className="text-sm text-slate-700 leading-snug">{item.value}</dd>
                </div>
              </div>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
