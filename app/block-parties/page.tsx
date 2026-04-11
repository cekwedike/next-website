import type { Metadata } from "next";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Block Parties",
  description: "NEXT block parties — Afrogospel in the streets, city by city.",
};

const cities = [
  { city: "Lagos", date: "Summer tour", note: "Open-air · live band · fan village" },
  { city: "Accra", date: "Summer tour", note: "DJ sets · artist pop-ups" },
  { city: "Nairobi", date: "Fall circuit", note: "Street choir · merch collabs" },
];

export default function BlockPartiesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <AnimatedSection className="max-w-3xl">
        <AnimatedItem>
          <h1 className="font-display text-5xl tracking-wide text-next-text sm:text-6xl">Block parties</h1>
          <p className="mt-4 text-lg text-next-text-secondary">
            The sound leaves the screen. Block parties are where NEXT meets neighborhoods — speakers on corners,
            stages in car parks, and praise that feels like home.
          </p>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection className="mt-14 grid gap-6 lg:grid-cols-3">
        {cities.map((c) => (
          <AnimatedItem key={c.city}>
            <article className="h-full rounded-2xl border border-next-border bg-next-card p-6">
              <p className="font-display text-3xl text-next-tertiary">{c.city}</p>
              <p className="mt-2 text-sm font-medium text-next-secondary">{c.date}</p>
              <p className="mt-4 text-sm text-next-text-secondary">{c.note}</p>
            </article>
          </AnimatedItem>
        ))}
      </AnimatedSection>
    </div>
  );
}
