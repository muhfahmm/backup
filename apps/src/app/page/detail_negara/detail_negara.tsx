'use client';

import { useState } from "react";
import { X, Globe, Landmark, Shield, Gift } from 'lucide-react';
import { COUNTRIES_DATA } from '../map_system/map-data';

// Import 4 komponen terpisah
import InformasiUmum from "./1_informasi_umum/informasi_umum";
import Geopolitik from "./2_geopolitik/geopolitik";
import OperasiMiliter from "./3_operasi_militer/operasi_militer";

interface CountryDetailModalProps {
  isOpen: boolean;
  countryName: string | null;
  onClose: () => void;
}

export function CountryDetailModal({ isOpen, countryName, onClose }: CountryDetailModalProps) {
  // State untuk menu tab
  const [activeTab, setActiveTab] = useState<"informasi" | "geopolitik" | "militer" | "hadiah">("informasi");

  if (!isOpen || !countryName) return null;

  // Ambil data negara dari map-data
  const countryData = COUNTRIES_DATA?.find(
    (c) => c.country?.toLowerCase() === countryName.toLowerCase()
  );
  const iso = countryData?.iso || "";
  const capital = countryData?.capital || "Data tidak tersedia";

  // Fungsi Helper untuk bendera di Header
  const renderFlagHeader = (iso: string | undefined, altName: string) => {
    if (!iso || iso.length !== 2) return <span className="text-xl leading-none">🌐</span>;
    return (
      <div className="w-8 h-5 rounded-sm overflow-hidden border border-[#5c3c10]/20 flex-shrink-0 shadow-sm bg-[#e4dac3] relative flex items-center justify-center">
        <img
          src={`https://flagcdn.com/w80/${iso.toLowerCase()}.png`}
          alt={altName}
          className="w-full h-full object-cover absolute inset-0"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <span className="text-sm opacity-50 select-none">🌐</span>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        {/* HEADER Modal */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              
              {/* 1. Icon Globe */}
              <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                <Globe className="h-6 w-6 text-[#5c3c10]" />
              </div>
              
              {/* 2. Judul & Subjudul */}
              <div>
                {/* Judul Utama */}
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">
                  DETAIL NEGARA
                </h2>
                
                {/* Subjudul berisi Bendera + Nama Negara + Ibukota */}
                <div className="flex items-center gap-2 mt-1">
                  {renderFlagHeader(iso, countryName)}
                  <p className="text-[10px] text-[#8b7e66] font-semibold uppercase tracking-wider">
                    {countryName}, {capital}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Tombol Tutup */}
          <button
            onClick={onClose}
            className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
            aria-label="Tutup detail negara"
          >
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* BODY CONTENT */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="max-w-4xl mx-auto">
            
            {/* Menu 4 Tab Navigasi */}
            <div className="bg-[#e4dac3]/40 p-1 rounded-xl border border-[#C4B49C]/40 inline-flex mb-6 shadow-sm flex-wrap gap-1">
              <button
                onClick={() => setActiveTab("informasi")}
                className={`px-5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "informasi" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20" : "text-[#8b7e66] hover:text-[#5c3c10]"
                }`}
              >
                <Globe className="h-3.5 w-3.5" /> Informasi Umum
              </button>
              <button
                onClick={() => setActiveTab("geopolitik")}
                className={`px-5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "geopolitik" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20" : "text-[#8b7e66] hover:text-[#5c3c10]"
                }`}
              >
                <Landmark className="h-3.5 w-3.5" /> Geopolitik
              </button>
              <button
                onClick={() => setActiveTab("militer")}
                className={`px-5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "militer" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20" : "text-[#8b7e66] hover:text-[#5c3c10]"
                }`}
              >
                <Shield className="h-3.5 w-3.5" /> Operasi Militer
              </button>
            </div>

            {/* Render 4 Komponen Berdasarkan Active Tab */}
            {activeTab === "informasi" && (
              <InformasiUmum countryName={countryName} />
            )}

            {activeTab === "geopolitik" && (
              /* PERBAIKAN: Hanya mengirim countryName, hapus countryData */
              <Geopolitik countryName={countryName} />
            )}

            {activeTab === "militer" && (
              <OperasiMiliter countryName={countryName} />
            )}

          </div>
        </div>

      </div>
    </div>
  );
}