// detail path: #[[file:c:\utama\project\project-sendiri\EM\apps\src\app\page\navbar\Navbar.tsx:1-156]]
'use client';

import React from 'react';
import { 
    Power, MapPin, Users, Landmark, Scale, Home, Save, RotateCcw, Smile
} from 'lucide-react';
import { calculateCountryNetBalance, formatCurrencyEM } from '@/app/logic/economic_logic/treasuryUpdater';

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
    onOpenGameMenu: () => void;
    onOpenSaveModal: () => void;
    onOpenRestartConfirm: () => void;
    onOpenKepuasan?: () => void;
}

export function Navbar({ 
    selectedCountry, 
    countryDetail, 
    onOpenGameMenu, 
    onOpenSaveModal, 
    onOpenRestartConfirm,
    onOpenKepuasan
}: NavbarProps) {
    const anggaran = Number(countryDetail?.anggaran) || 0;
    const netBalance = calculateCountryNetBalance(countryDetail);
    const netBalanceColor = netBalance >= 0 ? 'text-emerald-700' : 'text-rose-700';
    const netBalanceLabel = `${netBalance >= 0 ? '+ ' : '- '}${Math.abs(netBalance).toLocaleString('id-ID')}`;

    return (
        <nav className="fixed top-0 left-0 right-0 z-70 pointer-events-auto bg-[#e6d8b9] border-b border-[#c4b49c] px-8 py-3.5 flex items-center justify-between shadow-md h-20 select-none backdrop-blur-none">
            
            {/* 1. Left Side: Circular Menu & Selected Badge */}
            <div className="flex items-center gap-3.5 shrink-0">
                {/* Circle Power Button (Tropico Style) */}
                <div className="relative group shrink-0">
                    <button
                        onClick={onOpenGameMenu}
                        title="Game Menu"
                        className="w-12 h-12 rounded-full bg-gradient-to-b from-[#3a4454] via-[#242b35] to-[#12161b] border-[3px] border-[#0d1013] text-[#8fa0b5] hover:text-[#2dd4bf] transition-all shadow-[0_4px_8px_rgba(0,0,0,0.45),inset_0_1px_2px_rgba(255,255,255,0.25)] flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 z-30"
                    >
                        <Power className="w-5 h-5 drop-shadow-[0_0_2px_rgba(45,212,191,0.25)]" />
                    </button>
                    
                    {/* Game Menu Tooltip Hanging Tab */}
                    <div className="absolute top-[52px] left-1/2 -translate-x-1/2 bg-[#FAF6EE] border border-[#C4B49C] shadow-md px-3.5 py-1 text-slate-800 text-[10px] font-black tracking-wider uppercase rounded-sm whitespace-nowrap z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                        Game Menu
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-[#dcc9a3]/50 backdrop-blur-md border border-black/10 px-5 py-2.5 rounded-2xl shadow-lg min-w-[200px]">
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
            </div>

            {/* 2. Center: Live Stats Items */}
            <div className="flex items-center gap-8 overflow-x-auto no-scrollbar mx-8">
                <div className="flex items-center gap-8">
                    <StatusItem icon={<MapPin className="w-3.5 h-3.5" />} label="IBUKOTA" value={countryDetail?.capital || selectedCountry?.capital || '-'} />
                    <StatusItem icon={<Users className="w-3.5 h-3.5" />} label="POPULASI" value={countryDetail?.jumlah_penduduk ? countryDetail.jumlah_penduduk.toLocaleString('id-ID') : '-'} />
                    <StatusItem
                        icon={<Landmark className="w-3.5 h-3.5" />}
                        label="KAS NEGARA"
                        value={countryDetail ? (
                            <span className="flex items-center gap-2">
                                <span>{formatCurrencyEM(anggaran)}</span>
                                <span className={`${netBalanceColor} text-[11px] font-black`}>
                                    ({netBalanceLabel})
                                </span>
                            </span>
                        ) : (
                            '-'
                        )}
                    />
                    <StatusItem icon={<Scale className="w-3.5 h-3.5" />} label="IDEOLOGI" value={countryDetail?.ideology || '-'} />
                    <StatusItem icon={<Home className="w-3.5 h-3.5" />} label="AGAMA MAYORITAS" value={countryDetail?.religion || '-'} />
                    <button 
                        onClick={onOpenKepuasan}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                        title="Klik untuk melihat detail kepuasan"
                    >
                        <StatusItem icon={<Smile className="w-3.5 h-3.5" />} label="KEPUASAN" value={`${countryDetail?.kepuasan !== undefined ? Math.round(countryDetail.kepuasan) : 50}%`} color={getKepuasanColor(countryDetail?.kepuasan ?? 50)} />
                    </button>
                    
                    {/* UN Vote Suara PBB */}
                    <div className="flex items-center gap-3 border-l border-[#c4b49c] pl-6">
                        <span className="text-[9px] font-black text-[#8b7e66] tracking-widest uppercase">SUARA PBB</span>
                        <div className="bg-[#5ea3b1] text-white px-4 py-1.5 rounded-lg font-black text-[14px] shadow-md border border-[#4d8a96]">
                            {countryDetail?.un_vote || '-'}
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Right Side: Save & Restart Buttons */}
            <div className="flex items-center gap-2 shrink-0">
                {/* Save Button */}
                <button
                    onClick={onOpenSaveModal}
                    title="Simpan Game"
                    className="flex items-center justify-center p-2.5 rounded-xl border border-[#c4b49c] bg-[#e6d8b9] text-[#8b7e66] hover:bg-[#dcc9a3]/60 active:bg-[#dcc9a3] transition-all shadow-sm cursor-pointer hover:scale-105 active:scale-95"
                >
                    <Save className="w-4 h-4 text-[#8b7e66]" />
                </button>
                
                {/* Restart Button */}
                <button
                    onClick={onOpenRestartConfirm}
                    title="Atur Ulang Game"
                    className="flex items-center justify-center p-2.5 rounded-xl border border-[#c4b49c] bg-[#e6d8b9] text-[#8b7e66] hover:bg-[#dcc9a3]/60 active:bg-[#dcc9a3] transition-all shadow-sm cursor-pointer hover:scale-105 active:scale-95"
                >
                    <RotateCcw className="w-4 h-4 text-[#8b7e66]" />
                </button>
            </div>
        </nav>
    );
}

// Reusable status card
function StatusItem({ icon, label, value, color = "text-[#3d362a]" }: { icon: React.ReactNode, label: string, value: React.ReactNode, color?: string }) {
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

// Function to get color based on kepuasan level
function getKepuasanColor(kepuasan: number): string {
    if (kepuasan >= 75) return 'text-green-700 font-black'; // 75-100: Hijau Tebal - Sangat Puas
    if (kepuasan >= 66) return 'text-green-600';            // 66-74: Hijau Biasa - Puas
    if (kepuasan >= 41) return 'text-yellow-600';           // 41-65: Kuning - Puas
    if (kepuasan >= 25) return 'text-red-600';              // 25-40: Merah Biasa - Tidak Puas
    return 'text-red-700 font-black';                       // 0-24: Merah Tebal - Sangat Tidak Puas
}
