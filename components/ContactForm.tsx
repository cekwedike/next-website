"use client";

import { useState } from "react";

const reasons = [
  { value: "partnership", label: "Partnership" },
  { value: "press", label: "Press / Media" },
  { value: "general", label: "General Inquiry" },
  { value: "sponsorship", label: "Sponsorship" },
] as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 4500);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-next-border bg-next-card p-6 sm:p-8"
    >
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-next-text">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-xl border border-next-border bg-next-background px-4 py-3 text-next-text outline-none ring-next-secondary/30 transition focus:border-next-secondary focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-semibold text-next-text">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-xl border border-next-border bg-next-background px-4 py-3 text-next-text outline-none ring-next-secondary/30 transition focus:border-next-secondary focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="contact-reason" className="block text-sm font-semibold text-next-text">
          Reason for contact
        </label>
        <select
          id="contact-reason"
          name="reason"
          required
          className="mt-2 w-full rounded-xl border border-next-border bg-next-background px-4 py-3 text-next-text outline-none ring-next-secondary/30 transition focus:border-next-secondary focus:ring-2"
          defaultValue=""
        >
          <option value="" disabled>
            Select one
          </option>
          {reasons.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-next-text">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-y rounded-xl border border-next-border bg-next-background px-4 py-3 text-next-text outline-none ring-next-secondary/30 transition focus:border-next-secondary focus:ring-2"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-next-primary py-3.5 text-sm font-bold text-white transition hover:bg-next-primary/90 sm:w-auto sm:px-12"
      >
        {sent ? "Message sent" : "Send"}
      </button>
    </form>
  );
}
