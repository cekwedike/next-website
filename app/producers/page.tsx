import type { Metadata } from "next";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Producers",
  description: "Production partners and beat architects shaping the NEXT Afrogospel sound.",
};

const producers = [
  {
    name: "Kojo Beats",
    role: "Executive production · Afrobeats fusion",
  },
  {
    name: "Nomsa Keys",
    role: "Live arrangement · Choir stacks",
  },
  {
    name: "Ilé Drum",
    role: "Percussion · Block party energy",
  },
];

export default function ProducersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <AnimatedSection className="max-w-3xl">
        <AnimatedItem>
          <h1 className="font-display text-5xl tracking-wide text-next-text sm:text-6xl">Producers</h1>
          <p className="mt-4 text-lg text-next-text-secondary">
            NEXT sessions are helmed by producers who respect church roots and club tempo. They stretch artists
            without stripping their conviction.
          </p>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection className="mt-14 grid gap-6 md:grid-cols-3">
        {producers.map((p) => (
          <AnimatedItem key={p.name}>
            <article className="rounded-2xl border border-next-border bg-next-card p-6">
              <h2 className="font-display text-2xl text-next-text">{p.name}</h2>
              <p className="mt-2 text-sm text-next-secondary">{p.role}</p>
              <p className="mt-4 text-sm text-next-text-secondary">
                Collaborative credits include incubator weeks, the season compilation, and live band arrangements
                for finales.
              </p>
            </article>
          </AnimatedItem>
        ))}
      </AnimatedSection>
    </div>
  );
}
