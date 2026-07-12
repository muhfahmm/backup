"use client"
import React, { useState, useEffect } from "react";
import { X, Send } from "lucide-react";
import { fetchBuildingMetadata } from '@/lib/buildingMetadata';
import { calculateProductionIncrement, formatDate } from '@/app/logic/production_logic';

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
  currentDate?: Date; // WAJIB ditambahkan!
}

export default function JualModalsMenu({ isOpen, onClose, countryDetail, setCountryDetail, onConfirm, currentDate }: JualModalsMenuProps) {
  const [metadata, setMetadata] = useState<Record<string, any>>({});
  const [loadingMetadata, setLoadingMetadata] = useState(true);

  useEffect(() => {
    if (!isOpen) return;
    setLoadingMetadata(true);
    fetchBuildingMetadata()
      .then((data: any) => setMetadata(data || {}))
      .catch((err: any) => console.error("Gagal load metadata ekspor:", err))
      .finally(() => setLoadingMetadata(false));
  }, [isOpen]);

  const ALL_EXPORT_KEYS = [
    "uranium", "batu_bara", "minyak_bumi", "gas_alam", "garam", "nikel", "litium", "tembaga", "aluminium", "logam_tanah_jarang", "bijih_besi",
    "semikonduktor", "mobil", "sepeda_motor", "smelter", "semen_beton", "kayu", "pupuk",
    "ayam_unggas", "sapi_perah", "sapi_potong", "domba_kambing",
    "padi", "gandum", "jagung", "sayur", "umbi", "kedelai", "kelapa_sawit", "kopi", "teh", "kakao", "tebu", "karet", "kapas", "tembakau",
    "udang", "mutiara", "ikan",
    "air_mineral", "gula", "roti", "pengolahan_daging", "mie_instan", "minyak_goreng", "susu", "pakan_ternak", "ikan_kaleng", "kopi_teh",
    "farmasi"
  ];

  const formatLabel = (key: string) => {
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

  const calculateStockpile = (resourceKey: string): number => {
    const buildingCount = Number(countryDetail?.[resourceKey]) || 0;
    if (buildingCount === 0) return 0;
    const bMeta = findMeta(resourceKey);
    if (!bMeta || !bMeta.produksi) return 0;
    if (!currentDate) return 0;

    const buildDateKey = `build_date_${resourceKey}`;
    const buildDate = countryDetail?.[buildDateKey];
    const currentDateStr = formatDate(currentDate);
    const finalBuildDate = buildDate || currentDateStr;

    return calculateProductionIncrement(
      bMeta.produksi,
      buildingCount,
      finalBuildDate,
      currentDateStr
    );
  };

  if (!isOpen) return null;

  const anggaran = countryDetail?.anggaran || 0;
  const BATCH_SIZE = 1000;

  const handleJual = (key: string, nama: string, harga: number, satuan: string) => {
    const stokTersedia = calculateStockpile(key);
    if (stokTersedia < BATCH_SIZE) {
      alert(`Stok ${nama} tidak mencukupi! Minimal ${BATCH_SIZE.toLocaleString("id-ID")} unit harus tersedia untuk diekspor.`);
      return;
    }

    const accumulatedKey = `accumulated_${key}`;
    const currentAccumulated = Number(countryDetail?.[accumulatedKey] || stokTersedia);
    const newAccumulated = Math.max(0, currentAccumulated - BATCH_SIZE);

    setCountryDetail({
      ...countryDetail,
      anggaran: anggaran + harga,
      [accumulatedKey]: newAccumulated
    });

    onConfirm(harga, satuan);
    alert(`Berhasil mengekspor 1 batch ${nama}! Kas Negara bertambah ${harga.toLocaleString("id-ID")} EM.`);
    onClose();
  };

  const generateCommodities = (): CommodityItem[] => {
    if (loadingMetadata || Object.keys(metadata).length === 0) {
      return [{ key: "", nama: "Memuat data komoditas...", harga: 0, satuan: "", isLoading: true }];
    }
    return ALL_EXPORT_KEYS.map((key) => {
      const meta = metadata[key];
      const nama = formatLabel(key);
      const stokTersedia = calculateStockpile(key);
      const harga = meta?.biaya_pembangunan ? Math.round(meta.biaya_pembangunan * 2) : 5000000;
      return { key, nama, harga, satuan: `1x Batch (${BATCH_SIZE.toLocaleString("id-ID")} unit)`, stok: stokTersedia };
    });
  };

  const komoditasEkspor = generateCommodities();

  return (
    <div className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl flex flex-col relative font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        <div className="px-6 py-5 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-rose-600/10 rounded-xl border border-rose-600/20">
              <Send className="h-5 w-5 text-rose-700" />
            </div>
            <h2 className="text-lg font-bold text-[#5c3c10] tracking-tight uppercase">Ekspor Komoditas</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg border-2 border-[#C4B49C] text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all cursor-pointer"><X className="h-4 w-4" /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 relative z-10 space-y-3 no-scrollbar">
          <p className="text-xs text-[#8b7e66] font-semibold leading-relaxed mb-4">Pilih komoditas surplus yang ingin diekspor ke pasar internasional. Hasil penjualan akan langsung masuk ke Kas Negara.</p>

          {komoditasEkspor.map((item, idx) => (
            <div key={idx} className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-4 rounded-xl flex items-center justify-between">
              <div>
                <h4 className="text-xs font-black text-[#5c3c10] uppercase mb-1">{item.isLoading ? "Memuat..." : item.nama}</h4>
                <p className="text-[10px] text-[#8b7e66] font-semibold">{item.isLoading ? "" : `Stok Tersedia: ${item.stok?.toLocaleString("id-ID")} unit`} • {item.satuan}</p>
              </div>
              <button
                disabled={item.isLoading}
                onClick={() => !item.isLoading && handleJual(item.key, item.nama, item.harga, item.satuan)}
                className={`px-5 py-2 rounded-lg bg-rose-700 hover:bg-rose-800 active:bg-rose-900 text-white text-[10px] font-black uppercase tracking-wide cursor-pointer transition-all shadow-sm whitespace-nowrap ${item.isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                + {item.isLoading ? '...' : item.harga.toLocaleString("id-ID")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}