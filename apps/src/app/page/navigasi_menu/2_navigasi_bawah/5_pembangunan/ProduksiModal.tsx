// detail path: c:\EM\apps\src\app\page\navigasi_menu\2_navigasi_bawah\5_pembangunan\ProduksiModal.tsx
"use client"
import React, { useState, useEffect, useMemo, useRef } from "react";
import { X, Hammer, Zap, Gem, Factory, Beef, Sprout, Fish, Utensils, Pill, Shield, TrendingUp, TrendingDown, Info } from "lucide-react";
import { fetchBuildingMetadata } from '../../../../../lib/buildingMetadata';
import { isBuildingAvailable } from '../../../../logic';
import { calculateProductionIncrement, formatDate, getDaysElapsed } from '../../../../logic/production_logic';
import { logger } from '../../../../../lib/logger';

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

  // Calculate production inline - NO setState here
  const calculateProductionAmount = useMemo(() => {
    return (resourceKey: string): number => {
      const buildingCount = Number(countryDetail?.[resourceKey]) || 0;
      
      if (buildingCount === 0) {
        return 0;
      }
      
      if (!metadata || Object.keys(metadata).length === 0) {
        logger.log('Production', `Metadata not ready for ${resourceKey}`);
        return 0;
      }
      
      const bMeta = findMeta(resourceKey);
      if (!bMeta || !bMeta.produksi) {
        logger.warn('Production', `No metadata found for ${resourceKey}`);
        return 0;
      }
      
      if (!currentDate) {
        logger.log('Production', `CurrentDate undefined for ${resourceKey}`);
        return 0;
      }
      
      const buildDateKey = `build_date_${resourceKey}`;
      const buildDate = countryDetail?.[buildDateKey];
      const currentDateStr = formatDate(currentDate);
      // Use current date as fallback, NOT a hardcoded date
      // This ensures production = 0 on day 1
      const finalBuildDate = buildDate || currentDateStr;
      
      const production = calculateProductionIncrement(
        bMeta.produksi,
        buildingCount,
        finalBuildDate,
        currentDateStr
      );
      
      const daysElapsed = Math.ceil((new Date(currentDateStr).getTime() - new Date(finalBuildDate).getTime()) / (1000 * 60 * 60 * 24));
      logger.log('Production', `${resourceKey}`, { 
        production: production.toLocaleString('id-ID'), 
        rate: bMeta.produksi, 
        buildings: buildingCount, 
        days: daysElapsed,
        buildDate: finalBuildDate,
        currentDate: currentDateStr
      });
      
      return production;
    };
  }, [countryDetail, currentDate, metadata]);

  // Force re-render whenever currentDate changes
  useEffect(() => {
    if (!currentDate) return;
    logger.log('ProduksiModal', 'currentDate prop changed!', {
      date: currentDate.toDateString(),
      timestamp: Date.now()
    });
  }, [currentDate]);

  // Separate effect to update last_update_date when production changes
  useEffect(() => {
    if (!currentDate || !metadata || Object.keys(metadata).length === 0) return;
    
    const currentDateStr = formatDate(currentDate);
    let hasUpdates = false;
    let updates: Record<string, string> = {};
    
    // Check all resources and collect updates
    const resourceKeys = [
      "pembangkit_listrik_tenaga_nuklir", "pembangkit_listrik_tenaga_air", "pembangkit_listrik_tenaga_surya",
      "pembangkit_listrik_tenaga_uap", "pembangkit_listrik_tenaga_gas", "pembangkit_listrik_tenaga_angin",
      "emas", "uranium", "batu_bara", "minyak_bumi", "gas_alam", "garam", "nikel", "litium", "tembaga",
      "aluminium", "logam_tanah_jarang", "bijih_besi",
      "semikonduktor", "mobil", "sepeda_motor", "smelter", "semen_beton", "kayu", "pupuk",
      "ayam_unggas", "sapi_perah", "sapi_potong", "domba_kambing",
      "padi", "gandum", "jagung", "sayur", "umbi", "kedelai", "kelapa_sawit", "kopi", "teh", "kakao",
      "tebu", "karet", "kapas", "tembakau",
      "udang", "mutiara", "ikan",
      "air_mineral", "gula", "roti", "pengolahan_daging", "mie_instan", "minyak_goreng", "susu",
      "pakan_ternak", "ikan_kaleng", "kopi_teh",
      "farmasi"
    ];
    
    for (const resourceKey of resourceKeys) {
      const buildingCount = Number(countryDetail?.[resourceKey]) || 0;
      if (buildingCount === 0) continue;
      
      const bMeta = findMeta(resourceKey);
      if (!bMeta || !bMeta.produksi) continue;
      
      const buildDateKey = `build_date_${resourceKey}`;
      const buildDate = countryDetail?.[buildDateKey];
      const finalBuildDate = buildDate || currentDateStr;
      
      const production = calculateProductionIncrement(
        bMeta.produksi,
        buildingCount,
        finalBuildDate,
        currentDateStr
      );
      
      const lastUpdateKey = `last_update_date_${resourceKey}`;
      
      // Always update last_update_date to current date if production > 0
      if (production > 0) {
        updates[lastUpdateKey] = currentDateStr;
        hasUpdates = true;
      }
    }
    
    // Update all at once in a single setState
    if (hasUpdates) {
      logger.log('UpdateLastDate', `Updating ${Object.keys(updates).length} resources for date ${currentDateStr}`);
      setCountryDetail((prev: any) => ({
        ...prev,
        ...updates
      }));
      lastCalculatedDateRef.current = currentDateStr;
    }
  }, [currentDate, metadata]);  // ← FIXED: Removed countryDetail!

  const calculateDaysElapsed = (startDate: string, endDate: string): number => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeMs = end.getTime() - start.getTime();
    return Math.max(0, Math.ceil(timeMs / (1000 * 60 * 60 * 24)));
  };

  // All useEffects BEFORE any early returns
  React.useEffect(() => {
    if (!isOpen) return;
    setLoadingMetadata(true);
    logger.log('ProduksiModal', 'Starting metadata fetch...');
    fetchBuildingMetadata()
      .then((data) => {
        logger.log('ProduksiModal', 'Metadata loaded successfully!', { keys: Object.keys(data || {}).length });
        setMetadata(data || {});
        // CRITICAL: Force re-render of calculation after metadata loads
        setProductionCache(prev => ({ ...prev }));
      })
      .catch((err) => {
        logger.error('ProduksiModal', 'Failed to load metadata', err);
      })
      .finally(() => {
        setLoadingMetadata(false);
        logger.log('ProduksiModal', 'Metadata load complete');
      });
  }, [isOpen]);

  // Define findMeta EARLY - before any hooks that use it
  const findMeta = (key: string) => {
    if (!metadata) return undefined;
    if (metadata[key]) return metadata[key];
    // try to find by inner dataKey or key suffix
    for (const k of Object.keys(metadata)) {
      const entry = metadata[k];
      if (!entry) continue;
      if (entry.dataKey === key) return entry;
      if (k.endsWith(`_${key}`) || k === `1_${key}`) return entry;
    }
    return undefined;
  };

  const SECTIONS = [
    {
      id: "kelistrikan",
      label: "Kelistrikan",
      icon: Zap,
      keys: [
        "pembangkit_listrik_tenaga_nuklir",
        "pembangkit_listrik_tenaga_air",
        "pembangkit_listrik_tenaga_surya",
        "pembangkit_listrik_tenaga_uap",
        "pembangkit_listrik_tenaga_gas",
        "pembangkit_listrik_tenaga_angin",
      ]
    },
    {
      id: "mineral",
      label: "Mineral & Energi",
      icon: Gem,
      keys: [
        "emas",
        "uranium",
        "batu_bara",
        "minyak_bumi",
        "gas_alam",
        "garam",
        "nikel",
        "litium",
        "tembaga",
        "aluminium",
        "logam_tanah_jarang",
        "bijih_besi"
      ]
    },
    {
      id: "manufaktur",
      label: "Manufaktur",
      icon: Factory,
      keys: ["semikonduktor", "mobil", "sepeda_motor", "smelter", "semen_beton", "kayu", "pupuk"]
    },
    {
      id: "peternakan",
      label: "Peternakan",
      icon: Beef,
      keys: ["ayam_unggas", "sapi_perah", "sapi_potong", "domba_kambing"]
    },
    {
      id: "agrikultur",
      label: "Agrikultur",
      icon: Sprout,
      keys: ["padi", "gandum", "jagung", "sayur", "umbi", "kedelai", "kelapa_sawit", "kopi", "teh", "kakao", "tebu", "karet", "kapas", "tembakau"]
    },
    {
      id: "perikanan",
      label: "Perikanan",
      icon: Fish,
      keys: ["udang", "mutiara", "ikan"]
    },
    {
      id: "olahan pangan",
      label: "Olahan Pangan",
      icon: Utensils,
      keys: ["air_mineral", "gula", "roti", "pengolahan_daging", "mie_instan", "minyak_goreng", "susu", "pakan_ternak", "ikan_kaleng", "kopi_teh"]
    },
    {
      id: "farmasi",
      label: "Farmasi",
      icon: Pill,
      keys: ["farmasi"]
    }
  ];

  // Update production when date changes or building added - RUNS ALWAYS, not just when modal open
  useEffect(() => {
    // REMOVED: if (!isOpen) return; 
    // Production should calculate ALWAYS, even when modal closed
    
    if (!currentDate) {
      console.log(`[ProductionUpdate] Skipping - currentDate not ready`);
      return;
    }
    if (!metadata || Object.keys(metadata).length === 0) {
      console.log(`[ProductionUpdate] Skipping - metadata not loaded yet`);
      return;
    }

    const currentDateStr = formatDate(currentDate);
    
    // Recalculate ALWAYS when countryDetail changes (new buildings added) OR when date changes
    console.log(`[ProductionUpdate] Triggered - date=${currentDateStr}`);
    
    // Recalculate all production amounts
    const newCache: Record<string, number> = {};
    
    // Get all possible resource keys from all SECTIONS
    const allKeys = new Set<string>();
    SECTIONS.forEach(section => {
      section.keys.forEach(key => allKeys.add(key));
    });

    // Calculate production for each resource
    for (const resourceKey of allKeys) {
      const buildingCount = Number(countryDetail?.[resourceKey]) || 0;
      const buildDateKey = `build_date_${resourceKey}`;
      const buildDate = countryDetail?.[buildDateKey];
      
      if (buildingCount > 0) {
        const bMeta = findMeta(resourceKey);
        
        if (bMeta && bMeta.produksi) {
          if (!buildDate) {
            console.warn(`[CRITICAL] ${resourceKey} has ${buildingCount} buildings but NO build_date_${resourceKey}!`);
          }
          
          const finalBuildDate = buildDate || "2026-07-08";
          
          const production = calculateProductionIncrement(
            bMeta.produksi,
            buildingCount,
            finalBuildDate,
            currentDateStr
          );
          
          newCache[resourceKey] = production;
          
          const daysElapsed = calculateDaysElapsed(finalBuildDate, currentDateStr);
          console.log(`[Production] ${resourceKey}: ${production.toLocaleString('id-ID')} (rate=${bMeta.produksi}/day × count=${buildingCount} × days=${daysElapsed})`);
        }
      }
    }

    console.log(`[ProductionUpdate] Cache updated with ${Object.keys(newCache).length} resources`);
    setProductionCache(newCache);
    setLastCalculationDate(currentDateStr);
  }, [currentDate, metadata]);

  useEffect(() => {
    if (isOpen) {
      console.log('ProduksiModal opened - countryDetail:', countryDetail);
    }
  }, [isOpen, countryDetail]);

  const formatLabel = (key: string) => {
    // Specific maps for better presentation
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

  // Early return AFTER all hooks
  if (!isOpen) return null;
  
  const handleBuild = (key: string, label: string) => {
    // Check if building is available for this country
    if (!isBuildingAvailable(key, countryDetail?.country || '')) {
      setToast(`❌ ${label} tidak tersedia untuk negara ini`);
      setTimeout(() => setToast(null), 2000);
      return;
    }
    
    console.log('ProduksiModal.handleBuild', key, label);
    setSelectedBuilding({ key, label });
    setToast(`${label} dipilih`);
    setTimeout(() => setToast(null), 1500);
  };

  const confirmBuild = () => {
    if (!selectedBuilding) return;
    const { key, label } = selectedBuilding;
    const bMeta = findMeta(key);
    if (loadingMetadata || !bMeta) {
      alert(`Metadata bangunan masih dimuat. Coba lagi sebentar.`);
      return;
    }
    
    // Ensure currentDate exists before proceeding
    if (!currentDate) {
      alert(`❌ EROR: Tanggal tidak tersedia (currentDate undefined)!`);
      return;
    }
    
    const cost = Number(bMeta.biaya_pembangunan);
    const anggaran = Number(countryDetail?.anggaran) || 0;

    if (anggaran < cost) {
      alert(`Kas negara tidak mencukupi untuk membangun ${label}!`);
      return;
    }

    const buildDateKey = `build_date_${key}`;
    // Format date as YYYY-MM-DD
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const buildDateValue = `${year}-${month}-${day}`;
    
    console.log(`[confirmBuild] Building ${key}:`, {
      buildDateKey,
      buildDateValue,
      currentDate: currentDate.toDateString(),
    });
    
    const updatedDetail = {
      ...countryDetail,
      anggaran: anggaran - cost,
      [key]: (Number(countryDetail?.[key]) || 0) + 1,
      [buildDateKey]: buildDateValue,
      [`accumulated_${key}`]: 0,
      [`last_prod_date_${key}`]: buildDateValue,
    };
    
    console.log(`[confirmBuild] Updated countryDetail:`, {
      key,
      buildDateKey,
      buildDateValue,
      buildingCount: updatedDetail[key],
      fullDetail: updatedDetail
    });
    
    console.log(`[confirmBuild] CRITICAL: Verify buildDate key is set:`, {
      keyExists: buildDateKey in updatedDetail,
      value: updatedDetail[buildDateKey]
    });
    
    logger.log('ConfirmBuild', 'Building constructed', {
      key,
      buildDateKey,
      buildDateValue,
      buildingCount: updatedDetail[key]
    });
    
    alert(`✅ Berhasil! ${label} dibangun pada ${buildDateValue}. Sekarang ada ${updatedDetail[key]} bangunan.`);
    
    setCountryDetail(updatedDetail);
    setSelectedBuilding(null);
  };

  // Pre-calculate count of all items for each tab (including empty boxes with value 0)
  const tabData = SECTIONS.map((sec) => {
    const items = sec.keys.map((k) => ({
      key: k,
      label: formatLabel(k),
      value: Number(countryDetail?.[k]) || 0
    }));
    const typeCount = items.length;  // Count of building TYPES/categories, not total buildings
    return {
      ...sec,
      items,
      activeCount: typeCount
    };
  });

  const activeSection = tabData.find((sec) => sec.id === activeTab) || tabData[0];

  // Calculate total electricity production (kelistrikan)
  const totalProduction = tabData.find(sec => sec.id === "kelistrikan")?.items.reduce((sum, item) => sum + item.value, 0) || 0;
  
  // Calculate estimated consumption based on population
  const estimatedConsumption = Math.min(
    totalProduction * 1000, // MW
    Math.max(0, Math.round((totalProduction * 1000) * 0.7 + ((countryDetail?.jumlah_penduduk ?? 0) / 50000)))
  );



  return (
    <>
      {/* Overlay - tidak menghalangi time controller */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/65 z-40 pointer-events-none" />
      )}
      
      {/* Modal - di atas overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
          <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">

        {/* Header */}
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
            
            {/* Electricity Badge - Always show in all tabs */}
            <div className="flex items-center gap-4 ml-8 pl-8 border-l-2 border-[#C4B49C]/30">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-300 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-emerald-700" />
                  <span className="text-[11px] font-black text-emerald-700 uppercase tracking-wider">Produksi</span>
                  <span className="text-[11px] font-black text-emerald-700">{(totalProduction * 1000).toLocaleString('id-ID')} MW</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 border border-rose-300 rounded-lg">
                  <TrendingDown className="h-4 w-4 text-rose-700" />
                  <span className="text-[11px] font-black text-rose-700 uppercase tracking-wider">Konsumsi</span>
                  <span className="text-[11px] font-black text-rose-700">{estimatedConsumption.toLocaleString('id-ID')} MW</span>
                </div>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tabs and Grid content */}
        <div className="flex-1 flex min-h-0 relative z-10">
          {/* Sidebar Tabs */}
          <div className="w-64 border-r-2 border-[#C4B49C]/30 bg-[#FAF6EE] p-4 flex flex-col gap-2 overflow-y-auto">
            {tabData.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => { console.log('ProduksiModal.setActiveTab', tab.id); setActiveTab(tab.id); }}
                  className={`flex items-center justify-between w-full p-3 rounded-xl border-2 text-left transition-all cursor-pointer ${activeTab === tab.id
                      ? "bg-[#5c3c10] border-[#5c3c10] text-[#FAF6EE] shadow-md"
                      : "bg-white/80 border-[#C4B49C]/30 text-[#5c3c10] hover:bg-white hover:border-[#5c3c10]/50"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">{tab.label}</span>
                  </div>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${activeTab === tab.id ? "bg-[#FAF6EE] text-[#5c3c10]" : "bg-[#5c3c10]/10 text-[#5c3c10]"
                    }`}>
                    {tab.activeCount}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content */}
          <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40">
            <div className="flex items-center gap-3 mb-6">
              <activeSection.icon className="h-6 w-6 text-[#5c3c10]" />
              <h3 className="text-lg font-black text-[#5c3c10] uppercase tracking-wide">{activeSection.label}</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {activeSection.items.map((it) => {
                const bMeta = findMeta(it.key) || {};
                const perCount = Number(countryDetail?.[it.key]) || 0;
                const isAvailable = isBuildingAvailable(it.key, countryDetail?.country || '');
                const countryName = countryDetail?.country || 'Unknown';
                const isMaritimeSection = activeSection.id === 'perikanan';
                const isUnsupported = !isAvailable && isMaritimeSection;
                
                // Debug log
                if (isMaritimeSection) {
                  console.log(`[Perikanan] ${it.key}: country="${countryName}", isAvailable=${isAvailable}, isUnsupported=${isUnsupported}`);
                }
                
                return (
                  <div
                    key={it.key}
                    onClick={() => isAvailable && handleBuild(it.key, it.label)}
                    role="button"
                    tabIndex={isAvailable ? 0 : -1}
                    onMouseEnter={() => isAvailable && setHoveredBuildingKey(it.key)}
                    onMouseLeave={() => setHoveredBuildingKey(null)}
                    className={`rounded-2xl overflow-visible flex flex-col justify-between transition-all relative ${
                      isAvailable
                        ? 'bg-white/90 border border-[#C4B49C]/30 shadow-sm hover:shadow-md cursor-pointer'
                        : isUnsupported
                        ? 'bg-red-200/70 border-2 border-red-500 shadow-lg cursor-not-allowed'
                        : 'bg-gray-200/50 border border-gray-300/50 shadow-none cursor-not-allowed opacity-60'
                    }`}
                  >
                    {/* Info Tooltip */}
                    {hoveredBuildingKey === it.key && isAvailable && (
                      <div className="absolute -top-2 -right-2 z-50 bg-[#5c3c10] text-[#FAF6EE] rounded-lg shadow-lg border border-[#8b7e66]/50 p-3 w-56 animate-in fade-in duration-150">
                        <div className="text-[11px] font-black uppercase tracking-widest text-[#FAF6EE] mb-2">ℹ️ Info Bangunan</div>
                        <div className="border-t border-[#8b7e66]/30 pt-2 space-y-1.5 text-[10px]">
                          {activeTab === "kelistrikan" ? (
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
                          <p className="text-[10px] font-black uppercase text-[#8b7e66] tracking-wider">{it.label}</p>
                          {isAvailable && (
                            <button
                              className="flex items-center justify-center w-5 h-5 rounded-full bg-[#5c3c10]/10 hover:bg-[#5c3c10]/20 text-[#5c3c10] transition-colors cursor-help"
                              onMouseEnter={() => setHoveredBuildingKey(it.key)}
                              onClick={(e) => {
                                e.stopPropagation();
                                setHoveredBuildingKey(it.key);
                              }}
                              title="Info bangunan"
                            >
                              <Info className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                        <p className={`text-2xl font-black mt-2 ${
                          isAvailable ? 'text-[#2e261a]' : isUnsupported ? 'text-red-700 drop-shadow-md' : 'text-gray-500'
                        }`}>
                          {isAvailable ? perCount : isUnsupported ? '✗' : '—'}
                        </p>
                        <p className={`text-[10px] mt-1 font-bold ${
                          isAvailable ? 'text-[#8b7e66]' : isUnsupported ? 'text-red-700' : 'text-gray-500'
                        }`}>
                          {isAvailable ? `${perCount} bangunan` : isUnsupported ? 'Tidak tersedia' : 'Tidak tersedia'}
                        </p>
                        {isAvailable && (
                          <div className="mt-1">
                            <p className="text-[9px] text-[#a89968] font-semibold">
                              produksi per hari
                            </p>
                            <p className="text-[11px] font-black text-emerald-600 mt-0.5">
                              {(bMeta?.produksi || 0).toLocaleString('id-ID')}
                            </p>
                          </div>
                        )}
                      </div>
                      
                      {isUnsupported && (
                        <div className="border-t border-red-500/60 mt-4 pt-2 text-[10px]">
                          <p className="text-red-800 font-black text-xs drop-shadow-sm">⛔ BANGUNAN TIDAK SUPPORT</p>
                          <p className="text-red-700 text-[9px] mt-1 font-semibold">Negara tidak memiliki laut</p>
                        </div>
                      )}
                      
                      {!isAvailable && !isUnsupported && (
                        <div className="border-t border-gray-300/30 mt-4 pt-2 text-[10px]">
                          <p className="text-gray-600 font-semibold">🌊 Memerlukan akses maritim</p>
                          <p className="text-gray-500 text-[9px] mt-1">Negara tidak memiliki garis pantai</p>
                        </div>
                      )}
                      
                      {isAvailable && activeTab === "kelistrikan" && (
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
                      
                      {isAvailable && activeTab !== "kelistrikan" && (
                        <div className="border-t border-[#C4B49C]/20 mt-4 pt-2 text-xs">
                          <div className="text-center">
                            {(() => {
                              const prod = calculateProductionAmount(it.key);
                              return (
                                <>
                                  <span className="font-black text-lg text-[#2e261a]">
                                    {prod.toLocaleString('id-ID')}
                                  </span>
                                  {prod === 0 && countryDetail?.[it.key] > 0 && (
                                    <p className="text-[9px] text-red-600 mt-1 font-bold">
                                      ⚠️ Production 0 (Check console for debug)
                                    </p>
                                  )}
                                  <p className="text-[9px] text-[#8b7e66] mt-1">
                                    {countryDetail?.[`build_date_${it.key}`] ? `Since ${countryDetail[`build_date_${it.key}`]}` : 'No build date'}
                                  </p>
                                  {prod > 0 ? (
                                    <p className="text-[9px] text-[#a89968] font-semibold mt-0.5">
                                      Last Update: Since {countryDetail?.[`last_update_date_${it.key}`] || 'updating...'}
                                    </p>
                                  ) : (
                                    <p className="text-[9px] text-[#c4a878] italic mt-0.5">
                                      belum terupdate
                                    </p>
                                  )}
                                </>
                              );
                            })()}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {activeSection.items.length === 0 && (
              <div className="rounded-xl border border-[#C4B49C]/30 bg-[#FAF6EE] p-4 text-sm text-[#8b7e66]">
                Data untuk kategori ini tidak tersedia.
              </div>
            )}
          </div>
        </div>
          </div>
        </div>
      )}
      
      {toast && (
        <div className="fixed bottom-6 right-6 z-[80] bg-[#5c3c10] text-[#FAF6EE] px-4 py-2 rounded-lg shadow-md">{toast}</div>
      )}
      
      {selectedBuilding && (() => {
        const bMeta = findMeta(selectedBuilding.key);
        const cost = bMeta?.biaya_pembangunan !== undefined ? Number(bMeta.biaya_pembangunan) : 0;
        return (
          <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4">
            <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-md overflow-hidden shadow-2xl flex flex-col relative font-sans animate-in fade-in zoom-in-95 duration-150">
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

                  {bMeta?.konsumsi_listrik !== undefined && bMeta.konsumsi_listrik > 0 && (
                    <div className="flex justify-between">
                      <span>Konsumsi Listrik:</span>
                      <span className="text-[#2e261a] font-semibold">{bMeta.konsumsi_listrik} MW</span>
                    </div>
                  )}
                  {bMeta?.produksi !== undefined && (
                    <div className="flex justify-between">
                      <span>Produksi per hari:</span>
                      <span className="text-emerald-700 font-bold">+{bMeta.produksi.toLocaleString('id-ID')}</span>
                    </div>
                  )}
                  {bMeta?.efek !== undefined && (
                    <div className="border-t border-[#C4B49C]/20 pt-2 mt-2">
                      <span className="font-bold">Efek Tambahan:</span>
                      <p className="text-[#2e261a] mt-0.5 italic">{bMeta.efek}</p>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center text-xs font-black text-[#5c3c10] pt-1">
                  <span>Kas Negara Saat Ini:</span>
                  <span>{(Number(countryDetail?.anggaran) || 0).toLocaleString('id-ID')}</span>
                </div>
              </div>

              <div className="p-4 bg-[#FAF6EE] border-t-2 border-[#C4B49C]/20 flex gap-3 relative z-10">
                <button
                  onClick={() => setSelectedBuilding(null)}
                  className="flex-1 py-2 rounded-xl border-2 border-[#C4B49C] text-[#8b7e66] text-[10px] font-black uppercase cursor-pointer hover:bg-black/5 transition-all text-center"
                >
                  Batal
                </button>
                <button
                  onClick={confirmBuild}
                  disabled={loadingMetadata || !bMeta || cost === 0 ? true : (Number(countryDetail?.anggaran) || 0) < cost}
                  className={`flex-1 py-2 rounded-xl text-[10px] font-black uppercase transition-all text-center cursor-pointer ${
                    (loadingMetadata || !bMeta || cost === 0)
                      ? "bg-gray-300 text-gray-500 border border-gray-300 cursor-not-allowed"
                      : ((Number(countryDetail?.anggaran) || 0) >= cost
                        ? "bg-[#5c3c10] text-[#FAF6EE] border border-[#5c3c10] hover:bg-[#8b7e66] hover:border-[#8b7e66]"
                        : "bg-gray-300 text-gray-500 border border-gray-300 cursor-not-allowed")
                  }`}
                >
                  Mulai Pembangunan
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </>
  );
}
