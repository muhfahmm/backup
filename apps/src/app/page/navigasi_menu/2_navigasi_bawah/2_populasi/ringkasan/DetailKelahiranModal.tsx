"use client";

import React from "react";
import { X, Users, Baby, HeartPulse, Home, GraduationCap, Banknote, ArrowUpRight, Smile, Heart, Activity } from "lucide-react";
import { COUNTRY_STATIC_DATA } from "@/app/logic/populations_logic/country_static_data";
import {
  calculateGeneralSatisfaction,
  calculateDailyBirths,
  calculateDailyDeaths,
  calculateLifeExpectancy,
  calculateSecurityLevel,
} from "@/app/logic/populations_logic/population_logic";

interface DetailKelahiranModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail?: any;
  selectedCountry?: any;
  dailyBirths?: number;
  dailyDeaths?: number;
  netDailyChange?: number;
}

export default function DetailKelahiranModal({
  isOpen,
  onClose,
  countryDetail,
  selectedCountry,
  dailyBirths: propsDailyBirths,
  dailyDeaths: propsDailyDeaths,
  netDailyChange: propsNetDailyChange,
}: DetailKelahiranModalProps) {
  if (!isOpen) return null;

  const populasi = countryDetail?.jumlah_penduduk || 10_000_000;

  const countryName = selectedCountry?.country?.toLowerCase?.() || "";
  const staticData = COUNTRY_STATIC_DATA[countryName];
  const livingCostIndex = countryDetail?.living_cost_index ?? staticData?.livingCostIndex ?? 62.4;

  // 🔥 Siapkan detail untuk menghitung kepuasan (sama seperti di modal utama)
  const detailWithDefaults = {
    ...countryDetail,
    living_cost_index: livingCostIndex,
  };
  const kepuasanUmum = calculateGeneralSatisfaction(detailWithDefaults);

  // Ambil data user
  const jumlahRumahSakit = countryDetail?.jumlah_rumah_sakit ?? 0;
  const jumlahKlinik = countryDetail?.jumlah_klinik ?? 0;
  const programInsentifAnak = countryDetail?.program_insentif_anak ?? false;
  const angkaPernikahan = countryDetail?.angka_pernikahan ?? 0.05;
  const tingkatPendidikan = countryDetail?.tingkat_pendidikan ?? 0.5;

  // 🔥 Hitung Kelahiran dan Kematian (atau gunakan nilai dari props jika tersedia)
  const dailyBirths = propsDailyBirths !== undefined ? propsDailyBirths : calculateDailyBirths(
    populasi,
    kepuasanUmum,
    livingCostIndex,
    jumlahRumahSakit,
    jumlahKlinik,
    programInsentifAnak,
    angkaPernikahan,
    tingkatPendidikan
  );

  const lifeExpectancy = calculateLifeExpectancy(detailWithDefaults, kepuasanUmum);
  const securityLevel = calculateSecurityLevel(detailWithDefaults, kepuasanUmum);
  const dailyDeaths = propsDailyDeaths !== undefined ? propsDailyDeaths : calculateDailyDeaths(populasi, lifeExpectancy, securityLevel);

  // 🔥 Pertumbuhan Bersih
  const netDailyChange = propsNetDailyChange !== undefined ? propsNetDailyChange : (dailyBirths - dailyDeaths);

  // 🔥 Variabel perhitungan multiplier UI (agar error "Cannot find name" hilang)
  const welfareFactor = 0.75 + (livingCostIndex / 200);
  const idealHospitals = Math.ceil(populasi / 100000);
  const idealClinics = Math.ceil(populasi / 10000);
  const hospitalRatio = idealHospitals > 0 ? Math.min(1, jumlahRumahSakit / idealHospitals) : 1;
  const clinicRatio = idealClinics > 0 ? Math.min(1, jumlahKlinik / idealClinics) : 1;
  const healthFactor = 0.7 + 0.3 * ((hospitalRatio + clinicRatio) / 2);
  const policyFactor = programInsentifAnak ? 1.2 : 1.0;
  const marriageFactor = 0.8 + (angkaPernikahan * 4);
  const educationFactor = 1.1 - (0.3 * tingkatPendidikan);
  const satisfactionFactor = 0.5 + (kepuasanUmum / 200);

  const formatNumber = (num: number) => num.toLocaleString('id-ID');
  const countryDisplayName = selectedCountry?.country || "Indonesia";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        {/* Header */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
              <Users className="h-6 w-6 text-emerald-700" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#5c3c10] tracking-tight leading-none uppercase">Rincian Pertumbuhan Penduduk</h2>
              <p className="text-xs text-[#8b7e66] font-medium">Faktor yang memengaruhi kelahiran dan kematian di {countryDisplayName}</p>
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
            
            {/* Ringkasan Utama - Pertumbuhan Bersih (Sesuai data di modal utama) */}
            <div className="bg-white/60 border-2 border-[#C4B49C]/20 p-6 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-[#8b7e66] uppercase tracking-wider">Pertumbuhan Penduduk Harian</p>
                  <p className={`text-4xl font-black mt-1 ${netDailyChange >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {netDailyChange >= 0 ? '+' : ''}{formatNumber(netDailyChange)} <span className="text-lg text-[#8b7e66] font-bold">/hr</span>
                  </p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-full border border-emerald-200">
                  <Activity className="h-10 w-10 text-emerald-600" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-emerald-50/60 p-3 rounded-xl border border-emerald-200">
                  <p className="text-[10px] text-[#8b7e66] font-black uppercase">Kelahiran</p>
                  <p className="text-xl font-black text-emerald-700">+{formatNumber(dailyBirths)}</p>
                </div>
                <div className="bg-rose-50/60 p-3 rounded-xl border border-rose-200">
                  <p className="text-[10px] text-[#8b7e66] font-black uppercase">Kematian</p>
                  <p className="text-xl font-black text-rose-700">-{formatNumber(dailyDeaths)}</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-[#8b7e66] font-medium">
                {netDailyChange >= 0 
                  ? `Populasi bertambah ${formatNumber(netDailyChange)} jiwa setiap hari.`
                  : `Populasi berkurang ${formatNumber(Math.abs(netDailyChange))} jiwa setiap hari.`
                }
              </p>
            </div>

            {/* Breakdown Faktor Kelahiran (Menampilkan variabel-variabel multiplier) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-blue-500/10 rounded-lg"><Users className="h-4 w-4 text-blue-700" /></div>
                  <h4 className="text-xs font-black text-[#5c3c10] uppercase">Populasi Dasar</h4>
                </div>
                <p className="text-sm font-bold text-[#2e261a]">{formatNumber(populasi)} jiwa</p>
              </div>

              <div className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-amber-500/10 rounded-lg"><Banknote className="h-4 w-4 text-amber-700" /></div>
                  <h4 className="text-xs font-black text-[#5c3c10] uppercase">Kesejahteraan</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#2e261a]">{livingCostIndex.toFixed(1)} INDX</span>
                  <span className="text-[10px] text-[#8b7e66]">× {welfareFactor.toFixed(3)}</span>
                </div>
              </div>

              <div className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-green-500/10 rounded-lg"><HeartPulse className="h-4 w-4 text-green-700" /></div>
                  <h4 className="text-xs font-black text-[#5c3c10] uppercase">Fasilitas Kesehatan</h4>
                </div>
                <div className="flex justify-between text-xs">
                  <span>RS: {jumlahRumahSakit} (rasio {hospitalRatio.toFixed(2)})</span>
                  <span>Klinik: {jumlahKlinik} (rasio {clinicRatio.toFixed(2)})</span>
                </div>
                <p className="text-[10px] text-[#8b7e66]">× {healthFactor.toFixed(3)}</p>
              </div>

              <div className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-indigo-500/10 rounded-lg"><Home className="h-4 w-4 text-indigo-700" /></div>
                  <h4 className="text-xs font-black text-[#5c3c10] uppercase">Kebijakan Insentif Anak</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#2e261a]">{programInsentifAnak ? 'Aktif' : 'Tidak Aktif'}</span>
                  <span className="text-[10px] text-[#8b7e66]">× {policyFactor.toFixed(2)}</span>
                </div>
              </div>

              <div className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-pink-500/10 rounded-lg"><Heart className="h-4 w-4 text-pink-700" /></div>
                  <h4 className="text-xs font-black text-[#5c3c10] uppercase">Angka Pernikahan</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#2e261a]">{(angkaPernikahan * 100).toFixed(1)}% per tahun</span>
                  <span className="text-[10px] text-[#8b7e66]">× {marriageFactor.toFixed(3)}</span>
                </div>
              </div>

              <div className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-purple-500/10 rounded-lg"><GraduationCap className="h-4 w-4 text-purple-700" /></div>
                  <h4 className="text-xs font-black text-[#5c3c10] uppercase">Tingkat Pendidikan</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#2e261a]">{(tingkatPendidikan * 100).toFixed(0)}%</span>
                  <span className="text-[10px] text-[#8b7e66]">× {educationFactor.toFixed(3)}</span>
                </div>
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
    </div>
  );
}