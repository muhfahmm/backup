"use client"
import React, { useState, useEffect } from "react";
import { X, Send } from "lucide-react";
import { fetchBuildingMetadata } from '@/lib/buildingMetadata';
import { calculateProductionIncrement, formatDate } from '@/app/logic/production_logic';
import { hitungHargaJual } from "../beli/logic/0_harga_barang/harga_jual_logic";
import ModalsKonfirmasiJual from "./modalsKonfirmasiJual";
import { TradePartner } from "../mitra/mitraModalsMenu";

interface CommodityItem {
  key: string;
  nama: string;
  harga: number;
  satuan: string;
  stok?: number;
  isLoading?: boolean;
}

interface JualModalsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
  onConfirm: (biaya: number, kuantitas: string) => void;
  currentDate?: Date;
  partners: TradePartner[];
}

export default function JualModalsMenu({ isOpen, onClose, countryDetail, setCountryDetail, onConfirm, currentDate, partners }: JualModalsMenuProps) {
  const [metadata, setMetadata] = useState<Record<string, any>>({});
  const [loadingMetadata, setLoadingMetadata] = useState(true);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string>("");

  useEffect(() => {
    if (!isOpen) return;
    setLoadingMetadata(true);
    fetchBuildingMetadata().then((data) => setMetadata(data || {})).catch(err => console.error(err)).finally(() => setLoadingMetadata(false));
  }, [isOpen]);

  const ALL_JUAL_KEYS = [
    "uranium", "batu_bara", "minyak_bumi", "gas_alam", "garam", "nikel", "litium", "tembaga", "aluminium", "logam_tanah_jarang", "bijih_besi",
    "semikonduktor", "mobil", "sepeda_motor", "smelter", "semen_beton", "kayu", "pupuk",
    "ayam_unggas", "sapi_perah", "sapi_potong", "domba_kambing",
    "padi", "gandum", "jagung", "sayur", "umbi", "kedelai", "kelapa_sawit", "kopi", "teh", "kakao", "tebu", "karet", "kapas", "tembakau",
    "udang", "mutiara", "ikan",
    "air_mineral", "gula", "roti", "pengolahan_daging", "mie_instan", "minyak_goreng", "susu", "pakan_ternak", "ikan_kaleng", "kopi_teh", "farmasi"
  ];

  const formatLabel = (key: string) => {
    const customLabels: Record<string, string> = {
      pembangkit_listrik_tenaga_nuklir: "PLT Nuklir (PLTN)", pembangkit_listrik_tenaga_air: "PLT Air (PLTA)", pembangkit_listrik_tenaga_surya: "PLT Surya (PLTS)", pembangkit_listrik_tenaga_uap: "PLT Uap (PLTU)", pembangkit_listrik_tenaga_gas: "PLT Gas (PLTG)", pembangkit_listrik_tenaga_angin: "PLT Angin (PLTB)",
    };
    if (customLabels[key]) return customLabels[key];
    return key.replace(/_/g, " ").replace(/\b\w/g, (ch) => ch.toUpperCase());
  };

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

  if (!isOpen) return null;

  const handleGridClick = (key: string) => {
    setSelectedKey(key);
    setIsConfirmOpen(true);
  };

  const generateCommodities = (): CommodityItem[] => {
    if (loadingMetadata || Object.keys(metadata).length === 0) {
      return [{ key: "", nama: "Memuat data komoditas...", harga: 0, satuan: "", isLoading: true }];
    }
    
    return ALL_JUAL_KEYS.map((key) => {
      const bMeta = findMeta(key);
      const nama = formatLabel(key);
      
      const buildingCount = Number(countryDetail?.[key]) || 0;
      let stokTersedia = 0;
      
      if (buildingCount > 0 && bMeta && bMeta.produksi && currentDate) {
        const buildDateKey = `build_date_${key}`;
        const buildDate = countryDetail?.[buildDateKey];
        const currentDateStr = formatDate(currentDate);
        const finalBuildDate = buildDate || currentDateStr;
        stokTersedia = calculateProductionIncrement(bMeta.produksi, buildingCount, finalBuildDate, currentDateStr);
      }
      
      const harga = hitungHargaJual(bMeta?.biaya_pembangunan);
      const unit = bMeta?.satuan || "unit";
      
      return { key, nama, harga, satuan: `Stok: ${stokTersedia.toLocaleString('id-ID')} ${unit}`, stok: stokTersedia };
    });
  };

  const komoditasJual = generateCommodities();

  return (
    <>
      {/* PERBAIKAN: Sembunyikan modal grid jika konfirmasi terbuka, tambahkan max-w-6xl dan h-[84vh] */}
      {isOpen && !isConfirmOpen && (
        <div className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4">
          <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
            
            <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-rose-600/10 rounded-xl border border-rose-600/20"><Send className="h-5 w-5 text-rose-700" /></div>
                <h2 className="text-lg font-bold text-[#5c3c10] tracking-tight uppercase">Jual Komoditas</h2>
              </div>
              <button onClick={onClose} className="p-2 rounded-lg border-2 border-[#C4B49C] text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all cursor-pointer"><X className="h-4 w-4" /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 relative z-10 space-y-4 no-scrollbar">
              <p className="text-xs text-[#8b7e66] font-semibold leading-relaxed mb-4">Pilih komoditas surplus yang ingin dijual. Klik tombol untuk memulai transaksi.</p>

              {/* Grid Daftar Jual (Diperlebar sesuai ukuran modal yang baru) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {komoditasJual.map((item, idx) => (
                  <div key={idx} className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-4 rounded-xl flex flex-col justify-between transition-all">
                    <div className="flex-1">
                      <h4 className="text-xs font-black text-[#5c3c10] uppercase mb-2">{item.isLoading ? "Memuat..." : item.nama}</h4>
                      <div className="flex items-baseline gap-3">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-[#8b7e66] font-semibold">Stok Tersedia:</span>
                          <span className="text-lg font-black text-[#2e261a]">{item.isLoading ? "..." : item.stok?.toLocaleString("id-ID")}</span>
                        </div>
                        <span className="text-[10px] text-[#8b7e66] font-semibold">{item.isLoading ? "" : item.satuan}</span>
                      </div>
                    </div>
                    <button
                      disabled={item.isLoading || (item.stok || 0) < 1000}
                      onClick={() => !item.isLoading && (item.stok || 0) >= 1000 && handleGridClick(item.key)}
                      className={`mt-4 px-5 py-2 rounded-lg text-white text-[10px] font-black uppercase tracking-wide transition-all shadow-sm whitespace-nowrap ${
                        item.isLoading || (item.stok || 0) < 1000
                          ? 'bg-gray-400 cursor-not-allowed opacity-60'
                          : 'bg-rose-700 hover:bg-rose-800 active:bg-rose-900 cursor-pointer'
                      }`}
                    >
                      + {item.isLoading ? "..." : item.harga.toLocaleString("id-ID")}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Konfirmasi Jual */}
      <ModalsKonfirmasiJual
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={onConfirm}
        countryDetail={countryDetail}
        setCountryDetail={setCountryDetail}
        partners={partners}
        initialKey={selectedKey}
        currentDate={currentDate}
      />
    </>
  );
}