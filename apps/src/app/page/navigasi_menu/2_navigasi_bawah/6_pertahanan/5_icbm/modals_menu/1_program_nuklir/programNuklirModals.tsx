"use client"
import React, { useState } from "react";
import { X, Atom } from "lucide-react";
import DanaTidakCukupModals from "./danaTidakCukupModals"; // 🔥 Import file baru

interface ProgramNuklirModalsProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
  onSuccess: () => void;
}

export default function ProgramNuklirModals({ 
  isOpen, 
  onClose, 
  countryDetail, 
  setCountryDetail, 
  onSuccess 
}: ProgramNuklirModalsProps) {
  if (!isOpen) return null;

  const anggaran = countryDetail?.anggaran || 0;
  const biayaProgram = 100000000; // 100.000.000 EM

  // 🔥 State untuk membuka modal "Dana Tidak Cukup"
  const [isDanaTidakCukupOpen, setIsDanaTidakCukupOpen] = useState(false);

  const handleBayar = () => {
    if (anggaran < biayaProgram) {
      // 🔥 Alih-alih alert, buka modal baru
      setIsDanaTidakCukupOpen(true);
      return;
    }

    // 1. Kurangi anggaran negara
    setCountryDetail({
      ...countryDetail,
      anggaran: anggaran - biayaProgram
    });

    // 2. Jalankan logika sukses di induk
    onSuccess();

    // 3. Tutup modal ini
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        
        {/* Header Modal */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Atom className="h-6 w-6 text-yellow-600 animate-pulse" />
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Aktivasi Program Nuklir</h2>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8b7e66] mt-1">Pendanaan Riset & Pengayaan Uranium</p>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body Modal */}
        <div className="flex-1 min-h-0 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar flex flex-col items-center justify-center">
          <div className="w-full max-w-2xl space-y-6">
            
            <div className="text-center space-y-4">
              <div className="p-4 rounded-xl bg-yellow-100/50 border border-yellow-600/20 inline-block mx-auto">
                <Atom className="w-16 h-16 text-yellow-600" />
              </div>
              <p className="text-sm font-semibold text-[#5c3c10]">
                Anda akan memulai riset pengayaan uranium skala besar untuk membangun hulu ledak nuklir pertama negara.
              </p>
              <p className="text-xs text-[#8b7e66] leading-relaxed text-justify">
                Pendanaan ini mencakup pembangunan fasilitas sentrifugal rahasia, pengadaan bahan baku, hingga pengujian sistem detonasi bawah tanah. 
                Dengan mengaktifkan program ini, Anda akan membuka akses ke teknologi rudal balistik antarbenua (ICBM) dan opsi perang nuklir.
              </p>
            </div>

            <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-6 rounded-xl space-y-3">
              <div className="flex justify-between text-xs font-bold text-[#5c3c10]">
                <span>Kas Anggaran Negara:</span>
                <span className="text-emerald-700">{anggaran.toLocaleString("id-ID")} EM</span>
              </div>
              <div className="flex justify-between text-xs font-bold text-rose-700 border-t border-[#C4B49C]/20 pt-3">
                <span>Biaya Riset & Pengembangan:</span>
                <span>- {biayaProgram.toLocaleString("id-ID")} EM</span>
              </div>
            </div>

            <div className="flex gap-4 justify-end pt-4 border-t border-[#C4B49C]/20">
              <button 
                onClick={onClose}
                className="px-8 py-3 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all font-black text-xs uppercase tracking-wider cursor-pointer"
              >
                Batal
              </button>
              <button 
                onClick={handleBayar}
                className="px-8 py-3 rounded-xl bg-yellow-600 text-white font-black text-xs uppercase tracking-wider shadow-md hover:bg-yellow-700 active:scale-95 transition-all cursor-pointer"
              >
                Danai Program ({biayaProgram.toLocaleString("id-ID")} EM)
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 🔥 Render Modal Dana Tidak Cukup di sini */}
      <DanaTidakCukupModals 
        isOpen={isDanaTidakCukupOpen}
        onClose={() => setIsDanaTidakCukupOpen(false)}
        currentBudget={anggaran}
        requiredBudget={biayaProgram}
      />
      
    </div>
  );
}