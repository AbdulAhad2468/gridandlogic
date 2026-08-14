"use client";

import { motion } from "motion/react";
import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";

const scrollTo = (id) => {
  if (typeof window === "undefined") return;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, filter: "blur(8px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-background pt-20"
    >
      <div className="absolute inset-0 gradient-glow opacity-60" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col justify-center py-16 lg:py-24">
        <motion.div
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block text-sm font-medium text-primary tracking-wide uppercase mb-4"
          >
          
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[0.95]"
          >
            Build Worlds.{" "}
            <span className="gradient-text">Ship Products.</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-foreground/70 max-w-xl leading-relaxed"
          >
            We design and ship 3D configurators, real-time tours, and ecommerce experiences that help brands stand out, sell more, and ship faster.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button onClick={() => scrollTo("contact")}>
                Start A Project
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button variant="outline" onClick={() => scrollTo("works")}>
                See Our Work
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
