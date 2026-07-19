"use client"

import { useState } from "react";
import { X, Smile, Coins, Sparkles, AlertCircle, CheckCircle2 } from "lucide-react";

interface NaikkanKepuasanModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveMenu?: (menu: string) => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
  selectedCountry: any;
}

export default function NaikkanKepuasanModal({
  isOpen,
  onClose,
  setActiveMenu,
  countryDetail,
  setCountryDetail,
  selectedCountry
}: NaikkanKepuasanModalProps) {
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  if (!isOpen) return null;

  const countryName = selectedCountry?.country || "Indonesia";
  const anggaran = countryDetail?.anggaran || 0;
  const kepuasan = countryDetail?.kepuasan ?? 50.0;

  // ==========================================
  // PERBAIKAN 1: Hapus JSX <div> yang tercecer di dalam array
  // PERBAIKAN 2: Perbaiki typo 'bg-amber/800/10' menjadi 'bg-amber-800/10'
  // ==========================================
  const initiatives = [
    {
      id: "konser",
      title: "Konser",
      desc: "Sponsori konser musik untuk meningkatkan kebahagiaan warga.",
      cost: 25000,
      boost: 5,
      icon: Sparkles,
      color: "text-amber-600",
      bg: "bg-amber-800/10",
    },
    {
      id: "festival",
      title: "Festival",
      desc: "Sponsori festival budaya untuk meningkatkan kegembiraan rakyat.",
      cost: 50000,
      boost: 10,
      icon: Sparkles,
      color: "text-amber-600",
      bg: "bg-amber-800/10",
    },
    {
      id: "karnaval",
      title: "Karnaval",
      desc: "Sponsori karnaval besar untuk meningkatkan semangat komunitas.",
      cost: 150000,
      boost: 120,
      icon: Sparkles,
      color: "text-amber-600",
      bg: "bg-amber-800/10",
    },
    {
      id: "piala_davis",
      title: "Piala Davis",
      desc: "Sponsori turnamen tenis Piala Davis untuk meningkatkan kebanggaan nasional.",
      cost: 400000,
      boost: 300,
      icon: Sparkles, // PERBAIKAN: Tambahkan icon dan hilangkan JSX yang error
      color: "text-amber-600",
      bg: "bg-amber-800/10",
    },
    {
      id: "piala_dunia_rugbi",
      title: "Piala Dunia Rugbi",
      desc: "Sponsori Piala Dunia Rugbi untuk meningkatkan semangat olahraga.",
      cost: 500000,
      boost: 50,
      icon: Sparkles,
      color: "text-amber-600",
      bg: "bg-amber-800/10", // PERBAIKAN: typo
    },
    {
      id: "olimpiade",
      title: "Olimpiade",
      desc: "Sponsori Olimpiade untuk meningkatkan prestise internasional.",
      cost: 1500000,
      boost: 75,
      icon: Sparkles,
      color: "text-amber-600",
      bg: "bg-amber-800/10",
    },
    {
      id: "piala_dunia_fifa",
      title: "Piala Dunia FIFA",
      desc: "Sponsori Piala Dunia FIFA untuk meningkatkan kebanggaan nasional.",
      cost: 2500000,
      boost: 100,
      icon: Sparkles,
      color: "text-amber-600",
      bg: "bg-amber-800/10",
    },
  ];

  const handleInitiative = (cost: number, boost: number, title: string) => {
    if (anggaran < cost) {
      setFeedback({
        type: "error",
        message: `Anggaran negara tidak mencukupi untuk mendanai ${title}! Diperlukan ${cost.toLocaleString("id-ID")} EM.`
      });
      setTimeout(() => setFeedback(null), 4000);
      return;
    }

    const nextAnggaran = anggaran - cost;
    const nextKepuasan = Math.min(100, parseFloat((kepuasan + boost).toFixed(1)));

    setCountryDetail({
      ...countryDetail,
      anggaran: nextAnggaran,
      kepuasan: nextKepuasan
    });

    setFeedback({
      type: "success",
      message: `Presiden berhasil meluncurkan program ${title}! Kepuasan rakyat naik +${boost}% dan anggaran berkurang.`
    });
    setTimeout(() => setFeedback(null), 4000);
  };

  return (
    // PERBAIKAN 3: Hapus bg-black/65, gunakan bg-transparent dan pointer-events-none di lapisan luar
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      
      {/* PERBAIKAN 4: Tambahkan pointer-events-auto di lapisan dalam agar tombol tetap bisa diklik */}
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        
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
                onClick={() => setActiveMenu?.("Dashboard:Kepuasan")}
                className="px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all text-[#8b7e66] hover:text-[#5c3c10] cursor-pointer"
              >
                Statistik
              </button>
              <button
                className="px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20 cursor-pointer"
              >
                Naikkan Kepuasan
              </button>
              <button
                onClick={() => setActiveMenu?.("Menu:TempWisata")}
                className="px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all text-[#8b7e66] hover:text-[#5c3c10] cursor-pointer"
              >
                Tempat Wisata
              </button>
            </div>
          </div>

          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Dynamic Treasury Bar */}
        <div className="px-8 py-4 bg-[#e4dac3]/20 border-b border-[#C4B49C]/20 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-3">
            <Coins className="h-5 w-5 text-amber-700" />
            <span className="text-xs font-bold text-[#5c3c10] uppercase tracking-wide">
              Anggaran Kas Negara saat ini:
            </span>
            <span className="text-sm font-black text-[#2e261a]">
              {anggaran.toLocaleString("id-ID")}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Smile className="h-5 w-5 text-emerald-700" />
            <span className="text-xs font-bold text-[#5c3c10] uppercase tracking-wide">
              Kepuasan Sipil:
            </span>
            <span className="text-sm font-black text-[#2e261a]">
              {kepuasan}%
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="space-y-6 animate-in fade-in duration-500">
            {feedback && (
              <div
                className={`p-4 rounded-xl border-2 flex items-center gap-3 shadow-md animate-in fade-in slide-in-from-top-4 duration-300 ${
                  feedback.type === "success"
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-800"
                    : "bg-rose-500/10 border-rose-500/30 text-rose-800"
                }`}
              >
                {feedback.type === "success" ? (
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                ) : (
                  <AlertCircle className="h-5 w-5 shrink-0 text-rose-700" />
                )}
                <p className="text-xs font-bold">{feedback.message}</p>
              </div>
            )}

            <div className="grid grid-cols-1 gap-4">
              {initiatives.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="bg-[#FAF6EE] border-2 border-[#C4B49C]/40 p-5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-5 transition-all hover:bg-[#e4dac3]/10 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3.5 rounded-xl bg-black/5 border border-black/5 ${item.color} shrink-0`}>
                        <Icon size={24} />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <h4 className="text-md font-black text-[#5c3c10] uppercase tracking-wide leading-none">
                            {item.title}
                          </h4>
                          <span className="bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider">
                            +{item.boost}% Kepuasan
                          </span>
                        </div>
                        <p className="text-xs text-[#8b7e66] font-semibold leading-relaxed max-w-xl">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-2 shrink-0">
                      <div className="text-right">
                        <p className="text-[10px] text-[#8b7e66] font-black uppercase tracking-wider text-center md:text-right leading-none">
                          Biaya Alokasi
                        </p>
                        <p className="text-sm font-black text-[#2e261a] mt-1">
                          {item.cost.toLocaleString("id-ID")}
                        </p>
                      </div>
                      <button
                        onClick={() => handleInitiative(item.cost, item.boost, item.title)}
                        className="px-6 py-2.5 rounded-xl bg-gradient-to-b from-[#ffe07d] via-[#fcae1e] to-[#c77a00] text-[#5c3c10] border-2 border-[#1e2f3d]/15 shadow-md hover:brightness-110 active:scale-95 transition-all font-black text-xs uppercase cursor-pointer"
                      >
                        Pilih Acara
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
