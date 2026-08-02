"use client"
import React from "react";
import { X, Coins } from "lucide-react";

interface IdeologiConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  icon: React.ReactNode;
  bonusText: string;
  cost: number;
}

export default function IdeologiConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  icon,
  bonusText,
  cost,
}: IdeologiConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-[480px] overflow-hidden shadow-2xl relative font-sans pointer-events-auto animate-in fade-in zoom-in-95 duration-150 flex flex-col items-center p-8">
        <button onClick={onClose} className="absolute top-4 right-4 text-[#8b7e66] hover:text-[#5c3c10] transition-colors cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <div className="relative w-20 h-24 flex-shrink-0 rounded-md flex items-center justify-center shadow-lg border-b-[4px] bg-[#2e4a4a] border-[#1a2b2b] mt-2">
          <div className="absolute top-1 left-2 w-2 h-4 bg-white/20 rounded-full" />
          <div className="absolute top-1 right-2 w-2 h-4 bg-white/20 rounded-full" />
          <div className="text-white transform scale-125">
            {icon}
          </div>
        </div>

        <h3 className="text-xl font-black text-[#2e261a] mt-6 text-center">{title}</h3>
        <p className="text-emerald-600 text-sm font-semibold mt-1 text-center">{bonusText}</p>

        <div className="flex items-center gap-3 mt-4 text-sm font-bold text-[#2e261a]">
          <Coins className="w-5 h-5 text-amber-600" />
          <span>{cost.toLocaleString('id-ID')} EM</span>
        </div>

        <div className="flex w-full gap-4 mt-6">
          <button
            onClick={onConfirm}
            className="flex-1 py-3 rounded-xl bg-gradient-to-b from-[#ffe07d] via-[#fcae1e] to-[#c77a00] text-[#2e261a] font-black text-sm uppercase shadow-md hover:brightness-110 active:scale-95 transition-all border border-[#1e2f3d]/10 flex items-center justify-center gap-2 cursor-pointer"
          >
            Seketika
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-3 rounded-xl bg-[#1e3b39] text-[#FAF6EE] font-black text-sm uppercase shadow-md hover:brightness-110 active:scale-95 transition-all border border-[#3d6868] flex items-center justify-center gap-2 cursor-pointer"
          >
            Ubah
          </button>
        </div>
        
        <p className="text-[9px] text-[#8b7e66] font-bold mt-4 tracking-widest uppercase">
          * Biaya akan dipotong dari kas negara
        </p>
      </div>
    </div>
  );
}