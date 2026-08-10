"use client";

import { HeroParallax } from "@/app/components/ui/hero-parallax";

const products = [
  {
    title: "Pixel Nest Agency",
    link: "https://pixelnestagy.vercel.app",
    thumbnail: "/images/pixelnest.png",
  },
  {
    title: "Sofa Configurator",
    link: "https://abdulahad2468.github.io/sofa-configrator/",
    thumbnail: "/images/sofa-configrator.png",
  },
  {
    title: "Clothing Store",
    link: "https://clothing-lovat.vercel.app/",
    thumbnail: "/images/clothing%20store.png",
  },
  {
    title: "E-commerce",
    link: "https://e-commerce-chi-eight-35.vercel.app/",
    thumbnail: "/images/ecomerce%20website.png",
  },
  {
    title: "Pixel Nest",
    link: "https://pixelnestagy.vercel.app",
    thumbnail: "/images/pixelnest.png",
  },
  {
    title: "Sofa 3D",
    link: "https://abdulahad2468.github.io/sofa-configrator/",
    thumbnail: "/images/sofa-configrator.png",
  },
  {
    title: "Clothing",
    link: "https://clothing-lovat.vercel.app/",
    thumbnail: "/images/clothing%20store.png",
  },
  {
    title: "E-com",
    link: "https://e-commerce-chi-eight-35.vercel.app/",
    thumbnail: "/images/ecomerce%20website.png",
  },
  {
    title: "Pixel",
    link: "https://pixelnestagy.vercel.app",
    thumbnail: "/images/pixelnest.png",
  },
  {
    title: "Config",
    link: "https://abdulahad2468.github.io/sofa-configrator/",
    thumbnail: "/images/sofa-configrator.png",
  },
];

export function Parallax() {
  return <HeroParallax products={products} />;
}
