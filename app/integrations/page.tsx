import type { Metadata } from "next";
import { Integrations, ProductEcosystem, FinalCTA } from "@/components/Sections";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Integrations", description: "Connect BAMS with the systems your teams already trust." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS Integrations" title="Integrations" text="Connect BAMS with the systems your teams already trust." />
      <Integrations />
      <ProductEcosystem />
      <FinalCTA />
    </main>;
}
