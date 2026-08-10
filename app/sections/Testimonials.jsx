"use client";

import { Container } from "@/app/components/ui/Container";
import { Card } from "@/app/components/ui/Card";
import { SectionTitle } from "@/app/components/ui/SectionTitle";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { Globe3D } from "@/app/components/ui/3d-globe";

function LogoIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className="h-6 w-6">
      <path d="M16 28C8 28 4 20 4 12c0-4 2-8 6-8s6 6 10 6 6-6 10-6 6 4 6 8c0 8-8 16-16 16z" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-8">
            <ScrollReveal>
              <SectionTitle>What Our Clients Say</SectionTitle>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Card variant="primary" className="p-6 md:p-8">
                <blockquote>
                  <p className="text-xl md:text-2xl font-semibold text-white leading-snug">
                    "Creative, reliable, and always one step ahead."
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-md">
                    Working with Grid &amp; Logic transformed our online presence. They built our website, grew our social channels, and delivered beautiful design.
                  </p>
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold text-white">Ammar</p>
                  <p className="text-sm text-white/70">CEO of Pixel Nest</p>
                </div>
              </Card>
            </ScrollReveal>

          </div>

          <ScrollReveal delay={0.15} className="relative">
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-[1.5rem] overflow-hidden bg-surface/50 border border-border/50">
              <Globe3D
                markers={[
                  { lat: 40.7128, lng: -74.006 },
                  { lat: 51.5074, lng: -0.1278 },
                  { lat: 35.6762, lng: 139.6503 },
                  { lat: 31.2304, lng: 121.4737 },
                ]}
                config={{
                  atmosphereColor: "#2dd4bf",
                  markerColor: "#2dd4bf",
                  autoRotateSpeed: 0.005,
                }}
              />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
