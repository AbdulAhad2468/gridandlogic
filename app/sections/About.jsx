"use client";

import { Lightbulb } from "lucide-react";
import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { Card } from "@/app/components/ui/Card";
import { SectionTitle } from "@/app/components/ui/SectionTitle";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import FloatingPhone from "@/app/components/motion/FloatingPhone";

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal className="relative flex flex-col gap-6">
            <div className="flex min-h-[420px] items-center justify-center">
              <FloatingPhone className="p-0 bg-transparent" />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <Card variant="primary" className="flex flex-col items-center justify-center p-6 text-center">
                <span className="text-4xl font-bold text-white">16+</span>
                <span className="mt-1 text-sm text-white/80">Years Of Experience</span>
              </Card>
              <Card className="flex flex-col items-center justify-center p-6 text-center">
                <Lightbulb className="h-8 w-8 text-white mb-2" />
                <span className="text-sm font-medium text-white">Creative Solution</span>
              </Card>
            </div>
          </ScrollReveal>

          <div className="relative flex flex-col gap-6">
            <ScrollReveal>
              <SectionTitle className="relative z-10 max-w-md">
                Intelligent products, built to ship
              </SectionTitle>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-base leading-relaxed text-white/70 max-w-lg">
                We are a digital product studio combining strategy, design, and engineering to turn ideas into production-ready websites, 3D configurators, and ecommerce stores.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Button className="w-fit" onClick={() => { if (typeof window !== "undefined") window.location.href = "mailto:gridandlogic@gmail.com?subject=Discovery%20call%20request"; }}>Learn More</Button>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
