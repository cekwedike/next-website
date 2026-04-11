import type { Metadata } from "next";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Artists — Submit",
  description:
    "Submit your Afrogospel music to NEXT. Open to solo artists and groups from every African nation.",
};

const inputClass =
  "mt-1.5 w-full rounded-xl border border-next-border bg-black/40 px-4 py-3 text-next-text placeholder:text-next-text-secondary/60 transition focus:border-next-secondary focus:outline-none focus:ring-2 focus:ring-next-secondary/40";

const labelClass = "block text-sm font-medium text-next-text";

const faqItems = [
  {
    q: "Is submission free?",
    a: "Yes. There is no fee to create an account and submit your track through the NEXT portal.",
  },
  {
    q: "What countries can enter?",
    a: "Artists from any African nation are welcome. The competition is designed to be pan-African with no location barrier for the online audition phase.",
  },
  {
    q: "What format should my music be?",
    a: "Upload your track as MP3, maximum 10MB. Use the best quality export you have — we want to hear your sound clearly.",
  },
  {
    q: "When will I hear back?",
    a: "After submissions close, the judging panel reviews every entry. Shortlisted artists are contacted according to the season timeline on our How It Works page.",
  },
  {
    q: "Can I submit more than one track?",
    a: "Please submit one primary track per artist profile for the audition round. If the rules change for a given season, we will announce it on the portal.",
  },
  {
    q: "What happens if I make the top 50?",
    a: "Top 50 artists move into the showcase phase on Energize Music social channels, then public voting narrows the field to the top 20 for live block parties and beyond.",
  },
];

