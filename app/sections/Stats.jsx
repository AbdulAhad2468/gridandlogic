"use client";

import { useRef, useEffect } from "react";
import { Container } from "@/app/components/ui/Container";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";

const stats = [
  { value: 16, suffix: "+", label: "Years of Experience" },
  { value: 31, suffix: "K", label: "Trusted Agents" },
  { value: 5, suffix: "+", label: "Years of Craft" },
  { value: 40, suffix: "+", label: "Projects Shipped" },
];

function CountUp({ end, suffix }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          let current = 0;
          const duration = 1500;
          const startTime = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            current = Math.round(eased * end);
            el.textContent = `${current}${suffix}`;
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function Stats() {
  return (
    <section className="bg-surface py-16 border-y border-border">
      <Container>
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-4xl sm:text-5xl font-bold gradient-text transition-transform duration-300 group-hover:scale-110">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-sm text-foreground/60 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
