"use client";

import { Children, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/app/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function StaggerReveal({
  children,
  className,
  childClassName,
  stagger = 0.1,
  duration = 0.8,
  y = 40,
  once = true,
  start = "top 85%",
  as: Component = "div",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const items = containerRef.current?.querySelectorAll("[data-animate]");
      if (!items?.length) return;

      gsap.from(items, {
        y,
        opacity: 0,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          toggleActions: once ? "play none none none" : "play reverse play reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [stagger, duration, y, once, start]);

  const items = Children.toArray(children);

  return (
    <Component ref={containerRef} className={cn(className)}>
      {items.map((child, index) => (
        <div key={index} data-animate className={cn(childClassName)}>
          {child}
        </div>
      ))}
    </Component>
  );
}
