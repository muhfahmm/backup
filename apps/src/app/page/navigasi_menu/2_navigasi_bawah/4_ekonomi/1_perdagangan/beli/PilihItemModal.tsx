"use client"
import React from "react";
import { X, ChevronRight } from "lucide-react";

import { COUNTRIES_DATA } from "../../../../../map_system/map-data";

type Item = { label: string; value: string; disabled?: boolean };
type CategoryGroup = { category: string; items: Item[] };

const getFlagEmoji = (countryName: string) => {
  const matched = COUNTRIES_DATA.find(c => c.country.toLowerCase().trim() === countryName.toLowerCase().trim());
  if (!matched || !matched.iso) return "";
  const codePoints = matched.iso.toUpperCase().split('').map(c => 127397 + c.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

interface PilihItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  data: Item[] | CategoryGroup[];
  onSelect: (value: string) => void;
  selectedValue?: string;
}

export default function PilihItemModal({ 
  isOpen, 
  onClose, 
  title, 
  data, 
  onSelect, 
  selectedValue 
}: PilihItemModalProps) {
  if (!isOpen) return null;

  const isGrouped = data.length > 0 && 'category' in data[0];

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />
        
        {/* HEADER */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight uppercase">{title}</h2>
          <button 
            onClick={onClose} 
            className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
          >
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10">
          {/* RENDER UNTUK DATA BERKATEGORI (PRODUK) */}
          {isGrouped ? (
            (data as CategoryGroup[]).map((group, groupIndex) => (
              <div key={groupIndex} className="mb-8 last:mb-0">
                <div className="col-span-full text-xs font-black text-[#5c3c10] uppercase tracking-wider mb-3 border-b border-[#C4B49C]/30 pb-2">
                  {group.category}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((item) => {
                    const isSelected = selectedValue === item.value;
                    return (
                      <button
                        key={item.value}
                        disabled={item.disabled}
                        onClick={() => { if (!item.disabled) { onSelect(item.value); onClose(); } }}
                        className={`group flex items-center justify-between p-5 rounded-xl border-2 transition-all duration-200 w-full text-left
                          ${item.disabled 
                            ? 'bg-gray-100 border-gray-200 cursor-not-allowed opacity-60' 
                            : 'cursor-pointer ' + (isSelected 
                              ? 'bg-[#2d6e6e] border-[#2d6e6e] shadow-md transform scale-[1.02]' 
                              : 'bg-[#FAF6EE] border-[#C4B49C] hover:border-[#5c3c10] hover:shadow-md'
                            )
                          }
                        `}
                      >
                        <div className="flex flex-col gap-1">
                          <span className={`text-sm font-bold tracking-wide ${isSelected ? 'text-[#FAF6EE]' : 'text-[#5c3c10]'}`}>
                            {item.label}
                          </span>
                          {item.disabled && (<span className="text-[10px] text-red-500 font-bold uppercase">Tidak Tersedia</span>)}
                          {isSelected && (<span className="text-[10px] text-emerald-300 font-bold uppercase">Terpilih</span>)}
                        </div>
                        {!item.disabled && (
                          <ChevronRight className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${isSelected ? 'text-[#FAF6EE]' : 'text-[#C4B49C]'}`} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            /* RENDER UNTUK DATA FLAT (NEGARA) */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(data as Item[]).map((item) => {
                const isSelected = selectedValue === item.value;
                return (
                  <button
                    key={item.value}
                    disabled={item.disabled}
                    onClick={() => { if (!item.disabled) { onSelect(item.value); onClose(); } }}
                    className={`group flex items-center justify-between p-5 rounded-xl border-2 transition-all duration-200 w-full text-left
                      ${item.disabled 
                        ? 'bg-gray-100 border-gray-200 cursor-not-allowed opacity-60' 
                        : 'cursor-pointer ' + (isSelected 
                          ? 'bg-[#2d6e6e] border-[#2d6e6e] shadow-md transform scale-[1.02]' 
                          : 'bg-[#FAF6EE] border-[#C4B49C] hover:border-[#5c3c10] hover:shadow-md'
                        )
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      {(() => {
                        const matched = COUNTRIES_DATA.find(c => c.country.toLowerCase().trim() === item.label.toLowerCase().trim());
                        const iso = matched?.iso;
                        if (!iso || iso.length !== 2) {
                          return (
                            <div className="w-8 h-5 rounded-sm bg-[#e4dac3] border border-[#5c3c10]/20 flex-shrink-0 shadow-sm" />
                          );
                        }
                        return (
                          <div className="w-8 h-5 rounded-sm overflow-hidden border border-[#5c3c10]/20 flex-shrink-0 shadow-sm bg-[#e4dac3] relative">
                            <img
                              src={`https://flagcdn.com/w80/${iso.toLowerCase()}.png`}
                              alt={item.label}
                              className="w-full h-full object-cover absolute inset-0"
                            />
                          </div>
                        );
                      })()}
                      <span className={`text-sm font-bold tracking-wide ${isSelected ? 'text-[#FAF6EE]' : 'text-[#5c3c10]'}`}>{item.label}</span>
                    </div>
                    {!item.disabled && (
                      <ChevronRight className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${isSelected ? 'text-[#FAF6EE]' : 'text-[#C4B49C]'}`} />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}