"use client"
import React from "react";
import { X, Users } from "lucide-react";

interface CountryOption {
  id: number;
  name: string;
  iso: string;
  continent: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  countries: CountryOption[];
  renderFlag: (iso: string | undefined, altName: string, size?: "sm" | "md") => React.ReactElement | null;
}

export default function CountryListModal({
  isOpen,
  onClose,
  title,
  countries,
  renderFlag,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative pointer-events-auto animate-in fade-in zoom-in-95 duration-150">
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600/10 rounded-xl border border-blue-600/20">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#5c3c10] uppercase tracking-tight">{title}</h3>
              <p className="text-xs text-[#8b7e66] font-bold mt-0.5">{countries.length} negara terdaftar</p>
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
          <div className="w-full">
            {countries.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[#8b7e66] font-bold text-lg">Belum ada negara dalam daftar ini.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                {countries.map((c) => (
                  <div
                    key={c.id}
                    className="flex items-center gap-4 p-3 rounded-xl border-2 border-[#C4B49C]/30 bg-white hover:border-[#5c3c10] transition-all w-full"
                  >
                    {renderFlag(c.iso, c.name)}
                    <span className="text-sm font-bold text-[#5c3c10]">{c.name}</span>
                  </div>
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
