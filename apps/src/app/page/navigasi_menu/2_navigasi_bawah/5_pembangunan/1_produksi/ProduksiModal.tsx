"use client"
import React, { useState, useEffect, useMemo, useRef } from "react";
import { X, Hammer, TrendingUp, TrendingDown } from "lucide-react";
import { fetchBuildingMetadata } from '../../../../../../lib/buildingMetadata';
import { isBuildingAvailable } from '../../../../../logic';
import { calculateProductionIncrement, formatDate, getDaysElapsed } from '../../../../../logic/production_logic';
import { logger } from '../../../../../../lib/logger';

// Import 8 Komponen Tab yang sudah dipisah
import KelistrikanTab from "./1_kelistrikan";
import MineralEnergiTab from "./2_mineral_energi";
import ManufakturTab from "./3_manufaktur";
import PeternakanTab from "./4_peternakan";
import AgrikulturTab from "./5_agrikultur";
import PerikananTab from "./6_perikanan";
import OlahanPanganTab from "./7_olahan_pangan";
import FarmasiTab from "./8_farmasi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
  currentDate?: Date;
}

export default function ProduksiModal({ isOpen, onClose, countryDetail, setCountryDetail, currentDate }: ModalProps) {
  const [activeTab, setActiveTab] = useState("kelistrikan");
  const [selectedBuilding, setSelectedBuilding] = useState<{ key: string; label: string } | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [metadata, setMetadata] = useState<Record<string, any>>({});
  const [loadingMetadata, setLoadingMetadata] = useState(true);
  const [hoveredBuildingKey, setHoveredBuildingKey] = useState<string | null>(null);
  const [productionCache, setProductionCache] = useState<Record<string, number>>({});
  const [lastCalculationDate, setLastCalculationDate] = useState<string>("");
  const lastCalculatedDateRef = useRef<string>("");

  // ====== LOGIKA KALKULASI & USE EFFECT TETAP SAMA ======
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

  // ====== KONFIGURASI 8 TAB BARU ======
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
      alert("Metadata bangunan masih dimuat atau tanggal tidak tersedia.");
      return;
    }
    const cost = Number(bMeta.biaya_pembangunan);
    const anggaran = Number(countryDetail?.anggaran) || 0;
    if (anggaran < cost) {
      alert(`Kas negara tidak mencukupi untuk membangun ${label}!`);
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
    alert(`✅ Berhasil! ${label} dibangun pada ${buildDateValue}. Sekarang ada ${updatedDetail[key]} bangunan.`);
    setCountryDetail(updatedDetail);
    setSelectedBuilding(null);
  };

  const activeSection = TABS.find(tab => tab.id === activeTab) || TABS[0];
  const ComponentToRender = activeSection.component;

  // Hitung total produksi listrik untuk badge header
  const totalProduction = countryDetail?.pembangkit_listrik_tenaga_nuklir || 0;
  const estimatedConsumption = Math.min(
    (totalProduction * 1000),
    Math.max(0, Math.round((totalProduction * 1000) * 0.7 + ((countryDetail?.jumlah_penduduk ?? 0) / 50000)))
  );

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/65 z-40 pointer-events-none" />}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
          <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
            {/* HEADER - SAMA SEPERTI SEBELUMNYA */}
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
                    <span className="text-[11px] font-black text-emerald-700">{(totalProduction * 1000).toLocaleString('id-ID')} MW</span>
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
              {/* SIDEBAR */}
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

              {/* CONTENT - PANGGIL KOMPONEN TAB YANG SESUAI */}
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
      
      {/* POPUP KONFIRMASI - SAMA SEPERTI SEBELUMNYA */}
      {selectedBuilding && (() => {
        const bMeta = findMeta(selectedBuilding.key);
        const cost = bMeta?.biaya_pembangunan !== undefined ? Number(bMeta.biaya_pembangunan) : 0;
        return (
          <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4">
            <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-md overflow-hidden shadow-2xl flex flex-col relative font-sans animate-in fade-in zoom-in-95 duration-150">
              {/* ... (Sisanya sama persis dengan kode asli Anda untuk popup konfirmasi) ... */}
              {/* Karena panjang, saya ringkas: intinya popup di sini tetap sama seperti di file asli Anda */}
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
                </div>
                <div className="flex justify-between items-center text-xs font-black text-[#5c3c10] pt-1">
                  <span>Kas Negara Saat Ini:</span>
                  <span>{(Number(countryDetail?.anggaran) || 0).toLocaleString('id-ID')}</span>
                </div>
              </div>
              <div className="p-4 bg-[#FAF6EE] border-t-2 border-[#C4B49C]/20 flex gap-3 relative z-10">
                <button onClick={() => setSelectedBuilding(null)} className="flex-1 py-2 rounded-xl border-2 border-[#C4B49C] text-[#8b7e66] text-[10px] font-black uppercase cursor-pointer hover:bg-black/5 transition-all text-center">Batal</button>
                <button onClick={confirmBuild} disabled={loadingMetadata || !bMeta || cost === 0 ? true : (Number(countryDetail?.anggaran) || 0) < cost} className="flex-1 py-2 rounded-xl text-[10px] font-black uppercase transition-all text-center cursor-pointer bg-[#5c3c10] text-[#FAF6EE] border border-[#5c3c10] hover:bg-[#8b7e66] hover:border-[#8b7e66]">Mulai Pembangunan</button>
              </div>
            </div>
          </div>
        );
      })()}
    </>
  );
}