"use client";
import React from "react";
import { Info, X } from "lucide-react";
import { getKelistrikanFuelRequirements } from "../requirements_logic/1_produksi/1_kelistrikan/fuelLogic";
import { FOOD_CONSUMPTION_PER_CAPITA } from "../../../3_produksi_konsumsi/2_industri_pangan/logic/produksiKonsumsiLogic";

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

interface InfoBangunanProps {
  buildingKey: string;
  label: string;
  perCount: number;
  bMeta: any;
  countryDetail: any;
  findMeta: (key: string) => any;
  isElectricityTab: boolean;
  isProductionZero: boolean;
  rawProduction: number;
  onClose: () => void;
}

export default function InfoBangunan({
  buildingKey,
  label,
  perCount,
  bMeta,
  countryDetail,
  findMeta,
  isElectricityTab,
  isProductionZero,
  rawProduction,
  onClose,
}: InfoBangunanProps) {
  const fuelRequirements = isElectricityTab ? getKelistrikanFuelRequirements(buildingKey) : [];
  const hasFuelConsumption = fuelRequirements.length > 0;
  const isFuelResource = ELECTRICITY_FUEL_RESOURCE_KEYS.includes(buildingKey);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div
        className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col relative font-sans animate-in fade-in zoom-in-95 duration-150 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />

        <div className="px-6 py-5 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-2 text-[#5c3c10]">
            <Info className="h-5 w-5" />
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

        <div className="p-6 relative z-10 flex-1 space-y-4 text-xs font-semibold text-[#5c3c10]">
          <div className="bg-white/80 border border-[#C4B49C]/40 rounded-xl p-4 space-y-2 shadow-xs">
            {isElectricityTab ? (
              <>
                <div className="flex justify-between items-center">
                  <span className="text-[#8b7e66]">Produksi Listrik (Total):</span>
                  <span className={`font-black text-sm ${isProductionZero ? 'text-rose-700' : 'text-emerald-700'}`}>
                    {rawProduction.toLocaleString('id-ID')} MW
                    {isProductionZero && ' (bahan bakar defisit)'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[#8b7e66]">
                  <span>Per Unit:</span>
                  <span>{(bMeta?.produksi || 0).toLocaleString('id-ID')} MW</span>
                </div>
                {bMeta?.konsumsi_listrik !== undefined && bMeta.konsumsi_listrik > 0 && (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-[#8b7e66]">Listrik Dikonsumsi (Satuan):</span>
                      <span className="text-rose-700 font-bold">{bMeta.konsumsi_listrik.toLocaleString('id-ID')} MW</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#8b7e66]">Listrik Dikonsumsi (Total):</span>
                      <span className="text-rose-700 font-bold">{(bMeta.konsumsi_listrik * perCount).toLocaleString('id-ID')} MW</span>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <div className="flex justify-between items-center">
                  <span className="text-[#8b7e66]">Produksi ({label}) Per Hari:</span>
                  <span className="text-emerald-700 font-black text-sm">{(bMeta?.produksi || 0).toLocaleString('id-ID')}</span>
                </div>
                {bMeta?.konsumsi_listrik !== undefined && bMeta.konsumsi_listrik > 0 && (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-[#8b7e66]">Listrik Dikonsumsi (Satuan):</span>
                      <span className="text-rose-700 font-bold">{bMeta.konsumsi_listrik.toLocaleString('id-ID')} MW</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#8b7e66]">Listrik Dikonsumsi (Total):</span>
                      <span className="text-rose-700 font-bold">{(bMeta.konsumsi_listrik * perCount).toLocaleString('id-ID')} MW</span>
                    </div>
                  </>
                )}
              </>
            )}

            <div className="flex justify-between items-center border-t border-[#C4B49C]/20 pt-2 mt-2">
              <span className="text-[#8b7e66]">Biaya Pembangunan:</span>
              <span className="text-[#5c3c10] font-black">{(Number(bMeta?.biaya_pembangunan) || 0).toLocaleString('id-ID')} EM</span>
            </div>
            {bMeta?.waktu_pembangunan !== undefined && (
              <div className="flex justify-between items-center">
                <span className="text-[#8b7e66]">Waktu Pembangunan:</span>
                <span className="text-[#5c3c10] font-bold">{bMeta.waktu_pembangunan} hari</span>
              </div>
            )}
            <div className="flex justify-between items-center">
              <span className="text-[#8b7e66]">Jumlah Bangunan Saat Ini:</span>
              <span className="text-[#2e261a] font-black">{perCount} unit</span>
            </div>
          </div>

          {/* Neraca Pangan (untuk komoditas pangan) */}
          {FOOD_CONSUMPTION_PER_CAPITA[buildingKey] !== undefined &&
            (() => {
              const consumptionPerCapita = FOOD_CONSUMPTION_PER_CAPITA[buildingKey];
              const pop = Number(countryDetail?.jumlah_penduduk) || 0;
              const baseProd = Number(bMeta?.produksi) || 0;
              const totProd = baseProd * perCount;
              const totCons = Math.round((pop / 1000) * consumptionPerCapita);
              const netto = totProd - totCons;
              return (
                <div className="rounded-xl bg-white border border-[#C4B49C]/40 p-4 space-y-2 shadow-xs">
                  <div className="font-black uppercase tracking-wider text-[#5c3c10] border-b border-[#C4B49C]/20 pb-2 mb-1 flex items-center gap-1.5 text-sm">
                    🍽️ Neraca Pangan Nasional
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#8b7e66]">Total Produksi:</span>
                    <span className="text-emerald-700 font-black">+{totProd.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#8b7e66]">Total Konsumsi:</span>
                    <span className="text-rose-700 font-black">-{totCons.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-[#C4B49C]/30 mt-1">
                    <span className="text-[#5c3c10] font-black uppercase">Netto:</span>
                    <span className={`font-black text-sm ${netto >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                      {netto >= 0 ? `+${netto.toLocaleString('id-ID')}` : netto.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              );
            })()}

          {/* Konsumsi Bahan Bakar (untuk pembangkit listrik) */}
          {hasFuelConsumption &&
            (() => {
              return (
                <div className="rounded-xl bg-rose-50 border border-rose-300 p-4 space-y-3 shadow-xs mt-3">
                  <div className="font-black uppercase tracking-wider text-rose-900 border-b border-rose-200 pb-2 mb-2 flex items-center gap-1.5 text-sm">
                    ⚡ Total Konsumsi Bahan Bakar
                  </div>
                  {fuelRequirements.map((req, idx) => {
                    const fCount = Number(countryDetail?.[req.resourceKey]) || 0;
                    const fMeta = findMeta(req.resourceKey);
                    const fProd = Number(fMeta?.produksi) || 0;
                    const totalFuelProd = fCount * fProd;
                    const totalFuelCons = req.amount * perCount;
                    const saldo = totalFuelProd - totalFuelCons;

                    return (
                      <div key={idx} className={`flex flex-col gap-1 ${idx > 0 ? 'pt-2 border-t border-rose-200' : ''}`}>
                        <div className="font-bold text-rose-800 text-[11px] uppercase tracking-tight">
                          {req.label}
                        </div>
                        <div className="flex justify-between items-center text-xs pl-2">
                          <span className="text-rose-900">Produksi:</span>
                          <span className="font-black text-emerald-800">+{totalFuelProd.toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs pl-2">
                          <span className="text-rose-900">Konsumsi:</span>
                          <span className="font-black text-rose-800">-{totalFuelCons.toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs pl-2 pt-1 border-t border-rose-200/50 mt-0.5">
                          <span className="text-rose-900 font-black uppercase">Saldo:</span>
                          <span className={`font-black ${saldo < 0 ? 'text-rose-800' : 'text-emerald-800'}`}>
                            {saldo >= 0 ? `+${saldo.toLocaleString('id-ID')}` : saldo.toLocaleString('id-ID')}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })()}

          {/* Rantai pasok bahan bakar (untuk sumber daya bahan bakar) */}
          {isFuelResource &&
            (() => {
              const fuelName = label.toLowerCase();
              const prodVal = perCount * (Number(bMeta?.produksi) || 0);
              const consVal = calculateTotalFuelConsumption(countryDetail)[buildingKey] || 0;
              const saldoVal = prodVal - consVal;
              return (
                <div className="rounded-xl bg-rose-50 border border-rose-300 p-4 space-y-2 shadow-xs mt-3">
                  <div className="font-black uppercase tracking-wider text-rose-900 border-b border-rose-200 pb-2 mb-1 flex items-center gap-1.5 text-sm">
                    ⚡ Total Konsumsi Bahan Bakar
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-rose-900 font-bold">Total Produksi ({fuelName}):</span>
                    <span className="font-black text-emerald-800">+{prodVal.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-rose-900 font-bold">Konsumsi ({fuelName}):</span>
                    <span className="font-black text-rose-800">-{consVal.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-rose-200 mt-1 text-xs">
                    <span className="text-rose-900 font-black uppercase">Saldo (Prod - Konsumsi):</span>
                    <span className={`font-black ${saldoVal < 0 ? 'text-rose-800' : 'text-emerald-800'}`}>
                      {saldoVal >= 0 ? `+${saldoVal.toLocaleString('id-ID')}` : saldoVal.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              );
            })()}
        </div>

        <div className="px-4 py-2 bg-[#FAF6EE] border-t-2 border-[#C4B49C]/20 flex gap-3 relative z-10">
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