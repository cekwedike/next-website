"use client";

import Image from "next/image";
import Link from "next/link";
import { HeroCircleVisual } from "@/components/HeroCircleVisual";
import { HeroTypewriter } from "@/components/HeroTypewriter";

export function HomeHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-next-border">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1920&h=1080&auto=format&fit=crop"
          alt="Dark concert venue with stage lights and crowd silhouettes"
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-next-background via-next-background/80 to-next-background" />
        <div className="absolute inset-0 bg-gradient-to-b from-next-primary/10 via-transparent to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-next-secondary">
              Energize Music presents
            </p>
            <HeroTypewriter
              lines={["New Era", "Xceptional Talent"]}
              className="mt-4 font-display text-5xl leading-[0.95] tracking-wide text-next-text sm:text-6xl lg:text-7xl"
              firstLineClassName=""
              secondLineClassName=""
            />
            <p className="mt-6 max-w-xl text-base text-next-text-secondary sm:text-lg">
              Afrogospel&apos;s premier competition and incubator — where raw gift meets world-class
              production, community block parties, and a global stage.
            </p>
            <div className="mt-10 flex min-h-[44px] flex-wrap gap-4">
              <Link
                href="/how-it-works"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-next-primary px-8 py-3 text-base font-medium text-white transition hover:bg-next-primary/90"
              >
                How it works
              </Link>
              <Link
                href="/vote"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-next-border bg-next-card px-8 py-3 text-base font-medium text-next-text transition hover:border-next-secondary hover:text-next-secondary"
              >
                Vote now
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <HeroCircleVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
