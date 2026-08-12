"use client";

import React from "react";
import { X, Home } from "lucide-react";

interface DetailTunawismaModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail?: any;
  selectedCountry?: any;
}

export default function DetailTunawismaModal({
  isOpen,
  onClose,
  countryDetail,
  selectedCountry,
}: DetailTunawismaModalProps) {
  if (!isOpen) return null;

  const populasi = countryDetail?.jumlah_penduduk || 10_000_000;
  const homelessCount = countryDetail?.tunawisma ?? 0;
  const countryName = selectedCountry?.country || "Indonesia";
  const ratio = homelessCount / populasi;
  const factor = 1 + (ratio * 5);
  const formatNumber = (num: number) => num.toLocaleString('id-ID');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-xl border border-amber-500/20">
              <Home className="h-6 w-6 text-amber-700" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#5c3c10] tracking-tight leading-none uppercase">Tunawisma</h2>
              <p className="text-xs text-[#8b7e66] font-medium">Dampak tunawisma terhadap kematian di {countryName}</p>
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
                  <p className="text-sm font-black text-[#8b7e66] uppercase tracking-wider">Jumlah Tunawisma</p>
                  <p className="text-4xl font-black text-amber-700 mt-1">{formatNumber(homelessCount)} <span className="text-lg text-[#8b7e66] font-bold">jiwa</span></p>
                </div>
                <div className="p-4 bg-amber-50 rounded-full border border-amber-200">
                  <Home className="h-10 w-10 text-amber-600" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200">
                  <p className="text-[10px] text-[#8b7e66] font-black uppercase">Persentase</p>
                  <p className="text-xl font-black text-amber-700">{(ratio * 100).toFixed(2)}%</p>
                </div>
                <div className="bg-rose-50/60 p-3 rounded-xl border border-rose-200">
                  <p className="text-[10px] text-[#8b7e66] font-black uppercase">Faktor Pengali</p>
                  <p className="text-xl font-black text-rose-700">× {factor.toFixed(3)}</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-[#8b7e66] font-medium">
                Setiap 1% populasi tunawisma meningkatkan angka kematian sebesar 5%. Tunawisma erat kaitannya dengan masalah kesehatan dan kekurangan akses layanan dasar.
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