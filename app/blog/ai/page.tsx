import type { Metadata } from "next";
import { BlogGrid, FinalCTA, PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "AI Blog", description: "BAMS insights for AI." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS Blog" title="AI operating insights" text="Practical guidance for modern teams improving ai with connected workflows and AI." /><BlogGrid /><FinalCTA /></main>;
}
