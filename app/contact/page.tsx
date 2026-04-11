import type { Metadata } from "next";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { NewsletterForm } from "@/components/NewsletterForm";
import { buildPageMetadata } from "@/lib/page-meta";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Reach NEXT and Energize Music for sponsorships, press, licensing, and artist submissions — we reply to every message that respects the mission.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <AnimatedSection className="max-w-3xl">
        <AnimatedItem variant="heading">
          <h1 className="font-display text-5xl tracking-wide text-next-text sm:text-6xl">Contact</h1>
          <p className="mt-4 text-base text-next-text-secondary sm:text-lg">
            For sponsorships, licensing, press, and artist submissions, reach the Energize Music team. We read
            every message that respects the mission.
          </p>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection className="mt-12 grid gap-8 lg:grid-cols-2" as="div">
        <AnimatedItem variant="card">
          <div className="rounded-2xl border border-next-border bg-next-card p-6 sm:p-8">
            <h2 className="font-display text-xl text-next-text sm:text-2xl">General</h2>
            <p className="mt-2 text-base text-next-text-secondary sm:text-lg">hello@energizemusic.example</p>
            <p className="mt-4 text-sm leading-relaxed text-next-text-secondary sm:text-base">
              Response within 3–5 business days. Include your city and whether you&apos;re artist, brand, or
              media.
            </p>
          </div>
        </AnimatedItem>
        <AnimatedItem variant="card">
          <div className="rounded-2xl border border-next-border bg-next-card p-6 sm:p-8">
            <h2 className="font-display text-xl text-next-text sm:text-2xl">Press kit</h2>
            <p className="mt-2 text-base text-next-text-secondary sm:text-lg">press@energizemusic.example</p>
            <p className="mt-4 text-sm leading-relaxed text-next-text-secondary sm:text-base">
              Logos, season one-pagers, and approved imagery for editorial use.
            </p>
          </div>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection className="mt-16 text-center" as="div">
        <AnimatedItem variant="heading">
          <h2 className="font-display text-2xl tracking-wide text-next-text sm:text-3xl">
            Stay on the list
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-next-text-secondary sm:text-lg">
            Get audition dates, voting windows, and tour announcements. Unsubscribe anytime.
          </p>
        </AnimatedItem>
        <AnimatedItem variant="card" className="mt-8">
          <NewsletterForm />
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}
