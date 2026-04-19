"use client"

import { ArrowRightLeft } from "lucide-react";
import { motion } from "framer-motion";

interface NavAtasProps {
  isActive: boolean;
  onClick: () => void;
}

export default function NavAtasPerdagangan({ isActive, onClick }: NavAtasProps) {
  return (
    <button
      onClick={onClick}
      className={`
        group relative flex items-center gap-2.5 px-4 py-2 rounded-xl transition-all duration-300
        ${isActive 
          ? 'bg-white/10 shadow-[0_0_15px_rgba(249,115,22,0.3)] border border-white/10' 
          : 'hover:bg-white/5 border border-transparent'
        }
      `}
    >
      <ArrowRightLeft 
        size={16} 
        className={`transition-all duration-300 ${isActive ? 'text-orange-400' : 'text-zinc-500 group-hover:text-zinc-300'}`} 
      />
      
      <span className={`
        text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300
        ${isActive ? 'text-white block' : 'text-zinc-500 group-hover:text-zinc-300 hidden sm:block'}
      `}>
        Map Perdagangan
      </span>

      {isActive && (
        <motion.div 
          layoutId="activeGlow"
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
        />
      )}
    </button>
  );
}
