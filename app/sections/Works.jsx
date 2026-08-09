"use client";

import Image from "next/image";
import { Container } from "@/app/components/ui/Container";
import { SectionTitle } from "@/app/components/ui/SectionTitle";
import { StaggerReveal } from "@/app/components/animation/StaggerReveal";

const works = [
  {
    title: "Pixel Nest Agency",
    category: "Agency Website",
    image: "/images/pixelnest.png",
    href: "https://pixelnestagy.vercel.app",
    className: "md:col-span-1",
  },
  {
    title: "Sofa Configurator",
    category: "Product Configurator",
    image: "/images/sofa-configrator.png",
    href: "https://abdulahad2468.github.io/sofa-configrator/",
    className: "md:col-span-1",
  },
  //check//
  {
    title: "Clothing Store",
    category: "E-commerce",
    image: "/images/clothing%20store.png",
    href: "https://clothing-lovat.vercel.app/",
    className: "md:col-span-1",
  },
  {
    title: "E-commerce",
    category: "E-commerce",
    image: "/images/ecomerce website.png",
    href: "https://e-commerce-chi-eight-35.vercel.app/",
    className: "md:col-span-1",
  },
];

function WorkCard({ work }) {
  return (
    <a
      href={work.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`block tilt-3d group relative overflow-hidden rounded-[1.25rem] bg-surface h-[260px] md:h-[320px] ${work.className}`}
    >
      <Image
        src={work.image}
        alt={work.title}
        fill
        unoptimized
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-semibold text-white">{work.title}</h3>
        <p className="mt-1 text-sm text-white/70">{work.category}</p>
      </div>
    </a>
  );
}

export function Works() {
  return (
    <section id="works" className="bg-background py-20 lg:py-28">
      <Container>
        <StaggerReveal className="mb-12 flex flex-col items-center text-center" stagger={0.1}>
          <SectionTitle>Featured Work</SectionTitle>
        </StaggerReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.12}>
          {works.map((work) => (
            <WorkCard key={work.title} work={work} />
          ))}
        </StaggerReveal>

      </Container>
    </section>
  );
}
