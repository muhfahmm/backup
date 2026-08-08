"use client";
import React from "react";
import { X } from "lucide-react";

interface InfoInfrastrukturModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem: any;
  formatNumber: (value: unknown) => string;
  getNestedValue: (obj: any, key: string) => number;
  countryDetail: any;
}

export default function InfoInfrastrukturModal({
  isOpen,
  onClose,
  selectedItem,
  formatNumber,
  getNestedValue,
  countryDetail,
}: InfoInfrastrukturModalProps) {
  if (!isOpen || !selectedItem) return null;

  const value = getNestedValue(countryDetail, selectedItem.key);

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-transparent pointer-events-auto">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-150">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 pb-4 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <h3 className="font-black text-[#5c3c10] uppercase tracking-tight text-2xl">{selectedItem?.label}</h3>
          <button 
            onClick={onClose} 
            className="text-[#8b7e66] hover:text-[#5c3c10] p-2 rounded-full hover:bg-[#e4dac3] transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 space-y-4">
          {selectedItem?.deskripsi && (
            <div className="bg-[#FAF6EE]/60 p-4 rounded-lg border border-[#C4B49C]/20">
              <p className="text-[12px] font-bold text-[#8b7e66] mb-2">Deskripsi</p>
              <p className="text-base font-semibold text-[#2e261a]">{selectedItem.deskripsi}</p>
            </div>
          )}

          <div className="bg-[#FAF6EE]/60 p-4 rounded-lg border border-[#C4B49C]/20">
            <p className="text-[12px] font-bold text-[#8b7e66] mb-2">Jumlah</p>
            <p className="text-lg font-black text-[#2e261a]">
              {formatNumber(value)} {selectedItem?.satuan_kapasitas || "Unit"}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-amber-50/60 p-4 rounded-lg border-2 border-amber-200">
              <p className="text-[12px] font-bold text-amber-700 mb-2">Biaya</p>
              <p className="text-base font-black text-amber-900">
                {formatNumber(selectedItem?.biaya_pembangunan)}
              </p>
            </div>
            <div className="bg-sky-50/60 p-4 rounded-lg border-2 border-sky-200">
              <p className="text-[12px] font-bold text-sky-700 mb-2">Waktu</p>
              <p className="text-base font-black text-sky-900">
                {selectedItem?.waktu_pembangunan} h.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-purple-50/60 p-4 rounded-lg border-2 border-purple-200">
              <p className="text-[12px] font-bold text-purple-700 mb-2">Tenaga Kerja</p>
              <p className="text-base font-black text-purple-900">
                {formatNumber(selectedItem?.lowongan_kerja)}
              </p>
            </div>
            <div className="bg-cyan-50/60 p-4 rounded-lg border-2 border-cyan-200">
              <p className="text-[12px] font-bold text-cyan-700 mb-2">Listrik</p>
              <p className="text-base font-black text-cyan-900">
                {formatNumber(selectedItem?.konsumsi_listrik)} kW
              </p>
            </div>
          </div>

          {selectedItem?.kapasitas && (
            <div className="bg-[#FAF6EE]/60 p-4 rounded-lg border border-[#C4B49C]/20">
              <p className="text-[12px] font-bold text-[#8b7e66] mb-2">Kapasitas</p>
              <p className="text-lg font-black text-[#2e261a]">
                {formatNumber(selectedItem.kapasitas)} {selectedItem.satuan_kapasitas}
              </p>
            </div>
          )}
        </div>

        <div className="px-8 py-6 bg-[#FAF6EE] border-t-2 border-[#C4B49C]/30 flex justify-end relative z-10">
          <button 
            onClick={onClose} 
            className="py-2 px-6 rounded-xl text-[10px] font-black uppercase transition-all text-center cursor-pointer bg-[#5c3c10] text-[#FAF6EE] border border-[#5c3c10] hover:bg-[#8b7e66] hover:border-[#8b7e66]"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
