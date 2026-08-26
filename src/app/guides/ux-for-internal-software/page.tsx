import type { Metadata } from "next";
import UxForInternalSoftwareClient from "./UxForInternalSoftwareClient";

const TITLE = "UX Design for Internal Tools & B2B Software | Spaciva AI";
const DESCRIPTION =
  "Design for software people have to use, not choose. UX audits and product design built into every system we ship — so your team adopts it instead of avoiding it.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/guides/ux-for-internal-software",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://spaciva.tech/guides/ux-for-internal-software",
    siteName: "Spaciva AI",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function UxForInternalSoftwarePage() {
  return <UxForInternalSoftwareClient />;
}
