"use client"

import { useState } from "react";
import { X, Users, TrendingUp, ShieldAlert, BadgeDollarSign, Activity, Users2, Clock, Heart, Gavel, Landmark, Briefcase, Baby } from "lucide-react";

interface StatistikPopulasiModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveMenu?: (menu: string) => void;
  countryDetail: any;
  selectedCountry: any;
}

export default function StatistikPopulasiModal({ 
  isOpen, 
  onClose,
  setActiveMenu,
  countryDetail,
  selectedCountry
}: StatistikPopulasiModalProps) {
  
  if (!isOpen) return null;

  const population = countryDetail?.jumlah_penduduk || 10000000;
  const countryName = selectedCountry?.country || "Indonesia";

  // Dynamic demography parameters
  const dailyBirths = Math.floor(population * 0.000042);
  const dailyDeaths = Math.floor(population * 0.000018);
  const totalDailyDelta = dailyBirths - dailyDeaths;
  
  const homelessCount = Math.floor(population * 0.007);
  const livingCostIndex = 62.4;
  const securityLevel = 84.5;
  const lifeExpectancy = 73.2;

  const socialClasses = [
    { label: "Kaum Elit", percent: 2.1, color: "bg-amber-600", text: "text-amber-700", bg: "bg-amber-800/10", icon: BadgeDollarSign },
    { label: "Menengah Atas", percent: 11.8, color: "bg-blue-600", text: "text-blue-700", bg: "bg-blue-800/10", icon: Landmark },
    { label: "Kelas Menengah", percent: 46.4, color: "bg-emerald-600", text: "text-emerald-700", bg: "bg-emerald-800/10", icon: Briefcase },
    { label: "Kelas Pekerja", percent: 31.2, color: "bg-stone-600", text: "text-stone-700", bg: "bg-stone-800/10", icon: Gavel },
    { label: "Masyarakat Miskin", percent: 8.5, color: "bg-rose-600", text: "text-rose-700", bg: "bg-rose-800/10", icon: ShieldAlert }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        
        {/* Parchment radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        {/* Header */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                <Users2 className="h-6 w-6 text-[#5c3c10]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Kependudukan</h2>
              </div>
            </div>

            <div className="flex items-center bg-[#e4dac3]/40 p-1 rounded-xl border border-[#bfae93]/50 backdrop-blur-md ml-4">
              <button
                onClick={() => setActiveMenu?.("Dashboard:Populasi:Overview")}
                className="px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all text-[#8b7e66] hover:text-[#5c3c10] cursor-pointer"
              >
                Ringkasan
              </button>
              <button
                className="px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20 cursor-pointer"
              >
                Statistik
              </button>
            </div>
          </div>

          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Summary Cards */}
        <div className="px-8 py-4 bg-[#e4dac3]/20 border-b border-[#C4B49C]/20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-[#FAF6EE]/80 border-2 border-[#C4B49C]/30 p-4 rounded-xl flex items-center gap-4 transition-all shadow-sm">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <Users className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <p className="text-[10px] text-[#8b7e66] font-black uppercase tracking-wider">Total Populasi</p>
                <p className="text-lg font-black text-[#2e261a] leading-tight">{population.toLocaleString('id-ID')} <span className="text-[9px] text-[#8b7e66]">JIWA</span></p>
              </div>
            </div>

            <div className="bg-[#FAF6EE]/80 border-2 border-[#C4B49C]/30 p-4 rounded-xl flex items-center gap-4 transition-all shadow-sm">
              <div className="p-3 bg-emerald-500/10 rounded-xl">
                <TrendingUp className="h-6 w-6 text-emerald-700" />
              </div>
              <div>
                <p className="text-[10px] text-[#8b7e66] font-black uppercase tracking-wider">Laju Pertumbuhan</p>
                <p className={`text-lg font-black leading-tight text-emerald-700`}>
                  +{totalDailyDelta.toLocaleString('id-ID')} <span className="text-[9px] text-[#8b7e66]">/hr</span>
                </p>
              </div>
            </div>

            <div className="bg-[#FAF6EE]/80 border-2 border-[#C4B49C]/30 p-4 rounded-xl flex items-center gap-4 transition-all shadow-sm">
              <div className="p-3 bg-rose-500/10 rounded-xl">
                <ShieldAlert className="h-6 w-6 text-rose-700" />
              </div>
              <div>
                <p className="text-[10px] text-[#8b7e66] font-black uppercase tracking-wider">Tunawisma</p>
                <p className="text-lg font-black text-[#2e261a] leading-tight">{homelessCount.toLocaleString('id-ID')} <span className="text-[9px] text-[#8b7e66]">JIWA</span></p>
              </div>
            </div>

            <div className="bg-[#FAF6EE]/80 border-2 border-[#C4B49C]/30 p-4 rounded-xl flex items-center gap-4 transition-all shadow-sm">
              <div className="p-3 bg-amber-500/10 rounded-xl">
                <BadgeDollarSign className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <p className="text-[10px] text-[#8b7e66] font-black uppercase tracking-wider">Kesejahteraan</p>
                <p className="text-lg font-black text-[#2e261a] leading-tight">{livingCostIndex.toFixed(1)} <span className="text-[9px] text-[#8b7e66]">INDX</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Section: Struktur Kelas Sosial */}
            <div>
              <div className="flex items-center gap-3 mb-5 px-1">
                <div className="p-1.5 rounded-lg bg-[#e4dac3]/50 border border-[#C4B49C]/40">
                  <Gavel className="h-4 w-4 text-[#5c3c10]" />
                </div>
                <h3 className="text-lg font-black text-[#5c3c10] uppercase tracking-wider italic">1. Struktur Kelas Sosial</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C4B49C] to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-1">
                {socialClasses.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-[#FAF6EE] border-2 border-[#C4B49C]/40 p-5 rounded-2xl flex flex-col gap-4 relative group overflow-hidden transition-all hover:bg-[#e4dac3]/10 shadow-sm min-h-[140px]">
                      <div className="flex items-start justify-between relative z-10">
                        <div className={`p-2 rounded-xl bg-black/5 border border-black/5 ${item.text}`}>
                          <Icon size={20} />
                        </div>
                        <div className="bg-[#e4dac3]/40 border border-[#bfae93]/30 px-2 py-0.5 rounded-lg">
                          <span className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider">{item.percent}%</span>
                        </div>
                      </div>

                      <div className="space-y-1 relative z-10">
                        <h4 className="text-xs font-black text-[#5c3c10] uppercase tracking-tight italic leading-none">{item.label}</h4>
                        <div className="mt-2 h-1.5 w-full bg-[#e4dac3] rounded-full overflow-hidden border border-[#bfae93]/50">
                          <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${item.percent}%` }} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section: Metrik Demografi & Vitalitas */}
            <div className="pt-6 border-t border-[#C4B49C]/25">
              <div className="flex items-center gap-3 mb-6 px-1">
                <div className="p-1.5 rounded-lg bg-[#e4dac3]/50 border border-[#C4B49C]/40">
                  <Activity className="h-4 w-4 text-[#5c3c10]" />
                </div>
                <h3 className="text-lg font-black text-[#5c3c10] uppercase tracking-wider italic">2. Metrik Demografi & Vitalitas</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C4B49C] to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Harapan Hidup", val: lifeExpectancy.toFixed(1), unit: "THN", icon: Heart, color: "text-rose-600", desc: "Kualitas Kesehatan" },
                  { label: "Keamanan Nasional", val: securityLevel.toFixed(1), unit: "%", icon: ShieldAlert, color: "text-amber-600", desc: "Stabilitas Hukum" },
                  { label: "Median Usia", val: "30.2", unit: "THN", icon: Clock, color: "text-blue-600", desc: "Struktur Umur" },
                  { label: "Kelahiran Harian", val: dailyBirths.toLocaleString('id-ID'), unit: "JIWA", icon: Baby, color: "text-emerald-600", desc: "Laju Fertilitas" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#FAF6EE] border-2 border-[#C4B49C]/40 p-4 rounded-xl flex items-center justify-between hover:bg-[#e4dac3]/10 transition-all group shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 bg-black/5 rounded-xl border border-black/5 ${item.color}`}>
                        <item.icon size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#5c3c10] font-black uppercase tracking-wider leading-none">{item.label}</p>
                        <p className="text-[8px] text-[#8b7e66] mt-1 font-bold tracking-tight uppercase leading-none">{item.desc}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-md font-black text-[#2e261a] leading-none">{item.val}</p>
                      <p className="text-[8px] text-[#8b7e66] font-black uppercase tracking-widest mt-0.5">{item.unit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
