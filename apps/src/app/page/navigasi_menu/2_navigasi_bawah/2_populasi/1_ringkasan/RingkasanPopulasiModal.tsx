"use client"

import { useState, useEffect, useMemo } from "react";
import { X, Users, Info, TrendingUp, ShieldAlert, BadgeDollarSign, Activity, Users2 } from "lucide-react";

// ==============================
// Tipe data yang diharapkan dari countryDetail
// ==============================
interface CountryDetail {
  jumlah_penduduk: number;
  // Data mentah sektor (opsional, akan digunakan jika tersedia)
  rata_rata_pajak?: number;          // 0-100
  living_cost_index?: number;        // skor biaya hidup, makin tinggi makin buruk
  indeks_ketahanan_pangan?: number;  // 0-100, semakin tinggi semakin baik
  surplus_listrik?: number;          // kelebihan pasokan (MW), jika negatif = defisit
  tingkat_hunian_layak?: number;     // 0-100, % rumah layak huni

  // Indikator statis (diisi dari database game)
  harapan_hidup?: number;            // tahun, default 73.2
  tingkat_keamanan?: number;         // 0-100, default 84.5

  // Inisiatif aktif (boost kepuasan)
  inisiatif_aktif?: { nama: string; boost: number }[]; // boost dalam persen
}

interface RingkasanPopulasiModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveMenu?: (menu: string) => void;
  countryDetail: CountryDetail;
  selectedCountry: any;
}

// ==============================
// Fungsi Penghitung Kepuasan Sektoral
// ==============================
function hitungKepuasanSektoral(detail: CountryDetail) {
  // Default 50 jika data tidak tersedia
  const pajak = detail.rata_rata_pajak !== undefined
    ? Math.max(0, Math.min(100, 100 - detail.rata_rata_pajak))
    : 50;

  // Living cost index: semakin tinggi biaya hidup, semakin rendah kepuasan
  const harga = detail.living_cost_index !== undefined
    ? Math.max(0, Math.min(100, 100 - detail.living_cost_index))
    : 50;

  // Pangan: gunakan indeks ketahanan pangan (nilai tinggi = baik)
  const pangan = detail.indeks_ketahanan_pangan ?? 50;

  // Listrik: surplus > 0 → kepuasan 70+, defisit berat → turun drastis
  let listrik = 50;
  if (detail.surplus_listrik !== undefined) {
    if (detail.surplus_listrik > 50) listrik = 80;
    else if (detail.surplus_listrik > 0) listrik = 70;
    else if (detail.surplus_listrik > -50) listrik = 40;
    else listrik = 20;
  }

  // Hunian: makin tinggi tingkat hunian layak, makin puas
  const hunian = detail.tingkat_hunian_layak ?? 50;

  return { pajak, harga, pangan, listrik, hunian };
}

