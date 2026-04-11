"use client";

import Image from "next/image";

export function VinylDisc() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="animate-vinyl-10rpm absolute inset-0 rounded-full shadow-[0_0_60px_rgba(255,0,85,0.2)]">
        <Image
          src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d8c02?q=80&w=800&h=800&auto=format&fit=crop"
          alt="Vinyl record artwork for NEXT compilation"
          width={800}
          height={800}
          className="h-full w-full rounded-full object-cover"
          sizes="(max-width: 1024px) 100vw, 400px"
        />
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background:
              "repeating-radial-gradient(circle at 50% 50%, transparent 0px, transparent 3px, rgba(0,0,0,0.12) 3px, rgba(0,0,0,0.12) 4px)",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[22%] w-[22%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-next-background shadow-inner" />
      </div>
    </div>
  );
}
