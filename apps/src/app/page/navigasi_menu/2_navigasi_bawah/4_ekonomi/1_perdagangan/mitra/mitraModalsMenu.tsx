"use client"

import React from "react";
import { X, Handshake, ChevronRight, Globe } from "lucide-react";

// TIPE DATA YANG SESUAI
export interface TradePartner {
  id: number;
  nama_negara: string;
  region: string;
  status_hubungan: string; 
  total_nilai_dagang?: number;
  jenis_perjanjian?: string; // Tambahan baru
}

interface MitraModalsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  partners: TradePartner[];
  onPartnerClick?: (partner: TradePartner) => void;
}

export default function MitraModalsMenu({ 
  isOpen, 
  onClose, 
  partners, 
  onPartnerClick 
}: MitraModalsMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-4xl max-h-[80vh] overflow-hidden shadow-2xl flex flex-col relative font-sans">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        {/* Header */}
        <div className="px-6 py-5 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
              <Handshake className="h-6 w-6 text-[#5c3c10]" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#5c3c10] tracking-tight uppercase">Mitra Dagang Global</h2>
              <p className="text-[10px] text-[#8b7e66] font-semibold">Jalin hubungan dagang dengan negara-negara di seluruh dunia</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg border-2 border-[#C4B49C] text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 relative z-10 no-scrollbar">
          {partners.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-[#8b7e66]">
              <Globe className="h-12 w-12 mb-3 opacity-30" />
              <p className="text-sm font-bold">Belum ada hubungan dagang</p>
              <p className="text-xs">Jalin hubungan dagang dengan negara lain melalui menu Ekspor/Impor.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {partners.map((partner, idx) => (
                <div 
                  key={idx}
                  onClick={() => onPartnerClick && onPartnerClick(partner)}
                  className="bg-white/70 border border-[#C4B49C]/40 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all hover:shadow-md hover:border-[#5c3c10]/50 cursor-pointer group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h4 className="text-sm font-black text-[#5c3c10] uppercase">{partner.nama_negara}</h4>
                      
                      {/* Tambahan Label Jenis Perjanjian */}
                      {partner.jenis_perjanjian && (
                        <span className="px-2 py-0.5 bg-blue-600/10 text-blue-700 border border-blue-600/20 rounded-full text-[8px] font-bold uppercase tracking-wider">
                          {partner.jenis_perjanjian}
                        </span>
                      )}

                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider
                        ${partner.status_hubungan === 'Aktif' ? 'bg-emerald-600/10 text-emerald-700 border border-emerald-600/20' : 
                          partner.status_hubungan === 'Pasif' ? 'bg-amber-600/10 text-amber-700 border border-amber-600/20' : 
                          'bg-gray-300/30 text-[#8b7e66]'}`}>
                        {partner.status_hubungan}
                      </span>
                    </div>
                    <p className="text-[10px] text-[#8b7e66] font-semibold flex items-center gap-1">
                      {partner.region}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    {partner.total_nilai_dagang !== undefined && (
                      <div className="text-right">
                        <p className="text-[9px] text-[#8b7e66] uppercase">Nilai Dagang</p>
                        <p className="text-xs font-black text-[#5c3c10]">{partner.total_nilai_dagang.toLocaleString('id-ID')} EM</p>
                      </div>
                    )}
                    <ChevronRight className="h-4 w-4 text-[#C4B49C] group-hover:text-[#5c3c10] group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}