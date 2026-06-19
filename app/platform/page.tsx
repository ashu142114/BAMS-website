import type { Metadata } from "next";
import { WhyBams, AIOperatingSystem, ProductEcosystem, ExecutiveDashboards, FinalCTA } from "@/components/Sections";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Platform", description: "The operating layer for people, money, customers, knowledge and decisions." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS Platform" title="Platform" text="The operating layer for people, money, customers, knowledge and decisions." />
      <WhyBams />
      <AIOperatingSystem />
      <ProductEcosystem />
      <ExecutiveDashboards />
      <FinalCTA />
    </main>;
}
