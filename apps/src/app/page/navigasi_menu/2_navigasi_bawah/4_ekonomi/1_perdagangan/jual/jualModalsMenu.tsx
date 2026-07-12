"use client"
import React from "react";
import { X, Send } from "lucide-react";

interface JualModalsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
  onConfirm: (biaya: number, kuantitas: string) => void;
}

export default function JualModalsMenu({ isOpen, onClose, countryDetail, setCountryDetail, onConfirm }: JualModalsMenuProps) {
  if (!isOpen) return null;

  const anggaran = countryDetail?.anggaran || 0;

  const komoditasEkspor = [
    { nama: "Batubara & Emas", harga: 42000000, satuan: "1x Kargo" },
    { nama: "Minyak Kelapa Sawit", harga: 28000000, satuan: "1x Tanker" },
    { nama: "Hasil Tambang Mineral", harga: 35000000, satuan: "1x Kontainer" }
  ];

  const handleJual = (nama: string, harga: number, satuan: string) => {
    setCountryDetail({
      ...countryDetail,
      anggaran: anggaran + harga
    });

    onConfirm(harga, satuan);
    alert(`Berhasil mengekspor ${nama}! Kas Negara bertambah ${harga.toLocaleString("id-ID")} EM.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl flex flex-col relative font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        {/* Header */}
        <div className="px-6 py-5 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-rose-600/10 rounded-xl border border-rose-600/20">
              <Send className="h-5 w-5 text-rose-700" />
            </div>
            <h2 className="text-lg font-bold text-[#5c3c10] tracking-tight uppercase">Ekspor Komoditas</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg border-2 border-[#C4B49C] text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 relative z-10 space-y-3 no-scrollbar">
          <p className="text-xs text-[#8b7e66] font-semibold leading-relaxed mb-4">
            Pilih komoditas surplus yang ingin diekspor ke pasar internasional. Hasil penjualan akan langsung masuk ke Kas Negara.
          </p>

          {komoditasEkspor.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-4 rounded-xl flex items-center justify-between"
            >
              <div>
                <h4 className="text-xs font-black text-[#5c3c10] uppercase mb-1">{item.nama}</h4>
                <p className="text-[10px] text-[#8b7e66] font-semibold">{item.satuan}</p>
              </div>
              <button
                onClick={() => handleJual(item.nama, item.harga, item.satuan)}
                className="px-5 py-2 rounded-lg bg-rose-700 hover:bg-rose-800 active:bg-rose-900 text-white text-[10px] font-black uppercase tracking-wide cursor-pointer transition-all shadow-sm whitespace-nowrap"
              >
                + {item.harga.toLocaleString("id-ID")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}