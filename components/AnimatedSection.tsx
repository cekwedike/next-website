"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
};

export function AnimatedSection({
  children,
  className = "",
  as = "section",
}: AnimatedSectionProps) {
  const MotionTag = as === "section" ? motion.section : motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
    >
      {children}
    </MotionTag>
  );
}

export function AnimatedItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}
