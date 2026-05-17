'use client';

import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ConfirmRestartModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export function ConfirmRestartModal({ isOpen, onClose, onConfirm }: ConfirmRestartModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm font-sans select-none">
            
            {/* Skeuomorphic Confirmation Frame */}
            <div className="bg-[#101720] border-[4px] border-slate-950 rounded-2xl w-full max-w-[420px] shadow-2xl relative flex flex-col p-3.5 pl-9 min-h-[320px]">
                
                {/* Silver Binder Spine on the Left */}
                <div className="absolute left-2.5 top-4 bottom-4 w-1.5 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-500 rounded-full shadow-md z-20 border border-slate-600/40" />
                <div className="absolute left-[7px] top-[18px] w-[12px] h-2 bg-slate-800 rounded-sm border border-slate-950 z-21 shadow" />
                <div className="absolute left-[7px] bottom-[18px] w-[12px] h-2 bg-slate-800 rounded-sm border border-slate-950 z-21 shadow" />

                {/* Notebook rings */}
                <div className="absolute left-[16px] top-8 bottom-8 flex flex-col justify-between items-center py-4 pointer-events-none z-30">
                    {[...Array(7)].map((_, i) => (
                        <div key={i} className="w-2.5 h-2.5 rounded-full bg-slate-950 shadow-inner border border-slate-800 flex items-center justify-center">
                            <div className="w-1 h-1 rounded-full bg-slate-900" />
                        </div>
                    ))}
                </div>

                {/* Parchment Sheet Card */}
                <div className="flex-1 bg-[#FAF6EE] border-[3px] border-[#dcc9a3]/40 rounded-r-xl shadow-inner relative p-6 flex flex-col justify-between overflow-hidden text-center">
                    
                    {/* Decorative Divider Top */}
                    <div className="flex items-center justify-center gap-1.5 text-sky-800/40 shrink-0">
                        <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-sky-800/40" />
                        <span className="text-[8px] tracking-widest font-black">❖ ❖ ❖</span>
                        <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-sky-800/40" />
                    </div>

                    {/* Alert Warning Symbol & Content */}
                    <div className="flex flex-col items-center gap-3.5 my-3">
                        <div className="w-12 h-12 rounded-full bg-amber-500/10 border-2 border-amber-500 flex items-center justify-center text-amber-600 shadow-sm animate-pulse">
                            <AlertTriangle className="w-6 h-6" />
                        </div>
                        
                        <div className="space-y-2">
                            <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider">
                                Atur Ulang Progres
                            </h3>
                            <p className="text-[11px] font-bold text-slate-600 leading-relaxed px-1">
                                Apakah Anda yakin ingin mengatur ulang progres simulasi? Semua kemajuan waktu dan perubahan data akan dikembalikan ke awal.
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 shrink-0 pt-2 z-10">
                        <button 
                            onClick={onClose}
                            className="flex-1 bg-[#FAF6EE] hover:bg-[#e4dac3]/40 active:bg-[#dcc9a3]/60 border border-[#c4b49c]/80 rounded py-2.5 text-center text-slate-800 font-extrabold text-[11px] tracking-widest uppercase transition-all duration-150 cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow active:scale-[0.98]"
                        >
                            Batal
                        </button>
                        <button 
                            onClick={() => {
                                onConfirm();
                                onClose();
                            }}
                            className="flex-1 bg-red-500 hover:bg-red-600 active:bg-red-700 border border-red-600 rounded py-2.5 text-center text-[#FAF6EE] font-black text-[11px] tracking-widest uppercase transition-all duration-150 cursor-pointer shadow hover:shadow-md active:scale-[0.98]"
                        >
                            Atur Ulang
                        </button>
                    </div>

                    {/* Decorative Divider Bottom */}
                    <div className="flex items-center justify-center gap-1.5 text-sky-800/40 shrink-0 mt-3">
                        <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-sky-800/40" />
                        <span className="text-[8px] tracking-widest font-black">❖ ❖ ❖</span>
                        <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-sky-800/40" />
                    </div>
                </div>
            </div>
        </div>
    );
}
