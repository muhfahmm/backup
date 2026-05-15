'use client';

import React, { useState, useEffect } from 'react';
import { WORLD_GEOJSON, COUNTRIES_DATA, CAPITALS_DATA } from './map-data';

export default function MapPage() {
  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  const [simState, setSimState] = useState({
    isPaused: true,
    speed: 1,
    date: '01-01-2026'
  });

  // Initial data fetch
  useEffect(() => {
    const initMap = async () => {
        try {
            const wasm = await import('../../../wasm/map-engine-rs/map_engine_rs');
            wasm.start_map_engine(
                "map-canvas",
                WORLD_GEOJSON,
                COUNTRIES_DATA,
                CAPITALS_DATA
            );
        } catch (e) {
            console.error("Failed to start map engine:", e);
        }
    };
    initMap();
  }, []);


  return (
    <main className="fixed inset-0 bg-[#070b14] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.02)_0%,transparent_100%)] pointer-events-none" />
      
      <div className="w-full h-full relative">
        <canvas id="map-canvas" className="w-full h-full block cursor-grab active:cursor-grabbing" />

        {/* Global FX */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.6)] vignette-gradient" />
      </div>
    </main>
  );
}
