"use client";

import { ArrowUpRight } from "lucide-react";
import { Box, Megaphone, Code, Compass } from "lucide-react";
import { Container } from "@/app/components/ui/Container";
import { SectionTitle } from "@/app/components/ui/SectionTitle";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { StaggerReveal } from "@/app/components/animation/StaggerReveal";

const services = [
  {
    number: "01",
    title: "3D Configurators",
    description:
      "Let customers design their dream product live — swap colors, materials, and parts in real time and watch add-to-cart rates climb.",
    tags: ["Real-time", "E-commerce", "WebGL"],
    icon: Box,
  },
  {
    number: "02",
    title: "Digital Marketing",
    description:
      "Campaigns, content, and brand presence built on data — not guesswork — engineered to grow reach and drive conversions.",
    tags: ["SEO", "Content", "Social"],
    icon: Megaphone,
  },
  {
    number: "03",
    title: "Web Development",
    description:
      "Fast, responsive sites and web apps engineered for performance and built to feel as premium as your product.",
    tags: ["Next.js", "Performance", "Responsive"],
    icon: Code,
  },
  {
    number: "04",
    title: "Graphics",
    description:
      "Interactive, real-time 3D tours that let audiences explore a space or product from every angle, on any device.",
    tags: ["Interactive", "Brand Looks", "Social"],
    icon: Compass,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-20 lg:py-32">
      <Container>
        <ScrollReveal blur className="mb-16 text-center">
          <span className="text-sm font-medium text-primary tracking-wide uppercase">
            What We Do
          </span>
          <SectionTitle className="mt-2">Our Services</SectionTitle>
          <p className="mt-4 text-foreground/50 max-w-lg mx-auto leading-relaxed">
            Every service is built to work together — from first concept render to the final line of code.
          </p>
        </ScrollReveal>

        <StaggerReveal
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
          childClassName="h-full"
          stagger={0.15}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className={`group relative h-full overflow-hidden rounded-3xl border border-border bg-surface-elevated p-8 skew-x-[-8deg] transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] ${
                  i >= 2 ? "md:mt-12" : ""
                }`}
              >
                {/* Hover gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/0 group-hover:from-primary/8 group-hover:to-accent/8 transition-all duration-700 pointer-events-none" />

                {/* Corner accent */}
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />

                <div className="skew-x-[8deg] flex h-full flex-col relative z-10">
                  {/* Number + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-surface-elevated group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-6xl font-bold text-foreground/5 transition-colors duration-500 group-hover:text-primary/15">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 flex-1 text-sm text-foreground/60 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground/50 transition-colors duration-300 group-hover:border-primary/20 group-hover:text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* See More button */}
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center justify-between gap-4 self-start rounded-full bg-surface px-2 py-2 pl-5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-background group-hover:pr-6"
                  >
                    <span>See More</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-surface-elevated transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </StaggerReveal>
      </Container>
    </section>
  );
}
