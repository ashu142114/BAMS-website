import type { Metadata } from "next";
import { AIOperatingSystem, DashboardShowcase, ExecutiveDashboards, FinalCTA, PageHero, ProductEcosystem } from "@/components/Sections";

export const metadata: Metadata = { title: "Healthcare", description: "Credentialing, shift coverage, compliance documents and workforce costs for care networks." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS for Healthcare" title="Healthcare operating system" text="Credentialing, shift coverage, compliance documents and workforce costs for care networks." /><DashboardShowcase /><ProductEcosystem /><AIOperatingSystem /><ExecutiveDashboards /><FinalCTA /></main>;
}
