'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Country } from '../types/country';
import { getFlagUrl } from '../utils/countryMapping';

interface MapNavbarProps {
    selectedCountry: Country | null;
}

export default function MapNavbar({ selectedCountry }: MapNavbarProps) {
    const router = useRouter();

    const formatNumber = (num: string | number) => {
        return new Intl.NumberFormat('id-ID').format(Number(num));
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#070b14] border-b border-emerald-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] h-20 select-none flex items-center justify-between px-8">
            {/* HUD Scanline Effect - Subtle */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
            </div>

            {/* Left Wing: National Identity */}
            <div className="flex items-center gap-8 relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={selectedCountry?.kode_negara || 'default'}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="flex items-center gap-6"
                    >
                        {/* Flag Display */}
                        <div className="relative group">
                            <div className="w-16 h-10 border border-white/10 overflow-hidden bg-black/40">
                                {selectedCountry ? (
                                    <img 
                                        src={getFlagUrl(selectedCountry.kode_negara)!} 
                                        className="w-full h-full object-cover grayscale-[0.2] contrast-125" 
                                        alt="Flag"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-emerald-500/10">
                                        <span className="text-emerald-500/40 text-xl font-black">P</span>
                                    </div>
                                )}
                            </div>
                            {/* Decorative Corner Brackets */}
                            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-emerald-500/50" />
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-emerald-500/50" />
                        </div>
                        
                        <div className="flex flex-col">
                            <h1 className="text-emerald-400 font-black text-sm tracking-[0.4em] uppercase leading-none mb-1">
                                {selectedCountry?.nama_negara || 'Global Strategy Engine'}
                            </h1>
                            <div className="flex items-center gap-3">
                                <span className="text-white/40 font-mono text-[10px] tracking-[0.2em] uppercase">
                                    {selectedCountry ? `COMMAND CENTER : ${selectedCountry.ibukota}` : 'Tactical Map v4.5 | Awaiting Selection'}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Right Wing: Integrated Info Bar */}
            <div className="flex items-center h-full relative z-10">
                <AnimatePresence mode="wait">
                    {selectedCountry ? (
                        <motion.div 
                            key={selectedCountry.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="flex items-center h-full"
                        >
                            {/* POPULATION */}
                            <div className="flex flex-col justify-center px-8 h-full">
                                <span className="text-white/30 font-bold text-[9px] tracking-[0.2em] uppercase mb-1">Populasi Nasional</span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-white font-mono text-xl font-black tracking-wider">
                                        {formatNumber(selectedCountry.jumlah_penduduk)}
                                    </span>
                                    <span className="text-emerald-500/40 text-[9px] font-bold uppercase">UNIT</span>
                                </div>
                            </div>

                            {/* VERTICAL DIVIDER */}
                            <div className="w-[1px] h-8 bg-white/10" />

                            {/* IDEOLOGY / RELIGION */}
                            <div className="flex flex-col justify-center px-8 h-full">
                                <span className="text-white/30 font-bold text-[9px] tracking-[0.2em] uppercase mb-1">Keamanan & Ideologi</span>
                                <div className="flex flex-col leading-tight">
                                    <span className="text-emerald-400 font-mono text-xs font-black uppercase tracking-widest leading-none">
                                        {selectedCountry.agama}
                                    </span>
                                    <span className="text-white/60 font-mono text-[10px] uppercase tracking-[0.1em]">
                                        {selectedCountry.ideologi}
                                    </span>
                                </div>
                            </div>

                            {/* VERTICAL DIVIDER */}
                            <div className="w-[1px] h-8 bg-white/10" />

                            {/* BUDGET */}
                            <div className="flex flex-col justify-center px-8 h-full bg-emerald-500/5 min-w-[200px]">
                                <span className="text-emerald-500/50 font-bold text-[9px] tracking-[0.2em] uppercase mb-1">Anggaran Negara</span>
                                <div className="flex items-baseline gap-2 text-emerald-400">
                                    <span className="text-emerald-400 font-mono text-xl font-black tracking-wider drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]">
                                        ${formatNumber(selectedCountry.anggaran)}
                                    </span>
                                    <span className="text-emerald-500/60 text-[9px] font-bold uppercase">USD</span>
                                </div>
                            </div>

                            {/* START BUTTON SECTION */}
                            <div className="pl-6 pr-4 h-full flex items-center border-l border-white/10">
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(16,185,129,1)', color: '#000' }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative px-10 py-3 bg-transparent border-2 border-emerald-500 text-emerald-500 font-black text-xs tracking-[0.5em] uppercase transition-all duration-300 group overflow-hidden cursor-pointer"
                                    onClick={() => router.push('/pages/main_pages')}
                                >
                                    <span className="relative z-10">MULAI</span>
                                    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-500 group-hover:border-black" />
                                    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-500 group-hover:border-black" />
                                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-emerald-500 group-hover:border-black" />
                                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-emerald-500 group-hover:border-black" />
                                    <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.button>
                            </div>
                        </motion.div>
                    ) : (
                        <div className="flex items-center px-8 h-full bg-emerald-500/5 gap-6 border-l border-white/5">
                            <div className="flex flex-col items-end">
                                <span className="text-emerald-500 font-black text-[10px] tracking-[0.3em] uppercase mb-0.5">S-LEVEL AUTH REQUIRED</span>
                                <span className="text-white/60 font-bold text-[9px] tracking-[0.1em] uppercase">Select territory to initialize console</span>
                            </div>
                            <div className="flex gap-1.5 opacity-40">
                                <div className="w-1 h-4 bg-emerald-500/40 animate-pulse" />
                                <div className="w-1 h-4 bg-emerald-500/40 animate-pulse [animation-delay:0.2s]" />
                                <div className="w-1 h-4 bg-emerald-500/40 animate-pulse [animation-delay:0.4s]" />
                            </div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
