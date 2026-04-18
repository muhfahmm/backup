'use client';

import React, { useState } from 'react';
import MapContainer from '../sistem-map/shared/components/MapContainer';
import CountryCarousel from '../sistem-map/shared/components/CountryCarousel';
import MapNavbar from '../sistem-map/shared/components/MapNavbar';
import { Country } from '../sistem-map/shared/types/country';

export default function PilihNegaraPage() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedCoords, setSelectedCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country);
    setSelectedName(country.nama_negara);
    setSelectedCode(country.kode_negara);
    
    if (country.latitude && country.longitude) {
      setSelectedCoords({ 
        lat: Number(country.latitude), 
        lng: Number(country.longitude) 
      });
    }
  };

  return (
    <main className="fixed inset-0 bg-[#070b14] overflow-hidden">
      {/* Background Grid - Minimalist */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      <MapNavbar selectedCountry={selectedCountry} />

      {/* The Fullscreen Map Container */}
      <div className="w-full h-full">
        <MapContainer mode="MAIN" targetCoords={selectedCoords} selectedName={selectedName} selectedCode={selectedCode} />
      </div>

      <CountryCarousel onSelectCountry={handleSelectCountry} selectedName={selectedName} selectedCode={selectedCode} />


      {/* Overlay Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.5)]" />
    </main>
  );
}
