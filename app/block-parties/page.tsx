import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Block Parties",
  description:
    "Pan-African Afrogospel block parties — the top 20 artists live in cities across Africa, July 2025.",
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1920&q=80";

const cities = [
  {
    city: "Lagos",
    country: "Nigeria",
    image:
      "https://images.unsplash.com/photo-1612550761236-e493c7a0fdde?w=800&q=80",
  },
  {
    city: "Accra",
    country: "Ghana",
    image:
      "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80",
  },
  {
    city: "Nairobi",
    country: "Kenya",
    image:
      "https://images.unsplash.com/photo-1601581875305-f0ba3c0b1a1e?w=800&q=80",
  },
  {
    city: "Johannesburg",
    country: "South Africa",
    image:
      "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=800&q=80",
  },
  {
    city: "Kampala",
    country: "Uganda",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
  },
  {
    city: "Abidjan",
    country: "Côte d'Ivoire",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80",
  },
];

function ExpectColumn({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-next-border bg-next-card/60 p-8 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-next-secondary/15 text-next-secondary">
        {icon}
      </div>
      <h3 className="mt-6 font-display text-xl tracking-wide text-next-text">{title}</h3>
      <p className="mt-3 text-sm text-next-text-secondary">{body}</p>
    </div>
  );
}

export default function BlockPartiesPage() {
  return (
    <div className="relative">
      <section className="relative min-h-[70vh] overflow-hidden border-b border-next-border">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-next-background via-next-background/75 to-next-background/40" />
        <div className="absolute inset-0 bg-next-background/50" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-24 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <AnimatedItem>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-next-secondary">
                Coming July 2025
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-wide text-next-text sm:text-5xl lg:text-6xl">
                Pan-African Afrogospel Block Parties
              </h1>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-6 max-w-xl text-lg text-next-text-secondary">
                The top 20 artists take the stage in cities across Africa.
              </p>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <AnimatedItem>
              <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">On the road</h2>
              <p className="mt-2 max-w-2xl text-next-text-secondary">
                Six cities, one movement — details drop soon. Tap notify to hear first.
              </p>
            </AnimatedItem>
            <AnimatedItem className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cities.map((c) => (
                <article
                  key={c.city}
                  className="group relative overflow-hidden rounded-2xl border border-next-border"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={c.image}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-next-background via-next-background/70 to-transparent" />
                  </div>
                  <div className="relative -mt-24 space-y-3 p-6">
                    <h3 className="font-display text-3xl text-next-text">{c.city}</h3>
                    <p className="text-sm font-medium text-next-secondary">{c.country}</p>
                    <dl className="space-y-1 text-sm text-next-text-secondary">
                      <div className="flex justify-between gap-4">
                        <dt>Event date</dt>
                        <dd className="font-medium text-next-text">TBA</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt>Headlining</dt>
                        <dd className="font-medium text-next-text">TBA</dd>
                      </div>
                    </dl>
                    <button
                      type="button"
                      className="mt-4 w-full rounded-full border border-next-secondary bg-next-secondary/10 py-3 text-sm font-bold text-next-secondary transition hover:bg-next-secondary hover:text-next-background"
                    >
                      Notify Me
                    </button>
                  </div>
                </article>
              ))}
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-next-border bg-next-card/25 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <AnimatedItem className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">
                What to expect at a NEXT Block Party
              </h2>
            </AnimatedItem>
            <AnimatedItem className="mt-12 grid gap-6 md:grid-cols-3">
              <ExpectColumn
                title="Live Afrogospel performances"
                body="High-energy sets from the artists you voted for — sound systems, live bands, and moments you will replay for years."
                icon={
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                }
              />
              <ExpectColumn
                title="Community worship and celebration"
                body="Street-level praise — strangers become family when the bass drops and the chorus hits together."
                icon={
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                }
              />
              <ExpectColumn
                title="Meet the artists"
                body="Pop-up meet-and-greets, merch, and photo moments with the voices shaping Afrogospel."
                icon={
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                }
              />
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
