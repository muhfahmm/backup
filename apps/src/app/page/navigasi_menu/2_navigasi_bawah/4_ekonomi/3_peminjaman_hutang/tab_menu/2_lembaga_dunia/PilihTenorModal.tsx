"use client"
import React from "react";
import { X } from "lucide-react";

interface TenorOption {
  label: string;
  days: number;
}

interface PilihTenorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTerm: number;
  onSelectTerm: (days: number) => void;
}

const TENOR_OPTIONS: TenorOption[] = [
  { label: "6 Bulan", days: 180 },
  { label: "9 Bulan", days: 270 },
  { label: "1 Tahun", days: 365 },
  { label: "2 Tahun", days: 730 },
  { label: "3 Tahun", days: 1095 },
  { label: "4 Tahun", days: 1460 },
  { label: "5 Tahun", days: 1825 },
];

export default function PilihTenorModal({ isOpen, onClose, selectedTerm, onSelectTerm }: PilihTenorModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl relative font-sans pointer-events-auto flex flex-col">
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#C4B49C]/30 bg-[#FAF6EE] relative z-10">
          <div>
            <h3 className="text-2xl font-black text-[#5c3c10] uppercase">Pilih Tenor</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5"
          >
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 no-scrollbar">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {TENOR_OPTIONS.map((option) => {
              const active = option.days === selectedTerm;
              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => onSelectTerm(option.days)}
                  className={`rounded-3xl border-2 px-4 py-6 text-left transition ${
                    active
                      ? "border-[#5c3c10] bg-[#5c3c10] text-[#FAF6EE] shadow-lg cursor-pointer"
                      : "border-[#C4B49C]/40 bg-white/80 text-[#5c3c10] hover:border-[#5c3c10] hover:bg-[#f7f1dd] cursor-pointer"
                  }`}
                >
                  <div className="text-lg font-black">{option.label}</div>
                  <div className="text-[10px] text-[#8b7e66] mt-1">{option.days.toLocaleString("id-ID")} hari</div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 rounded-3xl border border-[#C4B49C]/30 bg-[#e4dac3]/20 p-4 text-sm text-[#5c3c10]">
            <p className="font-black">Terpilih:</p>
            <p className="mt-2">{selectedTerm.toLocaleString("id-ID")} hari</p>
          </div>
        </div>
      </div>
    </div>
  );
}
