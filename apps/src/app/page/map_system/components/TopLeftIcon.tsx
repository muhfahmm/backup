'use client';

import React from 'react';
import { Inbox } from 'lucide-react';

interface TopLeftIconProps {
  onClick?: () => void;
}

export default function TopLeftIcon({ onClick }: TopLeftIconProps) {
  return (
    <button
      onClick={onClick}
      title="Inbox - Pesan dan Notifikasi"
      className="fixed top-24 left-7 z-[100] w-14 h-14 rounded-full bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-600 border-3 border-yellow-800 shadow-[0_4px_12px_rgba(0,0,0,0.3)] flex items-center justify-center cursor-pointer hover:brightness-120 hover:scale-110 active:scale-95 transition-all group"
    >
      <Inbox className="w-7 h-7 text-yellow-900 font-bold transition-transform group-hover:scale-125" />
    </button>
  );
}
