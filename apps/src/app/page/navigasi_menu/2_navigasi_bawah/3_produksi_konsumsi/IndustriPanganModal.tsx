"use client"
import React from "react";
import { 
  X, Plus, Beef, Wheat, Fish, Cookie, Utensils 
} from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail?: (detail: any) => void;
  metadata?: any;
  onGotoProduction?: (tab: string, key: string) => void;
}

// Data lengkap 4 Sektor Pangan sesuai data sistem produksi:
// Peternakan (4), Agrikultur (12), Perikanan (3), Olahan Pangan (7)
const FOOD_SECTORS = [
  {
    id: "peternakan",
    label: "🐄 Peternakan",
    icon: Beef,
    items: [
      { key: "ayam_unggas", label: "Daging Ayam", buildingKey: "ayam_unggas", prodPerUnit: 15, consumptionPerCapita: 0.15, tab: "peternakan" },
      { key: "sapi_potong", label: "Daging Sapi", buildingKey: "sapi_potong", prodPerUnit: 5, consumptionPerCapita: 0.08, tab: "peternakan" },
      { key: "sapi_perah", label: "Susu Sapi", buildingKey: "sapi_perah", prodPerUnit: 10, consumptionPerCapita: 0.12, tab: "peternakan" },
      { key: "domba_kambing", label: "Daging Domba", buildingKey: "domba_kambing", prodPerUnit: 7, consumptionPerCapita: 0.05, tab: "peternakan" },
    ]
  },
  {
    id: "agrikultur",
    label: "🌾 Agrikultur",
    icon: Wheat,
    items: [
      { key: "padi", label: "Beras", buildingKey: "padi", prodPerUnit: 20, consumptionPerCapita: 0.35, tab: "agrikultur" },
      { key: "gandum", label: "Gandum", buildingKey: "gandum", prodPerUnit: 18, consumptionPerCapita: 0.24, tab: "agrikultur" },
      { key: "jagung", label: "Jagung", buildingKey: "jagung", prodPerUnit: 22, consumptionPerCapita: 0.18, tab: "agrikultur" },
      { key: "sayur", label: "Sayur Mayur", buildingKey: "sayur", prodPerUnit: 30, consumptionPerCapita: 0.30, tab: "agrikultur" },
      { key: "umbi", label: "Umbi-umbian", buildingKey: "umbi", prodPerUnit: 25, consumptionPerCapita: 0.20, tab: "agrikultur" },
      { key: "kedelai", label: "Kedelai", buildingKey: "kedelai", prodPerUnit: 15, consumptionPerCapita: 0.15, tab: "agrikultur" },
      { key: "kelapa_sawit", label: "Kelapa Sawit", buildingKey: "kelapa_sawit", prodPerUnit: 40, consumptionPerCapita: 0.10, tab: "agrikultur" },
      { key: "kopi", label: "Kopi", buildingKey: "kopi", prodPerUnit: 10, consumptionPerCapita: 0.05, tab: "agrikultur" },
      { key: "teh", label: "Teh", buildingKey: "teh", prodPerUnit: 12, consumptionPerCapita: 0.06, tab: "agrikultur" },
      { key: "kakao", label: "Kakao", buildingKey: "kakao", prodPerUnit: 8, consumptionPerCapita: 0.04, tab: "agrikultur" },
      { key: "tebu", label: "Tebu", buildingKey: "tebu", prodPerUnit: 35, consumptionPerCapita: 0.15, tab: "agrikultur" },
      { key: "karet", label: "Karet Olahan", buildingKey: "karet", prodPerUnit: 15, consumptionPerCapita: 0.02, tab: "agrikultur" },
    ]
  },
  {
    id: "perikanan",
    label: "🐟 Perikanan",
    icon: Fish,
    items: [
      { key: "udang", label: "Udang", buildingKey: "udang", prodPerUnit: 12, consumptionPerCapita: 0.08, tab: "perikanan" },
      { key: "ikan", label: "Ikan Segar", buildingKey: "ikan", prodPerUnit: 25, consumptionPerCapita: 0.25, tab: "perikanan" },
      { key: "mutiara", label: "Mutiara", buildingKey: "mutiara", prodPerUnit: 2, consumptionPerCapita: 0.01, tab: "perikanan" },
    ]
  },
  {
    id: "olahan_pangan",
    label: "🥫 Olahan Pangan",
    icon: Cookie,
    items: [
      { key: "air_mineral", label: "Air Mineral", buildingKey: "air_mineral", prodPerUnit: 25, consumptionPerCapita: 0.35, tab: "olahan pangan" },
      { key: "gula", label: "Gula", buildingKey: "gula", prodPerUnit: 20, consumptionPerCapita: 0.20, tab: "olahan pangan" },
      { key: "roti", label: "Roti", buildingKey: "roti", prodPerUnit: 15, consumptionPerCapita: 0.18, tab: "olahan pangan" },
      { key: "pengolahan_daging", label: "Daging Olahan", buildingKey: "pengolahan_daging", prodPerUnit: 12, consumptionPerCapita: 0.10, tab: "olahan pangan" },
      { key: "mie_instan", label: "Mie Instan", buildingKey: "mie_instan", prodPerUnit: 30, consumptionPerCapita: 0.25, tab: "olahan pangan" },
      { key: "minyak_goreng", label: "Minyak Goreng", buildingKey: "minyak_goreng", prodPerUnit: 10, consumptionPerCapita: 0.10, tab: "olahan pangan" },
      { key: "susu", label: "Susu Olahan", buildingKey: "susu", prodPerUnit: 18, consumptionPerCapita: 0.15, tab: "olahan pangan" },
    ]
  }
];

