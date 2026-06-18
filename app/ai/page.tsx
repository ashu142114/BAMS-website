import type { Metadata } from "next";
import { AIOperatingSystem, DashboardShowcase, ProductEcosystem, FAQ, FinalCTA } from "@/components/Sections";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "AI", description: "Permission-aware AI copilots for HR, payroll, recruiting, workforce and executive teams." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS AI" title="AI" text="Permission-aware AI copilots for HR, payroll, recruiting, workforce and executive teams." />
      <AIOperatingSystem />
      <DashboardShowcase />
      <ProductEcosystem />
      <FAQ />
      <FinalCTA />
    </main>;
}
