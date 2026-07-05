"use client"

import { useState, useEffect } from "react";

interface MapCategorySelectorProps {
  mapMode: "default" | "sda" | "hubungan" | "trade";
  setMapMode: (mode: "default" | "sda" | "hubungan" | "trade") => void;
}

export default function MapCategorySelector({ mapMode, setMapMode }: MapCategorySelectorProps) {
  const [isTemporarilyHidden, setIsTemporarilyHidden] = useState(false);

  useEffect(() => {
    const handleHide = () => setIsTemporarilyHidden(true);
    const handleShow = () => setIsTemporarilyHidden(false);
    
    window.addEventListener('hide_strategy_modal', handleHide);
    window.addEventListener('show_strategy_modal', handleShow);
    
    return () => {
      window.removeEventListener('hide_strategy_modal', handleHide);
      window.removeEventListener('show_strategy_modal', handleShow);
    };
  }, []);

  if (isTemporarilyHidden) return null;

  return (
    <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex bg-[#FAF6EE] p-1 rounded-xl border-2 border-[#C4B49C] shadow-lg gap-1">
      <button
        onClick={() => setMapMode("default")}
        className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${mapMode === "default" ? "bg-[#e4dac3] text-[#5c3c10] shadow-sm" : "text-[#8b7e66] hover:text-[#5c3c10]"}`}
      >
        Peta Utama
      </button>
      <button
        onClick={() => setMapMode("sda")}
        className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${mapMode === "sda" ? "bg-[#e4dac3] text-emerald-700 shadow-sm" : "text-[#8b7e66] hover:text-[#5c3c10]"}`}
      >
        SDA
      </button>
      <button
        onClick={() => setMapMode("hubungan")}
        className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${mapMode === "hubungan" ? "bg-[#e4dac3] text-amber-700 shadow-sm" : "text-[#8b7e66] hover:text-[#5c3c10]"}`}
      >
        Hubungan
      </button>
      <button
        onClick={() => setMapMode("trade")}
        className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${mapMode === "trade" ? "bg-[#e4dac3] text-sky-700 shadow-sm" : "text-[#8b7e66] hover:text-[#5c3c10]"}`}
      >
        Perdagangan
      </button>
    </div>
  );
}