export default function IndustriPanganModal({ isOpen, onClose, countryDetail, metadata, onGotoProduction }: ModalProps) {
  if (!isOpen) return null;

  const population = Number(countryDetail?.jumlah_penduduk) || 0;

  // Helper untuk mencari metadata bangunan
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

  // Menghitung total produksi suatu item berdasarkan jumlah bangunan
  const calculateProduction = (buildingKey: string, prodPerUnit: number) => {
    const count = Number(countryDetail?.[buildingKey]) || 0;
    const bMeta = findMeta(buildingKey);
    const baseProd = Number(bMeta?.produksi) || prodPerUnit;
    return baseProd * count;
  };

  // Menghitung total konsumsi berdasarkan jumlah penduduk
  const calculateConsumption = (consumptionPerCapita: number) => {
    return Math.round((population / 1000) * consumptionPerCapita);
  };

  const handleBuildClick = (tab: string, buildingKey: string) => {
    if (onGotoProduction) {
      onGotoProduction(tab, buildingKey);
    }
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
              <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">
                Industri Pangan & Konsumsi Masyarakat
              </h2>
              <p className="text-xs text-[#8b7e66] mt-1">
                Neraca produksi dan kebutuhan pasokan makanan nasional
              </p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="flex items-center gap-1.5 p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
          >
            <span className="text-[10px] font-black uppercase tracking-widest">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex-1 min-h-0 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 space-y-6 no-scrollbar">
          {FOOD_SECTORS.map((sector) => (
            <div key={sector.id} className="border-2 border-[#4a7a7a] rounded-2xl overflow-hidden shadow-md bg-white">
              {/* HEADER SEKTOR */}
              <div className="flex items-center gap-3 px-6 py-3.5 bg-[#4a7a7a] border-b border-[#3d6868] text-white">
                <sector.icon className="h-5 w-5 opacity-90" />
                <h4 className="text-sm font-black uppercase tracking-wider">{sector.label} ({sector.items.length} Komoditas)</h4>
              </div>

              {/* GRID ITEM MAKANAN */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e6dcd0]">
                {sector.items.map((item) => {
                  const production = calculateProduction(item.buildingKey, item.prodPerUnit);
                  const consumption = calculateConsumption(item.consumptionPerCapita);
                  const netBalance = production - consumption;

                  return (
                    <div key={item.key} className="bg-[#f7f3e8] p-3.5 flex flex-col gap-2 border-r border-[#C4B49C]/20 last:border-r-0">
                      
                      {/* Baris Atas: Nama Komoditas & Tombol + */}
                      <div className="flex items-center justify-between pb-1 border-b border-[#C4B49C]/20">
                        <span className="text-xs font-black text-[#5c3c10] uppercase tracking-wider">{item.label}</span>
                        {onGotoProduction && (
                          <button
                            onClick={() => handleBuildClick(item.tab, item.buildingKey)}
                            title={`Bangun ${item.label}`}
                            className="p-1 rounded-lg bg-[#5c3c10] text-[#FAF6EE] hover:bg-[#8b7e66] transition-all cursor-pointer shadow-xs"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>

                      {/* Stat Block */}
                      <div className="space-y-1 text-xs">
                        {/* Total Produksi (Warna Hijau) */}
                        <div className="flex justify-between items-center bg-emerald-50/80 px-2 py-1 rounded-md border border-emerald-200/60">
                          <span className="text-[9px] font-bold text-emerald-800 uppercase tracking-tight">Total Produksi</span>
                          <span className="font-black text-emerald-700">+{production.toLocaleString('id-ID')}</span>
                        </div>

                        {/* Total Konsumsi (Warna Merah) */}
                        <div className="flex justify-between items-center bg-rose-50/80 px-2 py-1 rounded-md border border-rose-200/60">
                          <span className="text-[9px] font-bold text-rose-800 uppercase tracking-tight">Total Konsumsi</span>
                          <span className="font-black text-rose-700">-{consumption.toLocaleString('id-ID')}</span>
                        </div>
                      </div>

                      {/* Requirements (Hasil Produksi - Konsumsi) */}
                      <div className="flex justify-between items-center text-[10px] pt-1.5 border-t border-[#C4B49C]/30 mt-0.5">
                        <span className="font-bold text-[#8b7e66] uppercase tracking-wider">Netto:</span>
                        <span className={`font-black text-xs ${netBalance >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                          {netBalance >= 0 ? `+${netBalance.toLocaleString('id-ID')}` : netBalance.toLocaleString('id-ID')}
                        </span>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* RINGKASAN TOTAL POPULASI */}
          <div className="p-4 rounded-xl bg-[#e4dac3]/40 border-2 border-[#C4B49C]/50 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-2 text-[#5c3c10] font-black text-xs uppercase tracking-wider">
              👥 Total Populasi & Kebutuhan Pangan Harian
            </div>
            <div className="px-4 py-1.5 rounded-lg bg-[#5c3c10] text-[#FAF6EE]">
              <span className="text-xs font-black tracking-wider">{population.toLocaleString('id-ID')} Jiwa</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
