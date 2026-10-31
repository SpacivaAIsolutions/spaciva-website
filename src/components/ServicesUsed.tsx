import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICE_GROUPS } from "@/lib/navigation";

const ALL_SERVICES = SERVICE_GROUPS.flatMap((g) => g.items);

// "Services used in this project" block for case studies, so each study links on to the
// service pages it proves instead of dead-ending at the contact page.
export default function ServicesUsed({ hrefs }: { hrefs: string[] }) {
  const services = hrefs.map((href) => ALL_SERVICES.find((s) => s.href === href)).filter((s) => s !== undefined);

  return (
    <section className="py-16 md:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8 text-slate-900">Services used in this project</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col bg-slate-50 p-6 rounded-3xl border border-[#E2E8F0] hover:border-[#C4B5FD] hover:shadow-md transition-all"
            >
              <span className="font-bold text-slate-900 group-hover:text-[#7C3AED] transition-colors mb-2">{s.label.replace(/\s*\(.*\)$/, "")}</span>
              <span className="text-sm text-slate-600 leading-relaxed mb-4">{s.desc}</span>
              <ArrowRight className="mt-auto w-4 h-4 text-[#7C3AED] group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
