import type { Metadata } from "next";
import { Pricing, FAQ, FinalCTA } from "@/components/Sections";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Pricing", description: "Transparent packages for teams modernizing company operations." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS Pricing" title="Pricing" text="Transparent packages for teams modernizing company operations." />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>;
}
