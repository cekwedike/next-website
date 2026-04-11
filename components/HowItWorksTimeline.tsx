"use client";

import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

export function HowItWorksTimeline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <div ref={ref} className="relative md:pl-8">
      <motion.div
        className="pointer-events-none absolute left-[18px] top-0 z-0 h-full w-px origin-top bg-gradient-to-b from-next-primary via-next-secondary to-next-tertiary md:left-[10px]"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
      />
      <div className="relative z-10 grid gap-8 pl-10 md:grid-cols-2 md:gap-10 md:pl-6">
        {children}
      </div>
    </div>
  );
}
