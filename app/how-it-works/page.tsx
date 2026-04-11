import type { Metadata } from "next";
import { Fragment } from "react";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { HowItWorksTimelineLine } from "@/components/HowItWorksTimeline";
import { buildPageMetadata } from "@/lib/page-meta";

export const metadata: Metadata = buildPageMetadata({
  title: "How It Works",
  description:
    "Virtual auditions across Africa, social showcase, public voting, ENERGIZE Afrogospel Album sessions, pan-African block parties, and the grand launch concert—how NEXT moves from submission to anthem.",
  path: "/how-it-works",
});

const accentRing: Record<"primary" | "secondary" | "tertiary", string> = {
  primary: "ring-next-primary/40 shadow-[0_0_24px_rgba(255,0,85,0.12)]",
  secondary: "ring-next-secondary/40 shadow-[0_0_24px_rgba(0,229,204,0.12)]",
  tertiary: "ring-next-tertiary/40 shadow-[0_0_24px_rgba(255,215,0,0.12)]",
};

const accentText: Record<"primary" | "secondary" | "tertiary", string> = {
  primary: "text-next-primary",
  secondary: "text-next-secondary",
  tertiary: "text-next-tertiary",
};

const phases = [
  {
    badge: "Phase 01",
    heading: "Virtual Auditions Across Africa",
    description:
      "Artists and producers from across Africa submit their music through the NEXT online portal. Our panel of judges reviews every submission and selects the top 50 artists and top 50 producers. No location barrier. If you have talent, you can enter.",
    details: ["Open to all African nations", "Online submission only", "Judges select Top 50"],
    accent: "primary" as const,
    num: "01",
  },
  {
    badge: "Phase 02",
    heading: "Get Your Music Heard",
    description:
      "The top 50 artists and producers get their work showcased on Energize Music's social media platforms across Africa. This is your first real taste of a global stage.",
    details: ["Social media showcase", "50 featured artists", "Pan-African audience"],
    accent: "secondary" as const,
    num: "02",
  },
  {
    badge: "Phase 03",
    heading: "Your Voice, Your Choice",
    description:
      "The public votes to narrow the top 50 down to the top 20. Every fan has a voice. Vote for your favorite, share the link, and help decide who makes it to the next level.",
    details: ["Free public voting", "3 weeks of voting", "Top 20 advance"],
    accent: "tertiary" as const,
    num: "03",
  },
  {
    badge: "Phase 04",
    heading: "History Gets Made in the Studio",
    description:
      "Before the world hears them live, the top 10 artists go into the studio and collaborate with renowned Afrogospel musicians to create the ENERGIZE Afrogospel Album. This phase runs behind the scenes while the world waits. Studio snippets, behind the scenes content, and artist features keep the audience locked in.",
    details: ["Top 10 artists featured", "Professional studio sessions", "Pan-African collaboration"],
    accent: "primary" as const,
    num: "04",
  },
  {
    badge: "Phase 05",
    heading: "Pan-African Afrogospel Block Parties",
    description:
      "Now the top 20 take the album energy to the streets. They headline block parties across Africa, previewing tracks from the album, building hype for the release, and celebrating Afrogospel with their communities live. These are not just concerts. They are album preview parties.",
    details: ["20 cities across Africa", "Live album previews", "Community celebrations"],
    accent: "secondary" as const,
    num: "05",
  },
  {
    badge: "Phase 06",
    heading: "The Grand Finale",
    description:
      "The journey that started in May ends here. The ENERGIZE Afrogospel Album officially drops. The top 10 perform live at a major launch concert. The movement becomes permanent. This is the moment everything has been building toward.",
    details: ["Major live concert", "Official album release", "Historic moment for Afrogospel"],
    accent: "tertiary" as const,
    num: "06",
  },
];

