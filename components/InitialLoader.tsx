"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const STORAGE_KEY = "next-initial-loader-seen";

export function InitialLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let hideTimer: number | undefined;
    const frame = requestAnimationFrame(() => {
      let skip = false;
      try {
        if (sessionStorage.getItem(STORAGE_KEY)) {
          skip = true;
        } else {
          sessionStorage.setItem(STORAGE_KEY, "1");
        }
      } catch {
        skip = false;
      }
      if (skip) return;
      setVisible(true);
      hideTimer = window.setTimeout(() => setVisible(false), 1500);
    });
    return () => {
      cancelAnimationFrame(frame);
      if (hideTimer !== undefined) window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        >
          <span className="font-display text-6xl tracking-wide text-next-text sm:text-7xl">
            NEXT
          </span>
          <span className="mt-2 text-sm font-medium tracking-widest text-next-secondary">
            by Energize Music
          </span>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
            <motion.div
              className="h-full bg-next-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
