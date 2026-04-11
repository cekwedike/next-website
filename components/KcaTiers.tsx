"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "Spotlight tier",
    body: "Premiere seating, artist meet-and-greet, and limited merch reserved for partners who back the season.",
    from: "left" as const,
  },
  {
    name: "Insider tier",
    body: "Early access to rehearsal streams, voting multipliers on select rounds, and behind-the-scenes drops.",
    from: "right" as const,
  },
  {
    name: "Community tier",
    body: "Open seating blocks, fan-village activations, and block-party routing so every city feels like home.",
    from: "left" as const,
  },
];

export function KcaTiers() {
  return (
    <div className="mt-16 space-y-10">
      <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">
        Experience tiers
      </h2>
      <ul className="space-y-8">
        {tiers.map((tier, index) => (
          <motion.li
            key={tier.name}
            initial={{ opacity: 0, x: tier.from === "left" ? -56 : 56 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.55,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-2xl border border-next-border bg-next-card p-6 sm:p-8"
          >
            <h3 className="font-display text-2xl text-next-tertiary">{tier.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-next-text-secondary sm:text-base">
              {tier.body}
            </p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
