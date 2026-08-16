'use client';

import React from 'react';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

interface ModalsPeringatanPeringkatProps {
    isOpen: boolean;
    onClose: () => void;
    currentRating: number;
}

export function ModalsPeringatanPeringkat({ isOpen, onClose, currentRating }: ModalsPeringatanPeringkatProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm font-sans select-none animate-fade-in">
            
            {/* Skeuomorphic Confirmation Frame */}
            <div className="bg-[#181111] border-[4px] border-red-950 rounded-2xl w-full max-w-[430px] shadow-2xl relative flex flex-col p-3.5 pl-9 min-h-[340px] animate-scale-up">
                
                {/* Silver Binder Spine on the Left */}
                <div className="absolute left-2.5 top-4 bottom-4 w-1.5 bg-gradient-to-r from-red-600 via-red-400 to-red-800 rounded-full shadow-md z-20 border border-red-950/40" />
                <div className="absolute left-[7px] top-[18px] w-[12px] h-2 bg-red-950 rounded-sm border border-slate-950 z-21 shadow" />
                <div className="absolute left-[7px] bottom-[18px] w-[12px] h-2 bg-red-950 rounded-sm border border-slate-950 z-21 shadow" />

                {/* Notebook rings */}
                <div className="absolute left-[16px] top-8 bottom-8 flex flex-col justify-between items-center py-4 pointer-events-none z-30">
                    {[...Array(7)].map((_, i) => (
                        <div key={i} className="w-2.5 h-2.5 rounded-full bg-slate-950 shadow-inner border border-red-900 flex items-center justify-center">
                            <div className="w-1 h-1 rounded-full bg-red-950" />
                        </div>
                    ))}
                </div>

                {/* Parchment Sheet Card */}
                <div className="flex-1 bg-[#FAF4F4] border-[3px] border-red-200/50 rounded-r-xl shadow-inner relative p-6 flex flex-col justify-between overflow-hidden text-center">
                    
                    {/* Decorative Divider Top */}
                    <div className="flex items-center justify-center gap-1.5 text-red-800/40 shrink-0">
                        <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-red-800/40" />
                        <span className="text-[8px] tracking-widest font-black text-red-700">⚠️ KRITIS ⚠️</span>
                        <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-red-800/40" />
                    </div>

                    {/* Alert Warning Symbol & Content */}
                    <div className="flex flex-col items-center gap-3.5 my-3">
                        <div className="w-14 h-14 rounded-full bg-red-100 border-2 border-red-600 flex items-center justify-center text-red-600 shadow-sm animate-bounce">
                            <ShieldAlert className="w-7 h-7" />
                        </div>
                        
                        <div className="space-y-2">
                            <h3 className="text-sm font-black text-red-700 uppercase tracking-widest">
                                Peringatan Keamanan Negara
                            </h3>
                            <p className="text-[12px] font-extrabold text-slate-800 uppercase tracking-tight">
                                Peringkat Anda: <span className="text-red-600 font-black text-sm">{currentRating}/100</span>
                            </p>
                            <p className="text-[11px] font-bold text-slate-600 leading-relaxed px-1">
                                Kepercayaan rakyat terhadap kepemimpinan Anda telah mencapai tingkat krisis! Jika peringkat Anda turun di bawah angka ini, Anda berisiko dimakzulkan oleh parlemen. Segera naikkan peringkat dengan memenuhi aspirasi rakyat dan menyelenggarakan program bantuan!
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 shrink-0 pt-2 z-10">
                        <button 
                            onClick={onClose}
                            className="flex-1 bg-red-600 hover:bg-red-700 active:bg-red-800 border border-red-700 rounded py-2.5 text-center text-[#FAF6EE] font-black text-[11px] tracking-widest uppercase transition-all duration-150 cursor-pointer shadow hover:shadow-md active:scale-[0.98]"
                        >
                            Saya Mengerti
                        </button>
                    </div>

                    {/* Decorative Divider Bottom */}
                    <div className="flex items-center justify-center gap-1.5 text-red-800/40 shrink-0 mt-3">
                        <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-red-800/40" />
                        <span className="text-[8px] tracking-widest font-black text-red-700">❖ ❖ ❖</span>
                        <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-red-800/40" />
                    </div>
                </div>
            </div>
        </div>
    );
}
