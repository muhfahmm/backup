"use client"
import React, { useState } from "react";
import { X, Award } from "lucide-react";
import ResolusiPBB from "./1_resolusi_PBB/resolusiPBB";
import KeamananPBB from "./2_keamanan_PBB/keamananPBB";
import SuaraPBB from "./3_suara_negara_PBB/suaraPBB";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCountry: any;
}

export default function PBBModal({ isOpen, onClose, selectedCountry }: ModalProps) {
  const [activeTab, setActiveTab] = useState<"resolusi" | "keamanan" | "suara">("resolusi");

  if (!isOpen) return null;
  const countryName = selectedCountry?.country || "Indonesia";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        
        {/* Header */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-blue-600 animate-pulse" />
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Sidang Umum Perserikatan Bangsa-Bangsa</h2>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 min-h-0 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          {/* 3 TAB MENU */}
          <div className="bg-[#e4dac3]/40 p-1 rounded-xl border border-[#C4B49C]/40 inline-flex mb-6 shadow-sm">
            <button
              onClick={() => setActiveTab("resolusi")}
              className={`px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === "resolusi" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20" : "text-[#8b7e66] hover:text-[#5c3c10]"
              }`}
            >
              Resolusi PBB
            </button>
            <button
              onClick={() => setActiveTab("keamanan")}
              className={`px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === "keamanan" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20" : "text-[#8b7e66] hover:text-[#5c3c10]"
              }`}
            >
              Dewan Keamanan
            </button>
            <button
              onClick={() => setActiveTab("suara")}
              className={`px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === "suara" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20" : "text-[#8b7e66] hover:text-[#5c3c10]"
              }`}
            >
              Suara Negara
            </button>
          </div>

          {/* Render 3 Komponen Berdasarkan Active Tab */}
          {activeTab === "resolusi" && <ResolusiPBB selectedCountry={selectedCountry} />}
          
          {/* PERBAIKAN: Menambahkan selectedCountry pada komponen KeamananPBB */}
          {activeTab === "keamanan" && <KeamananPBB selectedCountry={selectedCountry} />}
          
          {activeTab === "suara" && <SuaraPBB />}
          
        </div>
      </div>
    </div>
  );
}