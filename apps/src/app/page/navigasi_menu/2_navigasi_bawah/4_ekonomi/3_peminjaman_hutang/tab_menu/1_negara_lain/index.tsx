"use client";
import React, { useState, type ReactNode } from "react";
import { ArrowRight, Search } from "lucide-react";

interface NegaraLainProps {
  loanSources: Array<{
    id?: number | string;
    name: string;
    iso?: string | null;
    interest: number;
    maxLoan: number;
    term: number;
  }>;
  renderFlag: (iso: string | undefined | null, altName: string) => ReactNode;
  setPendingLoan: (loan: any) => void;
}

export default function NegaraLain({ loanSources, renderFlag, setPendingLoan }: NegaraLainProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCountries = loanSources.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#8b7e66]" />
        <input
          type="text"
          placeholder="Cari nama negara peminjam..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white/50 border-2 border-[#C4B49C]/50 rounded-xl text-sm font-bold text-[#5c3c10] placeholder:text-[#8b7e66]/60 focus:outline-none focus:border-[#5c3c10] transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        {filteredCountries.map((negara) => (
          <div key={negara.id ?? negara.name} className="bg-white/60 border border-[#C4B49C]/30 p-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                {renderFlag(negara.iso, negara.name)}
                <span className="text-sm font-black text-[#5c3c10]">{negara.name}</span>
              </div>
              <span className="text-xs font-black text-red-600 bg-red-600/10 px-2 py-1 rounded-lg">{negara.interest}%</span>
            </div>
            <div className="space-y-1 text-[10px] font-bold text-[#8b7e66]">
              <p className="flex justify-between"><span>Plafon Pinjaman:</span> <span className="text-[#5c3c10]">{negara.maxLoan.toLocaleString('id-ID')} EM</span></p>
              <p className="flex justify-between"><span>Masa Tenggang:</span> <span className="text-[#5c3c10]">{negara.term} Hari</span></p>
            </div>
            <button
              onClick={() => setPendingLoan(negara)}
              className="w-full mt-4 py-2.5 rounded-lg bg-gradient-to-r from-[#fcae1e] to-[#c77a00] text-white text-[10px] font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              <span>Pinjam Dana</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
