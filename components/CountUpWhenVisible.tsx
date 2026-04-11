"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CountUpWhenVisibleProps = {
  end: number;
  label: string;
  suffix?: string;
  className?: string;
};

export function CountUpWhenVisible({
  end,
  label,
  suffix = "",
  className = "",
}: CountUpWhenVisibleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2200;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(end * eased));
      if (t < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [isInView, end]);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <p className="font-display text-4xl text-next-primary sm:text-5xl">
        {value}
        {suffix}
      </p>
      <p className="mt-2 text-xs font-medium uppercase tracking-wider text-next-text sm:text-sm">
        {label}
      </p>
    </div>
  );
}
