import type { Metadata } from "next";
import { AIOperatingSystem, DashboardShowcase, ExecutiveDashboards, FinalCTA, PageHero, ProductEcosystem } from "@/components/Sections";

export const metadata: Metadata = { title: "Logistics", description: "Hub staffing, fleet-adjacent assets, payroll exceptions and operational productivity." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS for Logistics" title="Logistics operating system" text="Hub staffing, fleet-adjacent assets, payroll exceptions and operational productivity." /><DashboardShowcase /><ProductEcosystem /><AIOperatingSystem /><ExecutiveDashboards /><FinalCTA /></main>;
}
