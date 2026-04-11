"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const itemDefault = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const itemHeading = {
  hidden: { opacity: 0, y: 44 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const itemCard = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const itemImage = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const variantsMap = {
  default: itemDefault,
  heading: itemHeading,
  card: itemCard,
  image: itemImage,
} as const;

export type AnimatedItemVariant = keyof typeof variantsMap;

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
  id?: string;
};

export function AnimatedSection({
  children,
  className = "",
  as = "section",
  id,
}: AnimatedSectionProps) {
  const MotionTag = as === "section" ? motion.section : motion.div;
  return (
    <MotionTag
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={container}
    >
      {children}
    </MotionTag>
  );
}

export function AnimatedItem({
  children,
  className = "",
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  variant?: AnimatedItemVariant;
}) {
  return (
    <motion.div variants={variantsMap[variant]} className={className}>
      {children}
    </motion.div>
  );
}
