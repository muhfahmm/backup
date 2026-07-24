// detail path: c:\EM\apps\src\app\page\map_system\page.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
    Play, Pause, Settings, Palmtree, Shield
} from 'lucide-react';
import Link from 'next/link';
import { WORLD_GEOJSON, COUNTRIES_DATA, CAPITALS_DATA } from './map-data';
import countryPaths from './country-paths.json';
import { SimulationTimeManager } from '../time_controllers/timeManager';
import { handleGameRestart } from '../time_controllers/gameRestart';
import { GameMenuModal } from '../navbar/GameMenuModal';
import { ConfirmRestartModal } from '../navbar/ConfirmRestartModal';
import { Navbar } from '../navbar/Navbar';
import BottomNav from '../navigasi_menu/2_navigasi_bawah/BottomNav';
import ModalsManager from '../navigasi_menu/2_navigasi_bawah/ModalsManager';
import { calculateCountryNetBalance } from '@/app/logic/economic_logic/treasuryUpdater';
import { logger } from '../../../lib/logger';
import { CountryDetailModal } from '../detail_negara/detail_negara';

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
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
    const [saveNameInput, setSaveNameInput] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [isPresidentMenuOpen, setIsPresidentMenuOpen] = useState(false);
    const [isRestartConfirmOpen, setIsRestartConfirmOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('Peta Taktis');
    const [resetTrigger, setResetTrigger] = useState(false);
    const [productionDeepLink, setProductionDeepLink] = useState<{ tab: string; key: string } | null>(null);
    const [countryDetailModalOpen, setCountryDetailModalOpen] = useState(false);
    const [countryDetailModalName, setCountryDetailModalName] = useState<string | null>(null);

    const isMapInteractionDisabled = isSaveModalOpen || isPresidentMenuOpen || isRestartConfirmOpen || activeMenu !== 'Peta Taktis';

    const dateTextRef = useRef<HTMLSpanElement | null>(null);
    const progressBarRef = useRef<HTMLDivElement | null>(null);
    const timeManagerRef = useRef<SimulationTimeManager | null>(null);
    const wasmModuleRef = useRef<any>(null);
    const hasInitRef = useRef(false);

    useEffect(() => {
        const handleGlobalMouseUp = () => {
            const canvas = document.getElementById('map-canvas');
            if (canvas) {
                const event = new MouseEvent('mouseup', {
                    bubbles: true,
                    cancelable: true,
                    view: window,
                });
                canvas.dispatchEvent(event);
            }
        };

        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }, []);

    // Initialize high-performance simulation clock on mount
    useEffect(() => {
        const manager = new SimulationTimeManager(
            (formattedDate) => {
                if (dateTextRef.current) {
                    dateTextRef.current.textContent = formattedDate;
                }
                // Update React state dengan tanggal baru
                if (timeManagerRef.current) {
                    const newDate = timeManagerRef.current.getCurrentDate();
                    console.log('[MapPage Callback] Date changed:', {
                        formatted: formattedDate,
                        newDate: newDate.toDateString(),
                        timestamp: Date.now()
                    });
                    setCurrentDate(newDate);
                }
            },
            (progress) => {
                if (progressBarRef.current) {
                    progressBarRef.current.style.width = `${progress}%`;
                }
            }
        );

        // Assign manager to ref immediately after construction
        timeManagerRef.current = manager;

        // Check if there is a save to load to restore the date
        if (typeof window !== 'undefined') {
            const loadSaveStr = localStorage.getItem('presiden_simulator_load_save');
            const newGameMarker = localStorage.getItem('presiden_simulator_new_game');
            if (newGameMarker === '1') {
                localStorage.removeItem('hutangModalLoanSources');
                localStorage.removeItem('hutangModalLoanSourcesLastRefresh');
                localStorage.removeItem('presiden_simulator_new_game');
            }
            if (loadSaveStr) {
                try {
                    const savedState = JSON.parse(loadSaveStr);
                    if (savedState.game_date) {
                        manager.setCurrentDate(new Date(savedState.game_date));
                    }
                } catch (err) {
                    console.error("Failed to restore date from save:", err);
                }
            }
        }

        setCurrentDate(manager.getCurrentDate());

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

    const loadDefaultPrices = async (countryName: string) => {
        try {
            const res = await fetch(`/api/price-data?country=${encodeURIComponent(countryName)}`);
            const data = await res.json();
            return data?.prices || null;
        } catch (e) {
            console.warn(`Failed to load default prices for ${countryName}:`, e);
            return null;
        }
    };

    // Reusable function to load stats for a country
    const loadCountryStats = async (countryName: string, capitalName: string) => {
        const relPath = Object.entries(countryPaths).find(
            ([name]) => name.toLowerCase() === countryName.toLowerCase()
        )?.[1];
        
        if (!relPath) return;

        try {
            const res = await fetch(`/api/country-data?path=${relPath}`);
            const mergedData = await res.json();

            if (mergedData?.error) {
                console.warn(`Country data load error for ${countryName}:`, mergedData.error);
                return;
            }

            const defaultPrices = await loadDefaultPrices(countryName);

            setCountryDetail({
                ...mergedData,
                country: countryName,
                capital: mergedData.capital || capitalName,
                jumlah_penduduk: mergedData.jumlah_penduduk || 0,
                anggaran: mergedData.anggaran || 0,
                religion: mergedData.religion || '-',
                ideology: mergedData.ideology || '-',
                un_vote: mergedData.un_vote || 0,
                kepuasan: mergedData.kepuasan ?? 50,
                harga: defaultPrices || mergedData?.harga || {},
                price_rice: defaultPrices?.harga_beras ?? mergedData?.harga?.harga_beras,
                price_fuel: defaultPrices?.harga_minyak_goreng ?? mergedData?.harga?.harga_bbm,
                // Tax fields
                income_tax: mergedData.pajak?.penghasilan?.tarif ?? mergedData.income_tax,
                corporate: mergedData.pajak?.korporasi?.tarif ?? mergedData.corporate,
                ppn: mergedData.pajak?.ppn?.tarif ?? mergedData.ppn,
                cigarette_tax: mergedData.pajak?.bea_cukai?.tarif ?? mergedData.cigarette_tax,
                environment_tax: mergedData.pajak?.lingkungan?.tarif ?? mergedData.environment_tax,
                // Production/Extraction fields (ensure they're set from data files)
                emas: mergedData.emas ?? 0,
                uranium: mergedData.uranium ?? 0,
                batu_bara: mergedData.batu_bara ?? 0,
                minyak_bumi: mergedData.minyak_bumi ?? 0,
                gas_alam: mergedData.gas_alam ?? 0,
                garam: mergedData.garam ?? 0,
                nikel: mergedData.nikel ?? 0,
                litium: mergedData.litium ?? 0,
                tembaga: mergedData.tembaga ?? 0,
                aluminium: mergedData.aluminium ?? 0,
                logam_tanah_jarang: mergedData.logam_tanah_jarang ?? 0,
                bijih_besi: mergedData.bijih_besi ?? 0,
            });
        } catch (e) {
            console.error("Failed to load country data:", e);
        }
    };

    // Client-side query param extraction & profile fetching
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const loadSaveStr = localStorage.getItem('presiden_simulator_load_save');
            if (loadSaveStr) {
                try {
                    const savedState = JSON.parse(loadSaveStr);
                    const chosen = COUNTRIES_DATA.find(
                        c => c.country.toLowerCase() === savedState.country_name.toLowerCase()
                    );
                    if (chosen) {
                        setSelectedCountry(chosen);
                        
                        // Restore countryDetail from saved state, or use parsed countryDetail if available
                        let restoredDetail: any = {
                            capital: savedState.capital || chosen.capital,
                            jumlah_penduduk: Number(savedState.jumlah_penduduk),
                            anggaran: Number(savedState.anggaran),
                            ideology: savedState.ideology || '-',
                            religion: savedState.religion || '-',
                            un_vote: Number(savedState.un_vote),
                            kepuasan: Number(savedState.kepuasan) || 50
                        };
                        
                        // If full countryDetail was saved (includes accumulated_* and build_date_* fields)
                        if (savedState.countryDetail && typeof savedState.countryDetail === 'object') {
                            restoredDetail = { ...restoredDetail, ...savedState.countryDetail };
                        }
                        
                        setCountryDetail(restoredDetail);
                        
                        // Clean up saved state from localStorage so it doesn't re-apply
                        localStorage.removeItem('presiden_simulator_load_save');
                        return; // Done restoring save!
                    }
                } catch (e) {
                    console.error("Failed to parse loaded save state:", e);
                }
            }

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

    // Update accumulated production every time date changes
    useEffect(() => {
        if (!countryDetail || !currentDate) return;
        
        // Format date inline (can't import formatDate here due to path issues)
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const currentDateStr = `${year}-${month}-${day}`;
        logger.log('MapPage', 'Date changed to:', currentDateStr);
        
        // Auto-set build dates for buildings that don't have one
        // Set to TODAY's date so production starts at 0 from now
        const resourceKeys = [
            "pembangkit_listrik_tenaga_nuklir", "pembangkit_listrik_tenaga_air", "pembangkit_listrik_tenaga_surya",
            "pembangkit_listrik_tenaga_uap", "pembangkit_listrik_tenaga_gas", "pembangkit_listrik_tenaga_angin",
            "emas", "uranium", "batu_bara", "minyak_bumi", "gas_alam", "garam", "nikel", "litium", "tembaga",
            "aluminium", "logam_tanah_jarang", "bijih_besi",
            "semikonduktor", "mobil", "sepeda_motor", "smelter", "semen_beton", "kayu", "pupuk",
            "ayam_unggas", "sapi_perah", "sapi_potong", "domba_kambing",
            "padi", "gandum", "jagung", "sayur", "umbi", "kedelai", "kelapa_sawit", "kopi", "teh", "kakao",
            "tebu", "karet", "kapas", "tembakau",
            "udang", "mutiara", "ikan",
            "air_mineral", "gula", "roti", "pengolahan_daging", "mie_instan", "minyak_goreng", "susu",
            "pakan_ternak", "ikan_kaleng", "kopi_teh",
            "farmasi"
        ];
        
        let hasChanges = false;
        const updatedDetail = { ...countryDetail };
        
        for (const resourceKey of resourceKeys) {
            const buildingCount = Number(countryDetail[resourceKey]) || 0;
            const buildDateKey = `build_date_${resourceKey}`;
            const buildDate = countryDetail[buildDateKey];
            
            // If building exists but no build date, auto-set to TODAY so production = 0
            // This ensures legacy buildings without build dates start from 0
            if (buildingCount > 0 && !buildDate) {
                updatedDetail[buildDateKey] = currentDateStr; // Set to TODAY, not game start
                hasChanges = true;
                logger.log('AutoSetBuildDate', `${resourceKey}: Auto-set to today ${currentDateStr}`);
            }
        }
        
        if (hasChanges) {
            logger.log('MapPage', 'Auto-setting missing build dates for existing buildings to TODAY');
            setCountryDetail(updatedDetail);
        }
    }, [currentDate, countryDetail]);

    const prevBudgetUpdateDateRef = useRef<string | null>(null);

    useEffect(() => {
        if (!countryDetail || !currentDate) return;

        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const currentDateStr = `${year}-${month}-${day}`;

        if (prevBudgetUpdateDateRef.current === null) {
            prevBudgetUpdateDateRef.current = currentDateStr;
            return;
        }

        if (prevBudgetUpdateDateRef.current === currentDateStr) return;

        prevBudgetUpdateDateRef.current = currentDateStr;

        const netBalance = calculateCountryNetBalance(countryDetail);
        setCountryDetail((prev: any) => {
            if (!prev) return prev;
            return {
                ...prev,
                anggaran: (Number(prev.anggaran) || 0) + netBalance,
            };
        });
    }, [currentDate, countryDetail]);
    const handleRestart = () => {
        if (selectedCountry) {
            if (typeof window !== 'undefined') {
                window.localStorage.removeItem('hutangModalLoanSources');
                window.localStorage.removeItem('hutangModalLoanSourcesLastRefresh');
            }
            handleGameRestart({
                timeManager: timeManagerRef.current,
                setIsPaused,
                setSpeed,
                setCountryDetail, // Add this to reset production data
                reloadStats: () => loadCountryStats(selectedCountry.country, selectedCountry.capital),
                skipConfirm: true
            });
            // Toggle resetTrigger to signal all modals to reset
            setResetTrigger(prev => !prev);
        }
    };

    // Open save dialog with default name suggestions
    const openSaveModal = () => {
        if (!selectedCountry) return;
        const defaultName = `Simulasi ${selectedCountry.country} - ${timeManagerRef.current?.getFormattedDate() || 'Hari Ini'}`;
        setSaveNameInput(defaultName);
        setIsSaveModalOpen(true);
    };

    // Save game progress handler
    const handleSaveGame = async () => {
        if (!selectedCountry) return;

        setIsSaving(true);
        try {
            const saveName = saveNameInput.trim() || `Simulasi ${selectedCountry.country} - ${timeManagerRef.current?.getFormattedDate() || 'Hari Ini'}`;
            const gameDate = timeManagerRef.current ? timeManagerRef.current.getCurrentDate().toISOString() : new Date().toISOString();

            const response = await fetch('/api/game-save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    saveName,
                    countryName: selectedCountry.country,
                    countryIso: selectedCountry.iso,
                    gameDate,
                    capital: countryDetail?.capital || selectedCountry.capital,
                    jumlahPenduduk: countryDetail?.jumlah_penduduk || 0,
                    anggaran: countryDetail?.anggaran || 0,
                    ideology: countryDetail?.ideology || '-',
                    religion: countryDetail?.religion || '-',
                    unVote: countryDetail?.un_vote || 0,
                    kepuasan: countryDetail?.kepuasan ?? 50,
                    countryDetail: countryDetail, // Save entire countryDetail with all production data
                }),
            });

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.error || 'Gagal menyimpan permainan');
            }

            setToastMessage('Permainan berhasil disimpan!');
            setIsSaveModalOpen(false);
            setTimeout(() => setToastMessage(null), 3000);
        } catch (error: any) {
            console.error('Error saving game:', error);
            alert(`Terjadi kesalahan: ${error.message || 'Gagal menyimpan permainan.'}`);
        } finally {
            setIsSaving(false);
        }
    };

    // Initial map canvas and WASM initialization hook
    useEffect(() => {
        const initMap = async () => {
            if (hasInitRef.current) return;
            hasInitRef.current = true;

            try {
                const wasmModule = await import('../../../wasm/map-engine-rs/map_engine_rs');
                await wasmModule.default(); // Initialize WASM module first
                wasmModuleRef.current = wasmModule;
                
                // After init, the exported functions are available on the module
                const { start_map_engine, set_selected_country_on_map } = wasmModule;
                
                await start_map_engine(
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
                                    set_selected_country_on_map(chosen.iso, true);
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

    const handleCanvasCountryClick = async (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (isMapInteractionDisabled) return;

        const canvas = event.currentTarget;
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        try {
            const wasmModule = wasmModuleRef.current;
            const clickedCountry = wasmModule?.get_country_at_on_map?.(x, y);
            const countryName = clickedCountry?.country || clickedCountry?.name || clickedCountry?.country_name;

            if (!countryName) return;

            setCountryDetailModalName(countryName);
            setCountryDetailModalOpen(true);
        } catch (error) {
            console.error('Failed to read clicked country from map:', error);
        }
    };

    return (
        <main className="fixed inset-0 bg-[#070b14] overflow-hidden font-sans">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.02)_0%,transparent_100%)] pointer-events-none" />
            
            {/* Status Bar / Navbar */}
            <Navbar 
                selectedCountry={selectedCountry}
                countryDetail={countryDetail}
                onOpenGameMenu={() => setIsPresidentMenuOpen(true)}
                onOpenSaveModal={openSaveModal}
                onOpenRestartConfirm={() => setIsRestartConfirmOpen(true)}
                onOpenKepuasan={() => setActiveMenu("Dashboard:Kepuasan")}
            />

            {/* Shifted Canvas Container */}
            <div className={`fixed top-20 inset-x-0 bottom-0 z-0 ${isMapInteractionDisabled ? 'pointer-events-none' : ''}`}>
                <canvas
                    id="map-canvas"
                    className="w-full h-full block cursor-grab"
                    onClick={handleCanvasCountryClick}
                    onMouseLeave={(e) => {
                        const event = new MouseEvent('mouseup', {
                            bubbles: true,
                            cancelable: true,
                            view: window,
                        });
                        e.currentTarget.dispatchEvent(event);
                    }}
                />

                {/* Global FX */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.6)] vignette-gradient" />
            </div>

            <BottomNav
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                countryDetail={countryDetail}
            />

            <ModalsManager
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                countryDetail={countryDetail}
                setCountryDetail={setCountryDetail}
                selectedCountry={selectedCountry}
                currentDate={currentDate}
                resetTrigger={resetTrigger}
                productionDeepLink={productionDeepLink}
                setProductionDeepLink={setProductionDeepLink}
            />

            {/* Premium Floating Skeuomorphic Time Controller Widget */}
            <div className="fixed bottom-8 right-8 z-60 flex flex-col w-[320px]">
                {/* Upper Parchment Card */}
                <div className="bg-[#FAF6EE] rounded-t-2xl px-6 pt-5 pb-10 border-t-2 border-x-2 border-[#C4B49C] shadow-lg flex flex-col relative overflow-hidden">
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
                                const nextSpeed = speed === 1 ? 2 : speed === 2 ? 3 : 1;
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

                    {/* Skeuomorphic silver bottom tray frame */}
                    <div className="absolute -bottom-2 -inset-x-2.5 h-4 bg-gradient-to-b from-slate-300 via-slate-100 to-slate-400 border border-slate-500 rounded-b-xl pointer-events-none shadow-md flex items-center justify-between px-1">
                        {/* Left beveled corner accent */}
                        <div className="w-4 h-3 bg-slate-300 border-r border-slate-500 transform -skew-x-12 rounded-bl-md" />
                        {/* Right beveled corner accent */}
                        <div className="w-4 h-3 bg-slate-300 border-l border-slate-500 transform skew-x-12 rounded-br-md" />
                    </div>
                </div>
            </div>

            <CountryDetailModal
                isOpen={countryDetailModalOpen}
                countryName={countryDetailModalName}
                onClose={() => {
                    setCountryDetailModalOpen(false);
                    setCountryDetailModalName(null);
                }}
            />

            {/* Custom Premium Save Modal */}
            {isSaveModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
                    <div className="bg-[#FAF6EE] rounded-2xl p-6 border-4 border-[#C4B49C] shadow-2xl w-full max-w-md relative overflow-hidden flex flex-col font-sans">
                        {/* Parchment radial gradient background */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />
                        
                        <div className="flex items-center justify-between mb-4 border-b-2 border-[#C4B49C]/30 pb-3 z-10">
                            <span className="text-[12px] font-black text-[#8b7e66] tracking-widest uppercase">SIMPAN PERMAINAN</span>
                            <button 
                                onClick={() => setIsSaveModalOpen(false)}
                                className="text-[#8b7e66] hover:text-[#5c3c10] font-black text-sm cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>
                        
                        <div className="z-10 flex flex-col gap-4">
                            <div className="flex items-center gap-3 bg-[#e4dac3]/40 border border-[#bfae93]/50 p-3.5 rounded-xl">
                                {selectedCountry && (
                                    <img 
                                        src={`https://flagcdn.com/w80/${selectedCountry.iso.toLowerCase()}.png`} 
                                        className="w-8 h-5 rounded-sm object-cover border border-black/10 shadow-sm"
                                        alt="flag"
                                    />
                                )}
                                <div className="flex flex-col leading-tight">
                                    <span className="text-[11px] font-black text-[#5c3c10] uppercase">NEGARA SIMULASI</span>
                                    <span className="text-[13px] font-black text-[#2e261a] uppercase">{selectedCountry?.country}</span>
                                </div>
                            </div>
                            
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] font-black text-[#8b7e66] tracking-wider uppercase">NAMA SAVE FILE</label>
                                <input 
                                    type="text" 
                                    value={saveNameInput} 
                                    onChange={(e) => setSaveNameInput(e.target.value)} 
                                    className="w-full bg-[#FAF6EE] border-2 border-[#C4B49C] rounded-xl px-4 py-3 text-[#2e261a] font-bold placeholder-[#8b7e66]/50 focus:outline-none focus:border-[#5c3c10] transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] text-sm" 
                                    placeholder="Masukkan nama save..."
                                    maxLength={100}
                                />
                            </div>

                            <div className="flex items-center justify-between text-[11px] text-[#8b7e66] font-bold border-t border-[#C4B49C]/30 pt-3 mt-1">
                                <span>Kalender: {timeManagerRef.current?.getFormattedDate() || '-'}</span>
                                <span>Kas: {countryDetail?.anggaran ? `${countryDetail.anggaran} EM` : '-'}</span>
                            </div>

                            <div className="flex items-center gap-3 mt-4">
                                <button 
                                    onClick={() => setIsSaveModalOpen(false)}
                                    className="flex-1 py-3 px-4 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] font-black text-xs uppercase hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer text-center"
                                    disabled={isSaving}
                                >
                                    Batal
                                </button>
                                <button 
                                    onClick={handleSaveGame}
                                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-b from-[#ffe07d] via-[#fcae1e] to-[#c77a00] text-[#5c3c10] border-2 border-[#1e2f3d]/10 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:brightness-110 active:scale-98 font-black text-xs uppercase transition-all cursor-pointer text-center"
                                    disabled={isSaving}
                                >
                                    {isSaving ? 'Menyimpan...' : 'Simpan'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom Toast Alert */}
            {toastMessage && (
                <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-6 py-3.5 rounded-2xl bg-emerald-500 text-white font-black text-sm shadow-xl border border-emerald-400 flex items-center gap-2 animate-bounce">
                    <span className="text-base">✓</span>
                    <span>{toastMessage}</span>
                </div>
            )}

            {/* Tropico Game Menu Modal */}
            <GameMenuModal 
                isOpen={isPresidentMenuOpen}
                onClose={() => setIsPresidentMenuOpen(false)}
                onSaveGameClick={openSaveModal}
                onRestartClick={() => setIsRestartConfirmOpen(true)}
            />

            {/* Confirm Restart Modal */}
            <ConfirmRestartModal 
                isOpen={isRestartConfirmOpen}
                onClose={() => setIsRestartConfirmOpen(false)}
                onConfirm={handleRestart}
            />
        </main>
    );
}