function IconMic(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path
        d="M12 14a3 3 0 003-3V5a3 3 0 10-6 0v6a3 3 0 003 3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 10v1a7 7 0 01-14 0v-1M12 18v4M8 22h8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconUsers(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path
        d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGlobe(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M2 12h20M12 2a15 15 0 0110 10 15 15 0 01-10 10 15 15 0 01-10-10A15 15 0 0112 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconUserPlus(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path
        d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M8.5 7a4 4 0 108 0 4 4 0 00-8 0zM20 8v6M23 11h-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconUpload(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path
        d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconClipboard(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path
        d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSend(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path
        d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ArtistsPage() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden border-b border-next-border bg-gradient-to-b from-black via-next-background to-next-background">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,0,85,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <AnimatedSection as="div">
            <AnimatedItem>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-next-primary">Artist Track</p>
            </AnimatedItem>
            <AnimatedItem>
              <h1 className="mt-4 font-display text-5xl tracking-wide text-next-text sm:text-6xl">
                Submit Your Music
              </h1>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mx-auto mt-5 max-w-xl text-lg text-next-text-secondary">
                Are you the next Afrogospel star? This is your stage.
              </p>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <AnimatedSection>
          <AnimatedItem className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">What we are looking for</h2>
            <p className="mt-2 text-next-text-secondary">
              NEXT celebrates conviction, culture, and craft. If your sound fits, we want to hear it.
            </p>
          </AnimatedItem>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <AnimatedItem>
              <article className="h-full rounded-2xl border border-next-border bg-next-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-next-secondary/15 text-next-secondary">
                  <IconMic className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl text-next-text">Original Afrogospel music</h3>
                <p className="mt-2 text-sm text-next-text-secondary">
                  Songs that honor faith and African sonic identity — not copies of trends, but voices with
                  something to say.
                </p>
              </article>
            </AnimatedItem>
            <AnimatedItem>
              <article className="h-full rounded-2xl border border-next-border bg-next-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-next-secondary/15 text-next-secondary">
                  <IconUsers className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl text-next-text">Solo artists or groups</h3>
                <p className="mt-2 text-sm text-next-text-secondary">
                  Whether you stand alone or move as a unit, submit as one entry and tell us who you are.
                </p>
              </article>
            </AnimatedItem>
            <AnimatedItem>
              <article className="h-full rounded-2xl border border-next-border bg-next-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-next-secondary/15 text-next-secondary">
                  <IconGlobe className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl text-next-text">Artists from any African nation</h3>
                <p className="mt-2 text-sm text-next-text-secondary">
                  The continent is the canvas. If you rep an African country, you can enter the virtual
                  auditions.
                </p>
              </article>
            </AnimatedItem>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20 lg:mt-28">
          <AnimatedItem className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">How to apply</h2>
            <p className="mt-2 text-next-text-secondary">
              Four steps from account to submission. Keep your MP3 ready before you start.
            </p>
          </AnimatedItem>
          <AnimatedItem className="relative mt-12 max-w-xl">
            <div
              className="absolute left-[22px] top-8 bottom-8 w-px bg-gradient-to-b from-next-primary via-next-primary/80 to-next-primary/30 sm:left-[26px]"
              aria-hidden
            />
            <ol className="relative list-none space-y-0 p-0">
              {[
                {
                  n: 1,
                  title: "Create an account",
                  body: "Register on the NEXT portal with a valid email so we can reach you with results.",
                  Icon: IconUserPlus,
                },
                {
                  n: 2,
                  title: "Upload your track",
                  body: "MP3 format, maximum 10MB. One strong song beats a folder of demos.",
                  Icon: IconUpload,
                },
                {
                  n: 3,
                  title: "Fill in your artist profile",
                  body: "Tell us your story, your city, and how you describe your sound.",
                  Icon: IconClipboard,
                },
                {
                  n: 4,
                  title: "Submit and wait for results",
                  body: "Hit submit once everything looks right. Our judges review every entry.",
                  Icon: IconSend,
                },
              ].map((step) => (
                <li key={step.n} className="relative flex gap-6 pb-12 last:pb-0">
                  <div className="relative z-[1] flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-next-primary bg-next-background font-display text-lg text-next-text sm:h-14 sm:w-14 sm:text-xl">
                    {step.n}
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-3">
                      <span className="text-next-secondary">
                        <step.Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-xl text-next-text">{step.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-next-text-secondary">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="mt-20 lg:mt-28" id="submission-form">
          <AnimatedItem className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">Submission form</h2>
            <p className="mt-2 text-next-text-secondary">
              Static preview — wiring to the backend will come next. Fields match what we&apos;ll need for
              auditions.
            </p>
          </AnimatedItem>
          <AnimatedItem className="mt-10">
            <form className="rounded-2xl border border-next-border bg-next-card/90 p-6 sm:p-10" aria-label="Artist music submission">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="artist-full-name">
                    Full Name
                  </label>
                  <input id="artist-full-name" name="fullName" type="text" autoComplete="name" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="artist-stage-name">
                    Stage Name
                  </label>
                  <input id="artist-stage-name" name="stageName" type="text" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="artist-country">
                    Country
                  </label>
                  <input id="artist-country" name="country" type="text" autoComplete="country-name" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="artist-email">
                    Email
                  </label>
                  <input id="artist-email" name="email" type="email" autoComplete="email" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="artist-phone">
                    Phone
                  </label>
                  <input id="artist-phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="artist-genre">
                    Genre
                  </label>
                  <select id="artist-genre" name="genre" className={inputClass} defaultValue="afrogospel">
                    <option value="afrogospel">Afrogospel</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass} htmlFor="artist-track-title">
                    Track Title
                  </label>
                  <input id="artist-track-title" name="trackTitle" type="text" className={inputClass} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass} htmlFor="artist-track-file">
                    Upload Track
                  </label>
                  <input
                    id="artist-track-file"
                    name="track"
                    type="file"
                    accept="audio/mpeg,.mp3"
                    className={`${inputClass} cursor-pointer file:mr-4 file:rounded-lg file:border-0 file:bg-next-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-next-primary/90`}
                  />
                  <p className="mt-1 text-xs text-next-text-secondary">MP3, max 10MB</p>
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass} htmlFor="artist-bio">
                    Artist Bio
                  </label>
                  <textarea id="artist-bio" name="bio" rows={4} className={inputClass} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass} htmlFor="artist-social">
                    Social Media Links
                  </label>
                  <textarea
                    id="artist-social"
                    name="social"
                    rows={3}
                    placeholder="Instagram, TikTok, YouTube — one per line"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-next-primary px-8 py-3.5 font-semibold text-white transition hover:bg-next-primary/90 sm:w-auto"
                >
                  Submit My Music
                </button>
              </div>
            </form>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="mt-20 lg:mt-28">
          <AnimatedItem className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">FAQ</h2>
            <p className="mt-2 text-next-text-secondary">Quick answers before you send your track.</p>
          </AnimatedItem>
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-next-border rounded-2xl border border-next-border bg-next-card/40 px-4 sm:px-6">
            {faqItems.map((item) => (
              <AnimatedItem key={item.q}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-next-text [&::-webkit-details-marker]:hidden">
                    <span>{item.q}</span>
                    <span className="shrink-0 text-next-secondary transition group-open:rotate-180">▾</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-next-text-secondary">{item.a}</p>
                </details>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
