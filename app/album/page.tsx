import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Album",
  description:
    "ENERGIZE Afrogospel Album — ten voices, one vision. Coming October 2025 from NEXT and Energize Music.",
};

const VINYL_IMAGE =
  "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=900&h=900&fit=crop&q=80";

export default function AlbumPage() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden border-b border-next-border bg-gradient-to-b from-next-background via-[#0a0a0c] to-next-background">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,85,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(0,229,204,0.06),transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
              <div className="animate-vinyl-spin relative aspect-square w-full max-w-[min(100%,380px)] rounded-full shadow-[0_0_80px_rgba(255,0,85,0.25),inset_0_0_60px_rgba(0,0,0,0.85)] ring-4 ring-next-border">
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#1a1a1a_0deg,#2a2a2a_40deg,#111_80deg,#1a1a1a_120deg)] opacity-90" />
                <Image
                  src={VINYL_IMAGE}
                  alt=""
                  fill
                  className="rounded-full object-cover mix-blend-luminosity opacity-90"
                  sizes="(max-width: 1024px) 80vw, 380px"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-[28%] w-[28%] items-center justify-center rounded-full bg-next-background ring-4 ring-next-primary/40">
                    <span className="font-display text-2xl text-next-text sm:text-3xl">NEXT</span>
                  </div>
                </div>
              </div>
            </div>
            <AnimatedSection className="order-1 max-w-xl lg:order-2">
              <AnimatedItem>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-next-secondary">
                  Coming October 2025
                </p>
              </AnimatedItem>
              <AnimatedItem>
                <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-wide text-next-text sm:text-5xl lg:text-6xl">
                  ENERGIZE Afrogospel Album
                </h1>
              </AnimatedItem>
              <AnimatedItem>
                <p className="mt-6 text-lg text-next-text-secondary">
                  Ten voices. One vision. A record that changes everything.
                </p>
              </AnimatedItem>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedItem>
              <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">The album story</h2>
              <p className="mt-6 text-next-text-secondary">
                The top 10 artists from NEXT will collaborate shoulder-to-shoulder with established Afrogospel
                musicians — writers, producers, and voices who have already shaped the sound of a generation.
                Together they will craft a project that honors roots while pushing the genre forward.
              </p>
              <p className="mt-4 text-next-text-secondary">
                On release day, the ENERGIZE album lands everywhere you stream — major platforms worldwide, with
                visuals and behind-the-scenes moments that pull you into the studio with the cohort.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <div className="relative mx-auto aspect-square w-full max-w-md">
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg,rgba(255,0,85,0.35),transparent,rgba(0,229,204,0.25),transparent)] blur-2xl" />
                <div className="relative flex h-full w-full items-center justify-center rounded-full border border-next-border bg-gradient-to-br from-next-card via-next-background to-next-card shadow-[0_0_100px_rgba(255,0,85,0.2)]">
                  <div className="flex h-[72%] w-[72%] items-center justify-center rounded-full border-2 border-next-border bg-next-background/90 ring-4 ring-next-primary/30">
                    <div className="text-center">
                      <p className="font-display text-5xl tracking-[0.2em] text-next-text sm:text-6xl">NEXT</p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-next-secondary">
                        ENERGIZE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-next-border bg-gradient-to-b from-next-background to-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <AnimatedItem>
              <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">
                Album Launch Concert
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-4 text-lg text-next-text-secondary">
                A major concert celebrating the release. Date and venue to be announced.
              </p>
            </AnimatedItem>
            <AnimatedItem className="mt-10">
              <p className="text-sm font-medium text-next-text-secondary">Get notified when tickets drop</p>
              <div className="mt-4">
                <NewsletterForm />
              </div>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
