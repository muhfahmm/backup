'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Settings, Save, LogOut, Globe, Shield } from 'lucide-react';
import Link from 'next/link';

export default function PlayMenuPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const menuItems = [
        { id: 'start', label: 'MULAI SIMULASI', icon: Play, color: '#10b981', path: '/page/map_system/pilih-negara' },
        { id: 'continue', label: 'LANJUTKAN', icon: Save, color: '#3b82f6', path: '/page/map_system' },
        { id: 'settings', label: 'PENGATURAN', icon: Settings, color: '#f59e0b', path: '#' },
        { id: 'exit', label: 'KELUAR', icon: LogOut, color: '#ef4444', path: '#' },
    ];

    return (
        <div className="relative min-h-screen bg-[#070b14] flex flex-col items-start justify-center p-20 overflow-hidden font-sans">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                
                {/* Floating Orbs */}
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]"
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -70, 0],
                        y: [0, 60, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]"
                />
            </div>

            {/* Content */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-start gap-12"
            >
                {/* Title Section */}
                <div className="text-left space-y-4">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="flex items-center justify-start gap-4 mb-6"
                    >
                        <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                            <Shield className="w-12 h-12 text-emerald-500" />
                        </div>
                    </motion.div>
                    <h1 className="text-7xl font-black tracking-tighter text-white">
                        PRESIDEN<span className="text-emerald-500">SIMULATOR</span>
                    </h1>
                    <p className="text-slate-400 text-lg tracking-[0.3em] font-light">
                        STRATEGY & GLOBAL GOVERNANCE
                    </p>
                </div>

                {/* Menu Buttons */}
                <div className="flex flex-col gap-4 w-[320px]">
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                        >
                            <Link href={item.path}>
                                <button
                                    className={`
                                        group relative w-full flex items-center gap-4 p-4 rounded-xl
                                        bg-white/5 border border-white/10 transition-all duration-300
                                        hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]
                                        overflow-hidden
                                    `}
                                >
                                    {/* Hover Glow */}
                                    <div 
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{ background: `radial-gradient(circle at center, ${item.color}15 0%, transparent 100%)` }}
                                    />

                                    <item.icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                                    <span className="text-slate-300 group-hover:text-white font-bold tracking-widest text-sm">
                                        {item.label}
                                    </span>

                                    {/* Active Indicator */}
                                    {hoveredIndex === index && (
                                        <motion.div 
                                            layoutId="active"
                                            className="absolute right-4 w-1.5 h-1.5 rounded-full"
                                            style={{ backgroundColor: item.color }}
                                        />
                                    )}
                                </button>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Info */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-12 flex items-center justify-start gap-8 text-[10px] text-slate-500 tracking-[0.2em]"
                >
                    <div className="flex items-center gap-2">
                        <Globe className="w-3 h-3" />
                        VERSION 2026.1.0
                    </div>
                    <div className="w-1 h-1 bg-slate-700 rounded-full" />
                    <div className="hover:text-emerald-500 transition-colors cursor-pointer">
                        SERVER: ASIA-CENTRAL
                    </div>
                </motion.div>
            </motion.div>

            {/* Corner Accents */}
            <div className="absolute top-8 left-8 p-4 border-l border-t border-white/10 w-24 h-24 pointer-events-none" />
            <div className="absolute bottom-8 right-8 p-4 border-r border-b border-white/10 w-24 h-24 pointer-events-none" />
        </div>
    );
}
