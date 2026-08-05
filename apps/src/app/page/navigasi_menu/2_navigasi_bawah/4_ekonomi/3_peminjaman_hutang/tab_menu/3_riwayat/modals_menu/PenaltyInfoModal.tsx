"use client";
import React from "react";
import { X } from "lucide-react";
import { LoanRecord } from "../../utils";
import {
  calculateDelayedInterestAmountForBilateralLoan,
} from "../../logic/loanInterestRiseNegara";
import {
  calculateDelayedInterestAmountForMultilateralLoan,
} from "../../logic/loanInterestRiseWorldBank";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  loan: LoanRecord | null;
}

export default function PenaltyInfoModal({ isOpen, onClose, loan }: Props) {
  if (!isOpen || !loan) return null;

  const outstanding = Number(loan.totalRepayment) || 0;
  const missed = Number(loan.missedMonths || 0);
  const nextMissed = missed + 1;

  const nextPenalty = loan.type === "multilateral"
    ? calculateDelayedInterestAmountForMultilateralLoan(outstanding, nextMissed)
    : calculateDelayedInterestAmountForBilateralLoan(outstanding, nextMissed);

  const ratePercent = (0.015 * nextMissed * 100).toFixed(2);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">

        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div>
            <h3 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Detail Denda Telat Bayar</h3>
            <p className="text-xs text-[#8b7e66]">Penjelasan lengkap denda yang akan dikenakan jika pembayaran terlewat.</p>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="space-y-3 text-[#5c3c10]">
            <div className="text-sm font-bold">Sumber Pinjaman</div>
            <div className="text-sm">{loan.source} {loan.iso ? `(${loan.iso.toUpperCase()})` : ''}</div>

            <div className="text-sm font-bold mt-3">Data Pinjaman</div>
            <div className="text-sm">Pokok: {Number(loan.amount || 0).toLocaleString('id-ID')} EM</div>
            <div className="text-sm">Bunga awal: {Number(loan.interest || 0)}%</div>
            <div className="text-sm">Total saat ini: {outstanding.toLocaleString('id-ID')} EM</div>
            <div className="text-sm">Sudah dibayar: {(Number(loan.paidAmount) || 0).toLocaleString('id-ID')} EM</div>
            <div className="text-sm">Denda terakumulasi: {(Number(loan.accumulatedPenalty) || 0).toLocaleString('id-ID')} EM</div>
            <div className="text-sm">Telah terlewat: {missed} bulan</div>

            <div className="text-sm font-bold mt-3">Estimasi Denda Jika Terlambat Sekali Lagi</div>
            <div className="text-sm">Rumus: denda = outstanding × (0.015 × jumlah_bulan_terlewat)</div>
            <div className="text-sm">Jika melewatkan pembayaran lagi (bulan terlewat menjadi {nextMissed}):</div>
            <div className="text-sm">Tarif denda terpakai: {ratePercent}%</div>
            <div className="text-sm font-black text-rose-600">Perkiraan denda tambahan: {nextPenalty.toLocaleString('id-ID')} EM</div>
          </div>
        </div>

      </div>
    </div>
  );
}
