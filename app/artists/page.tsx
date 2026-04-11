import type { Metadata } from "next";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { ArtistCard } from "@/components/ArtistCard";
import { buildPageMetadata } from "@/lib/page-meta";

export const metadata: Metadata = buildPageMetadata({
  title: "Artists",
  description:
    "Meet NEXT season artists — Afrogospel vocalists from Lagos, Accra, Kinshasa, London, and beyond. Follow drops and voting rounds.",
  path: "/artists",
});

const artists = [
  {
    name: "Amara K.",
    tagline: "Lagos · Worship trap",
    imageSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&h=1000&auto=format&fit=crop",
  },
  {
    name: "Jay Theo",
    tagline: "Accra · Afro choir",
    imageSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&h=1000&auto=format&fit=crop",
  },
  {
    name: "Zola Mbemba",
    tagline: "Kinshasa · Gospel drill",
    imageSrc:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&h=1000&auto=format&fit=crop",
  },
  {
    name: "Naledi",
    tagline: "Joburg · House praise",
    imageSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&h=1000&auto=format&fit=crop",
  },
  {
    name: "Elijah Park",
    tagline: "London · Alt Afrogospel",
    imageSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&h=1000&auto=format&fit=crop",
  },
  {
    name: "Temi O.",
    tagline: "Houston · R&B sanctified",
    imageSrc:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&h=1000&auto=format&fit=crop",
  },
];

export default function ArtistsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <AnimatedSection className="max-w-3xl">
        <AnimatedItem variant="heading">
          <h1 className="font-display text-5xl tracking-wide text-next-text sm:text-6xl">Artists</h1>
          <p className="mt-4 text-base text-next-text-secondary sm:text-lg">
            Season roster highlights — names and sounds are updated as the competition unfolds. Tap in to follow
            their drops and vote weeks.
          </p>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" as="div">
        {artists.map((a) => (
          <AnimatedItem key={a.name} variant="card">
            <ArtistCard name={a.name} tagline={a.tagline} imageSrc={a.imageSrc} />
          </AnimatedItem>
        ))}
      </AnimatedSection>
    </div>
  );
}
