"use client"
import React from "react";
import { X, BarChart3, ArrowUpRight } from "lucide-react";

interface IncomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
}

interface IncomeItem {
  label: string;
  amount: number;
}

export default function IncomeModal({ isOpen, onClose, countryDetail }: IncomeModalProps) {
  if (!isOpen) return null;

  const incomeItems: IncomeItem[] = [
    { label: "Reveneu Pajak", amount: 18200000 },
    { label: "Laba Dagang Ekspor", amount: 12400000 }
  ];

  const totalIncome = incomeItems.reduce((sum, item) => sum + item.amount, 0);
  const anggaran = countryDetail?.anggaran || 0;

  return (
    <div className="fixed inset-0 bg-black/65 z-50 flex items-center justify-center p-4">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                <BarChart3 className="h-6 w-6 text-[#5c3c10]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Neraca Pemasukkan & Pengeluaran</h2>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-6 rounded-xl space-y-4">
              <h4 className="text-[10px] text-[#5c3c10] font-black uppercase tracking-wider mb-4">APBN Estimasi Bulanan</h4>
              
              <div className="space-y-3">
                {incomeItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-xs font-bold text-emerald-700 py-2 border-b border-[#C4B49C]/20 last:border-0">
                    <span className="font-semibold">{item.label}</span>
                    <span>+ {item.amount.toLocaleString("id-ID")} EM / bln</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t-2 border-[#C4B49C]/30 mt-4">
                <div className="flex justify-between items-center text-sm font-black text-[#5c3c10]">
                  <span>Total Pemasukkan:</span>
                  <span className="text-emerald-700">+ {totalIncome.toLocaleString("id-ID")} EM / bln</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs font-black text-[#5c3c10] pt-2 px-1">
              <span>Total Saldo Kas Negara:</span>
              <span>{anggaran.toLocaleString("id-ID")} EM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
