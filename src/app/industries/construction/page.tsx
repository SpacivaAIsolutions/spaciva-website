import type { Metadata } from "next";
import ConstructionClient from "./ConstructionClient";

export const metadata: Metadata = {
  title: "Construction Software Development Company | AI & Construction Management Solutions | Spaciva",
  description: "Spaciva develops custom construction software, project management platforms, contractor portals, field service applications, AI-powered construction solutions, ERP systems, and digital tools for construction companies and infrastructure businesses.",
  alternates: {
    canonical: "/industries/construction",
  },
};

export default function ConstructionPage() {
  return <ConstructionClient />;
}
