'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';

interface SelectionRequiredModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SelectionRequiredModal({ isOpen, onClose }: SelectionRequiredModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md bg-[#0f172a] border border-red-500/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(239,68,68,0.2)]"
                    >
                        {/* Header Decoration */}
                        <div className="h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                        
                        <div className="p-8 flex flex-col items-center text-center">
                            {/* Warning Icon */}
                            <div className="mb-6 w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center relative">
                                <motion.div 
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="absolute inset-0 rounded-full bg-red-500/5"
                                />
                                <AlertTriangle size={40} className="text-red-500" />
                            </div>

                            <h3 className="text-red-500 font-black text-xl tracking-[0.2em] uppercase mb-4">
                                Target Not Selected
                            </h3>
                            
                            <p className="text-white/60 text-xs font-medium tracking-widest leading-relaxed uppercase max-w-[280px] mb-8">
                                Anda harus memilih negara target dari radar sebelum memulai simulasi strategi.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(239,68,68,1)', color: '#000' }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onClose}
                                className="w-full py-4 border-2 border-red-500 text-red-500 font-black text-xs tracking-[0.4em] uppercase transition-all duration-300"
                            >
                                Understood
                            </motion.button>
                        </div>

                        {/* HUD Corners */}
                        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-red-500/20" />
                        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-red-500/20" />
                        <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-red-500/20" />
                        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-red-500/20" />
                        
                        {/* Status bar */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1">
                            <div className="w-1 h-1 bg-red-500 animate-pulse" />
                            <span className="text-[8px] font-mono text-red-500/40 tracking-widest uppercase">System Restriction Active</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
