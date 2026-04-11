import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { CountdownTimer } from "@/components/CountdownTimer";
import { CountUpWhenVisible } from "@/components/CountUpWhenVisible";
import { HomeHeroSection } from "@/components/HomeHeroSection";
import { PhaseCard } from "@/components/PhaseCard";
import { defaultDescription, ogImageUrl, siteUrl } from "@/lib/site";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Energize Music",
    url: siteUrl,
    description:
      "Music label and creative collective behind NEXT — Afrogospel competition and incubator.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "NEXT by Energize Music — Competition Launch",
    description:
      "Launch of the NEXT Afrogospel talent competition and incubator season.",
    startDate: "2025-05-01",
    endDate: "2025-05-01",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      url: siteUrl,
    },
    organizer: {
      "@type": "Organization",
      name: "Energize Music",
      url: siteUrl,
    },
  },
];

export const metadata: Metadata = {
  title: {
    absolute:
      "NEXT: New Era Xceptional Talent | Afrogospel Competition Africa",
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: siteUrl,
    title:
      "NEXT: New Era Xceptional Talent | Afrogospel Competition Africa",
    description: defaultDescription,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "NEXT live music" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@EnergizeMusic",
    creator: "@EnergizeMusic",
    title:
      "NEXT: New Era Xceptional Talent | Afrogospel Competition Africa",
    description: defaultDescription,
    images: [ogImageUrl],
  },
};

export default function HomePage() {
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHeroSection />

      <section className="border-b border-next-border py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <AnimatedItem variant="heading">
              <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">
                Grand finale countdown
              </h2>
              <p className="mt-2 max-w-2xl text-base text-next-text-secondary sm:text-lg">
                Mark the moment. The NEXT season finale is approaching — witness the crowning of Afrogospel&apos;s
                next breakout voice.
              </p>
            </AnimatedItem>
            <AnimatedItem variant="card" className="mt-10">
              <CountdownTimer targetDate="2026-11-28T19:00:00" />
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-b border-next-border py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <AnimatedItem variant="card">
              <CountUpWhenVisible end={1200} suffix="+" label="Artists scouted" />
            </AnimatedItem>
            <AnimatedItem variant="card">
              <CountUpWhenVisible end={18} label="Cities activated" />
            </AnimatedItem>
            <AnimatedItem variant="card">
              <CountUpWhenVisible end={240} suffix="K" label="Fan votes cast" />
            </AnimatedItem>
            <AnimatedItem variant="card">
              <CountUpWhenVisible end={40} suffix="+" label="Producer sessions" />
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedItem variant="heading" className="max-w-2xl md:col-span-2 lg:col-span-3">
              <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">
                Your Journey to the Top
              </h2>
              <p className="mt-2 text-base text-next-text-secondary sm:text-lg">
                From online auditions to the grand finale — NEXT is built as a ladder, not a lottery.
              </p>
            </AnimatedItem>
            <AnimatedItem variant="card">
              <PhaseCard
                phase="Phase 01"
                title="Submit"
                description="Artists and producers enter through the NEXT portal; judges select the top 50 in each lane — open to all of Africa."
                accent="primary"
              />
            </AnimatedItem>
            <AnimatedItem variant="card">
              <PhaseCard
                phase="Phase 02"
                title="Top 50 Selected"
                description="The top 50 artists and producers are showcased on Energize Music social channels across the continent."
                accent="secondary"
              />
            </AnimatedItem>
            <AnimatedItem variant="card">
              <PhaseCard
                phase="Phase 03"
                title="Public Votes"
                description="Fans vote free for three weeks to take the field from 50 down to 20 — every voice counts."
                accent="tertiary"
              />
            </AnimatedItem>
            <AnimatedItem variant="card">
              <PhaseCard
                phase="Phase 04"
                title="Album Creation"
                description="The top 10 record the ENERGIZE Afrogospel Album in professional sessions with behind-the-scenes drops for fans."
                accent="primary"
              />
            </AnimatedItem>
            <AnimatedItem variant="card">
              <PhaseCard
                phase="Phase 05"
                title="Block Parties"
                description="The top 20 headline pan-African block parties — live album previews and community celebrations."
                accent="secondary"
              />
            </AnimatedItem>
            <AnimatedItem variant="card">
              <PhaseCard
                phase="Phase 06"
                title="Launch Concert"
                description="The album officially drops and the top 10 perform at a major launch concert — the movement goes permanent."
                accent="tertiary"
              />
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-next-border bg-next-card/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl">
            <AnimatedItem variant="heading">
              <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">
                Ready to be heard?
              </h2>
            </AnimatedItem>
            <AnimatedItem variant="card">
              <p className="mt-4 text-base text-next-text-secondary sm:text-lg">
                Artists, fans, and partners — there&apos;s a lane for you in the NEXT ecosystem.
              </p>
            </AnimatedItem>
            <AnimatedItem variant="card" className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-next-secondary px-8 py-3 text-base font-medium text-next-secondary transition hover:bg-next-secondary hover:text-next-background"
              >
                Contact the team
              </Link>
              <Link
                href="/artists"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-next-tertiary px-8 py-3 text-base font-medium text-next-background transition hover:bg-next-tertiary/90"
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
