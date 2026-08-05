"use client";
import React, { useState } from "react";
import { Landmark } from "lucide-react";
import PilihTenorModal from "./PilihTenorModal";

interface LoanCooldowns {
  [key: number]: string;
  [key: string]: string;
}

interface LembagaDuniaProps {
  setPendingLoan: (loan: any) => void;
  loanCooldowns?: LoanCooldowns;
  currentDate?: Date;
}

interface LembagaInstitution {
  id: number;
  name: string;
  flag: string | null;
  interest: number;
  maxCap: number;
}

const LEMBAGA_MULTILATERAL: LembagaInstitution[] = [
  { id: 9991, name: "IMF (Dana Moneter Internasional)", flag: null, interest: 4.8, maxCap: 5_000_000 },
  { id: 9992, name: "Bank Dunia (World Bank)", flag: "🏦", interest: 3.5, maxCap: 2_500_000 },
];

const formatIdDate = (date: Date) => date.toLocaleDateString("id-ID");

const addDays = (date: Date, days: number) => {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
};

const TENOR_OPTIONS = [
  { label: "6m", days: 180 },
  { label: "9m", days: 270 },
  { label: "1y", days: 365 },
  { label: "2y", days: 730 },
  { label: "3y", days: 1095 },
  { label: "4y", days: 1460 },
  { label: "5y", days: 1825 },
];

