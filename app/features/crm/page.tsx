import type { Metadata } from "next";
import { AIOperatingSystem, DashboardShowcase, ExecutiveDashboards, FinalCTA, Integrations, PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "CRM", description: "Customer pipeline, tasks, service promises and revenue workflows connected to operating teams." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS Feature" title="CRM" text="Customer pipeline, tasks, service promises and revenue workflows connected to operating teams." /><DashboardShowcase /><AIOperatingSystem /><ExecutiveDashboards /><Integrations /><FinalCTA /></main>;
}
