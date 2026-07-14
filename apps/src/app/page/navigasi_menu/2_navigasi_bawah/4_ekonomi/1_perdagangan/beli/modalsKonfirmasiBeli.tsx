"use client"
import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { X, ChevronDown, Plus, Minus } from "lucide-react";
import { TradePartner } from "../mitra/mitraModalsMenu";
import { fetchBuildingMetadata } from '@/lib/buildingMetadata';
import { calculateProductionIncrement, formatDate, normalizePartnerBuildDates } from '@/app/logic/production_logic';
import { hitungHargaBeli } from "./logic/0_harga_barang/harga_beli_logic";
import countryPaths from '@/app/page/map_system/country-paths.json';

import { 
  // 1. Mineral Kritis
  hasUraniumBuilding, 
  hasBatubaraBuilding, 
  hasMinyakBumiBuilding,
  hasGasAlamBuilding,
  hasGaramBuilding,
  hasNikelBuilding,
  hasLitiumBuilding,
  hasTembagaBuilding,
  hasAluminiumBuilding,
  hasLogamTanahJarangBuilding,
  hasBijihBesiBuilding,
  // 2. Manufaktur
  hasSemikonduktorBuilding,
  hasMobilBuilding,
  hasSepedaMotorBuilding,
  hasSmelterBuilding,
  hasSemenBetonBuilding,
  hasKayuBuilding,
  hasPupukBuilding,
  // 3. Peternakan
  hasAyamUnggasBuilding,
  hasSapiPerahBuilding,
  hasSapiPotongBuilding,
  hasDombaKambingBuilding,
  // 4. Agrikultur
  hasPadiBuilding,
  hasGandumBuilding,
  hasJagungBuilding,
  hasUmbiBuilding,
  hasKedelaiBuilding,
  hasKelapaSawitBuilding,
  hasTehBuilding,
  hasKopiBuilding,
  hasKakaoBuilding,
  hasTebuBuilding,
  hasSayurBuilding,
  hasKaretBuilding,
  hasKapasBuilding,
  hasTembakauBuilding,
  // 5. Perikanan
  hasUdangBuilding,
  hasIkanBuilding,
  hasMutiaraBuilding,
  // 6. Olahan Pangan
  hasAirMineralBuilding,
  hasGulaBuilding,
  hasRotiBuilding,
  hasPengolahanDagingBuilding,
  hasMieInstanBuilding,
  hasMinyakGorengBuilding,
  hasSusuBuilding,
  hasPakanTernakBuilding,
  hasIkanKalengBuilding,
  hasKopiTehBuilding,
  // 7. Farmasi
  hasFarmasiBuilding
} from "./index";

interface CountryDetail {
  [key: string]: unknown;
  anggaran?: number;
}

interface MetadataEntry {
  dataKey?: string;
  biaya_pembangunan?: number;
  produksi?: number;
  satuan?: string;
}

type MetadataMap = Record<string, MetadataEntry>;

const ALL_IMPORT_KEYS = [
  // 1. Mineral Kritis
  "uranium", "batu_bara", "minyak_bumi", "gas_alam", "garam", "nikel", "litium", "tembaga", "aluminium", "logam_tanah_jarang", "bijih_besi",
  // 2. Manufaktur
  "semikonduktor", "mobil", "sepeda_motor", "smelter", "semen_beton", "kayu", "pupuk",
  // 3. Peternakan
  "ayam_unggas", "sapi_perah", "sapi_potong", "domba_kambing",
  // 4. Agrikultur
  "padi", "gandum", "jagung", "sayur", "umbi", "kedelai", "kelapa_sawit", "kopi", "teh", "kakao", "tebu", "karet", "kapas", "tembakau",
  // 5. Perikanan
  "udang", "mutiara", "ikan",
  // 6. Olahan Pangan
  "air_mineral", "gula", "roti", "pengolahan_daging", "mie_instan", "minyak_goreng", "susu", "pakan_ternak", "ikan_kaleng", "kopi_teh",
  // 7. Farmasi
  "farmasi"
];

interface ModalsKonfirmasiBeliProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (biaya: number, kuantitas: string) => void;
  countryDetail: CountryDetail | null;
  setCountryDetail: (detail: CountryDetail | ((prev: CountryDetail) => CountryDetail)) => void;
  partners: TradePartner[];
  currentDate?: Date;
}

export default function ModalsKonfirmasiBeli({ 
  isOpen, 
  onClose, 
  onConfirm, 
  countryDetail, 
  setCountryDetail, 
  partners,
  currentDate
}: ModalsKonfirmasiBeliProps) {
  const [metadata, setMetadata] = useState<MetadataMap>({});
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  
  const [partnerDataRaw, setPartnerDataRaw] = useState<Record<string, any> | null>(null);
  const partnerStartDateRef = useRef<string | null>(null);
  const lastCountryRef = useRef<string>("");
  const isInitialized = useRef(false);

  const targetCountry = selectedCountry || partners[0]?.nama_negara || "";

  useEffect(() => {
    if (!isOpen) return;
    fetchBuildingMetadata().then((data) => setMetadata(data || {}));
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setPartnerDataRaw(null);
      return;
    }

    if (!targetCountry) {
      setPartnerDataRaw(null);
      return;
    }

    const pathEntry = (countryPaths as Record<string, string>)[targetCountry];
    if (!pathEntry) {
      setPartnerDataRaw(null);
      return;
    }

    if (lastCountryRef.current !== targetCountry) {
      partnerStartDateRef.current = null;
      lastCountryRef.current = targetCountry;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/country-data?path=${encodeURIComponent(pathEntry)}`);
        if (!res.ok) {
          setPartnerDataRaw(null);
          return;
        }
        const json = await res.json();
        setPartnerDataRaw(json || null);
        if (!partnerStartDateRef.current) {
          partnerStartDateRef.current = currentDate ? formatDate(currentDate) : formatDate(new Date());
        }
      } catch (e) {
        console.error('Failed to fetch partner country data', e);
        setPartnerDataRaw(null);
      }
    };

    fetchData();
  }, [isOpen, targetCountry, currentDate]);

  const partnerData = useMemo(() => {
    if (!partnerDataRaw) return null;
    const baseDate = partnerStartDateRef.current || formatDate(currentDate || new Date());
    return normalizePartnerBuildDates(partnerDataRaw, ALL_IMPORT_KEYS, new Date(baseDate));
  }, [partnerDataRaw]);

  const findMeta = useCallback((key: string) => {
    if (!metadata) return undefined;
    if (metadata[key]) return metadata[key];
    for (const k of Object.keys(metadata)) {
      const entry = metadata[k];
      if (!entry) continue;
      if (entry.dataKey === key) return entry;
      if (k.endsWith(`_${key}`) || k === `1_${key}`) return entry;
    }
    return undefined;
  }, [metadata]);

  const checkMap: Record<string, (data: Record<string, any> | null) => boolean> = {
    uranium: hasUraniumBuilding,
    batu_bara: hasBatubaraBuilding,
    minyak_bumi: hasMinyakBumiBuilding,
    gas_alam: hasGasAlamBuilding,
    garam: hasGaramBuilding,
    nikel: hasNikelBuilding,
    litium: hasLitiumBuilding,
    tembaga: hasTembagaBuilding,
    aluminium: hasAluminiumBuilding,
    logam_tanah_jarang: hasLogamTanahJarangBuilding,
    bijih_besi: hasBijihBesiBuilding,
    semikonduktor: hasSemikonduktorBuilding,
    mobil: hasMobilBuilding,
    sepeda_motor: hasSepedaMotorBuilding,
    smelter: hasSmelterBuilding,
    semen_beton: hasSemenBetonBuilding,
    kayu: hasKayuBuilding,
    pupuk: hasPupukBuilding,
    ayam_unggas: hasAyamUnggasBuilding,
    sapi_perah: hasSapiPerahBuilding,
    sapi_potong: hasSapiPotongBuilding,
    domba_kambing: hasDombaKambingBuilding,
    padi: hasPadiBuilding,
    gandum: hasGandumBuilding,
    jagung: hasJagungBuilding,
    umbi: hasUmbiBuilding,
    kedelai: hasKedelaiBuilding,
    kelapa_sawit: hasKelapaSawitBuilding,
    teh: hasTehBuilding,
    kopi: hasKopiBuilding,
    kakao: hasKakaoBuilding,
    tebu: hasTebuBuilding,
    sayur: hasSayurBuilding,
    karet: hasKaretBuilding,
    kapas: hasKapasBuilding,
    tembakau: hasTembakauBuilding,
    udang: hasUdangBuilding,
    ikan: hasIkanBuilding,
    mutiara: hasMutiaraBuilding,
    air_mineral: hasAirMineralBuilding,
    gula: hasGulaBuilding,
    roti: hasRotiBuilding,
    pengolahan_daging: hasPengolahanDagingBuilding,
    mie_instan: hasMieInstanBuilding,
    minyak_goreng: hasMinyakGorengBuilding,
    susu: hasSusuBuilding,
    pakan_ternak: hasPakanTernakBuilding,
    ikan_kaleng: hasIkanKalengBuilding,
    kopi_teh: hasKopiTehBuilding,
    farmasi: hasFarmasiBuilding,
  };

  const getFirstAvailableProduct = (): string => {
    if (!partnerData) return ALL_IMPORT_KEYS[0];
    return ALL_IMPORT_KEYS.find((key) => {
      const checkFn = checkMap[key];
      if (checkFn) {
        return checkFn(partnerData);
      }
      return true;
    }) || ALL_IMPORT_KEYS[0];
  };

  const isProductAvailable = (key: string): boolean => {
    if (!partnerData) return false;
    const checkFn = checkMap[key];
    if (checkFn) {
      return checkFn(partnerData);
    }
    return true;
  };

  const effectiveSelectedProduct = selectedProduct || (partnerData ? getFirstAvailableProduct() : "");

  const stockAvailable = useMemo(() => {
    if (!effectiveSelectedProduct) return 0;
    const buildingCount = Number(countryDetail?.[effectiveSelectedProduct]) || 0;
    if (buildingCount === 0) return 0;

    const bMeta = findMeta(effectiveSelectedProduct);
    if (!bMeta || !bMeta.produksi || !currentDate) return 0;

    const buildDateKey = `build_date_${effectiveSelectedProduct}`;
    const buildDateRaw = countryDetail?.[buildDateKey];
    const currentDateStr = formatDate(currentDate);
    let finalBuildDate: string;
    if (typeof buildDateRaw === 'string' && buildDateRaw) {
      finalBuildDate = buildDateRaw;
    } else {
      const yesterday = new Date(currentDate);
      yesterday.setDate(yesterday.getDate() - 1);
      finalBuildDate = formatDate(yesterday);
    }

    return calculateProductionIncrement(
      bMeta.produksi,
      buildingCount,
      finalBuildDate,
      currentDateStr
    );
  }, [effectiveSelectedProduct, currentDate, countryDetail, findMeta]);

  const partnerProduction = useMemo(() => {
    if (!effectiveSelectedProduct || !partnerData) return 0;
    const pBuildingCount = Number(partnerData[effectiveSelectedProduct] || 0);
    if (pBuildingCount === 0) return 0;

    const pMeta = findMeta(effectiveSelectedProduct);
    if (!pMeta || !pMeta.produksi || !currentDate) return 0;

    const pBuildDateKey = `build_date_${effectiveSelectedProduct}`;
    const pBuildDate = partnerData[pBuildDateKey] as string | undefined;
    const currentDateStr = formatDate(currentDate);
    const pFinalBuildDate = typeof pBuildDate === 'string' && pBuildDate ? pBuildDate : currentDateStr;

    return calculateProductionIncrement(
      pMeta.produksi,
      pBuildingCount,
      pFinalBuildDate,
      currentDateStr
    );
  }, [effectiveSelectedProduct, currentDate, partnerData, findMeta]);

  useEffect(() => {
    if (!isOpen) {
      isInitialized.current = false;
      return;
    }

    if (!partnerData) return;

    const firstAvailable = getFirstAvailableProduct();
    const selectedAvailable = selectedProduct ? isProductAvailable(selectedProduct) : false;

    if (!selectedAvailable) {
      setSelectedProduct(firstAvailable);
      setQuantity(1);
    }

    if (partners.length > 0 && !selectedCountry) {
      setSelectedCountry(partners[0].nama_negara);
    }

    isInitialized.current = true;
  }, [isOpen, partners, partnerData, selectedCountry, selectedProduct]);

  useEffect(() => {
    if (!isOpen || !selectedProduct || !countryDetail) return;

    const buildingCount = Number(countryDetail[selectedProduct] || 0);
    if (buildingCount <= 0) return;

    const buildDateKey = `build_date_${selectedProduct}`;
    const existingBuildDate = countryDetail[buildDateKey];
    if (typeof existingBuildDate === 'string' && existingBuildDate) return;

    const currentDateStr = formatDate(currentDate || new Date());
    setCountryDetail((prev) => {
      if (!prev) return prev;
      if (Number(prev[selectedProduct] || 0) <= 0) return prev;
      if (typeof prev[buildDateKey] === 'string' && prev[buildDateKey]) return prev;
      return {
        ...prev,
        [buildDateKey]: currentDateStr,
      };
    });
  }, [isOpen, selectedProduct, countryDetail, currentDate, setCountryDetail]);

  if (!isOpen) return null;

  const formatLabel = (key: string) => key.replace(/_/g, " ").replace(/\b\w/g, (ch) => ch.toUpperCase());
  const effectiveSelectedCountry = selectedCountry || partners[0]?.nama_negara || "";
  const effectiveProductToDisplay = selectedProduct || getFirstAvailableProduct();
  const currentMeta = findMeta(effectiveProductToDisplay);
  const totalPrice = hitungHargaBeli(currentMeta?.biaya_pembangunan, quantity);

  const handleConfirm = () => {
    const detail = countryDetail ?? {};
    const currentBudget = typeof detail.anggaran === "number" ? detail.anggaran : 0;

    if (currentBudget < totalPrice) {
      alert(`Kas Negara tidak mencukupi! Butuh ${totalPrice.toLocaleString("id-ID")} EM.`);
      return;
    }

    setCountryDetail({ ...detail, anggaran: currentBudget - totalPrice });
    onConfirm(totalPrice, `${quantity}x Satuan`);
    alert(`Berhasil membeli ${quantity} ${formatLabel(selectedProduct)} dari ${effectiveSelectedCountry}.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />
        
        <div className="px-5 py-4 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <h2 className="text-lg font-bold text-[#5c3c10] tracking-tight uppercase">Konfirmasi Pembelian</h2>
          <button onClick={onClose} className="p-1.5 rounded-full bg-[#4a5f5f] hover:bg-[#3a4f4f] text-white transition-colors cursor-pointer shadow-sm">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 relative z-10 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[#5c3c10] font-bold text-sm tracking-wide">Produk:</label>
              <div className="relative">
                <select
                  value={effectiveSelectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-3 py-2 rounded-md bg-[#3b7d7d] text-white text-sm font-bold border-none focus:ring-2 focus:ring-[#c77a00] appearance-none"
                >
                  {ALL_IMPORT_KEYS.map((key) => {
                    const checkFn = checkMap[key];
                    const disabled = checkFn ? !checkFn(partnerData) : false;
                    return (
                      <option 
                        key={key} 
                        value={key} 
                        disabled={disabled}
                        className={disabled ? 'text-red-500 font-bold' : ''}
                      >
                        {formatLabel(key)}
                      </option>
                    );
                  })}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#5c3c10] font-bold text-sm tracking-wide">Negara:</label>
              <div className="relative">
                <select
                  value={effectiveSelectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full px-3 py-2 rounded-md bg-[#3b7d7d] text-white text-sm font-bold border-none focus:ring-2 focus:ring-[#c77a00] appearance-none"
                >
                  {partners.map((p) => (
                    <option key={p.id} value={p.nama_negara}>{p.nama_negara}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-1 pb-1 border-b border-[#C4B49C]/10">
            <span className="text-[#5c3c10] font-bold text-sm tracking-wide">Stok Tersedia (Anda):</span>
            <span className="text-sm font-black text-[#2e261a]">
              {stockAvailable.toLocaleString("id-ID")} <span className="text-[10px] text-[#8b7e66] font-bold">Unit</span>
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center pt-1 pb-0">
              <span className="text-[#5c3c10] font-bold text-sm tracking-wide">Bangunan {formatLabel(selectedProduct)} (Mitra):</span>
              <span className="text-sm font-black text-[#2e261a]">
                {Number(partnerData?.[selectedProduct] || 0).toLocaleString('id-ID')} <span className="text-[10px] text-[#8b7e66] font-bold">Unit</span>
              </span>
            </div>
            <div className="flex justify-between items-center pt-0 pb-1">
              <span className="text-[#5c3c10] font-bold text-sm tracking-wide">Produksi Mitra (Total):</span>
              <span className="text-sm font-black text-[#2e261a]">
                {partnerProduction.toLocaleString('id-ID')} <span className="text-[10px] text-[#8b7e66] font-bold">Unit</span>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <label className="text-[#5c3c10] font-bold text-sm tracking-wide">Kuantitas:</label>
            <div className="flex items-center gap-1.5">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1.5 rounded bg-[#3b7d7d] text-white hover:bg-[#2e6363] shadow-sm"><Minus className="h-3.5 w-3.5" /></button>
              <input type="number" min={1} value={quantity} onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))} className="w-16 px-2 py-1.5 text-center rounded bg-[#3b7d7d] text-white text-sm font-bold border-none focus:ring-2 focus:ring-[#c77a00]" />
              <button onClick={() => setQuantity(quantity + 1)} className="p-1.5 rounded bg-[#3b7d7d] text-white hover:bg-[#2e6363] shadow-sm"><Plus className="h-3.5 w-3.5" /></button>
              <button onClick={() => setQuantity(quantity + 1000)} className="px-2.5 py-1.5 rounded bg-[#3b7d7d] text-white text-[10px] font-bold hover:bg-[#2e6363] shadow-sm uppercase tracking-wide">+1k</button>
            </div>
          </div>

          <div className="flex justify-between items-center pt-3 border-t border-[#C4B49C]/20">
            <span className="text-[#5c3c10] font-bold text-sm tracking-wide">Harga:</span>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-black text-[#2e261a]">{totalPrice.toLocaleString("id-ID")}</span>
              <span className="text-[10px] text-[#8b7e66] font-bold mt-0.5">EM</span>
            </div>
          </div>
        </div>

        <div className="px-5 py-4 border-t-2 border-[#C4B49C]/20 flex gap-3 bg-[#FAF6EE] relative z-10">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-lg bg-[#c49e6c] hover:bg-[#b08d5d] text-[#FAF6EE] text-xs font-black uppercase tracking-wide shadow-sm">Batal</button>
          <button onClick={handleConfirm} className="flex-1 py-2.5 rounded-lg bg-[#3b7d7d] hover:bg-[#2e6363] text-[#FAF6EE] text-xs font-black uppercase tracking-wide shadow-sm">Beli</button>
        </div>
      </div>
    </div>
  );
}