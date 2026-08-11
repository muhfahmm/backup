'use client';

import React from 'react';
import { Newspaper } from 'lucide-react';

interface TopRightNewsIconProps {
  onClick?: () => void;
}

export default function TopRightNewsIcon({ onClick }: TopRightNewsIconProps) {
  return (
    <button
      onClick={onClick}
      title="Berita - Berita dan Update Negara"
      className="fixed top-40 right-7 z-[100] w-14 h-14 rounded-full bg-gradient-to-b from-cyan-300 via-cyan-400 to-cyan-600 border-3 border-cyan-800 shadow-[0_4px_12px_rgba(0,0,0,0.3)] flex items-center justify-center cursor-pointer hover:brightness-120 hover:scale-110 active:scale-95 transition-all group"
    >
      <Newspaper className="w-7 h-7 text-cyan-900 font-bold transition-transform group-hover:scale-125" />
    </button>
  );
}
