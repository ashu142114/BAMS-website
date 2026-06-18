import type { Metadata } from "next";
import { BlogGrid, FinalCTA, PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Compliance Blog", description: "BAMS insights for Compliance." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS Blog" title="Compliance operating insights" text="Practical guidance for modern teams improving compliance with connected workflows and AI." /><BlogGrid /><FinalCTA /></main>;
}
