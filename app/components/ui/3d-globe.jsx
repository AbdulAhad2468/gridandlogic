"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

function hexToRgb(hex) {
  if (!hex) return null;
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255,
      ]
    : null;
}

export function Globe3D({ markers, config, onMarkerClick, onMarkerHover }) {
  const canvasRef = useRef(null);
  const phiRef = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const updateSize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      const size = rect ? Math.min(rect.width, rect.height || rect.width) : 600;
      return size;
    };

    let size = updateSize();

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: size * 2,
      height: size * 2,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.2,
      scale: 1.2,
      mapSamples: 16000,
      mapBrightness: 7,
      baseColor: [0.05, 0.05, 0.08],
      markerColor: hexToRgb(config?.markerColor) || [0.18, 0.83, 0.75],
      glowColor: hexToRgb(config?.atmosphereColor) || [0.31, 0.78, 0.47],
      offset: [0, 0],
      markers: (markers || []).map((m) => ({
        location: [m.lat, m.lng],
        size: m.size || 0.05,
        color: m.color ? hexToRgb(m.color) : undefined,
      })),
      arcs: (config?.arcs || []).map((a) => ({
        from: [a.from.lat, a.from.lng],
        to: [a.to.lat, a.to.lng],
        color: a.color ? hexToRgb(a.color) : undefined,
      })),
      arcColor: hexToRgb(config?.arcColor) || [0.31, 0.78, 0.47],
      arcWidth: 0.4,
      arcHeight: 0.3,
      markerElevation: 0.02,
      onRender: (state) => {
        state.phi = phiRef.current;
        phiRef.current += config?.autoRotateSpeed || 0.003;
      },
    });

    const timer = setTimeout(() => {
      canvas.style.opacity = "1";
    }, 100);

    const onResize = () => {
      size = updateSize();
      globe.update({ width: size * 2, height: size * 2 });
    };

    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, [markers, config]);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full opacity-0 transition-opacity duration-1000"
      style={{ aspectRatio: 1 }}
    />
  );
}
