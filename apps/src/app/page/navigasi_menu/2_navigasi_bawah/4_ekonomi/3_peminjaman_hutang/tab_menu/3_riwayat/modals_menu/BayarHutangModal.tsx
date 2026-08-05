"use client"
import React from "react";
import { X, CreditCard } from "lucide-react";
import { renderFlag } from "../../utils";

interface BayarHutangModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loanSource: string;
  paymentAmount: number;
  currentMoney: number;
  iso?: string | null;
}

export default function BayarHutangModal({
  isOpen,
  onClose,
  onConfirm,
  loanSource,
  paymentAmount,
  currentMoney,
  iso,
}: BayarHutangModalProps) {
  if (!isOpen) return null;

  const isFundsSufficient = currentMoney >= paymentAmount;

  const handlePayClick = () => {
    if (isFundsSufficient) {
      onConfirm();
    } else {
      // 🔥 Ganti dengan alert browser sederhana karena file modal terpisah telah dihapus
      alert("Kas negara tidak mencukupi untuk melakukan pembayaran ini.");
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-[480px] min-h-[440px] overflow-hidden shadow-2xl relative font-sans pointer-events-auto animate-in fade-in zoom-in-95 duration-150 flex flex-col">
        <div className="flex justify-end px-6 py-4 shrink-0 border-b border-[#C4B49C]/20">
          <button onClick={onClose} className="text-[#8b7e66] hover:text-[#5c3c10] transition-colors cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
          <div className="w-20 h-20 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center mb-4">
            <CreditCard className="w-10 h-10 text-amber-600" />
          </div>

          <h3 className="text-xl font-black text-[#2e261a] mb-2">Konfirmasi Pembayaran</h3>

          <div className="flex flex-col items-center text-sm text-[#8b7e66] mb-2 leading-relaxed max-w-sm">
            <span className="mb-1">
              Anda akan membayar <span className="font-black text-[#5c3c10]">{paymentAmount.toLocaleString('id-ID')} EM</span>
            </span>
            <div className="flex items-center gap-2 font-black text-[#5c3c10]">
              <span>untuk pinjaman dari</span>
              {renderFlag(iso, loanSource)}
              <span>{loanSource}</span>
            </div>
          </div>

          <div className="mt-2 text-xs font-bold text-[#5c3c10] flex flex-col items-center gap-1">
            <span>Kas Negara Saat Ini:</span>
            <span className={`text-base ${isFundsSufficient ? 'text-emerald-700' : 'text-rose-700'}`}>
              {currentMoney.toLocaleString('id-ID')} EM
            </span>
            {!isFundsSufficient && (
              <span className="text-[10px] text-rose-600 bg-rose-100 px-3 py-1 rounded-full mt-1">
                ⚠️ Uang tidak cukup untuk membayar penuh pinjaman ini
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-3 px-8 pb-6 shrink-0">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all font-black text-xs uppercase tracking-wider cursor-pointer"
          >
            Batal
          </button>
          <button
            onClick={handlePayClick}
            className="flex-1 py-3 rounded-xl font-black text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer bg-[#5c3c10] text-[#FAF6EE] hover:bg-[#8b7e66] active:scale-95"
          >
            Bayar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}