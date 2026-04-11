"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type EntryType = "artist" | "producer";

type PlaceholderEntry = {
  id: string;
  name: string;
  flag: string;
  genre: string;
  votePercent: number;
  imageSrc: string;
  type: EntryType;
};

const PLACEHOLDERS: PlaceholderEntry[] = [
  {
    id: "1",
    name: "Amara K.",
    flag: "🇳🇬",
    genre: "Afrogospel",
    votePercent: 82,
    imageSrc:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop&q=80",
    type: "artist",
  },
  {
    id: "2",
    name: "DJ Thabo",
    flag: "🇿🇦",
    genre: "Afrobeats",
    votePercent: 64,
    imageSrc:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&q=80",
    type: "producer",
  },
  {
    id: "3",
    name: "Zara M.",
    flag: "🇰🇪",
    genre: "Afrogospel",
    votePercent: 71,
    imageSrc:
      "https://images.unsplash.com/photo-1520872024865-3ff2805d6291?w=400&h=400&fit=crop&q=80",
    type: "artist",
  },
  {
    id: "4",
    name: "Kofi Beats",
    flag: "🇬🇭",
    genre: "Gospel drill",
    votePercent: 58,
    imageSrc:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=400&fit=crop&q=80",
    type: "producer",
  },
  {
    id: "5",
    name: "Naledi S.",
    flag: "🇿🇦",
    genre: "Afrogospel",
    votePercent: 76,
    imageSrc:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=400&fit=crop&q=80",
    type: "artist",
  },
  {
    id: "6",
    name: "Emeka Sound",
    flag: "🇳🇬",
    genre: "Afrogospel pop",
    votePercent: 69,
    imageSrc:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop&q=80",
    type: "producer",
  },
];

const tabs = [
  { id: "all" as const, label: "All" },
  { id: "artist" as const, label: "Artists" },
  { id: "producer" as const, label: "Producers" },
];

export function VoteArtistGrid() {
  const [filter, setFilter] = useState<(typeof tabs)[number]["id"]>("all");

  const visible = useMemo(() => {
    if (filter === "all") return PLACEHOLDERS;
    return PLACEHOLDERS.filter((p) => p.type === filter);
  }, [filter]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2 border-b border-next-border pb-6"
        role="tablist"
        aria-label="Filter entries"
      >
        {tabs.map((t) => {
          const active = filter === t.id;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(t.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                active
                  ? "bg-next-secondary text-next-background"
                  : "border border-next-border bg-next-card text-next-text-secondary hover:border-next-primary/40 hover:text-next-text"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((entry) => (
          <article
            key={entry.id}
            className="group relative overflow-hidden rounded-2xl border border-next-border bg-next-card/80 p-5 transition-shadow duration-300 hover:border-next-primary/50 hover:shadow-[0_0_40px_rgba(255,0,85,0.22)]"
          >
            <div className="flex gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-next-border transition group-hover:ring-next-primary/60">
                <Image
                  src={entry.imageSrc}
                  alt={entry.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate font-display text-2xl tracking-wide text-next-text">
                  {entry.name}
                </h3>
                <p className="mt-1 text-lg" aria-hidden>
                  {entry.flag}
                </p>
                <span className="mt-2 inline-block rounded-full border border-next-secondary/40 bg-next-secondary/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-next-secondary">
                  {entry.genre}
                </span>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center justify-between text-xs font-medium text-next-text-secondary">
                <span>Votes</span>
                <span className="font-bold text-next-primary">{entry.votePercent}%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-next-background">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-next-primary to-next-primary/70 transition-all duration-500 group-hover:shadow-[0_0_12px_rgba(255,0,85,0.8)]"
                  style={{ width: `${entry.votePercent}%` }}
                />
              </div>
            </div>

            <button
              type="button"
              className="mt-5 w-full rounded-full bg-next-primary py-3 text-sm font-bold text-white transition hover:bg-next-primary/90"
            >
              Vote
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
