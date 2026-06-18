import type { Metadata } from "next";
import { AIOperatingSystem, DashboardShowcase, ExecutiveDashboards, FinalCTA, PageHero, ProductEcosystem } from "@/components/Sections";

export const metadata: Metadata = { title: "Manufacturing", description: "Plant attendance, contractors, safety training, assets and production workforce visibility." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS for Manufacturing" title="Manufacturing operating system" text="Plant attendance, contractors, safety training, assets and production workforce visibility." /><DashboardShowcase /><ProductEcosystem /><AIOperatingSystem /><ExecutiveDashboards /><FinalCTA /></main>;
}
