"use client";
import React from "react";
import { Landmark } from "lucide-react";

interface LembagaDuniaProps {
  setPendingLoan: (loan: any) => void;
}

const LEMBAGA_MULTILATERAL = [
  { id: 9991, name: "IMF (Dana Moneter Internasional)", flag: null, interest: 4.8, maxLoan: 100_000, term: 90 },
  { id: 9992, name: "Bank Dunia (World Bank)", flag: "🏦", interest: 3.5, maxLoan: 90_000, term: 360 },
  { id: 9993, name: "ADB (Asian Development Bank)", flag: "🌏", interest: 3.2, maxLoan: 75_000, term: 180 },
];

export default function LembagaDunia({ setPendingLoan }: LembagaDuniaProps) {
  return (
    <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
      {LEMBAGA_MULTILATERAL.map((lembaga) => (
        <div key={lembaga.id} className="bg-gradient-to-r from-[#e4dac3]/20 to-[#C4B49C]/10 border-2 border-[#C4B49C]/30 p-5 rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#5c3c10]/10 border border-[#5c3c10]/20">
              <Landmark className="h-6 w-6 text-[#5c3c10]" />
            </div>
            <div>
              <h4 className="text-base font-black text-[#5c3c10]">{lembaga.name}</h4>
              <p className="text-[10px] text-[#8b7e66]">Bunga: {lembaga.interest}% | Masa: {lembaga.term} Hari | Maks: {lembaga.maxLoan.toLocaleString('id-ID')} EM</p>
            </div>
          </div>
          <button
            onClick={() => setPendingLoan(lembaga)}
            className="px-8 py-2.5 rounded-xl bg-[#5c3c10] text-[#FAF6EE] border border-[#5c3c10]/60 shadow-md text-[10px] font-black uppercase tracking-wider hover:bg-[#3d2911] active:scale-95 transition-all cursor-pointer"
          >
            Ajukan Kredit
          </button>
        </div>
      ))}
    </div>
  );
}
