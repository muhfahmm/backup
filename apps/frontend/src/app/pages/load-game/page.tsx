'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Save, Trash2, Play, Calendar, Users, ShieldCheck, Coins } from 'lucide-react';

interface SaveSlot {
    id: string;
    country: string;
    flag: string;
    simDate: string;
    realTime: string;
    stats: {
        population: string;
        stability: number;
        budget: string;
    };
}

export default function LoadGamePage() {
    const router = useRouter();
    
    // Default Mock Data
    const initialSlots: SaveSlot[] = [
        {
            id: 'slot_1',
            country: 'Indonesia',
            flag: 'ID',
            simDate: '15-01-2026',
            realTime: '2026-04-19 10:30',
            stats: {
                population: '273.5Jjt',
                stability: 82,
                budget: '$1.45T'
            }
        },
        {
            id: 'slot_2',
            country: 'Amerika Serikat',
            flag: 'US',
            simDate: '03-01-2026',
            realTime: '2026-04-18 22:15',
            stats: {
                population: '331.0Jjt',
                stability: 75,
                budget: '$23.3T'
            }
        }
    ];

    const [saveSlots, setSaveSlots] = useState<SaveSlot[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Initial load from localStorage
    React.useEffect(() => {
        const savedData = localStorage.getItem('president_simulator_saves');
        if (savedData) {
            setSaveSlots(JSON.parse(savedData));
        } else {
            setSaveSlots(initialSlots);
            localStorage.setItem('president_simulator_saves', JSON.stringify(initialSlots));
        }
        setIsLoaded(true);
    }, []);

    // Handle Deleting a Slot with Persistence
    const handleDelete = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        if (confirm('Konfirmasi: Hapus data simulasi ini secara permanen dari memory?')) {
            const updatedSlots = saveSlots.filter(slot => slot.id !== id);
            setSaveSlots(updatedSlots);
            localStorage.setItem('president_simulator_saves', JSON.stringify(updatedSlots));
        }
    };

    // Handle Redirect to Map
    const handlePlay = (id: string) => {
        console.log(`[System] Loading signal from slot ${id}...`);
        router.push(`/game?id=${id}`);
    };

    return (
        <main className="min-h-screen bg-[#070b14] p-8 font-sans relative overflow-hidden">
            {/* Tactical Background (Emerald) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />
            <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-6">
                        <Link 
                            href="/pages"
                            className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-emerald-500 hover:border-emerald-500/20 transition-all group"
                        >
                            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                        </Link>
                        <div>
                            <h1 className="text-3xl font-black text-white uppercase italic tracking-tighter">
                                Load <span className="text-emerald-500">Game</span>
                            </h1>
                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mt-1">
                                Command-Link : Data Recovery Module
                            </p>
                        </div>
                    </div>
                    
                    <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg hidden md:block">
                        <p className="text-emerald-400 font-mono text-[9px] font-black tracking-widest uppercase italic">
                            Status: Integrated Uplink
                        </p>
                    </div>
                </div>

                {/* Save Slots List */}
                <div className="grid gap-6">
                    <AnimatePresence mode='popLayout'>
                        {saveSlots.length > 0 ? (
                            saveSlots.map((slot, index) => (
                                <motion.div
                                    key={slot.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, x: -50 }}
                                    transition={{ duration: 0.3 }}
                                    className="group relative bg-[#111827]/60 backdrop-blur-xl border border-white/5 rounded-[2rem] p-6 hover:border-emerald-500/30 transition-all overflow-hidden"
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-linear-to-r from-emerald-500/[0.03] to-transparent pointer-events-none" />
                                    
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
                                        {/* Primary Info */}
                                        <div className="flex items-center gap-6">
                                            <div className="w-20 h-12 bg-black/40 border border-white/10 rounded-xl overflow-hidden flex items-center justify-center text-emerald-500 font-black text-xl italic shadow-inner">
                                                {slot.flag}
                                            </div>
                                            <div>
                                                <h3 className="text-white font-black text-xl uppercase italic group-hover:text-emerald-400 transition-colors">
                                                    {slot.country}
                                                </h3>
                                                <div className="flex items-center gap-4 mt-1">
                                                    <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                                                        <Calendar size={12} className="text-emerald-500" />
                                                        {slot.simDate}
                                                    </div>
                                                    <div className="w-[1px] h-3 bg-white/10" />
                                                    <div className="text-slate-600 text-[9px] font-bold uppercase tracking-widest">
                                                        SAVED: {slot.realTime}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-3 gap-6 px-6 py-3 bg-black/20 rounded-2xl border border-white/5">
                                            <div className="flex flex-col">
                                                <span className="text-slate-600 text-[8px] font-black uppercase tracking-widest mb-1">Populasi</span>
                                                <div className="flex items-center gap-1.5 text-white font-mono font-bold text-xs uppercase text-center justify-center lg:justify-start">
                                                    <Users size={12} className="text-emerald-400" />
                                                    {slot.stats.population}
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-slate-600 text-[8px] font-black uppercase tracking-widest mb-1 text-center lg:text-left">Stabilitas</span>
                                                <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-bold text-xs uppercase text-center justify-center lg:justify-start">
                                                    <ShieldCheck size={12} className="text-emerald-500" />
                                                    {slot.stats.stability}%
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-slate-600 text-[8px] font-black uppercase tracking-widest mb-1 text-center lg:text-left">Kas</span>
                                                <div className="flex items-center gap-1.5 text-amber-400 font-mono font-bold text-xs uppercase text-center justify-center lg:justify-start">
                                                    <Coins size={12} className="text-amber-500" />
                                                    {slot.stats.budget}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center gap-3">
                                            <button 
                                                onClick={(e) => handleDelete(slot.id, e)}
                                                className="h-14 w-14 bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 transition-all rounded-2xl flex items-center justify-center group/btn shadow-lg"
                                                title="Hapus Data"
                                            >
                                                <Trash2 size={20} className="group-hover/btn:scale-110 transition-transform" />
                                            </button>
                                            <button 
                                                onClick={() => handlePlay(slot.id)}
                                                className="h-14 px-10 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs tracking-[0.4em] uppercase transition-all rounded-2xl flex items-center gap-3 shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-emerald-500/50"
                                            >
                                                <Play size={16} fill="currentColor" />
                                                Mainkan
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="h-64 border-2 border-dashed border-white/5 rounded-[2rem] flex flex-col items-center justify-center text-slate-600 italic"
                            >
                                <Save size={32} className="opacity-20 mb-4" />
                                <p className="text-xs uppercase font-black tracking-widest opacity-40">No Signal Detected : Archive Empty</p>
                                <Link href="/pages/pilih-negara" className="mt-4 text-emerald-500 text-[10px] uppercase font-black tracking-widest hover:underline transition-all">Start New Simulation</Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <footer className="mt-12 text-center text-[8px] text-slate-700 font-black tracking-[0.4em] uppercase opacity-40">
                    Security Layer Protocol v4.0.0-EMERALD-LOAD
                </footer>
            </div>
        </main>
    );
}
