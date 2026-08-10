"use client";

import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";

export function World({ data, globeConfig, width = "100%", height = "100%" }) {
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current && globeConfig?.initialPosition) {
      globeRef.current.pointOfView(
        {
          lat: globeConfig.initialPosition.lat,
          lng: globeConfig.initialPosition.lng,
          altitude: 2.5,
        },
        1000
      );
    }
  }, [globeConfig?.initialPosition]);

  const globeMaterial = new THREE.MeshPhongMaterial({
    color: globeConfig?.globeColor || "#062056",
    emissive: globeConfig?.emissive || "#062056",
    emissiveIntensity: globeConfig?.emissiveIntensity || 0.1,
    shininess: globeConfig?.shininess || 0.9,
    opacity: 1,
    transparent: false,
  });

  const points = data?.map((d) => ({
    lat: d.endLat,
    lng: d.endLng,
    color: d.color,
    radius: d.arcAlt * 2 + 0.5,
  })) || [];

  return (
    <Globe
      ref={globeRef}
      width={width}
      height={height}
      backgroundColor="rgba(0,0,0,0)"
      showAtmosphere={globeConfig?.showAtmosphere}
      atmosphereColor={globeConfig?.atmosphereColor}
      atmosphereAltitude={globeConfig?.atmosphereAltitude}
      arcsData={data}
      arcStartLat="startLat"
      arcStartLng="startLng"
      arcEndLat="endLat"
      arcEndLng="endLng"
      arcColor="color"
      arcAltitude="arcAlt"
      arcDashLength={globeConfig?.arcLength ?? 0.9}
      arcDashGap={0.2}
      arcDashInitialGap={(d) => (d.order ?? 1) * 0.1}
      arcDashAnimateTime={globeConfig?.arcTime ?? 1000}
      arcStroke={0.5}
      pointsData={points}
      pointLat="lat"
      pointLng="lng"
      pointColor="color"
      pointRadius="radius"
      pointAltitude={0.01}
      ringsData={points}
      ringLat="lat"
      ringLng="lng"
      ringColor="color"
      ringMaxRadius={globeConfig?.rings ? 3 : 0}
      ringPropagationSpeed={globeConfig?.rings ? 1 : 0}
      ringRepeatPeriod={globeConfig?.maxRings ? 2000 : 0}
      autoRotate={globeConfig?.autoRotate}
      autoRotateSpeed={globeConfig?.autoRotateSpeed}
      globeMaterial={globeMaterial}
    />
  );
}
