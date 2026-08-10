"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { cn } from "@/app/lib/utils";

export function HeroParallax({ products, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yFirst = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const ySecond = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const xFirst = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const xSecond = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const firstRow = products?.slice(0, 5) || [];
  const secondRow = products?.slice(5, 10) || [];

  return (
    <div
      ref={ref}
      className={cn(
        "relative h-[180vh] overflow-hidden bg-background",
        className
      )}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden py-20">
        <div className="z-10 text-center mb-10 px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Trusted by forward-thinking teams
          </h2>
          <p className="mt-3 text-white/60 max-w-xl mx-auto">
            A selection of products and brands we have helped ship.
          </p>
        </div>

        <motion.div
          style={{ x: xFirst, y: yFirst }}
          className="mb-8 flex min-w-max gap-6 px-6"
        >
          {firstRow.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </motion.div>

        <motion.div
          style={{ x: xSecond, y: ySecond }}
          className="flex min-w-max gap-6 px-6"
        >
          {secondRow.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-[18rem] md:w-[24rem] h-[12rem] md:h-[16rem] rounded-xl overflow-hidden bg-surface border border-border/40 hover:border-primary/40 transition-colors"
    >
      <Image
        src={product.thumbnail}
        alt={product.title}
        fill
        unoptimized
        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
        sizes="(max-width: 768px) 80vw, 24rem"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-white font-semibold">{product.title}</h3>
      </div>
    </a>
  );
}
