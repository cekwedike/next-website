type PhaseCardProps = {
  phase: string;
  title: string;
  description: string;
  accent?: "primary" | "secondary" | "tertiary";
};

const accentRing: Record<NonNullable<PhaseCardProps["accent"]>, string> = {
  primary: "ring-next-primary/40 shadow-[0_0_24px_rgba(255,0,85,0.12)]",
  secondary: "ring-next-secondary/40 shadow-[0_0_24px_rgba(0,229,204,0.12)]",
  tertiary: "ring-next-tertiary/40 shadow-[0_0_24px_rgba(255,215,0,0.12)]",
};

const accentText: Record<NonNullable<PhaseCardProps["accent"]>, string> = {
  primary: "text-next-primary",
  secondary: "text-next-secondary",
  tertiary: "text-next-tertiary",
};

export function PhaseCard({
  phase,
  title,
  description,
  accent = "primary",
}: PhaseCardProps) {
  return (
    <article
      className={`rounded-2xl border border-next-border bg-next-card p-6 ring-1 ${accentRing[accent]}`}
    >
      <p className={`font-display text-sm tracking-[0.2em] ${accentText[accent]}`}>
        {phase}
      </p>
      <h3 className="mt-2 font-display text-2xl tracking-wide text-next-text md:text-3xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-next-text-secondary md:text-base">
        {description}
      </p>
    </article>
  );
}
