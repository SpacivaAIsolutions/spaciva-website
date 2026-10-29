import { OG_SIZE, renderOgImage } from "@/lib/og-image";

export const alt = "Unified Accounting case study: 70% less manual data entry across 12+ accounting platforms";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    stat: "70%",
    headline: "less manual data entry across 12+ accounting platforms",
    subline: "Unified Accounting case study · QuickBooks, Xero, NetSuite, Sage & more",
  });
}
