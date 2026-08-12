'use client';

import React from 'react';
import {
    Power, Users, Landmark, Save, RotateCcw, Smile, LayoutGrid, Star
} from 'lucide-react';
import { calculateCountryNetBalance, formatCurrencyEM } from '@/app/logic/economic_logic/treasuryUpdater';
// 🔥 Import fungsi warna dari logic populasi (sesuai file yang Anda berikan)
import { getNetPopulationChangeColor } from '@/app/logic/populations_logic/population_logic';
import { menuItems, subMenuItems } from '../navigasi_menu/navigationData';

interface Country {
    id: number;
    country: string;
    capital: string;
    iso: string;
    latitude: number;
    longitude: number;
    continent: string;
}

interface NavbarProps {
    selectedCountry: Country | null;
    countryDetail: any;
    netBalanceAdjustment?: number;
    netPopulationChange?: number;
    // 🔥 Data demografi harian (dihitung oleh parent, diteruskan ke Navbar)
    dailyBirths?: number;
    dailyDeaths?: number;
    activeMenu?: string;
    onOpenGameMenu: () => void;
    onOpenSaveModal: () => void;
    onOpenRestartConfirm: () => void;
    onOpenKepuasan?: () => void;
    presidentRating?: number;
}

export function Navbar({
    selectedCountry,
    countryDetail,
    netBalanceAdjustment = 0,
    netPopulationChange = 0,
    dailyBirths = 0,
    dailyDeaths = 0,
    activeMenu = 'Peta Taktis',
    onOpenGameMenu,
    onOpenSaveModal,
    onOpenRestartConfirm,
    onOpenKepuasan,
    presidentRating = 50
}: NavbarProps) {
    const anggaran = Number(countryDetail?.anggaran) || 0;
    const netBalance = calculateCountryNetBalance(countryDetail) + netBalanceAdjustment;
    const netBalanceColor = netBalance >= 0 ? 'text-emerald-700' : 'text-rose-700';
    const netBalanceLabel = `${netBalance >= 0 ? '+ ' : '- '}${Math.abs(netBalance).toLocaleString('id-ID')}`;
    
    // Populasi logic
    const populasi = Number(countryDetail?.jumlah_penduduk) || 0;
    const netPopulationChangeColor = getNetPopulationChangeColor(netPopulationChange);
    const netPopulationLabel = `${netPopulationChange >= 0 ? '+ ' : '- '}${Math.abs(netPopulationChange).toLocaleString('id-ID')}`;

    // Function to get active menu information
    const getActiveMenuInfo = () => {
        if (activeMenu === 'Peta Taktis') {
            return {
                title: 'Peta Taktis',
                icon: LayoutGrid,
                isMainMenu: true,
                mainCategory: null,
                subItems: []
            };
        }

        // Check if activeMenu is a main menu item
        const mainMenuItem = menuItems.find(item => item.id === activeMenu);
        if (mainMenuItem && subMenuItems[activeMenu]) {
            return {
                title: mainMenuItem.label,
                icon: mainMenuItem.icon,
                isMainMenu: true,
                mainCategory: mainMenuItem,
                subItems: subMenuItems[activeMenu]
            };
        }

        // Check if activeMenu is a sub-menu item
        for (const [mainId, subs] of Object.entries(subMenuItems)) {
            const subItem = subs.find((sub: any) => activeMenu.startsWith(sub.id));
            if (subItem) {
                const mainItem = menuItems.find(item => item.id === mainId);
                return {
                    title: subItem.label,
                    icon: subItem.icon,
                    isMainMenu: false,
                    mainCategory: mainItem,
                    subItems: subs
                };
            }
        }

        // Default fallback
        return {
            title: 'Peta Taktis',
            icon: LayoutGrid,
            isMainMenu: true,
            mainCategory: null,
            subItems: []
        };
    };

    const activeMenuInfo = getActiveMenuInfo();

    return (
        <nav className="fixed top-0 left-0 right-0 z-70 pointer-events-auto bg-[#e6d8b9] border-b border-[#c4b49c] px-2 sm:px-6 lg:px-8 py-2 sm:py-3.5 flex items-center justify-between shadow-md min-h-[56px] sm:min-h-[64px] lg:min-h-[80px] select-none backdrop-blur-none">
            
            {/* 1. Left Side: Circular Menu & Selected Badge */}
            <div className="flex items-center gap-1.5 sm:gap-3.5 shrink-0 relative z-20">
                {/* Circle Power Button */}
                <div className="relative group shrink-0">
                    <button
                        onClick={onOpenGameMenu}
                        title="Game Menu"
                        className="w-8 h-8 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-gradient-to-b from-[#3a4454] via-[#242b35] to-[#12161b] border-[2px] sm:border-[3px] border-[#0d1013] text-[#8fa0b5] hover:text-[#2dd4bf] transition-all shadow-[0_4px_8px_rgba(0,0,0,0.45),inset_0_1px_2px_rgba(255,255,255,0.25)] flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 z-30"
                    >
                        <Power className="w-3.5 h-3.5 sm:w-5 sm:h-5 drop-shadow-[0_0_2px_rgba(45,212,191,0.25)]" />
                    </button>
                    
                    <div className="absolute top-[40px] sm:top-[52px] left-1/2 -translate-x-1/2 bg-[#FAF6EE] border border-[#C4B49C] shadow-md px-2 py-1 text-slate-800 text-[8px] sm:text-[10px] font-black tracking-wider uppercase rounded-sm whitespace-nowrap z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Game Menu
                    </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 bg-[#dcc9a3]/50 backdrop-blur-md border border-black/10 px-2.5 sm:px-5 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-lg min-w-[120px] sm:min-w-[180px] lg:min-w-[200px]">
                    {selectedCountry ? (
                        <img 
                            src={`https://flagcdn.com/w80/${selectedCountry.iso.toLowerCase()}.png`} 
                            className="w-6 h-4 sm:w-8 sm:h-5 rounded-sm object-cover border border-black/10 shadow-sm"
                            alt="flag"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://flagcdn.com/w80/un.png';
                            }}
                        />
                    ) : (
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black/5 flex items-center justify-center text-base sm:text-xl">
                        </div>
                    )}
                    <div className="flex flex-col leading-tight">
                        <span className="text-[9px] sm:text-[12px] font-black text-black tracking-tight uppercase">
                            {selectedCountry ? selectedCountry.country : 'Main Simulation'}
                        </span>
                        <span className="text-[7px] sm:text-[10px] font-bold text-black/60 uppercase tracking-widest">
                            {selectedCountry ? selectedCountry.capital : 'Global Map'}
                        </span>
                    </div>
                </div>
            </div>

            {/* 2. Center: Live Stats Items */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 sm:gap-4 lg:gap-6 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth z-10">
                <div className="flex items-center gap-1 sm:gap-4 lg:gap-6 min-w-max">
                    
                    {/* 🔥 POPULASI DENGAN TOOLTIP DEMOGRAFI */}
                    <div className="group relative flex-shrink-0">
                        <StatusItem 
                            icon={<Users className="w-3 h-3 sm:w-3.5 sm:h-3.5" />} 
                            label="POPULASI" 
                            value={
                                <span className="flex items-center gap-1 sm:gap-2">
                                    <span>{populasi.toLocaleString('id-ID')}</span>
                                    <span className={`${netPopulationChangeColor} text-[8px] sm:text-[11px] font-black`}>
                                        ({netPopulationLabel})
                                    </span>
                                </span>
                            } 
                        />
                        {/* Tooltip Rincian Demografi Harian */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max bg-[#FAF6EE] border border-[#C4B49C] shadow-lg rounded-xl p-3 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none">
                            <p className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-1.5 border-b border-[#C4B49C]/30 pb-1.5 text-center">Rincian Demografi</p>
                            <div className="grid grid-cols-2 gap-x-6 text-[11px] font-bold text-[#5c3c10]">
                                <span className="text-emerald-700 text-center">Lahir: +{dailyBirths.toLocaleString('id-ID')}</span>
                                <span className="text-rose-700 text-center">Mati: -{dailyDeaths.toLocaleString('id-ID')}</span>
                            </div>
                            <div className="mt-1.5 pt-1.5 border-t border-[#C4B49C]/30 text-[10px] text-[#8b7e66] text-center">
                                Pertumbuhan Bersih: <span className={`font-bold ${netPopulationChangeColor}`}>{netPopulationLabel}</span>
                            </div>
                        </div>
                    </div>

                    <StatusItem
                        icon={<Landmark className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                        label="KAS NEGARA"
                        value={countryDetail ? (
                            <span className="flex items-center gap-1 sm:gap-2">
                                <span>{formatCurrencyEM(anggaran)}</span>
                                <span className={`${netBalanceColor} text-[8px] sm:text-[11px] font-black`}>
                                    ({netBalanceLabel})
                                </span>
                            </span>
                        ) : (
                            '-'
                        )}
                    />

                    <button 
                        onClick={onOpenKepuasan}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                        title="Klik untuk melihat detail kepuasan"
                    >
                        <StatusItem 
                            icon={<Smile className="w-3 h-3 sm:w-3.5 sm:h-3.5" />} 
                            label="KEPUASAN" 
                            value={`${countryDetail?.kepuasan !== undefined ? Math.round(countryDetail.kepuasan) : 50}%`} 
                            color={getKepuasanColor(countryDetail?.kepuasan ?? 50)} 
                        />
                    </button>

                    <StatusItem 
                        icon={<Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-yellow-400 text-yellow-500" />} 
                        label="PERINGKAT" 
                        value={`${presidentRating}/100`} 
                        color={getPresidentRatingColor(presidentRating)} 
                    />
                </div>
            </div>

            {/* 3. Right Side: Save & Restart Buttons */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0 relative z-20">
                <button
                    onClick={onOpenSaveModal}
                    title="Simpan Game"
                    className="flex items-center justify-center p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border border-[#c4b49c] bg-[#e6d8b9] text-[#8b7e66] hover:bg-[#dcc9a3]/60 active:bg-[#dcc9a3] transition-all shadow-sm cursor-pointer hover:scale-105 active:scale-95"
                >
                    <Save className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8b7e66]" />
                </button>
                
                <button
                    onClick={onOpenRestartConfirm}
                    title="Atur Ulang Game"
                    className="flex items-center justify-center p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border border-[#c4b49c] bg-[#e6d8b9] text-[#8b7e66] hover:bg-[#dcc9a3]/60 active:bg-[#dcc9a3] transition-all shadow-sm cursor-pointer hover:scale-105 active:scale-95"
                >
                    <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8b7e66]" />
                </button>
            </div>
        </nav>
    );
}

// StatusItem
function StatusItem({ icon, label, value, color = "text-[#3d362a]" }: { icon: React.ReactNode, label: string, value: React.ReactNode, color?: string }) {
    return (
        <div className="flex items-center gap-1.5 sm:gap-4 flex-shrink-0">
            <div className="p-1 sm:p-2 bg-[#dcc9a3]/60 rounded-lg sm:rounded-xl text-[#8b7e66] shadow-sm border border-black/5">
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-[6px] sm:text-[10px] font-black text-[#8b7e66]/80 tracking-widest uppercase leading-none mb-0.5 sm:mb-1.5">
                    {label}
                </span>
                <span className={`text-[9px] sm:text-[13px] font-black tracking-tighter uppercase leading-none whitespace-nowrap ${color}`}>
                    {value}
                </span>
            </div>
        </div>
    );
}

function getKepuasanColor(kepuasan: number): string {
    if (kepuasan >= 75) return 'text-green-700 font-black';
    if (kepuasan >= 66) return 'text-green-600';
    if (kepuasan >= 41) return 'text-yellow-600';
    if (kepuasan >= 25) return 'text-red-600';
    return 'text-red-700 font-black';
}

function getPresidentRatingColor(rating: number): string {
    if (rating >= 80) return 'text-green-700 font-black';
    if (rating >= 60) return 'text-green-600';
    if (rating >= 40) return 'text-yellow-600';
    if (rating >= 20) return 'text-red-600';
    return 'text-red-700 font-black';
}