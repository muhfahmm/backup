'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ResourceData {
  emas: number;
  uranium: number;
  batu_bara: number;
  minyak_bumi: number;
  gas_alam: number;
  garam: number;
  nikel: number;
  litium: number;
  tembaga: number;
  aluminium: number;
  logam_tanah_jarang: number;
  bijih_besi: number;
}

interface ResourceHUDProps {
  resources: ResourceData | null;
  isLoading: boolean;
}

const resourceConfig = [
  { key: 'emas', label: 'Emas', color: 'text-yellow-400', border: 'border-yellow-500/20' },
  { key: 'uranium', label: 'Uranium', color: 'text-lime-400', border: 'border-lime-500/20' },
  { key: 'minyak_bumi', label: 'Minyak', color: 'text-slate-200', border: 'border-slate-500/20' },
  { key: 'gas_alam', label: 'Gas Alam', color: 'text-cyan-400', border: 'border-cyan-500/20' },
  { key: 'nikel', label: 'Nikel', color: 'text-blue-200', border: 'border-blue-500/20' },
  { key: 'litium', label: 'Litium', color: 'text-purple-400', border: 'border-purple-500/20' },
  { key: 'batu_bara', label: 'Batu Bara', color: 'text-neutral-500', border: 'border-neutral-500/20' },
  { key: 'bijih_besi', label: 'Besi', color: 'text-orange-300', border: 'border-orange-500/20' },
];

export default function ResourceHUD({ resources, isLoading }: ResourceHUDProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-10 gap-3">
        <div className="w-8 h-8 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
        <span className="text-emerald-500/50 font-mono text-[10px] uppercase tracking-widest">Scanning Resources...</span>
      </div>
    );
  }

  if (!resources) {
    return (
      <div className="py-10 text-center">
        <span className="text-white/20 font-mono text-[10px] uppercase tracking-widest">No spectral data detected</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 mt-2">
      {resourceConfig.map((res) => (
        <motion.div 
          key={res.key}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`flex flex-col p-3 bg-white/5 border ${res.border} rounded-lg relative group overflow-hidden`}
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/10 group-hover:bg-emerald-500/40 transition-colors" />
          <span className="text-[9px] font-black uppercase tracking-tighter text-white/40 mb-1">{res.label}</span>
          <div className="flex items-baseline gap-2">
            <span className={`text-xl font-mono font-black ${res.color}`}>
              {(resources as any)[res.key] || 0}
            </span>
            <span className="text-[8px] font-bold text-white/20 uppercase tracking-tighter">Units</span>
          </div>
          
          {/* Subtle decoration */}
          <div className="absolute -bottom-1 -right-1 opacity-10 group-hover:opacity-20 transition-opacity">
             <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
             </svg>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
