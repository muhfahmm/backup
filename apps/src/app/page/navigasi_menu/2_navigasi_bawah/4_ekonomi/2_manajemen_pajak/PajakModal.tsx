"use client"
import React, { useState } from "react";
import { X, FileText } from "lucide-react";
import { 
  TAX_CONFIGS,
  calculateIncomeAtRate
} from "@/app/logic/economic_logic/2_tax_logic/taxLogic";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
}

export default function PajakModal({ isOpen, onClose, countryDetail, setCountryDetail }: ModalProps) {
  if (!isOpen) return null;
  
  const [tempRates, setTempRates] = useState<Record<string, number>>({
    income_tax: countryDetail?.income_tax || 45,
    corporate_tax: countryDetail?.corporate || 27,
    vat: countryDetail?.ppn || 15,
    cigarette_tax: countryDetail?.cigarette_tax || 5,
    environment_tax: countryDetail?.environment_tax || 0
  });

  const handleTaxChange = (taxId: string, nextVal: number) => {
    const updatedRates = {
      ...tempRates,
      [taxId]: nextVal
    };
    
    setTempRates(updatedRates);

    // Update country detail with new rates only
    setCountryDetail({
      ...countryDetail,
      income_tax: taxId === "income_tax" ? nextVal : countryDetail.income_tax,
      corporate: taxId === "corporate_tax" ? nextVal : countryDetail.corporate,
      ppn: taxId === "vat" ? nextVal : countryDetail.ppn,
      cigarette_tax: taxId === "cigarette_tax" ? nextVal : countryDetail.cigarette_tax,
      environment_tax: taxId === "environment_tax" ? nextVal : countryDetail.environment_tax
    });
  };

  // Calculate total income from all taxes
  const totalIncome = calculateIncomeAtRate(tempRates.income_tax, 1000) +
                     calculateIncomeAtRate(tempRates.corporate_tax, 1000) +
                     calculateIncomeAtRate(tempRates.vat, 1000) +
                     calculateIncomeAtRate(tempRates.cigarette_tax, 1000) +
                     calculateIncomeAtRate(tempRates.environment_tax, 1000);

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
          <div className="flex items-center gap-3">
            <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <p className="text-xs text-[#8b7e66] font-semibold leading-relaxed mb-6">
            Sesuaikan tarif pajak nasional untuk membiayai belanja militer dan infrastruktur publik. Hati-hati, pajak tinggi memicu protes rakyat!
          </p>

          <div className="space-y-5">
            {/* Pajak Penghasilan Pribadi */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-[#5c3c10] uppercase">
                <span>Pajak Penghasilan Pribadi</span>
                <div className="flex items-center gap-2">
                  <span>{tempRates.income_tax}%</span>
                  <span className="text-emerald-700 font-black">({calculateIncomeAtRate(tempRates.income_tax, 1000).toLocaleString("id-ID")} EM)</span>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={tempRates.income_tax}
                onChange={(e) => handleTaxChange("income_tax", parseInt(e.target.value))}
                className="w-full accent-[#5c3c10] cursor-pointer"
              />
              <p className="text-[10px] text-[#8b7e66]">0% = 0 EM, 100% = 1.000 EM income</p>
            </div>

            {/* Pajak Korporasi */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-[#5c3c10] uppercase">
                <span>Pajak Korporasi</span>
                <div className="flex items-center gap-2">
                  <span>{tempRates.corporate_tax}%</span>
                  <span className="text-emerald-700 font-black">({calculateIncomeAtRate(tempRates.corporate_tax, 1000).toLocaleString("id-ID")} EM)</span>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={tempRates.corporate_tax}
                onChange={(e) => handleTaxChange("corporate_tax", parseInt(e.target.value))}
                className="w-full accent-[#5c3c10] cursor-pointer"
              />
              <p className="text-[10px] text-[#8b7e66]">0% = 0 EM, 100% = 1.000 EM income</p>
            </div>

            {/* Pajak Pertambahan Nilai (PPN) */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-[#5c3c10] uppercase">
                <span>Pajak Pertambahan Nilai (PPN)</span>
                <div className="flex items-center gap-2">
                  <span>{tempRates.vat}%</span>
                  <span className="text-emerald-700 font-black">({calculateIncomeAtRate(tempRates.vat, 1000).toLocaleString("id-ID")} EM)</span>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={tempRates.vat}
                onChange={(e) => handleTaxChange("vat", parseInt(e.target.value))}
                className="w-full accent-[#5c3c10] cursor-pointer"
              />
              <p className="text-[10px] text-[#8b7e66]">0% = 0 EM, 100% = 1.000 EM income</p>
            </div>

            {/* Cukai */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-[#5c3c10] uppercase">
                <span>Cukai</span>
                <div className="flex items-center gap-2">
                  <span>{tempRates.cigarette_tax}%</span>
                  <span className="text-emerald-700 font-black">({calculateIncomeAtRate(tempRates.cigarette_tax, 1000).toLocaleString("id-ID")} EM)</span>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={tempRates.cigarette_tax}
                onChange={(e) => handleTaxChange("cigarette_tax", parseInt(e.target.value))}
                className="w-full accent-[#5c3c10] cursor-pointer"
              />
              <p className="text-[10px] text-[#8b7e66]">0% = 0 EM, 100% = 1.000 EM income</p>
            </div>

            {/* Pajak Lingkungan */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-[#5c3c10] uppercase">
                <span>Pajak Lingkungan</span>
                <div className="flex items-center gap-2">
                  <span>{tempRates.environment_tax}%</span>
                  <span className="text-emerald-700 font-black">({calculateIncomeAtRate(tempRates.environment_tax, 1000).toLocaleString("id-ID")} EM)</span>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={tempRates.environment_tax}
                onChange={(e) => handleTaxChange("environment_tax", parseInt(e.target.value))}
                className="w-full accent-[#5c3c10] cursor-pointer"
              />
              <p className="text-[10px] text-[#8b7e66]">0% = 0 EM, 100% = 1.000 EM income</p>
            </div>
          </div>

          {/* Total Income Summary */}
          <div className="mt-8 p-4 rounded-xl border-3 border-[#5c3c10]/40 bg-gradient-to-r from-emerald-50 to-emerald-100/50 shadow-md">
            <div className="flex justify-between items-center">
              <span className="text-sm font-black text-[#5c3c10] uppercase tracking-widest">Total Pendapatan Pajak</span>
              <span className="text-2xl font-black text-emerald-700">{totalIncome.toLocaleString("id-ID")} EM</span>
            </div>
            <p className="text-[10px] text-emerald-600 font-bold mt-2">Pendapatan bulanan dari semua pajak nasional</p>
          </div>
        </div>
      </div>
    </div>
  );
}
