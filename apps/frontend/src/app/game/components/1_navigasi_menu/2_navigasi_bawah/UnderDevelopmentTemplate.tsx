'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, LucideIcon, Wrench } from 'lucide-react';

interface UnderDevelopmentTemplateProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  protocol: string;
  icon: LucideIcon;
  colorClass?: string;
  borderColorClass?: string;
  protocolText?: string;
  description?: string;
}

export default function UnderDevelopmentTemplate({
  isOpen,
  onClose,
  title,
  protocol,
  icon: Icon,
  colorClass = "text-emerald-500",
  borderColorClass = "border-emerald-500/30",
  protocolText = "System Under Development",
  description = "Modul ini sedang dalam tahap sinkronisasi data taktis dan stabilisasi algoritma protokol."
}: UnderDevelopmentTemplateProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`relative w-full max-w-6xl min-h-[55vh] bg-[#070b14]/95 border ${borderColorClass} rounded-2xl p-12 shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col`}
          >
            {/* Background Glow */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] pointer-events-none opacity-20`} />

            {/* Header */}
            <div className="flex justify-between items-start mb-16 relative z-10">
              <div className="flex flex-col">
                <span className={`${colorClass} opacity-50 font-black text-[10px] uppercase tracking-[0.4em] mb-2`}>Protocol: {protocol}</span>
                <h2 className="text-white font-black text-4xl uppercase tracking-tighter">{title}</h2>
              </div>

              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(239, 68, 68, 1)', color: 'white' }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center transition-all shadow-[0_0_20px_rgba(239,68,68,0.15)] group"
              >
                <X size={24} strokeWidth={3} />
              </motion.button>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center py-12 border-y border-white/5 relative z-10">
               <div className={`w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10`}>
                  <Icon size={40} className={`${colorClass} opacity-40 animate-pulse`} />
               </div>
               
               <h3 className="text-white/80 font-black text-2xl uppercase tracking-[0.2em] mb-4">
                  {protocolText}
               </h3>
               <p className="text-white/20 text-sm font-mono uppercase tracking-widest text-center max-w-2xl leading-relaxed">
                  {description}
               </p>
            </div>

            {/* Footer */}
            <div className="mt-12 flex justify-between items-center relative z-10">
               <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Deployment Locked</span>
                  </div>
                  <div className="h-4 w-[1px] bg-white/5" />
                  <span className="text-[10px] font-mono text-white/10 uppercase italic tracking-widest">Restricted Access // Alpha Build</span>
               </div>
               
               <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-1 bg-white/5 rounded-full" />
                  ))}
               </div>
            </div>

            {/* Tactical Corners */}
            <div className={`absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 ${borderColorClass} opacity-40 rounded-tl-xl`} />
            <div className={`absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 ${borderColorClass} opacity-40 rounded-tr-xl`} />
            <div className={`absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 ${borderColorClass} opacity-40 rounded-bl-xl`} />
            <div className={`absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 ${borderColorClass} opacity-40 rounded-br-xl`} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
