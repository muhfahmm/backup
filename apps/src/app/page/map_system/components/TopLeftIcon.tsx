'use client';

import React from 'react';
import { Inbox } from 'lucide-react';

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

      {/* Inbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent">
          <div className="bg-[#FAF6EE] rounded-2xl p-6 border-4 border-amber-600 shadow-2xl w-full max-w-md relative overflow-hidden flex flex-col font-sans">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />
            
            <div className="flex items-center justify-between mb-4 border-b-2 border-amber-600/30 pb-3 z-10">
              <span className="text-[12px] font-black text-amber-800 tracking-widest uppercase">📬 INBOX</span>
              <button 
                onClick={onClose}
                className="text-amber-800 hover:text-amber-950 font-black text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>
            
            <div className="z-10 flex flex-col gap-4">
              <div className="text-center py-8">
                <p className="text-[#8b7e66] font-semibold">Tidak ada pesan baru</p>
              </div>
              
              <button 
                onClick={onClose}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 text-amber-900 border-2 border-amber-700 shadow-lg hover:brightness-110 active:scale-98 font-black text-xs uppercase transition-all cursor-pointer text-center"
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
