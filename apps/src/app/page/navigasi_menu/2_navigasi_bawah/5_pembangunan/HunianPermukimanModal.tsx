"use client"
import React, { useState } from "react";
import { X, Home } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
}

export default function HunianPermukimanModal({ isOpen, onClose, countryDetail, setCountryDetail }: ModalProps) {
  const [activeTab, setActiveTab] = useState("rumah_subsidi");

  if (!isOpen) return null;

  const handleBuild = (key: string, label: string) => {
    const cost = 10000000; // Rp 10.000.000
    const anggaran = Number(countryDetail?.anggaran) || 0;
    if (anggaran < cost) {
      alert(`Kas negara tidak mencukupi untuk membangun ${label}!`);
      return;
    }
    
    setCountryDetail({
      ...countryDetail,
      anggaran: anggaran - cost,
      [key]: (Number(countryDetail?.[key]) || 0) + 1,
      kepuasan: Math.min(100, (Number(countryDetail?.kepuasan) || 65.0) + 1.5)
    });
  };

  const HUNIAN_KEYS = ["rumah_subsidi", "apartemen", "mansion"];

  const labels: Record<string, { label: string; desc: string; detailDesc: string }> = {
    rumah_subsidi: {
      label: "Perumahan Subsidi",
      desc: "Hunian Terjangkau",
      detailDesc: "Rumah tapak bersubsidi yang disediakan pemerintah bagi masyarakat berpenghasilan rendah untuk mendukung pemerataan papan."
    },
    apartemen: {
      label: "Apartemen",
      desc: "Hunian Vertikal",
      detailDesc: "Kompleks hunian vertikal modern di pusat perkotaan untuk mengoptimalkan ruang lahan terbatas bagi populasi padat."
    },
    mansion: {
      label: "Mansion",
      desc: "Hunian Mewah",
      detailDesc: "Rumah mewah berukuran sangat besar dengan fasilitas premium lengkap bagi kalangan menengah ke atas."
    }
  };

  const items = HUNIAN_KEYS.map((k) => ({
    key: k,
    label: labels[k]?.label || k,
    desc: labels[k]?.desc || "",
    detailDesc: labels[k]?.detailDesc || "",
    value: Number(countryDetail?.[k]) || 0
  }));

  const activeItem = items.find((it) => it.key === activeTab) || items[0];

  const totalValue = items.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="fixed inset-0 bg-black/65 z-50 flex items-center justify-center p-4">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        
        {/* Header */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                <Home className="h-6 w-6 text-[#5c3c10]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Hunian & Permukiman</h2>
                <p className="text-xs text-[#8b7e66]">Manajemen ketersediaan rumah dan tata kelola pemukiman warga</p>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tabs and Grid content */}
        <div className="flex-1 flex min-h-0 relative z-10">
          {/* Sidebar Tabs */}
          <div className="w-64 border-r-2 border-[#C4B49C]/30 bg-[#FAF6EE] p-4 flex flex-col gap-2 overflow-y-auto">
            {items.map((it) => {
              return (
                <button
                  key={it.key}
                  onClick={() => setActiveTab(it.key)}
                  className={`flex items-center justify-between w-full p-3 rounded-xl border-2 text-left transition-all cursor-pointer ${
                    activeTab === it.key
                      ? "bg-[#5c3c10] border-[#5c3c10] text-[#FAF6EE] shadow-md"
                      : "bg-white/80 border-[#C4B49C]/30 text-[#5c3c10] hover:bg-white hover:border-[#5c3c10]/50"
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider">{it.label}</span>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                    activeTab === it.key ? "bg-[#FAF6EE] text-[#5c3c10]" : "bg-[#5c3c10]/10 text-[#5c3c10]"
                  }`}>
                    {it.value > 0 ? "Tersedia" : "Kosong"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content */}
          <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 flex flex-col justify-between">
            <div>
              {activeItem && (
                <div className="max-w-3xl">
                  <div className="mb-6 flex flex-col md:flex-row gap-6">
                    <div className="flex-grow">
                      <h3 className="text-xl font-black text-[#5c3c10] uppercase tracking-wide">{activeItem.label}</h3>
                      <p className="text-xs text-[#8b7e66] mt-1">{activeItem.desc}</p>
                      <p className="text-sm text-[#5c3c10] mt-4 leading-relaxed bg-[#e4dac3]/20 border border-[#C4B49C]/20 p-4 rounded-2xl">{activeItem.detailDesc}</p>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-[#C4B49C]/30 rounded-3xl p-6 shadow-sm max-w-sm">
                    <p className="text-[10px] font-black uppercase text-[#8b7e66] tracking-wider">Total Terdaftar</p>
                    <p className="text-4xl font-black text-[#2e261a] mt-3">{activeItem.value.toLocaleString('id-ID')}</p>
                    <div className="border-t border-[#C4B49C]/20 mt-6 pt-3">
                      <button
                        onClick={() => handleBuild(activeItem.key, activeItem.label)}
                        className="w-full py-2 rounded-xl bg-[#5c3c10] text-[#FAF6EE] border border-[#5c3c10] text-[10px] font-black uppercase cursor-pointer hover:bg-[#8b7e66] hover:border-[#8b7e66] transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] active:scale-[0.98]"
                      >
                        Bangun
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer summary info inside panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 border-t-2 border-[#C4B49C]/20 pt-6">
              <div className="rounded-2xl border border-[#C4B49C]/30 bg-white/70 p-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#5c3c10]">Total Keseluruhan Unit Hunian</p>
                <p className="text-2xl font-black text-[#2e261a] mt-1">{totalValue.toLocaleString('id-ID')}</p>
              </div>
              <div className="rounded-2xl border border-[#C4B49C]/30 bg-white/70 p-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#5c3c10]">Informasi Wilayah</p>
                <p className="text-xs text-[#8b7e66] mt-1">Data hunian direkap dari registrasi kepemilikan dan pajak bumi bangunan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
