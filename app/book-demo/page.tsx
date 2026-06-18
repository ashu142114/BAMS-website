import type { Metadata } from "next";
import { DashboardShowcase, AIOperatingSystem, FAQ, FinalCTA } from "@/components/Sections";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Book Demo", description: "See how BAMS unifies HR, payroll, recruitment, CRM, learning, collaboration and AI." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS Book Demo" title="Book Demo" text="See how BAMS unifies HR, payroll, recruitment, CRM, learning, collaboration and AI." />
      <DashboardShowcase />
      <AIOperatingSystem />
      <FAQ />
      <FinalCTA />
    </main>;
}
