import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { VinylDisc } from "@/components/VinylDisc";
import { buildPageMetadata } from "@/lib/page-meta";

export const metadata: Metadata = buildPageMetadata({
  title: "Album",
  description:
    "NEXT Vol. 1 — season compilation of original Afrogospel cuts, acoustic versions, and limited vinyl for core supporters.",
  path: "/album",
});

export default function AlbumPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <AnimatedSection className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <AnimatedItem variant="heading">
          <h1 className="font-display text-5xl tracking-wide text-next-text sm:text-6xl">The album</h1>
          <p className="mt-4 text-base text-next-text-secondary sm:text-lg">
            Each season, NEXT artists record original cuts alongside remixes of classics — mastered for
            streaming, radio, and Sunday playlists. Proceeds support the next cohort&apos;s studio time.
          </p>
          <ul className="mt-8 space-y-3 text-base text-next-text-secondary sm:text-lg">
            <li className="flex gap-2">
              <span className="text-next-primary">▸</span>
              Exclusive season tracks not performed on television
            </li>
            <li className="flex gap-2">
              <span className="text-next-primary">▸</span>
              Producer commentary and stripped acoustic versions
            </li>
            <li className="flex gap-2">
              <span className="text-next-primary">▸</span>
              Limited vinyl for top supporters
            </li>
          </ul>
        </AnimatedItem>
        <AnimatedItem variant="image" className="flex justify-center">
          <div className="w-full max-w-md">
            <VinylDisc />
            <div className="relative mt-10 aspect-[3/2] w-full max-w-md overflow-hidden rounded-2xl border border-next-border">
              <Image
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=900&h=600&auto=format&fit=crop"
                alt="Studio mixing desk with warm lighting"
                width={900}
                height={600}
                loading="lazy"
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </div>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}
