import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Six phases from virtual auditions across Africa to the album launch concert — how NEXT finds and builds Afrogospel talent.",
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=2000&q=80";

const phases = [
  {
    badge: "Phase 01",
    title: "Virtual Auditions Across Africa",
    description:
      "Artists and producers from across Africa submit their music through the NEXT online portal. Our panel of judges reviews every submission and selects the top 50 artists and top 50 producers. No location barrier. If you have talent, you can enter.",
    details: ["Open to all African nations", "Online submission only", "Judges select Top 50"],
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Concert crowd with stage lights",
  },
  {
    badge: "Phase 02",
    title: "Get Your Music Heard",
    description:
      "The top 50 artists and producers get their work showcased on Energize Music's social media platforms across Africa. This is your first taste of a global stage.",
    details: ["Social media showcase", "50 featured artists", "Pan-African audience"],
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Person listening to music on headphones",
  },
  {
    badge: "Phase 03",
    title: "Your Voice, Your Choice (Public Voting)",
    description:
      "The public votes to narrow the top 50 down to the top 20. Every fan has a voice. Vote for your favorite artist, share the link, and help shape the future of Afrogospel.",
    details: ["Free public voting", "3 weeks of voting", "Top 20 advance"],
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Live music performance with colorful lights",
  },
  {
    badge: "Phase 04",
    title: "Pan-African Block Parties",
    description:
      "The top 20 artists headline block parties in cities across Africa. Live performance. Real crowds. This is where the energy of Afrogospel meets the streets.",
    details: ["20 cities across Africa", "Live performances", "Community celebrations"],
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Outdoor crowd at a music event",
  },
  {
    badge: "Phase 05",
    title: "ENERGIZE Afrogospel Album",
    description:
      "The top 10 artists collaborate with renowned Afrogospel musicians to create a groundbreaking album. This is not just a record. This is history.",
    details: ["Top 10 artists featured", "Professional studio sessions", "Pan-African collaboration"],
    image:
      "https://images.unsplash.com/photo-1598488035139-bdcb742b0b28?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Music studio mixing console",
  },
  {
    badge: "Phase 06",
    title: "Album Launch Concert",
    description:
      "We close with the ultimate celebration. A major concert to launch the Afrogospel album. The top 10 perform live. The album drops. The movement becomes permanent.",
    details: ["Major live concert", "Album release", "Historic moment"],
    image:
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Concert stage and audience",
  },
] as const;

const timelineSteps = [
  { month: "May", label: "Submit", status: "completed" as const },
  { month: "June", label: "Top 50 + Vote", status: "current" as const },
  { month: "July / Aug", label: "Block Parties", status: "upcoming" as const },
  { month: "Aug / Sep", label: "Studio", status: "upcoming" as const },
  { month: "October", label: "Concert", status: "upcoming" as const },
];

function TimelineDot({ status }: { status: "completed" | "current" | "upcoming" }) {
  const color =
    status === "completed"
      ? "bg-next-primary shadow-[0_0_16px_rgba(255,0,85,0.55)]"
      : status === "current"
        ? "bg-next-secondary shadow-[0_0_16px_rgba(0,229,204,0.45)]"
        : "bg-next-text-secondary/40";
  return (
    <span
      className={`relative z-[1] inline-flex h-3.5 w-3.5 shrink-0 rounded-full ring-4 ring-next-background ${color}`}
      aria-hidden
    />
  );
}

export default function HowItWorksPage() {
  return (
    <div className="relative">
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden border-b border-next-border">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          className="object-cover object-center brightness-[0.35] saturate-[0.85]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-next-background" />
        <div className="absolute inset-0 bg-next-secondary/[0.06]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <AnimatedSection as="div">
            <AnimatedItem>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-next-secondary">
                The Journey
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <h1 className="mt-4 font-display text-5xl tracking-wide text-next-text sm:text-6xl md:text-7xl">
                How NEXT Works
              </h1>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-next-text-secondary sm:text-xl">
                Six phases. One mission. To find and build Africa&apos;s greatest Afrogospel talents.
              </p>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {phases.map((phase, index) => {
          const reverse = index % 2 === 1;
          return (
            <AnimatedSection
              key={phase.badge}
              className={`mb-20 last:mb-0 lg:mb-28 ${index > 0 ? "border-t border-next-border pt-20 lg:pt-28" : ""}`}
            >
              <div
                className={`flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14 ${reverse ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="relative aspect-[4/3] w-full flex-1 overflow-hidden rounded-2xl border border-next-border bg-next-card lg:aspect-[5/4]">
                  <Image
                    src={phase.image}
                    alt={phase.imageAlt}
                    fill
                    className="object-cover brightness-[0.55]"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                </div>
                <div className="flex-1">
                  <AnimatedItem>
                    <span className="inline-block rounded-full border border-next-secondary/40 bg-next-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-next-secondary">
                      {phase.badge}
                    </span>
                    <h2 className="mt-4 font-display text-3xl tracking-wide text-next-text sm:text-4xl">
                      {phase.title}
                    </h2>
                    <p className="mt-4 text-next-text-secondary">{phase.description}</p>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                      {phase.details.map((d) => (
                        <li
                          key={d}
                          className="rounded-xl border border-next-border bg-next-card/80 px-4 py-3 text-sm font-medium text-next-text"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </AnimatedItem>
                </div>
              </div>
            </AnimatedSection>
          );
        })}

        <AnimatedSection className="mt-8 rounded-2xl border border-next-border bg-next-card/60 p-6 sm:p-10">
          <AnimatedItem>
            <h2 className="font-display text-2xl tracking-wide text-next-text sm:text-3xl">Season timeline</h2>
            <p className="mt-2 max-w-2xl text-sm text-next-text-secondary">
              Key milestones for the NEXT season. Completed steps in pink, current phase in teal, upcoming in
              grey.
            </p>
          </AnimatedItem>
          <AnimatedItem className="mt-10">
            <div className="overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch]">
              <div className="relative flex min-w-[640px] items-start justify-between gap-2 px-2 sm:min-w-0 sm:px-0">
                <div
                  className="absolute left-0 right-0 top-[7px] h-px bg-next-border sm:left-[4%] sm:right-[4%]"
                  aria-hidden
                />
                {timelineSteps.map((step) => (
                  <div
                    key={step.month}
                    className="relative flex w-[18%] min-w-[5.5rem] flex-col items-center text-center"
                  >
                    <TimelineDot status={step.status} />
                    <p className="mt-4 font-display text-lg text-next-text sm:text-xl">{step.month}</p>
                    <p className="mt-1 text-xs text-next-text-secondary sm:text-sm">{step.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-next-text-secondary">
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-next-primary" /> Completed
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-next-secondary" /> Current
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-next-text-secondary/40" /> Upcoming
              </span>
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </div>
  );
}
