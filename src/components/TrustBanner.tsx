"use client";

import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const clients = [
  { name: "Wildmind AI", src: "/WILDMIND.png" },
  { name: "Siddhraj", src: "/SIDHARAJ.png" },
  { name: "Vachnamrut AI", src: "/vachnamrut.png" },
  { name: "Unoloft", src: "/UNOLOFT.png" },
];

export default function TrustBanner() {
  return (
    <section
      className="py-14 border-y"
      style={{ background: "var(--bg-secondary)", borderColor: "var(--border-subtle)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p
            className="text-[11px] text-center uppercase tracking-widest font-semibold mb-8"
            style={{ color: "var(--text-muted)" }}
          >
            Trusted by innovative companies across India, UAE, UK &amp; USA
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
            {clients.map((client) => (
              <div
                key={client.name}
                className="relative h-7 w-24 transition-all duration-300"
                style={{ filter: "grayscale(100%) opacity(0.45)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.filter = "grayscale(0%) opacity(1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.filter = "grayscale(100%) opacity(0.45)";
                }}
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
