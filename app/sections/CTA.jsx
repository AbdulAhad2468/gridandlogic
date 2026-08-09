"use client";

import { Container } from "@/app/components/ui/Container";
import { SectionTitle } from "@/app/components/ui/SectionTitle";
import { Button } from "@/app/components/ui/Button";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";

export function CTA() {
  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <Container>
        <ScrollReveal className="max-w-2xl">
          <SectionTitle className="max-w-lg">
            Ready to build something that sells?
          </SectionTitle>
          <p className="mt-4 text-white/70 max-w-md">
            Book a free 30-minute discovery call. We&apos;ll map your project, identify the fastest path to value, and send you a clear plan.
          </p>
          <Button className="mt-6 w-fit" onClick={() => { if (typeof window !== "undefined") window.location.href = "mailto:gridandlogic@gmail.com?subject=Grid%20and%20Logic%20for%20call"; }}>
            Book a free call
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}
