"use client";

import { motion } from "motion/react";
import { cn } from "@/app/lib/utils";

export function LampContainer({ children, className }) {
  return (
    <div
      className={cn(
        "relative flex min-h-[420px] w-full items-center justify-center overflow-hidden bg-background",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 h-[60%] w-[70%] -translate-x-1/2 bg-[conic-gradient(from_180deg_at_50%_100%,transparent_0_60%,rgba(45,212,191,0.25)_60_65%,rgba(45,212,191,0.55)_100%)] opacity-90 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 h-[70%] w-[50%] -translate-x-1/2 bg-[conic-gradient(from_180deg_at_50%_100%,transparent_0_60%,rgba(45,212,191,0.4)_60_65%,rgba(45,212,191,0.7)_100%)] opacity-70 blur-2xl"
        />
        <div className="absolute left-1/2 top-[45%] h-[2px] w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/60 to-transparent shadow-[0_0_60px_var(--primary)]" />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
