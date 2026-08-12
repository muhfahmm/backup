"use client";

import React from "react";
import { X, HeartPulse } from "lucide-react";

interface DetailFasilitasKesehatanModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail?: any;
  selectedCountry?: any;
}

export default function DetailFasilitasKesehatanModal({
  isOpen,
  onClose,
  countryDetail,
  selectedCountry,
}: DetailFasilitasKesehatanModalProps) {
  if (!isOpen) return null;

  const populasi = countryDetail?.jumlah_penduduk || 10_000_000;
  const jumlahRumahSakit = countryDetail?.jumlah_rumah_sakit ?? 0;
  const jumlahKlinik = countryDetail?.jumlah_klinik ?? 0;
  const formatNumber = (num: number) => num.toLocaleString('id-ID');
  const countryName = selectedCountry?.country || "Indonesia";

  const idealHospitals = Math.ceil(populasi / 100000);
  const idealClinics = Math.ceil(populasi / 10000);
  const hospitalRatio = idealHospitals > 0 ? Math.min(1, jumlahRumahSakit / idealHospitals) : 1;
  const clinicRatio = idealClinics > 0 ? Math.min(1, jumlahKlinik / idealClinics) : 1;
  const healthFactor = 0.7 + 0.3 * ((hospitalRatio + clinicRatio) / 2);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500/10 rounded-xl border border-green-500/20">
              <HeartPulse className="h-6 w-6 text-green-700" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#5c3c10] tracking-tight leading-none uppercase">Fasilitas Kesehatan</h2>
              <p className="text-xs text-[#8b7e66] font-medium">Peran fasilitas kesehatan terhadap kelahiran di {countryName}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-white/60 border-2 border-[#C4B49C]/20 p-6 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-[#8b7e66] uppercase tracking-wider">Ketersediaan Fasilitas Kesehatan</p>
                  <p className="text-3xl font-black text-[#2e261a] mt-1">
                    {jumlahRumahSakit} RS <span className="text-lg text-[#8b7e66] font-bold">/</span> {jumlahKlinik} Klinik
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-full border border-green-200">
                  <HeartPulse className="h-10 w-10 text-green-600" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-green-50/60 p-3 rounded-xl border border-green-200">
                  <p className="text-[10px] text-[#8b7e66] font-black uppercase">Rasio RS Ideal</p>
                  <p className="text-xl font-black text-green-700">{hospitalRatio.toFixed(2)}</p>
                </div>
                <div className="bg-blue-50/60 p-3 rounded-xl border border-blue-200">
                  <p className="text-[10px] text-[#8b7e66] font-black uppercase">Rasio Klinik Ideal</p>
                  <p className="text-xl font-black text-blue-700">{clinicRatio.toFixed(2)}</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-[#8b7e66] font-medium">
                Idealnya: 1 RS per 100.000 jiwa dan 1 klinik per 10.000 jiwa. Rasio yang lebih tinggi meningkatkan angka kelahiran.
              </p>
              <div className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2 mt-2">
                <h4 className="text-xs font-black text-[#5c3c10] uppercase">Faktor Pengali Kesehatan</h4>
                <p className="text-sm font-bold text-[#2e261a]">× {healthFactor.toFixed(3)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-[#FAF6EE] border-t-2 border-[#C4B49C]/20 flex justify-end relative z-10 shrink-0">
          <button onClick={onClose} className="px-8 py-3 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all font-black text-xs uppercase tracking-wider cursor-pointer">Tutup</button>
        </div>
      </div>
    </div>
  );
}