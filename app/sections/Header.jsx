"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { cn } from "@/app/lib/utils";
import SlideTabs from "@/app/components/motion/SlideTabs";
import BubbleText from "@/app/components/motion/BubbleText";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#works" },
  { label: "Contact", href: "#contact" },
];

const scrollTo = (href) => {
  if (typeof window === "undefined") return;
  const target = href.replace(/^#/, "");
  if (target) {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const idToLabel = Object.fromEntries(
      navLinks.map((l) => [l.href.replace(/^#/, "") || "home", l.label])
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;
        const best = visible.reduce((a, b) =>
          a.intersectionRatio > b.intersectionRatio ? a : b
        );
        const label = idToLabel[best.target.id];
        if (label) setActive(label);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    navLinks.forEach((l) => {
      const id = l.href.replace(/^#/, "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "bg-surface/80 backdrop-blur-md border-b border-border" : "bg-transparent border-b border-transparent")}>
      <Container>
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/Grid%20%26%20Logic%20(LOGO).png" alt="Grid &amp; Logic Logo" width={36} height={36} unoptimized />
            <BubbleText text="Grid & Logic" className="text-xl font-bold text-foreground text-left" />
          </Link>

          <SlideTabs items={navLinks} active={active} className="hidden lg:flex py-0 bg-transparent" />

          <div className="hidden lg:block">
            <Button variant="outline" onClick={() => { if (typeof window !== "undefined") window.location.href = "mailto:gridandlogic@gmail.com?subject=Grid%20and%20Logic%20for%20call"; }}>Book a call</Button>
          </div>

          <button
            className="lg:hidden p-1 text-foreground hover:text-primary transition-colors z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </nav>
      </Container>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-surface">
          <Container>
            <div className="py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setMobileOpen(false);
                    scrollTo(link.href);
                  }}
                  className={cn(
                    "text-sm font-medium",
                    link.label === active ? "text-primary" : "text-foreground/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="outline" className="w-full mt-2" onClick={() => { if (typeof window !== "undefined") window.location.href = "mailto:gridandlogic@gmail.com?subject=Grid%20and%20Logic%20for%20call"; }}>
                Book a call
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
