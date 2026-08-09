import { cn } from "@/app/lib/utils";

export function Container({ className, children, as: Component = "div", ...props }) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-16", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
