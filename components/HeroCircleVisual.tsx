"use client";

import { motion } from "framer-motion";

const BADGES = [
  { symbol: "🎤", key: "mic" },
  { symbol: "🎵", key: "note" },
  { symbol: "🌐", key: "globe" },
  { symbol: "⭐", key: "star" },
  { symbol: "💿", key: "record" },
  { symbol: "👑", key: "crown" },
] as const;

export function HeroCircleVisual() {
  return (
    <motion.div
      className="relative isolate size-[260px] shrink-0 [--orbit:152px] lg:size-[420px] lg:[--orbit:236px]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {BADGES.map((badge, i) => (
        <div
          key={badge.key}
          className="pointer-events-none absolute left-1/2 top-1/2 z-30 h-0 w-0"
          style={{
            transform: `rotate(${i * 60}deg) translateY(calc(-1 * var(--orbit)))`,
          }}
        >
          <div
            style={{
              transform: `translate(-50%, -50%) rotate(${-i * 60}deg)`,
            }}
          >
            <motion.div
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#FF0055] bg-[#111] text-sm shadow-[0_0_12px_rgba(255,0,85,0.25)] lg:h-10 lg:w-10 lg:text-base"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2.4 + i * 0.22,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.18,
              }}
            >
              <span aria-hidden className="leading-none">
                {badge.symbol}
              </span>
            </motion.div>
          </div>
        </div>
      ))}

      <motion.div
        className="pointer-events-none absolute inset-0 z-[1] rounded-full border-2 border-[#FF0055] bg-transparent"
        style={{
          boxShadow:
            "0 0 36px rgba(255, 0, 85, 0.5), 0 0 64px rgba(255, 0, 85, 0.2)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="pointer-events-none absolute inset-[9px] z-[2] rounded-full border-2 border-dashed border-[#00E5CC] bg-transparent lg:inset-[13px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="pointer-events-none absolute inset-[22px] z-[3] rounded-full bg-[rgba(255,0,85,0.06)] lg:inset-[36px]"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-[22px] z-[4] flex flex-col items-center justify-center px-3 text-center lg:inset-[36px]">
        <span className="font-display text-[50px] leading-none tracking-wide text-white lg:text-[80px]">
          NEXT
        </span>
        <p className="mt-2 max-w-[11rem] text-[0.65rem] font-semibold uppercase leading-snug tracking-[0.12em] text-[#00E5CC] lg:max-w-[14rem] lg:text-xs">
          New Era Xceptional Talent
        </p>
        <div
          className="mt-3 flex items-center gap-2"
          aria-hidden
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-[#FF0055]"
              animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.15, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.25,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
