'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Country } from '../types/country';
import { getFlagUrl } from '../utils/countryMapping';

interface MapNavbarProps {
    selectedCountry: Country | null;
}

export default function MapNavbar({ selectedCountry }: MapNavbarProps) {
    const formatNumber = (num: string | number) => {
        return new Intl.NumberFormat('id-ID').format(Number(num));
    };

    return (
        <nav className="absolute top-0 left-0 w-full z-40 p-6 pointer-events-none select-none">
            {/* Background HUD Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent pointer-events-none h-40" />

            <div className="flex justify-between items-start relative z-50">
                {/* Left Side: National Identity */}
                <div className="flex items-center gap-6 pointer-events-auto">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={selectedCountry?.kode_negara || 'default'}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex items-center gap-6"
                        >
                            <div className="relative">
                                <div className="w-16 h-12 border-2 border-emerald-500/30 rounded-lg flex items-center justify-center bg-[#070b14] overflow-hidden group shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                                    {selectedCountry ? (
                                        <img 
                                            src={getFlagUrl(selectedCountry.kode_negara)!} 
                                            className="w-full h-full object-cover opacity-90 scale-110" 
                                            alt="Flag"
                                        />
                                    ) : (
                                        <span className="text-emerald-500 font-black text-2xl">P</span>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent" />
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-pulse border-2 border-[#070b14]" />
                            </div>
                            
                            <div className="flex flex-col">
                                <h1 className="text-emerald-400 font-black text-xs tracking-[0.5em] uppercase leading-none mb-1.5 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">
                                    {selectedCountry?.nama_negara || 'President Simulator'}
                                </h1>
                                <div className="flex items-center gap-3">
                                    <span className="text-white/40 font-mono text-[9px] tracking-[0.3em] uppercase">
                                        {selectedCountry ? `CAPITAL: ${selectedCountry.ibukota}` : 'Global Strategy Framework v4.0'}
                                    </span>
                                    {selectedCountry && (
                                        <div className="flex gap-1">
                                            <div className="w-1 h-2 bg-emerald-500/40 rounded-full" />
                                            <div className="w-1 h-2 bg-emerald-500/20 rounded-full" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Side: National Statistics */}
                <div className="flex items-start gap-8 pointer-events-auto">
                    <AnimatePresence mode="wait">
                        {selectedCountry ? (
                            <motion.div 
                                key={selectedCountry.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="flex gap-8"
                            >
                                <div className="bg-[#0f172a]/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl shadow-2xl relative overflow-hidden group min-w-[140px]">
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
                                    <span className="text-white/30 font-bold text-[8px] tracking-[0.3em] uppercase block mb-1">Populasi Nasional</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-white font-mono text-xl font-black tracking-wider">
                                            {formatNumber(selectedCountry.jumlah_penduduk)}
                                        </span>
                                        <span className="text-emerald-500/60 text-[8px] font-bold uppercase tracking-tighter">JIWA</span>
                                    </div>
                                    {/* Micro-animation scanner */}
                                    <motion.div 
                                        animate={{ top: ['0%', '100%', '0%'] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="absolute left-0 w-full h-[10%] bg-emerald-500/5 pointer-events-none"
                                    />
                                </div>

                                <div className="bg-[#0f172a]/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl shadow-2xl relative overflow-hidden group min-w-[120px]">
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
                                    <span className="text-white/30 font-bold text-[8px] tracking-[0.3em] uppercase block mb-1">Agama & Ideologi</span>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <span className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest">{selectedCountry.agama}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-white font-mono text-[10px] uppercase opacity-60 tracking-[0.2em]">{selectedCountry.ideologi}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#0f172a]/80 backdrop-blur-md border border-emerald-500/30 px-6 py-3 rounded-xl shadow-2xl relative overflow-hidden group min-w-[140px]">
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                                    <span className="text-emerald-500/50 font-bold text-[8px] tracking-[0.3em] uppercase block mb-1">Anggaran Negara</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-emerald-400 font-mono text-xl font-black tracking-wider">
                                            ${formatNumber(selectedCountry.anggaran)}
                                        </span>
                                        <span className="text-emerald-500/60 text-[8px] font-bold uppercase tracking-tighter">USD</span>
                                    </div>
                                    <motion.div 
                                        animate={{ top: ['0%', '100%', '0%'] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        className="absolute left-0 w-full h-[10%] bg-emerald-500/10 pointer-events-none"
                                    />
                                </div>
                            </motion.div>
                        ) : (
                            <div className="bg-[#0f172a] border-l-2 border-emerald-500 px-6 py-3 flex flex-col items-end">
                                <span className="text-emerald-500 font-black text-[10px] tracking-[0.3em] uppercase mb-1">Mission Brief</span>
                                <span className="text-white font-bold text-xs tracking-[0.1em] uppercase">Establish Sovereign Authority</span>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Futuristic Decor */}
            <div className="mt-8 flex gap-2 overflow-hidden px-4 opacity-30">
                 {[...Array(30)].map((_, i) => (
                     <div key={i} className={`h-[1px] flex-grow ${i % 5 === 0 ? 'bg-emerald-500' : 'bg-white/10'} ${i % 3 === 0 ? 'w-12' : 'w-4'}`} />
                 ))}
            </div>
        </nav>
    );
}
