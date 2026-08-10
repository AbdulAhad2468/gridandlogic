"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/app/lib/utils";

export function PinContainer({
  children,
  title,
  href,
  className,
  containerClassName,
}) {
  const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), { stiffness: 150, damping: 20 });

  const onMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const onMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const Wrapper = href ? motion.a : motion.div;

  return (
    <Wrapper
      ref={ref}
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        "group/pin relative block perspective-1000",
        containerClassName
      )}
    >
      <PinPerspective title={title} />
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02 }}
        className={cn("relative z-10 rounded-2xl bg-surface p-0", className)}
      >
        {children}
      </motion.div>
    </Wrapper>
  );
}

function PinPerspective({ title }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center opacity-0 transition duration-500 group-hover/pin:opacity-100"
    >
      <div className="relative -mt-6 flex items-center gap-2 rounded-full bg-surface px-4 py-2 ring-1 ring-white/10">
        <span className="h-2 w-2 rounded-full bg-primary" />
        <span className="text-xs font-medium text-white/80">{title}</span>
      </div>
      <div className="h-20 w-px bg-gradient-to-b from-primary/50 to-transparent" />
    </motion.div>
  );
}
