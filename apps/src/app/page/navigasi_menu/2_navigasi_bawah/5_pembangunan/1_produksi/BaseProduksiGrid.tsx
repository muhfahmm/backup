"use client";
import React from "react";
import { Info } from "lucide-react";
import { getKelistrikanFuelRequirements } from "./requirements_logic/1_produksi/1_kelistrikan/fuelLogic";
import InfoBangunan from "./info_bangunan_modals"; // <-- import komponen baru

const ELECTRICITY_FUEL_RESOURCE_KEYS = [
  "gas_alam",
  "uranium",
  "batu_bara",
  "minyak_bumi",
];

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
  isElectricityTab,
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

          const effectiveProduction = calculateProductionAmount(key);
          const isProductionZero = effectiveProduction === 0 && perCount > 0;
          const rawProduction = perCount * Number(bMeta?.produksi || 0);

          return (
            <div
              key={key}
              onClick={() => isAvailable && onBuildClick(key, label)}
              role="button"
              tabIndex={0}
              aria-disabled={!isAvailable}
              className={`rounded-2xl overflow-visible flex flex-col flex-grow justify-between transition-all relative bg-white/90 border shadow-sm ${isAvailable ? 'border-[#C4B49C]/30 hover:shadow-md cursor-pointer' : 'border-rose-300 bg-rose-50/60 opacity-90 cursor-not-allowed'} ${isHighlighted ? 'border-emerald-500 border-2 shadow-[0_0_0_3px_rgba(16,185,129,0.18)]' : ''}`}
            >
              {/* Modal Info Bangunan - dipisah ke komponen InfoBangunan */}
              {hoveredBuildingKey === key && (
                <InfoBangunan
                  buildingKey={key}
                  label={label}
                  perCount={perCount}
                  bMeta={bMeta}
                  countryDetail={countryDetail}
                  findMeta={findMeta}
                  isElectricityTab={isElectricityTab}
                  isProductionZero={isProductionZero}
                  rawProduction={rawProduction}
                  onClose={() => setHoveredBuildingKey(null)}
                />
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
                </div>

                {/* FOOTER LISTRIK */}
                {isElectricityTab && (
                  <div className="border-t border-[#C4B49C]/20 mt-auto pt-2 pb-1 text-center min-h-[64px] flex flex-col justify-center">
                    <span className={`font-black text-xl ${isProductionZero ? 'text-rose-600' : 'text-[#2e261a]'}`}>
                      {rawProduction.toLocaleString('id-ID')} MW
                    </span>
                    {isProductionZero && (
                      <span className="text-[9px] font-bold text-rose-500">(bahan bakar defisit)</span>
                    )}
                  </div>
                )}

                {/* FOOTER NON-LISTRIK */}
                {!isElectricityTab && (
                  <div className="border-t border-[#C4B49C]/20 mt-auto pt-2 pb-1 text-center min-h-[64px] flex flex-col justify-center">
                    {isFuelResource ? (() => {
                      const totalProd = calculateProductionAmount(key);
                      const totalCons = calculateTotalFuelConsumption(countryDetail)[key] || 0;
                      const netBalance = totalProd === 0 ? 0 : totalProd - totalCons;
                      const colorClass = netBalance > 0 ? 'text-emerald-600' : (netBalance < 0 ? 'text-rose-600' : 'text-[#2e261a]');
                      return (
                        <span className={`font-black text-xl ${colorClass}`}>
                          {netBalance.toLocaleString('id-ID')}
                        </span>
                      );
                    })() : (
                      <span className="font-black text-xl text-[#2e261a]">
                        {calculateProductionAmount(key).toLocaleString('id-ID')}
                      </span>
                    )}
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