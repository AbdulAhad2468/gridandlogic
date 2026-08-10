"use client";

import { Container } from "@/app/components/ui/Container";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { Globe3D } from "@/app/components/ui/3d-globe";

const markers = [
  { lat: 40.7128, lng: -74.006, label: "New York" },
  { lat: 51.5074, lng: -0.1278, label: "London" },
  { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
  { lat: -33.8688, lng: 151.2093, label: "Sydney" },
  { lat: 48.8566, lng: 2.3522, label: "Paris" },
  { lat: 28.6139, lng: 77.209, label: "New Delhi" },
  { lat: 55.7558, lng: 37.6173, label: "Moscow" },
  { lat: -22.9068, lng: -43.1729, label: "Rio de Janeiro" },
  { lat: 31.2304, lng: 121.4737, label: "Shanghai" },
  { lat: 25.2048, lng: 55.2708, label: "Dubai" },
  { lat: -34.6037, lng: -58.3816, label: "Buenos Aires" },
  { lat: 1.3521, lng: 103.8198, label: "Singapore" },
  { lat: 37.5665, lng: 126.978, label: "Seoul" },
];

export function Globe() {
  return (
    <section className="relative bg-background py-20 lg:py-28 overflow-hidden">
      <Container>
        <ScrollReveal className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            We work across the world.
          </h2>
          <p className="mt-3 text-white/60 max-w-xl">
            Remote-first, global reach — from New York to Tokyo.
          </p>
        </ScrollReveal>
      </Container>

      <div className="relative mx-auto aspect-square w-full max-w-3xl px-6">
        <Globe3D
          markers={markers}
          config={{
            atmosphereColor: "#2dd4bf",
            markerColor: "#2dd4bf",
            autoRotateSpeed: 0.005,
          }}
        />
      </div>
    </section>
  );
}
