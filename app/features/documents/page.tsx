import type { Metadata } from "next";
import { AIOperatingSystem, DashboardShowcase, ExecutiveDashboards, FinalCTA, Integrations, PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Documents", description: "Secure contracts, employee files, policies and knowledge with role-aware search." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS Feature" title="Documents" text="Secure contracts, employee files, policies and knowledge with role-aware search." /><DashboardShowcase /><AIOperatingSystem /><ExecutiveDashboards /><Integrations /><FinalCTA /></main>;
}
