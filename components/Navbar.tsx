"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/artists", label: "Artists" },
  { href: "/producers", label: "Producers" },
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
    const desktop = `${active ? "text-next-text" : "text-next-text-secondary"} inline-flex items-center py-2.5`;
    const mobileBase = `flex min-h-12 items-center border-l-4 py-3 pl-4 pr-6 ${base}`;
    const mobileActive = active
      ? "border-next-primary bg-next-card text-next-text"
      : "border-transparent text-next-text-secondary";
    return mobile ? `${mobileBase} ${mobileActive}` : `${desktop}`;
  };

  return (
    <header
      className={`sticky top-0 z-[100] w-full transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-b border-next-border bg-next-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:gap-6 lg:px-8">
        <Link href="/" className="group shrink-0 min-h-11" onClick={() => setOpen(false)}>
          <motion.span
            className="inline-block font-display text-4xl leading-none tracking-wide text-next-text sm:text-5xl"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            NEXT
          </motion.span>
          <span className="mt-0.5 block text-sm font-medium tracking-widest text-next-secondary">
            by Energize Music
          </span>
        </Link>

        <ul className="hidden flex-wrap items-center gap-4 lg:flex xl:gap-6">
          {navItems.map((item) => (
            <li key={item.href} className="flex items-center">
              <Link href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(255,0,85,0.35)",
                "0 0 22px 4px rgba(255,0,85,0.55)",
                "0 0 0 0 rgba(255,0,85,0.35)",
              ],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full"
          >
            <Link
              href="/vote"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-next-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-next-primary/90"
            >
              Vote
            </Link>
          </motion.div>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-next-border bg-next-card text-next-text lg:hidden"
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
              <div className="flex min-h-14 items-center justify-between border-b border-next-border px-4 py-3">
                <span className="font-display text-2xl text-next-text">Menu</span>
                <button
                  type="button"
                  className="min-h-11 rounded-lg border border-next-border px-4 text-sm text-next-text-secondary"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
              <ul className="flex flex-1 flex-col overflow-y-auto overscroll-contain py-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={linkClass(item.href, true)}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-4 px-4">
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(255,0,85,0.35)",
                        "0 0 20px 3px rgba(255,0,85,0.5)",
                        "0 0 0 0 rgba(255,0,85,0.35)",
                      ],
                    }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-full"
                  >
                    <Link
                      href="/vote"
                      className="flex min-h-12 w-full items-center justify-center rounded-full bg-next-primary py-3 text-center text-base font-semibold text-white"
                      onClick={() => setOpen(false)}
                    >
                      Vote
                    </Link>
                  </motion.div>
                </li>
              </ul>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
