 'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    X, 
    Gem, 
    Zap, 
    Flame, 
    Droplet, 
    Wind, 
    Container, 
    Component, 
    Box, 
    Layers, 
    Cpu,
    Radiation,
    Database
} from 'lucide-react';

interface SDAResources {
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

interface SDADetailModalProps {
    countryName: string | null;
    onClose: () => void;
}

const RESOURCE_CONFIG = [
    { key: 'emas', label: 'Emas', icon: Gem, color: 'text-amber-400' },
    { key: 'uranium', label: 'Uranium', icon: Radiation, color: 'text-lime-400' },
    { key: 'batu_bara', label: 'Batu Bara', icon: Box, color: 'text-zinc-400' },
    { key: 'minyak_bumi', label: 'Minyak Bumi', icon: Droplet, color: 'text-blue-400' },
    { key: 'gas_alam', label: 'Gas Alam', icon: Flame, color: 'text-orange-400' },
    { key: 'garam', label: 'Garam', icon: Layers, color: 'text-slate-300' },
    { key: 'nikel', label: 'Nikel', icon: Shield, color: 'text-emerald-400' },
    { key: 'litium', label: 'Litium', icon: Zap, color: 'text-cyan-400' },
    { key: 'tembaga', label: 'Tembaga', icon: Component, color: 'text-orange-500' },
    { key: 'aluminium', label: 'Aluminium', icon: Container, color: 'text-zinc-300' },
    { key: 'logam_tanah_jarang', label: 'Rare Earth', icon: Cpu, color: 'text-purple-400' },
    { key: 'bijih_besi', label: 'Bijih Besi', icon: Database, color: 'text-red-400' },
];

// Fallback Shield icon if missing in imports
function Shield(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}

export default function SDADetailModal({ countryName, onClose }: SDADetailModalProps) {
    const [resources, setResources] = useState<SDAResources | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!countryName) return;

        setLoading(true);
        fetch(`/api/gateway/api/resources/${countryName}`)
            .then(res => res.json())
            .then(data => {
                setResources(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch SDA detail:', err);
                setLoading(false);
            });
    }, [countryName]);

    return (
        <AnimatePresence>
            {countryName && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-[#0a0f1a] border border-emerald-500/30 rounded-[2.5rem] shadow-2xl overflow-hidden"
                    >
                        {/* Decorative Top Bar */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 px-12 py-1 bg-emerald-500/10 border-x border-b border-emerald-500/20 rounded-b-xl">
                            <span className="text-[8px] font-black text-emerald-500 tracking-[0.4em] uppercase">Tactical Intelligence Layer</span>
                        </div>

                        {/* Close Button */}
                        <button 
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-emerald-500/20 text-white/40 hover:text-emerald-400 transition-all border border-white/5"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-10">
                            {/* Header */}
                            <div className="mb-10">
                                <span className="text-emerald-500 font-bold text-[10px] tracking-[0.3em] uppercase mb-2 block">Resource Assessment</span>
                                <h2 className="text-white font-black text-3xl uppercase tracking-wider">{countryName}</h2>
                                <div className="w-12 h-1 bg-emerald-500 mt-4 rounded-full" />
                            </div>

                            {loading ? (
                                <div className="h-64 flex flex-col items-center justify-center gap-4">
                                    <div className="w-8 h-8 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
                                    <span className="text-emerald-500/50 font-mono text-[10px] uppercase tracking-widest">Scanning Deposit...</span>
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {RESOURCE_CONFIG.map((config) => {
                                        const value = resources ? (resources as any)[config.key] : 0;
                                        const Icon = config.icon;

                                        return (
                                            <motion.div 
                                                key={config.key}
                                                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.03)' }}
                                                className="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center gap-4 group transition-colors"
                                            >
                                                <div className={`p-2.5 rounded-xl bg-black/40 ${config.color} border border-white/5 group-hover:border-current transition-colors`}>
                                                    <Icon size={18} />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">{config.label}</span>
                                                    <span className="text-white font-mono text-lg font-black">{new Intl.NumberFormat('id-ID').format(value)}</span>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            )}

                            {/* Footer Scanline */}
                            <div className="mt-10 pt-6 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-white/20 uppercase tracking-[0.2em]">
                                <span>Satellite Verification: OK</span>
                                <span>Data Frequency: Real-time</span>
                                <span>Security Level: Alpha</span>
                            </div>
                        </div>

                        {/* Animated Grid Decoration */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
