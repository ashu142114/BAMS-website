import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode; variant?: "primary" | "secondary" | "dark" };

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return <a className={cn("inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-black transition hover:-translate-y-0.5", variant === "primary" && "bg-brand-600 text-white shadow-glow", variant === "secondary" && "border border-slate-200 bg-white text-ink shadow-card", variant === "dark" && "bg-ink text-white shadow-card", className)} {...props}>{children}</a>;
}
