"use client";

import { Container } from "@/app/components/ui/Container";
import { SectionTitle } from "@/app/components/ui/SectionTitle";
import { StaggerReveal } from "@/app/components/animation/StaggerReveal";
import { PinContainer } from "@/app/components/ui/3d-pin";

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
    image: "/images/ecomerce%20website.png",
    href: "https://e-commerce-chi-eight-35.vercel.app/",
    className: "md:col-span-1",
  },
];

function WorkCard({ work }) {
  return (
    <PinContainer title={work.title} href={work.href} className="w-full h-full" containerClassName="w-full h-[24rem]">
      <div className="flex basis-full flex-col p-4 tracking-tight text-white/50 sm:basis-1/2 w-[20rem] h-[20rem] rounded-2xl border border-white/10 bg-surface/80">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-white">
          {work.title}
        </h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-white/60">{work.category}</span>
        </div>
        <div
          className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
          style={{ backgroundImage: `url(${work.image})` }}
        />
      </div>
    </PinContainer>
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
