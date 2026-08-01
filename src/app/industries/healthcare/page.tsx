import { Metadata } from "next";
import HealthcareClient from "./HealthcareClient";

export const metadata: Metadata = {
  title: "Healthcare Software Development Company | AI & Custom Healthcare Solutions | Spaciva",
  description: "Spaciva builds secure healthcare software, AI-powered medical solutions, patient portals, telemedicine platforms, hospital management systems, and healthcare automation for modern providers.",
};

export default function HealthcarePage() {
  return <HealthcareClient />;
}
