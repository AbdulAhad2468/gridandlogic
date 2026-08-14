"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/app/components/ui/Container";
import { SectionTitle } from "@/app/components/ui/SectionTitle";
import { Card } from "@/app/components/ui/Card";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { StaggerReveal } from "@/app/components/animation/StaggerReveal";

const works = [
  {
    title: "Pixel Nest Agency",
    category: "Agency Website",
    tagline: "A bold web presence for a creative studio.",
    year: "2025",
    image: "/images/pixelnest.png",
    href: "https://pixelnestagy.vercel.app",
  },
  {
    title: "Sofa Configurator",
    category: "Product Configurator",
    tagline: "Customize materials and colors in real time.",
    year: "2025",
    image: "/images/sofa-configrator.png",
    href: "https://abdulahad2468.github.io/sofa-configrator/",
  },
  {
    title: "Clothing Store",
    category: "E-commerce",
    tagline: "A clean shopping experience built for conversion.",
    year: "2025",
    image: "/images/clothing%20store.png",
    href: "https://clothing-lovat.vercel.app/",
  },
  {
    title: "E-commerce",
    category: "E-commerce",
    tagline: "End-to-end store design for a modern brand.",
    year: "2025",
    image: "/images/ecomerce%20website.png",
    href: "https://e-commerce-chi-eight-35.vercel.app/",
  },
];

function WorkCard({ work }) {
  return (
    <a
      href={work.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <Card className="overflow-hidden p-0 h-full transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_16px_40px_rgba(37,99,235,0.12)]">
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={work.image}
            alt={work.title}
            fill
            unoptimized
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Year badge */}
          <div className="absolute top-3 right-3 rounded-full bg-background/60 backdrop-blur-md px-3 py-1 text-xs text-foreground/70 border border-border">
            {work.year}
          </div>

          {/* Arrow icon */}
          <div className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary/0 backdrop-blur-md text-primary opacity-0 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
        <div className="p-5 flex flex-col h-[calc(100%-13rem)]">
          <span className="text-xs font-medium text-primary uppercase tracking-wide">
            {work.category}
          </span>
          <h3 className="mt-2 text-lg font-semibold text-foreground">
            {work.title}
          </h3>
          <p className="mt-2 text-sm text-foreground/70 leading-relaxed flex-1">
            {work.tagline}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            View Case Study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Card>
    </a>
  );
}

export function Works() {
  return (
    <section id="works" className="bg-surface py-20 lg:py-28">
      <Container>
        <ScrollReveal blur>
          <span className="text-sm font-medium text-primary tracking-wide uppercase">
            Selected Work
          </span>
          <SectionTitle className="mt-2">Case Studies Worth Studying</SectionTitle>
          <p className="mt-3 mb-10 text-foreground/60 max-w-md">
            A look at what we&apos;ve built — from 3D configurators to full ecommerce stores.
          </p>
        </ScrollReveal>
        <StaggerReveal
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          childClassName="h-full"
          stagger={0.12}
        >
          {works.map((work) => (
            <WorkCard key={work.title} work={work} />
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
