"use client"
import React, { useState, useEffect, useRef } from "react";
import { X, FileText, Plus, CheckCircle, ChevronDown, Users, ThumbsUp, ThumbsDown } from "lucide-react";
import { COUNTRIES_DATA } from "../../../../../map_system/map-data";

interface ResolusiPBBProps {
  selectedCountry: any;
}

// Fungsi helper untuk menampilkan bendera (Anti broken image)
const renderFlag = (iso: string | undefined, altName: string, size: "sm" | "md" = "md") => {
  if (!iso || iso.length !== 2) return <span className="text-xl">🌐</span>;
  const wClass = size === "sm" ? "w-6 h-4" : "w-8 h-5";
  return (
    <div className={`${wClass} rounded-sm overflow-hidden border border-[#5c3c10]/20 flex-shrink-0 shadow-sm bg-[#e4dac3] relative flex items-center justify-center`}>
      <img
        src={`https://flagcdn.com/w80/${iso.toLowerCase()}.png`}
        alt={altName}
        className="w-full h-full object-cover absolute inset-0"
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
      />
      <span className="text-sm opacity-50 select-none">🌐</span>
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
  const [allies, setAllies] = useState<any[]>([]); // Daftar negara sekutu/teman dagang

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
    // Menggunakan seed sederhana untuk memastikan hasil acak tapi konsisten per negara user
    const seed = (userCountryId * 31 + 7) % countries.length;
    const totalAllies = Math.floor(20 + (seed % 20)); // 20 sampai 39 teman dagang

    // Pilih teman dagang secara pseudo-random (tidak termasuk diri sendiri)
    const alliesList = [];
    const usedIndices = new Set();
    usedIndices.add(userCountryId); // Jangan jadikan diri sendiri sebagai teman dagang
    
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
  // Asumsi: Jika target adalah teman dagang, resolusi akan sulit lolos (teman tidak mau menyetujui sanksi terhadap diri sendiri).
  // Prakiraan suara:
  // - Setuju: Semua teman dagang KECUALI negara target (jika target adalah teman dagang).
  // - Menolak: Negara yang tidak memiliki hubungan dagang + negara target (jika target adalah teman dagang yang abstain/veto).
  
  const calculateVotes = () => {
    if (!resTarget || !countries.length) return { supporters: [], opponents: [], total: 0 };

    const isTargetAlly = allies.some(ally => ally.id === resTarget.id);
    
    let supporters: any[] = [];
    let opponents: any[] = [];

    if (isTargetAlly) {
      // Jika target adalah teman dagang, maka semua teman dagang lain abstain / menolak (tidak ingin menyakiti teman sendiri)
      // Hanya musuh yang setuju (karena mereka ingin menjatuhkan teman user).
      supporters = countries.filter(c => 
        !allies.some(ally => ally.id === c.id) && c.id !== resTarget.id
      );
      opponents = countries.filter(c => 
        allies.some(ally => ally.id === c.id) && c.id !== resTarget.id
      );
    } else {
      // Jika target BUKAN teman dagang (musuh), maka semua teman dagang user akan setuju untuk memberikan sanksi.
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
    
    // Menampilkan hasil voting prakiraan ke player
    const supportersCount = voteStats.supporters.length;
    const opponentsCount = voteStats.opponents.length;
    const passed = supportersCount > opponentsCount; // Aturan mayoritas sederhana

    alert(
      `Resolusi berhasil diajukan!\n\n` +
      `Jenis: ${resType}\n` +
      `Durasi: ${resDuration}\n` +
      `Target: ${resTarget.name}\n\n` +
      `Hasil Prakiraan Voting:\n` +
      `✅ Setuju: ${supportersCount} negara (Hubungan Dagang)\n` +
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

      {/* MODAL: Formulir Buat Resolusi Baru */}
      {showCreateModal && (
        <div className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center p-8 pointer-events-auto backdrop-blur-sm rounded-2xl">
          <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl max-w-2xl w-full p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative">
            <button
              onClick={() => setShowCreateModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-black/5 text-[#8b7e66] hover:text-[#5c3c10] transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-600/10 rounded-xl border border-blue-600/20">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#5c3c10] uppercase tracking-tight">Ajukan Resolusi Baru</h3>
                <p className="text-xs text-[#8b7e66] font-bold">Pilih jenis, durasi, dan target negara untuk resolusi Anda.</p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              
              {/* 1. JENIS RESOLUSI */}
              <div>
                <p className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-3">Jenis Resolusi</p>
                <div className="grid grid-cols-2 gap-3">
                  {['Larangan Perang', 'Embargo Penjualan Senjata', 'Embargo Ekonomi', 'Resolusi Invasi'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setResType(type)}
                      className={`py-3 px-4 rounded-xl border-2 text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                        resType === type
                          ? 'bg-[#5c3c10] text-[#FAF6EE] border-[#5c3c10] shadow-md'
                          : 'bg-white text-[#5c3c10] border-[#C4B49C]/50 hover:bg-[#e4dac3]/40'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. DURASI */}
              <div>
                <p className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-3">Durasi Resolusi</p>
                <div className="flex flex-wrap gap-3">
                  {['1 Bulan', '3 Bulan', '6 Bulan', '9 Bulan', '1 Tahun'].map((duration) => (
                    <button
                      key={duration}
                      onClick={() => setResDuration(duration)}
                      className={`flex-1 min-w-[80px] py-2.5 rounded-xl border-2 text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                        resDuration === duration
                          ? 'bg-[#5c3c10] text-[#FAF6EE] border-[#5c3c10] shadow-md'
                          : 'bg-white text-[#5c3c10] border-[#C4B49C]/50 hover:bg-[#e4dac3]/40'
                      }`}
                    >
                      {duration}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. PILIH NEGARA TARGET (Dropdown 207 Negara) */}
              <div>
                <p className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-3">Pilih Negara Target</p>
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 bg-white transition-all cursor-pointer ${
                      isCountryDropdownOpen ? 'border-[#5c3c10] shadow-md' : 'border-[#C4B49C]/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {resTarget ? (
                        <>
                          {renderFlag(resTarget.iso, resTarget.name)}
                          <span className="text-sm font-bold text-[#5c3c10]">{resTarget.name}</span>
                        </>
                      ) : (
                        <span className="text-sm font-bold text-[#8b7e66]">-- Pilih Negara Target --</span>
                      )}
                    </div>
                    <ChevronDown className={`h-5 w-5 text-[#5c3c10] transition-transform duration-300 ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown List 207 Negara */}
                  {isCountryDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#C4B49C]/50 rounded-xl shadow-xl z-30 max-h-60 overflow-y-auto custom-scrollbar">
                      {countries.length > 0 ? (
                        countries.map((c) => (
                          <button
                            key={c.id}
                            onClick={() => {
                              setResTarget(c);
                              setIsCountryDropdownOpen(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[#e4dac3]/50 transition-colors text-left cursor-pointer border-b border-[#C4B49C]/10 last:border-b-0"
                          >
                            {renderFlag(c.iso, c.name)}
                            <span className="text-sm font-bold text-[#5c3c10]">{c.name}</span>
                            {/* Tampilkan badge jika dia teman dagang */}
                            {allies.some(ally => ally.id === c.id) && (
                              <span className="ml-auto text-[8px] font-bold bg-emerald-600/10 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-600/20">Sekutu</span>
                            )}
                          </button>
                        ))
                      ) : (
                        <div className="p-4 text-center text-[#8b7e66] text-xs font-bold">Data negara tidak ditemukan.</div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* PERUBAHAN BARU: BAGIAN PRAKIRAAN SUARA DAN TOMBOL MODAL */}
              {resTarget && (
                <div className="pt-4 border-t border-[#C4B49C]/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="h-4 w-4 text-[#5c3c10]" />
                    <p className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider">Prakiraan Suara (Berdasarkan Hubungan Dagang)</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-3">
                    {/* Tombol Setuju (Hijau) */}
                    <button
                      onClick={() => setShowSupportersModal(true)}
                      className="flex-1 min-w-[140px] flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-emerald-600/10 border-2 border-emerald-600/30 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
                        <ThumbsUp className="h-4 w-4" />
                        Setuju
                      </div>
                      <span className="font-bold">{voteStats.supporters.length} Negara</span>
                    </button>

                    {/* Tombol Menolak (Merah) */}
                    <button
                      onClick={() => setShowOpponentsModal(true)}
                      className="flex-1 min-w-[140px] flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-rose-600/10 border-2 border-rose-600/30 text-rose-700 hover:bg-rose-600 hover:text-white transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
                        <ThumbsDown className="h-4 w-4" />
                        Menolak
                      </div>
                      <span className="font-bold">{voteStats.opponents.length} Negara</span>
                    </button>
                  </div>
                  <p className="text-[9px] text-[#8b7e66] font-bold mt-1">* Klik tombol untuk melihat daftar lengkap negara.</p>
                </div>
              )}

            </div>

            {/* Footer Tombol Aksi */}
            <div className="flex gap-4 pt-4 border-t border-[#C4B49C]/30">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 py-3 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all font-black text-xs uppercase tracking-wider cursor-pointer"
              >
                Batal
              </button>
              <button
                onClick={handleSubmitResolution}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#fcae1e] to-[#c77a00] text-[#FAF6EE] shadow-md shadow-[#c77a00]/30 font-black text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <CheckCircle className="h-4 w-4" />
                Kirim ke Sidang
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== MODAL DAFTAR NEGARA SETUJU ===== */}
      {showSupportersModal && (
        <div className="absolute inset-0 bg-black/60 z-40 flex items-center justify-center p-8 pointer-events-auto backdrop-blur-sm rounded-2xl">
          <div className="bg-[#FAF6EE] border-4 border-emerald-600/50 rounded-2xl max-w-3xl w-full max-h-[80vh] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative flex flex-col">
            <button
              onClick={() => setShowSupportersModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-black/5 text-[#8b7e66] hover:text-[#5c3c10] transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#C4B49C]/30">
              <div className="p-1.5 bg-emerald-600/10 rounded-full border border-emerald-600/20">
                <ThumbsUp className="h-5 w-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-black text-[#5c3c10] uppercase tracking-tight">Negara yang Menyetujui</h3>
              <span className="ml-auto text-xs font-bold bg-emerald-600/20 text-emerald-700 px-3 py-1 rounded-full">
                {voteStats.supporters.length} Negara
              </span>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {voteStats.supporters.map((c) => (
                  <div key={c.id} className="flex items-center gap-2 p-2 bg-white/50 border border-[#C4B49C]/20 rounded-lg">
                    {renderFlag(c.iso, c.name, "sm")}
                    <span className="text-[10px] font-bold text-[#5c3c10] truncate">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowSupportersModal(false)}
              className="mt-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-black uppercase tracking-wider hover:bg-emerald-700 transition-all cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* ===== MODAL DAFTAR NEGARA MENOLAK ===== */}
      {showOpponentsModal && (
        <div className="absolute inset-0 bg-black/60 z-40 flex items-center justify-center p-8 pointer-events-auto backdrop-blur-sm rounded-2xl">
          <div className="bg-[#FAF6EE] border-4 border-rose-600/50 rounded-2xl max-w-3xl w-full max-h-[80vh] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative flex flex-col">
            <button
              onClick={() => setShowOpponentsModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-black/5 text-[#8b7e66] hover:text-[#5c3c10] transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#C4B49C]/30">
              <div className="p-1.5 bg-rose-600/10 rounded-full border border-rose-600/20">
                <ThumbsDown className="h-5 w-5 text-rose-600" />
              </div>
              <h3 className="text-lg font-black text-[#5c3c10] uppercase tracking-tight">Negara yang Menolak</h3>
              <span className="ml-auto text-xs font-bold bg-rose-600/20 text-rose-700 px-3 py-1 rounded-full">
                {voteStats.opponents.length} Negara
              </span>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {voteStats.opponents.map((c) => (
                  <div key={c.id} className="flex items-center gap-2 p-2 bg-white/50 border border-[#C4B49C]/20 rounded-lg">
                    {renderFlag(c.iso, c.name, "sm")}
                    <span className="text-[10px] font-bold text-[#5c3c10] truncate">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowOpponentsModal(false)}
              className="mt-4 py-2.5 rounded-xl bg-rose-600 text-white text-xs font-black uppercase tracking-wider hover:bg-rose-700 transition-all cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

    </div>
  );
}