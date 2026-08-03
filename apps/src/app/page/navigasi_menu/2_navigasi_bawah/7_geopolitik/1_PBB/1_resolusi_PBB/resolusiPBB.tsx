"use client"
import React, { useState, useEffect, useRef } from "react";
import { FileText, Plus, ThumbsUp, ThumbsDown } from "lucide-react";
import { COUNTRIES_DATA } from "../../../../../map_system/map-data";

// 🔥 IMPOR MODAL TERPISAH UNTUK TAB RESOLUSI
import AjuanResolusiModal, { VotingListModal } from "./modals_menu/1_ajuanResolusiPBB";

interface ResolusiPBBProps {
  selectedCountry: any;
}

// Fungsi helper untuk menampilkan bendera
const renderFlag = (iso: string | undefined, altName: string, size: "sm" | "md" = "md") => {
  if (!iso || iso.length !== 2) return null;
  const wClass = size === "sm" ? "w-6 h-4" : "w-8 h-5";
  return (
    <div className={`${wClass} rounded-sm overflow-hidden border border-[#5c3c10]/20 flex-shrink-0 shadow-sm bg-[#e4dac3] relative flex items-center justify-center`}>
      <img
        src={`https://flagcdn.com/w80/${iso.toLowerCase()}.png`}
        alt={altName}
        className="w-full h-full object-cover absolute inset-0"
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
      />
    </div>
  );
};

