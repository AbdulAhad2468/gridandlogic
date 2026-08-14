import { cn } from "@/app/lib/utils";

export function Badge({ children, className, variant = "default" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-4 py-2 text-xs font-medium",
        variant === "default" && "border-border-strong bg-surface text-foreground",
        variant === "primary" && "border-primary/40 bg-surface text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}
