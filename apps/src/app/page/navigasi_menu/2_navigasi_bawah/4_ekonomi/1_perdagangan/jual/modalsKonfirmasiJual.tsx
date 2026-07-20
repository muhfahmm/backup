"use client"
import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { X, Send, ChevronDown, Plus, Minus } from "lucide-react";
import { fetchBuildingMetadata } from '@/lib/buildingMetadata';
import { calculateProductionIncrement, formatDate } from '@/app/logic/production_logic';
import { TradePartner } from "../mitra/mitraModalsMenu";
import countryPaths from '@/app/page/map_system/country-paths.json';

import { 
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
  hasSemikonduktorBuilding,
  hasMobilBuilding,
  hasSepedaMotorBuilding,
  hasSmelterBuilding,
  hasSemenBetonBuilding,
  hasKayuBuilding,
  hasPupukBuilding,
  hasAyamUnggasBuilding,
  hasSapiPerahBuilding,
  hasSapiPotongBuilding,
  hasDombaKambingBuilding,
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
  hasUdangBuilding,
  hasIkanBuilding,
  hasMutiaraBuilding,
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
  hasFarmasiBuilding
} from "../beli/index";

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

const ALL_JUAL_KEYS = [
  "uranium", "batu_bara", "minyak_bumi", "gas_alam", "garam", "nikel", "litium", "tembaga", "aluminium", "logam_tanah_jarang", "bijih_besi",
  "semikonduktor", "mobil", "sepeda_motor", "smelter", "semen_beton", "kayu", "pupuk",
  "ayam_unggas", "sapi_perah", "sapi_potong", "domba_kambing",
  "padi", "gandum", "jagung", "sayur", "umbi", "kedelai", "kelapa_sawit", "kopi", "teh", "kakao", "tebu", "karet", "kapas", "tembakau",
  "udang", "mutiara", "ikan",
  "air_mineral", "gula", "roti", "pengolahan_daging", "mie_instan", "minyak_goreng", "susu", "pakan_ternak", "ikan_kaleng", "kopi_teh", "farmasi"
];

interface JualModalsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
  onConfirm: (biaya: number, kuantitas: string) => void;
  currentDate?: Date;
  partners: TradePartner[];
  initialPartnerName?: string;
}

// --- HARGA DEFAULT PER KOMODITAS ---
const DEFAULT_PRICES: Record<string, number> = {
  uranium: 8000,
  batu_bara: 100,
  minyak_bumi: 150,
  gas_alam: 120,
  garam: 50,
  nikel: 2000,
  litium: 3000,
  tembaga: 1500,
  aluminium: 1000,
  logam_tanah_jarang: 5000,
  bijih_besi: 800,
  semikonduktor: 4000,
  mobil: 15000,
  sepeda_motor: 5000,
  smelter: 12000,
  semen_beton: 300,
  kayu: 200,
  pupuk: 250,
  ayam_unggas: 60,
  sapi_perah: 200,
  sapi_potong: 180,
  domba_kambing: 150,
  padi: 80,
  gandum: 90,
  jagung: 70,
  sayur: 100,
  umbi: 60,
  kedelai: 120,
  kelapa_sawit: 130,
  kopi: 300,
  teh: 250,
  kakao: 350,
  tebu: 100,
  karet: 200,
  kapas: 180,
  tembakau: 400,
  udang: 500,
  mutiara: 1000,
  ikan: 300,
  air_mineral: 50,
  gula: 150,
  roti: 200,
  pengolahan_daging: 250,
  mie_instan: 180,
  minyak_goreng: 220,
  susu: 160,
  pakan_ternak: 120,
  ikan_kaleng: 280,
  kopi_teh: 350,
  farmasi: 600,
};

// --- HELPER TANGGAL ---
const getDaysInMonth = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  return new Date(year, month + 1, 0).getDate();
};

const getDaysInLastMonths = (endDate: Date, count: number) => {
  let total = 0;
  for (let i = 0; i < count; i++) {
    const d = new Date(endDate);
    d.setMonth(d.getMonth() - i);
    total += getDaysInMonth(d);
  }
  return total;
};

