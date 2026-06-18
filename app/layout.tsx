import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BAMS | AI Powered Company Operating System",
  description: "BAMS is an Enterprise Workforce Operating System for HRMS, payroll, attendance management, employee management, recruitment software, workforce management, AI HR software, collaboration, analytics, and executive reporting.",
  keywords: [
    "HRMS software",
    "payroll software",
    "attendance management",
    "employee management",
    "recruitment software",
    "workforce management",
    "AI HR software",
    "enterprise workforce operating system"
  ],
  openGraph: {
    title: "BAMS | AI Powered Company Operating System",
    description: "Run workforce management, payroll, recruitment, collaboration, analytics, and AI from one operating platform.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
