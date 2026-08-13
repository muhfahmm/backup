"use client";

import React, { useState } from "react";
import { X, Users, Heart, Shield, Home, HeartPulse, Utensils, AlertTriangle, Factory, ArrowUpRight, Skull, Info } from "lucide-react";
import { COUNTRY_STATIC_DATA } from "@/app/logic/populations_logic/index_Kesejahteraan";
import {
  calculateGeneralSatisfaction,
  calculateLifeExpectancy,
  calculateSecurityLevel,
  calculateDailyDeaths,
} from "@/app/logic/populations_logic/population_logic";

// 🔥 Import 7 modal detail (pastikan path sesuai struktur Anda)
import DetailHarapanHidupModal from './grid_modals/DetailHarapanHidupModal';
import DetailKeamananModal from './grid_modals/DetailKeamananModal';
import DetailTunawismaModal from './grid_modals/DetailTunawismaModal';
import DetailKesehatanModal from './grid_modals/DetailKesehatanModal';
import DetailKetahananPanganModal from './grid_modals/DetailKetahananPanganModal';
import DetailKriminalitasModal from './grid_modals/DetailKriminalitasModal';
import DetailPolusiModal from './grid_modals/DetailPolusiModal';

interface DetailKematianModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail?: any;
  selectedCountry?: any;
  homelessCount?: number; // Data tunawisma dari induk
  onOpenTempatUmum?: (tabId: string) => void;
  onOpenIndustriPangan?: () => void;
  onOpenArmada?: (tabId: 'aktif' | 'infrastruktur' | 'polisi') => void;
}

