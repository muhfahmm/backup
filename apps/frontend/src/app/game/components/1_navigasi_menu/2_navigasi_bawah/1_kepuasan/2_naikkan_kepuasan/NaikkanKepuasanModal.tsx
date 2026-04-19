'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp } from 'lucide-react';

interface NaikkanKepuasanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NaikkanKepuasanModal({ isOpen, onClose }: NaikkanKepuasanModalProps) {
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
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-6xl min-h-[55vh] bg-[#070b14] border border-blue-500/30 rounded-2xl p-12 shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="flex justify-between items-start mb-12 relative z-10">
              <div className="flex flex-col">
                <span className="text-blue-500/50 font-black text-[10px] uppercase tracking-[0.3em] mb-2">Protocol: Intervention</span>
                <h2 className="text-white font-black text-2xl uppercase tracking-wider">Naikkan Kepuasan</h2>
              </div>

              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(239, 68, 68, 1)', color: 'white' }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center transition-all"
              >
                <X size={20} strokeWidth={3} />
              </motion.button>
            </div>

            <div className="flex flex-col items-center justify-center py-10 border-y border-white/5 relative z-10">
               <div className="w-20 h-20 bg-blue-500/5 rounded-full flex items-center justify-center mb-6 border border-blue-500/10">
                  <TrendingUp size={32} className="text-blue-500/40 animate-bounce" />
               </div>
               
               <h3 className="text-white/80 font-bold text-lg uppercase tracking-widest mb-2">
                  System Under Development
               </h3>
               <p className="text-white/30 text-xs font-mono uppercase tracking-tight text-center max-w-[250px] leading-relaxed">
                  Modul kebijakan peningkatan kesejahteraan sedang dalam tahap kalkulasi dampak ekonomi.
               </p>
            </div>

            <div className="mt-8 flex justify-between items-center relative z-10">
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">Action Locked: Development Phase</span>
               </div>
            </div>
            
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/20 rounded-tl-xl" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500/20 rounded-tr-xl" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
