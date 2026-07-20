"use client"
import React, { useState, useEffect } from "react";
import { X, TrendingUp, Search } from "lucide-react";
import {
  calculateTotalTaxIncome,
  calculateGoldIncome,
  calculateTotalMinistryCostPerDay,
} from "@/app/logic/economic_logic/treasuryUpdater";
import { COUNTRIES_DATA } from '@/app/page/map_system/map-data';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  selectedCountry: any;
}

// --- HELPER GLOBAL UNTUK DATA SEMUA NEGARA (DIPINDAHKAN) ---
const LEVEL_UP_COST = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

let cachedAllCountries: any[] | null = null;
let cachedDataVersion: number | null = null;

const formatNumber = (num: number) => num.toLocaleString('id-ID');

const getDisplayName = (detail: any) =>
  detail?.name_id || detail?.nama_negara || detail?.country || detail?.country_name || detail?.__fileName || 'Unknown';

const extractFileOrder = (fileName: any) => {
  if (typeof fileName !== 'string') return NaN;
  const match = fileName.match(/^(\d+)/);
  return match ? Number(match[1]) : NaN;
};

const getContinentFromOrder = (order: number) => {
  if (Number.isNaN(order)) return 'Lainnya';
  if (order >= 1 && order <= 51) return 'Africa';
  if (order >= 54 && order <= 102) return 'Asia';
  if (order >= 103 && order <= 151) return 'Europe';
  if (order >= 152 && order <= 178) return 'North America';
  if (order >= 179 && order <= 194) return 'Oceania';
  if (order >= 195 && order <= 207) return 'South America';
  return 'Lainnya';
};

const normalizeContinent = (continent: any) => {
  if (typeof continent !== 'string') return 'Lainnya';
  const value = continent.trim().toLowerCase();
  if (value === 'asia') return 'Asia';
  if (value === 'africa' || value === 'afrika') return 'Africa';
  if (value === 'europe' || value === 'eropa') return 'Europe';
  if (value === 'north america' || value === 'amerika utara') return 'North America';
  if (value === 'south america' || value === 'amerika selatan') return 'South America';
  if (value === 'oceania' || value === 'oseania') return 'Oceania';
  return 'Lainnya';
};

