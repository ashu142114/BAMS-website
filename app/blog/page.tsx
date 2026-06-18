import type { Metadata } from "next";
import { BlogGrid, FAQ, FinalCTA } from "@/components/Sections";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Blog", description: "Ideas on HR, payroll, recruitment, AI, analytics and compliance." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS Blog" title="Blog" text="Ideas on HR, payroll, recruitment, AI, analytics and compliance." />
      <BlogGrid />
      <FAQ />
      <FinalCTA />
    </main>;
}