// ==============================
// Fungsi Penghitung Metrik Demografi Dinamis
// ==============================
function hitungDemografi(detail: CountryDetail) {
  const populasi = detail.jumlah_penduduk || 10_000_000;
  const sektoral = hitungKepuasanSektoral(detail);
  
  // --- Kepuasan Umum (rata-rata 5 sektor + boost inisiatif) ---
  const rataSektoral = (sektoral.pajak + sektoral.harga + sektoral.pangan + sektoral.listrik + sektoral.hunian) / 5;
  const boostInisiatif = detail.inisiatif_aktif?.reduce((sum, ini) => sum + ini.boost, 0) ?? 0;
  const kepuasanUmum = Math.min(200, rataSektoral + boostInisiatif); // bisa >100 saat banyak event

  // --- Life Expectancy dan Security (mengikuti kepuasan, tapi jangan nol) ---
  const baseLife = detail.harapan_hidup ?? 73.2;
  const baseSecurity = detail.tingkat_keamanan ?? 84.5;
  
  // Kepuasan tinggi → harapan hidup membaik (rentang ±5 th dari base)
  const lifeExpectancy = Math.max(30, baseLife + (kepuasanUmum - 50) * 0.1);
  
  // Security dipengaruhi kepuasan dan tunawisma (sementara masih pakai base)
  const securityLevel = Math.min(100, Math.max(10, baseSecurity + (kepuasanUmum - 50) * 0.15));

  // --- Angka Kelahiran Harian (dipengaruhi kepuasan) ---
  const baseBirthRate = 0.000042;
  // Makin puas → kelahiran naik (faktor 0,8 – 1,2)
  const birthMultiplier = 0.8 + (kepuasanUmum / 100) * 0.4;
  const dailyBirths = Math.floor(populasi * baseBirthRate * birthMultiplier);

  // --- Angka Kematian Harian (dipengaruhi harapan hidup & keamanan) ---
  const baseDeathRate = 0.000018;
  // Normalisasi ke base 73.2 dan 84.5
  const lifeFactor = 73.2 / lifeExpectancy;       // semakin tinggi LE, faktor <1 → kematian turun
  const securityFactor = 84.5 / securityLevel;    // semakin aman, faktor <1
  const dailyDeaths = Math.floor(populasi * baseDeathRate * lifeFactor * securityFactor);
  
  // --- Tunawisma (dipengaruhi sektor hunian) ---
  const baseHomelessRate = 0.007;
  // Bila hunian sangat baik (100), homeless rate bisa setengahnya
  const homelessMultiplier = (100 - sektoral.hunian) / 50; // 0 saat hunian=100, 1 saat hunian=50, 2 saat 0
  const homelessCount = Math.floor(populasi * baseHomelessRate * homelessMultiplier);

  // --- Indeks Biaya Hidup (langsung dari data) ---
  const livingCostIndex = detail.living_cost_index ?? 62.4;

  // --- Pertumbuhan Bulanan ---
  const totalDailyDelta = dailyBirths - dailyDeaths;
  const totalMonthlyGrowthPercent = ((totalDailyDelta * 30) / populasi) * 100;

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
  setActiveMenu,
  countryDetail,
  selectedCountry
}: RingkasanPopulasiModalProps) {
  
  // Hitung metrik setiap kali countryDetail berubah
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
    securityLevel,
    lifeExpectancy,
    kepuasanUmum,
  } = metrics;

  const countryName = selectedCountry?.country || "Indonesia";

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
                <h2 className="text-2xl font-black text-[#5c3c10] tracking-tight leading-none uppercase">Kependudukan</h2>
              </div>
            </div>

            <div className="flex items-center bg-[#e4dac3]/40 p-1 rounded-xl border border-[#bfae93]/50 backdrop-blur-md ml-4">
              <button
                className="px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20 cursor-pointer"
              >
                Ringkasan
              </button>
              <button
                onClick={() => setActiveMenu?.("Dashboard:Populasi")}
                className="px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all text-[#8b7e66] hover:text-[#5c3c10] cursor-pointer"
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

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10">
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
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

              <div className="bg-[#e4dac3]/20 border-2 border-[#C4B49C]/30 p-6 rounded-2xl space-y-4">
                <h3 className="text-md font-black text-[#5c3c10] uppercase tracking-wider flex items-center gap-2">
                  <Activity className="h-5 w-5 text-emerald-700" />
                  Kondisi Sosial & Layanan Publik
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-[#5c3c10] uppercase mb-1">
                      <span>Indeks Keamanan Publik</span>
                      <span>{securityLevel.toFixed(1)}%</span>
                    </div>
                    <div className="h-3 w-full bg-[#e4dac3] rounded-full overflow-hidden border border-[#bfae93]">
                      <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${securityLevel}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-[#5c3c10] uppercase mb-1">
                      <span>Angka Harapan Hidup</span>
                      <span>{lifeExpectancy.toFixed(1)} Tahun</span>
                    </div>
                    <div className="h-3 w-full bg-[#e4dac3] rounded-full overflow-hidden border border-[#bfae93]">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: `${Math.min(100, (lifeExpectancy/100)*100)}%` }} />
                    </div>
                  </div>

                  {/* Tambahan: Indikator Kepuasan Umum */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-[#5c3c10] uppercase mb-1">
                      <span>Kepuasan Rakyat</span>
                      <span>{kepuasanUmum.toFixed(1)}%</span>
                    </div>
                    <div className="h-3 w-full bg-[#e4dac3] rounded-full overflow-hidden border border-[#bfae93]">
                      <div 
                        className={`h-full rounded-full ${
                          kepuasanUmum > 70 ? 'bg-emerald-600' : kepuasanUmum > 40 ? 'bg-amber-500' : 'bg-rose-600'
                        }`} 
                        style={{ width: `${Math.min(100, kepuasanUmum)}%` }} 
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>

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