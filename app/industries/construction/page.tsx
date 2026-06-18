import type { Metadata } from "next";
import { AIOperatingSystem, DashboardShowcase, ExecutiveDashboards, FinalCTA, PageHero, ProductEcosystem } from "@/components/Sections";

export const metadata: Metadata = { title: "Construction", description: "Site crews, contractor onboarding, safety compliance, equipment and expense controls." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS for Construction" title="Construction operating system" text="Site crews, contractor onboarding, safety compliance, equipment and expense controls." /><DashboardShowcase /><ProductEcosystem /><AIOperatingSystem /><ExecutiveDashboards /><FinalCTA /></main>;
}
