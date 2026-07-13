"use client"
import React, { useState, useEffect } from "react";
import { X, ShoppingCart } from "lucide-react";
import { fetchBuildingMetadata } from '../../../../../../../lib/buildingMetadata';

// INTERFACE: Memberikan tipe data yang jelas supaya tidak error TS
interface CommodityItem {
  key: string;
  nama: string;
  harga: number;
  satuan: string;
  isLoading?: boolean;
}

interface BeliModalsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
  onConfirm: (biaya: number, kuantitas: string) => void;
}

export default function BeliModalsMenu({ isOpen, onClose, countryDetail, setCountryDetail, onConfirm }: BeliModalsMenuProps) {
  const [metadata, setMetadata] = useState<Record<string, any>>({});
  const [loadingMetadata, setLoadingMetadata] = useState(true);

  useEffect(() => {
    if (!isOpen) return;
    setLoadingMetadata(true);
    fetchBuildingMetadata()
      .then((data: any) => setMetadata(data || {}))
      .catch((err: any) => console.error("Gagal load metadata impor:", err))
      .finally(() => setLoadingMetadata(false));
  }, [isOpen]);

  if (!isOpen) return null;

  const anggaran = countryDetail?.anggaran || 0;

  // Logika pengambilan data dari Mineral (kecuali emas) hingga Farmasi
  const ALL_IMPORT_KEYS = [
    // Mineral & Energi (KECUALI EMAS)
    "uranium", "batu_bara", "minyak_bumi", "gas_alam", "garam", "nikel", "litium", "tembaga", "aluminium", "logam_tanah_jarang", "bijih_besi",
    // Manufaktur
    "semikonduktor", "mobil", "sepeda_motor", "smelter", "semen_beton", "kayu", "pupuk",
    // Peternakan
    "ayam_unggas", "sapi_perah", "sapi_potong", "domba_kambing",
    // Agrikultur
    "padi", "gandum", "jagung", "sayur", "umbi", "kedelai", "kelapa_sawit", "kopi", "teh", "kakao", "tebu", "karet", "kapas", "tembakau",
    // Perikanan
    "udang", "mutiara", "ikan",
    // Olahan Pangan
    "air_mineral", "gula", "roti", "pengolahan_daging", "mie_instan", "minyak_goreng", "susu", "pakan_ternak", "ikan_kaleng", "kopi_teh",
    // Farmasi
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

  const handleBeli = (key: string, nama: string, harga: number, satuan: string) => {
    if (anggaran < harga) {
      alert(`Kas Negara tidak mencukupi untuk mengimpor ${nama}!`);
      return;
    }

    setCountryDetail({
      ...countryDetail,
      anggaran: anggaran - harga
    });

    onConfirm(harga, satuan);
    alert(`Berhasil mengimpor ${nama}! Kas Negara berkurang ${harga.toLocaleString("id-ID")} EM.`);
    onClose();
  };

  // Generate data komoditas dengan tipe data yang jelas
  const generateCommodities = (): CommodityItem[] => {
    if (loadingMetadata || Object.keys(metadata).length === 0) {
      return [{ key: "", nama: "Memuat data komoditas...", harga: 0, satuan: "", isLoading: true }];
    }
    return ALL_IMPORT_KEYS.map((key) => {
      const meta = metadata[key];
      const nama = formatLabel(key);
      const harga = meta?.biaya_pembangunan ? Math.round(meta.biaya_pembangunan * 5) : 10000000;
      return { key, nama, harga, satuan: "1x Satuan" };
    });
  };

  const komoditasImpor = generateCommodities();

  return (
    <div className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl flex flex-col relative font-sans">
        {/* ... Bagian UI tetap sama seperti kode Anda sebelumnya ... */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        <div className="px-6 py-5 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-600/10 rounded-xl border border-emerald-600/20">
              <ShoppingCart className="h-5 w-5 text-emerald-700" />
            </div>
            <h2 className="text-lg font-bold text-[#5c3c10] tracking-tight uppercase">Impor Komoditas</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg border-2 border-[#C4B49C] text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all cursor-pointer"><X className="h-4 w-4" /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 relative z-10 space-y-3 no-scrollbar">
          <p className="text-xs text-[#8b7e66] font-semibold leading-relaxed mb-4">Pilih komoditas yang ingin diimpor dari pasar internasional. Biaya akan langsung dipotong dari Kas Negara.</p>

          {komoditasImpor.map((item, idx) => (
            <div key={idx} className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-4 rounded-xl flex items-center justify-between">
              <div>
                <h4 className="text-xs font-black text-[#5c3c10] uppercase mb-1">{item.isLoading ? "Memuat..." : item.nama}</h4>
                <p className="text-[10px] text-[#8b7e66] font-semibold">{item.satuan}</p>
              </div>
              <button
                disabled={item.isLoading}
                onClick={() => !item.isLoading && handleBeli(item.key, item.nama, item.harga, item.satuan)}
                className={`px-5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-[10px] font-black uppercase tracking-wide cursor-pointer transition-all shadow-sm whitespace-nowrap transition-colors duration-200 ease-in-out ${item.isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                - {item.isLoading ? '...' : item.harga.toLocaleString("id-ID")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}