'use client';

import React from 'react';
import { Gift } from 'lucide-react';

interface TopRightGiftIconProps {
  onClick?: () => void;
}

export default function TopRightGiftIcon({ onClick }: TopRightGiftIconProps) {
  return (
    <button
      onClick={onClick}
      title="Hadiah - Bonus dan Reward"
      className="fixed top-24 right-7 z-[100] w-14 h-14 rounded-full bg-gradient-to-b from-pink-300 via-pink-400 to-pink-600 border-3 border-pink-800 shadow-[0_4px_12px_rgba(0,0,0,0.3)] flex items-center justify-center cursor-pointer hover:brightness-120 hover:scale-110 active:scale-95 transition-all group"
    >
      <Gift className="w-7 h-7 text-pink-900 font-bold transition-transform group-hover:scale-125" />
    </button>
  );
}
