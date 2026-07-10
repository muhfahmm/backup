"use client"
import React, { useState } from "react";
import { X, BarChart3, ArrowDownRight } from "lucide-react";

interface OutcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
}

interface OutcomeItem {
  label: string;
  amount: number;
  color: string;
  description?: string;
}

// Department data dari KementerianModal - LENGKAP: 15 Kementerian + 5 Keamanan + 2 Layanan = 22 total
const ALL_DEPARTMENTS = [
  // KEMENTERIAN (15 total)
  { id: "infrastruktur", baseIncomeCost: 1920 },
  { id: "pendidikan", baseIncomeCost: 1818 },
  { id: "sains", baseIncomeCost: 1800 },
  { id: "kesehatan", baseIncomeCost: 1700 },
  { id: "olahraga", baseIncomeCost: 1200 },
  { id: "kehakiman", baseIncomeCost: 1500 },
  { id: "pertahanan", baseIncomeCost: 2200 },
  { id: "luar-negeri", baseIncomeCost: 1600 },
  { id: "kebudayaan", baseIncomeCost: 900 },
  { id: "pariwisata", baseIncomeCost: 1100 },
  { id: "lingkungan", baseIncomeCost: 1000 },
  { id: "perumahan", baseIncomeCost: 1300 },
  { id: "pembangunan", baseIncomeCost: 1450 },
  { id: "perdagangan", baseIncomeCost: 1550 },
  { id: "keuangan", baseIncomeCost: 2000 },
  
  // KEAMANAN (5 total)
  { id: "dinas-keamanan", baseIncomeCost: 1400 },
  { id: "polisi", baseIncomeCost: 1250 },
  { id: "garda-nasional", baseIncomeCost: 1600 },
  { id: "komandan-angkatan-darat", baseIncomeCost: 1900 },
  { id: "komandan-armada", baseIncomeCost: 2100 },
  
  // LAYANAN (2 total)
  { id: "layanan-darurat", baseIncomeCost: 1350 },
  { id: "bank-sentral", baseIncomeCost: 2000 }
];

// Helper: Calculate ministry daily income cost
const calculateMinistryDailyIncome = (level: number, baseIncomeCost: number) => {
  return Math.round(baseIncomeCost * (1 + (level - 1) * 0.08));
};

// Helper: Calculate total ministry operational cost per day
const calculateTotalMinistryCost = (countryDetail: any) => {
  let totalCost = 0;
  
  for (const dept of ALL_DEPARTMENTS) {
    const level = countryDetail[`level_${dept.id}`] ?? 1;
    const dailyCost = calculateMinistryDailyIncome(level, dept.baseIncomeCost);
    totalCost += dailyCost;
  }
  
  return totalCost;
};

// Helper: Calculate specific ministry daily income (untuk UI reference)
const getMinistryIncomeByName = (name: string, countryDetail: any) => {
  const dept = ALL_DEPARTMENTS.find(d => d.id === name);
  if (!dept) return 0;
  const level = countryDetail[`level_${name}`] ?? 1;
  return calculateMinistryDailyIncome(level, dept.baseIncomeCost);
};