const formatCountryName = (name: string) => {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default function ResolusiPBB({ selectedCountry }: ResolusiPBBProps) {
  const [showCreateModal, setShowCreateModal] = useState(false);

  // State Pilihan Resolusi
  const [resType, setResType] = useState<string>("");
  const [resDuration, setResDuration] = useState<string>("");
  const [resTarget, setResTarget] = useState<any>(null);

  // State untuk Dropdown Pilih Negara
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // State untuk Data Negara & Hubungan Dagang (Allies)
  const [countries, setCountries] = useState<any[]>([]);
  const [allies, setAllies] = useState<any[]>([]); 

  // State untuk Modal Daftar Setuju / Menolak
  const [showSupportersModal, setShowSupportersModal] = useState(false);
  const [showOpponentsModal, setShowOpponentsModal] = useState(false);

  // ===== LOGIKA DATA NEGARA & HUBUNGAN DAGANG =====
  useEffect(() => {
    if (COUNTRIES_DATA && Array.isArray(COUNTRIES_DATA)) {
      const formatted = COUNTRIES_DATA.filter((c) => c.country && c.iso).map((c) => ({
        id: c.id,
        name: formatCountryName(c.country),
        iso: c.iso.toLowerCase(),
      }));
      setCountries(formatted);
    } else {
      setCountries([{ id: 0, name: "Indonesia (Fallback)", iso: "id" }]);
    }
  }, []);

  // Generate simulasi teman dagang (Allies) berdasarkan negara user
  useEffect(() => {
    if (countries.length === 0) return;
    
    const userCountryId = selectedCountry?.id || 0;
    const seed = (userCountryId * 31 + 7) % countries.length;
    const totalAllies = Math.floor(20 + (seed % 20)); 

    const alliesList = [];
    const usedIndices = new Set();
    usedIndices.add(userCountryId); 
    
    let attempts = 0;
    while (alliesList.length < totalAllies && attempts < 1000) {
      const randomIndex = (seed + attempts * 13) % countries.length;
      if (!usedIndices.has(randomIndex)) {
        usedIndices.add(randomIndex);
        alliesList.push(countries[randomIndex]);
      }
      attempts++;
    }
    setAllies(alliesList);
  }, [countries, selectedCountry]);

  // ===== LOGIKA PERHITUNGAN SUARA =====
  const calculateVotes = () => {
    if (!resTarget || !countries.length) return { supporters: [], opponents: [], total: 0 };

    const isTargetAlly = allies.some(ally => ally.id === resTarget.id);
    
    let supporters: any[] = [];
    let opponents: any[] = [];

    if (isTargetAlly) {
      supporters = countries.filter(c => 
        !allies.some(ally => ally.id === c.id) && c.id !== resTarget.id
      );
      opponents = countries.filter(c => 
        allies.some(ally => ally.id === c.id) && c.id !== resTarget.id
      );
    } else {
      supporters = allies;
      opponents = countries.filter(c => 
        !allies.some(ally => ally.id === c.id) && c.id !== resTarget.id
      );
    }

    return { supporters, opponents, total: countries.length };
  };

  const voteStats = calculateVotes();

  // ===== UI DROPDOWN CLOSE =====
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ===== LOGIKA SUBMIT =====
  const handleSubmitResolution = () => {
    if (!resType || !resDuration || !resTarget) {
      alert("Harap lengkapi Jenis Resolusi, Durasi, dan Negara Target!");
      return;
    }
    
    const supportersCount = voteStats.supporters.length;
    const opponentsCount = voteStats.opponents.length;
    const passed = supportersCount > opponentsCount;

    alert(
      `Resolusi berhasil diajukan!\n\n` +
      `Jenis: ${resType}\n` +
      `Durasi: ${resDuration}\n` +
      `Target: ${resTarget.name}\n\n` +
      `Hasil Prakiraan Voting:\n` +
      `✅ Setuju: ${supportersCount} negara\n` +
      `❌ Menolak: ${opponentsCount} negara\n` +
      `Hasil Akhir: ${passed ? "✅ RESOLUSI DISAHKAN" : "❌ RESOLUSI GAGAL"}\n\n` +
      `Menunggu hasil resmi dari Majelis Umum.`
    );
    
    // Reset Form
    setResType("");
    setResDuration("");
    setResTarget(null);
    setShowCreateModal(false);
  };

  return (
    <div className="space-y-4 relative">
      
      {/* UI Utama: Halaman Kosong Elegan */}
      <div className="bg-white/70 border border-[#C4B49C]/30 p-10 rounded-xl shadow-sm flex flex-col items-center justify-center text-center space-y-4 min-h-[300px]">
        <div className="p-3 rounded-full bg-[#5c3c10]/10 border border-[#5c3c10]/20">
          <FileText className="h-8 w-8 text-[#5c3c10]" />
        </div>
        <div>
          <h3 className="text-lg font-black text-[#5c3c10] uppercase tracking-tight">Belum Ada Resolusi Aktif</h3>
          <p className="text-xs text-[#8b7e66] mt-1 max-w-md">
            Mulailah dengan mengajukan rancangan resolusi baru untuk dibahas oleh negara-negara anggota Majelis Umum.
          </p>
        </div>
        
        <button
          onClick={() => setShowCreateModal(true)}
          className="mt-4 px-8 py-4 rounded-xl bg-gradient-to-b from-[#ffe07d] via-[#fcae1e] to-[#c77a00] text-[#5c3c10] border-2 border-[#1e2f3d]/15 shadow-lg shadow-[#fcae1e]/20 text-sm font-black uppercase tracking-wider flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
        >
          <Plus className="h-5 w-5" />
          Buat Resolusi Baru
        </button>
      </div>

      {/* 🔥 RENDER MODAL AJUAN RESOLUSI */}
      <AjuanResolusiModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        resType={resType}
        setResType={setResType}
        resDuration={resDuration}
        setResDuration={setResDuration}
        resTarget={resTarget}
        setResTarget={setResTarget}
        isCountryDropdownOpen={isCountryDropdownOpen}
        setIsCountryDropdownOpen={setIsCountryDropdownOpen}
        dropdownRef={dropdownRef}
        countries={countries}
        allies={allies}
        onSubmit={handleSubmitResolution}
        voteStats={voteStats}
        renderFlag={renderFlag}
        onShowSupporters={() => setShowSupportersModal(true)}
        onShowOpponents={() => setShowOpponentsModal(true)}
      />

      {/* 🔥 RENDER MODAL DAFTAR SETUJU / MENOLAK */}
      <VotingListModal
        isOpen={showSupportersModal}
        onClose={() => setShowSupportersModal(false)}
        title="Negara yang Menyetujui"
        icon={<ThumbsUp className="h-5 w-5 text-emerald-600" />}
        iconColorClass="border-emerald-600/50"
        countLabel={`${voteStats.supporters.length} Negara`}
        countries={voteStats.supporters}
        renderFlag={renderFlag}
      />
      <VotingListModal
        isOpen={showOpponentsModal}
        onClose={() => setShowOpponentsModal(false)}
        title="Negara yang Menolak"
        icon={<ThumbsDown className="h-5 w-5 text-rose-600" />}
        iconColorClass="border-rose-600/50"
        countLabel={`${voteStats.opponents.length} Negara`}
        countries={voteStats.opponents}
        renderFlag={renderFlag}
      />

    </div>
  );
}