import type { Metadata } from "next";
import { IndustrySolutions, ExecutiveDashboards, FinalCTA } from "@/components/Sections";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Industries", description: "Operating templates for complex, distributed and regulated teams." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS Industries" title="Industries" text="Operating templates for complex, distributed and regulated teams." />
      <IndustrySolutions />
      <ExecutiveDashboards />
      <FinalCTA />
    </main>;
}
