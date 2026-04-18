'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { MapContainer, MapNavbar, Country } from './index';

export default function MainPagesSimulation() {
  const searchParams = useSearchParams();
  const countryId = searchParams.get('id');
  
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [stats, setStats] = useState({
    satisfaction: 50,
    stability: 50
  });

  useEffect(() => {
    if (countryId) {
      fetch('http://127.0.0.1:4000/api/countries')
        .then(res => res.json())
        .then(data => {
          const country = data.find((c: Country) => c.id.toString() === countryId);
          if (country) {
            setSelectedCountry(country);
          }
        })
        .catch(err => console.error('Failed to fetch country data:', err));
    }
  }, [countryId]);

  return (
    <main className="fixed inset-0 bg-[#070b14] overflow-hidden">
      {/* Simulation Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.02)_0%,transparent_100%)] pointer-events-none" />
      
      {/* HUD Navbar for Simulation Phase */}
      <MapNavbar 
        selectedCountry={selectedCountry} 
        isSimulation={true}
        satisfaction={stats.satisfaction}
        stability={stats.stability}
      />

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
                {selectedCountry && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                         <span className="text-emerald-400 font-mono text-[9px] uppercase block mb-1">Active Territory:</span>
                         <span className="text-white font-black text-sm uppercase">{selectedCountry.nama_negara}</span>
                    </div>
                )}
            </div>
        </div>

        {/* Integration of the shared Map component */}
        <MapContainer mode="MAIN" selectedCode={selectedCountry?.kode_negara} />

        {/* Overlay Vignette for atmosphere */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.5)]" />
      </div>
    </main>
  );
}
