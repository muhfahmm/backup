"use client"

import React from "react";
import { X, Landmark, Globe, HeartHandshake, Sparkles, Star } from "lucide-react";

interface TempatWisataModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveMenu?: (menu: string) => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
  selectedCountry: any;
}

export default function TempatWisataModal({
  isOpen,
  onClose,
  setActiveMenu,
  countryDetail,
  setCountryDetail,
  selectedCountry,
}: TempatWisataModalProps) {
  if (!isOpen) return null;

  const countryName = selectedCountry?.country || "Negara Anda";
  const anggaran = countryDetail?.anggaran || 0;
  const kepuasan = countryDetail?.kepuasan ?? 50.0;

  const handleDevelopTourism = () => {
    if (anggaran < 80000000) {
      alert("Kas negara tidak mencukupi untuk mengembangkan destinasi wisata baru!");
      return;
    }

    setCountryDetail({
      ...countryDetail,
      anggaran: anggaran - 80000000,
      kepuasan: Math.min(100, kepuasan + 6.5),
    });

    alert("Program pariwisata baru berhasil dirilis! Kepuasan masyarakat meningkat.");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                <Landmark className="h-6 w-6 text-[#5c3c10]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Tempat Wisata</h2>
              </div>
            </div>

            <div className="flex items-center bg-[#e4dac3]/40 p-1 rounded-xl border border-[#bfae93]/50 backdrop-blur-md ml-4">
              <button
                onClick={() => setActiveMenu?.("Dashboard:Kepuasan")}
                className="px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all text-[#8b7e66] hover:text-[#5c3c10] cursor-pointer"
              >
                Statistik
              </button>
              <button
                onClick={() => setActiveMenu?.("Action:NaikkanKepuasan")}
                className="px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all text-[#8b7e66] hover:text-[#5c3c10] cursor-pointer"
              >
                Naikkan Kepuasan
              </button>
              <button
                className="px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20 cursor-pointer"
              >
                Tempat Wisata
              </button>
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

        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-[#e4dac3]/25 border-2 border-[#C4B49C]/40 p-6 rounded-2xl shadow-sm">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#5c3c10]/10 p-3 border border-[#5c3c10]/20">
                    <Globe className="h-6 w-6 text-[#5c3c10]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#5c3c10] uppercase tracking-wide leading-none">Pariwisata {countryName}</h3>
                    <p className="text-xs text-[#8b7e66] font-bold max-w-xl">
                      Kelola destinasi wisata nasional untuk meningkatkan kepuasan masyarakat dan pendapatan negara.
                    </p>
                  </div>
                </div>
                <div className="text-center bg-[#FAF6EE] border-2 border-[#C4B49C]/30 px-6 py-4 rounded-xl shadow-inner min-w-[160px]">
                  <p className="text-[10px] text-[#8b7e66] uppercase tracking-wider">Anggaran Tersisa</p>
                  <p className="text-2xl font-black text-[#2e261a] mt-2">{anggaran.toLocaleString("id-ID")}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#FAF6EE] border-2 border-[#C4B49C]/40 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="h-5 w-5 text-[#f59e0b]" />
                  <h4 className="text-sm font-black uppercase tracking-wider text-[#5c3c10]">Destinasi Unggulan</h4>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Pantai Emas", desc: "Resor pantai mewah dan olahraga air." },
                    { name: "Cagar Budaya Kerajaan", desc: "Rute heritage dan museum interaktif." },
                    { name: "Taman Gunung Hijau", desc: "Wisata alam dan trekking keluarga." },
                  ].map((item) => (
                    <div key={item.name} className="rounded-2xl bg-white border border-[#C4B49C]/30 p-4 shadow-sm">
                      <p className="text-sm font-black text-[#5c3c10]">{item.name}</p>
                      <p className="text-[11px] text-[#8b7e66] mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#FAF6EE] border-2 border-[#C4B49C]/40 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <HeartHandshake className="h-5 w-5 text-[#10b981]" />
                  <h4 className="text-sm font-black uppercase tracking-wider text-[#5c3c10]">Dampak Pariwisata</h4>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl bg-white border border-[#C4B49C]/30 p-4">
                    <p className="text-[10px] text-[#8b7e66] uppercase tracking-wider mb-2">Kepuasan Publik</p>
                    <p className="text-2xl font-black text-[#2e261a]">{kepuasan}%</p>
                  </div>
                  <div className="rounded-2xl bg-white border border-[#C4B49C]/30 p-4">
                    <p className="text-[10px] text-[#8b7e66] uppercase tracking-wider mb-2">Daya Tarik Wisata</p>
                    <p className="text-2xl font-black text-[#f59e0b]">+12%</p>
                  </div>
                  <div className="rounded-2xl bg-white border border-[#C4B49C]/30 p-4">
                    <p className="text-[10px] text-[#8b7e66] uppercase tracking-wider mb-2">Pemasukan Ekstra</p>
                    <p className="text-2xl font-black text-[#10b981]">+84M EM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-6 rounded-2xl shadow-inner">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-black text-[#5c3c10] uppercase tracking-wide">Program Pengembangan Destinasi</p>
                  <p className="text-xs text-[#8b7e66] mt-2">Investasi untuk memperluas infrastruktur wisata, event budaya, dan promosi internasional.</p>
                </div>
                <button
                  onClick={handleDevelopTourism}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#ffe07d] via-[#fcae1e] to-[#c77a00] px-6 py-3 text-xs font-black uppercase tracking-wider text-[#5c3c10] border-2 border-[#1e2f3d]/15 shadow-sm hover:brightness-110 transition-all"
                >
                  Kembangkan Wisata Baru
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
