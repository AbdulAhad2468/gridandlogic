"use client";

import { Container } from "@/app/components/ui/Container";
import { Card } from "@/app/components/ui/Card";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";

const stats = [
  { value: "31K+", label: "3D assets shipped" },
  { value: "120+", label: "Projects delivered" },
  { value: "15+", label: "Countries served" },
  { value: "98%", label: "Client satisfaction" },
];

export function Stats() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <Container>
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, i) => (
              <Card
                key={i}
                className="flex flex-col justify-between p-6 min-h-[140px] border border-border/50 bg-surface/50 hover:bg-surface/80 transition-colors"
              >
                <span className="text-4xl lg:text-5xl font-bold text-primary">{stat.value}</span>
                <span className="mt-2 text-sm text-white/70">{stat.label}</span>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
