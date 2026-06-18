import type { Metadata } from "next";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "BAMS | AI Powered Company Operating System",
  description: "Run HR, Payroll, Recruitment, CRM, Collaboration, Documents and AI from one company operating system."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body><MotionProvider>{children}</MotionProvider></body>
    </html>
  );
}
