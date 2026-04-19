'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
    Heart, 
    Users, 
    Coins, 
    ShieldCheck, 
    Calendar, 
    Pause, 
    Play, 
    RotateCcw, 
    LogOut 
} from 'lucide-react';
import { Country } from '../types/country';
import { getFlagUrl } from '../utils/countryMapping';

interface MapNavbarProps {
    selectedCountry: Country | null;
    isSimulation?: boolean;
    satisfaction?: number;
    stability?: number;
    simDate?: string;
    simSpeed?: number;
    isPaused?: boolean;
    onSpeedChange?: (speed: number) => void;
    onTogglePause?: () => void;
}

export default function MapNavbar({ 
    selectedCountry, 
    isSimulation = false, 
    satisfaction = 66, 
    stability = 80,
    simDate = '01-01-2026',
    simSpeed = 1,
    isPaused = true,
    onSpeedChange,
    onTogglePause
}: MapNavbarProps) {
    const router = useRouter();

    const formatNumber = (num: string | number) => {
        return new Intl.NumberFormat('id-ID').format(Number(num));
    };

    const StatCard = ({ icon: Icon, label, value, subValue, iconColor, valueColor = "text-white" }: any) => (
        <div className="bg-[#11141b]/80 border border-white/5 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-3 min-w-[140px] hover:border-white/10 transition-colors cursor-default">
            <div className={`p-2 rounded-lg bg-black/40 ${iconColor}`}>
                <Icon size={16} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase tracking-[0.15em] text-white/30 leading-tight">{label}</span>
                <div className="flex items-baseline gap-2">
                    <span className={`font-black text-sm tracking-tight ${valueColor}`}>{value}</span>
                    {subValue && (
                        <span className="text-[9px] font-bold text-emerald-400/80">{subValue}</span>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#070b14]/90 border-b border-white/5 backdrop-blur-xl h-20 select-none flex items-center justify-between px-6 shadow-2xl">
            {/* Ambient Pulse Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-linear-to-r from-transparent via-emerald-500/20 to-transparent" />
            
            {!isSimulation ? (
                /* SELECTION MODE NAVBAR: Original HUD Style */
                <>
                    <div className="flex items-center gap-8 relative z-10">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={selectedCountry?.kode_negara || 'default'}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="flex items-center gap-6"
                            >
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
                                    <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-emerald-500/50" />
                                    <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-emerald-500/50" />
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-emerald-400 font-black text-sm tracking-[0.4em] uppercase leading-none mb-1">
                                        {selectedCountry?.nama_negara || 'Global Strategy Engine'}
                                    </h1>
                                    <span className="text-white/40 font-mono text-[10px] tracking-[0.2em] uppercase">
                                        {selectedCountry ? `COMMAND CENTER : ${selectedCountry.ibukota}` : 'Tactical Map v4.5 | Awaiting Selection'}
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex items-center h-full relative z-10">
                        <AnimatePresence mode="wait">
                            {selectedCountry ? (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center h-full">
                                    <div className="flex flex-col justify-center px-6 h-full bg-emerald-500/5">
                                        <span className="text-emerald-500/50 font-bold text-[9px] tracking-[0.2em] uppercase mb-1">Kas Negara</span>
                                        <span className="text-emerald-400 font-mono text-lg font-black">${formatNumber(selectedCountry.anggaran)}</span>
                                    </div>
                                    <div className="w-[1px] h-8 bg-white/10" />
                                    <div className="flex flex-col justify-center px-6 h-full">
                                        <span className="text-white/30 font-bold text-[9px] tracking-[0.2em] uppercase mb-1">Populasi</span>
                                        <span className="text-white font-mono text-lg font-black">{formatNumber(selectedCountry.jumlah_penduduk)}</span>
                                    </div>
                                    <div className="pl-6 h-full flex items-center border-l border-white/10">
                                        <motion.button
                                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(16,185,129,1)', color: '#000' }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-8 py-2.5 border-2 border-emerald-500 text-emerald-500 font-black text-xs tracking-[0.4em] uppercase transition-all duration-300 cursor-pointer"
                                            onClick={() => router.push(`/game?id=${selectedCountry.id}`)}
                                        >
                                            MULAI
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="flex items-center px-8 h-full bg-emerald-500/5 gap-4 opacity-40">
                                    <span className="text-emerald-500 font-black text-[10px] tracking-[0.3em] uppercase">S-LEVEL AUTH REQUIRED</span>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </>
            ) : (
                /* SIMULATION MODE NAVBAR: Premium Card Style */
                <>
                    <div className="flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={selectedCountry?.kode_negara || 'default'}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-[#1a1f29] border border-white/10 px-5 py-2.5 rounded-2xl flex items-center gap-4 shadow-lg"
                            >
                                <div className="flex items-center gap-3">
                                    {selectedCountry && (
                                        <motion.div 
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="w-8 h-5 rounded-sm overflow-hidden border border-white/10 shadow-sm bg-black/20"
                                        >
                                            <img 
                                                src={getFlagUrl(selectedCountry.kode_negara)!} 
                                                className="w-full h-full object-cover grayscale-[0.1] contrast-125" 
                                                alt="Flag"
                                            />
                                        </motion.div>
                                    )}
                                </div>

                                <h2 className="text-white font-black text-sm uppercase tracking-[0.2em]">
                                    {selectedCountry?.nama_negara || 'AWAITING SELECTION'}
                                </h2>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex items-center gap-3">
                        {selectedCountry && (
                            <div className="flex items-center gap-3 mr-4">
                                <StatCard icon={Heart} label="Kepuasan" value={`${satisfaction.toFixed(1)}%`} iconColor="text-rose-500" />
                                <StatCard icon={Users} label="Populasi" value={formatNumber(selectedCountry.jumlah_penduduk)} iconColor="text-blue-400" />
                                <StatCard 
                                    icon={Coins} 
                                    label="Kas Negara" 
                                    value={formatNumber(selectedCountry.anggaran)} 
                                    subValue={`+${formatNumber(Math.floor(Number(selectedCountry.anggaran)/100000))}`}
                                    iconColor="text-amber-400" 
                                />
                                <StatCard icon={ShieldCheck} label="Stabilitas" value={`${stability}%`} iconColor="text-emerald-400" />
                            </div>
                        )}

                        <div className="bg-black/40 border border-white/5 p-1.5 rounded-2xl flex items-center gap-2">
                            <div className="bg-[#1a1f29] px-4 py-2 rounded-xl flex items-center gap-3 border border-white/5">
                                <Calendar size={14} className="text-cyan-400" />
                                <span className="text-white font-black font-mono text-sm italic tracking-widest">{simDate}</span>
                            </div>
                            <div className="w-[1px] h-6 bg-white/10" />
                            <button onClick={onTogglePause} className={`p-2.5 rounded-xl transition-all ${isPaused ? 'bg-amber-600/20 text-amber-500 border border-amber-500/30' : 'bg-white/5 text-white/40 border border-transparent'}`}>
                                {isPaused ? <Play size={16} fill="currentColor" /> : <Pause size={16} fill="currentColor" />}
                            </button>
                            <div className="flex items-center bg-white/5 rounded-xl p-1 gap-1">
                                {[1, 2, 3].map((s) => (
                                    <button key={s} onClick={() => onSpeedChange?.(s)} className={`px-3 py-1.5 rounded-lg font-black text-[10px] transition-all ${simSpeed === s ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'text-white/40 hover:text-white'}`}>{s}X</button>
                                ))}
                            </div>
                            <div className="w-[1px] h-6 bg-white/10" />
                            <div className="flex items-center gap-2">
                                <button className="p-2.5 bg-white/5 border border-white/5 text-white/40 hover:text-white rounded-xl"><RotateCcw size={16} /></button>
                                <button onClick={() => router.push('/pages/pilih-negara')} className="p-2.5 bg-white/5 border border-white/5 text-white/40 hover:text-red-400 rounded-xl"><LogOut size={16} /></button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
}
