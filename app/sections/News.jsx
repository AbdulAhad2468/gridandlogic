"use client";

import Image from "next/image";
import { Container } from "@/app/components/ui/Container";
import { Card } from "@/app/components/ui/Card";
import { SectionTitle } from "@/app/components/ui/SectionTitle";
import { StaggerReveal } from "@/app/components/animation/StaggerReveal";

const articles = [
  {
    date: "Aug 7, 2026",
    category: "Projects",
    title: "Website Configurator Launch",
    excerpt: "A custom product configurator built to simplify the buying journey and boost conversions.",
    image: "/images/image-34.png",
  },
  {
    date: "Aug 7, 2026",
    category: "Social Media",
    title: "Social Media Post Ideas That Work",
    excerpt: "Tips and templates for creating engaging social media content that grows your audience.",
    image: "/images/image-35.png",
  },
  {
    date: "Aug 7, 2026",
    category: "Design",
    title: "Fresh Graphic Design for Brands",
    excerpt: "Exploring bold visual identities and marketing creatives that make brands memorable.",
    image: "/images/image-36.png",
  },
];

export function News() {
  return (
    <section id="news" className="bg-background py-20 lg:py-28">
      <Container>
        <StaggerReveal className="mb-12 flex flex-col items-center text-center" stagger={0.1}>
          <SectionTitle>Agency News & Announcements</SectionTitle>
        </StaggerReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.12}>
          {articles.map((article) => (
            <Card key={article.title} className="flex flex-col overflow-hidden p-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="mt-5 flex flex-col flex-1">
                <div className="mb-3 text-xs text-white/50">
                  {article.date} <span className="mx-2">·</span> {article.category}
                </div>
                <h3 className="text-lg font-semibold text-white leading-snug">{article.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60 flex-1">{article.excerpt}</p>
              </div>
            </Card>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
