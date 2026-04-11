import type { Metadata } from "next";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact NEXT and Energize Music — partnerships, press, and artist enquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <AnimatedSection className="max-w-3xl">
        <AnimatedItem>
          <h1 className="font-display text-5xl tracking-wide text-next-text sm:text-6xl">Contact</h1>
          <p className="mt-4 text-lg text-next-text-secondary">
            For sponsorships, licensing, press, and artist submissions, reach the Energize Music team. We read
            every message that respects the mission.
          </p>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection className="mt-12 grid gap-8 lg:grid-cols-2">
        <AnimatedItem>
          <div className="rounded-2xl border border-next-border bg-next-card p-6">
            <h2 className="font-display text-xl text-next-text">General</h2>
            <p className="mt-2 text-next-text-secondary">hello@energizemusic.example</p>
            <p className="mt-4 text-sm text-next-text-secondary">
              Response within 3–5 business days. Include your city and whether you&apos;re artist, brand, or
              media.
            </p>
          </div>
        </AnimatedItem>
        <AnimatedItem>
          <div className="rounded-2xl border border-next-border bg-next-card p-6">
            <h2 className="font-display text-xl text-next-text">Press kit</h2>
            <p className="mt-2 text-next-text-secondary">press@energizemusic.example</p>
            <p className="mt-4 text-sm text-next-text-secondary">
              Logos, season one-pagers, and approved imagery for editorial use.
            </p>
          </div>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}
