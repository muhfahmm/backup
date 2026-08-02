"use client"
import React from "react";
import { X, AlertCircle } from "lucide-react";

interface AgamaGagalModalProps {
  isOpen: boolean;
  onClose: () => void;
  cost: number;
  currentMoney: number;
}

export default function AgamaGagalModal({
  isOpen,
  onClose,
  cost,
  currentMoney,
}: AgamaGagalModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-[480px] overflow-hidden shadow-2xl relative font-sans pointer-events-auto animate-in fade-in zoom-in-95 duration-150 flex flex-col items-center p-8">
        <button onClick={onClose} className="absolute top-4 right-4 text-[#8b7e66] hover:text-[#5c3c10] transition-colors cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <div className="w-20 h-20 rounded-full bg-red-100 border border-red-300 flex items-center justify-center mb-4">
          <AlertCircle className="w-10 h-10 text-red-600" />
        </div>

        <h3 className="text-xl font-black text-[#2e261a] mb-2 text-center">Dana Tidak Cukup!</h3>
        <p className="text-sm text-[#8b7e66] text-center mb-6 leading-relaxed">
          Anda memerlukan <span className="font-black text-[#5c3c10]">{cost.toLocaleString('id-ID')} EM</span> untuk perubahan ini.
          <br />
          Kas negara Anda saat ini: <span className="font-black text-rose-700">{currentMoney.toLocaleString('id-ID')} EM</span>
        </p>

        <button
          onClick={onClose}
          className="px-6 py-3 rounded-xl bg-[#5c3c10] text-[#FAF6EE] font-black text-sm uppercase shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}