"use client";

import React from "react";
import { X, Factory } from "lucide-react";

interface DetailPolusiModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail?: any;
  selectedCountry?: any;
}

export default function DetailPolusiModal({
  isOpen,
  onClose,
  countryDetail,
  selectedCountry,
}: DetailPolusiModalProps) {
  if (!isOpen) return null;

  const polusiIndex = countryDetail?.polusi_index ?? 40;
  const countryName = selectedCountry?.country || "Indonesia";
  const factor = 1 + (polusiIndex / 200);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-500/10 rounded-xl border border-gray-500/20">
              <Factory className="h-6 w-6 text-gray-700" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#5c3c10] tracking-tight leading-none uppercase">Tingkat Polusi</h2>
              <p className="text-xs text-[#8b7e66] font-medium">Pengaruh polusi terhadap kematian di {countryName}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-white/60 border-2 border-[#C4B49C]/20 p-6 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-[#8b7e66] uppercase tracking-wider">Indeks Polusi</p>
                  <p className="text-4xl font-black text-gray-700 mt-1">{polusiIndex}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-full border border-gray-200">
                  <Factory className="h-10 w-10 text-gray-600" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-gray-50/60 p-3 rounded-xl border border-gray-200">
                  <p className="text-[10px] text-[#8b7e66] font-black uppercase">Faktor Pengali</p>
                  <p className="text-xl font-black text-gray-700">× {factor.toFixed(3)}</p>
                </div>
                <div className="bg-red-50/60 p-3 rounded-xl border border-red-200">
                  <p className="text-[10px] text-[#8b7e66] font-black uppercase">Setiap 10 poin polusi</p>
                  <p className="text-xl font-black text-red-700">menambah 5% kematian</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-[#8b7e66] font-medium">
                Polusi udara dan lingkungan berkontribusi pada penyakit pernapasan dan kardiovaskular yang meningkatkan angka kematian.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-[#FAF6EE] border-t-2 border-[#C4B49C]/20 flex justify-end relative z-10 shrink-0">
          <button onClick={onClose} className="px-8 py-3 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all font-black text-xs uppercase tracking-wider cursor-pointer">Tutup</button>
        </div>
      </div>
    </div>
  );
}