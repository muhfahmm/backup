'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
    HelpCircle, MapPin, Users, Landmark, Globe, Home, Scale, 
    Play, Pause, Clock, RotateCcw
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
    const timeManagerRef = useRef<SimulationTimeManager | null>(null);
    const hasInitRef = useRef(false);

    // Initialize high-performance simulation clock on mount
    useEffect(() => {
        const manager = new SimulationTimeManager((formattedDate) => {
            if (dateTextRef.current) {
                dateTextRef.current.textContent = formattedDate;
            }
        });
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

                {/* 3. Right Side: Time Controls & Restart Button */}
                <div className="flex items-center gap-4 shrink-0">
                    {/* Time Controller */}
                    <div className="flex items-center gap-4 bg-[#dcc9a3]/40 border border-black/5 px-4 py-2 rounded-xl shadow-sm">
                        {/* Date */}
                        <div className="flex items-center gap-2 text-[#3d362a] font-bold text-xs tracking-wide">
                            <Clock className="w-3.5 h-3.5 text-[#8b7e66]" />
                            <span ref={dateTextRef}>-</span>
                        </div>

                        <div className="h-4 w-px bg-black/10" />

                        {/* Play/Pause */}
                        <button 
                            onClick={() => {
                                const nextPaused = !isPaused;
                                setIsPaused(nextPaused);
                                if (timeManagerRef.current) {
                                    timeManagerRef.current.setPaused(nextPaused);
                                }
                            }}
                            className={`p-1.5 rounded-lg border text-white shadow-sm transition-all cursor-pointer ${isPaused ? 'bg-[#5ea3b1] border-[#4d8a96] hover:bg-[#4d8a96]' : 'bg-[#e06b5c] border-[#cc5a4c] hover:bg-[#cc5a4c]'}`}
                        >
                            {isPaused ? <Play className="w-3.5 h-3.5 fill-white text-white" /> : <Pause className="w-3.5 h-3.5 fill-white text-white" />}
                        </button>

                        {/* Speed Selector */}
                        <div className="flex bg-[#e6d8b9] p-0.5 rounded-lg border border-[#c4b49c] gap-0.5">
                            {[1, 2, 5].map((sp) => (
                                <button
                                    key={sp}
                                    onClick={() => {
                                        setSpeed(sp);
                                        if (timeManagerRef.current) {
                                            timeManagerRef.current.setSpeed(sp);
                                        }
                                    }}
                                    className={`px-2 py-1 rounded-md text-[9px] font-black transition-all cursor-pointer ${speed === sp ? 'bg-[#8b7e66] text-[#e6d8b9] shadow-inner' : 'text-[#8b7e66] hover:bg-[#8b7e66]/10'}`}
                                >
                                    {sp}x
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Restart Button */}
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
