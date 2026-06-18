import type { Metadata } from "next";
import { BlogGrid, FinalCTA, PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Recruitment Blog", description: "BAMS insights for Recruitment." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS Blog" title="Recruitment operating insights" text="Practical guidance for modern teams improving recruitment with connected workflows and AI." /><BlogGrid /><FinalCTA /></main>;
}
