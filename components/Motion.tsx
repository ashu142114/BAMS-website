"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

export const MotionDiv = motion.div;
export const MotionSection = motion.section;

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollOrb() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 520]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 120]);
  return <motion.div style={{ y, rotate }} className="pointer-events-none fixed right-6 top-28 z-0 h-64 w-64 rounded-full bg-gradient-to-br from-brand-100 via-white to-violet/20 blur-2xl" />;
}