export default function OutcomeModal({ isOpen, onClose, countryDetail, setCountryDetail }: OutcomeModalProps) {
  if (!isOpen) return null;

  // Calculate ministry daily cost (per hari) dari SEMUA 22 department
  const ministryDailyCost = calculateTotalMinistryCost(countryDetail);
  
  // Konversi ke bulanan (30 hari) - INI adalah total pengeluaran Dewan Kabinet
  const ministryCostPerMonth = ministryDailyCost * 30;

  // Initialize budget sliders - ambil dari countryDetail atau gunakan ministryCostPerMonth sebagai default
  // PENTING: Jika countryDetail belum punya budget, gunakan ministryCostPerMonth sebagai dasar
  const [budgets, setBudgets] = useState({
    military: countryDetail?.military_budget ?? ministryCostPerMonth,
    subsidy: countryDetail?.subsidy_budget ?? ministryCostPerMonth,
    education: countryDetail?.education_budget ?? ministryCostPerMonth,
    health: countryDetail?.health_budget ?? ministryCostPerMonth,
    infrastructure: countryDetail?.infrastructure_budget ?? ministryCostPerMonth,
    asn_salary: countryDetail?.asn_salary_budget ?? ministryCostPerMonth,
    debt_interest: countryDetail?.debt_interest_budget || 0
  });

  const handleBudgetChange = (key: string, value: number) => {
    const newBudgets = { ...budgets, [key]: value };
    setBudgets(newBudgets);

    // Update countryDetail with new budgets
    setCountryDetail({
      ...countryDetail,
      military_budget: newBudgets.military,
      subsidy_budget: newBudgets.subsidy,
      education_budget: newBudgets.education,
      health_budget: newBudgets.health,
      infrastructure_budget: newBudgets.infrastructure,
      asn_salary_budget: newBudgets.asn_salary,
      debt_interest_budget: newBudgets.debt_interest
    });
  };

  // Build outcome items dynamically
  const outcomeItems: OutcomeItem[] = [
    { label: "Pemeliharaan Militer", amount: budgets.military, color: "text-red-700", description: "Pengaruh: Stabilitas Keamanan" },
    { label: "Beban Subsidi Publik", amount: budgets.subsidy, color: "text-orange-700", description: "Pengaruh: Approval Rating" },
    { label: "Anggaran Pendidikan", amount: budgets.education, color: "text-amber-700", description: "Pengaruh: Kualitas SDM" },
    { label: "Anggaran Kesehatan", amount: budgets.health, color: "text-yellow-700", description: "Pengaruh: Kepuasan & Kesejahteraan" },
    { label: "Anggaran Infrastruktur", amount: budgets.infrastructure, color: "text-lime-700", description: "Pengaruh: Produktivitas Ekonomi" },
    { label: "Gaji ASN/Birokrasi", amount: budgets.asn_salary, color: "text-green-700", description: "Fixed Cost, Scaling" },
    { label: "Biaya Operasional Dewan Kabinet", amount: ministryCostPerMonth, color: "text-blue-700", description: "Total Pengeluaran Semua Ministry" }
  ];

  // Add debt interest if exists
  if (budgets.debt_interest > 0) {
    outcomeItems.push({
      label: "Cicilan Utang + Bunga",
      amount: budgets.debt_interest,
      color: "text-rose-900",
      description: "Cicilan Obligasi"
    });
  }

  const totalOutcome = outcomeItems.reduce((sum, item) => sum + item.amount, 0);
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
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Alokasi Pengeluaran Negara</h2>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="space-y-6 max-w-4xl">
            <p className="text-xs text-[#8b7e66] font-semibold leading-relaxed">
              Atur alokasi anggaran pengeluaran negara. Setiap kategori memiliki pengaruh berbeda terhadap stabilitas ekonomi dan kesejahteraan rakyat.
            </p>

            {/* Budget Sliders */}
            <div className="space-y-6">
              {/* Pemeliharaan Militer */}
              <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-4 rounded-xl space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xs font-black text-[#5c3c10] uppercase">Pemeliharaan Militer</h4>
                    <p className="text-[10px] text-[#8b7e66] mt-1">Pengaruh: Stabilitas Keamanan</p>
                  </div>
                  <span className="text-sm font-black text-red-700">- {budgets.military.toLocaleString("id-ID")} EM</span>
                </div>
                <input
                  type="range"
                  min="1000000"
                  max="20000000"
                  value={budgets.military}
                  onChange={(e) => handleBudgetChange("military", parseInt(e.target.value))}
                  className="w-full accent-red-700 cursor-pointer"
                />
                <p className="text-[10px] text-[#8b7e66]">1M - 20M EM</p>
              </div>

              {/* Beban Subsidi Publik */}
              <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-4 rounded-xl space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xs font-black text-[#5c3c10] uppercase">Beban Subsidi Publik</h4>
                    <p className="text-[10px] text-[#8b7e66] mt-1">Pengaruh: Approval Rating</p>
                  </div>
                  <span className="text-sm font-black text-orange-700">- {budgets.subsidy.toLocaleString("id-ID")} EM</span>
                </div>
                <input
                  type="range"
                  min="1000000"
                  max="25000000"
                  value={budgets.subsidy}
                  onChange={(e) => handleBudgetChange("subsidy", parseInt(e.target.value))}
                  className="w-full accent-orange-700 cursor-pointer"
                />
                <p className="text-[10px] text-[#8b7e66]">1M - 25M EM</p>
              </div>

              {/* Anggaran Pendidikan */}
              <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-4 rounded-xl space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xs font-black text-[#5c3c10] uppercase">Anggaran Pendidikan</h4>
                    <p className="text-[10px] text-[#8b7e66] mt-1">Pengaruh: Kualitas SDM & Produktivitas (Jangka Panjang)</p>
                  </div>
                  <span className="text-sm font-black text-amber-700">- {budgets.education.toLocaleString("id-ID")} EM</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15000000"
                  value={budgets.education}
                  onChange={(e) => handleBudgetChange("education", parseInt(e.target.value))}
                  className="w-full accent-amber-700 cursor-pointer"
                />
                <p className="text-[10px] text-[#8b7e66]">0 - 15M EM</p>
              </div>

              {/* Anggaran Kesehatan */}
              <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-4 rounded-xl space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xs font-black text-[#5c3c10] uppercase">Anggaran Kesehatan</h4>
                    <p className="text-[10px] text-[#8b7e66] mt-1">Pengaruh: Kepuasan Rakyat & Pencegahan Wabah</p>
                  </div>
                  <span className="text-sm font-black text-yellow-700">- {budgets.health.toLocaleString("id-ID")} EM</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="12000000"
                  value={budgets.health}
                  onChange={(e) => handleBudgetChange("health", parseInt(e.target.value))}
                  className="w-full accent-yellow-700 cursor-pointer"
                />
                <p className="text-[10px] text-[#8b7e66]">0 - 12M EM</p>
              </div>

              {/* Anggaran Infrastruktur */}
              <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-4 rounded-xl space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xs font-black text-[#5c3c10] uppercase">Anggaran Infrastruktur</h4>
                    <p className="text-[10px] text-[#8b7e66] mt-1">Pengaruh: Produktivitas Ekonomi (Jangka Panjang)</p>
                  </div>
                  <span className="text-sm font-black text-lime-700">- {budgets.infrastructure.toLocaleString("id-ID")} EM</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20000000"
                  value={budgets.infrastructure}
                  onChange={(e) => handleBudgetChange("infrastructure", parseInt(e.target.value))}
                  className="w-full accent-lime-700 cursor-pointer"
                />
                <p className="text-[10px] text-[#8b7e66]">0 - 20M EM</p>
              </div>

              {/* Gaji ASN/Birokrasi */}
              <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-4 rounded-xl space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xs font-black text-[#5c3c10] uppercase">Gaji ASN/Birokrasi</h4>
                    <p className="text-[10px] text-[#8b7e66] mt-1">Fixed Cost, Scaling dengan Jumlah Pegawai</p>
                  </div>
                  <span className="text-sm font-black text-green-700">- {budgets.asn_salary.toLocaleString("id-ID")} EM</span>
                </div>
                <input
                  type="range"
                  min="1000000"
                  max="10000000"
                  value={budgets.asn_salary}
                  onChange={(e) => handleBudgetChange("asn_salary", parseInt(e.target.value))}
                  className="w-full accent-green-700 cursor-pointer"
                />
                <p className="text-[10px] text-[#8b7e66]">1M - 10M EM</p>
              </div>

              {/* Biaya Operasional Dewan Kabinet - Read Only */}
              <div className="bg-blue-50 border border-blue-300 p-4 rounded-xl space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xs font-black text-blue-900 uppercase">Biaya Operasional Dewan Kabinet</h4>
                    <p className="text-[10px] text-blue-700 mt-1">Total Pengeluaran Semua Ministry (Otomatis)</p>
                  </div>
                  <span className="text-sm font-black text-blue-700">- {ministryCostPerMonth.toLocaleString("id-ID")} EM</span>
                </div>
                <p className="text-[10px] text-blue-600 italic">Dihitung otomatis dari level semua kementerian, keamanan, dan layanan. Tidak bisa diatur manual.</p>
                <div className="bg-white border border-blue-200 rounded p-2">
                  <p className="text-[10px] text-blue-900 font-semibold">
                    📊 Breakdown: {ministryCostPerMonth} EM/bulan = {(ministryCostPerMonth / 30).toLocaleString("id-ID", { maximumFractionDigits: 0 })} EM/hari × 30 hari
                  </p>
                </div>
              </div>

              {/* Cicilan Utang - Only if debt exists */}
              {budgets.debt_interest > 0 && (
                <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-4 rounded-xl space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xs font-black text-[#5c3c10] uppercase">Cicilan Utang + Bunga</h4>
                      <p className="text-[10px] text-[#8b7e66] mt-1">Cicilan Obligasi (Otomatis)</p>
                    </div>
                    <span className="text-sm font-black text-rose-900">- {budgets.debt_interest.toLocaleString("id-ID")} EM</span>
                  </div>
                  <p className="text-[10px] text-[#8b7e66] italic">Cicilan utang otomatis, tidak bisa diatur</p>
                </div>
              )}
            </div>

            {/* Total Summary */}
            <div className="bg-gradient-to-r from-rose-50 to-rose-100/50 border-3 border-[#5c3c10]/40 p-6 rounded-xl space-y-4 mt-8">
              <div className="flex justify-between items-center">
                <span className="text-sm font-black text-[#5c3c10] uppercase tracking-widest">Total Pengeluaran</span>
                <span className="text-2xl font-black text-rose-700">- {totalOutcome.toLocaleString("id-ID")} EM / bln</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t-2 border-[#C4B49C]/30">
                <span className="text-xs font-black text-[#5c3c10] uppercase">Total Saldo Kas Negara:</span>
                <span className="text-lg font-black text-[#5c3c10]">{anggaran.toLocaleString("id-ID")} EM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
