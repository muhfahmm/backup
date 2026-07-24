'use client';

import { X, Globe, MapPin } from 'lucide-react';
// PERBAIKAN: Import data dari map-data.ts
import { COUNTRIES_DATA } from '../map_system/map-data';

interface CountryDetailModalProps {
  isOpen: boolean;
  countryName: string | null;
  onClose: () => void;
}

// Fungsi helper bendera (Anti broken image) - Menggunakan ISO dari map-data
const renderFlag = (iso: string | undefined, altName: string, size: "lg" | "md" = "md") => {
  if (!iso || iso.length !== 2) return <span className="text-4xl">🌐</span>;
  const wClass = size === "lg" ? "w-24 h-16" : "w-8 h-5";
  return (
    <div className={`${wClass} rounded-lg overflow-hidden border-2 border-[#C4B49C]/50 flex-shrink-0 shadow-sm bg-[#e4dac3] relative flex items-center justify-center`}>
      <img
        src={`https://flagcdn.com/w160/${iso.toLowerCase()}.png`}
        alt={altName}
        className="w-full h-full object-cover absolute inset-0"
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
      />
      <span className="text-2xl opacity-40 select-none">🌐</span>
    </div>
  );
};

export function CountryDetailModal({ isOpen, countryName, onClose }: CountryDetailModalProps) {
  if (!isOpen || !countryName) return null;

  // PERBAIKAN 1: Hapus c.name, karena hanya ada c.country
  const countryData = COUNTRIES_DATA?.find(
    (c) => c.country?.toLowerCase() === countryName.toLowerCase()
  );

  // Ambil nilai dari data yang ditemukan, atau fallback jika data tidak ada
  const iso = countryData?.iso || "";
  
  // PERBAIKAN 2: Hapus capital_city, karena hanya ada properti capital
  const capital = countryData?.capital || "Data tidak tersedia";

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        {/* HEADER Modal */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                <Globe className="h-6 w-6 text-[#5c3c10]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">
                  Detail Negara
                </h2>
                <p className="text-[10px] text-[#8b7e66] font-semibold mt-1 uppercase tracking-wider">
                  Profil & Informasi Umum
                </p>
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
          <div className="space-y-8 max-w-4xl mx-auto">
            
            {/* Kartu Informasi Utama (Bendera & Ibukota dari map-data) */}
            <div className="bg-white/70 border border-[#C4B49C]/30 p-8 rounded-2xl shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8">
              
              {/* 1. Bagian Bendera (Kiri) */}
              <div className="flex-shrink-0">
                {renderFlag(iso, countryName, "lg")}
              </div>

              {/* 2. Bagian Teks (Kanan) */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-black text-[#5c3c10] uppercase tracking-tight mb-1">
                  {countryName}
                </h3>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm text-[#8b7e66]">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#5c3c10]" />
                    <span className="font-bold uppercase tracking-wider">Ibukota:</span>
                    <span className="font-black text-[#5c3c10] text-base">{capital}</span>
                  </div>
                  {iso && (
                    <span className="px-2 py-0.5 bg-[#5c3c10]/10 text-[#5c3c10] border border-[#5c3c10]/20 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      ISO: {iso.toUpperCase()}
                    </span>
                  )}
                </div>

                {/* Garis Pemisah & Deskripsi Singkat */}
                <div className="mt-4 pt-4 border-t border-[#C4B49C]/20">
                  <p className="text-sm text-[#8b7e66] leading-relaxed">
                    Anda sedang membuka profil lengkap untuk negara <span className="font-bold text-[#5c3c10]">{countryName}</span>. Data bendera dan ibukota diambil langsung dari database peta <code className="bg-[#e4dac3]/50 px-1 rounded border border-[#C4B49C]/30">map-data.ts</code>.
                  </p>
                </div>
              </div>
            </div>

            {/* Grid Dashboard pengembangan ke depan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-6 rounded-xl shadow-sm text-center hover:bg-[#FAF6EE] transition-colors">
                <h4 className="text-sm font-black text-[#5c3c10] uppercase tracking-wider">Demografi</h4>
                <p className="text-[10px] text-[#8b7e66] mt-2">Data populasi & komposisi etnis</p>
              </div>
              <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-6 rounded-xl shadow-sm text-center hover:bg-[#FAF6EE] transition-colors">
                <h4 className="text-sm font-black text-[#5c3c10] uppercase tracking-wider">Ekonomi & Dagang</h4>
                <p className="text-[10px] text-[#8b7e66] mt-2">PDB, pendapatan per kapita, & neraca dagang</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}