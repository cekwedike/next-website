"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/** Vertical guide line with draw-on reveal; use inside `relative` grid sections. */
export function HowItWorksTimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-y-0 left-[18px] z-0 w-px overflow-hidden md:left-[12px]"
      aria-hidden
    >
      <motion.div
        className="h-full w-full origin-top bg-gradient-to-b from-next-primary via-next-secondary to-next-tertiary"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
