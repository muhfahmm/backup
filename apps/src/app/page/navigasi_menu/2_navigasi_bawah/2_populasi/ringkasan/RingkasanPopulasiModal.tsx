"use client"

import { useState, useEffect, useMemo } from "react";
import { X, Users, Info, TrendingUp, ShieldAlert, BadgeDollarSign, Activity, Users2 } from "lucide-react";
import {
  calculateSectoralSatisfaction,
  calculateGeneralSatisfaction,
  calculateLifeExpectancy,
  calculateSecurityLevel,
  calculateDailyBirths,
  calculateDailyDeaths,
  calculateHomelessCount,
  type PopulationDailyMetrics,
  type PopulationSectoral,
} from "@/app/logic/populations_logic/population_logic";

// ==============================
// Tipe data yang diharapkan dari countryDetail
// ==============================
interface CountryDetail {
  jumlah_penduduk: number;
  rata_rata_pajak?: number;
  living_cost_index?: number;
  indeks_ketahanan_pangan?: number;
  surplus_listrik?: number;
  tingkat_hunian_layak?: number;
  harapan_hidup?: number;
  tingkat_keamanan?: number;
  inisiatif_aktif?: { nama: string; boost: number }[];
}

interface RingkasanPopulasiModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  selectedCountry: any;
}

// ==============================
// Fungsi Penghitung Kepuasan Sektoral
// ==============================
function hitungKepuasanSektoral(detail: CountryDetail): PopulationSectoral {
  return calculateSectoralSatisfaction(detail);
}

// ==============================
// Fungsi Penghitung Metrik Demografi Dinamis
// ==============================
function hitungDemografi(detail: CountryDetail) {
  const populasi = detail.jumlah_penduduk || 10_000_000;
  const sektoral = hitungKepuasanSektoral(detail);
  
  const kepuasanUmum = calculateGeneralSatisfaction(detail);
  const lifeExpectancy = calculateLifeExpectancy(detail, kepuasanUmum);
  const securityLevel = calculateSecurityLevel(detail, kepuasanUmum);
  
  const dailyBirths = calculateDailyBirths(populasi, kepuasanUmum);
  const dailyDeaths = calculateDailyDeaths(populasi, lifeExpectancy, securityLevel);
  
  const totalDailyDelta = dailyBirths - dailyDeaths;
  const totalMonthlyGrowthPercent = ((totalDailyDelta * 30) / populasi) * 100;
  
  const homelessCount = calculateHomelessCount(populasi, sektoral.hunian);
  const livingCostIndex = detail.living_cost_index ?? 62.4;

  return {
    populasi,
    dailyBirths,
    dailyDeaths,
    totalDailyDelta,
    totalMonthlyGrowthPercent,
    homelessCount,
    livingCostIndex,
    securityLevel,
    lifeExpectancy,
    kepuasanUmum,
    sektoral,
  };
}

