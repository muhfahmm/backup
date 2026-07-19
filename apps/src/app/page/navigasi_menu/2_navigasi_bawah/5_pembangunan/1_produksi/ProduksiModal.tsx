"use client"
import React, { useState, useEffect, useMemo, useRef } from "react";
import { X, Hammer, TrendingUp, TrendingDown, Eye, EyeOff, AlertCircle } from "lucide-react";
import { fetchBuildingMetadata } from '../../../../../../lib/buildingMetadata';
import { isBuildingAvailable } from '../../../../../logic';
import { calculateProductionIncrement, formatDate, getDaysElapsed } from '../../../../../logic/production_logic';
import { logger } from '../../../../../../lib/logger';

// Import 8 Komponen Tab yang sudah dipisah
import KelistrikanTab from "./card_data/1_kelistrikan";
import MineralEnergiTab from "./card_data/2_mineral_energi";
import ManufakturTab from "./card_data/3_manufaktur";
import PeternakanTab from "./card_data/4_peternakan";
import AgrikulturTab from "./card_data/5_agrikultur";
import PerikananTab from "./card_data/6_perikanan";
import OlahanPanganTab from "./card_data/7_olahan_pangan";
import FarmasiTab from "./card_data/8_farmasi";

import * as kelistrikanRequirements from "./requirements_logic/1_produksi/1_kelistrikan/requirements";
import * as mineralKritisRequirements from "./requirements_logic/1_produksi/2_mineral_kritis/requirements";
import * as manufakturRequirements from "./requirements_logic/1_produksi/3_manufaktur/requirements";
import * as peternakanRequirements from "./requirements_logic/1_produksi/4_peternakan/requirements";
import * as agrikulturRequirements from "./requirements_logic/1_produksi/5_agrikultur/requirements";
import * as perikananRequirements from "./requirements_logic/1_produksi/6_perikanan/requirements";
import * as olahanPanganRequirements from "./requirements_logic/1_produksi/7_olahan_pangan/requirements";
import * as farmasiRequirements from "./requirements_logic/1_produksi/8_farmasi/requirements";

interface MaterialRequirement {
  resourceKey: string;
  label: string;
  group: string;
  amount?: number;
}

interface BuildingRequirements {
  requirements: MaterialRequirement[];
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
  currentDate?: Date;
  targetTab?: string | null;
  targetHighlightedKey?: string | null;
  onProductionDeepLinkHandled?: () => void;
}

