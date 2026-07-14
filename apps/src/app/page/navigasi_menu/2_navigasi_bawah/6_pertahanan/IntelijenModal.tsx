"use client"
import React from "react";
import { X, Eye } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
}

export default function IntelijenModal({ isOpen, onClose, countryDetail, setCountryDetail }: ModalProps) {
  if (!isOpen) return null;
  const anggaran = countryDetail?.anggaran || 0;

  const handleIntel = () => {
    if (anggaran < 10000000) {
      alert("Kas negara tidak mencukupi!");
      return;
    }
    setCountryDetail({
      ...countryDetail,
      anggaran: anggaran - 10000000
    });
    alert("Misi intelijen 'Sandi Garuda' sukses diluncurkan di wilayah perbatasan!");
  };

  return (
    // PERBAIKAN: Hapus bg-black/65
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      
      {/* PERBAIKAN: Tambahkan pointer-events-auto */}
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Eye className="h-6 w-6 text-indigo-700 animate-pulse" />
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Badan Intelijen & Sandi Negara</h2>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <p className="text-xs text-[#8b7e66] font-semibold leading-relaxed mb-6">
            Kirim agen telik sandi kepresidenan untuk memetakan penyusupan jaringan teroris regional atau melakukan penyadapan kedaulatan negara asing.
          </p>

          <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-4 rounded-xl mb-6">
            <div className="flex justify-between text-xs font-bold text-[#5c3c10]">
              <span>Kas Anggaran Negara:</span>
              <span>{anggaran.toLocaleString("id-ID")}</span>
            </div>
          </div>

          <button
            onClick={handleIntel}
            className="w-full py-3 rounded-xl bg-[#5c3c10] text-[#FAF6EE] border-2 border-[#1e2f3d]/15 shadow-sm text-xs font-black uppercase cursor-pointer"
          >
            Luncurkan Misi Intelijen (10.000.000 EM)
          </button>
        </div>
      </div>
    </div>
  );
}