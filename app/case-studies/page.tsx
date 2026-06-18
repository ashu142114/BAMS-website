import type { Metadata } from "next";
import { CustomerStories, ExecutiveDashboards, FinalCTA } from "@/components/Sections";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Case Studies", description: "Stories from operators building one source of truth with BAMS." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS Case Studies" title="Case Studies" text="Stories from operators building one source of truth with BAMS." />
      <CustomerStories />
      <ExecutiveDashboards />
      <FinalCTA />
    </main>;
}
