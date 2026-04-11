import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { CountdownTimer } from "@/components/CountdownTimer";

export const metadata: Metadata = {
  title: "Vote",
  description: "Cast your vote for NEXT artists — voting windows and rules.",
};

export default function VotePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <AnimatedSection className="max-w-3xl">
        <AnimatedItem>
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-next-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-next-primary/60 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-next-primary shadow-[0_0_12px_2px_rgba(255,0,85,0.85)]" />
            </span>
            Voting live
          </p>
          <h1 className="mt-4 font-display text-5xl tracking-wide text-next-text sm:text-6xl">Vote</h1>
          <p className="mt-4 text-lg text-next-text-secondary">
            Your vote amplifies the artists who move you. One verified ballot per device per round — fairness
            keeps the culture sacred.
          </p>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection className="mt-12 max-w-3xl">
        <AnimatedItem>
          <h2 className="font-display text-2xl text-next-text">Round closes in</h2>
        </AnimatedItem>
        <AnimatedItem className="mt-6">
          <CountdownTimer targetDate="2026-06-15T23:59:59" />
        </AnimatedItem>
        <AnimatedItem className="mt-10 rounded-2xl border border-next-border bg-next-card p-6">
          <p className="text-next-text-secondary">
            The live voting widget will connect to your official ballot provider. For partnerships or SMS voting
            regions, reach the team via{" "}
            <Link href="/contact" className="text-next-secondary underline-offset-4 hover:underline">
              Contact
            </Link>
            .
          </p>
          <Link
            href="/artists"
            className="mt-6 inline-flex rounded-full bg-next-primary px-8 py-3 font-medium text-white transition hover:bg-next-primary/90"
          >
            View artists
          </Link>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}
