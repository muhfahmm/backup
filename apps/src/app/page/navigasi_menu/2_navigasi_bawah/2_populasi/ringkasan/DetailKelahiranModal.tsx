"use client";

import React from "react";
import { X, Users, Baby, HeartPulse, Home, GraduationCap, Banknote, ArrowUpRight, Smile, Heart } from "lucide-react";
import { COUNTRY_STATIC_DATA } from "@/app/logic/populations_logic/country_static_data";
// 🔥 Import logika kepuasan dari file logic (agar sama persis)
import {
  calculateSectoralSatisfaction,
  calculateGeneralSatisfaction,
} from "@/app/logic/populations_logic/population_logic";

interface DetailKelahiranModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail?: any;
  selectedCountry?: any;
}

export default function DetailKelahiranModal({
  isOpen,
  onClose,
  countryDetail,
  selectedCountry,
}: DetailKelahiranModalProps) {
  if (!isOpen) return null;

  const populasi = countryDetail?.jumlah_penduduk || 10_000_000;

  const countryName = selectedCountry?.country?.toLowerCase?.() || "";
  const staticData = COUNTRY_STATIC_DATA[countryName];
  const livingCostIndex = countryDetail?.living_cost_index ?? staticData?.livingCostIndex ?? 62.4;

  // 🔥 PERBAIKAN UTAMA DI SINI:
  // Hitung kepuasan menggunakan logika sektoral yang sama dengan RingkasanPopulasiModal.
  // Kita suntikkan living_cost_index agar perhitungan harga (living cost) akurat.
  const detailWithDefaults = {
    ...countryDetail,
    living_cost_index: livingCostIndex,
  };
  const kepuasanUmum = calculateGeneralSatisfaction(detailWithDefaults);

  // --- Logika perhitungan faktor kelahiran (tetap sama) ---
  const jumlahRumahSakit = countryDetail?.jumlah_rumah_sakit ?? 0;
  const jumlahKlinik = countryDetail?.jumlah_klinik ?? 0;
  const programInsentifAnak = countryDetail?.program_insentif_anak ?? false;
  const angkaPernikahan = countryDetail?.angka_pernikahan ?? 0.05;
  const tingkatPendidikan = countryDetail?.tingkat_pendidikan ?? 0.5;

  const baseRate = 0.00014;
  const baseBirths = populasi * baseRate;

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

  const totalFactor = welfareFactor * healthFactor * policyFactor * marriageFactor * educationFactor * satisfactionFactor;
  const dailyBirths = Math.floor(baseBirths * totalFactor);

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
              <h2 className="text-2xl font-black text-[#5c3c10] tracking-tight leading-none uppercase">Rincian Angka Kelahiran</h2>
              <p className="text-xs text-[#8b7e66] font-medium">Faktor-faktor yang memengaruhi kelahiran di {countryDisplayName}</p>
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
                  <p className="text-sm font-black text-[#8b7e66] uppercase tracking-wider">Kelahiran Harian</p>
                  <p className="text-4xl font-black text-emerald-700 mt-1">+{formatNumber(dailyBirths)}</p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-full border border-emerald-200">
                  <Baby className="h-10 w-10 text-emerald-600" />
                </div>
              </div>
              <p className="mt-4 text-xs text-[#8b7e66] font-medium">
                Berdasarkan total populasi {formatNumber(populasi)} jiwa dan kondisi sosial-ekonomi terkini.
              </p>
            </div>

            {/* Breakdown Faktor */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 1. Populasi Dasar */}
              <div className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-blue-500/10 rounded-lg"><Users className="h-4 w-4 text-blue-700" /></div>
                  <h4 className="text-xs font-black text-[#5c3c10] uppercase">Populasi Dasar</h4>
                </div>
                <p className="text-sm font-bold text-[#2e261a]">{formatNumber(populasi)} jiwa</p>
                <p className="text-[10px] text-[#8b7e66]">× {baseRate} (tingkat kelahiran dasar) = {formatNumber(Math.floor(baseBirths))} kelahiran dasar/hari</p>
              </div>

              {/* 2. Kesejahteraan */}
              <div className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-amber-500/10 rounded-lg"><Banknote className="h-4 w-4 text-amber-700" /></div>
                  <h4 className="text-xs font-black text-[#5c3c10] uppercase">Kesejahteraan</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#2e261a]">{livingCostIndex.toFixed(1)} INDX</span>
                  <span className="text-[10px] text-[#8b7e66]">× {welfareFactor.toFixed(3)}</span>
                </div>
                <p className="text-[10px] text-[#8b7e66]">Semakin tinggi kesejahteraan, semakin besar angka kelahiran.</p>
              </div>

              {/* 3. Kesehatan */}
              <div className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-green-500/10 rounded-lg"><HeartPulse className="h-4 w-4 text-green-700" /></div>
                  <h4 className="text-xs font-black text-[#5c3c10] uppercase">Fasilitas Kesehatan</h4>
                </div>
                <div className="flex justify-between text-xs">
                  <span>RS: {jumlahRumahSakit} (rasio {hospitalRatio.toFixed(2)})</span>
                  <span>Klinik: {jumlahKlinik} (rasio {clinicRatio.toFixed(2)})</span>
                </div>
                <p className="text-[10px] text-[#8b7e66]">× {healthFactor.toFixed(3)} — Semakin lengkap fasilitas, semakin tinggi kelahiran.</p>
              </div>

              {/* 4. Kebijakan */}
              <div className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-indigo-500/10 rounded-lg"><Home className="h-4 w-4 text-indigo-700" /></div>
                  <h4 className="text-xs font-black text-[#5c3c10] uppercase">Kebijakan Insentif Anak</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#2e261a]">{programInsentifAnak ? 'Aktif' : 'Tidak Aktif'}</span>
                  <span className="text-[10px] text-[#8b7e66]">× {policyFactor.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-[#8b7e66]">{programInsentifAnak ? 'Program insentif anak memberikan +20% bonus kelahiran.' : 'Tidak ada insentif khusus untuk kelahiran.'}</p>
              </div>

              {/* 5. Pernikahan */}
              <div className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-pink-500/10 rounded-lg"><Heart className="h-4 w-4 text-pink-700" /></div>
                  <h4 className="text-xs font-black text-[#5c3c10] uppercase">Angka Pernikahan</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#2e261a]">{(angkaPernikahan * 100).toFixed(1)}% per tahun</span>
                  <span className="text-[10px] text-[#8b7e66]">× {marriageFactor.toFixed(3)}</span>
                </div>
                <p className="text-[10px] text-[#8b7e66]">Semakin tinggi angka pernikahan, semakin banyak kelahiran.</p>
              </div>

              {/* 6. Pendidikan */}
              <div className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-purple-500/10 rounded-lg"><GraduationCap className="h-4 w-4 text-purple-700" /></div>
                  <h4 className="text-xs font-black text-[#5c3c10] uppercase">Tingkat Pendidikan</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#2e261a]">{(tingkatPendidikan * 100).toFixed(0)}%</span>
                  <span className="text-[10px] text-[#8b7e66]">× {educationFactor.toFixed(3)}</span>
                </div>
                <p className="text-[10px] text-[#8b7e66]">Pendidikan yang lebih tinggi cenderung menekan angka kelahiran karena perencanaan keluarga.</p>
              </div>

              {/* 7. Kepuasan */}
              <div className="bg-[#e4dac3]/15 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2 md:col-span-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-emerald-500/10 rounded-lg"><Smile className="h-4 w-4 text-emerald-700" /></div>
                  <h4 className="text-xs font-black text-[#5c3c10] uppercase">Kepuasan Umum</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#2e261a]">{kepuasanUmum.toFixed(1)}%</span>
                  <span className="text-[10px] text-[#8b7e66]">× {satisfactionFactor.toFixed(3)}</span>
                </div>
                <p className="text-[10px] text-[#8b7e66]">Kepuasan masyarakat yang tinggi mendorong stabilitas dan pertumbuhan penduduk.</p>
              </div>
            </div>

            {/* Rumus Lengkap */}
            <div className="bg-[#e4dac3]/30 border-2 border-[#C4B49C]/40 p-5 rounded-2xl space-y-2">
              <h4 className="text-xs font-black text-[#5c3c10] uppercase tracking-wider flex items-center gap-2">
                <ArrowUpRight className="h-4 w-4 text-[#5c3c10]" />
                Rumus Perhitungan
              </h4>
              <p className="text-[10px] text-[#8b7e66] font-mono font-medium leading-relaxed">
                Kelahiran = BaseRate × Populasi × <span className="text-amber-700">Kesejahteraan</span> × <span className="text-green-700">Kesehatan</span> × <span className="text-indigo-700">Kebijakan</span> × <span className="text-pink-700">Pernikahan</span> × <span className="text-purple-700">Pendidikan</span> × <span className="text-emerald-700">Kepuasan</span>
              </p>
              <p className="text-[10px] text-[#8b7e66] font-mono">
                = {formatNumber(Math.floor(baseBirths))} × {welfareFactor.toFixed(3)} × {healthFactor.toFixed(3)} × {policyFactor.toFixed(2)} × {marriageFactor.toFixed(3)} × {educationFactor.toFixed(3)} × {satisfactionFactor.toFixed(3)}
                <br />
                = <span className="font-black text-emerald-700">+{formatNumber(dailyBirths)} jiwa/hari</span>
              </p>
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