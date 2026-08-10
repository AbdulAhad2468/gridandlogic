"use client";

import { motion } from "motion/react";

export function PointerHighlight({ children }) {
  return (
    <span className="group relative mx-1 inline-block cursor-pointer text-primary">
      {children}
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="absolute -right-4 -top-4 h-6 w-6 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <path d="M3.5 3.5l4.5 18 3.5-7 7-3.5-11-7.5z" />
      </svg>
    </span>
  );
}
