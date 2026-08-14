"use client";

import { Eye, Target, Sparkles } from "lucide-react";
import { Container } from "@/app/components/ui/Container";
import { SectionTitle } from "@/app/components/ui/SectionTitle";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { StaggerReveal } from "@/app/components/animation/StaggerReveal";

const pillars = [
  {
    title: "Vision",
    description: "Built for the ideas your industry hasn&apos;t seen yet.",
    icon: Eye,
  },
  {
    title: "Strategy",
    description: "Every render, every line of code, tied to a goal.",
    icon: Target,
  },
  {
    title: "Craft & Detail",
    description: "Pixel-level precision meets real business impact.",
    icon: Sparkles,
  },
];

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <ScrollReveal blur>
            <div className="max-w-lg">
              <span className="text-sm font-medium text-primary tracking-wide uppercase">
                Who We Are
              </span>
              <SectionTitle className="mt-3">
                Creative Solutions, Real Results
              </SectionTitle>
              <p className="mt-5 text-foreground/70 leading-relaxed">
                Grid &amp; Logic started with a simple belief: immersive 3D and digital experiences shouldn&apos;t be reserved for the biggest brands. Five years and dozens of projects later, we&apos;ve built a studio that moves fast without cutting corners — pairing technical depth with genuine creative instinct so every configurator, render, and website we ship does real work for the business behind it.
              </p>

              {/* Mini stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="border-l-2 border-primary/30 pl-4">
                  <div className="text-2xl font-bold text-foreground">1+</div>
                  <div className="text-xs text-foreground/50 mt-0.5">Year</div>
                </div>
                <div className="border-l-2 border-primary/30 pl-4">
                  <div className="text-2xl font-bold text-foreground">18+</div>
                  <div className="text-xs text-foreground/50 mt-0.5">Projects</div>
                </div>
                
              </div>
            </div>
          </ScrollReveal>

          <StaggerReveal
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            childClassName="h-full"
            stagger={0.12}
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group relative h-full rounded-3xl border border-border bg-surface-elevated/85 backdrop-blur-md p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]"
                >
                  {/* Gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500 pointer-events-none" />

                  <div className="relative z-10 flex h-full flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-foreground tracking-wide">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </StaggerReveal>
        </div>
      </Container>
    </section>
  );
}
