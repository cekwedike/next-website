import type { Metadata } from "next";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { HowItWorksTimelineLine } from "@/components/HowItWorksTimeline";
import { PhaseCard } from "@/components/PhaseCard";
import { buildPageMetadata } from "@/lib/page-meta";

export const metadata: Metadata = buildPageMetadata({
  title: "How It Works",
  description:
    "From submission to finale: auditions, incubator labs, public voting, and the NEXT Afrogospel season roadmap explained step by step.",
  path: "/how-it-works",
});

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

      <AnimatedSection
        className="relative mt-16 grid gap-8 pl-10 md:grid-cols-2 md:gap-10 md:pl-8"
        as="div"
      >
        <HowItWorksTimelineLine />
        <AnimatedItem variant="card">
          <PhaseCard
            phase="Submit"
            title="Send your story"
            description="Upload your performance video, bio, and hometown. Our team reviews every entry — no bots, no black boxes."
            accent="primary"
          />
        </AnimatedItem>
        <AnimatedItem variant="card">
          <PhaseCard
            phase="Shortlist"
            title="Live moments"
            description="Selected artists are invited to in-person or streamed callbacks. Energy matters as much as technique."
            accent="secondary"
          />
        </AnimatedItem>
        <AnimatedItem variant="card">
          <PhaseCard
            phase="Incubator"
            title="Studio & stage labs"
            description="Weekly intensives: arrangement, stage presence, brand voice, and collaborative sessions with producers."
            accent="tertiary"
          />
        </AnimatedItem>
        <AnimatedItem variant="card">
          <PhaseCard
            phase="Finale"
            title="Fans + judges"
            description="Public voting meets industry panel scores. The album drops. Block parties go city-wide."
            accent="primary"
          />
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}
