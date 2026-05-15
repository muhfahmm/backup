'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Search, Shield, Globe, Play, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { WORLD_GEOJSON, COUNTRIES_DATA, CAPITALS_DATA } from '../map-data';

interface Country {
    id: number;
    country: string;
    capital: string;
    iso: string;
    latitude: number;
    longitude: number;
    continent: string;
}

export default function PilihNegaraPage() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('utama');

    // Initial map engine start
    useEffect(() => {
        const initMap = async () => {
            try {
                const wasm = await import('../../../../wasm/map-engine-rs/map_engine_rs');
                await wasm.start_map_engine(
                    "map-canvas-bg",
                    WORLD_GEOJSON,
                    COUNTRIES_DATA,
                    CAPITALS_DATA
                );
            } catch (e) {
                console.error("Failed to start map engine bg:", e);
            }
        };
        initMap();
    }, []);

    useEffect(() => {
        // No longer fetching, use imported data
        setCountries(COUNTRIES_DATA);
        setIsLoading(false);
    }, []);

    const filteredCountries = countries.filter(c => 
        c.country.toLowerCase().includes(searchQuery.toLowerCase()) || 
        c.capital.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const nextCountry = () => {
        if (filteredCountries.length === 0) return;
        setCurrentIndex((prev) => (prev + 1) % filteredCountries.length);
    };

    const prevCountry = () => {
        if (filteredCountries.length === 0) return;
        setCurrentIndex((prev) => (prev - 1 + filteredCountries.length) % filteredCountries.length);
    };

    if (isLoading) return (
        <div className="min-h-screen bg-[#070b14] flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
        </div>
    );

    // Visible items in carousel
    const getVisibleItems = () => {
        if (filteredCountries.length === 0) return [];
        
        // If results are few, don't wrap circularly to avoid duplicates
        if (filteredCountries.length < 5) {
            return filteredCountries.map((item, idx) => ({
                ...item,
                offset: idx - currentIndex
            }));
        }

        const items = [];
        for (let i = -3; i <= 3; i++) {
            const index = (currentIndex + i + filteredCountries.length) % filteredCountries.length;
            items.push({ ...filteredCountries[index], offset: i });
        }
        return items;
    };

    return (
        <div className="relative min-h-screen bg-[#070b14] overflow-hidden font-sans">
            {/* Background Map Engine - Full Color */}
            <div className="fixed inset-0 z-0">
                <canvas id="map-canvas-bg" className="w-full h-full block" />
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>

            {/* Content Overlay - Set to pointer-events-none to allow clicking map behind it */}
            <div className="relative z-10 flex flex-col items-center justify-end min-h-screen pb-12 pointer-events-none">
                
                {/* Center Controls (Tabs & Search) - Set to pointer-events-auto */}
                <div className="mb-6 flex items-center gap-6 pointer-events-auto">
                    {/* Tabs */}
                    <div className="flex bg-black/60 backdrop-blur-md p-1 rounded-2xl border border-white/10">
                        <button 
                            onClick={() => setActiveTab('utama')}
                            className={`px-6 py-2 rounded-xl text-[10px] font-black tracking-widest transition-all ${activeTab === 'utama' ? 'bg-white text-black shadow-lg' : 'text-slate-400 hover:text-white'}`}
                        >
                            PETA UTAMA
                        </button>
                        <button 
                            onClick={() => setActiveTab('hubungan')}
                            className={`px-6 py-2 rounded-xl text-[10px] font-black tracking-widest transition-all ${activeTab === 'hubungan' ? 'bg-white text-black shadow-lg' : 'text-slate-400 hover:text-white'}`}
                        >
                            HUBUNGAN
                        </button>
                    </div>

                    {/* Search bar */}
                    <div className="relative w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input 
                            type="text" 
                            placeholder="Cari Negara atau Ibukota..."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentIndex(0);
                            }}
                            className="w-full bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl py-2.5 pl-12 pr-6 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-white/30 transition-all"
                        />
                    </div>
                </div>

                {/* Carousel Container - Bottom Center - Set to pointer-events-auto */}
                <div className="relative w-full max-w-6xl flex items-center justify-center mb-8 pointer-events-auto">
                    {/* Navigation Buttons */}
                    <button onClick={prevCountry} className="absolute left-0 z-30 p-2 rounded-full bg-black/80 text-white hover:bg-black transition-all">
                        <ChevronLeft className="w-4 h-4" />
                    </button>

                    <div className="flex items-end gap-3 overflow-visible h-32 px-12">
                        <AnimatePresence mode="popLayout">
                            {getVisibleItems().map((item) => (
                                <motion.div
                                    key={`${item.country}-${item.offset}`}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ 
                                        opacity: Math.abs(item.offset) > 2 ? 0 : 1 - Math.abs(item.offset) * 0.2, 
                                        scale: item.offset === 0 ? 1.05 : 0.9,
                                        y: item.offset === 0 ? -10 : 0,
                                        zIndex: 10 - Math.abs(item.offset)
                                    }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className={`
                                        relative w-36 h-28 rounded-2xl p-4 flex flex-col items-center justify-center text-center
                                        ${item.offset === 0 ? 'bg-black/60 border border-white/30' : 'bg-black/40 border border-white/5'}
                                        backdrop-blur-xl transition-all duration-300
                                    `}
                                >
                                    {/* Flag */}
                                    <div className="w-12 h-8 bg-slate-800 rounded-sm mb-3 overflow-hidden border border-white/10">
                                        <img 
                                            src={`https://flagcdn.com/w80/${(item as any).iso}.png`} 
                                            alt={item.country}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://flagcdn.com/w80/un.png';
                                            }}
                                        />
                                    </div>
                                    
                                    <h3 className="text-[9px] font-black text-white leading-tight uppercase mb-0.5">{item.country}</h3>
                                    <p className="text-[7px] text-slate-500 font-bold uppercase">{item.capital}</p>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <button onClick={nextCountry} className="absolute right-0 z-30 p-2 rounded-full bg-black/80 text-white hover:bg-black transition-all">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Bottom Bar Controls - Set to pointer-events-auto */}
                <div className="w-full px-8 flex items-center justify-between pointer-events-auto">
                    <Link href="/page">
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-black/60 hover:bg-black/80 border border-white/10 rounded-xl text-white font-bold tracking-widest text-[10px] transition-all">
                            <div className="p-1 bg-white/10 rounded-lg">
                                <ArrowLeft className="w-3 h-3" />
                            </div>
                            KEMBALI
                        </button>
                    </Link>

                    <Link href={`/page/map_system?country=${filteredCountries[currentIndex]?.country}`}>
                        <button className="flex items-center gap-3 px-8 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-white font-black tracking-widest rounded-xl text-[10px] transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                            MULAI SIMULASI
                            <Play className="w-3 h-3 fill-white" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
