"use client"
import React from "react";
import { X, AlertCircle, CheckCircle, MessageSquare, ArrowRight } from "lucide-react";

interface AISuggestModalProps {
  isOpen: boolean;
  onClose: () => void;
  sectorLabel: string;
  totalDeficit: number;
  totalSurplus: number;
  commodities: {
    key?: string;
    label: string;
    balance: number;
    isDeficit: boolean;
    isSurplus: boolean;
  }[];
  onCommodityClick?: (commodityKey: string) => void;
  onDeficitClick?: (commodityKey: string) => void;
}

// Helper lokal untuk memformat angka
const formatNumber = (value: any) => {
  const parsed = Number(value) || 0;
  return parsed.toLocaleString('id-ID');
};

export default function AISuggestModal({
  isOpen,
  onClose,
  sectorLabel,
  totalDeficit,
  totalSurplus,
  commodities,
  onCommodityClick,
  onDeficitClick,
}: AISuggestModalProps) {
  if (!isOpen) return null;

  const totalDeficitCommodities = commodities.filter(c => c.isDeficit).length;
  const totalSurplusCommodities = commodities.filter(c => c.isSurplus).length;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      {/* 🔥 PERBAIKAN: Ubah max-w-4xl menjadi max-w-6xl agar sama persis dengan IndustriPanganModal */}
      <div className="w-full max-w-6xl bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl shadow-2xl overflow-hidden h-[84vh] flex flex-col pointer-events-auto">
        
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b-2 border-[#C4B49C]/30 bg-[#e4dac3]/40 shrink-0">
          <div>
            <h3 className="text-base font-black uppercase tracking-[0.2em] text-[#5c3c10]">📊 Analisis Sektor AI</h3>
            <p className="text-[11px] font-bold text-[#8b7e66] uppercase tracking-wider">{sectorLabel}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg border border-[#C4B49C] text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5 text-sm text-[#5c3c10]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-rose-50/80 p-4 border border-rose-300">
              <div className="text-[10px] font-bold text-rose-800 uppercase tracking-tight">Total Defisit</div>
              <div className="mt-1 font-black text-rose-700 text-lg">-{formatNumber(totalDeficit)}</div>
            </div>
            <div className="rounded-xl bg-emerald-50/80 p-4 border border-emerald-300">
              <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-tight">Total Surplus</div>
              <div className="mt-1 font-black text-emerald-700 text-lg">+{formatNumber(totalSurplus)}</div>
            </div>
          </div>

          <div className="border-t border-[#C4B49C]/20 pt-4">
            <p className="font-bold text-[#5c3c10] uppercase tracking-wider mb-3">
              Rincian Komoditas ({commodities.length} item)
            </p>
            <div className="space-y-2 max-h-[40vh] overflow-y-auto pr-2">
              {commodities.map((item, idx) => (
                <div
                  key={idx}
                  className={`w-full flex justify-between items-center p-3 rounded-lg border transition-all ${
                    item.isDeficit
                      ? 'border-rose-200 bg-rose-50/40'
                      : item.isSurplus
                      ? 'border-emerald-200 bg-emerald-50/40'
                      : 'border-[#C4B49C]/20 bg-[#f7f3e8]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.isDeficit ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (item.key) onDeficitClick?.(item.key);
                        }}
                        className="group relative p-1 rounded-full hover:bg-rose-200 transition-colors cursor-pointer focus:outline-none"
                        title="Klik untuk Lihat Detail Defisit & Rekomendasi"
                      >
                        <AlertCircle className="w-5 h-5 text-rose-600 group-hover:scale-110 transition-transform" />
                        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-bold text-[#5c3c10] opacity-80 whitespace-nowrap group-hover:opacity-100">Detail</span>
                      </button>
                    ) : item.isSurplus ? (
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : null}

                    <span className="font-bold tracking-tight text-[#5c3c10]">{item.label}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`font-black ${
                        item.isDeficit
                          ? 'text-rose-700'
                          : item.isSurplus
                          ? 'text-emerald-700'
                          : 'text-[#8b7e66]'
                      }`}
                    >
                      {item.isDeficit ? '-' : item.isSurplus ? '+' : ''}
                      {formatNumber(Math.abs(item.balance))}
                    </span>
                    {item.key && (
                      <button
                        onClick={() => onCommodityClick?.(item.key!)}
                        className="ml-1 p-1 rounded-lg bg-[#FAF6EE] border border-[#C4B49C]/30 hover:bg-[#e4dac3] text-[#5c3c10] transition-colors"
                        title="Buka Halaman Produksi"
                      >
                        <ArrowRight className="w-4 h-4 opacity-70 hover:opacity-100" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#4a7a7a]/10 p-4 rounded-xl border border-[#4a7a7a]/20 text-[11px]">
            <span className="font-black uppercase tracking-wider">💡 Saran AI:</span>
            {totalDeficit > 0 ? (
              <p className="mt-1 text-[#5c3c10]">
                Deteksi defisit pada {totalDeficitCommodities} komoditas. Klik ikon <b>tanda seru merah (!)</b> pada komoditas yang defisit untuk melihat rekomendasi jumlah bangunan yang harus dibangun.
              </p>
            ) : totalSurplus > 0 ? (
              <p className="mt-1 text-[#5c3c10]">
                Sektor ini surplus ({totalSurplusCommodities} komoditas). Anda dapat mengekspor komoditas berlebih untuk menambah pendapatan negara atau meningkatkan populasi.
              </p>
            ) : (
              <p className="mt-1 text-[#5c3c10]">
                Neraca sektor ini seimbang. Pertahankan kondisi saat ini.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}