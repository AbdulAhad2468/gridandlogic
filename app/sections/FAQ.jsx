"use client";

import { useState } from "react";
import { Container } from "@/app/components/ui/Container";
import { Card } from "@/app/components/ui/Card";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What does Grid & Logic build?",
    answer:
      "We build 3D websites, product configurators, ecommerce stores, and AI-powered web apps for brands that want to sell more and ship faster.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects ship within 3–8 weeks. A quick discovery call helps us scope the exact timeline for your product.",
  },
  {
    question: "Do you work with startups or established brands?",
    answer:
      "Both. We partner with founders on MVPs and with established brands on high-converting digital products.",
  },
  {
    question: "What tech stack do you use?",
    answer:
      "We use Next.js, React, Three.js, and modern cloud infrastructure to keep products fast, scalable, and maintainable.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 lg:py-24 bg-background">
      <Container>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Frequently asked questions
            </h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <Card
                  key={i}
                  className="overflow-hidden border border-border/50 bg-surface/50"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium text-white">{faq.question}</span>
                    {openIndex === i ? (
                      <Minus className="h-4 w-4 text-primary" />
                    ) : (
                      <Plus className="h-4 w-4 text-primary" />
                    )}
                  </button>
                  {openIndex === i && (
                    <div className="px-5 pb-5 text-sm text-white/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
