"use client";

import { useEffect, useState, useMemo } from "react";
import { cn } from "@/app/lib/utils";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

export function EncryptedText({
  text,
  encryptedClassName,
  revealedClassName,
  revealDelayMs = 40,
  className,
}) {
  const [revealed, setRevealed] = useState(0);

  const chars = useMemo(() => text.split(""), [text]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setRevealed(i);
      if (i >= chars.length) clearInterval(interval);
    }, revealDelayMs);
    return () => clearInterval(interval);
  }, [chars.length, revealDelayMs]);

  return (
    <span className={cn("inline", className)}>
      {chars.map((char, idx) => {
        const isRevealed = idx < revealed;
        if (char === " ") {
          return <span key={idx}>&nbsp;</span>;
        }
        return (
          <span
            key={idx}
            className={cn(
              "inline-block transition-colors duration-100",
              isRevealed ? revealedClassName : encryptedClassName
            )}
          >
            {isRevealed ? char : CHARS[Math.floor(Math.random() * CHARS.length)]}
          </span>
        );
      })}
    </span>
  );
}
