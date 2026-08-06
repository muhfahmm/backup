"use client"
import React from "react";
import { X, Swords, AlertTriangle, Shield } from "lucide-react";

interface SerangModalsProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: any;
  countryDetail: any;
  onConfirm: () => void;
}

export default function SerangModals({
  isOpen,
  onClose,
  targetCountry,
  countryDetail,
  onConfirm,
}: SerangModalsProps) {
  if (!isOpen || !targetCountry) return null;

  const attackerName = countryDetail?.country || countryDetail?.nama_negara || "Negara Anda";
  const targetName = targetCountry.countryName || "Target";

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 pointer-events-auto backdrop-blur-[2px]">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-7xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto animate-in fade-in zoom-in-95 duration-200">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        {/* 🔥 HEADER MODAL KONFIRMASI SERANG */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Swords className="h-6 w-6 text-rose-700 animate-pulse" />
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Konfirmasi Serangan</h2>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8b7e66] mt-1">
                  Dari: {attackerName} &rarr; Target: {targetName}
                </p>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* 🔥 BODY MODAL (Ukuran yang sama dengan SerangNegaraModal) */}
        <div className="flex-1 min-h-0 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar flex flex-col items-center justify-center">
          <div className="w-full max-w-4xl space-y-8">
            
            {/* Ikon Peringatan Besar */}
            <div className="flex justify-center">
              <div className="p-6 rounded-full bg-rose-100 border border-rose-300 shadow-inner">
                <AlertTriangle className="w-20 h-20 text-rose-700" />
              </div>
            </div>

            {/* Informasi Detail Perang */}
            <div className="text-center space-y-3">
              <p className="text-xl font-black text-[#5c3c10] uppercase tracking-tight">
                Anda akan melancarkan serangan militer!
              </p>
              <p className="text-sm text-[#8b7e66] font-medium leading-relaxed max-w-xl mx-auto">
                Pastikan armada Anda sudah siap dan memiliki sumber daya yang cukup. 
                Tindakan ini dapat memicu perang skala besar dan mengubah peta geopolitik global.
              </p>
            </div>

            {/* Ringkasan Data Kekuatan (Placeholder) */}
            <div className="grid grid-cols-2 gap-6 bg-white/80 border border-[#C4B49C]/30 p-6 rounded-2xl shadow-sm">
              <div className="flex flex-col items-center text-center space-y-2 border-r border-[#C4B49C]/20 pr-4">
                <div className="p-2 rounded-full bg-emerald-100">
                  <Shield className="w-6 h-6 text-emerald-700" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-wider text-[#8b7e66]">Pasukan Penyerang</p>
                <p className="text-2xl font-black text-emerald-700">{attackerName}</p>
                <p className="text-[11px] text-[#5c3c10]">Kekuatan: <span className="font-black">{targetCountry?.totalPower?.toLocaleString("id-ID") || "Tidak diketahui"}</span></p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 pl-4">
                <div className="p-2 rounded-full bg-rose-100">
                  <Shield className="w-6 h-6 text-rose-700" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-wider text-[#8b7e66]">Pasukan Target</p>
                <p className="text-2xl font-black text-rose-700">{targetName}</p>
                <p className="text-[11px] text-[#5c3c10]">Kekuatan: <span className="font-black">{targetCountry?.totalPower?.toLocaleString("id-ID") || "Tidak diketahui"}</span></p>
              </div>
            </div>

          </div>
        </div>

        {/* 🔥 FOOTER MODAL (Aksi Konfirmasi / Batal) */}
        <div className="px-8 py-4 border-t-2 border-[#C4B49C]/30 bg-[#FAF6EE]/80 relative z-10 shrink-0 flex items-center justify-end gap-4">
          <button onClick={onClose} className="px-6 py-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all font-black text-xs uppercase tracking-wider cursor-pointer">
            Batal
          </button>
          <button 
            onClick={onConfirm} 
            className="px-8 py-2.5 rounded-xl bg-gradient-to-r from-rose-700 to-rose-900 text-[#FAF6EE] shadow-lg shadow-rose-900/30 font-black text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
          >
            <Swords className="w-4 h-4" />
            Konfirmasi Serangan
          </button>
        </div>

      </div>
    </div>
  );
}