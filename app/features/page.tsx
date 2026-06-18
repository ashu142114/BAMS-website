import type { Metadata } from "next";
import { ProductEcosystem, AIOperatingSystem, Integrations, FinalCTA } from "@/components/Sections";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Features", description: "Explore every BAMS module in one connected product ecosystem." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS Features" title="Features" text="Explore every BAMS module in one connected product ecosystem." />
      <ProductEcosystem />
      <AIOperatingSystem />
      <Integrations />
      <FinalCTA />
    </main>;
}
