"use client";

import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

export default function GlobeModel() {
  const globeRef = useRef();
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const update = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.clientWidth);
        setHeight(containerRef.current.clientHeight);
      }
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!globeRef.current) return;
    const controls = globeRef.current.controls();
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.6;
      controls.enableZoom = false;
    }
  }, [width, height]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%", minHeight: 320 }}>
      <Globe
        ref={globeRef}
        width={width}
        height={height}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        showAtmosphere
        atmosphereColor="#2563eb"
        atmosphereAltitude={0.15}
      />
    </div>
  );
}
