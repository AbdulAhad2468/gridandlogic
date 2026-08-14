"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";

const FloatingPhone = dynamic(() => import("@/app/components/motion/FloatingPhone"), {
  ssr: false,
});

export function CTA() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-surface py-20 lg:py-28 overflow-hidden">
      <Container>
        <div className="text-center">
          <span className="inline-block rounded-full border border-primary/30 bg-surface-elevated px-5 py-2 text-sm font-medium text-primary tracking-wide">
            Contact US
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-semibold text-primary tracking-tight">
            Tell Us Your Goals
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Floating phone visual */}
          <div className="relative flex items-center justify-center order-2 lg:order-1 min-h-[500px] w-full">
            <FloatingPhone className="p-0 bg-transparent" />
            <div className="absolute h-72 w-72 rounded-full bg-primary/15 blur-3xl -z-10" />
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 order-1 lg:order-2"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-border bg-surface-elevated px-5 py-4 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-border bg-surface-elevated px-5 py-4 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
            />
            <textarea
              name="message"
              placeholder="Tell us about your project"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full min-h-[160px] rounded-2xl border border-border bg-surface-elevated px-5 py-4 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm resize-y"
            />
            <Button
              type="submit"
              className="w-fit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </Button>

            {status === "sent" && (
              <p className="text-sm text-primary">
                Message sent. We&apos;ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
