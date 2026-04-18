'use client';

import React, { useState } from 'react';
import { MapContainer, MapNavbar } from './index';

export default function MainPagesSimulation() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <main className="fixed inset-0 bg-[#070b14] overflow-hidden">
      {/* Simulation Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.02)_0%,transparent_100%)] pointer-events-none" />
      
      {/* Reusing existing Navbar structure for simulation phase */}
      <MapNavbar selectedCountry={selectedCountry} />

      <div className="w-full h-full pt-20">
        {/* Placeholder for Simulation Controls / HUD */}
        <div className="absolute top-24 left-8 z-40 bg-[#070b14]/80 border border-emerald-500/20 p-6 backdrop-blur-md">
            <h2 className="text-emerald-500 font-black text-xs tracking-[0.4em] uppercase mb-4">Simulation Active</h2>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-emerald-500 animate-pulse" />
                    <span className="text-white/40 font-mono text-[10px] uppercase">Engine Status: Optimal</span>
                </div>
                <div className="flex items-center gap-4 text-white/40 font-mono text-[10px] uppercase">
                    <span className="w-2"></span> DATA SYNC: 100%
                </div>
            </div>
        </div>

        {/* Integration of the shared Map component */}
        <MapContainer mode="MAIN" />

        {/* Overlay Vignette for atmosphere */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.5)]" />
      </div>
    </main>
  );
}
