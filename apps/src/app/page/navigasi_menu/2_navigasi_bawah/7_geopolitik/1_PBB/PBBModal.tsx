"use client"
import React, { useState } from "react";
import { X, Landmark, Globe, Shield } from "lucide-react";

// 🔥 IMPOR KETIGA KOMPONEN TAB
import KeamananPBB from "./2_keamanan_PBB/keamananPBB";
import ResolusiPBB from "./1_resolusi_PBB/resolusiPBB";
import SuaraNegara from "./3_suara_negara_PBB/suaraPBB";

interface PBBModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCountry: any;
  countryDetail: any;
}

export default function PBBModal({ isOpen, onClose, selectedCountry, countryDetail }: PBBModalProps) {
  const [activeTab, setActiveTab] = useState<"resolusi" | "keamanan" | "suara">("keamanan");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        {/* HEADER */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
              <Landmark className="h-6 w-6 text-[#5c3c10]" />
            </div>
            <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">
              Sidang Umum Perserikatan Bangsa-Bangsa
            </h2>
          </div>
          <button onClick={onClose} className="flex items-center gap-1.5 p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] transition-all cursor-pointer font-black text-xs uppercase">
            <span className="text-[10px] tracking-widest">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* SECTION: TAB NAVIGASI */}
        <div className="bg-[#e4dac3]/40 p-1 rounded-xl border border-[#C4B49C]/40 inline-flex mx-8 mt-6 mb-2 shadow-sm">
          <button
            onClick={() => setActiveTab("resolusi")}
            className={`px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
              activeTab === "resolusi" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md" : "text-[#8b7e66] hover:text-[#5c3c10]"
            }`}
          >
            <Globe className="w-3.5 h-3.5 inline mr-2 -mt-0.5" /> Resolusi PBB
          </button>
          <button
            onClick={() => setActiveTab("keamanan")}
            className={`px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
              activeTab === "keamanan" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md" : "text-[#8b7e66] hover:text-[#5c3c10]"
            }`}
          >
            <Shield className="w-3.5 h-3.5 inline mr-2 -mt-0.5" /> Dewan Keamanan
          </button>
          <button
            onClick={() => setActiveTab("suara")}
            className={`px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
              activeTab === "suara" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md" : "text-[#8b7e66] hover:text-[#5c3c10]"
            }`}
          >
            <Globe className="w-3.5 h-3.5 inline mr-2 -mt-0.5" /> Suara Negara
          </button>
        </div>

        {/* SECTION: CONTENT DINAMIS - KOMENTAR TELAH DIHAPUS */}
        <div className="flex-1 min-h-0 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          
          {activeTab === "keamanan" && (
            <KeamananPBB selectedCountry={selectedCountry} />
          )}

          {activeTab === "resolusi" && (
            <ResolusiPBB selectedCountry={selectedCountry} />
          )}

          {activeTab === "suara" && (
            <SuaraNegara selectedCountry={selectedCountry} countryDetail={countryDetail} />
          )}
        </div>
      </div>
    </div>
  );
}