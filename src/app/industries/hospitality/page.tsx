import type { Metadata } from "next";
import HospitalityClient from "./HospitalityClient";

export const metadata: Metadata = {
  title: "Hospitality Software Development Company | Hotel, Restaurant & Travel Solutions | Spaciva",
  description: "Spaciva develops custom hospitality software including hotel management systems, restaurant platforms, booking engines, AI-powered guest experiences, travel applications, and hospitality management solutions.",
  alternates: {
    canonical: "/industries/hospitality",
  },
};

export default function HospitalityPage() {
  return <HospitalityClient />;
}
