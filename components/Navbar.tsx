"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems: { href: string; label: string; live?: boolean }[] = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/artists", label: "Artists" },
  { href: "/producers", label: "Producers" },
  { href: "/vote", label: "Vote", live: true },
  { href: "/block-parties", label: "Block Parties" },
  { href: "/album", label: "Album" },
  { href: "/kca", label: "KCA" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = (href: string, mobile = false) => {
    const active = isActive(pathname, href);
    const base =
      "relative text-sm font-medium tracking-wide transition-colors hover:text-next-text";
    const desktop = active ? "text-next-text" : "text-next-text-secondary";
    const mobileBase = `block border-l-4 py-3 pl-4 pr-6 ${base}`;
    const mobileActive = active
      ? "border-next-primary bg-next-card text-next-text"
      : "border-transparent text-next-text-secondary";
    return mobile ? `${mobileBase} ${mobileActive}` : `${desktop} ${base}`;
  };

  return (
    <header
      className={`sticky top-0 z-[100] w-full transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-b border-next-border bg-next-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group shrink-0" onClick={() => setOpen(false)}>
          <span className="font-display text-4xl leading-none tracking-wide text-next-text sm:text-5xl">
            NEXT
          </span>
          <span className="mt-0.5 block text-xs font-medium tracking-widest text-next-secondary">
            by Energize Music
          </span>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <li key={item.href} className="flex items-center gap-2">
              <Link href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
              {item.live ? (
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-next-primary/60 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-next-primary shadow-[0_0_12px_2px_rgba(255,0,85,0.85)]" />
                </span>
              ) : null}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-next-border bg-next-card text-next-text lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-5 w-5">
            <span
              className={`absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${open ? "top-[9px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[9px] block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-[17px] block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${open ? "top-[9px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[90] bg-black/75 backdrop-blur-sm lg:hidden"
              aria-label="Close menu overlay"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-[95] flex w-[min(100%,20rem)] flex-col border-l border-next-border bg-next-background shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-next-border px-4 py-4">
                <span className="font-display text-2xl text-next-text">Menu</span>
                <button
                  type="button"
                  className="rounded-lg border border-next-border px-3 py-1.5 text-sm text-next-text-secondary"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
              <ul className="flex flex-1 flex-col overflow-y-auto py-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${linkClass(item.href, true)} flex items-center gap-2`}
                      onClick={() => setOpen(false)}
                    >
                      <span>{item.label}</span>
                      {item.live ? (
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-next-primary/50 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-next-primary shadow-[0_0_10px_2px_rgba(255,0,85,0.8)]" />
                        </span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
