import type { Metadata } from "next";
import { AIOperatingSystem, DashboardShowcase, ExecutiveDashboards, FinalCTA, Integrations, PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "HRMS", description: "One employee system of record for profiles, policies, org design and lifecycle workflows." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS Feature" title="HRMS" text="One employee system of record for profiles, policies, org design and lifecycle workflows." /><DashboardShowcase /><AIOperatingSystem /><ExecutiveDashboards /><Integrations /><FinalCTA /></main>;
}
