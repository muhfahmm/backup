"use client";
import React, { useState } from "react";
import { X, Hammer, Eye, EyeOff } from "lucide-react";

interface MaterialRequirement {
  resourceKey: string;
  label: string;
  group: string;
  amount?: number;
}

interface KonfirmasiPembangunanProps {
  isOpen: boolean;
  onClose: () => void;
  buildingLabel: string;
  buildingDescription?: string;
  cost: number;
  waktuPembangunan?: number;
  dampakKepuasan?: number;      // Untuk Tempat Umum & Hunian
  produksiPerHari?: number;     // Untuk Bangunan Produksi
  produksiLabel?: string;
  requirements: MaterialRequirement[];
  materialStocks: Record<string, number>;
  anggaran: number;
  missingMaterials: MaterialRequirement[];
  onConfirm: (buildQuantity?: number) => void;
  onMaterialClick: (resourceKey: string, label: string) => void;
  loadingMetadata: boolean;
  isDisabled?: boolean;
}

export default function KonfirmasiPembangunanModal({
  isOpen,
  onClose,
  buildingLabel,
  buildingDescription,
  cost,
  waktuPembangunan,
  dampakKepuasan,
  produksiPerHari,
  produksiLabel,
  requirements,
  materialStocks,
  anggaran,
  missingMaterials,
  onConfirm,
  onMaterialClick,
  loadingMetadata,
  isDisabled = false,
}: KonfirmasiPembangunanProps) {
  const [showMaterialGrid, setShowMaterialGrid] = useState(true);
  const [buildQuantity, setBuildQuantity] = useState<number>(1);

  if (!isOpen) return null;

  const hasMissingMaterials = missingMaterials.length > 0;
  const totalCost = cost * buildQuantity;
  const isAnggaranCukup = anggaran >= totalCost;
  const totalTime = (waktuPembangunan || 1) * buildQuantity;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      {/* 🔥 DIMENSI DAN STRUKTUR DISAMAKAN: max-w-6xl h-[84vh] flex flex-col */}
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans animate-in fade-in zoom-in-95 duration-150 pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />

        {/* Header - shrink-0 agar tetap di atas */}
        <div className="px-6 py-5 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-2 text-[#5c3c10]">
            <Hammer className="h-5 w-5" />
            <h3 className="text-base font-bold uppercase tracking-tight">Konfirmasi Pembangunan</h3>
          </div>
          <button onClick={onClose} className="text-[#8b7e66] hover:text-[#5c3c10] cursor-pointer">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body - flex-1 overflow-y-auto agar bisa di-scroll */}
        <div className="p-6 relative z-10 flex-1 overflow-y-auto space-y-4">
          <div>
            <h4 className="text-lg font-black text-[#2e261a]">{buildingLabel}</h4>
            <p className="text-xs text-[#8b7e66] mt-1">{buildingDescription || 'Tidak ada deskripsi tersedia.'}</p>
          </div>

          <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 rounded-xl p-4 space-y-2.5 text-xs text-[#5c3c10]">
            <div className="flex justify-between font-bold">
              <span>Biaya Pembangunan (Total):</span>
              <span className="text-[#2e261a]">
                {loadingMetadata ? 'Memuat...' : `${totalCost.toLocaleString('id-ID')} EM`}
              </span>
            </div>
            <div className="flex justify-between text-xs text-[#8b7e66]">
              <span>Biaya per bangunan:</span>
              <span>{cost.toLocaleString('id-ID')} EM</span>
            </div>

            <div className="bg-[#FAF6EE]/80 border border-[#C4B49C]/30 rounded-xl p-4 mt-3 text-xs text-[#5c3c10]">
              <label className="flex flex-col gap-2">
                <span className="font-black uppercase tracking-[0.2em]">Jumlah Bangunan</span>
                <input
                  type="number"
                  min={1}
                  step={1}
                  value={buildQuantity}
                  onChange={(event) => {
                    const value = Number(event.target.value);
                    setBuildQuantity(Number.isFinite(value) ? Math.max(1, Math.floor(value)) : 1);
                  }}
                  className="w-full rounded-xl border border-[#C4B49C]/60 bg-white/90 px-3 py-2 text-sm text-[#2e261a] focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </label>
            </div>

            {hasMissingMaterials && (
              <div className="pt-2 border-t border-[#C4B49C]/30">
                <p className="font-bold text-rose-800 mb-2">Material Kurang:</p>
                {missingMaterials.map((mat, idx) => {
                  const requiredAmount = (mat.amount ?? 0) * buildQuantity;
                  return (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-[#2e261a]">{mat.label} (x{requiredAmount.toLocaleString('id-ID')})</span>
                      <span className="text-rose-600 font-black">0</span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Kondisional Waktu Pembangunan */}
            {waktuPembangunan !== undefined && (
              <>
                <div className="flex justify-between">
                  <span>Estimasi Waktu Pembangunan per bangunan:</span>
                  <span className="text-[#2e261a] font-semibold">{waktuPembangunan} Hari</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimasi Waktu Pembangunan Total:</span>
                  <span className="text-[#2e261a] font-semibold">{totalTime} Hari</span>
                </div>
              </>
            )}

            {/* Kondisional Produksi */}
            {produksiPerHari !== undefined && (
              <div className="flex justify-between">
                <span>Produksi {produksiLabel || ''} per hari:</span>
                <span className="text-emerald-700 font-bold">+{produksiPerHari.toLocaleString('id-ID')}</span>
              </div>
            )}

            {/* Kondisional Kepuasan */}
            {dampakKepuasan !== undefined && (
              <div className="flex justify-between">
                <span>Dampak ke Kepuasan:</span>
                <span className="text-emerald-700 font-bold">+{dampakKepuasan.toFixed(1)}</span>
              </div>
            )}

            {/* Material Requirement */}
            {requirements && requirements.length > 0 ? (
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <div className="font-black uppercase tracking-[0.2em] text-[#5c3c10]">Material Dibutuhkan</div>
                  <button
                    onClick={() => setShowMaterialGrid(!showMaterialGrid)}
                    className="flex items-center gap-1.5 px-2 py-1 bg-white/80 border border-[#C4B49C]/30 rounded-lg text-[#5c3c10] hover:bg-[#5c3c10]/10 transition-all cursor-pointer"
                  >
                    {showMaterialGrid ? (
                      <>
                        <EyeOff className="h-3 w-3" />
                        <span className="text-[8px] font-bold uppercase">Sembunyikan</span>
                      </>
                    ) : (
                      <>
                        <Eye className="h-3 w-3" />
                        <span className="text-[8px] font-bold uppercase">Tampilkan</span>
                      </>
                    )}
                  </button>
                </div>

                <div
                  className={`grid grid-cols-4 gap-2 overflow-hidden transition-all duration-500 ease-in-out ${
                    showMaterialGrid ? 'max-h-[1500px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
                  }`}
                >
                  {requirements.map((material) => {
                    const stock = materialStocks[material.resourceKey] ?? 0;
                    const isStockZero = stock <= 0;
                    const requiredAmount = (material.amount ?? 0) * buildQuantity;

                    return (
                      <button
                        key={`${material.resourceKey}-${material.group}`}
                        type="button"
                        onClick={() => onMaterialClick(material.resourceKey, material.label)}
                        className={`flex flex-col items-center justify-center bg-white/80 border rounded-xl p-2.5 min-h-[50px] cursor-pointer hover:border-[#5c3c10]/60 transition-all ${
                          isStockZero ? 'border-red-400 bg-red-50/70 text-red-800' : 'border-[#C4B49C]/30'
                        }`}
                      >
                        <div className="font-bold text-[10px] text-center">{material.label}</div>
                        {material.amount !== undefined && (
                          <div className="text-[9px] uppercase tracking-[0.15em] text-[#5c3c10] mt-1">
                            x{requiredAmount.toLocaleString('id-ID')}
                          </div>
                        )}
                        <div className={`text-[10px] font-black mt-0.5 ${isStockZero ? 'text-red-600' : 'text-[#8b7e66]'}`}>
                          {stock.toLocaleString('id-ID')}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="text-[#8b7e66]">Tidak ada material yang dibutuhkan untuk bangunan ini.</div>
            )}
          </div>

          <div className="flex justify-between items-center text-xs font-black text-[#5c3c10] pt-1">
            <span>Kas Negara Saat Ini:</span>
            <span>{anggaran.toLocaleString('id-ID')}</span>
          </div>
        </div>

        {/* Footer - shrink-0 agar tetap di bawah */}
        <div className="p-4 bg-[#FAF6EE] border-t-2 border-[#C4B49C]/20 flex gap-3 relative z-10 shrink-0">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-xl border-2 border-[#C4B49C] text-[#8b7e66] text-[10px] font-black uppercase cursor-pointer hover:bg-black/5 transition-all text-center"
          >
            Batal
          </button>
          <button
            onClick={() => onConfirm(buildQuantity)}
            disabled={loadingMetadata || hasMissingMaterials || !isAnggaranCukup || isDisabled}
            className={`flex-1 py-2 rounded-xl text-[10px] font-black uppercase transition-all text-center cursor-pointer ${
              hasMissingMaterials || !isAnggaranCukup || loadingMetadata || isDisabled
                ? 'bg-[#8b7e66] text-white border border-[#8b7e66] cursor-not-allowed opacity-70'
                : 'bg-[#5c3c10] text-[#FAF6EE] border border-[#5c3c10] hover:bg-[#8b7e66] hover:border-[#8b7e66]'
            }`}
          >
            {hasMissingMaterials ? 'Material Kurang' : !isAnggaranCukup ? 'Dana Tidak Cukup' : 'Mulai Pembangunan'}
          </button>
        </div>
      </div>
    </div>
  );
}