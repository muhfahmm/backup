"use client"
import React from "react";
import { X, FileText } from "lucide-react";

interface CountryOption {
  id: number;
  name: string;
  iso: string;
  continent: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  countries: CountryOption[];
  groupedCountries: Record<string, CountryOption[]>;
  activeContinent: string;
  setActiveContinent: (continent: string) => void;
  selectedCountry: any;
  onSelectTarget: (country: CountryOption) => void;
  renderFlag: (iso: string | undefined, altName: string, size?: "sm" | "md") => React.ReactElement | null;
}

export default function CountryTargetModal({
  isOpen,
  onClose,
  groupedCountries,
  activeContinent,
  setActiveContinent,
  selectedCountry,
  onSelectTarget,
  renderFlag,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative pointer-events-auto animate-in fade-in zoom-in-95 duration-150">
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600/10 rounded-xl border border-blue-600/20">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#5c3c10] uppercase tracking-tight">Pilih Negara Target</h3>
              <p className="text-xs text-[#8b7e66] font-bold mt-0.5">Pilih benua, lalu pilih negara target Anda.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
          >
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar flex flex-col items-center">
          <div className="w-full max-w-5xl">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {Object.keys(groupedCountries).map((continent) => (
                <button
                  key={continent}
                  onClick={() => setActiveContinent(continent)}
                  className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                    activeContinent === continent
                      ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md"
                      : "bg-white/80 border border-[#C4B49C]/30 text-[#8b7e66] hover:bg-[#e4dac3]/40 hover:border-[#5c3c10]"
                  }`}
                >
                  {continent} ({groupedCountries[continent].length})
                </button>
              ))}
            </div>
            {activeContinent && groupedCountries[activeContinent] && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {groupedCountries[activeContinent]
                  .filter((c) => c.id !== selectedCountry?.id)
                  .map((c) => (
                    <button
                      key={c.id}
                      onClick={() => onSelectTarget(c)}
                      className="flex flex-col items-center p-3 rounded-xl border-2 transition-all cursor-pointer bg-white border-[#C4B49C]/30 hover:border-[#5c3c10]"
                    >
                      {renderFlag(c.iso, c.name)}
                      <span className="text-[10px] font-bold mt-2 text-center leading-tight text-[#5c3c10]">
                        {c.name}
                      </span>
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-end gap-4 px-8 py-6 border-t-2 border-[#C4B49C]/30 bg-[#FAF6EE] relative z-10 shrink-0">
          <button
            onClick={onClose}
            className="px-8 py-3 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all font-black text-xs uppercase tracking-wider cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
