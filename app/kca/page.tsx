import type { Metadata } from "next";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "KCA",
  description: "NEXT at KCA — Afrogospel on the big stage with Energize Music.",
};

export default function KcaPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <AnimatedSection className="max-w-3xl">
        <AnimatedItem>
          <h1 className="font-display text-5xl tracking-wide text-next-text sm:text-6xl">KCA</h1>
          <p className="mt-4 text-lg text-next-text-secondary">
            The Kingdom Choice Awards moment is where NEXT alumni step into the lights they earned. Expect
            medleys, surprise features, and a night that celebrates faith-driven artistry without compromise.
          </p>
        </AnimatedItem>
        <AnimatedItem>
          <div className="mt-10 rounded-2xl border border-next-border bg-next-card p-6">
            <h2 className="font-display text-xl text-next-tertiary">On the night</h2>
            <p className="mt-3 text-next-text-secondary">
              Red carpet interviews, live voting recaps, and a closing performance led by Energize Music&apos;s
              creative director alongside the season&apos;s top three.
            </p>
          </div>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}
