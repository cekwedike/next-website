import type { Metadata } from "next";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { KcaTiers } from "@/components/KcaTiers";
import { buildPageMetadata } from "@/lib/page-meta";

export const metadata: Metadata = buildPageMetadata({
  title: "KCA",
  description:
    "NEXT at the Kingdom Choice Awards — live medleys, alumni spotlights, and the big-stage Afrogospel moment with Energize Music.",
  path: "/kca",
});

export default function KcaPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <AnimatedSection className="max-w-3xl">
        <AnimatedItem variant="heading">
          <h1 className="font-display text-5xl tracking-wide text-next-text sm:text-6xl">KCA</h1>
          <p className="mt-4 text-base text-next-text-secondary sm:text-lg">
            The Kingdom Choice Awards moment is where NEXT alumni step into the lights they earned. Expect
            medleys, surprise features, and a night that celebrates faith-driven artistry without compromise.
          </p>
        </AnimatedItem>
        <AnimatedItem variant="card">
          <div className="mt-10 rounded-2xl border border-next-border bg-next-card p-6 sm:p-8">
            <h2 className="font-display text-xl text-next-tertiary sm:text-2xl">On the night</h2>
            <p className="mt-3 text-base text-next-text-secondary sm:text-lg">
              Red carpet interviews, live voting recaps, and a closing performance led by Energize Music&apos;s
              creative director alongside the season&apos;s top three.
            </p>
          </div>
        </AnimatedItem>
      </AnimatedSection>

      <KcaTiers />
    </div>
  );
}
