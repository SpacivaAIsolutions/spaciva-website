import Link from "next/link";
import { ArrowRight } from "lucide-react";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

/**
 * Primary call-to-action with a label that slides up to a second label on hover.
 *
 * The visible label is in normal flow so the button sizes itself to its text;
 * only the hover label is absolutely positioned. That is what lets the label
 * wrap on phones instead of being clipped by a hardcoded pixel width.
 * The slide animation is gated to sm+ where the label is a single line.
 */
export default function AnimatedCtaButton({
  href,
  label,
  hoverLabel,
  size = "md",
  className,
}: {
  href: string;
  label: string;
  hoverLabel: string;
  size?: "md" | "lg";
  className?: string;
}) {
  const lg = size === "lg";

  return (
    <Link
      href={href}
      className={cn(
        "group relative w-full sm:w-auto sm:inline-flex flex items-center justify-between gap-3 sm:gap-4",
        "pl-6 pr-2 py-3 sm:py-2 rounded-full overflow-hidden",
        "bg-[#7C3AED] text-white font-bold hover:bg-[#6D28D9] hover:scale-[1.02] active:scale-[0.98]",
        "transition-all shadow-xl shadow-[#7C3AED]/20",
        lg ? "min-h-[64px] text-base sm:text-lg" : "min-h-[56px]",
        className
      )}
    >
      <span className="relative flex min-w-0 items-center sm:h-6 sm:overflow-hidden">
        <span
          className={cn(
            "flex items-center text-left",
            "sm:transition-transform sm:duration-300 sm:group-hover:-translate-y-full sm:whitespace-nowrap"
          )}
        >
          {label}
        </span>
        <span
          aria-hidden="true"
          className="hidden sm:flex absolute inset-0 items-center translate-y-full whitespace-nowrap transition-transform duration-300 group-hover:translate-y-0"
        >
          {hoverLabel}
        </span>
      </span>

      <span
        className={cn(
          "rounded-full bg-white flex items-center justify-center shrink-0 z-10 transition-transform duration-300 group-hover:translate-x-1",
          lg ? "w-11 h-11 sm:w-12 sm:h-12" : "w-10 h-10"
        )}
      >
        <ArrowRight className={cn("text-[#7C3AED]", lg ? "w-5 h-5 sm:w-6 sm:h-6" : "w-5 h-5")} />
      </span>
    </Link>
  );
}
