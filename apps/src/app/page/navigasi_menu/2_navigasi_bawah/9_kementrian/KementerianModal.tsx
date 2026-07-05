"use client"
import React from "react";
import { X, Landmark } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
}

export default function KementerianModal({ isOpen, onClose, countryDetail }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/65 z-50 flex items-center justify-center p-4">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Landmark className="h-6 w-6 text-amber-700 animate-pulse" />
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Dewan Kabinet Menteri</h2>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <p className="text-xs text-[#8b7e66] font-semibold leading-relaxed mb-6">
            Kelola kabinet pemerintahan tertinggi negara untuk menjaga kinerja pelayanan birokrasi kementerian sipil Anda tetap berintegritas.
          </p>

          <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-4 rounded-xl space-y-3">
            <div className="flex justify-between text-xs font-bold text-[#5c3c10] border-b border-[#C4B49C]/20 pb-2">
              <span>Menteri Keuangan:</span>
              <span>Sri Mulyani Indrawati, S.E., M.Sc. Ph.D.</span>
            </div>
            <div className="flex justify-between text-xs font-bold text-[#5c3c10] border-b border-[#C4B49C]/20 pb-2">
              <span>Menteri Pertahanan:</span>
              <span>Prabowo Subianto</span>
            </div>
            <div className="flex justify-between text-xs font-bold text-[#5c3c10]">
              <span>Menteri Luar Negeri:</span>
              <span>Retno Lestari Priansari Marsudi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
