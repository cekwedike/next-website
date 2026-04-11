"use client";

import { useEffect, useState } from "react";

type HeroTypewriterProps = {
  lines: string[];
  className?: string;
  firstLineClassName?: string;
  secondLineClassName?: string;
};

export function HeroTypewriter({
  lines,
  className = "",
  firstLineClassName = "",
  secondLineClassName = "",
}: HeroTypewriterProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const line = lines[lineIndex];
    if (!line) return;
    if (charIndex < line.length) {
      const t = window.setTimeout(() => setCharIndex((c) => c + 1), 40);
      return () => window.clearTimeout(t);
    }
    if (lineIndex < lines.length - 1) {
      const t = window.setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, 260);
      return () => window.clearTimeout(t);
    }
  }, [charIndex, lineIndex, lines]);

  return (
    <h1 className={className}>
      {lines.map((line, i) => {
        if (i > lineIndex) return null;
        const text = i < lineIndex ? line : line.slice(0, charIndex);
        const current = lines[lineIndex] ?? "";
        const showCaret = i === lineIndex && charIndex < current.length;
        const lineCls =
          i === 0 ? firstLineClassName : secondLineClassName;
        return (
          <span key={`${i}-${line}`} className={`${lineCls} block`}>
            {text}
            {showCaret ? (
              <span
                className="ml-0.5 inline-block h-[0.85em] w-0.5 animate-pulse bg-current align-[-0.15em]"
                aria-hidden
              />
            ) : null}
          </span>
        );
      })}
    </h1>
  );
}
