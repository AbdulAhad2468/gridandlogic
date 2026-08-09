import { cn } from "@/app/lib/utils";

export function Card({ className, children, variant = "default", ...props }) {
  return (
    <div
      className={cn(
        "rounded-[1.25rem] tilt-3d",
        variant === "default" && "border border-border bg-surface",
        variant === "elevated" && "border border-border-strong bg-surface-elevated",
        variant === "primary" && "border border-primary/40 bg-surface",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
