import type { Metadata } from "next";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { ArtistCard } from "@/components/ArtistCard";

export const metadata: Metadata = {
  title: "Artists",
  description: "Discover NEXT artists — Afrogospel voices in the incubator and on stage.",
};

const artists = [
  { name: "Amara K.", tagline: "Lagos · Worship trap" },
  { name: "Jay Theo", tagline: "Accra · Afro choir" },
  { name: "Zola Mbemba", tagline: "Kinshasa · Gospel drill" },
  { name: "Naledi", tagline: "Joburg · House praise" },
  { name: "Elijah Park", tagline: "London · Alt Afrogospel" },
  { name: "Temi O.", tagline: "Houston · R&B sanctified" },
];

export default function ArtistsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <AnimatedSection className="max-w-3xl">
        <AnimatedItem>
          <h1 className="font-display text-5xl tracking-wide text-next-text sm:text-6xl">Artists</h1>
          <p className="mt-4 text-lg text-next-text-secondary">
            Season roster highlights — names and sounds are updated as the competition unfolds. Tap in to follow
            their drops and vote weeks.
          </p>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artists.map((a) => (
          <AnimatedItem key={a.name}>
            <ArtistCard name={a.name} tagline={a.tagline} />
          </AnimatedItem>
        ))}
      </AnimatedSection>
    </div>
  );
}
