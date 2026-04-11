import type { Metadata } from "next";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { buildPageMetadata } from "@/lib/page-meta";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "NEXT (New Era Xceptional Talent) is Energize Music’s Afrogospel incubator — faith, innovation, and community on one stage across Africa and the diaspora.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <AnimatedSection className="max-w-3xl">
        <AnimatedItem variant="heading">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-next-secondary">About</p>
          <h1 className="mt-3 font-display text-5xl tracking-wide text-next-text sm:text-6xl">
            Built for Afrogospel
          </h1>
        </AnimatedItem>
        <AnimatedItem variant="card">
          <p className="mt-6 text-base text-next-text-secondary sm:text-lg">
            NEXT (New Era Xceptional Talent) is Energize Music&apos;s flagship talent competition and incubator —
            designed to find artists who carry both spiritual depth and undeniable sonic innovation. We believe
            Afrogospel is not a niche; it&apos;s a global frequency.
          </p>
        </AnimatedItem>
        <AnimatedItem variant="card">
          <p className="mt-4 text-base text-next-text-secondary sm:text-lg">
            Our programs pair emerging vocalists with producers, choreographers, and brand storytellers who
            understand the culture. Every season ends with real outcomes: recordings, performances, and a
            community that rallies behind the music long after the cameras cut.
          </p>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}