// ==============================
// Komponen Modal
// ==============================
export default function RingkasanPopulasiModal({ 
  isOpen, 
  onClose,
  countryDetail,
  selectedCountry
}: RingkasanPopulasiModalProps) {
  
  const metrics = useMemo(() => {
    if (!countryDetail) return null;
    return hitungDemografi(countryDetail);
  }, [countryDetail]);

  if (!isOpen || !metrics) return null;

  const { 
    populasi,
    dailyBirths,
    dailyDeaths,
    totalDailyDelta,
    totalMonthlyGrowthPercent,
    homelessCount,
    livingCostIndex,
    kepuasanUmum,
  } = metrics;

  const countryName = selectedCountry?.country || "Indonesia";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        {/* Header */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-3">
              <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                <Users2 className="h-6 w-6 text-[#5c3c10]" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#5c3c10] tracking-tight leading-none uppercase">Kependudukan</h2>
              </div>
            </div>

          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Summary Cards (tetap) */}
        <div className="px-8 py-3 bg-[#e4dac3]/20 border-b border-[#C4B49C]/20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-[#FAF6EE]/80 border-2 border-[#C4B49C]/30 p-4 rounded-xl flex items-center gap-4 transition-all shadow-sm">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <Users className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <p className="text-[10px] text-[#8b7e66] font-black uppercase tracking-wider">Total Populasi</p>
                <p className="text-lg font-black text-[#2e261a] leading-tight">{populasi.toLocaleString('id-ID')} <span className="text-[9px] text-[#8b7e66]">JIWA</span></p>
              </div>
            </div>

            <div className="bg-[#FAF6EE]/80 border-2 border-[#C4B49C]/30 p-4 rounded-xl flex items-center gap-4 transition-all shadow-sm">
              <div className="p-3 bg-emerald-500/10 rounded-xl">
                <TrendingUp className="h-6 w-6 text-emerald-700" />
              </div>
              <div>
                <p className="text-[10px] text-[#8b7e66] font-black uppercase tracking-wider">Laju Pertumbuhan</p>
                <p className={`text-lg font-black leading-tight ${totalDailyDelta >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                  {totalDailyDelta >= 0 ? '+' : ''}{totalDailyDelta.toLocaleString('id-ID')} <span className="text-[9px] text-[#8b7e66]">/hr</span>
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

        {/* Content Area - tanpa card Kondisi Sosial */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10">
          <div className="space-y-6 animate-in fade-in duration-500">
            
            {/* Hanya satu card Informasi Demografi dengan lebar penuh */}
            <div className="bg-[#e4dac3]/20 border-2 border-[#C4B49C]/30 p-6 rounded-2xl space-y-4">
              <h3 className="text-md font-black text-[#5c3c10] uppercase tracking-wider flex items-center gap-2">
                <Info className="h-5 w-5 text-[#8b7e66]" />
                Informasi Demografi
              </h3>
              <div className="space-y-4 font-sans text-sm text-[#5c3c10] font-medium leading-relaxed">
                <p>
                  Negara <span className="font-bold">{countryName}</span> memiliki total populasi terdaftar sebanyak <span className="font-bold">{populasi.toLocaleString('id-ID')} jiwa</span>. 
                  Saat ini, laju pertumbuhan harian berada pada angka <span className={`font-bold ${totalDailyDelta >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>{totalDailyDelta >= 0 ? '+' : ''}{totalDailyDelta.toLocaleString('id-ID')} jiwa per hari</span>.
                </p>
                <div className="pt-4 border-t border-[#C4B49C]/30 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] text-[#8b7e66] font-black uppercase">Angka Kelahiran Harian</p>
                    <p className="text-lg font-black text-emerald-700">+{dailyBirths.toLocaleString('id-ID')}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#8b7e66] font-black uppercase">Angka Kematian Harian</p>
                    <p className="text-lg font-black text-rose-700">-{dailyDeaths.toLocaleString('id-ID')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Laporan Analisis (tetap menggunakan kepuasanUmum untuk teks) */}
            <div className="bg-[#e4dac3]/30 border-2 border-[#C4B49C]/40 p-5 rounded-2xl flex items-center gap-5 relative overflow-hidden group">
              <div className="p-3 bg-[#5c3c10]/5 rounded-xl border border-[#5c3c10]/15">
                <Info className="h-6 w-6 text-[#5c3c10]" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-black text-[#5c3c10] uppercase tracking-wide mb-1">Laporan Analisis Demografi Nasional</h4>
                <p className="text-xs text-[#8b7e66] font-bold leading-relaxed">
                  {totalDailyDelta >= 0 ? (
                    <span className="text-emerald-700">Status: Pertumbuhan Populasi Positif.</span>
                  ) : (
                    <span className="text-rose-700">Status: Pertumbuhan Populasi Negatif!</span>
                  )}{" "}
                  Demografi nasional saat ini menunjukkan tren {totalMonthlyGrowthPercent >= 0 ? 'ekspansi' : 'kontraksi'} sebesar <span className="text-[#2e261a]">{totalMonthlyGrowthPercent.toFixed(2)}% per bulan</span>.
                  {kepuasanUmum >= 70 
                    ? " Layanan publik berjalan stabil dan kepuasan tinggi mendorong pertumbuhan."
                    : kepuasanUmum < 40 
                      ? " Rendahnya kepuasan rakyat mengancam stabilitas demografi." 
                      : " Kepuasan rakyat cukup moderat, perlu peningkatan di beberapa sektor."}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}