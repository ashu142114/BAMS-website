import type { Metadata } from "next";
import { AIOperatingSystem, DashboardShowcase, ExecutiveDashboards, FinalCTA, PageHero, ProductEcosystem } from "@/components/Sections";

export const metadata: Metadata = { title: "Retail", description: "Store rosters, attendance, frontline learning, service escalations and regional performance." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS for Retail" title="Retail operating system" text="Store rosters, attendance, frontline learning, service escalations and regional performance." /><DashboardShowcase /><ProductEcosystem /><AIOperatingSystem /><ExecutiveDashboards /><FinalCTA /></main>;
}
