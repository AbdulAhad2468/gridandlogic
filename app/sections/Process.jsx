"use client";

import Image from "next/image";
import { Container } from "@/app/components/ui/Container";
import { Card } from "@/app/components/ui/Card";
import { SectionTitle } from "@/app/components/ui/SectionTitle";
import { StaggerReveal } from "@/app/components/animation/StaggerReveal";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We learn about your business, goals, and target audience.",
    active: true,
  },
  {
    number: "02",
    title: "Define",
    description: "We define the right solution and a clear project plan.",
  },
  {
    number: "03",
    title: "Design",
    description: "We create designs and interfaces that match your brand.",
  },
  {
    number: "04",
    title: "Develop",
    description: "We build, test, and launch your website or store.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-background py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <StaggerReveal className="grid grid-cols-2 gap-4" stagger={0.12}>
            {steps.map((step, index) => (
              <Card
                key={step.number}
                variant={step.active ? "primary" : "default"}
                className={`p-6 flex flex-col justify-between min-h-[180px] ${
                  index === 0 ? "lg:-mt-6" : ""
                }`}
              >
                <span
                  className={`text-5xl md:text-6xl font-bold leading-none ${
                    step.active ? "text-primary" : "text-foreground/30"
                  }`}
                >
                  {step.number}
                </span>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{step.description}</p>
                </div>
              </Card>
            ))}
          </StaggerReveal>

          <div className="flex flex-col gap-6">
            <ScrollReveal>
              <SectionTitle>Our Work Process</SectionTitle>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-base leading-relaxed text-foreground/70 max-w-md">
                We follow a simple, proven process: discover your needs, define the right solution, design the experience, and develop the final product.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="relative aspect-square w-full max-w-md rounded-[1.5rem] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80"
                alt="Creative process abstract"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
