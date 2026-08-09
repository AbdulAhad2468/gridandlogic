"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/app/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.8,
  y = 40,
  x = 60,
  direction = "up",
  once = true,
  as: Component = "div",
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const from = { opacity: 0 };
      if (direction === "left") from.x = -x;
      else if (direction === "right") from.x = x;
      else if (direction === "down") from.y = -y;
      else from.y = y;

      gsap.from(ref.current, {
        ...from,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: once ? "play none none none" : "play reverse play reverse",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [delay, duration, x, y, direction, once]);

  return (
    <Component ref={ref} className={cn(className)}>
      {children}
    </Component>
  );
}
