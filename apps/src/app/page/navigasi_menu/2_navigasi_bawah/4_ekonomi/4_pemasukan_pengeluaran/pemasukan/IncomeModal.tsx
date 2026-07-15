"use client"
import React from "react";
import { X, BarChart3, ArrowUpRight } from "lucide-react";
import { calculateIncomeAtRate } from "@/app/logic/economic_logic/2_tax_logic/taxLogic";
import { calculateGoldMiningDailyProduction } from "@/app/logic/economic_logic/goldIncome";

interface IncomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  selectedCountry: any;
}

interface IncomeItem {
  label: string;
  amount: number;
  subtitle?: string;
  displayAmount?: string;
}

// Helper function to calculate total tax income (daily)
const calculateTotalTaxIncome = (countryDetail: any) => {
  const income_tax = countryDetail?.income_tax || 15;
  const corporate_tax = countryDetail?.corporate || 22;
  const vat = countryDetail?.ppn || 10;
  const cigarette_tax = countryDetail?.cigarette_tax || 15;
  const environment_tax = countryDetail?.environment_tax || 5;

  return (
    calculateIncomeAtRate(income_tax, 1000) +
    calculateIncomeAtRate(corporate_tax, 1000) +
    calculateIncomeAtRate(vat, 1000) +
    calculateIncomeAtRate(cigarette_tax, 1000) +
    calculateIncomeAtRate(environment_tax, 1000)
  );
};

// Helper function to calculate tourism income (fallback tanpa getTourismAttractions)
const calculateTourismIncome = (countryDetail: any) => {
  const hotels = Number(countryDetail?.hotel) || 0;
  const malls = Number(countryDetail?.mall) || 0;
  const tourismBuildings = hotels + malls;

  if (tourismBuildings > 0) {
    return tourismBuildings * 25000; // pendapatan harian per bangunan
  }

  if (typeof countryDetail?.tourism_income === "number") {
    return countryDetail.tourism_income;
  }

  return 0;
};

export default function IncomeModal({ isOpen, onClose, countryDetail }: IncomeModalProps) {
  if (!isOpen) return null;

  // Hitung pendapatan harian
  const taxRevenue = calculateTotalTaxIncome(countryDetail);
  const tourismIncome = calculateTourismIncome(countryDetail);
  const goldBuildingCount = Number(countryDetail?.emas) || 0;
  const goldDailyProduction = calculateGoldMiningDailyProduction(countryDetail);

  const incomeItems: IncomeItem[] = [
    { label: "Revenue Pajak", amount: taxRevenue },
    {
      label: goldBuildingCount > 0
        ? `Produksi Tambang Emas (${goldDailyProduction.toLocaleString('id-ID')})`
        : "Produksi Tambang Emas",
      amount: goldDailyProduction,
      displayAmount: goldBuildingCount > 0
        ? `+ ${goldDailyProduction.toLocaleString('id-ID')}`
        : undefined,
      subtitle:
        goldBuildingCount > 0
          ? `600 × ${goldBuildingCount.toLocaleString('id-ID')} bangunan = ${goldDailyProduction.toLocaleString('id-ID')}`
          : undefined
    }
  ];

  const totalIncome = incomeItems.reduce((sum, item) => sum + item.amount, 0);
  const anggaran = countryDetail?.anggaran || 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
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
              <h4 className="text-[10px] text-[#5c3c10] font-black uppercase tracking-wider mb-4">APBN Estimasi Harian</h4>
              
              <div className="space-y-3">
                {incomeItems.map((item, index) => (
                  <div key={index} className="border-b border-[#C4B49C]/20 last:border-0 pb-2">
                    <div className="flex justify-between items-center text-xs font-bold text-emerald-700 py-2">
                      <span className="font-semibold">{item.label}</span>
                      <span>{item.displayAmount ?? `+ ${item.amount.toLocaleString("id-ID")}`}</span>
                    </div>
                    {item.subtitle && (
                      <div className="text-[10px] text-[#5c3c10] pl-1 pb-2">
                        {item.subtitle}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t-2 border-[#C4B49C]/30 mt-4">
                <div className="flex justify-between items-center text-sm font-black text-[#5c3c10]">
                  <span>Total Pemasukkan Harian:</span>
                  <span className="text-emerald-700">+ {totalIncome.toLocaleString("id-ID")}</span>
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