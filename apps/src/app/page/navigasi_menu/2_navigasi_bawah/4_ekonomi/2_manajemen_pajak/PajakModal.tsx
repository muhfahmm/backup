"use client"
import React from "react";
import { X, FileText } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
}

export default function PajakModal({ isOpen, onClose, countryDetail, setCountryDetail }: ModalProps) {
  if (!isOpen) return null;
  const anggaran = countryDetail?.anggaran || 0;
  const kepuasan = countryDetail?.kepuasan || 65.0;

  const ppnRate = countryDetail?.ppn || 10;
  const corpRate = countryDetail?.corporate || 22;
  const incomeRate = countryDetail?.income_tax || 15;

  const handleTaxChange = (type: "ppn" | "corp" | "income", nextVal: number) => {
    let diff = nextVal - (type === "ppn" ? ppnRate : type === "corp" ? corpRate : incomeRate);
    let nextKepuasan = parseFloat(Math.min(100, Math.max(0, kepuasan - diff * 0.8)).toFixed(1));
    let nextAnggaran = anggaran + diff * 1200000;

    setCountryDetail({
      ...countryDetail,
      [type === "ppn" ? "ppn" : type === "corp" ? "corporate" : "income_tax"]: nextVal,
      anggaran: nextAnggaran,
      kepuasan: nextKepuasan
    });
  };

  return (
            <div className="fixed inset-0 bg-black/65 z-50 flex items-center justify-center p-4">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                <FileText className="h-6 w-6 text-[#5c3c10]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Kebijakan Perpajakan Fiskal</h2>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <p className="text-xs text-[#8b7e66] font-semibold leading-relaxed mb-6">
            Sesuaikan tarif pajak nasional untuk membiayai belanja militer dan infrastruktur publik. Hati-hati, pajak tinggi memicu protes rakyat!
          </p>

          <div className="space-y-5">
            {/* PPN */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-[#5c3c10] uppercase">
                <span>Pajak Pertambahan Nilai (PPN)</span>
                <span>{ppnRate}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="25"
                value={ppnRate}
                onChange={(e) => handleTaxChange("ppn", parseInt(e.target.value))}
                className="w-full accent-[#5c3c10] cursor-pointer"
              />
            </div>

            {/* Corp Tax */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-[#5c3c10] uppercase">
                <span>Pajak Korporasi</span>
                <span>{corpRate}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="35"
                value={corpRate}
                onChange={(e) => handleTaxChange("corp", parseInt(e.target.value))}
                className="w-full accent-[#5c3c10] cursor-pointer"
              />
            </div>

            {/* Income Tax */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-[#5c3c10] uppercase">
                <span>Pajak Penghasilan (PPh)</span>
                <span>{incomeRate}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                value={incomeRate}
                onChange={(e) => handleTaxChange("income", parseInt(e.target.value))}
                className="w-full accent-[#5c3c10] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
