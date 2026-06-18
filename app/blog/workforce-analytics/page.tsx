import type { Metadata } from "next";
import { BlogGrid, FinalCTA, PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Workforce Analytics Blog", description: "BAMS insights for Workforce Analytics." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS Blog" title="Workforce Analytics operating insights" text="Practical guidance for modern teams improving workforce analytics with connected workflows and AI." /><BlogGrid /><FinalCTA /></main>;
}
