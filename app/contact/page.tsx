import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact NEXT — partnerships, press, sponsorships, and general inquiries. Afrogospel by Energize Music.",
};

function InfoCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-next-border bg-next-card p-6">
      <h2 className="font-display text-lg tracking-wide text-next-text">{title}</h2>
      <div className="mt-3 text-sm text-next-text-secondary">{children}</div>
    </div>
  );
}

function BenefitCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-2xl border border-next-border bg-next-card p-6">
      <h3 className="font-display text-xl text-next-tertiary">{title}</h3>
      <p className="mt-3 text-sm text-next-text-secondary">{body}</p>
    </article>
  );
}

export default function ContactPage() {
  return (
    <div className="relative">
      <section className="border-b border-next-border py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <AnimatedItem>
              <h1 className="font-display text-4xl tracking-wide text-next-text sm:text-5xl">Get In Touch</h1>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-4 text-lg text-next-text-secondary">
                For partnerships, press, and general inquiries.
              </p>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <AnimatedSection as="div">
              <AnimatedItem>
                <ContactForm />
              </AnimatedItem>
            </AnimatedSection>

            <AnimatedSection as="div" className="space-y-6">
              <AnimatedItem>
                <InfoCard title="Email">
                  <p>
                    <a
                      href="mailto:hello@nextafrogospel.example"
                      className="font-medium text-next-secondary underline-offset-4 hover:underline"
                    >
                      hello@nextafrogospel.example
                    </a>
                  </p>
                  <p className="mt-2 text-xs">Placeholder address — replace with your production inbox.</p>
                </InfoCard>
              </AnimatedItem>
              <AnimatedItem>
                <InfoCard title="Instagram">
                  <p>
                    <a
                      href="https://instagram.com/nextafrogospel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-next-secondary underline-offset-4 hover:underline"
                    >
                      @nextafrogospel
                    </a>
                  </p>
                </InfoCard>
              </AnimatedItem>
              <AnimatedItem>
                <InfoCard title="For artists and producers">
                  <p>
                    Ready to compete or produce for NEXT? Head to the dedicated submission pages to share your
                    work.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href="/artists"
                      className="inline-flex rounded-full border border-next-border px-4 py-2 text-xs font-semibold text-next-text transition hover:border-next-primary hover:text-next-primary"
                    >
                      Artists
                    </Link>
                    <Link
                      href="/producers"
                      className="inline-flex rounded-full border border-next-border px-4 py-2 text-xs font-semibold text-next-text transition hover:border-next-primary hover:text-next-primary"
                    >
                      Producers
                    </Link>
                  </div>
                </InfoCard>
              </AnimatedItem>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="border-t border-next-border bg-next-card/25 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <AnimatedItem className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-wide text-next-text sm:text-4xl">
                Partner With NEXT
              </h2>
              <p className="mt-4 text-next-text-secondary">
                We are looking for visionary brands who want to reach Africa&apos;s most passionate Afrogospel
                audience. Get in touch.
              </p>
            </AnimatedItem>
            <AnimatedItem className="mt-12 grid gap-6 md:grid-cols-3">
              <BenefitCard
                title="Brand visibility across Africa"
                body="Align with a touring, streaming, and broadcast footprint that moves from capitals to neighborhoods."
              />
              <BenefitCard
                title="Social media activation"
                body="Co-created campaigns with artists and producers your customers already stream and share."
              />
              <BenefitCard
                title="Live event presence"
                body="Block parties, launch moments, and finales where culture meets measurable footfall and emotion."
              />
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
