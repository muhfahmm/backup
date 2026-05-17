'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
    HelpCircle, MapPin, Users, Landmark, Globe, Home, Scale, 
    Play, Pause, Clock, RotateCcw, Settings, Palmtree, Shield
} from 'lucide-react';
import Link from 'next/link';
import { WORLD_GEOJSON, COUNTRIES_DATA, CAPITALS_DATA } from './map-data';
import countryPaths from './country-paths.json';
import { SimulationTimeManager } from '../time_controllers/timeManager';
import { handleGameRestart } from '../time_controllers/gameRestart';

interface Country {
    id: number;
    country: string;
    capital: string;
    iso: string;
    latitude: number;
    longitude: number;
    continent: string;
}

export default function MapPage() {
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const [countryDetail, setCountryDetail] = useState<any>(null);
    const [isPaused, setIsPaused] = useState(true);
    const [speed, setSpeed] = useState(1);

    const dateTextRef = useRef<HTMLSpanElement | null>(null);
    const progressBarRef = useRef<HTMLDivElement | null>(null);
    const timeManagerRef = useRef<SimulationTimeManager | null>(null);
    const hasInitRef = useRef(false);

    // Initialize high-performance simulation clock on mount
    useEffect(() => {
        const manager = new SimulationTimeManager(
            (formattedDate) => {
                if (dateTextRef.current) {
                    dateTextRef.current.textContent = formattedDate;
                }
            },
            (progress) => {
                if (progressBarRef.current) {
                    progressBarRef.current.style.width = `${progress}%`;
                }
            }
        );
        timeManagerRef.current = manager;

        return () => {
            manager.destroy();
        };
    }, []);

    // Get Flag emoji helper
    const getFlagEmoji = (iso: string) => {
        if (!iso || iso.length !== 2) return '🌐';
        const codePoints = iso.toUpperCase().split('').map(c => 127397 + c.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    };

    // Reusable function to load stats for a country
    const loadCountryStats = async (countryName: string, capitalName: string) => {
        const relPath = Object.entries(countryPaths).find(
            ([name]) => name.toLowerCase() === countryName.toLowerCase()
        )?.[1];
        
        if (!relPath) return;

        try {
            const res = await fetch(`/api/country-data?path=${relPath}`);
            const text = await res.text();
            
            let mergedData: any = {};
            const varNames = Array.from(text.matchAll(/const\s+(\w+)\s*=/g), m => m[1]);
            
            if (varNames.length > 0) {
                const scriptText = text.replace(/const\s+/g, 'var ');
                const script = `
                    ${scriptText}
                    const allData = { ${varNames.join(', ')} };
                    let merged = {};
                    for (let key in allData) {
                        if (typeof allData[key] === 'object' && allData[key] !== null) {
                            merged = { ...merged, ...allData[key] };
                        }
                    }
                    return merged;
                `;
                mergedData = new Function(script)();
            }

            if (Object.keys(mergedData).length > 0) {
                setCountryDetail({
                    ...mergedData,
                    capital: mergedData.capital || capitalName,
                    jumlah_penduduk: mergedData.jumlah_penduduk || 0,
                    anggaran: mergedData.anggaran || 0,
                    religion: mergedData.religion || '-',
                    ideology: mergedData.ideology || '-',
                    un_vote: mergedData.un_vote || 0
                });
            }
        } catch (e) {
            console.error("Failed to load country data:", e);
        }
    };

    // Client-side query param extraction & profile fetching
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const countryParam = params.get('country');
            
            if (countryParam) {
                const chosen = COUNTRIES_DATA.find(
                    c => c.country.toLowerCase() === countryParam.toLowerCase()
                );
                
                if (chosen) {
                    setSelectedCountry(chosen);
                    loadCountryStats(chosen.country, chosen.capital);
                }
            }
        }
    }, []);

    // Restart game progress handler
    const handleRestart = () => {
        if (selectedCountry) {
            handleGameRestart({
                timeManager: timeManagerRef.current,
                setIsPaused,
                setSpeed,
                reloadStats: () => loadCountryStats(selectedCountry.country, selectedCountry.capital)
            });
        }
    };

    // Initial map canvas and WASM initialization hook
    useEffect(() => {
        const initMap = async () => {
            if (hasInitRef.current) return;
            hasInitRef.current = true;

            try {
                const wasmModule = await import('../../../wasm/map-engine-rs/map_engine_rs');
                await wasmModule.default(); // Initialize WASM
                
                await wasmModule.start_map_engine(
                    "map-canvas",
                    WORLD_GEOJSON,
                    COUNTRIES_DATA,
                    CAPITALS_DATA
                );

                // Highlight and center player country if present
                if (typeof window !== 'undefined') {
                    const params = new URLSearchParams(window.location.search);
                    const countryParam = params.get('country');
                    if (countryParam) {
                        const chosen = COUNTRIES_DATA.find(
                            c => c.country.toLowerCase() === countryParam.toLowerCase()
                        );
                        if (chosen) {
                            // Delay slightly to ensure map engine is initialized and ready to render
                            setTimeout(() => {
                                try {
                                    wasmModule.set_selected_country_on_map(chosen.iso, true);
                                } catch (err) {
                                    console.error("Failed to highlight player country:", err);
                                }
                            }, 100);
                        }
                    }
                }
            } catch (e) {
                console.error("Failed to start map engine:", e);
            }
        };
        initMap();
    }, []);

    return (
        <main className="fixed inset-0 bg-[#070b14] overflow-hidden font-sans">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.02)_0%,transparent_100%)] pointer-events-none" />
            
            {/* Status Bar / Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-40 bg-[#e6d8b9] border-b border-[#c4b49c] px-8 py-3.5 flex items-center justify-between shadow-md h-20">
                {/* 1. Left Side: Player Selected Badge */}
                <div className="flex items-center gap-4 bg-[#dcc9a3]/50 backdrop-blur-md border border-black/10 px-5 py-2.5 rounded-2xl shadow-lg min-w-[200px] shrink-0">
                    {selectedCountry ? (
                        <img 
                            src={`https://flagcdn.com/w80/${selectedCountry.iso.toLowerCase()}.png`} 
                            className="w-8 h-5 rounded-sm object-cover border border-black/10 shadow-sm"
                            alt="flag"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://flagcdn.com/w80/un.png';
                            }}
                        />
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-xl">
                            🌐
                        </div>
                    )}
                    <div className="flex flex-col leading-tight">
                        <span className="text-[12px] font-black text-black tracking-tight uppercase">
                            {selectedCountry ? selectedCountry.country : 'Main Simulation'}
                        </span>
                        <span className="text-[10px] font-bold text-black/60 uppercase tracking-widest">
                            {selectedCountry ? selectedCountry.capital : 'Global Map'}
                        </span>
                    </div>
                </div>

                {/* 2. Center: Live Stats Items */}
                <div className="flex items-center gap-8 overflow-x-auto no-scrollbar mx-8">
                    <div className="flex items-center gap-8">
                        <StatusItem icon={<MapPin className="w-3.5 h-3.5" />} label="IBUKOTA" value={countryDetail?.capital || selectedCountry?.capital || '-'} />
                        <StatusItem icon={<Users className="w-3.5 h-3.5" />} label="POPULASI" value={countryDetail?.jumlah_penduduk ? countryDetail.jumlah_penduduk.toLocaleString('id-ID') : '-'} />
                        <StatusItem icon={<Landmark className="w-3.5 h-3.5" />} label="KAS NEGARA" value={countryDetail?.anggaran ? `${countryDetail.anggaran} EM` : '-'} />
                        <StatusItem icon={<Scale className="w-3.5 h-3.5" />} label="IDEOLOGI" value={countryDetail?.ideology || '-'} />
                        <StatusItem icon={<Home className="w-3.5 h-3.5" />} label="AGAMA MAYORITAS" value={countryDetail?.religion || '-'} />
                        
                        {/* UN Vote Suara PBB */}
                        <div className="flex items-center gap-3 border-l border-[#c4b49c] pl-6">
                            <span className="text-[9px] font-black text-[#8b7e66] tracking-widest uppercase">SUARA PBB</span>
                            <div className="bg-[#5ea3b1] text-white px-3 py-1 rounded-lg font-black text-[12px] shadow-md border border-[#4d8a96]">
                                {countryDetail?.un_vote || '-'}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Right Side: Restart Button */}
                <div className="flex items-center gap-4 shrink-0">
                    <button
                        onClick={handleRestart}
                        title="Atur Ulang Game"
                        className="flex items-center justify-center p-2.5 rounded-xl border border-[#c4b49c] bg-[#e6d8b9] text-[#8b7e66] hover:bg-[#dcc9a3]/60 active:bg-[#dcc9a3] transition-all shadow-sm cursor-pointer hover:scale-105 active:scale-95"
                    >
                        <RotateCcw className="w-4 h-4 text-[#8b7e66]" />
                    </button>
                </div>
            </nav>

            {/* Shifted Canvas Container */}
            <div className="fixed top-20 inset-x-0 bottom-0 z-0">
                <canvas id="map-canvas" className="w-full h-full block cursor-grab active:cursor-grabbing" />

                {/* Global FX */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.6)] vignette-gradient" />
            </div>

            {/* Premium Floating Skeuomorphic Time Controller Widget */}
            <div className="fixed bottom-8 right-8 z-30 flex flex-col w-[320px] pointer-events-auto">
                {/* Upper Parchment Card */}
                <div className="bg-[#FAF6EE] rounded-t-2xl px-6 pt-5 pb-4 border-t-2 border-x-2 border-[#C4B49C] shadow-lg flex flex-col relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.01)_0%,transparent_100%)] pointer-events-none" />
                    
                    <div className="flex items-center justify-between mb-3.5">
                        {/* Gold gear inside metallic slot */}
                        <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-b from-[#e5d7ba] to-[#c7b79a] border border-[#a8987b] shadow-[0_2px_4px_rgba(0,0,0,0.1)] relative">
                                <Settings 
                                    className="w-4.5 h-4.5 text-[#5c3c10]" 
                                    style={{ animation: 'spin 8s linear infinite' }}
                                />
                                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-3 bg-slate-400 border border-slate-500 rounded-sm" />
                                <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-3 bg-slate-400 border border-slate-500 rounded-sm" />
                            </div>
                        </div>

                        {/* Calendar date label */}
                        <div className="flex flex-col items-end leading-none">
                            <span className="text-[9px] font-black text-[#8b7e66] tracking-widest uppercase mb-1">SIMULATION CALENDAR</span>
                            <span ref={dateTextRef} className="text-lg font-black text-[#2e261a] tracking-tight">
                                -
                            </span>
                        </div>
                    </div>

                    {/* Progress Bar slot */}
                    <div className="w-full h-3 bg-[#e4dac3] rounded-full border border-[#bfae93] shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)] overflow-hidden relative">
                        <div 
                            ref={progressBarRef}
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-75 shadow-[0_0_8px_rgba(59,130,246,0.5)]" 
                            style={{ width: '0%' }}
                        />
                    </div>
                </div>

                {/* Lower Slate Blue Card with overlapping gold buttons */}
                <div className="bg-[#1e2f3d] rounded-b-2xl border-b-4 border-x-2 border-[#15202a] shadow-xl h-14 relative flex items-center justify-between">
                    <div className="absolute inset-x-6 -top-7 flex items-center justify-between">
                        {/* 1. Large Play/Pause gold button */}
                        <button 
                            onClick={() => {
                                const nextPaused = !isPaused;
                                setIsPaused(nextPaused);
                                if (timeManagerRef.current) {
                                    timeManagerRef.current.setPaused(nextPaused);
                                }
                            }}
                            title={isPaused ? "Mulai Waktu" : "Jeda Waktu"}
                            className="w-14 h-14 rounded-full bg-gradient-to-b from-[#ffe07d] via-[#fcae1e] to-[#c77a00] border-4 border-[#1e2f3d] shadow-[0_4px_8px_rgba(0,0,0,0.4)] flex items-center justify-center cursor-pointer hover:brightness-110 hover:scale-105 active:scale-95 transition-all z-20 group"
                        >
                            {isPaused ? (
                                <Play className="w-5 h-5 fill-[#5c3c10] text-[#5c3c10] translate-x-0.5 transition-transform group-hover:scale-115" />
                            ) : (
                                <Pause className="w-5 h-5 fill-[#5c3c10] text-[#5c3c10] transition-transform group-hover:scale-115" />
                            )}
                        </button>

                        {/* 2. Gold Speed Selector button */}
                        <button 
                            onClick={() => {
                                const nextSpeed = speed === 1 ? 2 : speed === 2 ? 5 : 1;
                                setSpeed(nextSpeed);
                                if (timeManagerRef.current) {
                                    timeManagerRef.current.setSpeed(nextSpeed);
                                }
                            }}
                            title={`Ubah Kecepatan: ${speed}x`}
                            className="w-10 h-10 rounded-full bg-gradient-to-b from-[#ffe07d] via-[#fcae1e] to-[#c77a00] border-2 border-[#1e2f3d] shadow-[0_3px_6px_rgba(0,0,0,0.3)] flex items-center justify-center cursor-pointer hover:brightness-110 hover:scale-105 active:scale-95 transition-all z-20 text-[12px] font-black text-[#5c3c10] uppercase tracking-tighter"
                        >
                            ×{speed}
                        </button>

                        {/* 3. Gold Holiday button */}
                        <button 
                            onClick={() => alert("Mode Liburan Presiden diaktifkan! Rakyat menikmati waktu istirahat.")}
                            title="Liburan Negara"
                            className="w-10 h-10 rounded-full bg-gradient-to-b from-[#ffe07d] via-[#fcae1e] to-[#c77a00] border-2 border-[#1e2f3d] shadow-[0_3px_6px_rgba(0,0,0,0.3)] flex items-center justify-center cursor-pointer hover:brightness-110 hover:scale-105 active:scale-95 transition-all z-20"
                        >
                            <Palmtree className="w-4.5 h-4.5 text-[#5c3c10]" />
                        </button>

                        {/* 4. Gold Military/General button */}
                        <button 
                            onClick={() => alert("Informasi Kepresidenan & Hubungan Militer Aktif.")}
                            title="Militer & Keamanan Negara"
                            className="w-10 h-10 rounded-full bg-gradient-to-b from-[#ffe07d] via-[#fcae1e] to-[#c77a00] border-2 border-[#1e2f3d] shadow-[0_3px_6px_rgba(0,0,0,0.3)] flex items-center justify-center cursor-pointer hover:brightness-110 hover:scale-105 active:scale-95 transition-all z-20"
                        >
                            <Shield className="w-4.5 h-4.5 text-[#5c3c10]" />
                        </button>
                    </div>

                    {/* Silver Bottom Frame Bracket Elements */}
                    <div className="absolute -left-2 bottom-0 w-6 h-4 bg-gradient-to-r from-slate-400 to-slate-200 border-b-2 border-l-2 border-slate-500 rounded-bl-lg transform rotate-6 pointer-events-none" />
                    <div className="absolute -right-2 bottom-0 w-6 h-4 bg-gradient-to-l from-slate-400 to-slate-200 border-b-2 border-r-2 border-slate-500 rounded-br-lg transform -rotate-6 pointer-events-none" />
                    
                    {/* Skeuomorphic silver bottom plate */}
                    <div className="absolute -bottom-1 inset-x-0 h-2 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 border border-slate-500 rounded-b-full pointer-events-none shadow-md" />
                </div>
            </div>
        </main>
    );
}

// Visual consistent StatusItem subcomponent
function StatusItem({ icon, label, value, color = "text-[#3d362a]" }: { icon: React.ReactNode, label: string, value: string | number, color?: string }) {
    return (
        <div className="flex items-center gap-4 min-w-fit">
            <div className="p-2 bg-[#dcc9a3]/60 rounded-xl text-[#8b7e66] shadow-sm border border-black/5">
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-[10px] font-black text-[#8b7e66]/80 tracking-widest uppercase leading-none mb-1.5">{label}</span>
                <span className={`text-[13px] font-black tracking-tighter uppercase leading-none ${color}`}>{value}</span>
            </div>
        </div>
    );
}
