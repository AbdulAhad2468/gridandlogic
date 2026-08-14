"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/components/ui/Container";
import { ChevronUp } from "lucide-react";

const SocialIcons = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  Threads: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.495c-1.02-3.248-2.6-5.38-5.157-6.657-1.486-.72-3.308-1.093-5.413-1.11-3.013.022-5.32.73-6.854 2.106C1.438 5.578.595 8.13.569 11.999c.025 3.874.868 6.428 2.502 8.09 1.533 1.376 3.84 2.084 6.854 2.106 2.104-.017 3.927-.39 5.416-1.11 2.583-1.292 4.166-3.442 5.147-6.811l2.042.478c-1.113 3.643-2.832 6.008-5.41 7.432-2.048 1.04-4.52 1.595-7.074 1.616zm-.174-9.344c-2.042-.161-3.56-1.224-4.323-3.072-.46-1.147-.5-2.49-.117-3.78.346-1.177 1.052-2.207 2.06-2.986 1.302-1.006 2.918-1.46 4.79-1.352 2.903.163 5.018 1.8 5.69 4.472.136.52.205 1.078.205 1.657 0 .163-.005.326-.014.49l-.002.047c-.062 1.051-.367 1.994-.89 2.74-.01.014-.02.028-.03.042-.908 1.298-2.284 2.06-3.88 2.163l-.489-.381zm5.287-3.36c-.17-1.68-1.202-2.923-2.901-3.495-.566-.196-1.2-.295-1.884-.295-1.69 0-3.065.636-3.88 1.791-.56.794-.75 1.792-.532 2.816.246 1.135.91 1.95 1.93 2.373.126.052.256.098.389.139l-.19-.147c.97.294 2.06.25 3.067-.127 1.44-.56 2.26-1.746 2.37-3.349.003-.047.006-.095.008-.142.002-.057.003-.114.003-.171 0-.18-.012-.358-.035-.532z" />
    </svg>
  ),
};

const navigate = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#works" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "3D Configurators",
  "Digital Marketing",
  "Web Development",
  "Real-Time Tours",
];

const connect = [
  { label: "0337 4992211", href: "tel:+923374992211" },
  { label: "0337 4992211 (WhatsApp)", href: "https://wa.me/923374992211" },
  { label: "gridandlogic@gmail.com", href: "mailto:gridandlogic@gmail.com" },
];

const scrollTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

export function Footer() {
  return (
    <footer
      className="relative border-t border-border bg-surface"
      style={{
        backgroundImage:
          "linear-gradient(to top, rgba(37,99,235,0.55) 0%, rgba(37,99,235,0.2) 15%, rgba(37,99,235,0.05) 35%, transparent 70%)",
      }}
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
              <Image src="/Grid%20%26%20Logic%20(LOGO).png" alt="Grid &amp; Logic Logo" width={32} height={32} unoptimized />
              Grid &amp; Logic
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70 max-w-xs">
              We design and build 3D websites, product configurators, and ecommerce stores that help brands stand out and convert.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">Navigate</h4>
            <ul className="mt-4 flex flex-col gap-2">
              {navigate.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">Services</h4>
            <ul className="mt-4 flex flex-col gap-2">
              {serviceLinks.map((label) => (
                <li key={label} className="text-sm text-foreground/70">
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">Connect</h4>
            <ul className="mt-4 flex flex-col gap-2">
              {connect.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-3">
              {[
                { Icon: SocialIcons.Facebook, href: "https://www.facebook.com/profile.php?id=61592258005096", label: "Facebook" },
                { Icon: SocialIcons.Instagram, href: "https://www.instagram.com/gridandlogic/", label: "Instagram" },
                { Icon: SocialIcons.Threads, href: "https://www.threads.com/@gridandlogic", label: "Threads" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/30 text-foreground transition-colors hover:bg-foreground/10"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} Grid &amp; Logic. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            aria-label="Scroll to top"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-surface-elevated transition-transform hover:-translate-y-1"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
