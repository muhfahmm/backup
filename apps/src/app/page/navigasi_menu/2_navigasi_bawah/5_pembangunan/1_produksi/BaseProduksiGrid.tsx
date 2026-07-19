"use client"
import React from "react";
import { Info } from "lucide-react";
import { getKelistrikanFuelRequirements } from "./requirements_logic/1_produksi/1_kelistrikan/fuelLogic";

const ELECTRICITY_FUEL_RESOURCE_KEYS = [
  "gas_alam",
  "uranium",
  "batu_bara",
  "minyak_bumi",
];

const ELECTRICITY_FUEL_LABELS: Record<string, string> = {
  gas_alam: "Gas Alam",
  uranium: "Uranium",
  batu_bara: "Batu Bara",
  minyak_bumi: "Minyak Bumi",
};

const electricityFuelBuildings = [
  "pembangkit_listrik_tenaga_gas",
  "pembangkit_listrik_tenaga_nuklir",
  "pembangkit_listrik_tenaga_uap",
];

const calculateTotalFuelConsumption = (countryDetail: any) => {
  const totals: Record<string, number> = {
    gas_alam: 0,
    uranium: 0,
    batu_bara: 0,
    minyak_bumi: 0,
  };

  electricityFuelBuildings.forEach((buildingKey) => {
    const count = Number(countryDetail?.[buildingKey]) || 0;
    if (count === 0) return;
    switch (buildingKey) {
      case "pembangkit_listrik_tenaga_gas":
        totals.gas_alam += 2 * count;
        break;
      case "pembangkit_listrik_tenaga_nuklir":
        totals.uranium += 1 * count;
        break;
      case "pembangkit_listrik_tenaga_uap":
        totals.batu_bara += 50 * count;
        totals.minyak_bumi += 5 * count;
        break;
    }
  });

  return totals;
};

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
  isBuildingAvailable?: (buildingKey: string, countryName: string) => boolean;
  isElectricityTab: boolean;
  highlightedCardKey?: string | null;
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
  highlightedCardKey,
  isBuildingAvailable,
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
          const isHighlighted = highlightedCardKey === key;
          const isAvailable = isBuildingAvailable ? isBuildingAvailable(key, countryDetail?.country || '') : true;
          const fuelRequirements = isElectricityTab ? getKelistrikanFuelRequirements(key) : [];
          const hasFuelConsumption = fuelRequirements.length > 0;
          const isFuelResource = ELECTRICITY_FUEL_RESOURCE_KEYS.includes(key);
          const currentFuelConsumption = isFuelResource ? calculateTotalFuelConsumption(countryDetail)[key] : 0;

          return (
            <div
              key={key}
              onClick={() => isAvailable && onBuildClick(key, label)}
              role="button"
              tabIndex={0}
              aria-disabled={!isAvailable}
              className={`rounded-2xl overflow-visible flex flex-col flex-grow justify-between transition-all relative bg-white/90 border shadow-sm ${isAvailable ? 'border-[#C4B49C]/30 hover:shadow-md cursor-pointer' : 'border-rose-300 bg-rose-50/60 opacity-90 cursor-not-allowed'} ${isHighlighted ? 'border-emerald-500 border-2 shadow-[0_0_0_3px_rgba(16,185,129,0.18)]' : ''}`}
            >
              {/* Info Tooltip – hanya muncul jika hoveredBuildingKey === key */}
              {hoveredBuildingKey === key && (
                <div 
                  className="absolute -top-2 -right-2 z-50 bg-[#5c3c10] text-[#FAF6EE] rounded-lg shadow-lg border border-[#8b7e66]/50 p-3 w-56 animate-in fade-in duration-150"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header dengan judul dan tombol close (X) */}
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-[11px] font-black uppercase tracking-widest text-[#FAF6EE]">
                      ℹ️ Info Bangunan
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setHoveredBuildingKey(null);
                      }}
                      className="text-[#FAF6EE]/70 hover:text-[#FAF6EE] transition-colors ml-2"
                      aria-label="Tutup info"
                    >
                      ✕
                    </button>
                  </div>

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

                    {/* --- RANTAI PASOK BAHAN BAKAR (TOOLTIP) --- */}
                    {isFuelResource && (
                        <div className="mt-2 rounded-xl bg-[#fff1f0] border border-[#f87171]/30 p-2 text-[10px] text-[#b91c1c]">
                          <div className="font-black uppercase tracking-[0.15em] mb-1">Total Konsumsi</div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-[#C4B49C]">Produksi:</span>
                              <span className="font-black">{(calculateProductionAmount(key) || 0).toLocaleString('id-ID')}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#C4B49C]">Konsumsi:</span>
                              <span className="font-black">{currentFuelConsumption.toLocaleString('id-ID')}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#C4B49C]">Saldo (Prod - Konsumsi):</span>
                              <span className={`font-black ${((calculateProductionAmount(key)||0) - currentFuelConsumption) < 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                                {((calculateProductionAmount(key) || 0) - currentFuelConsumption).toLocaleString('id-ID')}
                              </span>
                            </div>
                          </div>
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
                      className={`flex items-center justify-center w-5 h-5 rounded-full transition-colors cursor-help ${isFuelResource ? 'bg-[#7f1d1d]/10 hover:bg-[#7f1d1d]/20 text-[#7f1d1d]' : 'bg-[#5c3c10]/10 hover:bg-[#5c3c10]/20 text-[#5c3c10]'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setHoveredBuildingKey(hoveredBuildingKey === key ? null : key);
                      }}
                      title="Info bangunan"
                    >
                      <Info className="w-3 h-3" />
                    </button>
                  </div>
                  <p className="text-2xl font-black mt-2 text-[#2e261a]">{perCount}</p>
                  <p className="text-[10px] mt-1 font-bold text-[#8b7e66]">{perCount} bangunan</p>
                  
                  {/* --- KONSUMSI BAHAN BAKAR PADA PLTU, PLTG, PLTN (TANPA BARIS TOTAL) --- */}
                  {hasFuelConsumption && (
                    <div className="text-[10px] mt-1 text-[#b02a37] font-semibold space-y-1">
                      <p>Konsumsi per unit:</p>
                      {fuelRequirements.map((rule) => (
                        <p key={rule.resourceKey}>
                          {rule.label} {rule.amount} × {perCount}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* --- BAGIAN PRODUKSI PER HARI DI BAWAH KARTU LISTRIK TELAH DIHAPUS --- */}

                {/* --- NET BALANCE PADA KARTU BAHAN BAKAR (TERHITUNG & BISA MINUS) --- */}
                {!isElectricityTab && (
                  <div className="border-t border-[#C4B49C]/20 mt-4 pt-2 text-xs">
                    <div className="text-center">
                      {isFuelResource ? (() => {
                        const totalProd = calculateProductionAmount(key);
                        const totalCons = currentFuelConsumption;
                        const netBalance = totalProd === 0 ? 0 : totalProd - totalCons;
                        const colorClass = netBalance > 0 ? 'text-emerald-600' : (netBalance < 0 ? 'text-rose-600' : 'text-[#2e261a]');

                        return (
                          <span className={`font-black text-lg ${colorClass}`}>
                            {netBalance.toLocaleString('id-ID')}
                          </span>
                        );
                      })() : (
                        <span className="font-black text-lg text-[#2e261a]">
                          {calculateProductionAmount(key).toLocaleString('id-ID')}
                        </span>
                      )}
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