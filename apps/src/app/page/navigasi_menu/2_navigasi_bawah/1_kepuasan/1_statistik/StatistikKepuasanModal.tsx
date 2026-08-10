"use client";

import { useState, useEffect } from "react";
import { X, Smile, TrendingUp, Landmark, Coins, Apple, Plug, Home } from "lucide-react";
import {
  FOOD_CONSUMPTION_PER_CAPITA,
  calculateProduction,
  calculateConsumption,
} from "../../3_produksi_konsumsi/2_industri_pangan/logic/produksiKonsumsiLogic";

interface StatistikKepuasanModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveMenu?: (menu: string) => void;
  countryDetail: any;
  setCountryDetail?: (detail: any) => void;
  selectedCountry: any;
  metadata?: any;
}

export default function StatistikKepuasanModal({
  isOpen,
  onClose,
  setActiveMenu,
  countryDetail,
  setCountryDetail,
  selectedCountry,
  metadata
}: StatistikKepuasanModalProps) {
  
  if (!isOpen) return null;

  const population = countryDetail?.jumlah_penduduk ?? countryDetail?.population ?? countryDetail?.pop ?? countryDetail?.penduduk ?? countryDetail?.total_population ?? 0;

  // 1. Hitung Pajak Score
  const getTaxValue = (detail: any, path: string[], fallback: number = 0): number => {
    let current: any = detail;
    for (const key of path) {
      if (current == null || typeof current !== "object") return fallback;
      current = current[key];
    }
    return typeof current === "number" ? current : fallback;
  };
  const calculateIncomeAtRate = (taxRate: number, maxIncome: number = 1000): number => {
    if (taxRate <= 0) return 0;
    if (taxRate >= 100) return maxIncome;
    return Math.round((taxRate / 100) * maxIncome);
  };
  const vat = Number(getTaxValue(countryDetail, ["ppn"]) ?? getTaxValue(countryDetail, ["pajak", "ppn", "tarif"]) ?? 0);
  const corporate_tax = Number(getTaxValue(countryDetail, ["corporate"]) ?? getTaxValue(countryDetail, ["pajak", "korporasi", "tarif"]) ?? 0);
  const income_tax = Number(getTaxValue(countryDetail, ["income_tax"]) ?? getTaxValue(countryDetail, ["pajak", "penghasilan", "tarif"]) ?? 0);
  const cigarette_tax = Number(getTaxValue(countryDetail, ["cigarette_tax"]) ?? getTaxValue(countryDetail, ["pajak", "bea_cukai", "tarif"]) ?? 0);
  const environment_tax = Number(getTaxValue(countryDetail, ["environment_tax"]) ?? getTaxValue(countryDetail, ["pajak", "lingkungan", "tarif"]) ?? 0);
  const avgRate = (vat + corporate_tax + income_tax + cigarette_tax + environment_tax) / 5;
  const totalIncome = calculateIncomeAtRate(vat, 1000) +
                      calculateIncomeAtRate(corporate_tax, 1000) +
                      calculateIncomeAtRate(income_tax, 1000) +
                      calculateIncomeAtRate(cigarette_tax, 1000) +
                      calculateIncomeAtRate(environment_tax, 1000);
  const maxIncome = 5 * 1000;
  const computedTaxScore = Math.min(100, Math.max(1, Math.round(100 - avgRate + (totalIncome / maxIncome) * 20)));

  // 2. Hitung Harga Score
  const prices = countryDetail?.harga || {};
  const subsidyActive = countryDetail?.subsidyActive || false;
  const priceEntries = Object.entries(prices).filter(([key]) => key.startsWith("harga_"));
  let computedPriceScore = 50;
  if (priceEntries.length > 0) {
    const minPrice = 10000;
    const maxPrice = 100000;
    let totalScore = 0;
    for (const [, value] of priceEntries) {
      const valNum = Number(value) || 0;
      let score = 100 - ((valNum - minPrice) / (maxPrice - minPrice)) * 100;
      score = Math.min(100, Math.max(0, score));
      totalScore += score;
    }
    let avgScore = totalScore / priceEntries.length;
    if (subsidyActive) avgScore = Math.min(100, avgScore + 5);
    computedPriceScore = Math.round(avgScore);
  }

  // 3. Hitung Pangan Score
  let computedFoodScore = 50;
  if (population > 0 && metadata) {
    const allKeys = Object.keys(FOOD_CONSUMPTION_PER_CAPITA);
    let totalRatio = 0;
    let count = 0;
    for (const key of allKeys) {
      const prod = calculateProduction(key, countryDetail, metadata);
      const cons = calculateConsumption(population, FOOD_CONSUMPTION_PER_CAPITA[key]);
      if (cons > 0) {
        const ratio = prod / cons;
        totalRatio += Math.min(ratio, 2);
        count++;
      }
    }
    if (count > 0) {
      const avgRatio = totalRatio / count;
      computedFoodScore = Math.min(100, Math.max(1, Math.round((avgRatio / 2) * 100)));
    }
  }

  // 4. Hitung Listrik Score
  const SOURCE_ORDER = [
    "pembangkit_listrik_tenaga_nuklir",
    "pembangkit_listrik_tenaga_air",
    "pembangkit_listrik_tenaga_surya",
    "pembangkit_listrik_tenaga_uap",
    "pembangkit_listrik_tenaga_gas",
    "pembangkit_listrik_tenaga_angin"
  ];
  const findMeta = (key: string, metadata: any) => {
    if (!metadata) return undefined;
    if (metadata[key]) return metadata[key];
    for (const k of Object.keys(metadata)) {
      const entry = metadata[k];
      if (!entry) continue;
      if (entry.dataKey === key) return entry;
      if (k.endsWith(`_${key}`) || k === `1_${key}`) return entry;
    }
    return undefined;
  };
  const powerSources = SOURCE_ORDER.map((key) => {
    const bMeta = findMeta(key, metadata);
    const count = Number(countryDetail?.[key]) || 0;
    const unitProduction = Number(bMeta?.produksi) || 0;
    return { value: count, unitProduction };
  });
  const totalCapacityMW = powerSources.reduce((sum, source) => sum + (source.value * source.unitProduction), 0);
  
  const calculateBuildingElectricityConsumption = (country: any, metadata: any) => {
    if (!metadata || !country) return 0;
    let totalBuildingConsumption = 0;
    Object.keys(metadata).forEach((key) => {
      const bMeta = metadata[key];
      const konsumsi = Number(bMeta?.konsumsi_listrik) || 0;
      if (konsumsi <= 0) return;
      const possibleKeys = [
        key,
        bMeta?.dataKey,
        key.replace(/^\d+_/, ''),
        bMeta?.dataKey ? bMeta.dataKey.replace(/^\d+_/, '') : undefined,
      ].filter(Boolean) as string[];
      let count = 0;
      for (const pKey of possibleKeys) {
        if (country[pKey] !== undefined && country[pKey] !== null) {
          count = Number(country[pKey]) || 0;
          break;
        }
      }
      if (count > 0) {
        totalBuildingConsumption += count * konsumsi;
      }
    });
    return totalBuildingConsumption;
  };
  
  const userBuildingConsumption = calculateBuildingElectricityConsumption(countryDetail, metadata);
  const populationDemand = population / 50000;
  const estimatedConsumptionMW = Math.max(0, Math.round(userBuildingConsumption + populationDemand));
  
  let computedListrikScore = 50;
  if (estimatedConsumptionMW > 0) {
    const ratio = Math.min(totalCapacityMW / estimatedConsumptionMW, 2);
    computedListrikScore = Math.min(100, Math.max(1, Math.round((ratio / 2) * 100)));
  }

  // 5. Hitung Hunian Score
  const HUNIAN_KEYS = ["rumah_subsidi", "apartemen", "mansion"];
  let totalHousingCapacity = 0;
  if (metadata) {
    HUNIAN_KEYS.forEach((key) => {
      const count = Number(countryDetail?.[key]) || 0;
      const meta = findMeta(key, metadata);
      const capacity = Number(meta?.kapasitas) || 0;
      totalHousingCapacity += count * capacity;
    });
  }
  let computedHunianScore = 50;
  if (population > 0) {
    const idealCapacity = population;
    if (totalHousingCapacity <= 0) {
      computedHunianScore = 1;
    } else {
      const ratio = Math.min(totalHousingCapacity / idealCapacity, 2);
      computedHunianScore = Math.min(100, Math.max(1, Math.round((ratio / 2) * 100)));
    }
  }

  // Gunakan hasil perhitungan real-time
  const pajakScore = computedTaxScore;
  const hargaScore = computedPriceScore;
  const panganScore = computedFoodScore;
  const listrikScore = computedListrikScore;
  const hunianScore = computedHunianScore;
  
  // Hitung general satisfaction sebagai rata-rata dari 5 sektor
  const generalSatisfaction = (pajakScore + hargaScore + panganScore + listrikScore + hunianScore) / 5;

  // Update kepuasan di countryDetail setiap kali generalSatisfaction berubah
  useEffect(() => {
    if (isOpen && setCountryDetail && countryDetail) {
      // Hanya update jika kepuasan benar-benar berubah (mencegah infinite loop)
      if (Math.abs((countryDetail.kepuasan ?? 50) - generalSatisfaction) < 0.1) return;
      
      setCountryDetail({
        ...countryDetail,
        kepuasan: generalSatisfaction,
      });
    }
  }, [isOpen, generalSatisfaction]);

  // Sektor-sektor yang diminta
  const sectors = [
    { 
      name: "Pajak", 
      score: Math.round(pajakScore), 
      icon: Landmark, 
      color: "text-emerald-600", 
      desc: "Daya beli masyarakat dan beban pajak.",
      menuId: "Menu:Pajak"
    },
    { 
      name: "Harga Barang Pokok", 
      score: Math.round(hargaScore), 
      icon: Coins, 
      color: "text-amber-600", 
      desc: "Stabilitas harga bahan kebutuhan sehari-hari.",
      menuId: "Menu:Harga"
    },
    { 
      name: "Produksi Pangan", 
      score: Math.round(panganScore), 
      icon: Apple, 
      color: "text-green-600", 
      desc: "Ketersediaan dan ketahanan pangan nasional.",
      menuId: "Menu:IndustriPangan"
    },
    { 
      name: "Produksi Listrik", 
      score: Math.round(listrikScore), 
      icon: Plug, 
      color: "text-blue-600", 
      desc: "Keseimbangan pasokan dan permintaan energi listrik.",
      menuId: "Menu:Kelistrikan"
    },
    { 
      name: "Hunian Permukiman", 
      score: Math.round(hunianScore), 
      icon: Home, 
      color: "text-rose-600", 
      desc: "Ketersediaan rumah layak huni dan akses perumahan.",
      menuId: "Menu:HunianPermukiman"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        {/* Header */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                <Smile className="h-6 w-6 text-[#5c3c10]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Kepuasan Rakyat</h2>
              </div>
            </div>

            <div className="flex items-center bg-[#e4dac3]/40 p-1 rounded-xl border border-[#bfae93]/50 backdrop-blur-md ml-4">
              <button className="px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20 cursor-pointer">
                Statistik
              </button>
              <button
                onClick={() => setActiveMenu?.("Action:NaikkanKepuasan")}
                className="px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all text-[#8b7e66] hover:text-[#5c3c10] cursor-pointer"
              >
                Naikkan Kepuasan
              </button>
            </div>
          </div>

          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="space-y-8 animate-in fade-in duration-500">
            
            {/* Kartu skor umum */}
            <div className="bg-[#e4dac3]/25 border-2 border-[#C4B49C]/40 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#ffe07d] via-[#fcae1e] to-[#c77a00] border-4 border-[#FAF6EE] shadow-lg flex items-center justify-center">
                  <Smile className="h-10 w-10 text-[#5c3c10]" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#5c3c10] uppercase tracking-wide leading-none mb-1.5">Persetujuan Umum Rakyat</h3>
                  <p className="text-xs text-[#8b7e66] font-bold max-w-md">
                    Rata-rata persetujuan nasional rakyat terhadap kebijakan kepemimpinan kabinet saat ini.
                  </p>
                </div>
              </div>
              <div className="text-center md:text-right bg-[#FAF6EE] border-2 border-[#C4B49C]/30 px-6 py-4 rounded-xl shadow-inner min-w-[140px]">
                <p className="text-4xl font-black text-[#2e261a] tracking-tight leading-none">{Math.round(generalSatisfaction)}%</p>
                <p className="text-[10px] text-emerald-700 font-bold uppercase tracking-widest mt-1 flex items-center justify-center md:justify-end gap-1">
                  <TrendingUp className="h-3 w-3" /> Stabil
                </p>
              </div>
            </div>

            {/* Sektor-sektor */}
            <div>
              <div className="flex items-center gap-3 mb-5 px-1">
                <div className="p-1.5 rounded-lg bg-[#e4dac3]/50 border border-[#C4B49C]/40">
                  <TrendingUp className="h-4 w-4 text-[#5c3c10]" />
                </div>
                <h3 className="text-lg font-black text-[#5c3c10] uppercase tracking-wider italic">Penilaian Sektoral</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C4B49C] to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sectors.map((sector, idx) => {
                  const Icon = sector.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveMenu?.(sector.menuId)}
                      className="bg-[#FAF6EE] border-2 border-[#C4B49C]/40 p-5 rounded-2xl flex gap-4 transition-all hover:border-[#5c3c10] hover:bg-[#e4dac3]/10 hover:shadow-md active:bg-[#e4dac3]/20 shadow-sm relative overflow-hidden group cursor-pointer text-left"
                    >
                      <div className={`p-3 rounded-xl bg-black/5 border border-black/5 ${sector.color} self-start group-hover:bg-black/10 transition-colors`}>
                        <Icon size={20} />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between text-xs font-black text-[#5c3c10] uppercase">
                          <span>{sector.name}</span>
                          <span>{sector.score}%</span>
                        </div>
                        <div className="h-2.5 w-full bg-[#e4dac3] rounded-full overflow-hidden border border-[#bfae93]/50">
                          <div className={`h-full bg-gradient-to-r from-[#fcae1e] to-[#c77a00] rounded-full`} style={{ width: `${sector.score}%` }} />
                        </div>
                        <p className="text-[10px] text-[#8b7e66] font-bold leading-normal pt-1">
                          {sector.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}