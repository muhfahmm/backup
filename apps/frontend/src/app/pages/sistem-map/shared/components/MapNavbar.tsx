'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function MapNavbar() {
    return (
        <nav className="absolute top-0 left-0 w-full z-40 p-6 pointer-events-none select-none">
            {/* Background HUD Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent pointer-events-none h-32" />

            <div className="flex justify-between items-start relative z-50">
                {/* Left Side: Simulation Identity */}
                <div className="flex items-center gap-6 pointer-events-auto cursor-pointer group">
                    <div className="relative">
                        <div className="w-12 h-12 border-2 border-emerald-500/30 rounded-lg flex items-center justify-center bg-emerald-500/5 group-hover:border-emerald-500/60 transition-all duration-300">
                           <span className="text-emerald-500 font-black text-xl">P</span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-pulse border-2 border-[#070b14]" />
                    </div>
                    
                    <div className="flex flex-col">
                        <h1 className="text-emerald-500 font-black text-xs tracking-[0.4em] uppercase leading-none mb-1">
                            President Simulator
                        </h1>
                        <p className="text-white/40 font-mono text-[8px] tracking-[0.2em] uppercase">
                            Global Strategy Framework v4.0
                        </p>
                    </div>
                </div>

                {/* Center: Tactical Indicators */}
                <div className="hidden lg:flex items-center gap-12 bg-[#0f172a] border border-white/10 px-8 py-2 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all hover:border-emerald-500/30">
                    <div className="flex flex-col items-center">
                        <span className="text-[7px] text-white/30 uppercase tracking-[0.3em] mb-1 font-bold">Network</span>
                        <div className="flex gap-1">
                            {[1,2,3,4,5].map(i => (
                                <div key={i} className={`w-1 h-3 rounded-full ${i < 5 ? 'bg-emerald-500' : 'bg-white/10'}`} />
                            ))}
                        </div>
                    </div>

                    <div className="w-[1px] h-6 bg-white/10" />

                    <div className="flex flex-col items-center">
                        <span className="text-[7px] text-white/30 uppercase tracking-[0.3em] mb-1 font-bold">Operation</span>
                        <span className="text-emerald-400 font-mono text-[10px] font-bold">NATION_SELECT</span>
                    </div>

                    <div className="w-[1px] h-6 bg-white/10" />

                    <div className="flex flex-col items-center">
                        <span className="text-[7px] text-white/30 uppercase tracking-[0.3em] mb-1 font-bold">Server</span>
                        <div className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                             <span className="text-white font-mono text-[10px] font-bold tracking-widest">ACTIVE</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Deployment Mission */}
                <div className="flex flex-col items-end pointer-events-auto">
                    <div className="bg-[#0f172a] border-l border-emerald-500 px-4 py-2 flex flex-col items-end">
                        <span className="text-emerald-500 font-black text-[9px] tracking-[0.2em] uppercase mb-1">Mission Brief</span>
                        <span className="text-white font-bold text-[11px] tracking-[0.1em] uppercase">Establish Sovereign Authority</span>
                    </div>
                    <div className="mt-2 flex gap-4 pr-1">
                        <button className="text-white/40 hover:text-emerald-400 font-mono text-[8px] tracking-widest uppercase transition-all flex items-center gap-2 group">
                             <span className="w-4 h-[1px] bg-white/20 group-hover:bg-emerald-400" /> System settings
                        </button>
                    </div>
                </div>
            </div>

            {/* Subtle Progress Bar Mockup */}
            <div className="mt-8 flex gap-2 overflow-hidden px-4 opacity-50">
                 {[...Array(20)].map((_, i) => (
                     <div key={i} className={`h-[1px] flex-grow ${i % 3 === 0 ? 'bg-emerald-500/40' : 'bg-white/5'}`} />
                 ))}
            </div>
        </nav>
    );
}
