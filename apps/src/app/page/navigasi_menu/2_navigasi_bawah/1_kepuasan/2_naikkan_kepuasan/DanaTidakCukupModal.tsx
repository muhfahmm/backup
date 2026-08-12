"use client";

import { X, Coins, AlertCircle } from "lucide-react";

interface DanaTidakCukupModalProps {
  isOpen: boolean;
  onClose: () => void;
  requiredCost: number;
  currentBudget: number;
  actionName?: string;
  onTakeLoan?: () => void; // Opsional: jika ingin menambahkan tombol pinjaman
}

export default function DanaTidakCukupModal({
  isOpen,
  onClose,
  requiredCost,
  currentBudget,
  actionName = "Aksi ini",
  onTakeLoan,
}: DanaTidakCukupModalProps) {
  if (!isOpen) return null;

  const shortage = Math.max(0, requiredCost - currentBudget);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        
        {/* Parchment radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        {/* Header */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-rose-500/10 rounded-xl border border-rose-500/20">
                <AlertCircle className="h-6 w-6 text-rose-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Dana Tidak Mencukupi</h2>
              </div>
            </div>
          </div>

          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Dynamic Treasury Bar (sama seperti modal induk) */}
        <div className="px-8 py-4 bg-[#e4dac3]/20 border-b border-[#C4B49C]/20 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-3">
            <Coins className="h-5 w-5 text-amber-700" />
            <span className="text-xs font-bold text-[#5c3c10] uppercase tracking-wide">
              Kas Negara Saat Ini:
            </span>
            <span className="text-sm font-black text-[#2e261a]">
              {currentBudget.toLocaleString("id-ID")}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#5c3c10] uppercase tracking-wide">
              Dibutuhkan:
            </span>
            <span className="text-sm font-black text-rose-600">
              {requiredCost.toLocaleString("id-ID")}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="space-y-6 animate-in fade-in duration-500">

            {/* Pesan utama */}
            <div className="bg-rose-50/50 border-2 border-rose-300/50 rounded-2xl p-6 text-center space-y-3">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-rose-100 text-rose-600">
                  <AlertCircle size={40} />
                </div>
              </div>
              <h3 className="text-xl font-black text-[#2e261a] uppercase tracking-wide">
                {actionName} gagal!
              </h3>
              <p className="text-sm text-[#5c3c10] font-semibold">
                Kas negara tidak mencukupi untuk melaksanakan aksi ini.
              </p>
              <div className="mt-2 bg-white/70 border border-rose-200/50 rounded-xl p-4 text-xs space-y-1 text-[#5c3c10]">
                <div className="flex justify-between">
                  <span className="font-bold">Dana dibutuhkan:</span>
                  <span className="text-rose-700 font-black">{requiredCost.toLocaleString("id-ID")} EM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Kas tersedia:</span>
                  <span className="text-emerald-700 font-black">{currentBudget.toLocaleString("id-ID")} EM</span>
                </div>
                <div className="flex justify-between border-t border-rose-200/50 pt-2 mt-1">
                  <span className="font-bold">Kekurangan dana:</span>
                  <span className="text-rose-700 font-black">- {shortage.toLocaleString("id-ID")} EM</span>
                </div>
              </div>
              <p className="text-xs text-[#8b7e66] mt-2">
                Kumpulkan lebih banyak dana melalui pajak, perdagangan, atau tunggu pemasukan negara berikutnya.
              </p>
            </div>

            {/* Tombol aksi (bisa ditambah ambil hutang opsional) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all font-black text-xs uppercase tracking-wider cursor-pointer"
              >
                Kembali
              </button>
              {onTakeLoan && (
                <button
                  onClick={onTakeLoan}
                  className="px-8 py-3 rounded-xl bg-gradient-to-b from-[#ffe07d] via-[#fcae1e] to-[#c77a00] text-[#5c3c10] border-2 border-[#1e2f3d]/15 shadow-md hover:brightness-110 active:scale-95 transition-all font-black text-xs uppercase cursor-pointer"
                >
                  Ambil Pinjaman Darurat
                </button>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}