import { Header } from "@/app/sections/Header";
import { Hero } from "@/app/sections/Hero";
import { About } from "@/app/sections/About";
import { Globe } from "@/app/sections/Globe";
import { Services } from "@/app/sections/Services";
import { Works } from "@/app/sections/Works";
import { AnimatedPin } from "@/app/sections/AnimatedPin";
import { Process } from "@/app/sections/Process";
import { Testimonials } from "@/app/sections/Testimonials";
import { Features } from "@/app/sections/Features";
import { PointerHighlightDemo } from "@/app/sections/PointerHighlight";
import { News } from "@/app/sections/News";
import { CTA } from "@/app/sections/CTA";
import { Footer } from "@/app/sections/Footer";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ScrollReveal direction="right">
          <About />
        </ScrollReveal>
        <Globe />
        <ScrollReveal direction="left">
          <Services />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <Works />
        </ScrollReveal>
        <ScrollReveal direction="left">
          <AnimatedPin />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <Process />
        </ScrollReveal>
        <ScrollReveal direction="left">
          <Features />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <Testimonials />
        </ScrollReveal>
        <PointerHighlightDemo />
        <ScrollReveal direction="left">
          <News />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <CTA />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
