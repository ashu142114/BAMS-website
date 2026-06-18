import type { Metadata } from "next";
import { AIOperatingSystem, DashboardShowcase, ExecutiveDashboards, FinalCTA, Integrations, PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Attendance", description: "Geo-aware time, shifts, leave and workforce availability in one operating view." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS Feature" title="Attendance" text="Geo-aware time, shifts, leave and workforce availability in one operating view." /><DashboardShowcase /><AIOperatingSystem /><ExecutiveDashboards /><Integrations /><FinalCTA /></main>;
}
