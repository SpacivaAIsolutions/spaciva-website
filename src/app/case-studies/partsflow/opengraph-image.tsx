import { OG_SIZE, renderOgImage } from "@/lib/og-image";

export const alt = "PartsFlow case study: 80% faster data entry across a 5,000+ SKU catalogue";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    stat: "80%",
    headline: "faster data entry across 5,000+ SKUs",
    subline: "PartsFlow case study · Inventory platform with live QuickBooks sync",
  });
}
