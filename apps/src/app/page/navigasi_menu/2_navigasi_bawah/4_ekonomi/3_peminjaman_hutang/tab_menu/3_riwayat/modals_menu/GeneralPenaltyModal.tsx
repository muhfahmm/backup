"use client";
import React from "react";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function GeneralPenaltyModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">

        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div>
            <h3 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Penjelasan Denda Telat Bayar</h3>
            <p className="text-xs text-[#8b7e66]">Rincian aturan denda bila pembayaran pinjaman terlewat.</p>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="space-y-3 text-sm text-[#5c3c10]">
            <p>Jika sebuah pinjaman jatuh tempo dan tidak bisa dibayar penuh, sistem akan mencoba membayar sebanyak mungkin dari kas negara.</p>
            <p>Jika masih ada sisa, sistem menandainya sebagai <strong>terlewat</strong> dan menambahkan denda setiap bulannya.</p>
            <p>Rumus denda yang digunakan: <strong>denda = outstanding × (0.015 × jumlah_bulan_terlewat)</strong>.</p>
            <p>Contoh: jika outstanding = 10.000 EM dan bulan terlewat = 1, maka denda = 10.000 × (0.015 × 1) = 150 EM.</p>
            <p>Perhitungan ini sama untuk pinjaman bilateral dan multilateral di game saat ini.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
