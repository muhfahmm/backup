'use client';

import React from 'react';
import MapContainer from '../sistem-map/shared/components/MapContainer';

export default function PilihNegaraPage() {
  return (
    <main className="fixed inset-0 bg-[#070b14] overflow-hidden">
      {/* Background Grid - Minimalist */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      {/* The Fullscreen Map Container */}
      <div className="w-full h-full">
        <MapContainer mode="MAIN" />
      </div>


      {/* Overlay Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.5)]" />
    </main>
  );
}
