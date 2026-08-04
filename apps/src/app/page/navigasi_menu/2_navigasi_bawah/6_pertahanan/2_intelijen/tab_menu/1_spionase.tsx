"use client"
import React from "react";

interface SpionaseProps {
  anggaran: number;
  onAction: () => void;
}

export default function Spionase({ anggaran, onAction }: SpionaseProps) {
  return (
    <div className="space-y-6 w-full">
      <p className="text-xs text-[#8b7e66] font-semibold leading-relaxed text-justify">
        Kirim agen telik sandi kepresidenan untuk memetakan penyusupan jaringan teroris regional atau melakukan penyadapan kedaulatan negara asing.
      </p>

      <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-4 rounded-xl w-full">
        <div className="flex justify-between text-xs font-bold text-[#5c3c10]">
          <span>Kas Anggaran Negara:</span>
          <span>{anggaran.toLocaleString("id-ID")}</span>
        </div>
      </div>

      <button
        onClick={onAction}
        className="w-full py-3.5 rounded-xl bg-[#5c3c10] text-[#FAF6EE] border-2 border-[#1e2f3d]/15 shadow-md hover:brightness-110 active:scale-95 transition-all text-xs font-black uppercase cursor-pointer"
      >
        Luncurkan Misi Spionase (10.000.000 EM)
      </button>
    </div>
  );
}