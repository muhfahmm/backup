"use client"
import React, { useState, useEffect, useMemo } from "react";
import { 
  X, Plus, Globe, User, Search, ChevronUp, ChevronDown, ChevronRight, ChevronDown as ChevronDownIcon, Utensils
} from "lucide-react";
import { 
  FOOD_CONSUMPTION_PER_CAPITA,
  calculateProduction, 
  calculateConsumption, 
  calculateCountryFoodAggregate, 
  calculateCountryFoodDetails 
} from "./logic/produksiKonsumsiLogic";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail?: (detail: any) => void;
  metadata?: any;
  onGotoProduction?: (tab: string, key: string) => void;
}

interface SortConfig {
  key: 'name' | 'population' | 'production' | 'consumption' | 'balance';
  direction: 'asc' | 'desc';
}

export default function IndustriPanganModal({ isOpen, onClose, countryDetail, metadata, onGotoProduction }: ModalProps) {
  const [activeTab, setActiveTab] = useState<"my" | "global">("my");
  const [allCountries, setAllCountries] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'production', direction: 'desc' });
  const [expandedRows, setExpandedRows] = useState<'all' | Set<number>>('all');

  useEffect(() => {
    if (isOpen && allCountries.length === 0) {
      (async () => {
        try {
          const res = await fetch('/api/country-data?all=true', { cache: 'no-store' });
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setAllCountries(data);
          }
        } catch (error) {
          console.error('Error fetching all countries data:', error);
        }
      })();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const population = Number(countryDetail?.jumlah_penduduk) || 0;

  const handleBuildClick = (buildingKey: string) => {
    // Asumsi tab produksi untuk pangan adalah 'industri_pangan'
    if (onGotoProduction) onGotoProduction('industri_pangan', buildingKey);
  };

  const toggleRow = (index: number) => {
    if (expandedRows === 'all') {
      setExpandedRows(new Set([index]));
    } else {
      const newSet = new Set(expandedRows);
      if (newSet.has(index)) newSet.delete(index);
      else newSet.add(index);
      setExpandedRows(newSet);
    }
  };

  const userCountryName = (countryDetail?.name_id || countryDetail?.nama || countryDetail?.country || countryDetail?.name_en || '').toLowerCase().trim();

  const globalFoodData = allCountries
    .map((country, index) => {
      // Panggil fungsi tanpa array sektor
      const { totalProduction, totalConsumption, balance } = calculateCountryFoodAggregate(country, metadata);
      const countryPopulation = Number(country?.jumlah_penduduk ?? country?.population ?? country?.pop ?? country?.penduduk ?? country?.total_population ?? 0);
      
      let rawName = country?.name_id || country?.name_en || country?.nama || country?.country;
      if (!rawName && country?.__fileName) {
        rawName = country.__fileName
          .replace(/^\d+_/, '')
          .replace(/\.(ts|js|json)$/i, '')
          .replace(/_/g, ' ')
          .replace(/\b\w/g, (char: string) => char.toUpperCase());
      }
      const countryName = rawName || 'Unknown';

      const isUser = Boolean(
        userCountryName && (
          countryName.toLowerCase().trim() === userCountryName ||
          (country?.name_id && country.name_id.toLowerCase().trim() === userCountryName) ||
          (country?.name_en && country.name_en.toLowerCase().trim() === userCountryName) ||
          (country?.country && country.country.toLowerCase().trim() === userCountryName)
        )
      );
      
      return {
        index: index + 1,
        name: countryName,
        population: countryPopulation,
        production: totalProduction,
        consumption: totalConsumption,
        balance,
        isUser,
        rawData: country,
      };
    })
    .sort((a, b) => b.production - a.production);

  let sortedData = [...globalFoodData].sort((a, b) => {
    let aVal: any, bVal: any;
    switch (sortConfig.key) {
      case 'name': aVal = a.name.toLowerCase(); bVal = b.name.toLowerCase(); break;
      case 'population': aVal = a.population; bVal = b.population; break;
      case 'production': aVal = a.production; bVal = b.production; break;
      case 'consumption': aVal = a.consumption; bVal = b.consumption; break;
      case 'balance': aVal = a.balance; bVal = b.balance; break;
      default: return 0;
    }
    if (sortConfig.direction === 'asc') return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
    else return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
  });

  const filteredData = searchQuery.trim() === '' ? sortedData : sortedData.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSort = (column: SortConfig['key']) => {
    if (sortConfig.key === column) {
      setSortConfig({ key: column, direction: sortConfig.direction === 'asc' ? 'desc' : 'asc' });
    } else {
      setSortConfig({ key: column, direction: 'desc' });
    }
  };

  const SortIndicator = ({ column }: { column: SortConfig['key'] }) => {
    if (sortConfig.key !== column) return <span className="text-[#8b7e66]/30 ml-1 text-xs">⇅</span>;
    if (sortConfig.direction === 'asc') return <ChevronUp className="h-3 w-3 ml-1 inline text-emerald-700" />;
    return <ChevronDown className="h-3 w-3 ml-1 inline text-emerald-700" />;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        
        {/* HEADER */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
              <Utensils className="h-6 w-6 text-[#5c3c10]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Industri Pangan & Konsumsi Masyarakat</h2>
              <p className="text-xs text-[#8b7e66] mt-1">Neraca produksi dan kebutuhan pasokan makanan nasional</p>
            </div>
          </div>
          <button onClick={onClose} className="flex items-center gap-1.5 p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex-1 min-h-0 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 space-y-6 no-scrollbar">
          {/* TAB MENU */}
          <div className="bg-[#e4dac3]/40 p-1 rounded-xl border border-[#C4B49C]/40 inline-flex mb-2 shadow-sm">
            <button onClick={() => setActiveTab("my")} className={`px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${activeTab === "my" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20" : "text-[#8b7e66] hover:text-[#5c3c10]"}`}>
              <User className="w-3.5 h-3.5 inline mr-2 -mt-0.5" /> Data Saya
            </button>
            <button onClick={() => setActiveTab("global")} className={`px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${activeTab === "global" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20" : "text-[#8b7e66] hover:text-[#5c3c10]"}`}>
              <Globe className="w-3.5 h-3.5 inline mr-2 -mt-0.5" /> Data Global ({allCountries.length || 207} Negara)
            </button>
          </div>

          {/* KONTEN DINAMIS */}
          {activeTab === "my" ? (
            // ------- TAB 1: DATA SAYA (Flat Grid 26 Komoditas) -------
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e6dcd0] border-2 border-[#4a7a7a] rounded-2xl overflow-hidden shadow-md bg-white">
              {Object.entries(FOOD_CONSUMPTION_PER_CAPITA).map(([key, consumptionPerCapita]) => {
                const production = calculateProduction(key, countryDetail, metadata);
                const consumption = calculateConsumption(population, consumptionPerCapita);
                const netBalance = production - consumption;
                const label = metadata?.[key]?.label || key.replace(/_/g, ' ').replace(/\b\w/g, (ch) => ch.toUpperCase());
                
                return (
                  <div key={key} className="bg-[#f7f3e8] p-3.5 flex flex-col gap-2 border-r border-[#C4B49C]/20 last:border-r-0">
                    <div className="flex items-center justify-between pb-1 border-b border-[#C4B49C]/20">
                      <span className="text-xs font-black text-[#5c3c10] uppercase tracking-wider">{label}</span>
                      {onGotoProduction && (
                        <button onClick={() => handleBuildClick(key)} title={`Bangun ${label}`} className="p-1 rounded-lg bg-[#5c3c10] text-[#FAF6EE] hover:bg-[#8b7e66] transition-all cursor-pointer shadow-xs">
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between items-center bg-emerald-50/80 px-2 py-1 rounded-md border border-emerald-200/60">
                        <span className="text-[9px] font-bold text-emerald-800 uppercase tracking-tight">Total Produksi</span>
                        <span className="font-black text-emerald-700">+{production.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex justify-between items-center bg-rose-50/80 px-2 py-1 rounded-md border border-rose-200/60">
                        <span className="text-[9px] font-bold text-rose-800 uppercase tracking-tight">Total Konsumsi</span>
                        <span className="font-black text-rose-700">-{consumption.toLocaleString('id-ID')}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] pt-1.5 border-t border-[#C4B49C]/30 mt-0.5">
                      <span className="font-bold text-[#8b7e66] uppercase tracking-wider">Netto:</span>
                      <span className={`font-black text-xs ${netBalance >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                        {netBalance >= 0 ? `+${netBalance.toLocaleString('id-ID')}` : netBalance.toLocaleString('id-ID')}
                      </span>
                    </div>
                  </div>
                );
              })}
              
              <div className="col-span-full p-4 rounded-xl bg-[#e4dac3]/40 border-t-2 border-[#C4B49C]/50 flex justify-between items-center shadow-sm">
                <div className="flex items-center gap-2 text-[#5c3c10] font-black text-xs uppercase tracking-wider">👥 Total Populasi & Kebutuhan Pangan Harian</div>
                <div className="px-4 py-1.5 rounded-lg bg-[#5c3c10] text-[#FAF6EE]">
                  <span className="text-xs font-black tracking-wider">{population.toLocaleString('id-ID')} Jiwa</span>
                </div>
              </div>
            </div>
          ) : (
            // ------- TAB 2: DATA GLOBAL (207 Negara) - Flat Detail Expand -------
            <div className="bg-[#FAF6EE] border-2 border-[#C4B49C]/40 p-6 rounded-2xl shadow-sm w-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-[#5c3c10]/10 text-[#5c3c10]">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#5c3c10] uppercase tracking-wide">Neraca Pangan {allCountries.length || 207} Negara</h3>
                  <p className="text-[10px] text-[#8b7e66] uppercase tracking-wider">Klik nama negara untuk melihat rincian 26 komoditas.</p>
                </div>
              </div>

              {/* SEARCH BOX */}
              <div className="mb-4 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-[#8b7e66] pointer-events-none" />
                <input type="text" placeholder="Cari nama negara..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-lg border-2 border-[#C4B49C]/40 bg-[#FAF6EE] text-[#5c3c10] placeholder-[#8b7e66] focus:outline-none focus:border-[#5c3c10] focus:ring-2 focus:ring-[#5c3c10]/20 transition-all font-semibold text-sm" />
                {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute right-3 top-3 text-[#8b7e66] hover:text-[#5c3c10] transition-colors">✕</button>}
              </div>
              
              {/* TABEL DATA */}
              <div className="border border-[#C4B49C]/30 rounded-xl bg-[#FAF6EE]/50 shadow-sm">
                <table className="w-full text-xs">
                  <thead className="bg-[#5c3c10]/5 border-b-2 border-[#C4B49C]/30">
                    <tr>
                      <th className="px-4 py-3 text-left font-black text-[#5c3c10] uppercase tracking-wider w-12">No</th>
                      <th onClick={() => handleSort('name')} className="px-4 py-3 text-left font-black text-[#5c3c10] uppercase tracking-wider cursor-pointer hover:bg-[#5c3c10]/10 transition-colors">Negara <SortIndicator column="name" /></th>
                      <th onClick={() => handleSort('population')} className="px-4 py-3 text-right font-black text-[#5c3c10] uppercase tracking-wider cursor-pointer hover:bg-[#5c3c10]/10 transition-colors">Populasi <SortIndicator column="population" /></th>
                      <th onClick={() => handleSort('production')} className="px-4 py-3 text-right font-black text-emerald-700 uppercase tracking-wider cursor-pointer hover:bg-emerald-700/10 transition-colors">Prod. Pangan <SortIndicator column="production" /></th>
                      <th onClick={() => handleSort('consumption')} className="px-4 py-3 text-right font-black text-rose-700 uppercase tracking-wider cursor-pointer hover:bg-rose-700/10 transition-colors">Kons. Pangan <SortIndicator column="consumption" /></th>
                      <th onClick={() => handleSort('balance')} className="px-4 py-3 text-right font-black text-[#5c3c10] uppercase tracking-wider cursor-pointer hover:bg-[#5c3c10]/10 transition-colors">Neraca Pangan <SortIndicator column="balance" /></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#C4B49C]/20">
                    {allCountries.length === 0 ? <tr><td colSpan={6} className="px-4 py-6 text-center text-xs font-bold text-[#8b7e66]">📡 Memuat data 207 negara...</td></tr> 
                    : filteredData.length > 0 ? (
                      filteredData.map((country, rowIndex) => {
                        const isUserCountry = country.isUser;
                        const isExpanded = expandedRows === 'all' || (expandedRows instanceof Set && expandedRows.has(country.index));
                        const details = calculateCountryFoodDetails(country.rawData, metadata);

                        return (
                          <React.Fragment key={`country-${country.index}`}>
                            <tr className={`transition-colors cursor-pointer hover:brightness-95 ${isUserCountry ? 'bg-emerald-100/80 font-black border-l-4 border-l-emerald-600' : rowIndex % 2 === 0 ? 'bg-[#FAF6EE]' : 'bg-[#e4dac3]/10'}`} onClick={() => toggleRow(country.index)}>
                              <td className={`px-4 py-3 font-bold ${isUserCountry ? 'text-emerald-900 font-black' : 'text-[#8b7e66]'}`}>{country.index}</td>
                              <td className={`px-4 py-3 font-bold ${isUserCountry ? 'text-emerald-900 font-black flex items-center gap-2' : 'text-[#5c3c10] flex items-center gap-2'}`}>
                                <span>{country.name}</span>
                                {isUserCountry && <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] font-black uppercase tracking-wider shadow-sm">Negara Anda</span>}
                                <span className="ml-auto text-[#5c3c10] opacity-80 hover:opacity-100 transition-opacity">
                                  {isExpanded ? <ChevronDownIcon className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                                </span>
                              </td>
                              <td className="px-4 py-3 font-bold text-[#5c3c10] text-right">{country.population.toLocaleString('id-ID')}</td>
                              <td className="px-4 py-3 font-bold text-emerald-700 text-right">{country.production > 0 ? country.production.toLocaleString('id-ID') : '0'}</td>
                              <td className="px-4 py-3 font-bold text-rose-700 text-right">{country.consumption > 0 ? country.consumption.toLocaleString('id-ID') : '0'}</td>
                              <td className={`px-4 py-3 font-black text-right ${country.balance >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>{country.balance >= 0 ? '+' : ''}{Math.abs(country.balance).toLocaleString('id-ID')}</td>
                            </tr>

                            {/* EXPANDED DETAIL ROW (Flat list) */}
                            {isExpanded && (
                              <tr>
                                <td colSpan={6} className="p-0 bg-[#FAF6EE] border-b-2 border-[#C4B49C]/20">
                                  <div className="p-6 max-h-[40vh] overflow-y-auto">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                      {details.map((item) => (
                                        <div key={item.key} className="bg-[#f7f3e8] p-3 flex flex-col gap-1 border border-[#C4B49C]/20 rounded-md text-[10px]">
                                          <span className="font-black text-[#5c3c10] uppercase tracking-tight">{item.label}</span>
                                          <div className="flex justify-between">
                                            <span className="text-[#8b7e66]">Produksi:</span>
                                            <span className="font-black text-emerald-700">+{item.production.toLocaleString('id-ID')}</span>
                                          </div>
                                          <div className="flex justify-between">
                                            <span className="text-[#8b7e66]">Konsumsi:</span>
                                            <span className="font-black text-rose-700">-{item.consumption.toLocaleString('id-ID')}</span>
                                          </div>
                                          <div className="flex justify-between border-t border-[#C4B49C]/20 mt-1 pt-1">
                                            <span className="font-black text-[#5c3c10]">Netto:</span>
                                            <span className={`font-black ${item.balance >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>{item.balance >= 0 ? '+' : ''}{item.balance.toLocaleString('id-ID')}</span>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        );
                      })
                    ) : (
                      <tr><td colSpan={6} className="px-4 py-6 text-center text-xs font-bold text-[#8b7e66]">{searchQuery ? `Tidak ada negara yang cocok dengan "${searchQuery}"` : 'Tidak ada data tersedia'}</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
              
              {/* FOOTER RINGKASAN */}
              {filteredData.length > 0 && (
                <div className="mt-4 p-4 bg-[#e4dac3]/20 border border-[#C4B49C]/30 rounded-lg text-xs text-[#8b7e66]">
                  <p className="font-bold">📊 Total: {filteredData.length} negara {searchQuery && `(difilter dari ${globalFoodData.length})`}</p>
                  <p className="mt-1">Total Produksi Pangan: <span className="font-black text-emerald-700">{filteredData.reduce((sum, c) => sum + c.production, 0).toLocaleString('id-ID')}</span></p>
                  <p>Total Konsumsi Pangan: <span className="font-black text-rose-700">{filteredData.reduce((sum, c) => sum + c.consumption, 0).toLocaleString('id-ID')}</span></p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}