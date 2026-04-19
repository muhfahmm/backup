'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    X, 
    Zap, 
    Shield, 
    TrendingUp, 
    Globe, 
    ChevronRight,
    Component,
    Database,
    Cpu
} from 'lucide-react';
import { Country } from '../types/country';

interface CountryDetailDashboardProps {
    isOpen: boolean;
    onClose: () => void;
    country: Country | null;
}

export default function CountryDetailDashboard({ isOpen, onClose, country }: CountryDetailDashboardProps) {
    if (!country) return null;

    const menuItems = [
        { id: 'sda', label: 'Sumber Daya Alam', icon: Database, color: 'text-emerald-400', desc: 'Analisis cadangan energi & mineral' },
        { id: 'econ', label: 'Stabilitas Ekonomi', icon: TrendingUp, color: 'text-blue-400', desc: 'Laporan PDB & pertumbuhan nasional' },
        { id: 'mil', label: 'Kekuatan Militer', icon: Shield, color: 'text-red-400', desc: 'Status pertahanan & persenjataan' },
        { id: 'geo', label: 'Pengaruh Geopolitik', icon: Globe, color: 'text-amber-400', desc: 'Relasi diplomatik & suara PBB' }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[150] bg-[#070b14]/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12 overflow-hidden"
                >
                    {/* Background Tech Ornaments */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[120px]" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    </div>

                    <div className="relative w-full max-w-7xl h-full flex flex-col">
                        {/* Header */}
                        <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-8 relative">
                            <motion.div 
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] text-emerald-500 font-black tracking-widest uppercase">
                                        Command Status: Active
                                    </div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                </div>
                                <h2 className="text-white text-6xl font-black tracking-tighter uppercase leading-none">
                                    {country.nama_negara}
                                </h2>
                                <p className="text-white/40 font-mono text-sm tracking-[0.3em] uppercase mt-4">
                                    National Intelligence Dashboard v13.0
                                </p>
                            </motion.div>

                            <motion.button 
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(239,68,68,0.1)', borderColor: 'rgba(239,68,68,0.5)' }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onClose}
                                className="flex items-center gap-4 px-6 py-3 border border-white/10 bg-white/5 rounded-lg group transition-all relative"
                            >
                                <div className="flex flex-col items-end">
                                    <span className="text-[10px] font-black tracking-[0.2em] text-white/20 group-hover:text-red-500/50 transition-colors uppercase leading-none mb-1">Close</span>
                                    <span className="text-[12px] font-black tracking-[0.1em] text-white/60 group-hover:text-white transition-colors uppercase leading-none">Terminal</span>
                                </div>
                                <div className="w-10 h-10 rounded bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:border-red-500 group-hover:bg-red-500 group-hover:text-black transition-all">
                                    <X size={20} />
                                </div>

                                {/* HUD Decor Corners */}
                                <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white/20 group-hover:border-red-500/50 transition-colors" />
                                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white/20 group-hover:border-red-500/50 transition-colors" />
                            </motion.button>
                        </div>

                        {/* Content Grid */}
                        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 overflow-y-auto pr-4 custom-scrollbar">
                            {/* Left: Main Stats */}
                            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                {menuItems.map((item, idx) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 + (idx * 0.1) }}
                                        whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.1)' }}
                                        className="relative p-8 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-sm group cursor-pointer overflow-hidden transition-all"
                                    >
                                        <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                                            <item.icon size={28} />
                                        </div>
                                        <h3 className="text-white text-2xl font-bold mb-2 uppercase tracking-wide">
                                            {item.label}
                                        </h3>
                                        <p className="text-white/40 text-sm leading-relaxed mb-8">
                                            {item.desc}
                                        </p>
                                        <div className="flex items-center gap-2 text-white/20 group-hover:text-emerald-400 transition-colors uppercase font-black text-[10px] tracking-widest">
                                            Access Data <ChevronRight size={14} />
                                        </div>

                                        {/* Decorative elements */}
                                        <div className="absolute top-4 right-4 text-white/5">
                                            <item.icon size={80} />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Right: Technical Summary */}
                            <motion.div 
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="lg:col-span-4 flex flex-col gap-6"
                            >
                                <div className="p-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm">
                                    <div className="flex items-center gap-2 mb-6">
                                        <Zap size={16} className="text-emerald-500" />
                                        <span className="text-emerald-500 font-bold text-xs tracking-widest uppercase">System Overview</span>
                                    </div>
                                    
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                            <span className="text-white/40 uppercase text-[10px] font-black tracking-widest">Capital</span>
                                            <span className="text-white font-bold">{country.ibukota}</span>
                                        </div>
                                        <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                            <span className="text-white/40 uppercase text-[10px] font-black tracking-widest">IDEOLOGY</span>
                                            <span className="text-white font-bold">{country.ideologi}</span>
                                        </div>
                                        <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                            <span className="text-white/40 uppercase text-[10px] font-black tracking-widest">RELIGION</span>
                                            <span className="text-white font-bold">{country.agama}</span>
                                        </div>
                                        <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                            <span className="text-white/40 uppercase text-[10px] font-black tracking-widest">UN VOTE INDEX</span>
                                            <span className="text-blue-400 font-black">{country.un_vote}</span>
                                        </div>
                                    </div>

                                    <div className="mt-8 p-4 rounded-xl bg-black/40 border border-white/5">
                                        <p className="text-[10px] font-mono text-emerald-500/60 leading-relaxed uppercase">
                                            Authentication level S+ verified. All national systems are operational. Awaiting strategic decisions.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-8 rounded-3xl border border-white/5 bg-black/20 relative overflow-hidden group">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Cpu size={16} className="text-white/40" />
                                        <span className="text-white/40 font-bold text-xs tracking-widest uppercase">Engine Status</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-2">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: '85%' }}
                                            className="h-full bg-emerald-500"
                                        />
                                    </div>
                                    <div className="flex justify-between text-[8px] font-black tracking-widest text-emerald-500/40 uppercase">
                                        <span>Simulator Sync</span>
                                        <span>85% Optimized</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Footer HUD elements */}
                        <div className="mt-12 flex justify-between items-center text-[10px] font-black tracking-[0.4em] text-white/10 uppercase">
                            <div className="flex items-center gap-4">
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1 h-3 bg-current" />)}
                                </div>
                                System Registry: {country.kode_negara}
                            </div>
                            <div>
                                Tactical Map Engine v4.5 | {new Date().getFullYear()}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