const isLeapYear = (date: Date) => {
  const year = date.getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

// --- GENERATE DATA CANDLESTICK (OHLC) DENGAN JUMLAH CANDLE DINAMIS ---
const generateCandleData = (
  endDate: Date,
  timeRange: string,
  currentPrice: number,
  volatility: number = 0.04,
  trend: number = 0.001
) => {
  const MS_PER_HOUR = 3600000;
  const MS_PER_DAY = 86400000;

  // Tentukan jumlah titik dan interval berdasarkan range
  let points = 0;
  let intervalMs = MS_PER_DAY; // default interval 1 hari

  switch (timeRange) {
    case '1d': // 1H = 24 candle, 1 jam
      points = 24;
      intervalMs = MS_PER_HOUR;
      break;
    case '1w': // 1M = 7 candle, 1 hari
      points = 7;
      intervalMs = MS_PER_DAY;
      break;
    case '1m': // 1B = 30-31 candle, 1 hari
      points = getDaysInMonth(endDate);
      intervalMs = MS_PER_DAY;
      break;
    case '6m': // 6B = total hari dalam 6 bulan terakhir
      points = getDaysInLastMonths(endDate, 6);
      intervalMs = MS_PER_DAY;
      break;
    case '1y': // 1T = 365 atau 366 candle, 1 hari
      points = isLeapYear(endDate) ? 366 : 365;
      intervalMs = MS_PER_DAY;
      break;
    default:
      points = 24;
      intervalMs = MS_PER_HOUR;
  }

  if (points <= 0) return [];
  const data = [];
  const times: Date[] = [];

  // Tentukan waktu setiap candle
  for (let i = 0; i < points; i++) {
    // Untuk 1d, kita buat dari 00:00 sampai 23:00
    if (timeRange === '1d') {
      const start = new Date(endDate);
      start.setHours(0, 0, 0, 0);
      times.push(new Date(start.getTime() + i * intervalMs));
    } else {
      // Untuk rentang lainnya, mundur dari endDate
      times.push(new Date(endDate.getTime() - (points - i) * intervalMs));
    }
  }

  // Generate OHLC dari kanan ke kiri (candle terakhir close-nya = currentPrice)
  let prevClose = currentPrice;
  for (let i = points - 1; i >= 0; i--) {
    const open = prevClose;
    const change = (Math.random() - 0.5) * volatility * open + trend * open;
    let close = Math.max(open + change, currentPrice * 0.5);
    close = Math.round(close * 100) / 100;

    // Hitung High dan Low dengan shadow acak
    const shadowTop = Math.random() * volatility * open * 0.6;
    const shadowBottom = Math.random() * volatility * open * 0.6;
    
    const high = Math.max(open, close) + shadowTop;
    const low = Math.min(open, close) - shadowBottom;

    data.push({
      time: times[i],
      open: Math.round(open * 100) / 100,
      high: Math.round(high * 100) / 100,
      low: Math.round(low * 100) / 100,
      close: close
    });

    // Gunakan close candle ini sebagai open candle sebelumnya
    prevClose = close;
  }

  return data.reverse();
};

export default function JualModalsMenu({ isOpen, onClose, countryDetail, setCountryDetail, onConfirm, currentDate, partners, initialPartnerName }: JualModalsMenuProps) {
  const [metadata, setMetadata] = useState<MetadataMap>({});
  const [loadingMetadata, setLoadingMetadata] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [partnerData, setPartnerData] = useState<Record<string, any> | null>(null);
  const partnerStartDateRef = useRef<string | null>(null);

  // --- State ---
  const [marketPrices, setMarketPrices] = useState<Record<string, number>>(DEFAULT_PRICES);
  const [ohlcSeries, setOhlcSeries] = useState<Record<string, {time: Date; open: number; high: number; low: number; close: number}[]>>({});
  const prevDateRef = useRef<string | null>(null);
  const [timeRange, setTimeRange] = useState<'1d' | '1w' | '1m' | '6m' | '1y'>('1d');

  useEffect(() => {
    if (!isOpen) return;
    setLoadingMetadata(true);
    fetchBuildingMetadata().then((data) => setMetadata(data || {})).catch(err => console.error(err)).finally(() => setLoadingMetadata(false));
  }, [isOpen]);

  useEffect(() => {
    const name = selectedCountry || partners[0]?.nama_negara;
    if (!name) {
      setPartnerData(null);
      return;
    }

    const pathEntry = (countryPaths as Record<string, string>)[name];
    if (!pathEntry) {
      setPartnerData(null);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/country-data?path=${encodeURIComponent(pathEntry)}`);
        if (!res.ok) {
          setPartnerData(null);
          return;
        }
        const json = await res.json();
        setPartnerData(json || null);
        if (!partnerStartDateRef.current) {
          partnerStartDateRef.current = currentDate ? formatDate(currentDate) : formatDate(new Date());
        }
      } catch (e) {
        console.error('Failed to fetch partner country data', e);
        setPartnerData(null);
      }
    };

    fetchData();
  }, [selectedCountry, partners, currentDate]);

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

  const formatLabel = (key: string) => key.replace(/_/g, " ").replace(/\b\w/g, (ch) => ch.toUpperCase());

  const stockAvailable = useMemo(() => {
    if (!selectedProduct) return 0;
    const buildingCount = Number(countryDetail?.[selectedProduct]) || 0;
    if (buildingCount === 0) return 0;

    const bMeta = findMeta(selectedProduct);
    if (!bMeta || !bMeta.produksi || !currentDate) return 0;

    const buildDateKey = `build_date_${selectedProduct}`;
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
  }, [selectedProduct, currentDate, countryDetail, findMeta]);

  const partnerProduction = useMemo(() => {
    if (!selectedProduct || !partnerData) return 0;
    const pBuildingCount = Number(partnerData[selectedProduct] || 0);
    if (pBuildingCount === 0) return 0;

    const pMeta = findMeta(selectedProduct);
    if (!pMeta || !pMeta.produksi || !currentDate) return 0;

    const pBuildDateKey = `build_date_${selectedProduct}`;
    const pBuildDate = partnerData[pBuildDateKey] as string | undefined;
    const currentDateStr = formatDate(currentDate);
    let pFinalBuildDate: string;
    if (typeof pBuildDate === 'string' && pBuildDate) {
      pFinalBuildDate = pBuildDate;
    } else {
      if (partnerStartDateRef.current) {
        pFinalBuildDate = partnerStartDateRef.current;
      } else {
        const thirtyDaysAgo = new Date(currentDate);
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        pFinalBuildDate = formatDate(thirtyDaysAgo);
      }
    }

    return calculateProductionIncrement(
      pMeta.produksi,
      pBuildingCount,
      pFinalBuildDate,
      currentDateStr
    );
  }, [selectedProduct, currentDate, partnerData, findMeta]);

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
    if (!partnerData) return ALL_JUAL_KEYS[0];
    return ALL_JUAL_KEYS.find((key) => {
      const checkFn = checkMap[key];
      if (checkFn) {
        return checkFn(partnerData);
      }
      return true;
    }) || ALL_JUAL_KEYS[0];
  };

  // --- EFEK INISIALISASI ---
  useEffect(() => {
    if (isOpen && selectedProduct === "") {
      const firstAvailable = getFirstAvailableProduct();
      setSelectedProduct(firstAvailable);
      if (initialPartnerName && !selectedCountry) {
        setSelectedCountry(initialPartnerName);
      } else if (partners.length > 0 && !selectedCountry) {
        setSelectedCountry(partners[0].nama_negara);
      }
      setQuantity(1);
    }
  }, [isOpen, partners, initialPartnerName]);

  // --- EFEK UPDATE PRODUK SAAT MITRA BERUBAH ---
  useEffect(() => {
    if (isOpen && selectedProduct) {
      const checkFn = checkMap[selectedProduct];
      const isDisabled = checkFn ? !checkFn(partnerData) : false;
      if (isDisabled) {
        const firstAvailable = getFirstAvailableProduct();
        setSelectedProduct(firstAvailable);
      }
    }
  }, [partnerData, selectedProduct, isOpen]);

  const effectiveSelectedCountry = selectedCountry || partners[0]?.nama_negara || "";
  const currentMeta = findMeta(selectedProduct);
  const seriesKey = `${selectedProduct}-${timeRange}`;

  // Harga saat ini (Close dari candle terakhir)
  const currentPrice = useMemo(() => {
    return marketPrices[selectedProduct] || 0;
  }, [marketPrices, selectedProduct]);

  // --- EFEK: Update harga pasar setiap hari ---
  useEffect(() => {
    if (!currentDate) return;
    const currentDateStr = formatDate(currentDate);
    const prevDateStr = prevDateRef.current;

    if (prevDateStr === currentDateStr) return;

    setMarketPrices(prev => {
      const newPrices = { ...prev };
      for (const key of ALL_JUAL_KEYS) {
        const oldPrice = newPrices[key] || DEFAULT_PRICES[key] || 100;
        const volatility = 0.05;
        const change = (Math.random() - 0.5) * volatility * oldPrice;
        const newPrice = Math.max(oldPrice + change, oldPrice * 0.5);
        newPrices[key] = Math.round(newPrice * 100) / 100;
      }
      return newPrices;
    });

    prevDateRef.current = currentDateStr;
  }, [currentDate]);

  // --- EFEK: Update candlestick chart saat produk/range berubah atau harga berubah ---
  // Perubahan: Tidak mengirim points dan intervalMs, karena logikanya sudah ada di dalam fungsi generateCandleData
  useEffect(() => {
    if (!selectedProduct || !currentDate || currentPrice <= 0) return;
    const newSeries = generateCandleData(
      currentDate,
      timeRange,
      currentPrice,
      0.04,
      0.001
    );
    setOhlcSeries(prev => ({ ...prev, [seriesKey]: newSeries }));
  }, [selectedProduct, timeRange, currentDate, seriesKey, currentPrice]);

  // --- RENDER CANDLESTICK CHART ---
  const renderCandlestickChart = () => {
    const series = ohlcSeries[seriesKey];
    if (!series || series.length < 2) {
      return <div className="text-xs text-[#8b7e66] text-center py-4">Tidak ada data harga</div>;
    }

    // Parameter Chart Full Width
    const width = 800;
    const height = 220;
    const padding = { top: 10, bottom: 20, left: 50, right: 20 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // Cari Harga Tertinggi dan Terendah
    let minPrice = Infinity;
    let maxPrice = -Infinity;
    series.forEach(d => {
      minPrice = Math.min(minPrice, d.low);
      maxPrice = Math.max(maxPrice, d.high);
    });
    const rangeBuffer = (maxPrice - minPrice) * 0.05;
    const yMin = Math.max(0, minPrice - rangeBuffer);
    const yMax = maxPrice + rangeBuffer;
    const priceRange = yMax - yMin || 1;

    // Fungsi Skala
    const xScale = (index: number) => padding.left + (index / (series.length - 1)) * chartWidth;
    const yScale = (price: number) => padding.top + chartHeight - ((price - yMin) / priceRange) * chartHeight;

    // Lebar Candle
    const candleWidth = Math.max(3, (chartWidth / series.length) * 0.6);
    const halfCandleWidth = candleWidth / 2;

    const formatXLabel = (index: number) => {
      const date = series[index].time;
      if (timeRange === '1d') return date.getHours() + ':' + String(date.getMinutes()).padStart(2, '0');
      if (timeRange === '1w') return date.toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short' });
      return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
    };

    return (
      <div className="w-full flex justify-center">
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet" className="max-w-full">
          {/* Grid Garis Horizontal */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const y = padding.top + chartHeight * (1 - ratio);
            return (
              <line 
                key={ratio} 
                x1={padding.left} 
                y1={y} 
                x2={width - padding.right} 
                y2={y} 
                stroke="#E5E7EB" 
                strokeDasharray="4 4" 
              />
            );
          })}

          {/* Sumbu Y */}
          <line x1={padding.left} y1={padding.top} x2={padding.left} y2={height - padding.bottom} stroke="#C4B49C" strokeWidth="1" />
          <line x1={padding.left} y1={height - padding.bottom} x2={width - padding.right} y2={height - padding.bottom} stroke="#C4B49C" strokeWidth="1" />

          {/* Label Y */}
          <text x={padding.left - 6} y={padding.top + 4} textAnchor="end" fontSize="9" fill="#8b7e66">{yMax.toFixed(0)}</text>
          <text x={padding.left - 6} y={height - padding.bottom + 4} textAnchor="end" fontSize="9" fill="#8b7e66">{yMin.toFixed(0)}</text>

          {/* Label X (Awal dan Akhir) */}
          <text x={padding.left} y={height - 2} textAnchor="middle" fontSize="9" fill="#8b7e66">{formatXLabel(0)}</text>
          <text x={width - padding.right} y={height - 2} textAnchor="middle" fontSize="9" fill="#8b7e66">{formatXLabel(series.length - 1)}</text>

          {/* --- CANDLESTICKS --- */}
          {series.map((d, i) => {
            const x = xScale(i);
            const yHigh = yScale(d.high);
            const yLow = yScale(d.low);
            const yOpen = yScale(d.open);
            const yClose = yScale(d.close);
            
            const isGreen = d.close >= d.open;
            const color = isGreen ? "#26a69a" : "#ef5350";
            const bodyTop = Math.min(yOpen, yClose);
            const bodyHeight = Math.max(1, Math.abs(yClose - yOpen));

            return (
              <g key={i}>
                {/* Wick (Sumbu Atas & Bawah) */}
                <line 
                  x1={x} 
                  y1={yHigh} 
                  x2={x} 
                  y2={yLow} 
                  stroke={color} 
                  strokeWidth="1.5" 
                />
                {/* Body (Persegi Panjang) */}
                <rect 
                  x={x - halfCandleWidth} 
                  y={bodyTop} 
                  width={candleWidth} 
                  height={bodyHeight} 
                  fill={color} 
                />
              </g>
            );
          })}

          {/* Indikator Harga Saat Ini (Close Terakhir) */}
          <line 
            x1={padding.left} 
            y1={yScale(currentPrice)} 
            x2={width - padding.right} 
            y2={yScale(currentPrice)} 
            stroke="#c77a00" 
            strokeDasharray="4 4" 
            strokeWidth="1.5" 
          />
          <circle 
            cx={width - padding.right} 
            cy={yScale(currentPrice)} 
            r="5" 
            fill="#c77a00" 
            stroke="#FAF6EE" 
            strokeWidth="2" 
          />
          <text 
            x={width - padding.right + 5} 
            y={yScale(currentPrice) + 3} 
            fontSize="9" 
            fill="#c77a00" 
            fontWeight="bold"
          >
            {currentPrice.toLocaleString("id-ID")} EM
          </text>
        </svg>
      </div>
    );
  };

  if (!isOpen) return null;

  const handleConfirm = () => {
    const detail = countryDetail ?? {};
    const currentBudget = typeof detail.anggaran === "number" ? detail.anggaran : 0;

    if (quantity > stockAvailable) {
      alert(`Stok Anda tidak mencukupi! Stok tersedia hanya ${stockAvailable.toLocaleString("id-ID")} unit.`);
      return;
    }

    const totalPendapatan = currentPrice * quantity;
    const accumulatedKey = `accumulated_${selectedProduct}`;
    const currentAccumulated = Number(detail[accumulatedKey] || stockAvailable);
    const newAccumulated = Math.max(0, currentAccumulated - quantity);

    setCountryDetail({ 
      ...detail, 
      anggaran: currentBudget + totalPendapatan,
      [accumulatedKey]: newAccumulated 
    });

    onConfirm(totalPendapatan, `${quantity}x Satuan`);
    alert(`Berhasil menjual ${quantity} ${formatLabel(selectedProduct)} ke ${effectiveSelectedCountry} dengan harga ${currentPrice.toLocaleString("id-ID")} EM/unit.`);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
            
            {/* HEADER */}
            <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-rose-600/10 rounded-xl border border-rose-600/20">
                  <Send className="h-5 w-5 text-rose-700" />
                </div>
                <h2 className="text-lg font-bold text-[#5c3c10] tracking-tight uppercase">Jual Komoditas</h2>
              </div>
              <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* BODY */}
            <div className="flex-1 overflow-y-auto px-5 pt-5 pb-2 relative z-10 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[#5c3c10] font-bold text-sm tracking-wide">Produk:</label>
                  <div className="relative">
                    <select
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      className="w-full px-3 py-2 rounded-md bg-[#3b7d7d] text-white text-sm font-bold border-none focus:ring-2 focus:ring-[#c77a00] appearance-none"
                    >
                      {ALL_JUAL_KEYS.map((key) => {
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
                    {stockAvailable > 0 ? partnerProduction.toLocaleString('id-ID') : '0'} <span className="text-[10px] text-[#8b7e66] font-bold">Unit</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2">
                <label className="text-[#5c3c10] font-bold text-sm tracking-wide">Kuantitas:</label>
                <div className="flex items-center gap-1.5">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1.5 rounded bg-[#3b7d7d] text-white hover:bg-[#2e6363] shadow-sm">
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <input 
                    type="number" 
                    min={1} 
                    max={stockAvailable} 
                    value={quantity} 
                    onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))} 
                    className="w-16 px-2 py-1.5 text-center rounded bg-[#3b7d7d] text-white text-sm font-bold border-none focus:ring-2 focus:ring-[#c77a00]" 
                  />
                  <button onClick={() => setQuantity(quantity + 1)} className="p-1.5 rounded bg-[#3b7d7d] text-white hover:bg-[#2e6363] shadow-sm">
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                  <button onClick={() => setQuantity(quantity + 1000)} className="px-2.5 py-1.5 rounded bg-[#3b7d7d] text-white text-[10px] font-bold hover:bg-[#2e6363] shadow-sm uppercase tracking-wide">+1k</button>
                </div>
              </div>

              {/* Tampilkan harga per unit */}
              <div className="flex justify-between items-center pt-3 border-t border-[#C4B49C]/20">
                <span className="text-[#5c3c10] font-bold text-sm tracking-wide">Harga / unit:</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-black text-[#2e261a]">{currentPrice.toLocaleString("id-ID")}</span>
                  <span className="text-[10px] text-[#8b7e66] font-bold mt-0.5">EM</span>
                </div>
              </div>

              {/* CANDLESTICK CHART */}
              <div className="pt-3 border-t border-[#C4B49C]/10 mt-2 w-full">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[#5c3c10] font-bold text-sm tracking-wide">Grafik Harga Historis (Candlestick)</div>
                  <div className="flex gap-1.5">
                    {[
                      { label: '1H', value: '1d' },
                      { label: '1M', value: '1w' },
                      { label: '1B', value: '1m' },
                      { label: '6B', value: '6m' },
                      { label: '1T', value: '1y' }
                    ].map(({ label, value }) => (
                      <button
                        key={value}
                        onClick={() => setTimeRange(value as any)}
                        className={`px-2.5 py-1 text-[11px] font-bold rounded border transition-colors ${
                          timeRange === value
                            ? 'bg-[#3b7d7d] text-white border-[#3b7d7d]'
                            : 'bg-transparent text-[#8b7e66] border-[#C4B49C] hover:bg-[#f0ebe2]'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
                {renderCandlestickChart()}
              </div>
            </div>

            {/* FOOTER */}
            <div className="px-5 py-4 pb-8 border-t-2 border-[#C4B49C]/20 flex gap-3 bg-[#FAF6EE] relative z-10">
              <button onClick={onClose} className="flex-1 py-2.5 rounded-lg bg-[#c49e6c] hover:bg-[#b08d5d] text-[#FAF6EE] text-xs font-black uppercase tracking-wide shadow-sm">Batal</button>
              <button onClick={handleConfirm} className="flex-1 py-2.5 rounded-lg bg-[#3b7d7d] hover:bg-[#2e6363] text-[#FAF6EE] text-xs font-black uppercase tracking-wide shadow-sm">Jual</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}