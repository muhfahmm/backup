"use client"
import React from "react";
import { X, AlertCircle, TrendingUp, Factory } from "lucide-react";

interface DeficitDetailProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    key: string;
    label: string;
    currentProd: number;
    currentCons: number;
    deficit: number;
    prodPerUnit: number;
    buildingsNeeded: number;
  } | null;
  onGotoProduction?: (tab: string, key: string) => void;
}

// Helper format angka
const formatNumber = (value: any) => {
  const parsed = Number(value) || 0;
  return parsed.toLocaleString('id-ID');
};

export default function AIDetailDefisitModal({
  isOpen,
  onClose,
  data,
  onGotoProduction
}: DeficitDetailProps) {
  if (!isOpen || !data) return null;

  const {
    label,
    currentProd,
    currentCons,
    deficit,
    prodPerUnit,
    buildingsNeeded,
    key
  } = data;

  const handleBuild = () => {
    onGotoProduction?.('industri_pangan', key);
  };

  return (
    <div className="fixed inset-0 z-[75] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      {/* 🔥 PERBAIKAN: Ubah max-w-4xl menjadi max-w-6xl agar sama persis dengan IndustriPanganModal */}
      <div className="w-full max-w-6xl bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl shadow-2xl overflow-hidden h-[84vh] flex flex-col pointer-events-auto">
        
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b-2 border-[#C4B49C]/30 bg-[#e4dac3]/40 shrink-0">
          <div>
            <h3 className="text-base font-black uppercase tracking-[0.2em] text-[#5c3c10] flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-rose-600" />
              Rincian Defisit
            </h3>
            <p className="text-[11px] font-bold text-[#8b7e66] uppercase tracking-wider">{label}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg border border-[#C4B49C] text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5 text-sm text-[#5c3c10]">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl bg-rose-50/80 p-4 border border-rose-300 text-center">
              <div className="text-[10px] font-bold text-rose-800 uppercase tracking-tight mb-1">Produksi Saat Ini</div>
              <div className="font-black text-emerald-700 text-lg">+{formatNumber(currentProd)}</div>
            </div>
            <div className="rounded-xl bg-rose-100/80 p-4 border border-rose-400 text-center">
              <div className="text-[10px] font-bold text-rose-800 uppercase tracking-tight mb-1">Total Konsumsi</div>
              <div className="font-black text-rose-700 text-lg">-{formatNumber(currentCons)}</div>
            </div>
            <div className="rounded-xl bg-rose-200/80 p-4 border border-rose-500 text-center">
              <div className="text-[10px] font-bold text-rose-900 uppercase tracking-tight mb-1">Total Defisit</div>
              <div className="font-black text-rose-800 text-lg">-{formatNumber(deficit)}</div>
            </div>
          </div>

          <div className="border-t border-[#C4B49C]/20 pt-4">
            <p className="font-bold text-[#5c3c10] uppercase tracking-wider mb-3">
              💡 Rekomendasi Kecukupan Pangan
            </p>
            
            <div className="bg-[#f7f3e8] border border-[#C4B49C]/30 rounded-xl p-5 flex flex-col gap-3">
              <div className="flex justify-between items-center text-[#5c3c10]">
                <span className="font-bold">Rumus Perhitungan:</span>
                <span className="text-xs font-bold text-[#8b7e66]">(Defisit + 1) ÷ Produksi per Unit</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-lg border border-[#C4B49C]/20 text-center">
                  <p className="text-[10px] text-[#8b7e66] uppercase tracking-tight">Defisit</p>
                  <p className="text-lg font-black text-rose-600">-{formatNumber(deficit)}</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#C4B49C]/20 text-center">
                  <p className="text-[10px] text-[#8b7e66] uppercase tracking-tight">Produksi / Unit</p>
                  <p className="text-lg font-black text-emerald-600">+{formatNumber(prodPerUnit)}</p>
                </div>
                <div className="bg-[#4a7a7a]/10 p-3 rounded-lg border border-[#4a7a7a]/30 text-center">
                  <p className="text-[10px] text-[#5c3c10] uppercase tracking-tight">Bangunan Dibutuhkan</p>
                  <p className="text-xl font-black text-[#5c3c10]">{buildingsNeeded} Unit</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#e4dac3]/40 p-4 rounded-xl border border-[#C4B49C]/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="font-black uppercase tracking-wider text-[#5c3c10] block mb-1 text-xs">🏗️ Kesimpulan AI:</span>
              <p className="text-sm text-[#5c3c10]">
                Untuk menutupi defisit sebesar <span className="font-bold text-rose-700">-{formatNumber(deficit)}</span> dan mencapai surplus minimal +1, 
                Anda disarankan untuk membangun <span className="font-black text-[#5c3c10]">{buildingsNeeded} unit fasilitas {label}</span>.
              </p>
            </div>
            <button
              onClick={handleBuild}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5c3c10] text-[#FAF6EE] hover:bg-[#8b7e66] transition-all font-black text-xs uppercase tracking-wider shadow-md whitespace-nowrap"
            >
              <Factory className="w-4 h-4" /> Bangun {buildingsNeeded} Unit
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}