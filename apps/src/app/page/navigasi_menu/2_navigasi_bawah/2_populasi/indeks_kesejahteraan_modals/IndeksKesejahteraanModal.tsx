"use client"

import { useState, useMemo } from "react";
import { X, Info, TrendingUp, TrendingDown, BookOpen, Heart, MapPin } from "lucide-react";
import {
  calculateKesejahteraan,
  getKesejahteraanStatus,
  getKesejahteraanBreakdown,
  type KesejahteraanIndex,
} from "@/app/logic/kesejahteraanCalculator";

interface IndeksKesejahteraanModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  selectedCountry: any;
  metrics?: any;
  setActiveMenu?: (menu: string) => void;
  onOpenTempatUmum?: (tab: string) => void;
  onOpenIndustriPangan?: () => void;
}

export default function IndeksKesejahteraanModal({
  isOpen,
  onClose,
  countryDetail,
  selectedCountry,
  metrics,
  setActiveMenu,
  onOpenTempatUmum,
  onOpenIndustriPangan,
}: IndeksKesejahteraanModalProps) {
  // 🔥 Hitung kesejahteraan langsung dari countryDetail
  // Indeks Kesejahteraan = (Pendidikan + Kesehatan + Tempat Umum) / 3
  const kesejahteraan = useMemo(() => {
    if (!countryDetail) return null;
    return calculateKesejahteraan(countryDetail);
  }, [countryDetail]);

  if (!isOpen || !kesejahteraan) return null;

  const countryName = selectedCountry?.country || "Indonesia";
  const status = getKesejahteraanStatus(kesejahteraan.overallScore);

  // Warna berdasarkan score
  const getScoreColor = (score: number) => {
    if (score >= 81) return { bg: 'bg-emerald-50', border: 'border-emerald-300', text: 'text-emerald-700', icon: 'text-emerald-700' };
    if (score >= 61) return { bg: 'bg-green-50', border: 'border-green-300', text: 'text-green-700', icon: 'text-green-700' };
    if (score >= 41) return { bg: 'bg-yellow-50', border: 'border-yellow-300', text: 'text-yellow-700', icon: 'text-yellow-700' };
    if (score >= 21) return { bg: 'bg-orange-50', border: 'border-orange-300', text: 'text-orange-700', icon: 'text-orange-700' };
    return { bg: 'bg-red-50', border: 'border-red-300', text: 'text-red-700', icon: 'text-red-700' };
  };

  const scoreColor = getScoreColor(kesejahteraan.overallScore);
  const pendidikanColor = getScoreColor(kesejahteraan.pendidikanScore);
  const kesehatanColor = getScoreColor(kesejahteraan.kesehatanScore);
  const tempatUmumColor = getScoreColor(kesejahteraan.tempatUmumScore);

  const getTrendIcon = (trend: 'naik' | 'turun' | 'stabil') => {
    switch (trend) {
      case 'naik':
        return <TrendingUp className="h-5 w-5 text-emerald-600" />;
      case 'turun':
        return <TrendingDown className="h-5 w-5 text-rose-600" />;
      default:
        return <div className="h-5 w-5 text-gray-600 flex items-center justify-center">➡️</div>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">

        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        {/* Header */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl border ${scoreColor.border} ${scoreColor.bg}`}>
              <MapPin className={`h-6 w-6 ${scoreColor.icon}`} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#5c3c10] tracking-tight leading-none uppercase">Indeks Kesejahteraan</h2>
              <p className="text-xs text-[#8b7e66] font-bold mt-1">Kualitas Hidup & Pembangunan Manusia</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
          >
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10">
          <div className="space-y-6 animate-in fade-in duration-500">

            {/* Main Score Card */}
            <div className={`rounded-2xl p-8 border-2 ${scoreColor.border} ${scoreColor.bg} shadow-md`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#8b7e66] font-black uppercase tracking-wider mb-2">Indeks Kesejahteraan Keseluruhan</p>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-black ${scoreColor.text}`}>{kesejahteraan.overallScore}</span>
                    <span className="text-lg font-bold text-[#8b7e66]">/100</span>
                  </div>
                  <p className={`text-sm font-black mt-2 ${scoreColor.text}`}>{status}</p>
                </div>
                <div className="flex items-center gap-2">
                  {getTrendIcon(kesejahteraan.trend)}
                  <span className="text-xs font-bold text-[#8b7e66] uppercase">{kesejahteraan.trend}</span>
                </div>
              </div>
            </div>

            {/* Interpretasi */}
            <div className="bg-[#e4dac3]/20 border-2 border-[#C4B49C]/30 p-6 rounded-2xl">
              <h3 className="text-md font-black text-[#5c3c10] uppercase tracking-wider flex items-center gap-2 mb-4">
                <Info className="h-5 w-5" />
                Interpretasi
              </h3>
              <p className="text-sm text-[#5c3c10] font-medium leading-relaxed">
                {kesejahteraan.overallScore >= 81 && (
                  <>Negara <span className="font-bold">{countryName}</span> memiliki indeks kesejahteraan yang <span className="text-emerald-700 font-bold">luar biasa baik</span>. Investasi dalam pendidikan, kesehatan, dan fasilitas publik telah menciptakan lingkungan yang sangat kondusif untuk kehidupan masyarakat.</>
                )}
                {kesejahteraan.overallScore >= 61 && kesejahteraan.overallScore < 81 && (
                  <>Negara <span className="font-bold">{countryName}</span> memiliki indeks kesejahteraan yang <span className="text-green-700 font-bold">baik</span>. Infrastruktur pendidikan, kesehatan, dan fasilitas publik sudah cukup memadai untuk mendukung kualitas hidup masyarakat.</>
                )}
                {kesejahteraan.overallScore >= 41 && kesejahteraan.overallScore < 61 && (
                  <>Negara <span className="font-bold">{countryName}</span> memiliki indeks kesejahteraan yang <span className="text-yellow-700 font-bold">sedang</span>. Masih ada peluang untuk meningkatkan fasilitas pendidikan, kesehatan, dan tempat umum agar lebih optimal.</>
                )}
                {kesejahteraan.overallScore >= 21 && kesejahteraan.overallScore < 41 && (
                  <>Negara <span className="font-bold">{countryName}</span> memiliki indeks kesejahteraan yang <span className="text-orange-700 font-bold">buruk</span>. Investasi signifikan diperlukan dalam bidang pendidikan, kesehatan, dan infrastruktur publik untuk meningkatkan kualitas hidup.</>
                )}
                {kesejahteraan.overallScore < 21 && (
                  <>Negara <span className="font-bold">{countryName}</span> menghadapi <span className="text-red-700 font-bold">krisis kesejahteraan</span>. Urgensi tinggi untuk membangun infrastruktur dasar di sektor pendidikan, kesehatan, dan fasilitas publik.</>
                )}
              </p>
            </div>

            {/* Breakdown 3 Sektor */}
            <div className="space-y-4">
              <h3 className="text-md font-black text-[#5c3c10] uppercase tracking-wider">Breakdown Sektor (Bobot)</h3>

              {/* Pendidikan - 35% */}
              <div 
                onClick={() => {
                  onOpenTempatUmum?.('pendidikan');
                  onClose();
                }}
                className={`rounded-xl p-5 border-2 ${pendidikanColor.border} ${pendidikanColor.bg} space-y-3 cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-4`}
                title="Klik untuk membuka tab Pendidikan di Tempat Umum & Layanan Publik"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookOpen className={`h-5 w-5 ${pendidikanColor.icon}`} />
                    <div>
                      <p className="text-xs font-black text-[#8b7e66] uppercase">Pendidikan</p>
                      <p className="text-sm font-bold text-[#5c3c10]">35% Bobot</p>
                    </div>
                  </div>
                  <span className={`text-3xl font-black ${pendidikanColor.text}`}>{kesejahteraan.pendidikanScore}</span>
                </div>
                <div className="space-y-1 text-xs text-[#5c3c10] font-bold">
                  <p>• Fasilitas Pendidikan: <span className="font-black">{kesejahteraan.detail.pendidikan.totalFacilities}</span> unit</p>
                  <p>• Mencakup: Prasekolah, SD, SMP, SMA, Universitas, Lembaga Pendidikan, Lab, Observatorium, Pusat Penelitian</p>
                </div>
              </div>

              {/* Kesehatan - 40% */}
              <div 
                onClick={() => {
                  onOpenTempatUmum?.('kesehatan');
                  onClose();
                }}
                className={`rounded-xl p-5 border-2 ${kesehatanColor.border} ${kesehatanColor.bg} space-y-3 cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-4`}
                title="Klik untuk membuka tab Kesehatan di Tempat Umum & Layanan Publik"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Heart className={`h-5 w-5 ${kesehatanColor.icon}`} />
                    <div>
                      <p className="text-xs font-black text-[#8b7e66] uppercase">Kesehatan</p>
                      <p className="text-sm font-bold text-[#5c3c10]">40% Bobot (Prioritas)</p>
                    </div>
                  </div>
                  <span className={`text-3xl font-black ${kesehatanColor.text}`}>{kesejahteraan.kesehatanScore}</span>
                </div>
                <div className="space-y-1 text-xs text-[#5c3c10] font-bold">
                  <p>• Fasilitas Kesehatan: <span className="font-black">{kesejahteraan.detail.kesehatan.totalFacilities}</span> unit</p>
                  <p>• Harapan Hidup: <span className="font-black">{kesejahteraan.detail.kesehatan.detail.harapanHidup.toFixed(1)}</span> tahun {kesejahteraan.detail.kesehatan.detail.harapanHidup >= 75 ? '✓' : '⚠'}</p>
                  <p>• Indeks Kesehatan: <span className="font-black">{kesejahteraan.detail.kesehatan.detail.indeksKesehatan}</span></p>
                  <p>• Bonus Harapan Hidup: <span className={`font-black ${kesejahteraan.detail.kesehatan.lifeExpectancyBonus >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>{kesejahteraan.detail.kesehatan.lifeExpectancyBonus >= 0 ? '+' : ''}{kesejahteraan.detail.kesehatan.lifeExpectancyBonus.toFixed(1)} poin</span></p>
                </div>
              </div>

              {/* Tempat Umum - 25% */}
              <div 
                onClick={() => {
                  onOpenTempatUmum?.('infrastruktur');
                  onClose();
                }}
                className={`rounded-xl p-5 border-2 ${tempatUmumColor.border} ${tempatUmumColor.bg} space-y-3 cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-4`}
                title="Klik untuk membuka tab Infrastruktur di Tempat Umum & Layanan Publik"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className={`h-5 w-5 ${tempatUmumColor.icon}`} />
                    <div>
                      <p className="text-xs font-black text-[#8b7e66] uppercase">Tempat Umum</p>
                      <p className="text-sm font-bold text-[#5c3c10]">25% Bobot</p>
                    </div>
                  </div>
                  <span className={`text-3xl font-black ${tempatUmumColor.text}`}>{kesejahteraan.tempatUmumScore}</span>
                </div>
                <div className="space-y-1 text-xs text-[#5c3c10] font-bold">
                  <p>• Total Fasilitas: <span className="font-black">{kesejahteraan.detail.tempatUmum.totalFacilities}</span> unit</p>
                  <p>• Transportasi: <span className="font-black">{kesejahteraan.detail.tempatUmum.detail.transportasi}</span> (45% bobot)</p>
                  <p>• Rekreasi: <span className="font-black">{kesejahteraan.detail.tempatUmum.detail.rekreasi}</span> (35% bobot)</p>
                  <p>• Komersial: <span className="font-black">{kesejahteraan.detail.tempatUmum.detail.komersial}</span> (20% bobot)</p>
                </div>
              </div>

              {/* Pangan - NEW */}
              <div 
                onClick={() => {
                  onOpenIndustriPangan
                    ? onOpenIndustriPangan()
                    : setActiveMenu?.("Menu:IndustriPangan");
                  onClose();
                }}
                className="rounded-xl p-5 border-2 border-amber-300 bg-amber-50 space-y-3 cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-4"
                title="Klik untuk membuka Industri Pangan & Konsumsi Masyarakat"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🌾</span>
                    <div>
                      <p className="text-xs font-black text-[#8b7e66] uppercase">Pangan</p>
                      <p className="text-sm font-bold text-[#5c3c10]">Kepuasan Rakyat</p>
                    </div>
                  </div>
                  <span className="text-3xl font-black text-amber-700">{kesejahteraan.panganScore}</span>
                </div>
                <div className="space-y-1 text-xs text-[#5c3c10] font-bold">
                  <p>• Indeks Ketahanan Pangan: <span className="font-black">{kesejahteraan.panganScore}</span>/100</p>
                  <p>• Status: {kesejahteraan.panganScore >= 70 ? '✓ Aman' : kesejahteraan.panganScore >= 50 ? '⚠ Cukup' : '❌ Kurang'}</p>
                </div>
              </div>

              {/* Hunian & Permukiman - NEW */}
              <div 
                onClick={() => {
                  setActiveMenu?.("Menu:HunianPermukiman");
                  onClose();
                }}
                className="rounded-xl p-5 border-2 border-blue-300 bg-blue-50 space-y-3 cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-4"
                title="Klik untuk membuka menu Hunian & Permukiman"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏘️</span>
                    <div>
                      <p className="text-xs font-black text-[#8b7e66] uppercase">Hunian & Permukiman</p>
                      <p className="text-sm font-bold text-[#5c3c10]">Kepuasan Rakyat</p>
                    </div>
                  </div>
                  <span className="text-3xl font-black text-blue-700">{kesejahteraan.hunianScore}</span>
                </div>
                <div className="space-y-1 text-xs text-[#5c3c10] font-bold">
                  <p>• Tingkat Hunian Layak: <span className="font-black">{kesejahteraan.hunianScore}</span>%</p>
                  <p>• Status: {kesejahteraan.hunianScore >= 70 ? '✓ Baik' : kesejahteraan.hunianScore >= 50 ? '⚠ Sedang' : '❌ Kurang'}</p>
                </div>
              </div>
            </div>

            {/* Rekomendasi */}
            <div className="bg-[#e4dac3]/20 border-2 border-[#C4B49C]/30 p-6 rounded-2xl">
              <h3 className="text-md font-black text-[#5c3c10] uppercase tracking-wider mb-4">Rekomendasi Peningkatan</h3>
              <div className="space-y-3">
                {kesejahteraan.pendidikanScore < 60 && (
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="text-lg font-black">📚</span>
                    <div>
                      <p className="text-sm font-black text-blue-700">Tingkatkan Pendidikan</p>
                      <p className="text-xs text-blue-600 font-bold">Bangun lebih banyak sekolah, universitas, dan pusat penelitian</p>
                    </div>
                  </div>
                )}
                {kesejahteraan.kesehatanScore < 60 && (
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                    <span className="text-lg font-black">🏥</span>
                    <div>
                      <p className="text-sm font-black text-red-700">Tingkatkan Kesehatan</p>
                      <p className="text-xs text-red-600 font-bold">Investasi besar dalam rumah sakit, klinik, dan program kesehatan masyarakat</p>
                    </div>
                  </div>
                )}
                {kesejahteraan.tempatUmumScore < 60 && (
                  <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <span className="text-lg font-black">🏛️</span>
                    <div>
                      <p className="text-sm font-black text-purple-700">Tingkatkan Fasilitas Publik</p>
                      <p className="text-xs text-purple-600 font-bold">Bangun infrastruktur transportasi, rekreasi, dan komersial</p>
                    </div>
                  </div>
                )}
                {kesejahteraan.panganScore < 60 && (
                  <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <span className="text-lg font-black">🌾</span>
                    <div>
                      <p className="text-sm font-black text-yellow-700">Tingkatkan Ketahanan Pangan</p>
                      <p className="text-xs text-yellow-600 font-bold">Dukung sektor pertanian dan distribusi pangan yang lebih baik</p>
                    </div>
                  </div>
                )}
                {kesejahteraan.hunianScore < 60 && (
                  <div className="flex items-start gap-3 p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                    <span className="text-lg font-black">🏘️</span>
                    <div>
                      <p className="text-sm font-black text-cyan-700">Tingkatkan Hunian Layak</p>
                      <p className="text-xs text-cyan-600 font-bold">Program pembangunan perumahan dan perbaikan permukiman</p>
                    </div>
                  </div>
                )}
                {kesejahteraan.overallScore >= 60 && (
                  <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                    <span className="text-lg font-black">✓</span>
                    <div>
                      <p className="text-sm font-black text-emerald-700">Status Kesejahteraan Baik</p>
                      <p className="text-xs text-emerald-600 font-bold">Lanjutkan investasi seimbang di semua sektor untuk pertumbuhan berkelanjutan</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
