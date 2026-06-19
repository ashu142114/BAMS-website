import type { Metadata } from "next";
import { BlogGrid, FinalCTA, PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "HR Blog", description: "BAMS insights for HR." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS Blog" title="HR operating insights" text="Practical guidance for modern teams improving hr with connected workflows and AI." /><BlogGrid /><FinalCTA /></main>;
}
