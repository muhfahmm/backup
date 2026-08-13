"use client";

import React from "react";
import { X, Shield } from "lucide-react";
import { calculateKeamananLogic } from "../logic/keamananLogic";

interface DetailKeamananModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail?: any;
  selectedCountry?: any;
}

export default function DetailKeamananModal({
  isOpen,
  onClose,
  countryDetail,
  selectedCountry,
}: DetailKeamananModalProps) {
  if (!isOpen) return null;

  const populasi = countryDetail?.jumlah_penduduk || 10_000_000;
  const result = calculateKeamananLogic(countryDetail, populasi);
  const countryName = selectedCountry?.country || "Indonesia";
  const formatNumber = (num: number) => num.toLocaleString('id-ID');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
              <Shield className="h-6 w-6 text-indigo-700" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#5c3c10] tracking-tight leading-none uppercase">Tingkat Keamanan</h2>
              <p className="text-xs text-[#8b7e66] font-medium">Pengaruh keamanan terhadap kematian di {countryName}</p>
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
                  <p className="text-sm font-black text-[#8b7e66] uppercase tracking-wider">Indeks Keamanan</p>
                  <p className="text-4xl font-black text-indigo-700 mt-1">{result.tingkatKeamanan}%</p>
                </div>
                <div className="p-4 bg-indigo-50 rounded-full border border-indigo-200">
                  <Shield className="h-10 w-10 text-indigo-600" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-indigo-50/60 p-3 rounded-xl border border-indigo-200">
                  <p className="text-[10px] text-[#8b7e66] font-black uppercase">Bangunan Penegakan Hukum</p>
                  <p className="text-xl font-black text-indigo-700">{result.totalBangunanHukum} / {result.idealHukum}</p>
                </div>
                <div className="bg-[#e4dac3]/30 p-3 rounded-xl border border-[#C4B49C]/30">
                  <p className="text-[10px] text-[#8b7e66] font-black uppercase">Rasio Bangunan</p>
                  <p className="text-xl font-black text-[#5c3c10]">{result.hukumRatio.toFixed(2)}</p>
                </div>
                <div className="bg-rose-50/60 p-3 rounded-xl border border-rose-200">
                  <p className="text-[10px] text-[#8b7e66] font-black uppercase">Faktor Pengali Kematian</p>
                  <p className="text-xl font-black text-rose-700">× {result.securityFactor.toFixed(3)}</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-[#8b7e66] font-medium">
                Ketersediaan bangunan penegakan hukum yang memadai (pos polisi, pengadilan, kejaksaan, akademi polisi, pusat bantuan hukum) memperkuat sistem keamanan. Semakin banyak bangunan penegakan hukum, rasio kekurangan pengamanan semakin kecil, sehingga menekan risiko kematian akibat kriminalitas dan kecelakaan.
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