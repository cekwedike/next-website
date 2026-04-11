import Image from "next/image";

type ArtistCardProps = {
  name: string;
  tagline: string;
  imageSrc?: string;
  href?: string;
};

export function ArtistCard({ name, tagline, imageSrc, href = "#" }: ArtistCardProps) {
  return (
    <a
      href={href}
      className="group block overflow-hidden rounded-2xl border border-next-border bg-next-card ring-1 ring-white/5 transition-transform duration-300 hover:-translate-y-1 hover:border-next-primary/30 hover:ring-next-primary/20"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-next-background">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-next-primary/20 via-next-background to-next-secondary/15">
            <span className="font-display text-6xl text-white/10">{name.slice(0, 1)}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-display text-xl tracking-wide text-next-text md:text-2xl">
            {name}
          </h3>
          <p className="mt-1 text-sm text-next-secondary">{tagline}</p>
        </div>
      </div>
    </a>
  );
}
