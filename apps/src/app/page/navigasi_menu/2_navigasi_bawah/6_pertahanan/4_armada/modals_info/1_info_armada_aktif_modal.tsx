"use client";
import React from "react";
import { X } from "lucide-react";

interface InfoArmadaAktifModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem: { key: string; label: string } | null | undefined;
  selectedCategory: string | undefined;
  groupMeta: Record<string, any>;
  formatNumber: (value: unknown) => string;
  unitBreakdown: any[];
  // 🔥 Tambahkan props berikut untuk logika Kapasitas Penuh & Redirect
  isCapacityFull?: boolean;
  capacityDisplay?: string;
  onNavigateToInfra?: (infraKey: string) => void;
}

export default function InfoArmadaAktifModal({
  isOpen,
  onClose,
  selectedItem,
  selectedCategory,
  groupMeta,
  formatNumber,
  unitBreakdown,
  isCapacityFull = false,         // 🔥 Default false
  capacityDisplay = "",
  onNavigateToInfra,
}: InfoArmadaAktifModalProps) {
  if (!isOpen || !selectedItem) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-transparent pointer-events-auto">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-150">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 pb-4 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <h3 className="font-black text-[#5c3c10] uppercase tracking-tight text-2xl">{selectedItem?.label}</h3>
          <button 
            onClick={onClose} 
            className="text-[#8b7e66] hover:text-[#5c3c10] p-2 rounded-full hover:bg-[#e4dac3] transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 space-y-4">
          <div className="bg-[#FAF6EE]/60 p-4 rounded-lg border border-[#C4B49C]/20">
            <p className="text-[12px] font-bold text-[#8b7e66] mb-2">Kategori</p>
            <p className="text-lg font-black text-[#2e261a]">
              {selectedCategory ? groupMeta[selectedCategory].title : '-'}
            </p>
          </div>

          <div className="bg-[#FAF6EE]/60 p-4 rounded-lg border border-[#C4B49C]/20">
            <p className="text-[12px] font-bold text-[#8b7e66] mb-2">Jumlah Unit</p>
            <p className="text-lg font-black text-[#2e261a]">
              {formatNumber(unitBreakdown.find(e => e.dataKey === selectedItem?.key)?.quantity ?? 0)} unit
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-50/60 p-4 rounded-lg border-2 border-emerald-200">
              <p className="text-[12px] font-bold text-emerald-700 mb-2">Kekuatan</p>
              <p className="text-lg font-black text-emerald-900">
                {formatNumber(unitBreakdown.find(e => e.dataKey === selectedItem?.key)?.totalPower ?? 0)}
              </p>
            </div>
            <div className="bg-rose-50/60 p-4 rounded-lg border-2 border-rose-200">
              <p className="text-[12px] font-bold text-rose-700 mb-2">Total HP</p>
              <p className="text-lg font-black text-rose-900">
                {formatNumber(unitBreakdown.find(e => e.dataKey === selectedItem?.key)?.totalHealth ?? 0)}
              </p>
            </div>
          </div>

          {/* 🔥 PERINGATAN KAPASITAS PENUH (MODAL MERAH) - Tampil hanya jika kondisi penuh */}
          {isCapacityFull && selectedItem.key === "barak" && (
            <div className="border-2 border-rose-400 bg-rose-50/80 rounded-xl p-5 space-y-3 mt-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full animate-pulse bg-rose-600"></div>
                <p className="text-sm font-black text-rose-800 uppercase tracking-wider">Kapasitas Penuh</p>
              </div>
              <div className="text-xs text-rose-700 space-y-1">
                <p>
                  Kapasitas Infanteri saat ini sudah penuh <span className="font-black">({capacityDisplay})</span>.
                  Anda harus membangun Barak baru untuk menambah Infanteri lebih banyak.
                </p>
              </div>
              {onNavigateToInfra && (
                <button
                  onClick={() => {
                    // 🔥 Arahkan ke tab infrastruktur & beri highlight border hijau pada kartu Barak
                    onNavigateToInfra("barak");
                    onClose(); // Tutup modal info ini setelah redirect
                  }}
                  className="mt-2 w-full py-3 rounded-lg font-black text-xs uppercase tracking-wider transition-all bg-rose-600 text-white hover:bg-rose-700 shadow-md border border-rose-700"
                >
                  🏗️ Buka Tab Infrastruktur
                </button>
              )}
            </div>
          )}
        </div>

        <div className="px-8 py-6 bg-[#FAF6EE] border-t-2 border-[#C4B49C]/30 flex justify-end relative z-10">
          <button 
            onClick={onClose} 
            className="py-2 px-6 rounded-xl text-[10px] font-black uppercase transition-all text-center cursor-pointer bg-[#5c3c10] text-[#FAF6EE] border border-[#5c3c10] hover:bg-[#8b7e66] hover:border-[#8b7e66]"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}