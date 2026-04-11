import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { buildPageMetadata } from "@/lib/page-meta";

export const metadata: Metadata = buildPageMetadata({
  title: "Block Parties",
  description:
    "NEXT block parties bring Afrogospel to the streets — Lagos, Accra, Nairobi, and more with live bands, DJ sets, and fan villages.",
  path: "/block-parties",
});

const cities = [
  {
    city: "Lagos",
    date: "Summer tour",
    note: "Open-air · live band · fan village",
    imageSrc:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&h=520&auto=format&fit=crop",
  },
  {
    city: "Accra",
    date: "Summer tour",
    note: "DJ sets · artist pop-ups",
    imageSrc:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800&h=520&auto=format&fit=crop",
  },
  {
    city: "Nairobi",
    date: "Fall circuit",
    note: "Street choir · merch collabs",
    imageSrc:
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=800&h=520&auto=format&fit=crop",
  },
];

export default function BlockPartiesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <AnimatedSection className="max-w-3xl">
        <AnimatedItem variant="heading">
          <h1 className="font-display text-5xl tracking-wide text-next-text sm:text-6xl">Block parties</h1>
          <p className="mt-4 text-base text-next-text-secondary sm:text-lg">
            The sound leaves the screen. Block parties are where NEXT meets neighborhoods — speakers on corners,
            stages in car parks, and praise that feels like home.
          </p>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection className="mt-14 grid gap-8 lg:grid-cols-3" as="div">
        {cities.map((c) => (
          <AnimatedItem key={c.city} variant="card">
            <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-next-border bg-next-card">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={c.imageSrc}
                  alt={`${c.city} block party atmosphere`}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-display text-3xl text-next-tertiary">{c.city}</p>
                <p className="mt-2 text-sm font-medium text-next-secondary">{c.date}</p>
                <p className="mt-4 text-base text-next-text-secondary">{c.note}</p>
              </div>
            </article>
          </AnimatedItem>
        ))}
      </AnimatedSection>
    </div>
  );
}
