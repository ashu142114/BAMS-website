import type { Metadata } from "next";
import { Pricing, FAQ, FinalCTA } from "@/components/Sections";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Contact", description: "Talk to the BAMS team about your operating model." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS Contact" title="Contact" text="Talk to the BAMS team about your operating model." />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>;
}
