"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setEmail("");
    window.setTimeout(() => setSent(false), 4000);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-stretch"
    >
      <label htmlFor="next-newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="next-newsletter-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-h-12 flex-1 rounded-full border border-white/25 bg-black/25 px-5 text-next-text placeholder:text-white/50 outline-none ring-next-secondary/40 transition focus:border-next-secondary focus:ring-2"
      />
      <button
        type="submit"
        className="min-h-12 shrink-0 rounded-full bg-next-text px-8 font-semibold text-next-primary transition hover:bg-white"
      >
        {sent ? "You are on the list" : "Subscribe"}
      </button>
    </form>
  );
}
