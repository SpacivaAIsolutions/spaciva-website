import type { Metadata } from "next";
import ManufacturingClient from "./ManufacturingClient";

export const metadata: Metadata = {
  title: "Manufacturing Software Development Company | AI & Industrial Automation | Spaciva",
  description: "Spaciva develops custom manufacturing software, ERP systems, industrial automation platforms, AI-powered production solutions, inventory management software, and smart factory applications to improve efficiency and operational visibility.",
  alternates: {
    canonical: "/industries/manufacturing",
  },
};

export default function ManufacturingPage() {
  return <ManufacturingClient />;
}
