"use client"
import React from "react";
import { X, Award } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCountry: any;
}

export default function PBBModal({ isOpen, onClose, selectedCountry }: ModalProps) {
  if (!isOpen) return null;
  const countryName = selectedCountry?.country || "Indonesia";

  return (
    // PERBAIKAN: Hapus bg-black/65
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      
      {/* PERBAIKAN: Tambahkan pointer-events-auto di lapisan dalam */}
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-blue-600 animate-pulse" />
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Sidang Umum Perserikatan Bangsa-Bangsa</h2>
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
            Negara {countryName} memegang hak delegasi aktif di Sidang Majelis Umum PBB. Berpartisipasilah dalam merancang traktat global untuk mendongkrak wibawa diplomatik.
          </p>
          <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-4 rounded-xl">
            <span className="text-xs font-bold text-[#5c3c10] block">Status Kursi Delegasi:</span>
            <span className="text-sm font-black text-blue-800 uppercase mt-1 block">Anggota Aktif Majelis</span>
          </div>
        </div>
      </div>
    </div>
  );
}
