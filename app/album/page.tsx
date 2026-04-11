import type { Metadata } from "next";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Album",
  description: "The NEXT season compilation — Afrogospel from the incubator to your playlist.",
};

export default function AlbumPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <AnimatedSection className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <AnimatedItem>
          <h1 className="font-display text-5xl tracking-wide text-next-text sm:text-6xl">The album</h1>
          <p className="mt-4 text-lg text-next-text-secondary">
            Each season, NEXT artists record original cuts alongside remixes of classics — mastered for
            streaming, radio, and Sunday playlists. Proceeds support the next cohort&apos;s studio time.
          </p>
          <ul className="mt-8 space-y-3 text-next-text-secondary">
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
        <AnimatedItem>
          <div className="aspect-square max-w-md rounded-3xl border border-next-border bg-gradient-to-br from-next-primary/25 via-next-background to-next-secondary/20 p-8 shadow-[0_0_60px_rgba(255,0,85,0.15)]">
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-next-border bg-next-card/80 text-center">
              <p className="font-display text-sm tracking-[0.3em] text-next-secondary">Coming soon</p>
              <p className="mt-4 font-display text-4xl text-next-text">NEXT · Vol. 1</p>
              <p className="mt-2 text-sm text-next-text-secondary">Afrogospel anthology</p>
            </div>
          </div>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}
