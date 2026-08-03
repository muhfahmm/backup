"use client"
import React, { useState, useEffect, useRef } from "react";
import { Shield, ChevronDown, Plus } from "lucide-react";
import { COUNTRIES_DATA } from "../../../../../../map_system/map-data";
// 🔥 PERBAIKAN: Ubah path import menjadi "./ajuanResolusiPBB"
import AjuanResolusiModal, { VotingListModal } from "./1_ajuanResolusiPBB";

interface DewanKeamananPBBProps {
  selectedCountry: any;
}

const renderFlag = (iso: string | undefined, altName: string, size: "sm" | "md" = "md") => {
  if (!iso || iso.length !== 2) return null;
  const wClass = size === "sm" ? "w-6 h-4" : "w-8 h-5";
  return (
    <div className={`${wClass} rounded-sm overflow-hidden border border-[#5c3c10]/20 flex-shrink-0 shadow-sm bg-[#e4dac3] relative flex items-center justify-center`}>
      <img src={`https://flagcdn.com/w80/${iso.toLowerCase()}.png`} alt={altName} className="w-full h-full object-cover absolute inset-0" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
    </div>
  );
};

const formatCountryName = (name: string) => name.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

export default function DewanKeamananPBB({ selectedCountry }: DewanKeamananPBBProps) {
  // ... (sisa kode dewan keamanan tetap sama)
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [isMemberListOpen, setIsMemberListOpen] = useState(true);

  const PERMANENT_MEMBERS = [
    { id: 9998, name: "Amerika Serikat", iso: "us" },
    { id: 9997, name: "Inggris", iso: "gb" },
    { id: 9996, name: "Prancis", iso: "fr" },
    { id: 9995, name: "Rusia", iso: "ru" },
    { id: 9994, name: "Tiongkok", iso: "cn" },
  ];

  const [nonPermanentMembers, setNonPermanentMembers] = useState<any[]>([]);
  const [showSupportersModal, setShowSupportersModal] = useState(false);
  const [showOpponentsModal, setShowOpponentsModal] = useState(false);
  const [voteStats, setVoteStats] = useState<{ supporters: any[]; opponents: any[] }>({ supporters: [], opponents: [] });

  useEffect(() => {
    if (COUNTRIES_DATA && Array.isArray(COUNTRIES_DATA)) {
      const formatted = COUNTRIES_DATA.filter((c) => c.country && c.iso).map((c) => ({ id: c.id, name: formatCountryName(c.country), iso: c.iso.toLowerCase() }));
      const filtered = formatted.filter((c) => !PERMANENT_MEMBERS.some((p) => p.iso === c.iso) && (selectedCountry?.id ? c.id !== selectedCountry.id : true));
      const shuffled = [...filtered].sort(() => 0.5 - Math.random());
      setNonPermanentMembers(shuffled.slice(0, 10));
    }
  }, [selectedCountry]);

  const handleSubmitResolution = () => {
    alert("Resolusi telah diajukan ke Dewan Keamanan. Menunggu hasil voting P5 dan anggota tidak tetap.");
    setShowCreateModal(false);
  };

  return (
    <div className="space-y-6 relative">
      <div className="bg-white/80 border border-[#C4B49C]/30 rounded-xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5 bg-[#FAF6EE]/80 cursor-pointer hover:bg-[#FAF6EE] transition-colors" onClick={() => setIsMemberListOpen(!isMemberListOpen)}>
          <div className="flex items-center gap-4">
            <div className="p-2 bg-[#5c3c10]/10 rounded-full border border-[#5c3c10]/20"><Shield className="h-5 w-5 text-[#5c3c10]" /></div>
            <h4 className="text-sm font-black text-[#5c3c10] uppercase tracking-wider">Keanggotaan Dewan Keamanan PBB</h4>
            <div className="flex items-center gap-2 ml-4">
              <span className="text-[10px] font-bold bg-orange-100 text-orange-800 px-3 py-1 rounded-full border border-orange-200">5 Tetap</span>
              <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-full border border-blue-200">10 Tidak Tetap</span>
            </div>
          </div>
          <ChevronDown className={`h-5 w-5 text-[#5c3c10] transition-transform duration-300 ${isMemberListOpen ? 'rotate-180' : ''}`} />
        </div>

        {isMemberListOpen && (
          <div className="p-6 border-t border-[#C4B49C]/20 bg-white space-y-4">
            <div>
              <p className="text-[9px] font-black text-orange-800 uppercase tracking-wider mb-3">Anggota Tetap (P5) - Hak Veto</p>
              <div className="flex flex-wrap gap-3">{PERMANENT_MEMBERS.map((c) => (<div key={c.id} className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 border border-orange-200 rounded-lg">{renderFlag(c.iso, c.name, "sm")}<span className="text-[10px] font-bold text-[#5c3c10]">{c.name}</span></div>))}</div>
            </div>
            <div>
              <p className="text-[9px] font-black text-blue-800 uppercase tracking-wider mb-3">Anggota Tidak Tetap (Bergilir)</p>
              <div className="flex flex-wrap gap-3">{nonPermanentMembers.map((c) => (<div key={c.id} className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg">{renderFlag(c.iso, c.name, "sm")}<span className="text-[10px] font-bold text-[#5c3c10]">{c.name}</span></div>))}</div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white/70 border border-[#C4B49C]/30 rounded-xl shadow-sm flex flex-col items-center justify-center py-12 min-h-[200px]">
        <button onClick={() => setShowCreateModal(true)} className="px-8 py-4 rounded-xl bg-gradient-to-b from-[#ffe07d] via-[#fcae1e] to-[#c77a00] text-[#5c3c10] border-2 border-[#1e2f3d]/15 shadow-lg shadow-[#fcae1e]/20 text-sm font-black uppercase tracking-wider flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer"><Plus className="h-5 w-5" /> Buat Resolusi Baru</button>
      </div>

      <AjuanResolusiModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        resType={""} setResType={() => {}}
        resDuration={""} setResDuration={() => {}}
        resTarget={null} setResTarget={() => {}}
        isCountryDropdownOpen={false} setIsCountryDropdownOpen={() => {}}
        dropdownRef={useRef<HTMLDivElement>(null)}
        countries={[]} allies={[]}
        onSubmit={handleSubmitResolution}
        voteStats={voteStats}
        renderFlag={renderFlag}
        onShowSupporters={() => setShowSupportersModal(true)}
        onShowOpponents={() => setShowOpponentsModal(true)}
      />
    </div>
  );
}