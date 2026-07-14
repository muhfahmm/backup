"use client"

import React from "react";
import { X, Building2, Globe, FileText, Handshake, ArrowRightLeft } from "lucide-react";
import { TradePartner } from "./mitraModalsMenu";

interface MitraDetailModalsProps {
  isOpen: boolean;
  onClose: () => void;
  partner: TradePartner | null;
  // TAMBAHAN: Callback untuk tombol Beli dan Jual
  onBeli?: (partner: TradePartner) => void;
  onJual?: (partner: TradePartner) => void;
}

export default function MitraDetailModals({ 
  isOpen, 
  onClose, 
  partner,
  onBeli,
  onJual
}: MitraDetailModalsProps) {
  // Jika modal tertutup atau data partner kosong, jangan render
  if (!isOpen || !partner) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-[70] flex items-center justify-center p-4">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />
        
        {/* Header */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
              <Building2 className="h-6 w-6 text-[#5c3c10]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">
                Detail Hubungan Dagang
              </h2>
              <p className="text-xs text-[#8b7e66] font-semibold mt-1">
                Informasi lengkap mitra dagang yang dipilih
              </p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer"
          >
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Judul Negara */}
            <div className="flex items-center gap-4 pb-4 border-b border-[#C4B49C]/20">
              <div className="p-3 rounded-xl bg-[#5c3c10]/10 border border-[#5c3c10]/20">
                <Globe className="h-8 w-8 text-[#5c3c10]" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-[#5c3c10] uppercase">{partner.nama_negara}</h3>
                <p className="text-sm text-[#8b7e66] font-semibold flex items-center gap-2 mt-0.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                  {partner.region}
                </p>
              </div>
            </div>

            {/* Grid Informasi Detail */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Kartu 1: Status & Hubungan */}
              <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/40 p-5 rounded-xl space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-[#5c3c10] border-b border-[#C4B49C]/20 pb-2 mb-2">
                  <Handshake className="h-5 w-5" />
                  <h4 className="text-sm font-black uppercase tracking-wider">Status Hubungan</h4>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#8b7e66] font-semibold">Status Saat Ini:</span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider
                    ${partner.status_hubungan === 'Aktif' ? 'bg-emerald-600/10 text-emerald-700 border border-emerald-600/20' : 
                      partner.status_hubungan === 'Pasif' ? 'bg-amber-600/10 text-amber-700 border border-amber-600/20' : 
                      'bg-gray-300/30 text-[#8b7e66]'}`}>
                    {partner.status_hubungan}
                  </span>
                </div>
                {partner.jenis_perjanjian && (
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-sm text-[#8b7e66] font-semibold">Jenis Perjanjian:</span>
                    <span className="px-3 py-1 bg-blue-600/10 text-blue-700 border border-blue-600/20 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {partner.jenis_perjanjian}
                    </span>
                  </div>
                )}
              </div>

              {/* Kartu 2: Aksi Perdagangan */}
              <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/40 p-5 rounded-xl space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-[#5c3c10] border-b border-[#C4B49C]/20 pb-2 mb-2">
                  <ArrowRightLeft className="h-5 w-5" />
                  <h4 className="text-sm font-black uppercase tracking-wider">Aksi Perdagangan</h4>
                </div>
                <div className="flex flex-col gap-3 pt-1">
                  <div className="flex items-center justify-between border-b border-[#C4B49C]/10 pb-2">
                    <span className="text-sm text-[#8b7e66] font-semibold">Mulai transaksi dengan:</span>
                    <span className="text-sm font-bold text-[#5c3c10]">{partner.nama_negara}</span>
                  </div>
                  <div className="flex gap-3">
                    {/* TOMBOL BELI - Menutup detail dan membuka modal Beli */}
                    <button
                      onClick={() => onBeli && onBeli(partner)}
                      className="flex-1 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-[#FAF6EE] text-xs font-black uppercase tracking-wide shadow-sm transition-all cursor-pointer"
                    >
                      Beli
                    </button>
                    {/* TOMBOL JUAL - Menutup detail dan membuka modal Jual */}
                    <button
                      onClick={() => onJual && onJual(partner)}
                      className="flex-1 py-2.5 rounded-lg bg-rose-700 hover:bg-rose-800 active:bg-rose-900 text-[#FAF6EE] text-xs font-black uppercase tracking-wide shadow-sm transition-all cursor-pointer"
                    >
                      Jual
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Ringkasan Deskripsi */}
            <div className="bg-[#FAF6EE] border border-[#C4B49C]/30 p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-3 border-b border-[#C4B49C]/20 pb-2">
                <FileText className="h-5 w-5 text-[#5c3c10]" />
                <h4 className="text-sm font-black text-[#5c3c10] uppercase tracking-wider">Catatan Perdagangan</h4>
              </div>
              <p className="text-sm text-[#8b7e66] leading-relaxed">
                Mitra dagang ini memiliki status hubungan <strong>{partner.status_hubungan}</strong> dengan negara Anda. 
                {partner.jenis_perjanjian ? ` Perjanjian yang berlaku saat ini adalah: ${partner.jenis_perjanjian}.` : ''}
              </p>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 border-t-2 border-[#C4B49C]/20 flex justify-end bg-[#FAF6EE] relative z-10">
          <button 
            onClick={onClose} 
            className="px-6 py-2.5 rounded-xl border-2 border-[#C4B49C] text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all cursor-pointer text-xs font-black uppercase tracking-wider"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}