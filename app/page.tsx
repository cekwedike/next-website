import Link from "next/link";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { CountdownTimer } from "@/components/CountdownTimer";
import { PhaseCard } from "@/components/PhaseCard";

export default function HomePage() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden border-b border-next-border">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-next-primary/10 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <AnimatedSection className="max-w-3xl">
            <AnimatedItem>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-next-secondary">
                Energize Music presents
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <h1 className="mt-4 font-display text-5xl leading-[0.95] tracking-wide text-next-text sm:text-6xl lg:text-7xl">
                New Era
                <span className="block text-next-primary">Xceptional Talent</span>
              </h1>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-6 max-w-xl text-lg text-next-text-secondary">
                Afrogospel&apos;s premier competition and incubator — where raw gift meets world-class
                production, community block parties, and a global stage.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center rounded-full bg-next-primary px-8 py-3 font-medium text-white transition hover:bg-next-primary/90"
                >
                  How it works
                </Link>
                <Link
                  href="/vote"
                  className="inline-flex items-center justify-center rounded-full border border-next-border bg-next-card px-8 py-3 font-medium text-next-text transition hover:border-next-secondary hover:text-next-secondary"
                >
                  Vote now
                </Link>
              </div>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-b border-next-border py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <AnimatedItem>
              <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">
                Grand finale countdown
              </h2>
              <p className="mt-2 max-w-2xl text-next-text-secondary">
                Mark the moment. The NEXT season finale is approaching — witness the crowning of Afrogospel&apos;s
                next breakout voice.
              </p>
            </AnimatedItem>
            <AnimatedItem className="mt-10">
              <CountdownTimer targetDate="2026-11-28T19:00:00" />
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="grid gap-10 md:grid-cols-3">
            <AnimatedItem className="max-w-2xl md:col-span-3">
              <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">
                The journey
              </h2>
              <p className="mt-2 text-next-text-secondary">
                From first audition tape to label-ready masters — NEXT is built as a ladder, not a lottery.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <PhaseCard
                phase="Phase 01"
                title="Discovery"
                description="Open submissions, city auditions, and digital showcases curated by Energize Music A&R."
                accent="primary"
              />
            </AnimatedItem>
            <AnimatedItem>
              <PhaseCard
                phase="Phase 02"
                title="Incubator"
                description="Artist development, vocal coaching, and studio weeks with top Afrogospel producers."
                accent="secondary"
              />
            </AnimatedItem>
            <AnimatedItem>
              <PhaseCard
                phase="Phase 03"
                title="Spotlight"
                description="Block parties, the compilation album, and the KCA-stage moment the world sees."
                accent="tertiary"
              />
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-next-border bg-next-card/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl">
            <AnimatedItem>
              <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">
                Ready to be heard?
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-4 text-next-text-secondary">
                Artists, fans, and partners — there&apos;s a lane for you in the NEXT ecosystem.
              </p>
            </AnimatedItem>
            <AnimatedItem className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-next-secondary px-8 py-3 font-medium text-next-secondary transition hover:bg-next-secondary hover:text-next-background"
              >
                Contact the team
              </Link>
              <Link
                href="/artists"
                className="inline-flex rounded-full bg-next-tertiary px-8 py-3 font-medium text-next-background transition hover:bg-next-tertiary/90"
              >
                Meet the artists
              </Link>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
