"use client";

import { useEffect, useMemo, useState } from "react";

type CountdownTimerProps = {
  targetDate: string;
  className?: string;
};

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function CountdownTimer({ targetDate, className = "" }: CountdownTimerProps) {
  const end = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const diff = Math.max(0, end - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const units = [
    { label: "Days", value: pad(days) },
    { label: "Hours", value: pad(hours) },
    { label: "Minutes", value: pad(minutes) },
    { label: "Seconds", value: pad(seconds) },
  ];

  return (
    <div
      className={`grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 ${className}`}
      role="timer"
      aria-live="polite"
    >
      {units.map((u) => (
        <div
          key={u.label}
          className="rounded-xl border border-next-border bg-next-card px-3 py-4 text-center sm:px-4"
        >
          <div className="font-display text-3xl tracking-widest text-next-primary sm:text-4xl">
            {u.value}
          </div>
          <div className="mt-1 text-xs font-medium uppercase tracking-wider text-next-text-secondary">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}
