import type { Metadata } from "next";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { CountdownTimer } from "@/components/CountdownTimer";
import { VoteArtistGrid } from "@/components/VoteArtistGrid";

export const metadata: Metadata = {
  title: "Vote",
  description:
    "Support your favorite Afrogospel artist. Vote for the NEXT top 50 and help voices rise.",
};

function RuleCard({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-2xl border border-next-border bg-next-card p-8 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-next-secondary/15 font-display text-3xl font-bold text-next-secondary">
        {number}
      </div>
      <h3 className="mt-6 font-display text-xl tracking-wide text-next-text">{title}</h3>
      <p className="mt-3 text-sm text-next-text-secondary">{body}</p>
    </article>
  );
}

export default function VotePage() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden border-b border-next-border bg-gradient-to-b from-next-background via-next-background to-next-background">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,0,85,0.25),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="relative text-center">
            <p
              className="pointer-events-none select-none font-display text-[clamp(5rem,22vw,16rem)] leading-[0.85] tracking-[0.02em] text-next-primary"
              style={{
                textShadow:
                  "0 0 80px rgba(255,0,85,0.85), 0 0 120px rgba(255,0,85,0.45), 0 0 40px rgba(255,0,85,0.6)",
              }}
              aria-hidden
            >
              VOTE
            </p>
            <div className="relative -mt-[clamp(2rem,8vw,5rem)] max-w-3xl mx-auto">
              <AnimatedSection>
                <AnimatedItem>
                  <h1 className="font-display text-4xl tracking-wide text-next-text sm:text-5xl lg:text-6xl">
                    Your Voice, Your Choice
                  </h1>
                </AnimatedItem>
                <AnimatedItem>
                  <p className="mx-auto mt-6 max-w-2xl text-lg text-next-text-secondary">
                    Support your favorite Afrogospel artist. Vote now and help them reach the top 20.
                  </p>
                </AnimatedItem>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-next-border bg-next-secondary py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <p className="font-display text-2xl tracking-wide text-next-background sm:text-3xl lg:max-w-md">
              Voting Opens June 22, 2025
            </p>
            <div className="min-w-0 flex-1 lg:max-w-2xl">
              <CountdownTimer targetDate="2025-06-22T00:00:00" variant="onTeal" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <AnimatedItem>
              <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">The Top 50</h2>
              <p className="mt-2 max-w-2xl text-next-text-secondary">
                Browse artists and producers — placeholders until live data connects.
              </p>
            </AnimatedItem>
            <AnimatedItem className="mt-12">
              <VoteArtistGrid />
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-next-border bg-next-card/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <AnimatedItem className="text-center">
              <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">Voting rules</h2>
              <p className="mx-auto mt-2 max-w-xl text-next-text-secondary">
                Fair, free, and built for the culture.
              </p>
            </AnimatedItem>
            <AnimatedItem className="mt-12 grid gap-6 md:grid-cols-3">
              <RuleCard
                number="1"
                title="One vote per person per day"
                body="Keep it honest — one ballot per person, every 24 hours, so every voice counts equally."
              />
              <RuleCard
                number="2"
                title="Voting is free"
                body="No pay-to-win. Show love for your favorites without spending a cent."
              />
              <RuleCard
                number="3"
                title="Three weeks of voting"
                body="The window stays open for 21 days — rally your community and push your pick up the chart."
              />
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
