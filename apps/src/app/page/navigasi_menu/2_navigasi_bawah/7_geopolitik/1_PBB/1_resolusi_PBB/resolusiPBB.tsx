"use client"
import React from "react";

export default function ResolusiPBB() {
  // Data dummy untuk resolusi
  const dummyResolutions = [
    { id: 1, title: "Resolusi Pengurangan Emisi Karbon Global", proposer: "Uni Eropa", description: "Target pengurangan emisi 15% dalam 5 tahun ke depan." },
    { id: 2, title: "Bantuan Kemanusiaan untuk Negara Y", proposer: "Amerika Serikat", description: "Mengalokasikan dana darurat untuk krisis pangan di Negara Y." },
    { id: 3, title: "Reformasi Sistem Pajak Digital Global", proposer: "G20", description: "Menerapkan pajak minimum 15% untuk perusahaan multinasional." },
  ];

  return (
    <div className="space-y-4">
      {dummyResolutions.map((res) => (
        <div key={res.id} className="bg-white/70 border border-[#C4B49C]/30 p-5 rounded-xl shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <div className="flex-1">
              <h4 className="text-sm font-black text-[#5c3c10] uppercase">{res.title}</h4>
              <p className="text-xs text-[#8b7e66] mt-0.5">Diusulkan oleh: {res.proposer}</p>
              <p className="text-xs text-[#5c3c10] mt-2 leading-relaxed">{res.description}</p>
            </div>
          </div>
          <div className="flex gap-2 mt-3 pt-3 border-t border-[#C4B49C]/20">
            <button className="px-4 py-1.5 rounded-lg bg-emerald-600/10 text-emerald-700 border border-emerald-600/30 text-[10px] font-black uppercase tracking-wider hover:bg-emerald-600 hover:text-white transition-all cursor-pointer">
              Setuju
            </button>
            <button className="px-4 py-1.5 rounded-lg bg-amber-600/10 text-amber-700 border border-amber-600/30 text-[10px] font-black uppercase tracking-wider hover:bg-amber-600 hover:text-white transition-all cursor-pointer">
              Abstain
            </button>
            <button className="px-4 py-1.5 rounded-lg bg-rose-600/10 text-rose-700 border border-rose-600/30 text-[10px] font-black uppercase tracking-wider hover:bg-rose-600 hover:text-white transition-all cursor-pointer">
              Menolak
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}