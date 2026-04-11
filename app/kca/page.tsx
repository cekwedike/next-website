import type { Metadata } from "next";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Kingdom Creatives Academy",
  description:
    "KCA — the creative development ecosystem behind NEXT. Mentorship, education, and community for Afrogospel artists.",
};

const patternSvg =
  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300E5CC' fill-opacity='0.07'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";

const tiers = [
  {
    tier: "Tier 1",
    title: "All NEXT entrants",
    body: "Every artist and producer who enters NEXT receives KCA community access — forums, resources, and peer connection across Africa.",
    border: "border-next-secondary/50",
  },
  {
    tier: "Tier 2",
    title: "Top 50",
    body: "Break the shortlist and earn KCA featured artist status with a dedicated profile and spotlight in the ecosystem.",
    border: "border-next-secondary/50",
  },
  {
    tier: "Tier 3",
    title: "Top 20",
    body: "Mentorship sessions and coaching from industry leaders who understand Afrogospel and the business around it.",
    border: "border-next-secondary/50",
  },
  {
    tier: "Tier 4",
    title: "Top 10",
    body: "Full KCA onboarding and long-term development — a structured path beyond the competition into sustainable artistry.",
    border: "border-next-primary/70",
    glow: true,
  },
] as const;

export default function KcaPage() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden border-b border-next-border">
        <div
          className="absolute inset-0 bg-next-background"
          style={{ backgroundImage: patternSvg }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-next-background/20 via-next-background/85 to-next-background" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <AnimatedSection className="max-w-3xl">
            <AnimatedItem>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-next-secondary">
                Beyond The Competition
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <h1 className="mt-4 font-display text-4xl tracking-wide text-next-text sm:text-5xl lg:text-6xl">
                Kingdom Creatives Academy
              </h1>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-6 text-lg text-next-text-secondary">
                NEXT is the door. KCA is what&apos;s behind it.
              </p>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedItem>
              <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">What is KCA?</h2>
              <p className="mt-6 text-next-text-secondary">
                Kingdom Creatives Academy is a creative development ecosystem built for Afrogospel artists. It is
                where competition ends and career-building begins — a continuum of mentorship, music business
                education, and recording opportunities designed for faith-driven talent.
              </p>
              <p className="mt-4 text-next-text-secondary">
                Members plug into a continent-wide community of like-minded creatives: producers, vocalists,
                songwriters, and industry operators who believe Afrogospel deserves the same rigor and investment
                as any global genre.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <div className="relative mx-auto aspect-square w-full max-w-sm">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-next-secondary/30 via-next-primary/20 to-transparent blur-3xl" />
                <div className="relative flex h-full w-full items-center justify-center rounded-3xl border border-next-border bg-next-card/80 p-10 shadow-[0_0_60px_rgba(0,229,204,0.15)]">
                  <div className="text-center">
                    <p className="font-display text-6xl tracking-[0.15em] text-next-text sm:text-7xl">KCA</p>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.4em] text-next-secondary">
                      Kingdom Creatives
                    </p>
                    <p className="mt-1 text-xs text-next-text-secondary">Academy</p>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-next-border bg-next-card/20 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <AnimatedItem className="text-center">
              <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">
                NEXT × KCA pipeline
              </h2>
              <p className="mx-auto mt-2 max-w-lg text-next-text-secondary">
                Each milestone unlocks deeper investment in your craft and career.
              </p>
            </AnimatedItem>
            <AnimatedItem className="mt-14">
              <ol className="relative space-y-0">
                {tiers.map((t, i) => (
                  <li key={t.tier} className="relative">
                    {i < tiers.length - 1 ? (
                      <div
                        className="absolute left-6 top-[4.5rem] z-0 h-[calc(100%+0.5rem)] w-px bg-gradient-to-b from-next-secondary/60 to-next-secondary/20 sm:left-8"
                        aria-hidden
                      />
                    ) : null}
                    <article
                      className={`relative z-10 mb-8 rounded-2xl border-2 bg-next-background/80 p-6 pl-16 backdrop-blur-sm sm:pl-20 ${t.border} ${
                        "glow" in t && t.glow
                          ? "shadow-[0_0_40px_rgba(255,0,85,0.15)]"
                          : ""
                      }`}
                    >
                      <div
                        className={`absolute left-3 top-6 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-next-card sm:left-5 sm:h-12 sm:w-12 ${
                          "glow" in t && t.glow
                            ? "border-next-primary text-next-primary"
                            : "border-next-secondary text-next-secondary"
                        }`}
                      >
                        <span className="font-display text-lg sm:text-xl">{i + 1}</span>
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest text-next-secondary">{t.tier}</p>
                      <h3 className="mt-2 font-display text-xl text-next-text">{t.title}</h3>
                      <p className="mt-3 text-sm text-next-text-secondary">{t.body}</p>
                    </article>
                  </li>
                ))}
              </ol>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
