import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { CountUpWhenVisible } from "@/components/CountUpWhenVisible";
import { NewsletterForm } from "@/components/NewsletterForm";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1621365827105-1c914889935d?auto=format&fit=crop&w=2400&q=85";

const ARTIST_CARD_IMAGE =
  "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=1600&q=85";

const PRODUCER_CARD_IMAGE =
  "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1600&q=85";

const phaseSteps = [
  {
    n: 1,
    title: "Submit",
    desc: "Send your track and story — we listen to every voice.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M9 18V5l12-2v13" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    n: 2,
    title: "Top 50 Selected",
    desc: "Shortlist announced — your city and continent tune in.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path
          d="M12 14a3 3 0 0 0 3-3V5a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M19 10v1a7 7 0 0 1-14 0v-1" strokeLinecap="round" />
        <path d="M12 19v3M9 22h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: 3,
    title: "Public Votes",
    desc: "Fans rally online — momentum meets merit.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M3 21v-2a4 4 0 0 1 4-4h2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="3" />
        <path d="M15 11a4 4 0 0 1 4 4v2" strokeLinecap="round" />
        <circle cx="17" cy="7" r="3" />
        <path d="M12 11a4 4 0 0 1 4 4v2" strokeLinecap="round" />
        <circle cx="12" cy="7" r="3" />
      </svg>
    ),
  },
  {
    n: 4,
    title: "Block Parties",
    desc: "Street-level energy — NEXT meets the block.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M4 19h16" strokeLinecap="round" />
        <path d="M7 19V10l3-5h4l3 5v9" strokeLinejoin="round" />
        <path d="M10 14h4" strokeLinecap="round" />
        <path d="M2 8l2 2M22 8l-2 2M12 4V2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: 5,
    title: "Album Creation",
    desc: "Studio weeks with producers who speak Afrogospel fluently.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    n: 6,
    title: "Launch Concert",
    desc: "One historic night — album live, lights up, legacy set.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M8 21h8v-3H8v3z" strokeLinejoin="round" />
        <path d="M12 18V10" strokeLinecap="round" />
        <path
          d="M9 4h6l1 6H8l1-6z"
          strokeLinejoin="round"
        />
        <path d="M10 4V3h4v1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const socialRow = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

function PhaseTimelineCard({
  n,
  title,
  desc,
  icon,
  isLast,
}: {
  n: number;
  title: string;
  desc: string;
  icon: ReactNode;
  isLast: boolean;
}) {
  return (
    <div className="relative flex gap-4 md:block md:text-center">
      <div className="flex flex-col items-center md:hidden">
        <span className="flex h-3 w-3 shrink-0 rounded-full bg-next-primary ring-4 ring-next-primary/20" />
        {!isLast ? (
          <span className="my-1 w-0 flex-1 min-h-[2rem] border-l-2 border-dotted border-next-secondary/50" />
        ) : null}
      </div>
      <div className="flex-1 pb-10 md:pb-0">
        <p className="font-display text-lg text-next-primary md:mb-3">0{n}</p>
        <div className="mx-auto mb-4 hidden h-14 w-14 items-center justify-center rounded-full border border-next-secondary/55 bg-next-background text-next-secondary md:flex">
          {icon}
        </div>
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-next-secondary/55 bg-next-card text-next-secondary md:hidden">
          {icon}
        </div>
        <h3 className="text-base font-bold text-next-text">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-next-text-secondary">{desc}</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="relative">
      {/* Section 1 — Hero */}
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-4 pb-28 pt-28 text-center sm:px-6 sm:pb-32 sm:pt-32">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/78" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/65 to-next-background"
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-next-secondary sm:text-xs">
            Energize Music Presents
          </p>

          <h1 className="mt-5 font-display leading-[0.92] tracking-wide">
            <span className="block text-[clamp(2.5rem,10vw,5rem)] text-next-text sm:text-[clamp(3rem,11vw,6rem)]">
              The
            </span>
            <span className="mt-1 block bg-gradient-to-r from-next-primary via-next-primary to-next-secondary bg-clip-text text-[clamp(3.75rem,14vw,8.75rem)] text-transparent [filter:drop-shadow(0_0_22px_rgba(255,0,85,0.5))] sm:mt-2">
              NEXT
            </span>
          </h1>

          <p className="mt-6 text-lg font-medium text-next-text sm:text-xl md:text-2xl">
            New Era Xceptional Talent
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-next-text-secondary sm:text-base">
            Africa&apos;s boldest Afrogospel talent competition and music incubator. Submit your music. Get your
            community to vote. Rise to the top.
          </p>

          <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-next-primary px-8 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-next-primary sm:w-auto"
            >
              Submit Your Music
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3 text-center font-semibold text-white transition hover:border-next-primary hover:bg-next-primary hover:text-white sm:w-auto"
            >
              How It Works
            </Link>
          </div>

          <div className="mt-14 grid w-full max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <p className="font-display text-4xl text-next-primary sm:text-5xl">50</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-next-text sm:text-sm">
                Spots Available
              </p>
            </div>
            <div>
              <p className="font-display text-4xl text-next-primary sm:text-5xl">20</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-next-text sm:text-sm">
                African Nations
              </p>
            </div>
            <div>
              <p className="font-display text-4xl text-next-primary sm:text-5xl">1</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-next-text sm:text-sm">
                Historic Album
              </p>
            </div>
          </div>
        </div>

        <div
          className="animate-hero-scroll absolute bottom-6 left-1/2 z-10 flex flex-col items-center gap-2 text-next-text-secondary"
          aria-hidden
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-white/35 pt-1.5">
            <span className="h-2 w-1 rounded-full bg-white/70" />
          </div>
        </div>
      </section>

      {/* Section 2 — The Movement */}
      <section className="border-t border-next-border py-16 sm:py-24">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6">
          <AnimatedSection className="text-center">
            <AnimatedItem>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-next-secondary">What Is NEXT?</p>
              <h2 className="mt-4 font-display text-3xl tracking-wide text-next-text sm:text-4xl md:text-5xl">
                This Is Bigger Than A Competition
              </h2>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection className="mt-10">
            <AnimatedItem>
              <div className="columns-1 gap-10 text-next-text-secondary md:columns-2 md:gap-12">
                <p className="mb-6 break-inside-avoid text-sm leading-relaxed sm:text-base">
                  NEXT is a talent incubator that discovers, showcases, and develops the next generation of
                  Afrogospel artists and producers across Africa. From first upload to final performance, every
                  step is designed to sharpen craft, deepen conviction, and widen reach.
                </p>
                <p className="break-inside-avoid text-sm leading-relaxed sm:text-base">
                  The journey does not end when the season wraps. Through the Kingdom Creatives Academy (KCA),
                  every artist who touches NEXT continues to grow long after the show is over — with education,
                  community, and real pathways into the industry.
                </p>
              </div>
            </AnimatedItem>
            <AnimatedItem className="mt-10">
              <blockquote className="border-l-4 border-next-primary bg-next-card/80 px-6 py-5 text-left text-base font-medium leading-relaxed text-next-text sm:text-lg">
                &ldquo;We are not just finding the next star. We are building the next generation of
                Afrogospel.&rdquo;
              </blockquote>
            </AnimatedItem>
            <AnimatedItem className="mt-12">
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-4">
                <CountUpWhenVisible end={50} label="Artists Shortlisted" />
                <CountUpWhenVisible end={20} label="Block Parties" />
                <CountUpWhenVisible end={10} label="Album Features" />
                <CountUpWhenVisible end={1} label="Launch Concert" />
              </div>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3 — How It Works timeline */}
      <section className="border-t border-next-border bg-next-card/25 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <AnimatedItem>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-next-secondary">
                The Competition Phases
              </p>
              <h2 className="mt-4 font-display text-3xl tracking-wide text-next-text sm:text-4xl md:text-5xl">
                Your Journey to the Top
              </h2>
            </AnimatedItem>
          </AnimatedSection>

          <div className="relative mt-14 md:mt-20">
            <div
              className="pointer-events-none absolute left-[10%] right-[10%] top-[3.25rem] hidden h-0 border-t-2 border-dotted border-next-secondary/45 md:block"
              aria-hidden
            />
            <div className="space-y-0 md:grid md:grid-cols-6 md:gap-4 md:space-y-0">
              {phaseSteps.map((step, i) => (
                <PhaseTimelineCard
                  key={step.n}
                  n={step.n}
                  title={step.title}
                  desc={step.desc}
                  icon={step.icon}
                  isLast={i === phaseSteps.length - 1}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/how-it-works"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-next-secondary px-8 py-3 font-semibold text-next-secondary transition hover:bg-next-secondary hover:text-next-background"
            >
              See Full Details
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 — Artists & Producers */}
      <section className="border-t border-next-border py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <Link
            href="/contact"
            className="group relative block min-h-[22rem] overflow-hidden rounded-2xl border border-next-border bg-next-card shadow-lg transition duration-300 hover:scale-[1.02] hover:border-next-primary/60 hover:shadow-[0_0_40px_rgba(255,0,85,0.22)]"
          >
            <Image
              src={ARTIST_CARD_IMAGE}
              alt=""
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/35" />
            <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
              <span className="inline-flex w-fit rounded-full bg-next-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Artist Track
              </span>
              <h3 className="mt-4 font-display text-3xl text-next-text sm:text-4xl">Submit Your Music</h3>
              <p className="mt-3 max-w-md text-sm text-next-text-secondary sm:text-base">
                Bring your sound, your story, and your city. We are listening for voices that move both the club
                and the chapel.
              </p>
              <span className="mt-6 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition group-hover:border-next-primary group-hover:bg-next-primary">
                Apply as Artist
              </span>
            </div>
          </Link>

          <Link
            href="/contact"
            className="group relative block min-h-[22rem] overflow-hidden rounded-2xl border border-next-border bg-next-card shadow-lg transition duration-300 hover:scale-[1.02] hover:border-next-secondary/60 hover:shadow-[0_0_40px_rgba(0,229,204,0.2)]"
          >
            <Image
              src={PRODUCER_CARD_IMAGE}
              alt=""
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/78 to-black/40" />
            <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
              <span className="inline-flex w-fit rounded-full bg-next-secondary/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-next-background">
                Producer Track
              </span>
              <h3 className="mt-4 font-display text-3xl text-next-text sm:text-4xl">Submit Your Work</h3>
              <p className="mt-3 max-w-md text-sm text-next-text-secondary sm:text-base">
                Beats, arrangements, and sonic worlds that honor gospel roots and African rhythm — partner with
                artists who need your ear.
              </p>
              <span className="mt-6 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition group-hover:border-next-secondary group-hover:bg-next-secondary group-hover:text-next-background">
                Apply as Producer
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Section 5 — KCA */}
      <section className="relative overflow-hidden border-t border-next-border py-16 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          aria-hidden
        >
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="kca-geo" width="60" height="60" patternUnits="userSpaceOnUse">
                <path
                  d="M30 5 L52 20 L52 45 L30 58 L8 45 L8 20 Z"
                  fill="none"
                  stroke="#00E5CC"
                  strokeWidth="1"
                />
                <path d="M30 18 L42 28 L38 42 L22 42 L18 28 Z" fill="none" stroke="#FF0055" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#kca-geo)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-next-background/92" aria-hidden />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <AnimatedSection>
            <AnimatedItem>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-next-secondary">
                Beyond The Competition
              </p>
              <h2 className="mt-4 font-display text-3xl tracking-wide text-next-text sm:text-4xl md:text-5xl">
                NEXT Is Just The Beginning
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-next-text-secondary sm:text-base">
                Every artist who enters NEXT gets access to the Kingdom Creatives Academy ecosystem — resources,
                community, and creative fuel that outlasts any single season.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-next-text-secondary sm:text-base">
                <li className="flex gap-2">
                  <span className="text-next-primary">▸</span>
                  The top 50 get featured across NEXT channels and partner playlists.
                </li>
                <li className="flex gap-2">
                  <span className="text-next-primary">▸</span>
                  The top 20 receive real mentorship with industry leaders and pastors who get the music.
                </li>
                <li className="flex gap-2">
                  <span className="text-next-primary">▸</span>
                  The top 10 receive full KCA onboarding — structured growth long after the cameras switch off.
                </li>
              </ul>
              <Link
                href="/kca"
                className="mt-8 inline-flex font-semibold text-next-secondary underline-offset-4 transition hover:text-next-text hover:underline"
              >
                Learn About KCA
              </Link>
            </AnimatedItem>
          </AnimatedSection>

          <div className="flex justify-center lg:justify-end">
            <div className="relative flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-next-primary/35 via-transparent to-next-secondary/35 blur-2xl"
                aria-hidden
              />
              <div
                className="absolute inset-4 rounded-full border border-next-secondary/30"
                style={{
                  background:
                    "conic-gradient(from 180deg, rgba(255,0,85,0.15), transparent 40%, rgba(0,229,204,0.2), transparent 75%)",
                }}
                aria-hidden
              />
              {[0, 45, 90, 135].map((deg) => (
                <span
                  key={deg}
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-px origin-top bg-gradient-to-b from-next-secondary/50 to-transparent opacity-40"
                  style={{ transform: `translate(-50%, -50%) rotate(${deg}deg)` }}
                  aria-hidden
                />
              ))}
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-next-primary/40 bg-next-card/40 shadow-[0_0_60px_rgba(255,0,85,0.25),0_0_80px_rgba(0,229,204,0.12)] backdrop-blur-sm sm:h-56 sm:w-56">
                <span className="font-display text-6xl tracking-[0.12em] text-next-text drop-shadow-[0_0_24px_rgba(0,229,204,0.45)] sm:text-7xl">
                  KCA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Stay Connected */}
      <section className="relative overflow-hidden border-t border-next-border py-16 sm:py-20">
        <div
          className="absolute inset-0 bg-gradient-to-br from-next-primary via-next-primary/85 to-next-background"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,0,0,0.35),_transparent_55%)]" aria-hidden />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl tracking-wide text-white sm:text-4xl md:text-5xl">
            Do Not Miss A Beat
          </h2>
          <div className="mt-8">
            <NewsletterForm />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {socialRow.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-white hover:bg-white/10"
                aria-label={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-relaxed text-white/85 sm:text-sm">
            Follow NEXT for artist reveals, vote updates, and behind-the-scenes content
          </p>
        </div>
      </section>
    </div>
  );
}
