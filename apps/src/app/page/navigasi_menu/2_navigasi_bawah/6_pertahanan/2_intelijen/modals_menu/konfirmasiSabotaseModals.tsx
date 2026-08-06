"use client"
import React from "react";
import { X, Bomb, AlertTriangle, Shield } from "lucide-react";

interface KonfirmasiSabotaseModalsProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: any;
  onConfirm: () => void;
}

export default function KonfirmasiSabotaseModals({
  isOpen,
  onClose,
  targetCountry,
  onConfirm,
}: KonfirmasiSabotaseModalsProps) {
  if (!isOpen || !targetCountry) return null;

  const targetName = targetCountry.countryName || "Target";

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 pointer-events-auto backdrop-blur-[2px]">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto animate-in fade-in zoom-in-95 duration-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        {/* 🔥 HEADER */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Bomb className="h-6 w-6 text-orange-700 animate-pulse" />
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Konfirmasi Sabotase</h2>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8b7e66] mt-1">
                  Target: {targetName}
                </p>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* 🔥 BODY */}
        <div className="flex-1 min-h-0 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar flex flex-col items-center justify-center">
          <div className="w-full max-w-lg space-y-8">
            <div className="flex justify-center">
              <div className="p-6 rounded-full bg-orange-100 border border-orange-300 shadow-inner">
                <AlertTriangle className="w-20 h-20 text-orange-700" />
              </div>
            </div>

            <div className="text-center space-y-3">
              <p className="text-xl font-black text-[#5c3c10] uppercase tracking-tight">
                Lancarkan Operasi Khusus!
              </p>
              <p className="text-sm text-[#8b7e66] font-medium leading-relaxed max-w-lg mx-auto">
                Kirim tim operasi khusus untuk melumpuhkan fasilitas vital di negara {targetName}.
                Biaya operasional diperkirakan sebesar <span className="font-black text-[#5c3c10]">20.000.000 EM</span>.
              </p>
            </div>

            <div className="bg-white/80 border border-[#C4B49C]/30 p-6 rounded-2xl shadow-sm flex flex-col items-center">
              <p className="text-[10px] font-black uppercase tracking-wider text-[#8b7e66] mb-1">Target Operasi</p>
              <p className="text-lg font-black text-orange-700">{targetName}</p>
              <p className="text-[11px] text-[#5c3c10] mt-2">
                Kekuatan Militer: <span className="font-black">{targetCountry?.totalPower?.toLocaleString("id-ID") || "Tidak diketahui"}</span>
              </p>
            </div>
          </div>
        </div>

        {/* 🔥 FOOTER */}
        <div className="px-8 py-4 border-t-2 border-[#C4B49C]/30 bg-[#FAF6EE]/80 relative z-10 shrink-0 flex items-center justify-end gap-4">
          <button onClick={onClose} className="px-6 py-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all font-black text-xs uppercase tracking-wider cursor-pointer">
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-8 py-2.5 rounded-xl bg-orange-700 text-[#FAF6EE] shadow-lg shadow-orange-900/30 font-black text-xs uppercase tracking-wider hover:bg-orange-800 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
          >
            <Bomb className="w-4 h-4" />
            Luncurkan Sabotase
          </button>
        </div>
      </div>
    </div>
  );
}