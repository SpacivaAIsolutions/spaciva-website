"use client";

import { CheckCircle, XCircle } from "lucide-react";

const features = [
  { f: "Source Code Ownership", custom: "Full rights transferred to you forever", off: "Permanent rental, zero code access" },
  { f: "Financial Structure", custom: "Zero recurring fees after delivery", off: "Ongoing per-seat subscription licenses" },
  { f: "Workflow Alignment", custom: "100% built around your exact process", off: "Rigid templates you must adapt to" },
  { f: "Data Integration", custom: "Connects to any legacy API or database", off: "Restricted and locked behind paywalls" },
  { f: "Platform Scalability", custom: "Engineered to grow dynamically with you", off: "Forces tier-upgrades as database expands" },
  { f: "Technical Support", custom: "Direct line to the engineers who built it", off: "Impersonal ticketing queues & bot replies" },
];

export default function InteractiveComparison() {
  return (
    <section className="py-24 sm:py-32 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tightest text-[#0f172a] mb-6 max-w-2xl">
            Custom Build vs <br/><span className="text-slate-400">Off-The-Shelf SaaS</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-xl">
            Stop adapting your business to rigid templates. See why enterprise teams are shifting away from expensive monthly software rentals.
          </p>
        </div>

        {/* Content Area */}
        <div className="w-full overflow-x-auto hide-scrollbar">
          <div className="min-w-[800px] flex flex-col">
            {/* Header Row */}
            <div className="grid grid-cols-12 gap-6 pb-6 border-b border-slate-900 mb-6">
              <div className="col-span-4 text-xs font-bold tracking-widest uppercase text-slate-400">Feature Match</div>
              <div className="col-span-4 text-xs font-bold tracking-widest uppercase text-slate-900">Spaciva Custom</div>
              <div className="col-span-4 text-xs font-bold tracking-widest uppercase text-slate-400">Generic SaaS</div>
            </div>

            {/* Rows */}
            <div className="flex flex-col gap-6">
              {features.map((feat, idx) => (
                <div key={idx} className="grid grid-cols-12 gap-6 pb-6 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors -mx-4 px-4 pt-4 rounded-xl">
                  <div className="col-span-4">
                    <span className="text-lg font-bold text-slate-900">{feat.f}</span>
                  </div>
                  
                  <div className="col-span-4 flex items-start gap-3">
                    <CheckCircle className="text-slate-900 shrink-0 mt-1" size={18} />
                    <span className="text-sm font-medium text-slate-900 leading-relaxed">
                      {feat.custom}
                    </span>
                  </div>

                  <div className="col-span-4 flex items-start gap-3 opacity-60">
                    <XCircle className="text-slate-500 shrink-0 mt-1" size={18} />
                    <span className="text-sm font-medium text-slate-500 leading-relaxed">
                      {feat.off}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