export default function ProduksiModal({ isOpen, onClose, countryDetail, setCountryDetail, currentDate, targetTab, targetHighlightedKey, onProductionDeepLinkHandled }: ModalProps) {
  const [activeTab, setActiveTab] = useState("kelistrikan");
  const [selectedBuilding, setSelectedBuilding] = useState<{ key: string; label: string } | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [metadata, setMetadata] = useState<Record<string, any>>({});
  const [loadingMetadata, setLoadingMetadata] = useState(true);
  const [hoveredBuildingKey, setHoveredBuildingKey] = useState<string | null>(null);
  const [productionCache, setProductionCache] = useState<Record<string, number>>({});
  const [lastCalculationDate, setLastCalculationDate] = useState<string>("");
  const lastCalculatedDateRef = useRef<string>("");

  const [showMaterialGrid, setShowMaterialGrid] = useState(true);
  const [highlightedCardKey, setHighlightedCardKey] = useState<string | null>(null);

  // --- STATE UNTUK MODAL PERINGATAN MATERIAL KURANG ---
  const [showMaterialWarningModal, setShowMaterialWarningModal] = useState(false);
  const [insufficientMaterials, setInsufficientMaterials] = useState<MaterialRequirement[]>([]);

  const RESOURCE_KEY_ALIASES: Record<string, string> = {
    aluminium: 'aluminium',
  };

  const normalizeResourceKey = (key: string) => RESOURCE_KEY_ALIASES[key] || key;

  const CARD_TAB_MAP: Record<string, string> = {
    emas: 'mineral',
    uranium: 'mineral',
    batu_bara: 'mineral',
    minyak_bumi: 'mineral',
    gas_alam: 'mineral',
    garam: 'mineral',
    nikel: 'mineral',
    litium: 'mineral',
    tembaga: 'mineral',
    aluminium: 'mineral',
    logam_tanah_jarang: 'mineral',
    bijih_besi: 'mineral',
    semikonduktor: 'manufaktur',
    mobil: 'manufaktur',
    sepeda_motor: 'manufaktur',
    smelter: 'manufaktur',
    semen_beton: 'manufaktur',
    kayu: 'manufaktur',
    pupuk: 'manufaktur',
  };

  const REQUIREMENTS_MODULES: Record<string, any> = {
    kelistrikan: kelistrikanRequirements,
    mineral: mineralKritisRequirements,
    manufaktur: manufakturRequirements,
    peternakan: peternakanRequirements,
    agrikultur: agrikulturRequirements,
    perikanan: perikananRequirements,
    "olahan pangan": olahanPanganRequirements,
    farmasi: farmasiRequirements,
  };

  const getSelectedBuildingRequirements = (): BuildingRequirements | undefined => {
    if (!selectedBuilding) return undefined;
    const module = REQUIREMENTS_MODULES[activeTab];
    const normalizedKey = normalizeResourceKey(selectedBuilding.key);
    return module?.findRequirements?.(normalizedKey);
  };

  const getSelectedBuildingProduction = () => {
    if (!selectedBuilding) return 0;
    const module = REQUIREMENTS_MODULES[activeTab];
    const normalizedKey = normalizeResourceKey(selectedBuilding.key);
    return module?.getTotalProduction?.(normalizedKey, countryDetail, metadata) ?? 0;
  };

  const selectedBuildingRequirements = getSelectedBuildingRequirements();
  const selectedBuildingProduction = getSelectedBuildingProduction();

  const getMaterialStock = (resourceKey: string): number => {
    const normalizedKey = normalizeResourceKey(resourceKey);
    return Number(countryDetail?.[normalizedKey]) || 0;
  };

  const ELECTRICITY_FUEL_BUILDINGS = [
    'pembangkit_listrik_tenaga_gas',
    'pembangkit_listrik_tenaga_nuklir',
    'pembangkit_listrik_tenaga_uap',
  ];

  const ELECTRICITY_FUEL_LABELS: Record<string, string> = {
    gas_alam: 'Gas Alam',
    uranium: 'Uranium',
    batu_bara: 'Batu Bara',
    minyak_bumi: 'Minyak Bumi',
  };

  const getTotalElectricityFuelConsumption = (): Record<string, number> => {
    const totals: Record<string, number> = {
      gas_alam: 0,
      uranium: 0,
      batu_bara: 0,
      minyak_bumi: 0,
    };

    ELECTRICITY_FUEL_BUILDINGS.forEach((buildingKey) => {
      const count = Number(countryDetail?.[buildingKey]) || 0;
      if (count === 0) return;
      switch (buildingKey) {
        case 'pembangkit_listrik_tenaga_gas':
          totals.gas_alam += 2 * count;
          break;
        case 'pembangkit_listrik_tenaga_nuklir':
          totals.uranium += 1 * count;
          break;
        case 'pembangkit_listrik_tenaga_uap':
          totals.batu_bara += 50 * count;
          totals.minyak_bumi += 5 * count;
          break;
      }
    });

    return totals;
  };

  const handleMaterialClick = (resourceKey: string, label: string) => {
    const normalizedKey = normalizeResourceKey(resourceKey);
    const tabId = CARD_TAB_MAP[normalizedKey];
    if (!tabId) {
      setToast(`Tidak ada kartu untuk ${label}`);
      setTimeout(() => setToast(null), 2000);
      return;
    }
    setActiveTab(tabId);
    setHighlightedCardKey(normalizedKey);
    setSelectedBuilding(null);
    setToast(`${label} dipilih di tab ${tabId}`);
    setTimeout(() => setToast(null), 2000);
  };

  const calculateProductionAmount = useMemo(() => {
    return (resourceKey: string): number => {
      const buildingCount = Number(countryDetail?.[resourceKey]) || 0;
      if (buildingCount === 0 || !metadata || Object.keys(metadata).length === 0) return 0;
      const bMeta = findMeta(resourceKey);
      if (!bMeta || !bMeta.produksi) return 0;
      if (resourceKey === 'emas') return bMeta.produksi * buildingCount;
      if (!currentDate) return 0;
      const buildDateKey = `build_date_${resourceKey}`;
      const buildDate = countryDetail?.[buildDateKey];
      const currentDateStr = formatDate(currentDate);
      const finalBuildDate = buildDate || currentDateStr;
      return calculateProductionIncrement(bMeta.produksi, buildingCount, finalBuildDate, currentDateStr);
    };
  }, [countryDetail, currentDate, metadata]);

  const findMeta = (key: string) => {
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

  const calculateDaysElapsed = (startDate: string, endDate: string): number => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return Math.max(0, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
  };

  useEffect(() => {
    if (!isOpen) return;
    setLoadingMetadata(true);
    fetchBuildingMetadata().then((data) => {
      setMetadata(data || {});
      setProductionCache(prev => ({ ...prev }));
    }).catch((err) => logger.error('ProduksiModal', 'Failed to load metadata', err))
      .finally(() => setLoadingMetadata(false));
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    if (targetTab) {
      setActiveTab(targetTab);
    }
    if (targetHighlightedKey) {
      setHighlightedCardKey(targetHighlightedKey);
    }
    if (targetTab || targetHighlightedKey) {
      onProductionDeepLinkHandled?.();
    }
  }, [isOpen, targetTab, targetHighlightedKey, onProductionDeepLinkHandled]);

  useEffect(() => {
    if (!currentDate || !metadata || Object.keys(metadata).length === 0) return;
    const currentDateStr = formatDate(currentDate);
    let hasUpdates = false;
    let updates: Record<string, string> = {};
    const allKeys = Object.keys(metadata);
    for (const resourceKey of allKeys) {
      const buildingCount = Number(countryDetail?.[resourceKey]) || 0;
      if (buildingCount === 0) continue;
      const bMeta = findMeta(resourceKey);
      if (!bMeta || !bMeta.produksi) continue;
      const buildDateKey = `build_date_${resourceKey}`;
      const buildDate = countryDetail?.[buildDateKey];
      const finalBuildDate = buildDate || currentDateStr;
      const production = calculateProductionIncrement(bMeta.produksi, buildingCount, finalBuildDate, currentDateStr);
      const lastUpdateKey = `last_update_date_${resourceKey}`;
      if (production > 0) {
        updates[lastUpdateKey] = currentDateStr;
        hasUpdates = true;
      }
    }
    if (hasUpdates) {
      setCountryDetail((prev: any) => ({ ...prev, ...updates }));
      lastCalculatedDateRef.current = currentDateStr;
    }
  }, [currentDate, metadata]);

  const TABS = [
    { id: "kelistrikan", label: "Kelistrikan", component: KelistrikanTab },
    { id: "mineral", label: "Mineral & Energi", component: MineralEnergiTab },
    { id: "manufaktur", label: "Manufaktur", component: ManufakturTab },
    { id: "peternakan", label: "Peternakan", component: PeternakanTab },
    { id: "agrikultur", label: "Agrikultur", component: AgrikulturTab },
    { id: "perikanan", label: "Perikanan", component: PerikananTab },
    { id: "olahan pangan", label: "Olahan Pangan", component: OlahanPanganTab },
    { id: "farmasi", label: "Farmasi", component: FarmasiTab }
  ];

  if (!isOpen) return null;

  const handleBuild = (key: string, label: string) => {
    if (!isBuildingAvailable(key, countryDetail?.country || '')) {
      setToast(`❌ ${label} tidak tersedia untuk negara ini`);
      setTimeout(() => setToast(null), 2000);
      return;
    }
    setSelectedBuilding({ key, label });
    setToast(`${label} dipilih`);
    setTimeout(() => setToast(null), 1500);
  };

  const confirmBuild = () => {
    if (!selectedBuilding) return;
    const { key, label } = selectedBuilding;
    const bMeta = findMeta(key);
    if (loadingMetadata || !bMeta || !currentDate) {
      setToast("Metadata bangunan masih dimuat atau tanggal tidak tersedia.");
      setTimeout(() => setToast(null), 2500);
      return;
    }

    // --- CEK MATERIAL YANG KURANG (STOK 0) ---
    const missingMaterials = selectedBuildingRequirements?.requirements?.filter(
      (material) => getMaterialStock(material.resourceKey) <= 0
    ) || [];

    if (missingMaterials.length > 0) {
      setInsufficientMaterials(missingMaterials);
      setShowMaterialWarningModal(true);
      return; // BATAL: Pembangunan tidak dilanjutkan
    }
    // ------------------------------------------

    const cost = Number(bMeta.biaya_pembangunan);
    const anggaran = Number(countryDetail?.anggaran) || 0;
    if (anggaran < cost) {
      setToast(`Kas negara tidak mencukupi untuk membangun ${label}!`);
      setTimeout(() => setToast(null), 2500);
      return;
    }
    const buildDateKey = `build_date_${key}`;
    const buildDateValue = formatDate(currentDate);
    const updatedDetail = {
      ...countryDetail,
      anggaran: anggaran - cost,
      [key]: (Number(countryDetail?.[key]) || 0) + 1,
      [buildDateKey]: buildDateValue,
      [`accumulated_${key}`]: 0,
      [`last_prod_date_${key}`]: buildDateValue,
    };
    setCountryDetail(updatedDetail);
    setSelectedBuilding(null);
    setToast(`✅ Berhasil! ${label} dibangun pada ${buildDateValue}. Sekarang ada ${updatedDetail[key]} bangunan.`);
    setTimeout(() => setToast(null), 3000);
  };

  const activeSection = TABS.find(tab => tab.id === activeTab) || TABS[0];
  const ComponentToRender = activeSection.component;

  const ELECTRICITY_BUILDINGS_LIST = [
    'pembangkit_listrik_tenaga_nuklir',
    'pembangkit_listrik_tenaga_air',
    'pembangkit_listrik_tenaga_surya',
    'pembangkit_listrik_tenaga_uap',
    'pembangkit_listrik_tenaga_gas',
    'pembangkit_listrik_tenaga_angin',
  ];

  const totalProductionMW = ELECTRICITY_BUILDINGS_LIST.reduce((sum, bKey) => {
    const count = Number(countryDetail?.[bKey]) || 0;
    const bMeta = findMeta(bKey);
    const perUnit = Number(bMeta?.produksi || 0);
    return sum + perUnit * count;
  }, 0);

  const estimatedConsumption = Math.min(
    totalProductionMW,
    Math.max(0, Math.round(totalProductionMW * 0.7 + ((countryDetail?.jumlah_penduduk ?? 0) / 50000)))
  );

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
          <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
            {/* HEADER */}
            <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                    <Hammer className="h-6 w-6 text-[#5c3c10]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Produksi & Pembangunan</h2>
                    <p className="text-xs text-[#8b7e66]">Kelola industri, pertanian, dan komoditas negara</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 ml-8 pl-8 border-l-2 border-[#C4B49C]/30">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-300 rounded-lg">
                    <TrendingUp className="h-4 w-4 text-emerald-700" />
                    <span className="text-[11px] font-black text-emerald-700 uppercase tracking-wider">Produksi</span>
                    <span className="text-[11px] font-black text-emerald-700">{totalProductionMW.toLocaleString('id-ID')} MW</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 border border-rose-300 rounded-lg">
                    <TrendingDown className="h-4 w-4 text-rose-700" />
                    <span className="text-[11px] font-black text-rose-700 uppercase tracking-wider">Konsumsi</span>
                    <span className="text-[11px] font-black text-rose-700">{estimatedConsumption.toLocaleString('id-ID')} MW</span>
                  </div>
                </div>
              </div>
              <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* BODY */}
            <div className="flex-1 flex min-h-0 relative z-10">
              <div className="w-64 border-r-2 border-[#C4B49C]/30 bg-[#FAF6EE] p-4 flex flex-col gap-2 overflow-y-auto">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-between w-full p-3 rounded-xl border-2 text-left transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-[#5c3c10] border-[#5c3c10] text-[#FAF6EE] shadow-md"
                        : "bg-white/80 border-[#C4B49C]/30 text-[#5c3c10] hover:bg-white hover:border-[#5c3c10]/50"
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-wider">{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40">
                <ComponentToRender 
                  countryDetail={countryDetail}
                  setCountryDetail={setCountryDetail}
                  metadata={metadata}
                  calculateProductionAmount={calculateProductionAmount}
                  findMeta={findMeta}
                  onBuildClick={handleBuild}
                  hoveredBuildingKey={hoveredBuildingKey}
                  setHoveredBuildingKey={setHoveredBuildingKey}
                  highlightedCardKey={highlightedCardKey}
                  isBuildingAvailable={isBuildingAvailable}
                  loadingMetadata={loadingMetadata}
                  selectedBuilding={selectedBuilding}
                  currentDate={currentDate}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      
      {toast && <div className="fixed bottom-6 right-6 z-[80] bg-[#5c3c10] text-[#FAF6EE] px-4 py-2 rounded-lg shadow-md">{toast}</div>}
      
      {/* POPUP KONFIRMASI UTAMA */}
      {selectedBuilding && (() => {
        const bMeta = findMeta(selectedBuilding.key);
        const cost = bMeta?.biaya_pembangunan !== undefined ? Number(bMeta.biaya_pembangunan) : 0;
        // --- AMBIL DAFTAR MATERIAL YANG KURANG UNTUK STYLING TOMBOL ---
        const missingMaterials = selectedBuildingRequirements?.requirements?.filter(
          (mat) => getMaterialStock(mat.resourceKey) <= 0
        ) || [];

        return (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-transparent pointer-events-none">
            <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col relative font-sans animate-in fade-in zoom-in-95 duration-150 pointer-events-auto">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />
              
              <div className="px-6 py-5 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
                <div className="flex items-center gap-2 text-[#5c3c10]">
                  <Hammer className="h-5 w-5" />
                  <h3 className="text-base font-bold uppercase tracking-tight">Konfirmasi Pembangunan</h3>
                </div>
                <button onClick={() => setSelectedBuilding(null)} className="text-[#8b7e66] hover:text-[#5c3c10]">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 relative z-10 flex-1 space-y-4">
                <div>
                  <h4 className="text-lg font-black text-[#2e261a]">{selectedBuilding.label}</h4>
                  <p className="text-xs text-[#8b7e66] mt-1">{bMeta?.deskripsi || bMeta?.desc || 'Tidak ada deskripsi tersedia.'}</p>
                </div>
                <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 rounded-xl p-4 space-y-2.5 text-xs text-[#5c3c10]">
                  <div className="flex justify-between font-bold">
                    <span>Biaya Pembangunan:</span>
                    <span className="text-[#2e261a]">{(loadingMetadata || !bMeta) ? 'Memuat...' : `${cost.toLocaleString('id-ID')} EM`}</span>
                  </div>
                  {bMeta?.waktu_pembangunan !== undefined && (
                    <div className="flex justify-between">
                      <span>Estimasi Waktu Pembangunan:</span>
                      <span className="text-[#2e261a] font-semibold">{bMeta.waktu_pembangunan} Hari</span>
                    </div>
                  )}
                  {bMeta?.produksi !== undefined && (
                    <div className="flex justify-between">
                      <span>Produksi per hari:</span>
                      <span className="text-emerald-700 font-bold">+{bMeta.produksi.toLocaleString('id-ID')}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Total Produksi (semua unit):</span>
                    <span className="text-[#2e261a] font-semibold">{selectedBuildingProduction.toLocaleString('id-ID')}</span>
                  </div>
                  {ELECTRICITY_FUEL_BUILDINGS.includes(selectedBuilding.key) && (
                    <div className="mt-3 rounded-xl bg-[#f7f3e8]/80 border border-[#C4B49C]/30 p-3 text-xs text-[#5c3c10]">
                      <div className="mb-2 font-black uppercase tracking-[0.2em]">Total Konsumsi</div>
                      <div className="space-y-1">
                        {Object.entries(getTotalElectricityFuelConsumption()).map(([resourceKey, amount]) => (
                          <div key={resourceKey} className="flex justify-between">
                            <span>{ELECTRICITY_FUEL_LABELS[resourceKey] || resourceKey}</span>
                            <span className="font-black">{amount.toLocaleString('id-ID')}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* SECTION MATERIAL DENGAN TOMBOL SHOW/HIDE */}
                  {selectedBuildingRequirements?.requirements && selectedBuildingRequirements.requirements.length > 0 ? (
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
                      
                      {/* GRID MATERIAL - PERBAIKAN BORDER MERAH UNTUK STOK 0 */}
                      <div
                        className={`grid grid-cols-4 gap-2 overflow-hidden transition-all duration-500 ease-in-out ${
                          showMaterialGrid ? 'max-h-[1500px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
                        }`}
                      >
                        {selectedBuildingRequirements.requirements.map((material: MaterialRequirement) => {
                          const stock = getMaterialStock(material.resourceKey);
                          return (
                            <button
                              key={`${material.resourceKey}-${material.group}`}
                              type="button"
                              onClick={() => handleMaterialClick(material.resourceKey, material.label)}
                              className={`flex flex-col items-center justify-center bg-white/80 border rounded-xl p-2.5 min-h-[50px] cursor-pointer hover:border-[#5c3c10]/60 transition-all ${
                                stock <= 0 
                                  ? 'border-red-400 bg-red-50/70 text-red-800' 
                                  : 'border-[#C4B49C]/30'
                              }`}
                            >
                              <div className="font-bold text-[10px] text-center">{material.label}</div>
                              {material.amount !== undefined && (
                                <div className="text-[9px] uppercase tracking-[0.15em] text-[#5c3c10] mt-1">
                                  x{material.amount}
                                </div>
                              )}
                              <div className={`text-[10px] font-black mt-0.5 ${stock <= 0 ? 'text-red-600' : 'text-[#8b7e66]'}`}>
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
                  <span>{(Number(countryDetail?.anggaran) || 0).toLocaleString('id-ID')}</span>
                </div>
              </div>
              <div className="p-4 bg-[#FAF6EE] border-t-2 border-[#C4B49C]/20 flex gap-3 relative z-10">
                <button onClick={() => setSelectedBuilding(null)} className="flex-1 py-2 rounded-xl border-2 border-[#C4B49C] text-[#8b7e66] text-[10px] font-black uppercase cursor-pointer hover:bg-black/5 transition-all text-center">Batal</button>
                
                {/* TOMBOL MULAI PEMBANGUNAN - PERBAIKAN WARNA COKLAT SAAT MATERIAL KURANG */}
                <button 
                  onClick={confirmBuild} 
                  disabled={loadingMetadata || !bMeta || cost === 0 ? true : (Number(countryDetail?.anggaran) || 0) < cost}
                  className={`flex-1 py-2 rounded-xl text-[10px] font-black uppercase transition-all text-center cursor-pointer ${
                    missingMaterials.length > 0
                      ? 'bg-[#8b7e66] text-white border border-[#8b7e66] cursor-not-allowed opacity-70'
                      : 'bg-[#5c3c10] text-[#FAF6EE] border border-[#5c3c10] hover:bg-[#8b7e66] hover:border-[#8b7e66]'
                  }`}
                >
                  {missingMaterials.length > 0 ? 'Material Kurang' : 'Mulai Pembangunan'}
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* --- MODAL PERINGATAN MATERIAL KURANG (MUNCUL KETIKA ADA STOK 0) --- */}
      {showMaterialWarningModal && insufficientMaterials.length > 0 && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-transparent pointer-events-none">
          <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col relative font-sans animate-in fade-in zoom-in-95 duration-150 pointer-events-auto">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />
            
            <div className="px-6 py-5 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
              <div className="flex items-center gap-2 text-rose-600">
                <AlertCircle className="h-5 w-5" />
                <h3 className="text-base font-bold uppercase tracking-tight">⚠️ Stok Material Kosong</h3>
              </div>
              <button onClick={() => setShowMaterialWarningModal(false)} className="text-[#8b7e66] hover:text-[#5c3c10]">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 relative z-10 flex-1 space-y-4">
              <p className="text-sm text-[#5c3c10]">
                Pembangunan <strong className="font-black text-[#2e261a]">{selectedBuilding?.label}</strong> tidak dapat dilanjutkan karena material berikut ini stoknya kosong (0):
              </p>
              <div className="bg-rose-50/60 border border-rose-300 rounded-xl p-4 flex flex-col gap-2 text-xs font-bold text-[#5c3c10]">
                {insufficientMaterials.map((mat, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-[#2e261a]">{mat.label}</span>
                    <span className="text-rose-600 font-black">0</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-[#8b7e66] italic">
                Klik nama material pada daftar di atas untuk menambah stok (kembali ke tab terkait).
              </p>
            </div>
            <div className="p-4 bg-[#FAF6EE] border-t-2 border-[#C4B49C]/20 flex justify-end relative z-10">
              <button onClick={() => setShowMaterialWarningModal(false)} className="py-2 px-6 rounded-xl text-[10px] font-black uppercase transition-all text-center cursor-pointer bg-[#5c3c10] text-[#FAF6EE] border border-[#5c3c10] hover:bg-[#8b7e66] hover:border-[#8b7e66]">Tutup & Lengkapi Stok</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
