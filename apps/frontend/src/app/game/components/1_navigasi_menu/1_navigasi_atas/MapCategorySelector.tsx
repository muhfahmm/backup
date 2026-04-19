"use client"

import NavAtasUtama from "./NavAtasUtama";
import NavAtasSDA from "./NavAtasSDA";
import NavAtasHubungan from "./NavAtasHubungan";
import NavAtasPerdagangan from "./NavAtasPerdagangan";

interface MapCategorySelectorProps {
  currentMode: 'default' | 'sda' | 'hubungan' | 'trade';
  onModeChange: (mode: 'default' | 'sda' | 'hubungan' | 'trade') => void;
}

export default function MapCategorySelector({ currentMode, onModeChange }: MapCategorySelectorProps) {
  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] w-max">
      <nav className="flex items-center gap-1 bg-zinc-950/80 backdrop-blur-2xl px-2 py-1.5 rounded-2xl border border-white/5 shadow-2xl">
        <NavAtasUtama 
          isActive={currentMode === 'default'} 
          onClick={() => onModeChange('default')} 
        />
        <NavAtasSDA 
          isActive={currentMode === 'sda'} 
          onClick={() => onModeChange('sda')} 
        />
        <NavAtasHubungan 
          isActive={currentMode === 'hubungan'} 
          onClick={() => onModeChange('hubungan')} 
        />
        <NavAtasPerdagangan 
          isActive={currentMode === 'trade'} 
          onClick={() => onModeChange('trade')} 
        />
      </nav>
    </div>
  );
}
