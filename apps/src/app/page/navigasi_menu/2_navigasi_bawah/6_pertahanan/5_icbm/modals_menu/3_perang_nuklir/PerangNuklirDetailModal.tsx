"use client"
import React from "react";
import { X, Bomb } from "lucide-react";

interface PerangNuklirDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PerangNuklirDetailModal({ isOpen, onClose }: PerangNuklirDetailModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-5">
            <Bomb className="h-6 w-6 text-orange-600" />
            <div>
              <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Perang Nuklir</h2>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8b7e66] mt-1">Deklarasi konflik global skala nuklir</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="w-full max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-4">
              <div className="p-5 rounded-full bg-orange-100 border border-orange-200 inline-flex items-center justify-center mx-auto">
                <Bomb className="w-14 h-14 text-orange-600" />
              </div>
              <p className="text-sm font-semibold text-[#5c3c10]">Deklarasikan serangan nuklir pertama dan tuntaskan dominasi strategis dunia.</p>
              <p className="text-xs text-[#8b7e66] leading-relaxed text-justify">
                Perang nuklir akan mengubah lanskap geopolitik secara drastis dan memicu dampak global yang tidak dapat dipulihkan. Pastikan semua persiapan militer dan diplomasi sudah matang sebelum melanjutkan.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#C4B49C]/30 bg-white/80 p-6">
                <h3 className="text-sm font-black text-[#5c3c10] uppercase tracking-wider mb-2">Efek Global</h3>
                <p className="text-[11px] text-[#8b7e66]">Konflik nuklir akan menyebabkan tekanan internasional dan krisis kemanusiaan besar-besaran.</p>
              </div>
              <div className="rounded-2xl border border-[#C4B49C]/30 bg-white/80 p-6">
                <h3 className="text-sm font-black text-[#5c3c10] uppercase tracking-wider mb-2">Status Persenjataan</h3>
                <p className="text-[11px] text-[#8b7e66]">Memerlukan persenjataan nuklir yang siap dan stabilitas domestik.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#C4B49C]/30 bg-white/80 p-6">
              <h3 className="text-sm font-black text-[#5c3c10] uppercase tracking-wider mb-3">Perhatian Khusus</h3>
              <ul className="space-y-2 text-[11px] text-[#8b7e66] list-disc list-inside leading-relaxed">
                <li>Hanya dapat dilakukan setelah Program Nuklir aktif.</li>
                <li>Perang nuklir meningkatkan risiko sanksi dan konflik global.</li>
                <li>Pertimbangkan implikasi jangka panjang bagi stabilitas negara Anda.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
