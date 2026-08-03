import type { Metadata } from "next";
import EducationClient from "./EducationClient";

export const metadata: Metadata = {
  title: "Education Software Development Company | EdTech & Learning Platform Solutions | Spaciva",
  description: "Spaciva develops custom education software, learning management systems (LMS), student management platforms, AI-powered EdTech solutions, school ERP software, and mobile learning applications for educational institutions and startups.",
  alternates: {
    canonical: "/industries/education",
  },
};

export default function EducationPage() {
  return <EducationClient />;
}
