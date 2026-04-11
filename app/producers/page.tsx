import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { buildPageMetadata } from "@/lib/page-meta";

export const metadata: Metadata = buildPageMetadata({
  title: "Producers",
  description:
    "Meet the producers and arrangers shaping the NEXT Afrogospel sound — studio weeks, live bands, and compilation masters.",
  path: "/producers",
});

const producers = [
  {
    name: "Kojo Beats",
    role: "Executive production · Afrobeats fusion",
    imageSrc:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=640&h=480&auto=format&fit=crop",
  },
  {
    name: "Nomsa Keys",
    role: "Live arrangement · Choir stacks",
    imageSrc:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=640&h=480&auto=format&fit=crop",
  },
  {
    name: "Ilé Drum",
    role: "Percussion · Block party energy",
    imageSrc:
      "https://images.unsplash.com/photo-1519892300165-c0d4a46d28ef?q=80&w=640&h=480&auto=format&fit=crop",
  },
];

export default function ProducersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <AnimatedSection className="max-w-3xl">
        <AnimatedItem variant="heading">
          <h1 className="font-display text-5xl tracking-wide text-next-text sm:text-6xl">Producers</h1>
          <p className="mt-4 text-base text-next-text-secondary sm:text-lg">
            NEXT sessions are helmed by producers who respect church roots and club tempo. They stretch artists
            without stripping their conviction.
          </p>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection className="mt-14 grid gap-8 md:grid-cols-3" as="div">
        {producers.map((p) => (
          <AnimatedItem key={p.name} variant="card">
            <article className="overflow-hidden rounded-2xl border border-next-border bg-next-card">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={p.imageSrc}
                  alt={`${p.name} in the studio`}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl text-next-text">{p.name}</h2>
                <p className="mt-2 text-sm text-next-secondary">{p.role}</p>
                <p className="mt-4 text-base text-next-text-secondary">
                  Collaborative credits include incubator weeks, the season compilation, and live band arrangements
                  for finales.
                </p>
              </div>
            </article>
          </AnimatedItem>
        ))}
      </AnimatedSection>
    </div>
  );
}
