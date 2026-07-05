"use client"
import React from "react";
import { X, Droplet } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
}

export default function PerminyakanModal({ isOpen, onClose, countryDetail, setCountryDetail }: ModalProps) {
  if (!isOpen) return null;
  const anggaran = countryDetail?.anggaran || 0;

  const handleDrill = () => {
    if (anggaran < 60000000) {
      alert("Kas negara tidak mencukupi untuk melakukan eksplorasi minyak!");
      return;
    }
    setCountryDetail({
      ...countryDetail,
      anggaran: anggaran - 60000000,
      kepuasan: Math.min(100, (countryDetail?.kepuasan || 65.0) + 4.5)
    });
    alert("Eksplorasi Kilang Minyak Baru Berhasil (+4.5% Kepuasan)!");
  };

  return (
        <div className="fixed inset-0 bg-black/65 z-50 flex items-center justify-center p-4">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
          <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
          <X className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-3 border-b border-[#C4B49C]/30 pb-3 mb-4">
          <Droplet className="h-6 w-6 text-blue-600 animate-bounce" />
          <h3 className="text-lg font-black text-[#5c3c10] uppercase">🛢️ Sektor Perminyakan Nasional</h3>
        </div>
        <p className="text-xs text-[#8b7e66] font-semibold leading-relaxed mb-6">
          Kelola cadangan bahan bakar fosil dan eksplorasi minyak mentah lepas pantai untuk kemandirian pasokan bahan bakar nasional.
        </p>
        <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-4 rounded-xl mb-6">
          <div className="flex justify-between text-xs font-bold text-[#5c3c10] mb-2">
            <span>Produksi Harian:</span>
            <span>42,000 Barel</span>
          </div>
          <div className="flex justify-between text-xs font-bold text-[#5c3c10]">
            <span>Kas Anggaran Negara:</span>
            <span>Rp {anggaran.toLocaleString("id-ID")}</span>
          </div>
        </div>
        <button
          onClick={handleDrill}
          className="w-full py-3 rounded-xl bg-gradient-to-b from-[#ffe07d] via-[#fcae1e] to-[#c77a00] text-[#5c3c10] border-2 border-[#1e2f3d]/15 shadow-sm text-xs font-black uppercase cursor-pointer"
        >
          Eksplorasi Kilang Lepas Pantai (Rp 60.000.000)
        </button>
      </div>
    </div>
  );
}
