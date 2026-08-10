"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { Card } from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";
import { EncryptedText } from "@/app/components/ui/encrypted-text";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const sectionRef = useRef(null);
  const creativeRef = useRef(null);
  const agencyRef = useRef(null);
  const metaRef = useRef(null);
  const bottomCardsRef = useRef(null);

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);
  const bgScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from([creativeRef.current, agencyRef.current], {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
      })
        .from(
          metaRef.current,
          { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .from(
          bottomCardsRef.current.children,
          { y: 40, opacity: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-background pt-20"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <Image
          src="/images/Mask-group-8-1.png"
          alt="Hero background"
          fill
          className="object-cover opacity-70"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 gradient-glow" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </motion.div>

      <Container className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col justify-center py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="flex-1">
            <h1
              ref={creativeRef}
              className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold leading-[0.9] tracking-tight text-white text-3d"
            >
              Build
            </h1>
          </div>

          <div ref={metaRef} className="flex justify-end lg:pt-8">
            <div className="flex items-center gap-3">
              <Badge className="glow-3d">3D Web - Configurators - E-commerce</Badge>
              <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10">
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col lg:flex-row items-end justify-between gap-10">
          <div ref={bottomCardsRef} className="flex flex-col gap-4 max-w-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Card className="px-5 py-4">
                <p className="text-sm text-white/80 max-w-[240px]">
                  <EncryptedText
                    text="3D websites, product configurators, and online stores built to help brands sell more and ship faster."
                    encryptedClassName="text-white/30"
                    revealedClassName="text-white/80"
                    revealDelayMs={20}
                  />
                </p>
              </Card>
              <Button className="shrink-0" onClick={() => { if (typeof window !== "undefined") window.location.href = "mailto:gridandlogic@gmail.com?subject=Grid%20and%20Logic%20for%20call"; }}>Book a call</Button>
            </div>

            <Card className="flex items-center gap-4 px-5 py-4 w-fit mt-2">
              <span className="text-2xl font-bold text-white">31K</span>
              <div className="text-xs leading-tight text-white/80">
                <span className="block font-medium">Trusted</span>
                <span className="block">Agents</span>
              </div>
            </Card>
          </div>

          <h2
            ref={agencyRef}
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold leading-[0.9] tracking-tight text-white text-3d"
          >
            Ship
          </h2>
        </div>
      </Container>
    </section>
  );
}
