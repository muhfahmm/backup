'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Wrench } from 'lucide-react';

interface StatistikKepuasanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StatistikKepuasanModal({ isOpen, onClose }: StatistikKepuasanModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-6xl min-h-[55vh] bg-[#070b14] border border-emerald-500/30 rounded-2xl p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/5 blur-[80px] pointer-events-none" />

            {/* Header: Label & Close Button */}
            <div className="flex justify-between items-start mb-12 relative z-10">
              <div className="flex flex-col">
                <span className="text-emerald-500/50 font-black text-[10px] uppercase tracking-[0.3em] mb-2">Protocol: Analysis</span>
                <h2 className="text-white font-black text-2xl uppercase tracking-wider">Statistik Kepuasan</h2>
              </div>

              {/* Red Close Button */}
              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(239, 68, 68, 1)', color: 'white' }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center transition-all shadow-[0_0_15px_rgba(239,68,68,0.2)]"
              >
                <X size={20} strokeWidth={3} />
              </motion.button>
            </div>

            {/* Main Content: Development Status */}
            <div className="flex flex-col items-center justify-center py-10 border-y border-white/5 relative z-10">
               <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
                  <Wrench size={32} className="text-emerald-500/40 animate-pulse" />
               </div>
               
               <h3 className="text-white/80 font-bold text-lg uppercase tracking-widest mb-2">
                  System Under Development
               </h3>
               <p className="text-white/30 text-xs font-mono uppercase tracking-tight text-center max-w-[250px] leading-relaxed">
                  Modul analisis data populasi sedang dalam tahap sinkronisasi data taktis.
               </p>
            </div>

            {/* Footer / Status Bar */}
            <div className="mt-8 flex justify-between items-center relative z-10">
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">Access Denied: Pending Dev</span>
               </div>
               <span className="text-[9px] font-mono text-white/10 uppercase italic">Build: v0.4.2-Alpha</span>
            </div>

            {/* HUD Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-emerald-500/20 rounded-tl-xl" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-emerald-500/20 rounded-tr-xl" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-emerald-500/20 rounded-bl-xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-500/20 rounded-br-xl" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
