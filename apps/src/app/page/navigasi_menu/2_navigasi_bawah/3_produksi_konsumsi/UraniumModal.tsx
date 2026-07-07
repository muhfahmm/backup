"use client"
import React from "react";
import { X, Radiation } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
}

export default function UraniumModal({ isOpen, onClose, countryDetail, setCountryDetail }: ModalProps) {
  if (!isOpen) return null;
  const anggaran = countryDetail?.anggaran || 0;

  const handleEnrich = () => {
    if (anggaran < 120000000) {
      alert("Kas negara tidak mencukupi untuk melakukan pengayaan uranium!");
      return;
    }
    setCountryDetail({
      ...countryDetail,
      anggaran: anggaran - 120000000,
      kepuasan: Math.min(100, (countryDetail?.kepuasan || 65.0) + 7.5)
    });
    alert("Pengayaan Reaktor Uranium Nuklir Berhasil (+7.5% Kepuasan)!");
  };

  return (
            <div className="fixed inset-0 bg-black/65 z-50 flex items-center justify-center p-4">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
          <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
          <X className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-3 border-b border-[#C4B49C]/30 pb-3 mb-4">
          <Radiation className="h-6 w-6 text-emerald-600 animate-spin animate-infinite" style={{ animationDuration: '8s' }} />
          <h3 className="text-lg font-black text-[#5c3c10] uppercase">☢ Sektor Uranium & Nuklir</h3>
        </div>
        <p className="text-xs text-[#8b7e66] font-semibold leading-relaxed mb-6">
          Kelola program pengayaan bahan radioaktif uranium sipil untuk sumber daya listrik nuklir super efisien.
        </p>
        <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-4 rounded-xl mb-6">
          <div className="flex justify-between text-xs font-bold text-[#5c3c10] mb-2">
            <span>Kemurnian Bahan:</span>
            <span>U-235 (Enriched 3.5%)</span>
          </div>
          <div className="flex justify-between text-xs font-bold text-[#5c3c10]">
            <span>Kas Anggaran Negara:</span>
            <span>{anggaran.toLocaleString("id-ID")}</span>
          </div>
        </div>
        <button
          onClick={handleEnrich}
          className="w-full py-3 rounded-xl bg-gradient-to-b from-[#ffe07d] via-[#fcae1e] to-[#c77a00] text-[#5c3c10] border-2 border-[#1e2f3d]/15 shadow-sm text-xs font-black uppercase cursor-pointer"
        >
          Mulai Pengayaan Uranium (120.000.000 EM)
        </button>
      </div>
    </div>
  );
}
