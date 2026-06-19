import type { Metadata } from "next";
import { AIOperatingSystem, DashboardShowcase, ExecutiveDashboards, FinalCTA, PageHero, ProductEcosystem } from "@/components/Sections";

export const metadata: Metadata = { title: "IT", description: "Distributed teams, hiring velocity, utilization, assets, access and executive delivery dashboards." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS for IT" title="IT operating system" text="Distributed teams, hiring velocity, utilization, assets, access and executive delivery dashboards." /><DashboardShowcase /><ProductEcosystem /><AIOperatingSystem /><ExecutiveDashboards /><FinalCTA /></main>;
}
