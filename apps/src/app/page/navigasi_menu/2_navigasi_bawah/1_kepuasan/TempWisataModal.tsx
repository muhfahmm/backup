"use client"

import { useMemo } from "react";
import { X, Landmark, MapPin, DollarSign, TrendingUp } from "lucide-react";
import { getTourismAttractions } from "@/app/lib/tourismDatabaseData";

interface TempWisataModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  selectedCountry: any;
  setActiveMenu?: (menu: string) => void;
}

export default function TempWisataModal({
  isOpen,
  onClose,
  countryDetail,
  selectedCountry,
  setActiveMenu
}: TempWisataModalProps) {
  // Setelah semua hooks dipanggil, barulah boleh melakukan early return
  if (!isOpen) return null;

  const countryName = selectedCountry?.country || "Country";
  const countryId = selectedCountry?.id;

  const attractions = useMemo(() => {
    const fallbackName = countryName || selectedCountry?.name || selectedCountry?.nama;
    return getTourismAttractions(fallbackName, countryId);
  }, [countryId, countryName, selectedCountry]);
  
  // Calculate total tourism income
  const totalTourismIncome = attractions.reduce((sum: number, attraction: any) => 
    sum + (attraction.penghasilan || 0), 0
  );

  // Calculate average income per attraction
  const avgIncome = attractions.length > 0 
    ? Math.round(totalTourismIncome / attractions.length) 
    : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        
        {/* Parchment radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        {/* Header */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                <Landmark className="h-6 w-6 text-[#5c3c10]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Kepuasan Rakyat</h2>
                <p className="text-xs text-[#8b7e66] font-semibold mt-1">{countryName}</p>
              </div>
            </div>

            {/* Cross-modal Tab Navigation — matches Statistik & NaikkanKepuasan */}
            <div className="flex items-center bg-[#e4dac3]/40 p-1 rounded-xl border border-[#bfae93]/50 backdrop-blur-md ml-4">
              <button
                onClick={() => setActiveMenu?.("Dashboard:Kepuasan")}
                className="px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all text-[#8b7e66] hover:text-[#5c3c10] cursor-pointer"
              >
                Statistik
              </button>
              <button
                onClick={() => setActiveMenu?.("Action:NaikkanKepuasan")}
                className="px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all text-[#8b7e66] hover:text-[#5c3c10] cursor-pointer"
              >
                Naikkan Kepuasan
              </button>
              <button
                className="px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20 cursor-pointer"
              >
                Tempat Wisata
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
          >
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#e4dac3]/25 border-2 border-[#C4B49C]/40 p-5 rounded-2xl flex items-center gap-4 shadow-sm">
                <div className="p-3 rounded-xl bg-[#5c3c10]/10 border border-[#5c3c10]/20">
                  <MapPin className="h-6 w-6 text-[#5c3c10]" />
                </div>
                <div>
                  <p className="text-xs text-[#8b7e66] font-bold uppercase tracking-wider">Total Tempat Wisata</p>
                  <p className="text-2xl font-black text-[#5c3c10] leading-none mt-1">{attractions.length}</p>
                </div>
              </div>

              <div className="bg-[#e4dac3]/25 border-2 border-[#C4B49C]/40 p-5 rounded-2xl flex items-center gap-4 shadow-sm">
                <div className="p-3 rounded-xl bg-emerald-600/10 border border-emerald-600/20">
                  <DollarSign className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <p className="text-xs text-[#8b7e66] font-bold uppercase tracking-wider">Total Pendapatan</p>
                  <p className="text-2xl font-black text-emerald-700 leading-none mt-1">
                    {totalTourismIncome.toLocaleString("id-ID")} EM
                  </p>
                </div>
              </div>

              <div className="bg-[#e4dac3]/25 border-2 border-[#C4B49C]/40 p-5 rounded-2xl flex items-center gap-4 shadow-sm">
                <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-600/20">
                  <TrendingUp className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <p className="text-xs text-[#8b7e66] font-bold uppercase tracking-wider">Rata-rata/Tempat</p>
                  <p className="text-2xl font-black text-blue-700 leading-none mt-1">
                    {avgIncome.toLocaleString("id-ID")} EM
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5 px-1">
                <div className="p-1.5 rounded-lg bg-[#e4dac3]/50 border border-[#C4B49C]/40">
                  <Landmark className="h-4 w-4 text-[#5c3c10]" />
                </div>
                <h3 className="text-lg font-black text-[#5c3c10] uppercase tracking-wider">Daftar Tempat Wisata</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C4B49C] to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="space-y-3">
                {attractions.length === 0 ? (
                  <div className="bg-[#FAF6EE] border-2 border-[#C4B49C]/40 p-4 rounded-xl text-sm text-[#8b7e66]">
                    Belum ada data tempat wisata untuk {countryName}.
                  </div>
                ) : (
                  attractions.map((attraction: any, idx: number) => (
                    <div
                      key={idx}
                      className="bg-[#FAF6EE] border-2 border-[#C4B49C]/40 p-4 rounded-xl flex items-center justify-between transition-all hover:bg-[#e4dac3]/10 shadow-sm"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-10 h-10 rounded-lg bg-[#e4dac3]/50 border border-[#C4B49C]/40 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-black text-[#5c3c10]">{idx + 1}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-[#5c3c10]">{attraction.nama}</p>
                          <p className="text-xs text-[#8b7e66] mt-1">Penghasilan Bulanan</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-black text-emerald-700">
                          +{attraction.penghasilan.toLocaleString("id-ID")} EM
                        </p>
                        <p className="text-[10px] text-[#8b7e66] font-bold mt-1">/ bulan</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-6 rounded-xl space-y-3 mt-6">
              <h4 className="text-[10px] text-[#5c3c10] font-black uppercase tracking-wider">Ringkasan Pendapatan</h4>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-[#5c3c10] py-2 border-b border-[#C4B49C]/20">
                  <span>Total Tempat Wisata:</span>
                  <span>{attractions.length}</span>
                </div>
                <div className="flex justify-between items-center text-xs font-bold text-emerald-700 py-2 border-b border-[#C4B49C]/20">
                  <span>Total Pendapatan Bulanan:</span>
                  <span>+{totalTourismIncome.toLocaleString("id-ID")} EM</span>
                </div>
                <div className="flex justify-between items-center text-xs font-bold text-blue-700 py-2">
                  <span>Rata-rata per Tempat:</span>
                  <span>{avgIncome.toLocaleString("id-ID")} EM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}