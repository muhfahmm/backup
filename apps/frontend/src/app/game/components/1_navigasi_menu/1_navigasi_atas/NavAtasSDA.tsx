"use client"

import { Gem } from "lucide-react";
import { motion } from "framer-motion";

interface NavAtasProps {
  isActive: boolean;
  onClick: () => void;
}

export default function NavAtasSDA({ isActive, onClick }: NavAtasProps) {
  return (
    <button
      onClick={onClick}
      className={`
        group relative flex items-center transition-all duration-500 rounded-xl cursor-pointer
        ${isActive 
          ? 'bg-white/10 shadow-[0_0_15px_rgba(16,185,129,0.3)] border border-white/10 px-4 py-2 gap-2.5' 
          : 'hover:bg-white/5 border border-transparent px-3 py-2 gap-0'
        }
      `}
    >
      <Gem 
        size={16} 
        className={`transition-all duration-300 ${isActive ? 'text-emerald-400' : 'text-zinc-500 group-hover:text-zinc-300'}`} 
      />
      
      {isActive && (
        <motion.span 
          initial={{ opacity: 0, width: 0, x: -10 }}
          animate={{ opacity: 1, width: 'auto', x: 0 }}
          className="text-[10px] font-black uppercase tracking-[0.2em] text-white whitespace-nowrap overflow-hidden"
        >
          Map SDA
        </motion.span>
      )}

      {isActive && (
        <motion.div 
          layoutId="activeGlow"
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
        />
      )}

      {!isActive && <Tooltip label="Map SDA" />}
    </button>
  );
}

function Tooltip({ label }: { label: string }) {
  return (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-zinc-950 border border-white/10 text-zinc-200 text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-2xl z-[150] translate-y-1 group-hover:translate-y-0">
      {label}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-[5px] border-x-transparent border-t-[5px] border-t-zinc-950"></div>
    </div>
  );
}
