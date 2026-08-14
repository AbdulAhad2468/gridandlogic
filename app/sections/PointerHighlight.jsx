"use client";

import { PointerHighlight } from "@/app/components/ui/pointer-highlight";

export function PointerHighlightDemo() {
  return (
    <section className="bg-background py-20 lg:py-28 text-center">
      <div className="mx-auto max-w-lg px-4 text-2xl font-bold tracking-tight text-foreground md:text-4xl">
        The best way to grow is to{" "}
        <PointerHighlight>
          <span>collaborate</span>
        </PointerHighlight>
      </div>
    </section>
  );
}
