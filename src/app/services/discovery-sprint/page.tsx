import type { Metadata } from "next";
import DiscoverySprintClient from "./DiscoverySprintClient";

const TITLE = "Software Project Scoping & Discovery Sprints | Spaciva AI";
const DESCRIPTION =
  "Before anyone can quote your build honestly, someone has to scope it. A fixed-fee discovery sprint that ends in a specification you own — and can take anywhere.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/discovery-sprint",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://spaciva.tech/services/discovery-sprint",
    siteName: "Spaciva AI",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function DiscoverySprintPage() {
  return <DiscoverySprintClient />;
}
