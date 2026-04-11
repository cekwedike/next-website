import type { Metadata } from "next";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about NEXT — New Era Xceptional Talent and Energize Music's Afrogospel incubator.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <AnimatedSection className="max-w-3xl">
        <AnimatedItem>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-next-secondary">About</p>
          <h1 className="mt-3 font-display text-5xl tracking-wide text-next-text sm:text-6xl">
            Built for Afrogospel
          </h1>
        </AnimatedItem>
        <AnimatedItem>
          <p className="mt-6 text-lg text-next-text-secondary">
            NEXT (New Era Xceptional Talent) is Energize Music&apos;s flagship talent competition and incubator —
            designed to find artists who carry both spiritual depth and undeniable sonic innovation. We believe
            Afrogospel is not a niche; it&apos;s a global frequency.
          </p>
        </AnimatedItem>
        <AnimatedItem>
          <p className="mt-4 text-lg text-next-text-secondary">
            Our programs pair emerging vocalists with producers, choreographers, and brand storytellers who
            understand the culture. Every season ends with real outcomes: recordings, performances, and a
            community that rallies behind the music long after the cameras cut.
          </p>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}
