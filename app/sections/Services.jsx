"use client";

import Image from "next/image";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Container } from "@/app/components/ui/Container";
import { Card } from "@/app/components/ui/Card";
import { SectionTitle } from "@/app/components/ui/SectionTitle";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { StaggerReveal } from "@/app/components/animation/StaggerReveal";

const serviceCards = [
  {
    title: "3D Configurators",
    description:
      "Interactive product configurators that let customers customize, preview, and buy faster.",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80",
    arrow: "down-right",
    span: "row-span-1",
  },
  {
    title: "Web & E-commerce",
    description:
      "Websites and online stores built to convert visitors into customers.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    arrow: "up-right",
    span: "row-span-1",
    horizontal: true,
  },
  {
    title: "Social & Design",
    description:
      "Content, posts, and visuals that grow your audience and make your brand memorable.",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    arrow: "up-right",
    span: "row-span-2",
  },
];

function ServiceCard({ card }) {
  const Arrow = card.arrow === "down-right" ? ArrowDownRight : ArrowUpRight;
  return (
    <Card
      className="group relative overflow-hidden border-border bg-surface p-5 flex flex-col"
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl sm:text-2xl font-semibold text-white">{card.title}</h3>
          <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors group-hover:bg-white/10">
            <Arrow className="h-5 w-5" />
          </div>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{card.description}</p>
      </div>
    </Card>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <Container>
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <SectionTitle className="max-w-md">
              Systems built to perform
            </SectionTitle>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="max-w-sm lg:text-right">
            <p className="text-sm leading-relaxed text-white/70">
              Every service is engineered around a single business result — more leads, more sales, and a stronger brand.
            </p>
          </ScrollReveal>
        </div>

        <StaggerReveal
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          childClassName="h-full"
          stagger={0.15}
        >
          <div className="flex flex-col gap-5">
            <ServiceCard card={serviceCards[0]} />
            <ServiceCard card={serviceCards[1]} />
          </div>
          <ServiceCard card={serviceCards[2]} />
        </StaggerReveal>
      </Container>
    </section>
  );
}
