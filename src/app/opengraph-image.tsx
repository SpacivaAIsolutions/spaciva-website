import { OG_SIZE, renderOgImage } from "@/lib/og-image";

// Site-wide share image, referenced from every page's openGraph.images.
export const alt = "Spaciva AI — AI automation and custom software for agencies, professional-services firms and DTC brands";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    headline: "AI automation for agencies, professional-services firms & DTC brands",
    subline: "Fixed scope · Fixed price · Monitored monthly",
  });
}
