"use client"
import React from "react";
import { Info } from "lucide-react";

interface BaseProduksiGridProps {
  keys: string[];
  title: string;
  Icon: any;
  countryDetail: any;
  metadata: any;
  calculateProductionAmount: (key: string) => number;
  findMeta: (key: string) => any;
  onBuildClick: (key: string, label: string) => void;
  hoveredBuildingKey: string | null;
  setHoveredBuildingKey: (key: string | null) => void;
  isElectricityTab: boolean;
}

export default function BaseProduksiGrid({
  keys,
  title,
  Icon,
  countryDetail,
  metadata,
  calculateProductionAmount,
  findMeta,
  onBuildClick,
  hoveredBuildingKey,
  setHoveredBuildingKey,
  isElectricityTab
}: BaseProduksiGridProps) {

  const formatLabel = (key: string) => {
    const customLabels: Record<string, string> = {
      pembangkit_listrik_tenaga_nuklir: "PLT Nuklir (PLTN)",
      pembangkit_listrik_tenaga_air: "PLT Air (PLTA)",
      pembangkit_listrik_tenaga_surya: "PLT Surya (PLTS)",
      pembangkit_listrik_tenaga_uap: "PLT Uap (PLTU)",
      pembangkit_listrik_tenaga_gas: "PLT Gas (PLTG)",
      pembangkit_listrik_tenaga_angin: "PLT Angin (PLTB)",
    };
    if (customLabels[key]) return customLabels[key];
    return key.replace(/_/g, " ").replace(/\b\w/g, (ch) => ch.toUpperCase());
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Icon className="h-6 w-6 text-[#5c3c10]" />
        <h3 className="text-lg font-black text-[#5c3c10] uppercase tracking-wide">{title}</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {keys.map((key) => {
          const bMeta = findMeta(key) || {};
          const perCount = Number(countryDetail?.[key]) || 0;
          const label = formatLabel(key);
          // Placeholder availability logic if needed, isBuildingAvailable can be imported here or passed as prop
          // For simplicity, keeping it generic
          const isAvailable = true; // Please pass availability logic from parent or import here

          return (
            <div
              key={key}
              onClick={() => onBuildClick(key, label)}
              role="button"
              tabIndex={0}
              onMouseEnter={() => setHoveredBuildingKey(key)}
              onMouseLeave={() => setHoveredBuildingKey(null)}
              className="rounded-2xl overflow-visible flex flex-col justify-between transition-all relative bg-white/90 border border-[#C4B49C]/30 shadow-sm hover:shadow-md cursor-pointer"
            >
              {/* Info Tooltip */}
              {hoveredBuildingKey === key && (
                <div className="absolute -top-2 -right-2 z-50 bg-[#5c3c10] text-[#FAF6EE] rounded-lg shadow-lg border border-[#8b7e66]/50 p-3 w-56 animate-in fade-in duration-150">
                  <div className="text-[11px] font-black uppercase tracking-widest text-[#FAF6EE] mb-2">ℹ️ Info Bangunan</div>
                  <div className="border-t border-[#8b7e66]/30 pt-2 space-y-1.5 text-[10px]">
                    {isElectricityTab ? (
                      <>
                        <div className="flex justify-between">
                          <span className="text-[#C4B49C]">Produksi Listrik:</span>
                          <span className="text-emerald-300 font-bold">{(bMeta?.produksi || 0).toLocaleString('id-ID')} MW</span>
                        </div>
                        {bMeta?.konsumsi_listrik !== undefined && bMeta.konsumsi_listrik > 0 && (
                          <div className="flex justify-between">
                            <span className="text-[#C4B49C]">Konsumsi Listrik:</span>
                            <span className="text-rose-300 font-bold">{bMeta.konsumsi_listrik} MW</span>
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="flex justify-between">
                          <span className="text-[#C4B49C]">Produksi Per Hari:</span>
                          <span className="text-emerald-300 font-bold">{(bMeta?.produksi || 0).toLocaleString('id-ID')}</span>
                        </div>
                      </>
                    )}
                    <div className="flex justify-between">
                      <span className="text-[#C4B49C]">Biaya:</span>
                      <span className="text-amber-300 font-bold">{(Number(bMeta?.biaya_pembangunan) || 0).toLocaleString('id-ID')} EM</span>
                    </div>
                    {bMeta?.waktu_pembangunan !== undefined && (
                      <div className="flex justify-between">
                        <span className="text-[#C4B49C]">Waktu:</span>
                        <span className="text-amber-300 font-bold">{bMeta.waktu_pembangunan} hari</span>
                      </div>
                    )}
                  </div>
                  <div className="text-[9px] text-[#C4B49C] mt-2 pt-2 border-t border-[#8b7e66]/30 italic">Klik untuk mulai pembangunan</div>
                </div>
              )}
              
              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <p className="text-[10px] font-black uppercase text-[#8b7e66] tracking-wider">{label}</p>
                    <button
                      className="flex items-center justify-center w-5 h-5 rounded-full bg-[#5c3c10]/10 hover:bg-[#5c3c10]/20 text-[#5c3c10] transition-colors cursor-help"
                      onMouseEnter={() => setHoveredBuildingKey(key)}
                      onClick={(e) => {
                        e.stopPropagation();
                        setHoveredBuildingKey(key);
                      }}
                      title="Info bangunan"
                    >
                      <Info className="w-3 h-3" />
                    </button>
                  </div>
                  <p className="text-2xl font-black mt-2 text-[#2e261a]">{perCount}</p>
                  <p className="text-[10px] mt-1 font-bold text-[#8b7e66]">{perCount} bangunan</p>
                </div>
                
                {isElectricityTab && (
                  <div className="border-t border-[#C4B49C]/20 mt-4 pt-2 text-xs">
                    {bMeta?.produksi !== undefined ? (
                      <div className="flex flex-col">
                        <span className="text-[10px] text-[#8b7e66]">Produksi per hari:</span>
                        <span className="font-black text-sm text-[#2e261a]">
                          +{(bMeta.produksi || 0).toLocaleString('id-ID')} × {perCount.toLocaleString('id-ID')}
                        </span>
                      </div>
                    ) : (
                      <div className="text-[#8b7e66]">Tidak ada produksi</div>
                    )}
                  </div>
                )}
                
                {!isElectricityTab && (
                  <div className="border-t border-[#C4B49C]/20 mt-4 pt-2 text-xs">
                    <div className="text-center">
                      <span className="font-black text-lg text-[#2e261a]">
                        {calculateProductionAmount(key).toLocaleString('id-ID')}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        
        {keys.length === 0 && (
          <div className="rounded-xl border border-[#C4B49C]/30 bg-[#FAF6EE] p-4 text-sm text-[#8b7e66]">
            Data untuk kategori ini tidak tersedia.
          </div>
        )}
      </div>
    </div>
  );
}