"use client";

import Image from "next/image";
import { Container } from "@/app/components/ui/Container";
import { CometCard } from "@/app/components/ui/comet-card";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";

export function Comet() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <Container>
        <ScrollReveal className="flex items-center justify-center">
          <CometCard className="max-w-sm">
            <button
              type="button"
              className="flex w-80 cursor-pointer flex-col items-stretch rounded-2xl border-0 bg-surface-elevated p-2 md:p-4"
              aria-label="View invite F7RA"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="mx-2 flex-1">
                <div className="relative mt-2 aspect-[3/4] w-full">
                  <Image
                    src="/images/Mask-group-8-1.png"
                    alt="Invite background"
                    fill
                    unoptimized
                    className="absolute inset-0 h-full w-full rounded-2xl bg-surface object-cover contrast-75"
                    sizes="320px"
                  />
                </div>
              </div>
              <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-foreground">
                <div className="text-xs">Comet Invitation</div>
                <div className="text-xs text-foreground/50">#F7RA</div>
              </div>
            </button>
          </CometCard>
        </ScrollReveal>
      </Container>
    </section>
  );
}
