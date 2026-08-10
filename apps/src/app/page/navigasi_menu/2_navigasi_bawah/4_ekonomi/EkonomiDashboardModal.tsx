"use client";

import React from "react";
import { X, Wallet, FileText, CreditCard, BarChart3, TrendingUp, Tag, ArrowRight } from "lucide-react";
import {
  calculateTotalTaxIncome,
  calculateGoldIncome,
  calculateMinistryCost,
} from "@/app/logic/economic_logic/treasuryUpdater";
import {
  calculateSectoralSatisfaction,
} from "@/app/logic/populations_logic/population_logic";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveMenu: (menu: string) => void;
  countryDetail: any;
  selectedCountry: any;
}

interface EconomicCard {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  menuId: string;
  getValue?: () => string | number;
  getSecondaryValue?: () => string | number;
}

export default function EkonomiDashboardModal({
  isOpen,
  onClose,
  setActiveMenu,
  countryDetail,
  selectedCountry,
}: ModalProps) {
  if (!isOpen) return null;

  const anggaran = countryDetail?.anggaran || 0;
  const totalHutang = countryDetail?.totalHutang || 0;
  const taxRevenue = calculateTotalTaxIncome(countryDetail);
  const goldIncome = calculateGoldIncome(countryDetail);
  const ministryCostPerDay = calculateMinistryCost(countryDetail);
  const sektoral = calculateSectoralSatisfaction(countryDetail);

  // Define economic cards
  const economicCards: EconomicCard[] = [
    {
      id: "pajak",
      title: "Manajemen Pajak",
      icon: <FileText className="h-8 w-8" />,
      description: "Kelola tarif pajak nasional (PPN, Korporasi, Penghasilan, dll)",
      menuId: "Menu:Pajak",
      getValue: () => `${taxRevenue.toLocaleString("id-ID")} EM`,
      getSecondaryValue: () => `Kepuasan: ${Math.round(sektoral.pajak)}%`,
    },
    {
      id: "harga",
      title: "Harga Barang Pokok",
      icon: <Tag className="h-8 w-8" />,
      description: "Stabilkan harga beras, minyak goreng, daging di pasar",
      menuId: "Menu:Harga",
      getValue: () => `Kepuasan: ${Math.round(sektoral.harga)}%`,
      getSecondaryValue: () => "Status Kontrol Harga",
    },
    {
      id: "hutang",
      title: "Pinjaman & Hutang",
      icon: <CreditCard className="h-8 w-8" />,
      description: "Kelola pinjaman bilateral & multilateral negara",
      menuId: "Menu:Hutang",
      getValue: () => `${totalHutang.toLocaleString("id-ID")} EM`,
      getSecondaryValue: () => "Total Hutang Nasional",
    },
    {
      id: "budget",
      title: "Pemasukkan & Pengeluaran",
      icon: <BarChart3 className="h-8 w-8" />,
      description: "Pantau aliran kas dan APBN nasional secara real-time",
      menuId: "Menu:Budget",
      getValue: () => `${anggaran.toLocaleString("id-ID")} EM`,
      getSecondaryValue: () => "Saldo Kas Negara",
    },
    {
      id: "pdb",
      title: "PDB Nasional & Dunia",
      icon: <TrendingUp className="h-8 w-8" />,
      description: "Analisis pertumbuhan ekonomi nasional vs dunia",
      menuId: "Menu:PDB",
      getValue: () => "Monitoring",
      getSecondaryValue: () => "Status PDB",
    },
    {
      id: "perdagangan",
      title: "Perdagangan Internasional",
      icon: <ArrowRight className="h-8 w-8" />,
      description: "Kelola ekspor-impor dan hubungan perdagangan bilateral",
      menuId: "Menu:Perdagangan",
      getValue: () => "Multi-Negara",
      getSecondaryValue: () => "Kemitraan Dagang",
    },
  ];

  const handleCardClick = (menuId: string) => {
    setActiveMenu(menuId);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        {/* Header */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
              <Wallet className="h-6 w-6 text-[#5c3c10]" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#5c3c10] tracking-tight leading-none uppercase">
                Dashboard Ekonomi
              </h2>
              <p className="text-xs text-[#8b7e66] font-semibold mt-1">
                {selectedCountry?.country || "Indonesia"} - Kelola ekonomi nasional
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
          >
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Summary Bar */}
        <div className="px-8 py-4 bg-[#e4dac3]/20 border-b border-[#C4B49C]/20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#FAF6EE]/80 border-2 border-[#C4B49C]/30 p-3 rounded-xl flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <TrendingUp className="h-5 w-5 text-emerald-700" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] text-[#8b7e66] font-black uppercase tracking-wider">Kas Negara</p>
                <p className="text-sm font-black text-emerald-700 truncate">
                  {anggaran.toLocaleString("id-ID")} EM
                </p>
              </div>
            </div>

            <div className="bg-[#FAF6EE]/80 border-2 border-[#C4B49C]/30 p-3 rounded-xl flex items-center gap-3">
              <div className="p-2 bg-amber-500/10 rounded-lg">
                <FileText className="h-5 w-5 text-amber-700" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] text-[#8b7e66] font-black uppercase tracking-wider">Revenue Pajak</p>
                <p className="text-sm font-black text-amber-700 truncate">
                  {taxRevenue.toLocaleString("id-ID")} EM
                </p>
              </div>
            </div>

            <div className="bg-[#FAF6EE]/80 border-2 border-[#C4B49C]/30 p-3 rounded-xl flex items-center gap-3">
              <div className="p-2 bg-rose-500/10 rounded-lg">
                <CreditCard className="h-5 w-5 text-rose-700" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] text-[#8b7e66] font-black uppercase tracking-wider">Total Hutang</p>
                <p className="text-sm font-black text-rose-700 truncate">
                  {totalHutang.toLocaleString("id-ID")} EM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {economicCards.map((card) => (
              <button
                key={card.id}
                onClick={() => handleCardClick(card.menuId)}
                className="group bg-[#FAF6EE] border-2 border-[#C4B49C]/50 rounded-2xl p-6 hover:border-[#5c3c10] hover:shadow-lg transition-all duration-300 cursor-pointer text-left relative overflow-hidden active:bg-[#e4dac3]/30"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5c3c10]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="p-3 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20 w-fit mb-3 group-hover:bg-[#5c3c10]/15 transition-colors">
                    <div className="text-[#5c3c10]">{card.icon}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-black text-[#5c3c10] uppercase tracking-wide mb-2">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#8b7e66] font-semibold leading-relaxed mb-4">
                    {card.description}
                  </p>

                  {/* Value Display */}
                  {card.getValue && (
                    <div className="mb-3">
                      <p className="text-[9px] text-[#8b7e66] font-black uppercase tracking-wider mb-1">
                        {card.getSecondaryValue?.()}
                      </p>
                      <p className="text-lg font-black text-[#2e261a]">
                        {card.getValue()}
                      </p>
                    </div>
                  )}

                  {/* Arrow indicator */}
                  <div className="flex items-center gap-2 text-[#5c3c10] group-hover:gap-3 transition-all">
                    <span className="text-xs font-black uppercase tracking-widest">Buka</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-8 p-5 bg-[#e4dac3]/30 border-2 border-[#C4B49C]/40 rounded-2xl flex items-start gap-4">
            <div className="p-2 bg-[#5c3c10]/10 rounded-lg">
              <BarChart3 className="h-5 w-5 text-[#5c3c10]" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-black text-[#5c3c10] uppercase tracking-wide mb-1">
                Catatan Manajemen Ekonomi
              </h4>
              <p className="text-xs text-[#8b7e66] font-bold leading-relaxed">
                Kelola berbagai aspek ekonomi nasional dari satu dashboard. Setiap kartu membuka modal detail untuk kontrol 
                lebih mendalam. Monitor kesehatan ekonomi real-time melalui indikator kas negara, revenue pajak, dan total hutang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