export default function LembagaDunia({ setPendingLoan, loanCooldowns, currentDate }: LembagaDuniaProps) {
  const today = currentDate instanceof Date ? currentDate : new Date();
  
  // 🔥 DEKLARASI STATE (Ini yang menyebabkan error "Cannot find name")
  const [amounts, setAmounts] = useState<Record<number, string>>({});
  const [terms, setTerms] = useState<Record<number, string>>({});
  const [errors, setErrors] = useState<Record<number, string>>({});
  const [termModalTarget, setTermModalTarget] = useState<number | null>(null);

  // 🔥 PERBAIKAN: Tambahkan tipe `: Record<number, string>` pada param `prev` agar TypeScript tidak error 'any'
  const handleAmountChange = (id: number, value: string) => {
    const rawValue = value.replace(/[^0-9]/g, "");
    setAmounts((prev: Record<number, string>) => ({ ...prev, [id]: rawValue }));
    setErrors((prev: Record<number, string>) => ({ ...prev, [id]: "" }));
  };

  const handleTermChange = (id: number, value: string) => {
    setTerms((prev: Record<number, string>) => ({ ...prev, [id]: value }));
    setErrors((prev: Record<number, string>) => ({ ...prev, [id]: "" }));
  };

  const handleRequestLoan = (lembaga: LembagaInstitution) => {
    const rawAmount = amounts[lembaga.id] ?? "";
    const rawTerm = terms[lembaga.id] ?? "180";
    const requestedAmount = Number(rawAmount.replace(/[^0-9]/g, ""));
    const requestedTerm = Number(rawTerm);
    const cooldownDate = loanCooldowns?.[lembaga.id];
    const cooldownEnd = cooldownDate ? addDays(new Date(cooldownDate), 90) : null;
    const isCooldownActive = cooldownEnd ? cooldownEnd > today : false;

    if (isCooldownActive) {
      setErrors((prev: Record<number, string>) => ({ ...prev, [lembaga.id]: `Cooldown 90 hari: bisa pinjam lagi setelah ${formatIdDate(cooldownEnd!)}.` }));
      return;
    }

    if (!requestedAmount || requestedAmount <= 0) {
      setErrors((prev: Record<number, string>) => ({ ...prev, [lembaga.id]: "Masukkan jumlah pinjaman yang valid." }));
      return;
    }

    if (requestedAmount > lembaga.maxCap) {
      setErrors((prev: Record<number, string>) => ({ ...prev, [lembaga.id]: `Maksimal pinjaman untuk ${lembaga.name} adalah ${lembaga.maxCap.toLocaleString("id-ID")} EM.` }));
      return;
    }

    if (!requestedTerm || requestedTerm < 180 || requestedTerm > 1825) {
      setErrors((prev: Record<number, string>) => ({ ...prev, [lembaga.id]: "Pilih tenor antara 180 dan 1825 hari." }));
      return;
    }

    setPendingLoan({
      ...lembaga,
      maxLoan: requestedAmount,
      term: requestedTerm,
      requestedAmount,
      requestedTerm,
      maxCap: lembaga.maxCap,
      type: "multilateral",
    });
  };

  return (
    <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
      {LEMBAGA_MULTILATERAL.map((lembaga) => {
        const cooldownDate = loanCooldowns?.[lembaga.id];
        const cooldownEnd = cooldownDate ? addDays(new Date(cooldownDate), 90) : null;
        const isCooldownActive = cooldownEnd ? cooldownEnd > today : false;
        const nextAvailable = cooldownEnd ? formatIdDate(cooldownEnd) : null;

        return (
          <div key={lembaga.id} className="bg-gradient-to-r from-[#e4dac3]/20 to-[#C4B49C]/10 border-2 border-[#C4B49C]/30 p-5 rounded-2xl shadow-sm flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#5c3c10]/10 border border-[#5c3c10]/20">
                  <Landmark className="h-6 w-6 text-[#5c3c10]" />
                </div>
                <div>
                  <h4 className="text-base font-black text-[#5c3c10]">{lembaga.name}</h4>
                  <p className="text-[10px] text-[#8b7e66]">
                    Bunga: {lembaga.interest}% | Maks: {lembaga.maxCap.toLocaleString("id-ID")} EM | Tenor: 180–1825 hari
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:items-end">
                <div className="text-[10px] font-black uppercase tracking-wider text-[#5c3c10]">Cooldown</div>
                <div className={`text-sm font-bold ${isCooldownActive ? "text-rose-700" : "text-emerald-700"}`}>
                  {isCooldownActive ? `Tersisa sampai ${nextAvailable}` : "Bisa pinjam sekarang"}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="space-y-2 text-[10px] font-black uppercase tracking-wider text-[#5c3c10]">
                Jumlah Pinjaman
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder={lembaga.maxCap.toLocaleString("id-ID")}
                  value={amounts[lembaga.id] && amounts[lembaga.id] !== "" ? Number(amounts[lembaga.id]).toLocaleString('id-ID') : ""}
                  onChange={(e) => handleAmountChange(lembaga.id, e.target.value)}
                  className="w-full rounded-2xl border border-[#C4B49C]/30 bg-white/80 px-4 py-3 text-sm font-bold text-[#5c3c10] outline-none focus:border-[#5c3c10]"
                />
              </label>

              <div className="space-y-2 text-[10px] font-black uppercase tracking-wider text-[#5c3c10] cursor-pointer">
                <div className="flex items-center justify-between">
                  <span>Tenor Pengembalian</span>
                  <span className="text-[10px] text-[#8b7e66]">
                    {TENOR_OPTIONS.find((option) => option.days === Number(terms[lembaga.id] ?? 180))?.label ?? "6m"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setTermModalTarget(lembaga.id)}
                  className="w-full rounded-2xl border border-[#C4B49C]/30 bg-white/80 px-4 py-3 text-left text-sm font-bold text-[#5c3c10] outline-none transition hover:border-[#5c3c10] hover:bg-[#f7f1dd] cursor-pointer"
                >
                  {TENOR_OPTIONS.find((option) => option.days === Number(terms[lembaga.id] ?? 180))?.label ?? "6m"} / {Number(terms[lembaga.id] ?? 180).toLocaleString("id-ID")} hari
                </button>
              </div>
            </div>

            {errors[lembaga.id] && (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-bold text-rose-700">
                {errors[lembaga.id]}
              </div>
            )}

            <button
              onClick={() => handleRequestLoan(lembaga)}
              disabled={isCooldownActive}
              className={`w-full px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                isCooldownActive
                  ? "bg-[#e4dac3] text-[#8b7e66] cursor-not-allowed"
                  : "bg-[#5c3c10] text-[#FAF6EE] border border-[#5c3c10]/60 shadow-md hover:bg-[#3d2911] hover:shadow-lg active:scale-95"
              }`}
            >
              Ajukan Kredit
            </button>
          </div>
        );
      })}

      <PilihTenorModal
        isOpen={termModalTarget !== null}
        selectedTerm={Number(terms[termModalTarget ?? 0] ?? 180)}
        onSelectTerm={(days) => {
          if (termModalTarget === null) return;
          setTerms((prev: Record<number, string>) => ({ ...prev, [termModalTarget]: String(days) }));
          setTermModalTarget(null);
        }}
        onClose={() => setTermModalTarget(null)}
      />
    </div>
  );
}