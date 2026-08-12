"use client";

import React from "react";
import { X, Home } from "lucide-react";

interface DetailKebijakanInsentifAnakModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail?: any;
  selectedCountry?: any;
}

export default function DetailKebijakanInsentifAnakModal({
  isOpen,
  onClose,
  countryDetail,
  selectedCountry,
}: DetailKebijakanInsentifAnakModalProps) {
  if (!isOpen) return null;

  const programInsentifAnak = countryDetail?.program_insentif_anak ?? false;
  const countryName = selectedCountry?.country || "Indonesia";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
              <Home className="h-6 w-6 text-indigo-700" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#5c3c10] tracking-tight leading-none uppercase">Kebijakan Insentif Anak</h2>
              <p className="text-xs text-[#8b7e66] font-medium">Dampak kebijakan terhadap kelahiran di {countryName}</p>
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
                  <p className="text-sm font-black text-[#8b7e66] uppercase tracking-wider">Status Kebijakan</p>
                  <p className="text-4xl font-black mt-1">
                    <span className={programInsentifAnak ? "text-emerald-700" : "text-rose-700"}>
                      {programInsentifAnak ? 'Aktif' : 'Tidak Aktif'}
                    </span>
                  </p>
                </div>
                <div className="p-4 bg-indigo-50 rounded-full border border-indigo-200">
                  <Home className="h-10 w-10 text-indigo-600" />
                </div>
              </div>
              {programInsentifAnak ? (
                <p className="mt-4 text-xs text-[#8b7e66] font-medium">
                  Program insentif anak aktif! Memberikan <strong>+20%</strong> bonus pada angka kelahiran.
                </p>
              ) : (
                <p className="mt-4 text-xs text-[#8b7e66] font-medium">
                  Tidak ada program insentif anak saat ini. Angka kelahiran tidak mendapatkan bonus tambahan.
                </p>
              )}
              <div className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2 mt-2">
                <h4 className="text-xs font-black text-[#5c3c10] uppercase">Faktor Pengali Kebijakan</h4>
                <p className="text-sm font-bold text-[#2e261a]">× {programInsentifAnak ? '1.20' : '1.00'}</p>
              </div>
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