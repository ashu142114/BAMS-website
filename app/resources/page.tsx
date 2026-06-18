import type { Metadata } from "next";
import { BlogGrid, CustomerStories, FAQ, FinalCTA } from "@/components/Sections";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Resources", description: "Playbooks, guides and operating insights for AI-era companies." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS Resources" title="Resources" text="Playbooks, guides and operating insights for AI-era companies." />
      <BlogGrid />
      <CustomerStories />
      <FAQ />
      <FinalCTA />
    </main>;
}
