import type { Metadata } from "next";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Producers — Submit",
  description:
    "Submit your Afrogospel productions to NEXT. Open to producers from every African nation.",
};

const inputClass =
  "mt-1.5 w-full rounded-xl border border-next-border bg-black/40 px-4 py-3 text-next-text placeholder:text-next-text-secondary/60 transition focus:border-next-secondary focus:outline-none focus:ring-2 focus:ring-next-secondary/40";

const labelClass = "block text-sm font-medium text-next-text";

const faqItems = [
  {
    q: "Is submission free?",
    a: "Yes. Creating an account and uploading your production through the NEXT portal costs nothing.",
  },
  {
    q: "What countries can enter?",
    a: "Producers based in or representing any African nation can enter. Virtual auditions are designed to remove geography as a barrier.",
  },
  {
    q: "What format should my production be?",
    a: "Upload as MP3, maximum 10MB. Choose a mix that represents your production clearly — arrangement and balance matter.",
  },
  {
    q: "When will I hear back?",
    a: "After the submission window closes, judges review all productions. Shortlisted producers are contacted following the published season timeline.",
  },
  {
    q: "Can I submit more than one track?",
    a: "Submit one flagship production per profile for the audition round. Season-specific exceptions, if any, will be posted on the portal.",
  },
  {
    q: "What happens if I make the top 50?",
    a: "Top 50 producers join the showcase wave on Energize Music socials, then advance with the competition into voting, live moments, and album collaboration phases.",
  },
];

function IconWaveform(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path
        d="M4 12v-2M8 8v8M12 4v16M16 10v4M20 7v10"
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

function IconLayers(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path
        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
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

export default function ProducersPage() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden border-b border-next-border bg-gradient-to-b from-black via-next-background to-next-background">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,0,85,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <AnimatedSection as="div">
            <AnimatedItem>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-next-primary">Producer Track</p>
            </AnimatedItem>
            <AnimatedItem>
              <h1 className="mt-4 font-display text-5xl tracking-wide text-next-text sm:text-6xl">
                Submit Your Work
              </h1>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mx-auto mt-5 max-w-xl text-lg text-next-text-secondary">
                The beat behind the breakthrough. Producers, this is your moment.
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
              We need beds, bounce, and spiritual intent — productions that lift Afrogospel forward.
            </p>
          </AnimatedItem>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <AnimatedItem>
              <article className="h-full rounded-2xl border border-next-border bg-next-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-next-secondary/15 text-next-secondary">
                  <IconWaveform className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl text-next-text">Original Afrogospel beats or productions</h3>
                <p className="mt-2 text-sm text-next-text-secondary">
                  Tracks built with purpose — drums, harmony, and texture that feel both holy and undeniable.
                </p>
              </article>
            </AnimatedItem>
            <AnimatedItem>
              <article className="h-full rounded-2xl border border-next-border bg-next-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-next-secondary/15 text-next-secondary">
                  <IconGlobe className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl text-next-text">Producers from any African nation</h3>
                <p className="mt-2 text-sm text-next-text-secondary">
                  From bedroom rigs to pro rooms — if you rep the continent, your sound has a lane here.
                </p>
              </article>
            </AnimatedItem>
            <AnimatedItem>
              <article className="h-full rounded-2xl border border-next-border bg-next-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-next-secondary/15 text-next-secondary">
                  <IconLayers className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl text-next-text">Instrumentals or produced tracks with vocals</h3>
                <p className="mt-2 text-sm text-next-text-secondary">
                  Pure instrumentals or full productions — either way, show us how you shape the Afrogospel wave.
                </p>
              </article>
            </AnimatedItem>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20 lg:mt-28">
          <AnimatedItem className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">How to apply</h2>
            <p className="mt-2 text-next-text-secondary">
              Same four-step flow as artists — tuned for how producers move.
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
                  body: "Sign up on the NEXT portal so we can credit your work and contact you securely.",
                  Icon: IconUserPlus,
                },
                {
                  n: 2,
                  title: "Upload your production",
                  body: "MP3 format, maximum 10MB. Lead with the mix that shows your signature.",
                  Icon: IconUpload,
                },
                {
                  n: 3,
                  title: "Fill in your producer profile",
                  body: "Share your tag, influences, and the story behind the session.",
                  Icon: IconClipboard,
                },
                {
                  n: 4,
                  title: "Submit and wait for results",
                  body: "Double-check levels and metadata, then send it. Judges review every production.",
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
              Static preview — backend integration can plug in later. Fields reflect what we need to evaluate
              productions fairly.
            </p>
          </AnimatedItem>
          <AnimatedItem className="mt-10">
            <form className="rounded-2xl border border-next-border bg-next-card/90 p-6 sm:p-10" aria-label="Producer submission">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="producer-full-name">
                    Full Name
                  </label>
                  <input id="producer-full-name" name="fullName" type="text" autoComplete="name" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="producer-tag">
                    Producer Name / Tag
                  </label>
                  <input id="producer-tag" name="producerTag" type="text" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="producer-country">
                    Country
                  </label>
                  <input
                    id="producer-country"
                    name="country"
                    type="text"
                    autoComplete="country-name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="producer-email">
                    Email
                  </label>
                  <input id="producer-email" name="email" type="email" autoComplete="email" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="producer-phone">
                    Phone
                  </label>
                  <input id="producer-phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="producer-style">
                    Production Style
                  </label>
                  <select id="producer-style" name="productionStyle" className={inputClass} defaultValue="afrobeats-gospel">
                    <option value="afrobeats-gospel">Afrobeats Gospel</option>
                    <option value="contemporary-gospel">Contemporary Gospel</option>
                    <option value="traditional-gospel-fusion">Traditional Gospel Fusion</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass} htmlFor="producer-track-title">
                    Track Title
                  </label>
                  <input id="producer-track-title" name="trackTitle" type="text" className={inputClass} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass} htmlFor="producer-track-file">
                    Upload Production
                  </label>
                  <input
                    id="producer-track-file"
                    name="production"
                    type="file"
                    accept="audio/mpeg,.mp3"
                    className={`${inputClass} cursor-pointer file:mr-4 file:rounded-lg file:border-0 file:bg-next-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-next-primary/90`}
                  />
                  <p className="mt-1 text-xs text-next-text-secondary">MP3, max 10MB</p>
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass} htmlFor="producer-bio">
                    Producer Bio
                  </label>
                  <textarea id="producer-bio" name="bio" rows={4} className={inputClass} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass} htmlFor="producer-social">
                    Social Media Links
                  </label>
                  <textarea
                    id="producer-social"
                    name="social"
                    rows={3}
                    placeholder="Instagram, X, BeatStars — one per line"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-next-primary px-8 py-3.5 font-semibold text-white transition hover:bg-next-primary/90 sm:w-auto"
                >
                  Submit My Production
                </button>
              </div>
            </form>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="mt-20 lg:mt-28">
          <AnimatedItem className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">FAQ</h2>
            <p className="mt-2 text-next-text-secondary">Producer-specific answers — read before you bounce that final MP3.</p>
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
