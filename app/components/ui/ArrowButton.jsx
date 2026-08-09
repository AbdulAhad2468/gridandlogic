"use client";

import { ArrowUpRight, ArrowUpLeft } from "lucide-react";
import { cn } from "@/app/lib/utils";

export function ArrowButton({
  className,
  variant = "default",
  direction = "up-right",
  size = "md",
  ...props
}) {
  const Icon = direction === "up-left" ? ArrowUpLeft : ArrowUpRight;
  const sizes = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-14 w-14",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-all duration-300 hover:scale-105",
        variant === "default" && "border border-white/30 text-white hover:bg-white/10",
        variant === "primary" && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "outline" && "border border-border-strong bg-surface text-white hover:border-white/40",
        sizes[size],
        className
      )}
      {...props}
    >
      <Icon className="h-5 w-5" strokeWidth={2} />
    </button>
  );
}
