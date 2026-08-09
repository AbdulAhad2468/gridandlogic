"use client";

import Image from "next/image";
import { Container } from "@/app/components/ui/Container";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";

const logos = [
  { id: 1, src: "/images/Logo.png", alt: "Company logo 1" },
  { id: 2, src: "/images/Logo-1.png", alt: "Company logo 2" },
  { id: 3, src: "/images/Logo-2.png", alt: "Company logo 3" },
  { id: 4, src: "/images/Logo-3.png", alt: "Company logo 4" },
];

export function Companies() {
  return (
    <section className="border-y border-border bg-background py-14">
      <Container>
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:justify-between">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="relative h-8 w-32 opacity-90 transition-opacity hover:opacity-100"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
