import type { Metadata } from "next";
import { AIOperatingSystem, DashboardShowcase, ExecutiveDashboards, FinalCTA, Integrations, PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Payroll", description: "Payroll controls, anomalies, reimbursements and approvals connected to every people signal." };

export default function Page() {
  return <main className="noise overflow-hidden"><PageHero eyebrow="BAMS Feature" title="Payroll" text="Payroll controls, anomalies, reimbursements and approvals connected to every people signal." /><DashboardShowcase /><AIOperatingSystem /><ExecutiveDashboards /><Integrations /><FinalCTA /></main>;
}
