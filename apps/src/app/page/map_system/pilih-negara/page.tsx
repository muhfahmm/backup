 'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ChevronLeft, ChevronRight, Search, Shield, Globe, Play, ArrowLeft, 
    User, Building, Factory, Users, Coins, Landmark, Menu,
    HelpCircle, MapPin, TrendingUp, Home, Scale
} from 'lucide-react';
import Link from 'next/link';
import { WORLD_GEOJSON, COUNTRIES_DATA, CAPITALS_DATA } from '../map-data';
import countryPaths from '../country-paths.json';

interface Country {
    id: number;
    country: string;
    capital: string;
    iso: string;
    latitude: number;
    longitude: number;
    continent: string;
    flag?: string;
    name_id?: string;
}

export default function PilihNegaraPage() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('utama');
    const hasInitRef = useRef(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [wasmModule, setWasmModule] = useState<any>(null);
    const [selectedMenu, setSelectedMenu] = useState('Profil');
    const [countryDetail, setCountryDetail] = useState<any>(null);
    const isMapClickRef = useRef(false);
    const dragStartPosRef = useRef({ x: 0, y: 0 });

    const navbarItems = [
        { name: 'Profil', icon: User },
        { name: 'Pembangunan', icon: Building },
        { name: 'Produksi', icon: Factory },
        { name: 'Pertahanan', icon: Shield },
        { name: 'Layanan Publik', icon: Users },
        { name: 'Ekonomi', icon: Coins },
        { name: 'Geopolitik', icon: Globe },
        { name: 'Pemerintahan', icon: Landmark },
    ];

    const getFlagEmoji = (iso: string) => {
        if (!iso || iso.length !== 2) return '🌐';
        const codePoints = iso.toUpperCase().split('').map(c => 127397 + c.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    };

    useEffect(() => {
        const handleGlobalMouseUp = () => {
            const canvas = document.getElementById('map-canvas-bg');
            if (canvas) {
                const event = new MouseEvent('mouseup', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });
                canvas.dispatchEvent(event);
            }
        };

        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }, []);

    useEffect(() => {
        const enhancedData = COUNTRIES_DATA.map(c => ({
            ...c,
            flag: getFlagEmoji(c.iso),
            name_id: c.country.charAt(0).toUpperCase() + c.country.slice(1)
        }));
        setCountries(enhancedData);
        
        const initMap = async () => {
            if (hasInitRef.current) return;
            hasInitRef.current = true;

            try {
                const mod = await import('../../../../wasm/map-engine-rs/map_engine_rs');
                await mod.default(); // Initialize WASM
                await mod.start_map_engine(
                    "map-canvas-bg",
                    WORLD_GEOJSON,
                    COUNTRIES_DATA,
                    CAPITALS_DATA
                );
                setWasmModule(mod);
            } catch (e) {
                console.error("Failed to start map engine bg:", e);
            } finally {
                // Short delay to ensure map has a chance to render before hiding spinner
                setTimeout(() => setIsLoading(false), 500);
            }
        };
        initMap();
    }, []);

    const filteredCountries = useMemo(() => countries.filter(c => 
        c.country.toLowerCase().includes(searchQuery.toLowerCase()) || 
        c.capital.toLowerCase().includes(searchQuery.toLowerCase())
    ), [countries, searchQuery]);

    // Sync selected country to WASM map engine and local state
    useEffect(() => {
        const selected = filteredCountries[currentIndex];
        
        // ONLY proceed if we have a selected country AND the user has interacted
        // This prevents Afghanistan from being automatically selected on load
        if (selected && hasInteracted) {
            // Load data directly from TS file via API
            const loadStats = async () => {
                // Case-insensitive lookup for country path
                const relPath = Object.entries(countryPaths).find(
                    ([name]) => name.toLowerCase() === selected.country.toLowerCase()
                )?.[1];
                
                if (!relPath) {
                    console.warn(`No path found for country: ${selected.country}`);
                    return;
                }

                try {
                    const res = await fetch(`/api/country-data?path=${relPath}`);
                    const text = await res.text();
                    
                    let mergedData: any = {};
                    // Universal Object Parser: Execute the entire file to resolve cross-references
                    try {
                        // Find all constant names defined in the file to extract them
                        const varNames = Array.from(text.matchAll(/const\s+(\w+)\s*=/g), m => m[1]);
                        
                        if (varNames.length > 0) {
                            // Replace const with var to avoid Temporal Dead Zone (TDZ) errors
                            // when constants refer to each other across different bundled files
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
                    } catch (e) {
                        console.error("Failed to evaluate country data file:", e);
                    }

                    if (Object.keys(mergedData).length > 0) {
                        setCountryDetail({
                            ...mergedData,
                            // Map nested properties to UI keys
                            ppn: mergedData.pajak?.ppn?.tarif,
                            corporate: mergedData.pajak?.korporasi?.tarif,
                            income_tax: mergedData.pajak?.penghasilan?.tarif,
                            price_rice: mergedData.harga?.harga_beras,
                            price_fuel: mergedData.harga?.harga_bbm,
                            un_vote: mergedData.un_vote,
                            reputation: mergedData.reputasi_diplomatik
                        });
                    } else {
                        setCountryDetail(null);
                    }
                } catch (e) {
                    console.error("Failed to load country data directly:", e);
                }
            };
            
            loadStats();

            if (wasmModule) {
                try {
                    // Always center and zoom on selection, even if triggered by map click
                    wasmModule.set_selected_country_on_map(selected.iso, true);
                    isMapClickRef.current = false;
                } catch (e) {
                    console.error("Failed to sync selection to map:", e);
                }
            }
        }
    }, [currentIndex, hasInteracted, filteredCountries, wasmModule]);



    const nextCountry = () => {
        if (filteredCountries.length === 0) return;
        setCurrentIndex((prev) => (prev + 1) % filteredCountries.length);
        setHasInteracted(true);
    };

    const prevCountry = () => {
        if (filteredCountries.length === 0) return;
        setCurrentIndex((prev) => (prev - 1 + filteredCountries.length) % filteredCountries.length);
        setHasInteracted(true);
    };


    const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!wasmModule || !wasmModule.get_country_at_on_map) return;

        // Prevent click when dragging
        const dragDistance = Math.sqrt(
            Math.pow(e.clientX - dragStartPosRef.current.x, 2) + 
            Math.pow(e.clientY - dragStartPosRef.current.y, 2)
        );
        if (dragDistance > 5) return;
        
        const canvas = e.currentTarget;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const clickedCountry = wasmModule.get_country_at_on_map(x, y);
        if (clickedCountry && clickedCountry.iso) {
            isMapClickRef.current = true;
            const iso = clickedCountry.iso;
            // Check if it's already in the filtered list
            const filteredIndex = filteredCountries.findIndex(c => c.iso.toLowerCase() === iso.toLowerCase());
            
            if (filteredIndex !== -1) {
                setCurrentIndex(filteredIndex);
            } else {
                // If not in filtered list, clear search and find in full list
                setSearchQuery('');
                // We need to wait for state or find directly in countries
                const fullIndex = countries.findIndex(c => c.iso.toLowerCase() === iso.toLowerCase());
                if (fullIndex !== -1) {
                    setCurrentIndex(fullIndex);
                }
            }
            setHasInteracted(true);
        }
    };

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
            {/* Status Bar (Replacement for Nav) */}
            <nav className="fixed top-0 left-0 right-0 z-40 bg-[#e6d8b9] border-b border-[#c4b49c] px-8 py-3.5 flex items-center justify-between shadow-md h-20">
                <div className="flex items-center gap-10 overflow-x-auto no-scrollbar">
                    {/* Help Icon */}
                    <button className="flex items-center justify-center w-8 h-8 rounded-full border border-[#8b7e66]/40 text-[#8b7e66] hover:bg-[#8b7e66]/20 transition-colors shadow-sm">
                        <HelpCircle className="w-4 h-4" />
                    </button>

                    {/* Stats Items */}
                    <div className="flex items-center gap-10">
                        <StatusItem icon={<MapPin className="w-3.5 h-3.5" />} label="IBUKOTA" value={hasInteracted ? (countryDetail?.capital || '-') : '-'} />
                        <StatusItem icon={<Users className="w-3.5 h-3.5" />} label="POPULASI" value={hasInteracted ? (countryDetail?.jumlah_penduduk?.toLocaleString('id-ID') || '0') : '0'} />
                        <StatusItem icon={<Landmark className="w-3.5 h-3.5" />} label="KAS NEGARA" value={hasInteracted ? (`${countryDetail?.anggaran || 0} EM`) : '0 EM'} />
                        <StatusItem icon={<Globe className="w-3.5 h-3.5" />} label="TOTAL NEGARA" value="207" />
                        <StatusItem icon={<Home className="w-3.5 h-3.5" />} label="AGAMA MAYORITAS" value={hasInteracted ? (countryDetail?.religion || '-') : '-'} />
                        <StatusItem icon={<Scale className="w-3.5 h-3.5" />} label="IDEOLOGI" value={hasInteracted ? (countryDetail?.ideology || '-') : '-'} />
                        
                        {/* UN Vote Badge */}
                        <div className="flex items-center gap-4 border-l border-[#c4b49c] pl-8">
                            <span className="text-[10px] font-black text-[#8b7e66] tracking-widest uppercase">SUARA PBB</span>
                            <div className="bg-[#5ea3b1] text-white px-4 py-1.5 rounded-lg font-black text-[14px] shadow-md border border-[#4d8a96]">
                                {hasInteracted ? (countryDetail?.un_vote || 0) : '-'}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Selected Country Badge (Right) */}
                <div className="flex items-center gap-4 bg-[#dcc9a3]/50 backdrop-blur-md border border-black/10 px-5 py-2.5 rounded-2xl shadow-lg ml-4 min-w-[200px]">
                    {hasInteracted ? (
                        <img 
                            src={`https://flagcdn.com/w80/${countries[currentIndex]?.iso?.toLowerCase()}.png`} 
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
                            {hasInteracted ? countries[currentIndex]?.country : 'Select Country'}
                        </span>
                        <span className="text-[10px] font-bold text-black/60 uppercase tracking-widest">
                            {hasInteracted ? countries[currentIndex]?.capital : 'Region Map'}
                        </span>
                    </div>
                </div>
            </nav>

            {/* Stats Dashboard Overlay */}
            <div className="fixed top-20 left-8 z-30 w-80 pointer-events-none">
                <AnimatePresence mode="wait">
                    {countryDetail ? (
                        <motion.div
                            key={countries[currentIndex]?.iso}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-black/60 backdrop-blur-2xl border border-emerald-500/20 rounded-2xl p-6 pointer-events-auto"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl">{countries[currentIndex]?.flag}</span>
                                <div>
                                    <h2 className="text-white font-black text-xl tracking-tight uppercase leading-none">{countries[currentIndex]?.name_id}</h2>
                                    <p className="text-emerald-500/60 text-[10px] font-bold tracking-[0.2em] uppercase mt-1">Operational Data</p>
                                </div>
                            </div>

                            {selectedMenu === 'Profil' && (
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <StatItem label="Capital" value={countryDetail.capital || 'N/A'} />
                                        <StatItem label="Ideology" value={countryDetail.ideology || 'N/A'} />
                                    </div>
                                    <StatItem label="Population" value={countryDetail.population?.toLocaleString() || '0'} />
                                    <div className="pt-4 border-t border-white/5">
                                        <div className="flex justify-between text-[10px] mb-1">
                                            <span className="text-slate-500 font-bold uppercase">Budget Revenue</span>
                                            <span className="text-emerald-400 font-black">${countryDetail.budget || 0}B</span>
                                        </div>
                                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: countryDetail.budget ? '65%' : '0%' }}
                                                className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {selectedMenu === 'Ekonomi' && (
                                <div className="space-y-4">
                                    <h3 className="text-white text-[10px] font-black tracking-widest uppercase border-l-2 border-emerald-500 pl-2">Taxation Rates</h3>
                                    <div className="space-y-2">
                                        <ProgressBar label="PPN" value={countryDetail.ppn || 0} max={40} unit="%" />
                                        <ProgressBar label="Corporate" value={countryDetail.corporate || 0} max={50} unit="%" />
                                        <ProgressBar label="Income" value={countryDetail.income_tax || 0} max={60} unit="%" />
                                    </div>
                                    <h3 className="text-white text-[10px] font-black tracking-widest uppercase border-l-2 border-emerald-500 pl-2 mt-6">Market Prices</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        <StatItem label="Rice" value={`$${countryDetail.price_rice || 'N/A'}`} />
                                        <StatItem label="Fuel" value={`$${countryDetail.price_fuel || 'N/A'}`} />
                                    </div>
                                </div>
                            )}

                            {selectedMenu === 'Geopolitik' && (
                                <div className="space-y-4">
                                    <StatItem label="UN Vote Rank" value={`#${countryDetail.un_vote || 'N/A'}`} />
                                    <StatItem label="Diplomatic Rep" value={countryDetail.reputation || 'Netral'} />
                                    <div className="pt-4 border-t border-white/5 space-y-3">
                                        <ProgressBar label="Soft Power" value={countryDetail.soft_power || 0} max={100} color="bg-blue-500" />
                                        <ProgressBar label="Hard Power" value={countryDetail.hard_power || 0} max={100} color="bg-red-500" />
                                        <ProgressBar label="Diplomacy" value={countryDetail.diplomacy || 0} max={100} color="bg-emerald-500" />
                                    </div>
                                </div>
                            )}

                            {/* Default Fallback for other menus */}
                            {!['Profil', 'Ekonomi', 'Geopolitik'].includes(selectedMenu) && (
                                <div className="flex flex-col items-center justify-center py-8 text-center">
                                    <div className="w-12 h-12 rounded-full border-2 border-emerald-500/20 flex items-center justify-center mb-4">
                                        <Search className="w-6 h-6 text-emerald-500/40" />
                                    </div>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Data processing in progress...</p>
                                </div>
                            )}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6"
                        >
                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest text-center">Select a country to view intelligence report</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Loading Overlay */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div 
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-[#070b14] flex items-center justify-center"
                    >
                        <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background Map Engine - Full Color */}
            <div className="fixed inset-0 z-0">
                <canvas 
                    id="map-canvas-bg" 
                    className="w-full h-full block cursor-pointer" 
                    onMouseDown={(e) => {
                        setHasInteracted(true);
                        dragStartPosRef.current = { x: e.clientX, y: e.clientY };
                    }}
                    onClick={handleCanvasClick}
                    onMouseLeave={(e) => {
                        // Dispatch a fake mouseup to the canvas when the mouse leaves
                        // to ensure the WASM engine stops panning
                        const event = new MouseEvent('mouseup', {
                            bubbles: true,
                            cancelable: true,
                            view: window
                        });
                        e.currentTarget.dispatchEvent(event);
                    }}
                />
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
                                    onClick={() => {
                                        setCurrentIndex((prev) => (prev + item.offset + filteredCountries.length) % filteredCountries.length);
                                        setHasInteracted(true);
                                    }}
                                    animate={{ 
                                        opacity: (item.offset === 0 && hasInteracted) ? 1 : Math.abs(item.offset) > 2 ? 0 : 0.5, 
                                        scale: (item.offset === 0 && hasInteracted) ? 1.15 : 0.9,
                                        y: (item.offset === 0 && hasInteracted) ? -15 : 0,
                                        zIndex: 10 - Math.abs(item.offset)
                                    }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className={`
                                        relative w-36 h-28 rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer
                                        ${(item.offset === 0 && hasInteracted) ? 'bg-white shadow-[0_0_30px_rgba(255,255,255,0.3)]' : 'bg-black/40 border border-white/5'}
                                        backdrop-blur-xl transition-all duration-300
                                    `}
                                >
                                    {/* Flag */}
                                    <div className={`w-12 h-8 rounded-sm mb-3 overflow-hidden border ${item.offset === 0 && hasInteracted ? 'border-black/10' : 'border-white/10'}`}>
                                        <img 
                                            src={`https://flagcdn.com/w80/${(item as any).iso}.png`} 
                                            alt={item.country}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://flagcdn.com/w80/un.png';
                                            }}
                                        />
                                    </div>
                                    
                                    <h3 className={`text-[9px] font-black leading-tight uppercase mb-0.5 ${(item.offset === 0 && hasInteracted) ? 'text-black' : 'text-white/60'}`}>{item.country}</h3>
                                    <p className={`text-[7px] font-bold uppercase ${(item.offset === 0 && hasInteracted) ? 'text-black/40' : 'text-slate-500'}`}>{item.capital}</p>
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

                    <Link 
                        href={hasInteracted ? `/page/map_system?country=${filteredCountries[currentIndex]?.country}` : '#'}
                        onClick={(e) => !hasInteracted && e.preventDefault()}
                    >
                        <button 
                            disabled={!hasInteracted}
                            className={`flex items-center gap-3 px-8 py-2.5 ${hasInteracted ? 'bg-cyan-500 hover:bg-cyan-400 hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)]' : 'bg-slate-700 opacity-50 cursor-not-allowed'} text-white font-black tracking-widest rounded-xl text-[10px] transition-all`}
                        >
                            MULAI SIMULASI
                            <Play className="w-3 h-3 fill-white" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

// Sub-components for Stats Dashboard
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

function StatItem({ label, value }: { label: string, value: string | number }) {
    return (
        <div className="flex flex-col">
            <span className="text-slate-500 text-[8px] font-bold tracking-widest uppercase">{label}</span>
            <span className="text-white text-xs font-black tracking-tight">{value}</span>
        </div>
    );
}

function ProgressBar({ label, value, max, unit = "", color = "bg-emerald-500" }: { label: string, value: number, max: number, unit?: string, color?: string }) {
    const percentage = Math.min((value / max) * 100, 100);
    return (
        <div>
            <div className="flex justify-between text-[8px] mb-1">
                <span className="text-slate-400 font-bold uppercase">{label}</span>
                <span className="text-white font-black">{value}{unit}</span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    className={`h-full ${color} shadow-sm`} 
                />
            </div>
        </div>
    );
}


