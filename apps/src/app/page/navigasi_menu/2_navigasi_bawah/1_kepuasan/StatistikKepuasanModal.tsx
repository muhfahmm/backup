"use client"

import { useState } from "react";
import { X, Smile, TrendingUp, BarChart3, Shield, Activity, Landmark, Heart, Sparkles } from "lucide-react";

interface StatistikKepuasanModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveMenu?: (menu: string) => void;
  countryDetail: any;
  selectedCountry: any;
}

export default function StatistikKepuasanModal({
  isOpen,
  onClose,
  setActiveMenu,
  countryDetail,
  selectedCountry
}: StatistikKepuasanModalProps) {
  
  if (!isOpen) return null;

  const countryName = selectedCountry?.country || "Indonesia";
  const generalSatisfaction = countryDetail?.kepuasan ?? 50.0;

  // Derive sector satisfactions
  const sectors = [
    { name: "Kesehatan", score: 50, icon: Heart, color: "text-rose-600", desc: "Akses rumah sakit dan obat-obatan murah." },
    { name: "Keamanan", score: 50, icon: Shield, color: "text-amber-600", desc: "Stabilitas politik dan ketertiban umum." },
    { name: "Ekonomi & Pajak", score: 50, icon: Landmark, color: "text-emerald-600", desc: "Daya beli masyarakat dan beban pajak." },
    { name: "Layanan Publik", score: 50, icon: Activity, color: "text-indigo-600", desc: "Kualitas infrastruktur, listrik dan air bersih." },
    { name: "Sosial & Budaya", score: 50, icon: Sparkles, color: "text-purple-600", desc: "Kebebasan beragama dan toleransi masyarakat." }
  ];

  return (
    <div className="fixed inset-0 bg-black/65 z-50 flex items-center justify-center p-4">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans">
        
        {/* Parchment radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        {/* Header */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                <Smile className="h-6 w-6 text-[#5c3c10]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Kepuasan Rakyat</h2>
              </div>
            </div>

            <div className="flex items-center bg-[#e4dac3]/40 p-1 rounded-xl border border-[#bfae93]/50 backdrop-blur-md ml-4">
              <button
                className="px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20 cursor-pointer"
              >
                Statistik
              </button>
              <button
                onClick={() => setActiveMenu?.("Action:NaikkanKepuasan")}
                className="px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all text-[#8b7e66] hover:text-[#5c3c10] cursor-pointer"
              >
                Naikkan Kepuasan
              </button>
            </div>
          </div>

          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="space-y-8 animate-in fade-in duration-500">
            
            {/* General Score Card */}
            <div className="bg-[#e4dac3]/25 border-2 border-[#C4B49C]/40 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#ffe07d] via-[#fcae1e] to-[#c77a00] border-4 border-[#FAF6EE] shadow-lg flex items-center justify-center">
                  <Smile className="h-10 w-10 text-[#5c3c10]" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#5c3c10] uppercase tracking-wide leading-none mb-1.5">Persetujuan Umum Rakyat</h3>
                  <p className="text-xs text-[#8b7e66] font-bold max-w-md">
                    Rata-rata persetujuan nasional rakyat terhadap kebijakan kepemimpinan kabinet saat ini.
                  </p>
                </div>
              </div>
              <div className="text-center md:text-right bg-[#FAF6EE] border-2 border-[#C4B49C]/30 px-6 py-4 rounded-xl shadow-inner min-w-[140px]">
                <p className="text-4xl font-black text-[#2e261a] tracking-tight leading-none">{generalSatisfaction}%</p>
                <p className="text-[10px] text-emerald-700 font-bold uppercase tracking-widest mt-1 flex items-center justify-center md:justify-end gap-1">
                  <TrendingUp className="h-3 w-3" /> Stabil
                </p>
              </div>
            </div>

            {/* Sector Satisfactions breakdown */}
            <div>
              <div className="flex items-center gap-3 mb-5 px-1">
                <div className="p-1.5 rounded-lg bg-[#e4dac3]/50 border border-[#C4B49C]/40">
                  <BarChart3 className="h-4 w-4 text-[#5c3c10]" />
                </div>
                <h3 className="text-lg font-black text-[#5c3c10] uppercase tracking-wider italic">Penilaian Sektoral</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C4B49C] to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sectors.map((sector, idx) => {
                  const Icon = sector.icon;
                  return (
                    <div key={idx} className="bg-[#FAF6EE] border-2 border-[#C4B49C]/40 p-5 rounded-2xl flex gap-4 transition-all hover:bg-[#e4dac3]/10 shadow-sm relative overflow-hidden group">
                      <div className={`p-3 rounded-xl bg-black/5 border border-black/5 ${sector.color} self-start`}>
                        <Icon size={20} />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between text-xs font-black text-[#5c3c10] uppercase">
                          <span>{sector.name}</span>
                          <span>{sector.score}%</span>
                        </div>
                        <div className="h-2.5 w-full bg-[#e4dac3] rounded-full overflow-hidden border border-[#bfae93]/50">
                          <div className={`h-full bg-gradient-to-r from-[#fcae1e] to-[#c77a00] rounded-full`} style={{ width: `${sector.score}%` }} />
                        </div>
                        <p className="text-[10px] text-[#8b7e66] font-bold leading-normal pt-1">
                          {sector.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
