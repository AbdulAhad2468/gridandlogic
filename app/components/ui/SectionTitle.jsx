import { cn } from "@/app/lib/utils";

export function SectionTitle({ children, className, align = "left" }) {
  return (
    <h2
      className={cn(
        "text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground",
        align === "center" && "text-center",
        className
      )}
    >
      {children}
    </h2>
  );
}
