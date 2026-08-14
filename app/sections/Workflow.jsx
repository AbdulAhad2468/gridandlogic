"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";
import { Container } from "@/app/components/ui/Container";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Brief",
    description: "We unpack your goals, audience, and constraints.",
  },
  {
    number: "02",
    title: "Define",
    description: "We scope the right solution and a tight plan.",
  },
  {
    number: "03",
    title: "Design",
    description: "We craft the interface, motion, and 3D language.",
  },
  {
    number: "04",
    title: "Build",
    description: "We develop, test, and launch to real users.",
  },
];

const NODE_SIZE = 3.5; // rem (h-14 = 3.5rem)
const NODE_CENTER = NODE_SIZE / 2; // 1.75rem from top of node

export function Workflow() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(-1);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 30%"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (p) => {
      setProgress(p);
      const step = Math.floor(p * steps.length);
      setActiveStep(p >= 1 ? steps.length - 1 : Math.min(step, steps.length - 1));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Each segment fills between consecutive nodes
  // Node centers are at: 12.5%, 37.5%, 62.5%, 87.5% (for 4 columns)
  const colWidth = 100 / steps.length; // 25%
  const segmentThresholds = steps.slice(0, -1).map((_, i) => (i + 1) / steps.length);

  return (
    <section id="workflow" ref={sectionRef} className="bg-background py-16 lg:py-28">
      <Container>
        <ScrollReveal blur className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary tracking-wide uppercase">
            Workflow
          </span>
          <p className="mt-3 text-foreground/60 text-sm">
            A tight, transparent process from brief to launch.
          </p>
        </ScrollReveal>

        <div className="relative max-w-5xl mx-auto">
          {/* === Desktop: horizontal segments between node centers === */}
          <div className="hidden lg:block">
            {segmentThresholds.map((_, i) => {
              const segLeft = (i + 0.5) * colWidth; // left edge = center of node i
              const segWidth = colWidth; // width = distance to next node center
              const threshold = (i + 1) / steps.length;
              const prevThreshold = i / steps.length;
              const filled = progress >= threshold;
              const partial = progress > prevThreshold && progress < threshold;
              const fillPct = filled
                ? 100
                : partial
                ? ((progress - prevThreshold) / (threshold - prevThreshold)) * 100
                : 0;

              return (
                <div key={`seg-${i}`} className="absolute" style={{
                  left: `${segLeft}%`,
                  width: `${segWidth}%`,
                  top: `${NODE_CENTER}rem`,
                  height: "2px",
                  transform: "translateY(-50%)",
                }}>
                  {/* Base dim line */}
                  <div className="absolute inset-0 bg-border" />
                  {/* Glowing fill */}
                  <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                    style={{
                      width: `${fillPct}%`,
                      boxShadow: fillPct > 0 ? "0 0 10px rgba(37,99,235,0.5)" : "none",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* === Mobile: vertical segments between node centers === */}
          <div className="lg:hidden">
            {segmentThresholds.map((_, i) => {
              const threshold = (i + 1) / steps.length;
              const prevThreshold = i / steps.length;
              const filled = progress >= threshold;
              const partial = progress > prevThreshold && progress < threshold;
              const fillPct = filled
                ? 100
                : partial
                ? ((progress - prevThreshold) / (threshold - prevThreshold)) * 100
                : 0;

              return (
                <div key={`vseg-${i}`} className="absolute" style={{
                  left: `${NODE_CENTER}rem`,
                  top: `calc(${(i + 1) / steps.length * 100}% - ${NODE_CENTER}rem)`,
                  height: `calc(${100 / steps.length}% - ${NODE_SIZE}rem + ${NODE_CENTER}rem)`,
                  width: "2px",
                  transform: "translateX(-50%)",
                }}>
                  <div className="absolute inset-0 bg-border" />
                  <div
                    className="absolute left-0 top-0 w-full bg-gradient-to-b from-primary to-accent transition-all duration-300"
                    style={{
                      height: `${fillPct}%`,
                      boxShadow: fillPct > 0 ? "0 0 10px rgba(37,99,235,0.5)" : "none",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* === Steps grid === */}
          <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-4">
            {steps.map((step, i) => {
              const isActive = activeStep >= i;
              const isCurrent = activeStep === i;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="relative flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0"
                >
                  {/* Glowing node */}
                  <div className="relative flex items-center justify-center shrink-0 z-10">
                    <motion.div
                      className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                        isActive
                          ? "border-primary bg-primary text-surface-elevated"
                          : "border-border bg-surface text-foreground/40"
                      }`}
                      animate={{
                        scale: isCurrent ? [1, 1.15, 1] : 1,
                        boxShadow: isActive
                          ? "0 0 25px rgba(37,99,235,0.4)"
                          : "0 0 0px rgba(37,99,235,0)",
                      }}
                      transition={{ duration: 1.5, repeat: isCurrent ? Infinity : 0 }}
                    >
                      <span className="text-sm font-bold">{step.number}</span>
                    </motion.div>

                    {/* Pulse ring */}
                    {isCurrent && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary"
                        animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="lg:text-center lg:mt-6">
                    <h3
                      className={`text-base font-semibold transition-colors duration-500 ${
                        isActive ? "text-foreground" : "text-foreground/40"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`mt-1 text-sm leading-relaxed transition-colors duration-500 ${
                        isActive ? "text-foreground/70" : "text-foreground/30"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
