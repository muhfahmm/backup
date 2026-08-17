'use client';

import React, { useMemo } from 'react';
import { X, Search } from 'lucide-react';
import { COUNTRIES_DATA } from '../../../../../map_system/map-data';

interface TambahMitraBaruProps {
  isOpen: boolean;
  onClose: () => void;
  currentUserCountry: string; // Negara yang sedang digunakan user (tidak ditampilkan di daftar)
  partners: { nama_negara: string }[]; // Mitra saat ini (tidak bisa ditambahkan lagi)
  onAddPartner: (countryName: string, region: string) => void;
}

// Helper bendera
const getFlagEmoji = (iso: string) => {
  if (!iso || iso.length !== 2) return '';
  const codePoints = iso.toUpperCase().split('').map(c => 127397 + c.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

export default function TambahMitraBaru({
  isOpen,
  onClose,
  currentUserCountry,
  partners,
  onAddPartner,
}: TambahMitraBaruProps) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const currentPartnerNames = useMemo(() => {
    return new Set(partners.map((p) => p.nama_negara.toLowerCase().trim()));
  }, [partners]);

  // Filter 207 negara dari map-data (kecuali negara user dan yang sudah jadi mitra)
  const filteredCountries = useMemo(() => {
    return COUNTRIES_DATA.filter((item) => {
      const nameLower = item.country.toLowerCase().trim();
      const isUserCountry = nameLower === currentUserCountry.toLowerCase().trim();
      const isAlreadyPartner = currentPartnerNames.has(nameLower);
      const matchesSearch = item.country.toLowerCase().includes(searchQuery.toLowerCase());
      return !isUserCountry && !isAlreadyPartner && matchesSearch;
    });
  }, [currentUserCountry, currentPartnerNames, searchQuery]);

  // Kelompokkan berdasarkan benua
  const groupedByContinent = useMemo(() => {
    const groups: Record<string, typeof COUNTRIES_DATA> = {};
    filteredCountries.forEach((item) => {
      const continent = item.continent || 'Lainnya';
      if (!groups[continent]) {
        groups[continent] = [];
      }
      groups[continent].push(item);
    });
    return groups;
  }, [filteredCountries]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#0000000a] backdrop-blur-[1px] z-[70] flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />

        {/* HEADER */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight uppercase">Tambah Mitra Dagang Baru</h2>
            <p className="text-xs text-[#8b7e66] font-semibold mt-1">
              Pilih negara di bawah ini untuk memulai hubungan kemitraan dagang bilateral
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
          >
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Batal</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* BAR PENCARIAN */}
        <div className="px-8 py-4 bg-[#e4dac3]/20 border-b border-[#C4B49C]/20 relative z-10 shrink-0 flex items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8b7e66]" />
            <input
              type="text"
              placeholder="Cari nama negara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-[#C4B49C]/60 bg-white/80 text-sm font-semibold text-[#5c3c10] placeholder-[#8b7e66]/60 focus:outline-none focus:border-[#5c3c10] transition-colors"
            />
          </div>
        </div>

        {/* BODY LIST NEGARA */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          {Object.keys(groupedByContinent).length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20 text-[#8b7e66]">
              <Search className="h-12 w-12 mb-3 opacity-30 animate-pulse" />
              <p className="text-sm font-bold">Tidak ada negara ditemukan</p>
              <p className="text-xs">Coba masukkan kata kunci pencarian yang lain.</p>
            </div>
          ) : (
            <div className="space-y-10">
              {Object.entries(groupedByContinent).sort(([a], [b]) => a.localeCompare(b)).map(([continent, countries]) => (
                <div key={continent} className="space-y-4">
                  {/* Judul Benua */}
                  <h3 className="text-sm font-black text-[#5c3c10] uppercase tracking-widest border-b border-[#C4B49C]/40 pb-2 flex items-center justify-between">
                    <span>🌍 Benua {continent}</span>
                    <span className="text-[10px] bg-[#5c3c10]/10 text-[#5c3c10] px-2 py-0.5 rounded-full font-bold">
                      {countries.length} Negara
                    </span>
                  </h3>

                  {/* Grid Negara */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {countries.sort((a, b) => a.country.localeCompare(b.country)).map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          onAddPartner(item.country, item.continent || 'Internasional');
                        }}
                        className="bg-white/70 hover:bg-[#FAF6EE] border border-[#C4B49C]/40 hover:border-[#5c3c10] p-4 rounded-xl flex items-center gap-3 transition-all hover:shadow-md cursor-pointer text-left w-full group"
                      >
                        {/* Flag Image Rendering (Pinjaman & Hutang style) */}
                        {item.iso ? (
                          <div className="w-8 h-5 rounded-sm overflow-hidden border border-[#5c3c10]/20 flex-shrink-0 shadow-sm bg-[#e4dac3] relative group-hover:scale-105 transition-transform">
                            <img
                              src={`https://flagcdn.com/w80/${item.iso.toLowerCase()}.png`}
                              alt={item.country}
                              className="w-full h-full object-cover absolute inset-0"
                            />
                          </div>
                        ) : (
                          <div className="w-8 h-5 rounded-sm bg-[#e4dac3] border border-[#5c3c10]/20 flex-shrink-0 shadow-sm" />
                        )}
                        <div className="overflow-hidden">
                          <h4 className="text-xs font-bold text-[#5c3c10] group-hover:text-amber-800 transition-colors uppercase truncate">
                            {item.country}
                          </h4>
                          <p className="text-[9px] text-[#8b7e66] font-semibold uppercase truncate">
                            {item.capital}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}