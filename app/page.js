import { Header } from "@/app/sections/Header";
import { Hero } from "@/app/sections/Hero";
import { Stats } from "@/app/sections/Stats";
import { About } from "@/app/sections/About";
import { Globe } from "@/app/sections/Globe";
import { Services } from "@/app/sections/Services";
import { Works } from "@/app/sections/Works";
import { Parallax } from "@/app/sections/Parallax";
import { Process } from "@/app/sections/Process";
import { FAQ } from "@/app/sections/FAQ";
import { Comet } from "@/app/sections/Comet";
import { Testimonials } from "@/app/sections/Testimonials";
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
        <Stats />
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
        <Parallax />
        <ScrollReveal direction="left">
          <Process />
        </ScrollReveal>
        <FAQ />
        <Comet />
        <ScrollReveal direction="right">
          <Testimonials />
        </ScrollReveal>
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
