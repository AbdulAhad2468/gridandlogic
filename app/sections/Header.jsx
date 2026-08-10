"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { cn } from "@/app/lib/utils";
import SlideTabs from "@/app/components/motion/SlideTabs";
import BubbleText from "@/app/components/motion/BubbleText";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <Container>
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/Grid%20%26%20Logic%20(LOGO).svg" alt="Grid &amp; Logic Logo" width={36} height={36} unoptimized style={{ filter: "brightness(0) saturate(100%) invert(1) sepia(1) saturate(5) hue-rotate(180deg)" }} />
            <BubbleText text="Grid & Logic" className="text-xl font-bold text-white text-left" />
          </Link>

          <SlideTabs items={navLinks} className="hidden lg:flex py-0 bg-transparent" />

          <div className="hidden lg:block">
            <Button variant="outline" onClick={() => { if (typeof window !== "undefined") window.location.href = "mailto:gridandlogic@gmail.com?subject=Grid%20and%20Logic%20for%20call"; }}>Book a call</Button>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                    link.active ? "text-primary" : "text-white/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="outline" className="w-full mt-2">
                Get Started
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
