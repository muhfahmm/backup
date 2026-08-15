'use client';

import React from 'react';
import { Inbox, X } from 'lucide-react'; // 🔥 Tambahkan import X

interface TopLeftIconProps {
  onClick?: () => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function TopLeftIcon({ onClick, isOpen, onClose }: TopLeftIconProps) {
  return (
    <>
      <button
        onClick={onClick}
        title="Inbox - Pesan dan Notifikasi"
        className="fixed top-24 left-7 z-[100] w-14 h-14 rounded-full bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-600 border-3 border-yellow-800 shadow-[0_4px_12px_rgba(0,0,0,0.3)] flex items-center justify-center cursor-pointer hover:brightness-120 hover:scale-110 active:scale-95 transition-all group"
      >
        <Inbox className="w-7 h-7 text-yellow-900 font-bold transition-transform group-hover:scale-125" />
      </button>

      {/* 🔥 Inbox Modal - Ukuran Besar seperti modal lainnya */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
          <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

            {/* 🔥 HEADER MODAL */}
            <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-600/10 rounded-xl border border-amber-600/20">
                  <Inbox className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-[#5c3c10] tracking-tight leading-none uppercase">Inbox & Notifikasi</h2>
                  <p className="text-xs text-[#8b7e66] font-medium">Pesan dan laporan dari berbagai kementerian</p>
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

            {/* 🔥 BODY MODAL */}
            <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center text-center space-y-4 max-w-md mx-auto">
                <Inbox className="h-16 w-16 text-[#C4B49C]/50" />
                <h4 className="text-lg font-black text-[#5c3c10] uppercase">Tidak Ada Pesan</h4>
                <p className="text-xs text-[#8b7e66] leading-relaxed">
                  Belum ada pesan atau pemberitahuan yang masuk. Semua laporan dan notifikasi akan muncul di sini.
                </p>
              </div>
            </div>

            {/* 🔥 FOOTER MODAL */}
            <div className="p-4 bg-[#FAF6EE] border-t-2 border-[#C4B49C]/20 flex justify-end relative z-10 shrink-0">
              <button 
                onClick={onClose}
                className="px-8 py-3 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all font-black text-xs uppercase tracking-wider cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}