// --- KOMPONEN DATA NEGARA ---
function AllCountriesGDP() {
  const [allCountries, setAllCountries] = useState<any[] | null>(cachedAllCountries);
  const [loading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' }>({
    key: 'net',
    direction: 'desc',
  });

  const fetchAndProcessAllCountries = async () => {
    const res = await fetch('/api/country-data?all=true', { cache: 'no-store' });
    const data = await res.json();
    if (!Array.isArray(data)) return null;

    const countryToContinentMap = new Map<string, string>();
    COUNTRIES_DATA.forEach((c) => {
      countryToContinentMap.set(c.country.toLowerCase(), c.continent);
    });

    return data.map((country) => {
      const name = getDisplayName(country);
      const listOrder = extractFileOrder(country.__fileName || country.filename || name);
      const continent = normalizeContinent(
        country.__continent ||
          country.continent ||
          countryToContinentMap.get(name.toLowerCase()) ||
          getContinentFromOrder(listOrder)
      );
      return { ...country, __displayName: name, continent, __fileOrder: listOrder };
    });
  };

  useEffect(() => {
    const prefetch = async () => {
      if (cachedAllCountries) return;
      try {
        const processed = await fetchAndProcessAllCountries();
        if (processed) {
          cachedAllCountries = processed;
          setAllCountries(processed);
        }
      } catch (e) {
        console.warn('Background prefetch failed:', e);
      }
    };
    prefetch();
  }, []);

  useEffect(() => {
    const poll = async () => {
      try {
        const res = await fetch('/api/country-data-version', { cache: 'no-store' });
        const { version } = await res.json();
        if (cachedDataVersion !== null && version !== cachedDataVersion) {
          cachedDataVersion = version;
          cachedAllCountries = null;
          setIsRefreshing(true);
          try {
            const processed = await fetchAndProcessAllCountries();
            if (processed) {
              cachedAllCountries = processed;
              setAllCountries(processed);
            }
          } finally {
            setIsRefreshing(false);
          }
        } else {
          cachedDataVersion = version;
        }
      } catch (e) {
        // abaikan error polling
      }
    };
    poll();
    const interval = setInterval(poll, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      if (cachedAllCountries) {
        setAllCountries(cachedAllCountries);
        return;
      }
      setLoading(true);
      try {
        const processed = await fetchAndProcessAllCountries();
        if (!mounted) return;
        if (processed) {
          cachedAllCountries = processed;
          setAllCountries(processed);
        } else {
          setAllCountries([]);
        }
      } catch (e) {
        console.error('Error fetching all countries GDP:', e);
        setAllCountries(null);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => { mounted = false; };
  }, []);

  const computeTaxValue = (detail: any) => calculateTotalTaxIncome(detail);
  const computeGoldValue = (detail: any) => calculateGoldIncome(detail);
  const computeMinistryCost = (detail: any) => calculateTotalMinistryCostPerDay(detail);

  const handleSort = (key: string) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'desc' ? 'asc' : 'desc',
    }));
  };

  const renderSortArrow = (key: string) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? ' ▲' : ' ▼';
  };

  const renderAllRows = () => {
    if (!allCountries || allCountries.length === 0) {
      return (
        <tr>
          <td className="px-4 py-6 text-center text-sm font-bold text-[#5c3c10]" colSpan={7}>
            {loading ? 'Memuat data...' : 'Tidak ada data negara.'}
          </td>
        </tr>
      );
    }

    let rows = allCountries.map((country) => {
      const tax = computeTaxValue(country);
      const gold = computeGoldValue(country);
      const ministry = computeMinistryCost(country);
      const net = tax + gold - ministry;
      const continent = normalizeContinent(country.continent || getContinentFromOrder(country.__fileOrder));
      const hasEkstraksiData = country.uranium !== undefined || country.batu_bara !== undefined || country.minyak_bumi !== undefined || country.gas_alam !== undefined;
      const buildingCount = hasEkstraksiData && typeof country.emas === 'number' ? country.emas : 0;

      return {
        name: country.__displayName || getDisplayName(country),
        continent,
        tax,
        gold,
        ministry,
        net,
        order: country.__fileOrder,
        buildingCount,
      };
    });

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      rows = rows.filter((item) => item.name.toLowerCase().includes(q) || item.continent.toLowerCase().includes(q));
    }

    if (rows.length === 0) {
      return (
        <tr>
          <td className="px-4 py-6 text-center text-sm font-bold text-[#5c3c10]" colSpan={7}>
            Tidak ada data yang cocok dengan pencarian "{searchQuery}".
          </td>
        </tr>
      );
    }

    const sortedRows = [...rows].sort((a, b) => {
      const key = sortConfig.key as keyof typeof a;
      const aVal = a[key];
      const bVal = b[key];
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sortConfig.direction === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      } else {
        return sortConfig.direction === 'asc' ? (aVal as number) - (bVal as number) : (bVal as number) - (aVal as number);
      }
    });

    return sortedRows.map((row, index) => (
      <tr key={`${row.name}-${index}`} className={index % 2 === 0 ? 'bg-[#f5efdf]/50' : 'bg-white/50'}>
        <td className="px-4 py-3 text-sm font-bold text-[#2e261a] border-b border-[#C4B49C]/10">{row.name}</td>
        <td className="px-4 py-3 text-sm font-bold text-[#5c3c10] border-b border-[#C4B49C]/10">{row.continent}</td>
        <td className="px-4 py-3 text-right font-bold text-[#2e261a] border-b border-[#C4B49C]/10">{formatNumber(row.tax)}</td>
        <td className="px-4 py-3 text-right font-bold text-[#2e261a] border-b border-[#C4B49C]/10">{row.buildingCount > 0 ? row.buildingCount : '-'}</td>
        <td className="px-4 py-3 text-right font-bold text-[#2e261a] border-b border-[#C4B49C]/10">{formatNumber(row.gold)}</td>
        <td className="px-4 py-3 text-right font-bold text-[#2e261a] border-b border-[#C4B49C]/10">{formatNumber(row.ministry)}</td>
        <td className={`px-4 py-3 text-right font-black text-sm border-b border-[#C4B49C]/10 ${row.net >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
          {row.net >= 0 ? '+' : ''}{formatNumber(row.net)}
        </td>
      </tr>
    ));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#5c3c10] font-black uppercase tracking-wider">
            {isRefreshing ? 'Memperbarui data...' : 'Live update aktif'}
          </span>
          <span className={`inline-block w-2 h-2 rounded-full ${isRefreshing ? 'bg-yellow-500 animate-ping' : 'bg-emerald-500'}`} />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Cari negara / benua..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 pr-3 py-1.5 rounded-lg bg-white/80 border border-[#C4B49C] text-sm font-bold text-[#2e261a] outline-none focus:ring-2 focus:ring-[#5c3c10] w-48 transition-all placeholder:text-[#8b7e66]"
          />
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8b7e66]" />
        </div>
      </div>

      <div className="bg-[#FAF6EE] border-2 border-[#C4B49C] rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-auto max-h-[40vh]">
          <table className="min-w-full table-auto border-separate border-spacing-0 text-left">
            <thead>
              <tr className="bg-[#e9dcc6] border-b-2 border-[#C4B49C]">
                <th className="px-4 py-3 border-b-2 border-[#C4B49C] cursor-pointer hover:bg-[#ddd0b8] transition text-[10px] text-[#5c3c10] font-black uppercase tracking-wider" onClick={() => handleSort('name')}>Nama Negara{renderSortArrow('name')}</th>
                <th className="px-4 py-3 border-b-2 border-[#C4B49C] cursor-pointer hover:bg-[#ddd0b8] transition text-[10px] text-[#5c3c10] font-black uppercase tracking-wider" onClick={() => handleSort('continent')}>Benua{renderSortArrow('continent')}</th>
                <th className="px-4 py-3 border-b-2 border-[#C4B49C] text-right cursor-pointer hover:bg-[#ddd0b8] transition text-[10px] text-[#5c3c10] font-black uppercase tracking-wider" onClick={() => handleSort('tax')}>Total Pajak{renderSortArrow('tax')}</th>
                <th className="px-4 py-3 border-b-2 border-[#C4B49C] text-right cursor-pointer hover:bg-[#ddd0b8] transition text-[10px] text-[#5c3c10] font-black uppercase tracking-wider" onClick={() => handleSort('buildingCount')}>Bangunan Emas{renderSortArrow('buildingCount')}</th>
                <th className="px-4 py-3 border-b-2 border-[#C4B49C] text-right cursor-pointer hover:bg-[#ddd0b8] transition text-[10px] text-[#5c3c10] font-black uppercase tracking-wider" onClick={() => handleSort('gold')}>Produksi Emas{renderSortArrow('gold')}</th>
                <th className="px-4 py-3 border-b-2 border-[#C4B49C] text-right cursor-pointer hover:bg-[#ddd0b8] transition text-[10px] text-[#5c3c10] font-black uppercase tracking-wider" onClick={() => handleSort('ministry')}>Pengeluaran{renderSortArrow('ministry')}</th>
                <th className="px-4 py-3 border-b-2 border-[#C4B49C] text-right cursor-pointer hover:bg-[#ddd0b8] transition text-[10px] text-[#5c3c10] font-black uppercase tracking-wider" onClick={() => handleSort('net')}>Netto APBN{renderSortArrow('net')}</th>
              </tr>
            </thead>
            <tbody>{renderAllRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// --- KOMPONEN UTAMA PDB MODAL ---
export default function PDBModal({ isOpen, onClose, countryDetail, selectedCountry }: ModalProps) {
  if (!isOpen) return null;
  const countryName = selectedCountry?.country || "Indonesia";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                <TrendingUp className="h-6 w-6 text-[#5c3c10]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Produk Domestik Bruto (PDB)</h2>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
          >
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <p className="text-xs text-[#8b7e66] font-semibold leading-relaxed mb-6">
            PDB mengukur kekuatan ekonomi makro kedaulatan {countryName}. Pertumbuhan positif meningkatkan daya tawar diplomasi Anda. 
            <span className="ml-1 text-[#5c3c10] font-black">(Data APBN Seluruh Negara Di Bawah Ini)</span>
          </p>

          {/* --- DATA APBN SEMUA NEGARA YANG DIPINDAHKAN --- */}
          <AllCountriesGDP />
        </div>
      </div>
    </div>
  );
}