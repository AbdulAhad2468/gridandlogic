import { Header } from "@/app/sections/Header";
import { Hero } from "@/app/sections/Hero";
import { About } from "@/app/sections/About";
import { Stats } from "@/app/sections/Stats";
import { Services } from "@/app/sections/Services";
import { Works } from "@/app/sections/Works";
import { Workflow } from "@/app/sections/Workflow";
import { Globe } from "@/app/sections/Globe";
import { CTA } from "@/app/sections/CTA";
import { Footer } from "@/app/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Stats />
        <Services />
        <Works />
        <Workflow />
        <Globe />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
