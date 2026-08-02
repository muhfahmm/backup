"use client"
import React from "react";
import { X, AlertCircle, CheckCircle, MessageSquare } from "lucide-react";

interface AISuggestModalProps {
  isOpen: boolean;
  onClose: () => void;
  sectorLabel: string;
  totalDeficit: number;
  totalSurplus: number;
  commodities: {
    label: string;
    balance: number;
    isDeficit: boolean;
    isSurplus: boolean;
  }[];
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
}: AISuggestModalProps) {
  if (!isOpen) return null;

  const totalDeficitCommodities = commodities.filter(c => c.isDeficit).length;
  const totalSurplusCommodities = commodities.filter(c => c.isSurplus).length;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/35 pointer-events-auto">
      <div className="w-full max-w-lg bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl shadow-2xl overflow-hidden max-h-[80vh] flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b-2 border-[#C4B49C]/30 bg-[#e4dac3]/40 shrink-0">
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#5c3c10]">📊 Analisis Sektor AI</h3>
            <p className="text-[10px] font-bold text-[#8b7e66] uppercase tracking-wider">{sectorLabel}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg border border-[#C4B49C] text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 overflow-y-auto flex-1 space-y-4 text-xs text-[#5c3c10]">
          <div className="flex gap-4 mb-2">
            <div className="flex-1 rounded-xl bg-rose-50/80 p-3 border border-rose-300">
              <div className="text-[9px] font-bold text-rose-800 uppercase tracking-tight">Total Defisit</div>
              <div className="mt-1 font-black text-rose-700 text-sm">-{formatNumber(totalDeficit)}</div>
            </div>
            <div className="flex-1 rounded-xl bg-emerald-50/80 p-3 border border-emerald-300">
              <div className="text-[9px] font-bold text-emerald-800 uppercase tracking-tight">Total Surplus</div>
              <div className="mt-1 font-black text-emerald-700 text-sm">+{formatNumber(totalSurplus)}</div>
            </div>
          </div>

          <div className="border-t border-[#C4B49C]/20 pt-3">
            <p className="font-bold text-[#5c3c10] uppercase tracking-wider mb-2">
              Rincian Komoditas ({commodities.length} item)
            </p>
            <div className="space-y-2 max-h-[30vh] overflow-y-auto pr-1">
              {commodities.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex justify-between items-center p-2 rounded-lg border ${
                    item.isDeficit
                      ? 'border-rose-200 bg-rose-50/40'
                      : item.isSurplus
                      ? 'border-emerald-200 bg-emerald-50/40'
                      : 'border-[#C4B49C]/20 bg-[#f7f3e8]'
                  }`}
                >
                  <span className="font-bold tracking-tight text-[#5c3c10] flex items-center gap-2">
                    {item.isDeficit ? (
                      <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                    ) : item.isSurplus ? (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    ) : null}
                    {item.label}
                  </span>
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
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#4a7a7a]/10 p-3 rounded-xl border border-[#4a7a7a]/20 text-[10px]">
            <span className="font-black uppercase tracking-wider">💡 Saran AI:</span>
            {totalDeficit > 0 ? (
              <p className="mt-1 text-[#5c3c10]">
                Deteksi defisit pada {totalDeficitCommodities} komoditas. Bangun fasilitas produksi yang sesuai
                untuk menyeimbangkan neraca pangan nasional.
              </p>
            ) : totalSurplus > 0 ? (
              <p className="mt-1 text-[#5c3c10]">
                Sektor ini surplus ({totalSurplusCommodities} komoditas). Anda dapat mengekspor komoditas berlebih
                untuk menambah pendapatan negara atau meningkatkan populasi.
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