import type { Metadata } from "next";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { PhaseCard } from "@/components/PhaseCard";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Auditions, incubator weeks, voting, and the road to the NEXT finale.",
};

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <AnimatedSection className="max-w-3xl">
        <AnimatedItem>
          <h1 className="font-display text-5xl tracking-wide text-next-text sm:text-6xl">How it works</h1>
          <p className="mt-4 text-lg text-next-text-secondary">
            Transparency is part of the culture. Here&apos;s how a season of NEXT moves from idea to anthem.
          </p>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection className="mt-16 grid gap-6 md:grid-cols-2">
        <AnimatedItem>
          <PhaseCard
            phase="Submit"
            title="Send your story"
            description="Upload your performance video, bio, and hometown. Our team reviews every entry — no bots, no black boxes."
            accent="primary"
          />
        </AnimatedItem>
        <AnimatedItem>
          <PhaseCard
            phase="Shortlist"
            title="Live moments"
            description="Selected artists are invited to in-person or streamed callbacks. Energy matters as much as technique."
            accent="secondary"
          />
        </AnimatedItem>
        <AnimatedItem>
          <PhaseCard
            phase="Incubator"
            title="Studio & stage labs"
            description="Weekly intensives: arrangement, stage presence, brand voice, and collaborative sessions with producers."
            accent="tertiary"
          />
        </AnimatedItem>
        <AnimatedItem>
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
