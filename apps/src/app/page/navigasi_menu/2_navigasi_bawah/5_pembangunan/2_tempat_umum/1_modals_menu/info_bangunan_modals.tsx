"use client";
import React from "react";
import { X, Info } from "lucide-react";

interface InfoBangunanModalProps {
  label: string;
  perCount: number;
  konsumsiUnit: number;
  biaya: number;
  waktu?: number;
  onClose: () => void;
}

export default function InfoBangunanModal({
  label,
  perCount,
  konsumsiUnit,
  biaya,
  waktu,
  onClose,
}: InfoBangunanModalProps) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      {/* 🔥 DIMENSI DIPERBARUI: w-full max-w-6xl h-[84vh] flex flex-col agar sama persis dengan modal utama */}
      <div
        className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans animate-in fade-in zoom-in-95 duration-150 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />

        {/* Header - Menggunakan shrink-0 agar tetap di atas */}
        <div className="px-6 py-5 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-2 text-[#5c3c10]">
            <Info className="h-5 w-5" />
            {/* 🔥 Memperbaiki typo "nfo" menjadi "Info" */}
            <h3 className="text-base font-bold uppercase tracking-tight">Info Bangunan - {label}</h3>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="text-[#8b7e66] hover:text-[#5c3c10] transition-colors p-1 cursor-pointer"
            aria-label="Tutup info"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body - Menggunakan flex-1 dan overflow-y-auto agar dapat di-scroll */}
        <div className="p-6 relative z-10 flex-1 overflow-y-auto space-y-4 text-xs font-semibold text-[#5c3c10]">
          <div className="bg-white/80 border border-[#C4B49C]/40 rounded-xl p-4 space-y-2 shadow-xs">
            <div className="flex justify-between items-center">
              <span className="text-[#8b7e66]">Listrik Dikonsumsi (Satuan):</span>
              <span className="text-rose-700 font-black text-sm">{konsumsiUnit.toLocaleString('id-ID')} MW</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#8b7e66]">Listrik Dikonsumsi (Total):</span>
              <span className="text-rose-700 font-black text-sm">{(konsumsiUnit * perCount).toLocaleString('id-ID')} MW</span>
            </div>
            <div className="flex justify-between items-center border-t border-[#C4B49C]/20 pt-2 mt-2">
              <span className="text-[#8b7e66]">Biaya Pembangunan:</span>
              <span className="text-[#5c3c10] font-black text-sm">{biaya.toLocaleString('id-ID')} EM</span>
            </div>
            {waktu !== undefined && (
              <div className="flex justify-between items-center">
                <span className="text-[#8b7e66]">Estimasi Waktu Pembangunan:</span>
                <span className="text-[#5c3c10] font-bold text-sm">{waktu} hari</span>
              </div>
            )}
            <div className="flex justify-between items-center">
              <span className="text-[#8b7e66]">Jumlah Bangunan Saat Ini:</span>
              <span className="text-[#2e261a] font-black text-sm">{perCount} unit</span>
            </div>
          </div>
        </div>

        {/* Footer - Menggunakan shrink-0 agar tetap di bawah */}
        <div className="px-4 py-2 bg-[#FAF6EE] border-t-2 border-[#C4B49C]/20 flex gap-3 relative z-10 shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="flex-1 py-2 rounded-xl bg-[#5c3c10] text-[#FAF6EE] border border-[#5c3c10] hover:bg-[#8b7e66] hover:border-[#8b7e66] text-[10px] font-black uppercase transition-all cursor-pointer shadow-sm text-center"
          >
            Tutup Info
          </button>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
}