export default function DetailKematianModal({
  isOpen,
  onClose,
  countryDetail,
  selectedCountry,
  homelessCount: propsHomelessCount,
  onOpenTempatUmum,
  onOpenIndustriPangan,
  onOpenArmada,
}: DetailKematianModalProps) {
  // 🔥 State untuk 7 modal detail (agar tombol Info bisa membuka modal)
  const [isHarapanHidupOpen, setIsHarapanHidupOpen] = useState(false);
  const [isKeamananOpen, setIsKeamananOpen] = useState(false);
  const [isTunawismaOpen, setIsTunawismaOpen] = useState(false);
  const [isKesehatanOpen, setIsKesehatanOpen] = useState(false);
  const [isKetahananPanganOpen, setIsKetahananPanganOpen] = useState(false);
  const [isKriminalitasOpen, setIsKriminalitasOpen] = useState(false);
  const [isPolusiOpen, setIsPolusiOpen] = useState(false);

  if (!isOpen) return null;

  const populasi = countryDetail?.jumlah_penduduk || 10_000_000;

  const countryName = selectedCountry?.country?.toLowerCase?.() || "";
  const staticData = COUNTRY_STATIC_DATA[countryName];
  const livingCostIndex = countryDetail?.living_cost_index ?? staticData?.livingCostIndex ?? 62.4;

  const detailWithDefaults = { ...countryDetail, living_cost_index: livingCostIndex };
  const kepuasanUmum = calculateGeneralSatisfaction(detailWithDefaults);
  const lifeExpectancy = calculateLifeExpectancy(detailWithDefaults, kepuasanUmum);
  const securityLevel = calculateSecurityLevel(detailWithDefaults, kepuasanUmum);

  // 🔥 Fungsi 3 parameter
  const dailyDeaths = calculateDailyDeaths(populasi, lifeExpectancy, securityLevel);

  // --- Data visual UI ---
  const harapanHidup = countryDetail?.harapan_hidup ?? 70;
  const tingkatKeamanan = countryDetail?.tingkat_keamanan ?? 80;
  const homelessCount = propsHomelessCount ?? 0;
  const jumlahRumahSakit = countryDetail?.jumlah_rumah_sakit ?? 0;
  const indeksKetahananPangan = countryDetail?.indeks_ketahanan_pangan ?? 60;
  const tingkatKriminalitas = countryDetail?.tingkat_kriminalitas ?? 5;
  const polusiIndex = countryDetail?.polusi_index ?? 40;

  const lifeExpectancyFactor = Math.max(0.8, 1.2 - (0.005 * (harapanHidup - 50)));
  const securityFactor = Math.max(0.75, 1.0 - (0.005 * (tingkatKeamanan - 50)));
  const homelessRatio = homelessCount / populasi;
  const homelessFactor = 1 + (homelessRatio * 5);
  const idealHospitals = Math.ceil(populasi / 100000);
  const hospitalRatio = idealHospitals > 0 ? Math.min(1, jumlahRumahSakit / idealHospitals) : 0;
  const healthFactor = 1.0 - (0.3 * (1 - hospitalRatio));
  const foodSecurityFactor = 0.7 + (0.003 * indeksKetahananPangan);
  const crimeFactor = 1 + (tingkatKriminalitas * 0.02);
  const pollutionFactor = 1 + (polusiIndex / 200);

  const formatNumber = (num: number) => num.toLocaleString('id-ID');
  const countryDisplayName = selectedCountry?.country || "Indonesia";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        {/* Header */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-rose-500/10 rounded-xl border border-rose-500/20">
              <Users className="h-6 w-6 text-rose-700" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#5c3c10] tracking-tight leading-none uppercase">Rincian Angka Kematian</h2>
              <p className="text-xs text-[#8b7e66] font-medium">Faktor-faktor yang memengaruhi kematian di {countryDisplayName}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="space-y-6 animate-in fade-in duration-500">
            
            {/* Ringkasan Utama */}
            <div className="bg-white/60 border-2 border-[#C4B49C]/20 p-6 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-[#8b7e66] uppercase tracking-wider">Kematian Harian</p>
                  <p className="text-4xl font-black text-rose-700 mt-1">-{formatNumber(dailyDeaths)}</p>
                </div>
                <div className="p-4 bg-rose-50 rounded-full border border-rose-200">
                  <Skull className="h-10 w-10 text-rose-600" />
                </div>
              </div>
              <p className="mt-4 text-xs text-[#8b7e66] font-medium">
                Berdasarkan total populasi {formatNumber(populasi)} jiwa dan kondisi sosial-ekonomi terkini.
              </p>
            </div>

            {/* Breakdown Faktor - DENGAN TOMBOL INFO DI KANAN ATAS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 1. Harapan Hidup */}
              <div className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2 relative">
                <button
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white shadow-sm border border-[#C4B49C]/30 text-[#8b7e66] hover:text-[#5c3c10] transition-colors cursor-pointer"
                  onClick={() => setIsHarapanHidupOpen(true)}
                >
                  <Info className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-blue-500/10 rounded-lg">
                    <Heart className="h-4 w-4 text-blue-700" />
                  </div>
                  <h4 className="text-xs font-black text-[#5c3c10] uppercase">Harapan Hidup</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#2e261a]">{harapanHidup} tahun</span>
                  <span className="text-[10px] text-[#8b7e66]">× {lifeExpectancyFactor.toFixed(3)}</span>
                </div>
                <p className="text-[10px] text-[#8b7e66]">Semakin tinggi harapan hidup, semakin rendah angka kematian.</p>
              </div>

              {/* 2. Keamanan */}
              <div className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2 relative">
                <button
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white shadow-sm border border-[#C4B49C]/30 text-[#8b7e66] hover:text-[#5c3c10] transition-colors cursor-pointer"
                  onClick={() => setIsKeamananOpen(true)}
                >
                  <Info className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-indigo-500/10 rounded-lg">
                    <Shield className="h-4 w-4 text-indigo-700" />
                  </div>
                  <h4 className="text-xs font-black text-[#5c3c10] uppercase">Tingkat Keamanan</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#2e261a]">{tingkatKeamanan}%</span>
                  <span className="text-[10px] text-[#8b7e66]">× {securityFactor.toFixed(3)}</span>
                </div>
                <p className="text-[10px] text-[#8b7e66]">Lingkungan aman mengurangi kematian akibat kriminalitas dan kecelakaan.</p>
              </div>

              {/* 3. Tunawisma */}
              <div className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2 relative">
                <button
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white shadow-sm border border-[#C4B49C]/30 text-[#8b7e66] hover:text-[#5c3c10] transition-colors cursor-pointer"
                  onClick={() => setIsTunawismaOpen(true)}
                >
                  <Info className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-amber-500/10 rounded-lg">
                    <Home className="h-4 w-4 text-amber-700" />
                  </div>
                  <h4 className="text-xs font-black text-[#5c3c10] uppercase">Tunawisma</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#2e261a]">{formatNumber(homelessCount)} jiwa ({ (homelessRatio * 100).toFixed(2)}%)</span>
                  <span className="text-[10px] text-[#8b7e66]">× {homelessFactor.toFixed(3)}</span>
                </div>
                <p className="text-[10px] text-[#8b7e66]">Setiap 1% populasi tunawisma meningkatkan kematian sebesar 5%.</p>
              </div>

              {/* 4. Kesehatan */}
              <div 
                className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2 relative cursor-pointer hover:shadow-md hover:border-[#5c3c10]/40 hover:bg-[#e4dac3]/25 transition-all duration-200 active:scale-[0.98]"
                onClick={() => onOpenTempatUmum?.('kesehatan')}
              >
                <button
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white shadow-sm border border-[#C4B49C]/30 text-[#8b7e66] hover:text-[#5c3c10] transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsKesehatanOpen(true);
                  }}
                >
                  <Info className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-green-500/10 rounded-lg">
                    <HeartPulse className="h-4 w-4 text-green-700" />
                  </div>
                  <h4 className="text-xs font-black text-[#5c3c10] uppercase">Fasilitas Kesehatan</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#2e261a]">{jumlahRumahSakit} RS (rasio {hospitalRatio.toFixed(2)})</span>
                  <span className="text-[10px] text-[#8b7e66]">× {healthFactor.toFixed(3)}</span>
                </div>
                <p className="text-[10px] text-[#8b7e66]">Ketersediaan RS yang cukup menurunkan kematian akibat penyakit yang dapat diobati.</p>
              </div>

              {/* 5. Ketahanan Pangan */}
              <div 
                className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2 relative cursor-pointer hover:shadow-md hover:border-[#5c3c10]/40 hover:bg-[#e4dac3]/25 transition-all duration-200 active:scale-[0.98]"
                onClick={() => onOpenIndustriPangan?.()}
              >
                <button
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white shadow-sm border border-[#C4B49C]/30 text-[#8b7e66] hover:text-[#5c3c10] transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsKetahananPanganOpen(true);
                  }}
                >
                  <Info className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-orange-500/10 rounded-lg">
                    <Utensils className="h-4 w-4 text-orange-700" />
                  </div>
                  <h4 className="text-xs font-black text-[#5c3c10] uppercase">Ketahanan Pangan</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#2e261a]">{indeksKetahananPangan}%</span>
                  <span className="text-[10px] text-[#8b7e66]">× {foodSecurityFactor.toFixed(3)}</span>
                </div>
                <p className="text-[10px] text-[#8b7e66]">Ketersediaan pangan yang cukup mengurangi kematian akibat malnutrisi.</p>
              </div>

              {/* 6. Kriminalitas */}
              <div 
                className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2 relative cursor-pointer hover:shadow-md hover:border-[#5c3c10]/40 hover:bg-[#e4dac3]/25 transition-all duration-200 active:scale-[0.98]"
                onClick={() => onOpenArmada?.('polisi')}
              >
                <button
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white shadow-sm border border-[#C4B49C]/30 text-[#8b7e66] hover:text-[#5c3c10] transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsKriminalitasOpen(true);
                  }}
                >
                  <Info className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-rose-500/10 rounded-lg">
                    <AlertTriangle className="h-4 w-4 text-rose-700" />
                  </div>
                  <h4 className="text-xs font-black text-[#5c3c10] uppercase">Tingkat Kriminalitas</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#2e261a]">{tingkatKriminalitas}%</span>
                  <span className="text-[10px] text-[#8b7e66]">× {crimeFactor.toFixed(3)}</span>
                </div>
                <p className="text-[10px] text-[#8b7e66]">Setiap 1% kriminalitas meningkatkan kematian sebesar 2%.</p>
              </div>

              {/* 7. Polusi */}
              <div className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2 relative">
                <button
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white shadow-sm border border-[#C4B49C]/30 text-[#8b7e66] hover:text-[#5c3c10] transition-colors cursor-pointer"
                  onClick={() => setIsPolusiOpen(true)}
                >
                  <Info className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-gray-500/10 rounded-lg">
                    <Factory className="h-4 w-4 text-gray-700" />
                  </div>
                  <h4 className="text-xs font-black text-[#5c3c10] uppercase">Tingkat Polusi</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#2e261a]">{polusiIndex}</span>
                  <span className="text-[10px] text-[#8b7e66]">× {pollutionFactor.toFixed(3)}</span>
                </div>
                <p className="text-[10px] text-[#8b7e66]">Setiap 10 poin polusi meningkatkan kematian sebesar 5%.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#FAF6EE] border-t-2 border-[#C4B49C]/20 flex justify-end relative z-10 shrink-0">
          <button onClick={onClose} className="px-8 py-3 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all font-black text-xs uppercase tracking-wider cursor-pointer">
            Tutup
          </button>
        </div>
      </div>

      {/* 🔥 RENDER 7 MODAL DETAIL DI SINI (Agar tombol Info berfungsi) */}
      <DetailHarapanHidupModal
        isOpen={isHarapanHidupOpen}
        onClose={() => setIsHarapanHidupOpen(false)}
        countryDetail={countryDetail}
        selectedCountry={selectedCountry}
      />
      <DetailKeamananModal
        isOpen={isKeamananOpen}
        onClose={() => setIsKeamananOpen(false)}
        countryDetail={countryDetail}
        selectedCountry={selectedCountry}
      />
      <DetailTunawismaModal
        isOpen={isTunawismaOpen}
        onClose={() => setIsTunawismaOpen(false)}
        countryDetail={countryDetail}
        selectedCountry={selectedCountry}
      />
      <DetailKesehatanModal
        isOpen={isKesehatanOpen}
        onClose={() => setIsKesehatanOpen(false)}
        countryDetail={countryDetail}
        selectedCountry={selectedCountry}
      />
      <DetailKetahananPanganModal
        isOpen={isKetahananPanganOpen}
        onClose={() => setIsKetahananPanganOpen(false)}
        countryDetail={countryDetail}
        selectedCountry={selectedCountry}
      />
      <DetailKriminalitasModal
        isOpen={isKriminalitasOpen}
        onClose={() => setIsKriminalitasOpen(false)}
        countryDetail={countryDetail}
        selectedCountry={selectedCountry}
      />
      <DetailPolusiModal
        isOpen={isPolusiOpen}
        onClose={() => setIsPolusiOpen(false)}
        countryDetail={countryDetail}
        selectedCountry={selectedCountry}
      />
    </div>
  );
}