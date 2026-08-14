"use client";

import { motion } from "motion/react";
import { Container } from "@/app/components/ui/Container";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";

export function Testimonial() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        <ScrollReveal blur className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl text-primary/30 font-serif leading-none mb-4"
          >
            &ldquo;
          </motion.div>
          <blockquote className="text-2xl sm:text-3xl font-medium text-foreground leading-snug">
            Creative, reliable, and always one step ahead.
          </blockquote>
          <p className="mt-6 text-foreground/70 max-w-xl mx-auto leading-relaxed">
            Working with Grid &amp; Logic transformed our online presence. They built our website, grew our social channels, and delivered beautiful design.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold"
            >
              A
            </motion.div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Ammar</div>
              <div className="text-sm text-foreground/60">CEO of Pixel Nest</div>
            </div>
          </motion.div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
