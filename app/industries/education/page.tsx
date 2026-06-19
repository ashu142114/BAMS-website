import type { Metadata } from "next";
import { AIOperatingSystem, DashboardShowcase, ExecutiveDashboards, FinalCTA, PageHero, ProductEcosystem } from "@/components/Sections";

export const metadata: Metadata = { title: "Education", description: "Faculty operations, payroll, admissions coordination, documents and service desks." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS for Education" title="Education operating system" text="Faculty operations, payroll, admissions coordination, documents and service desks." /><DashboardShowcase /><ProductEcosystem /><AIOperatingSystem /><ExecutiveDashboards /><FinalCTA /></main>;
}
