"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { Container } from "@/app/components/ui/Container";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";

const GlobeModel = dynamic(() => import("@/app/components/ui/GlobeModel"), {
  ssr: false,
});

export function Globe() {
  return (
    <section className="bg-surface py-20 lg:py-28 border-y border-border overflow-hidden">
      <Container>
        <ScrollReveal blur className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold text-foreground"
          >
            We work across the world.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-3 text-foreground/60"
          >
            Remote-first, global reach — from New York to Tokyo.
          </motion.p>
        </ScrollReveal>

        {/* 3D Earth Globe */}
        <div className="relative flex items-center justify-center h-[400px] w-full">
          <GlobeModel />
          <div className="absolute h-72 w-72 rounded-full bg-primary/10 blur-3xl -z-10" />
        </div>

        {/* Animated city pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["New York", "Tokyo", "London", "Karachi", "Sydney", "Dubai"].map((city, i) => (
            <motion.span
              key={city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(37,99,235,0.2)" }}
              className="rounded-full border border-border bg-surface-elevated px-4 py-2 text-sm text-foreground/70 cursor-default"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
              {city}
            </motion.span>
          ))}
        </div>
      </Container>
    </section>
  );
}
