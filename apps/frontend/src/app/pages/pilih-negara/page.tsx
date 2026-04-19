'use client';

import React, { useState } from 'react';
import MapContainer from '../../map-system/components/MapContainer';
import CountryCarousel from '../../map-system/components/CountryCarousel';
import MapNavbar from '../../map-system/components/MapNavbar';
import { Country } from '../../map-system/types/country';

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
      <MapNavbar selectedCountry={selectedCountry} />

      {/* The Fullscreen Map Container */}
      <div className="w-full h-full">
        <MapContainer mode="MAIN" targetCoords={selectedCoords} selectedName={selectedName} selectedCode={selectedCode} onSelectCountry={handleSelectCountry} />
      </div>

      <CountryCarousel onSelectCountry={handleSelectCountry} selectedName={selectedName} selectedCode={selectedCode} />

      {/* Overlay Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.5)]" />
    </main>
  );
}