const timelineBar = [
  { month: "May", label: "Submit" },
  { month: "June", label: "Top 50 + Vote" },
  { month: "July / Aug", label: "Studio" },
  { month: "September", label: "Block Parties" },
  { month: "October", label: "Concert" },
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <AnimatedSection className="max-w-3xl">
        <AnimatedItem variant="heading">
          <h1 className="font-display text-5xl tracking-wide text-next-text sm:text-6xl">
            How it works
          </h1>
          <p className="mt-4 text-base text-next-text-secondary sm:text-lg">
            Transparency is part of the culture. Here&apos;s how a season of NEXT moves from idea to anthem.
          </p>
        </AnimatedItem>
      </AnimatedSection>

      <div className="relative mt-16 pl-10 md:pl-8">
        <HowItWorksTimelineLine />
        {phases.map((phase, index) => (
          <AnimatedSection
            key={phase.badge}
            className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14 ${index > 0 ? "mt-20" : ""}`}
            as="div"
          >
            <AnimatedItem
              variant="card"
              className={index % 2 === 1 ? "lg:order-2" : undefined}
            >
              <article
                className={`rounded-2xl border border-next-border bg-next-card p-6 ring-1 sm:p-8 ${accentRing[phase.accent]}`}
              >
                <p
                  className={`font-display text-sm tracking-[0.2em] ${accentText[phase.accent]}`}
                >
                  {phase.badge}
                </p>
                <h2 className="mt-2 font-display text-3xl tracking-wide text-next-text sm:text-4xl">
                  {phase.heading}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-next-text-secondary sm:text-lg">
                  {phase.description}
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {phase.details.map((detail) => (
                    <div
                      key={detail}
                      className="rounded-xl border border-next-border bg-next-background/30 px-4 py-3 text-center text-sm font-medium leading-snug text-next-text"
                    >
                      {detail}
                    </div>
                  ))}
                </div>
              </article>
            </AnimatedItem>
            <AnimatedItem
              variant="image"
              className={`flex justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}
            >
              <div
                className={`flex aspect-[4/3] w-full max-w-lg items-center justify-center rounded-2xl border border-next-border bg-next-card/80 ring-1 ${accentRing[phase.accent]}`}
              >
                <span
                  className={`font-display text-7xl tracking-wide sm:text-8xl ${accentText[phase.accent]} opacity-90`}
                  aria-hidden
                >
                  {phase.num}
                </span>
              </div>
            </AnimatedItem>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="mt-24 border-t border-next-border pt-16" as="div">
        <AnimatedItem variant="heading" className="text-center">
          <h2 className="font-display text-2xl tracking-wide text-next-text sm:text-3xl">
            Season at a glance
          </h2>
          <p className="mt-2 text-sm text-next-text-secondary sm:text-base">
            May (Submit) → June (Top 50 + Vote) → July/Aug (Studio) → September (Block Parties) → October
            (Concert)
          </p>
        </AnimatedItem>
        <AnimatedItem variant="card" className="mt-10">
          <div className="rounded-2xl border border-next-border bg-next-card p-6 sm:p-8">
            <ol className="flex flex-col gap-4 sm:hidden">
              {timelineBar.map((step, i) => (
                <li key={step.month}>
                  <div className="flex flex-col rounded-xl border border-next-border bg-next-background/20 px-4 py-3 text-center">
                    <span className="font-display text-lg text-next-text">{step.month}</span>
                    <span className="mt-1 text-sm font-medium text-next-secondary">{step.label}</span>
                  </div>
                  {i < timelineBar.length - 1 ? (
                    <div className="flex justify-center py-2 text-next-tertiary" aria-hidden>
                      ↓
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
            <div className="hidden sm:flex sm:w-full sm:items-start sm:justify-between">
              {timelineBar.map((step, i) => (
                <Fragment key={step.month}>
                  <div className="flex min-w-0 flex-1 flex-col items-center px-1 text-center lg:px-2">
                    <span className="font-display text-lg text-next-text lg:text-xl">{step.month}</span>
                    <span className="mt-1 text-sm font-medium text-next-secondary">{step.label}</span>
                  </div>
                  {i < timelineBar.length - 1 ? (
                    <span
                      className="shrink-0 self-center px-1 font-display text-xl text-next-tertiary lg:px-2"
                      aria-hidden
                    >
                      ›
                    </span>
                  ) : null}
                </Fragment>
              ))}
            </div>
          </div>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}
