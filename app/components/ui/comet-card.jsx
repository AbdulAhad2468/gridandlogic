"use client";

import { cn } from "@/app/lib/utils";

export function CometCard({ children, className }) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-[1px] overflow-hidden bg-surface-elevated",
        className
      )}
    >
      <div className="absolute -top-1/2 -left-1/2 h-[200%] w-[200%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_340deg,#2dd4bf_360deg)] opacity-80" />
      <div className="relative h-full w-full rounded-2xl bg-surface-elevated p-[1px]">
        <div className="relative h-full w-full rounded-2xl bg-surface p-0 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
