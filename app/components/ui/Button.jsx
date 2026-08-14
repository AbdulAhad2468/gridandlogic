"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] hover:shadow-[0_8px_28px_rgba(37,99,235,0.25)] active:scale-[0.98]",
        outline:
          "border border-foreground/80 bg-transparent text-foreground hover:bg-foreground/10 hover:border-foreground hover:shadow-[0_8px_28px_rgba(15,23,42,0.06)] active:scale-[0.98]",
        ghost: "hover:bg-foreground/10",
        muted: "bg-surface text-foreground border border-border hover:border-border-strong",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-5 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
