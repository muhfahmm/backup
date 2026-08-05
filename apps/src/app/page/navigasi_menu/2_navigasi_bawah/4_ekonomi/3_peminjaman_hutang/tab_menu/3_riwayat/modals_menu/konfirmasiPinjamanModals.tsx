"use client"
import React from "react";
import { X, CreditCard } from "lucide-react";
import { renderFlag } from "../../utils";

interface KonfirmasiPinjamanModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loanSource: string;
  iso?: string | null;
  maxLoan: number;
  interest: number;
  term: number;
  totalPayment: number;
  currentMoney: number;
}

export default function KonfirmasiPinjamanModal({
  isOpen,
  onClose,
  onConfirm,
  loanSource,
  iso,
  maxLoan,
  interest,
  term,
  totalPayment,
  currentMoney,
}: KonfirmasiPinjamanModalProps) {
  if (!isOpen) return null;

  const isFundsSufficient = true;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl relative font-sans pointer-events-auto flex flex-col">
        {/* HEADER YANG SUDAH DISERAGAMKAN DENGAN MODAL INDUK */}
<div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
  <div>
    <h3 className="text-2xl font-black text-[#5c3c10] uppercase tracking-tight">Konfirmasi Pinjaman</h3>
    <p className="text-xs text-[#8b7e66] font-bold">Verifikasi detail pinjaman sebelum disetujui.</p>
  </div>
  
  {/* 🔥 TOMBOL TUTUP YANG SEKARANG SAMA PERSIS DENGAN MODAL INDUK */}
  <button
    onClick={onClose}
    className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5"
  >
    <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
    <X className="h-5 w-5" />
  </button>
</div>

        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 no-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-[#5c3c10]/10 border border-[#5c3c10]/20">
                    <CreditCard className="h-6 w-6 text-[#5c3c10]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-[#5c3c10]">Sumber Pinjaman</h4>
                    <p className="text-xs text-[#8b7e66]">Negara atau lembaga yang memberi pinjaman.</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/70 border border-[#C4B49C]/30 p-6">
                  <div className="flex items-center gap-3 mb-4 text-[#5c3c10] font-black">
                    {renderFlag(iso, loanSource)}
                    <span>{loanSource}</span>
                  </div>
                  <div className="text-sm text-[#5c3c10] space-y-3">
                    <div className="flex justify-between">
                      <span>Jumlah Pinjaman</span>
                      <span className="font-black">{maxLoan.toLocaleString("id-ID")} EM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bunga</span>
                      <span className="font-black">{interest}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Masa Tenggang</span>
                      <span className="font-black">{term} Hari</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-[#C4B49C]/20">
                      <span className="font-black">Total Pembayaran</span>
                      <span className="font-black text-[#5c3c10]">{totalPayment.toLocaleString("id-ID")} EM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#e4dac3]/10 border border-[#C4B49C]/30 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
              <div className="space-y-6 text-[#5c3c10]">
                <div>
                  <h4 className="text-lg font-black uppercase tracking-wider">Ringkasan Pinjaman</h4>
                  <p className="text-xs text-[#8b7e66] mt-2">Pinjaman ini akan menambah kas negara saat dikonfirmasi.</p>
                </div>

                <div className="grid grid-cols-1 gap-4 text-sm">
                  <div className="rounded-2xl bg-white/80 border border-[#C4B49C]/30 p-4">
                    <p className="text-[#8b7e66]">Saldo Kas Negara</p>
                    <p className="mt-2 text-2xl font-black text-[#5c3c10]">{currentMoney.toLocaleString("id-ID")} EM</p>
                  </div>
                  <div className="rounded-2xl bg-white/80 border border-[#C4B49C]/30 p-4">
                    <p className="text-[#8b7e66]">Total Outstanding</p>
                    <p className="mt-2 text-2xl font-black text-[#5c3c10]">{totalPayment.toLocaleString("id-ID")} EM</p>
                  </div>
                  <div className="rounded-2xl p-4 bg-emerald-100 border border-emerald-200 text-emerald-800">
                    <p className="font-black uppercase text-[10px] tracking-wider">Pinjaman siap dikonfirmasi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-8 pb-8 pt-4 lg:flex-row lg:items-center lg:justify-end">
          <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-sm font-bold text-emerald-700 lg:flex-1">
            Pinjaman akan langsung ditambahkan ke kas negara saat disetujui.
          </div>

          <button
            onClick={onClose}
            className="w-full lg:w-auto px-6 py-4 rounded-2xl border-2 border-[#C4B49C] bg-transparent text-[#5c3c10] hover:text-[#2e261a] hover:bg-[#FAF6EE] transition-all duration-200 font-black text-xs uppercase tracking-wider shadow-sm hover:shadow-md active:scale-[0.98] cursor-pointer"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="w-full lg:w-auto px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-wider shadow-md transition-all duration-200 cursor-pointer bg-[#5c3c10] text-[#FAF6EE] hover:bg-[#8b7e66] hover:shadow-lg active:scale-[0.98]"
          >
            Konfirmasi Pinjaman
          </button>
        </div>
      </div>
    </div>
  );
}
