"use client"
import React, { useState, useEffect, useRef, useMemo } from "react";
import { 
  X, FileText, Plus, CheckCircle, ChevronDown, Users, ThumbsUp, ThumbsDown, 
  Clock, Swords, ShieldBan, Coins, Bomb, Package 
} from "lucide-react";
import { COUNTRIES_DATA } from "../../../../../map_system/map-data";
import { calculateResolusiVoting } from "../voting_logic/resolusiPBB_logic";

interface ResolusiPBBProps {
  selectedCountry: any;
}

// 🔥 Definisi tipe data negara
interface CountryOption {
  id: number;
  name: string;
  iso: string;
  continent: string;
}

// Fungsi helper untuk menampilkan bendera (Anti broken image)
const renderFlag = (iso: string | undefined, altName: string, size: "sm" | "md" = "md") => {
  if (!iso || iso.length !== 2) return null;
  const wClass = size === "sm" ? "w-5 h-3.5" : "w-6 h-4";
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

  const [selectedType, setSelectedType] = useState<string>("war_ban");
  const [selectedDuration, setSelectedDuration] = useState<string>("1 bulan");
  const [selectedTarget, setSelectedTarget] = useState<CountryOption | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string>("Kayu");

  const [isCountryModalOpen, setIsCountryModalOpen] = useState(false);
  const [activeContinent, setActiveContinent] = useState<string>("");

  const [isDurationOpen, setIsDurationOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  
  const durationRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [allies, setAllies] = useState<CountryOption[]>([]);
  
  // 🔥 State untuk menyimpan Array negara (atau angka fallback)
  const [voteStats, setVoteStats] = useState<{ supporters: CountryOption[], opponents: CountryOption[], hasDiplomaticRelation: boolean }>({
    supporters: [],
    opponents: [],
    hasDiplomaticRelation: false
  });

  const RESOLUTION_ACTIONS = [
    { id: 'war_ban', icon: Swords, label: 'Larangan Perang', desc: 'Dilarang menyerang negara ini selama periode yang dipilih.' },
    { id: 'arms_embargo', icon: ShieldBan, label: 'Embargo Penjualan Senjata', desc: 'Perdagangan senjata dilarang selama periode yang dipilih.' },
    { id: 'economic_embargo', icon: Coins, label: 'Embargo Ekonomi', desc: 'Perdagangan ekonomi dilarang selama periode yang dipilih.' },
    { id: 'military_invasion', icon: Bomb, label: 'Resolusi Invasi', desc: 'Resolusi memungkinkan negara diinvasi tanpa kecaman oleh negara lain.' },
    { id: 'production_ban', icon: Package, label: 'Larangan Produksi', desc: 'Produksi produk yang dipilih dihentikan selama periode yang dipilih.' },
  ];

  const DURATION_OPTIONS = ['1 bulan', '3 bulan', '6 bulan', '9 bulan', '1 tahun'];
  const PRODUCT_OPTIONS = ['Kayu', 'Semen', 'Baja', 'Mobil', 'Senjata'];

  useEffect(() => {
    if (COUNTRIES_DATA && Array.isArray(COUNTRIES_DATA)) {
      const formatted = COUNTRIES_DATA.filter((c) => c.country && c.iso).map((c) => ({
        id: c.id,
        name: formatCountryName(c.country),
        iso: c.iso.toLowerCase(),
        continent: c.continent || 'Lainnya'
      }));
      setCountries(formatted);
    } else {
      setCountries([{ id: 0, name: "Indonesia (Fallback)", iso: "id", continent: "Asia" }]);
    }
  }, []);

  const groupedCountries = useMemo<Record<string, CountryOption[]>>(() => {
    return countries.reduce((acc, country) => {
      const continent = country.continent || 'Lainnya';
      if (!acc[continent]) acc[continent] = [];
      acc[continent].push(country);
      return acc;
    }, {} as Record<string, CountryOption[]>);
  }, [countries]);

  useEffect(() => {
    const keys = Object.keys(groupedCountries);
    if (keys.length > 0 && !activeContinent) {
      setActiveContinent(keys[0]);
    }
  }, [groupedCountries, activeContinent]);

  useEffect(() => {
    const safeCountries = Array.isArray(countries) ? countries : [];
    if (safeCountries.length === 0) return;
    const userCountryId = selectedCountry?.id || 0;
    const seed = (userCountryId * 31 + 7) % safeCountries.length;
    const totalAllies = Math.floor(20 + (seed % 20));
    const alliesList: any[] = [];
    const usedIndices = new Set();
    usedIndices.add(userCountryId);
    let attempts = 0;
    while (alliesList.length < totalAllies && attempts < 1000) {
      const randomIndex = (seed + attempts * 13) % safeCountries.length;
      if (!usedIndices.has(randomIndex)) {
        usedIndices.add(randomIndex);
        alliesList.push(safeCountries[randomIndex]);
      }
      attempts++;
    }
    setAllies(alliesList);
  }, [countries, selectedCountry]);

  // 🔥 USE EFFECT VOTING
  useEffect(() => {
    if (!selectedTarget || !selectedCountry || countries.length === 0) {
      setVoteStats({ supporters: [], opponents: [], hasDiplomaticRelation: false });
      return;
    }

    (async () => {
      const result = await calculateResolusiVoting(
        selectedCountry.country,
        selectedTarget.name,
        countries
      ) ?? { supporters: [], opponents: [], hasDiplomaticRelation: false };

      let supportersList: CountryOption[] = [];
      let opponentsList: CountryOption[] = [];
      
      const rawSupporters = result?.supporters ?? [];
      const rawOpponents = result?.opponents ?? [];

      if (typeof rawSupporters === 'number') {
        const isTargetAlly = allies.some(ally => ally.id === selectedTarget.id);
        if (isTargetAlly) {
          supportersList = countries.filter(c => !allies.some(ally => ally.id === c.id) && c.id !== selectedTarget.id);
          opponentsList = allies.filter(c => c.id !== selectedTarget.id);
        } else {
          supportersList = allies;
          opponentsList = countries.filter(c => !allies.some(ally => ally.id === c.id) && c.id !== selectedTarget.id);
        }
      } else if (Array.isArray(rawSupporters)) {
        supportersList = rawSupporters;
        opponentsList = Array.isArray(rawOpponents) ? rawOpponents : [];
      } else {
        supportersList = [];
        opponentsList = [];
      }

      setVoteStats({
        supporters: supportersList,
        opponents: opponentsList,
        hasDiplomaticRelation: result?.hasDiplomaticRelation || false
      });
    })();
  }, [selectedTarget, selectedCountry, countries, allies]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (durationRef.current && !durationRef.current.contains(event.target as Node)) setIsDurationOpen(false);
      if (productRef.current && !productRef.current.contains(event.target as Node)) setIsProductOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔥 PERBAIKAN MUTLAK: Teknik Scroll Lock (Membekukan posisi Body)
  useEffect(() => {
    const isAnyModalOpen = showCreateModal || isCountryModalOpen;
    if (isAnyModalOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflowY = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }
  }, [showCreateModal, isCountryModalOpen]);

  const isProductionBan = selectedType === 'production_ban';

  const handleSubmitResolution = () => {
    if (isProductionBan) {
      alert(`Resolusi berhasil diajukan!\n\nJenis: Larangan Produksi\nDurasi: ${selectedDuration}\nProduk: ${selectedProduct}`);
      setShowCreateModal(false);
      return;
    }
    if (!selectedTarget) {
      alert("Harap lengkapi Jenis Resolusi, Durasi, dan Negara Target!");
      return;
    }
    const activeAction = RESOLUTION_ACTIONS.find(a => a.id === selectedType);
    const supportersCount = voteStats.supporters.length;
    const opponentsCount = voteStats.opponents.length;
    const passed = supportersCount > opponentsCount;
    
    alert(
      `Resolusi berhasil diajukan!\n\n` +
      `Jenis: ${activeAction?.label}\n` +
      `Durasi: ${selectedDuration}\n` +
      `Target: ${selectedTarget.name}\n\n` +
      `Hasil Prakiraan Voting:\n` +
      `✅ Setuju: ${supportersCount} negara (Hubungan Dagang)\n` +
      `❌ Menolak: ${opponentsCount} negara\n` +
      `Hasil Akhir: ${passed ? "✅ RESOLUSI DISAHKAN" : "❌ RESOLUSI GAGAL"}`
    );
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
          className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-b from-[#ffe07d] via-[#fcae1e] to-[#c77a00] text-[#5c3c10] border-2 border-[#1e2f3d]/15 shadow-lg shadow-[#fcae1e]/20 text-sm font-black uppercase tracking-wider flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
        >
          <Plus className="h-5 w-5" />
          Buat Resolusi Baru
        </button>
      </div>

      {/* 🔥 MODAL UTAMA AJUKAN RESOLUSI (BENTUK ASLI + FLEX CENTER) */}
      {showCreateModal && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-transparent pointer-events-none">
          <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative pointer-events-auto animate-in fade-in zoom-in-95 duration-150">
            
            {/* HEADER MODAL */}
            <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600/10 rounded-xl border border-blue-600/20">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#5c3c10] uppercase tracking-tight">Resolusi Sidang Umum</h3>
                  <p className="text-xs text-[#8b7e66] font-bold mt-0.5">Pilih aksi, durasi, dan target resolusi Anda.</p>
                </div>
              </div>
              <button onClick={() => { setShowCreateModal(false); }} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* 🔥 BODY MODAL */}
            <div className="flex-1 p-8 bg-[#FAF6EE]/40 relative z-10 flex flex-col items-center justify-center overflow-y-auto no-scrollbar">
              <div className="w-full max-w-4xl space-y-8">
                
                <div>
                  <div className="flex flex-wrap justify-center items-center gap-6">
                    {RESOLUTION_ACTIONS.map((action) => {
                      const Icon = action.icon;
                      const isActive = selectedType === action.id;
                      return (
                        <button
                          key={action.id}
                          onClick={() => setSelectedType(action.id)}
                          className={`p-2 rounded-xl border-2 transition-all cursor-pointer flex flex-col items-center justify-center w-20 h-20 group ${
                            isActive
                              ? 'border-[#367d7a] bg-[#367d7a]/10 shadow-sm text-[#367d7a]'
                              : 'border-transparent text-[#8b7e66] hover:border-[#C4B49C]/50 hover:bg-[#e4dac3]/40'
                          }`}
                          title={action.label}
                        >
                          <Icon className={`w-8 h-8 ${isActive ? 'fill-[#367d7a]/20' : ''}`} />
                          <span className="text-[10px] font-bold mt-1.5 text-center leading-tight">{action.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {selectedType && (
                  <div className="text-center">
                    <h3 className="text-2xl font-black text-[#2e261a] uppercase tracking-tight">
                      {RESOLUTION_ACTIONS.find(a => a.id === selectedType)?.label}
                    </h3>
                    <p className="text-sm text-[#8b7e66] mt-2 leading-relaxed max-w-2xl mx-auto">
                      {RESOLUTION_ACTIONS.find(a => a.id === selectedType)?.desc}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-2">Pilih durasi:</p>
                    <div className="relative" ref={durationRef}>
                      <button type="button" onClick={() => setIsDurationOpen(!isDurationOpen)} className="w-full flex items-center justify-between gap-3 px-5 py-4 rounded-xl bg-[#367d7a] text-white border border-[#285e5c] shadow-md hover:brightness-110 transition-all cursor-pointer">
                        <span className="text-sm font-bold">{selectedDuration}</span>
                        <div className="flex items-center gap-1"><Clock className="w-4 h-4 text-white/70" /></div>
                      </button>
                      {isDurationOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#C4B49C]/50 rounded-xl shadow-xl z-30 overflow-hidden">
                          {DURATION_OPTIONS.map((dur) => (
                            <button key={dur} onClick={() => { setSelectedDuration(dur); setIsDurationOpen(false); }} className={`w-full px-5 py-3 text-left text-sm font-bold transition-colors cursor-pointer hover:bg-[#e4dac3]/50 ${selectedDuration === dur ? 'bg-[#367d7a]/10 text-[#367d7a]' : 'text-[#5c3c10]'}`}>{dur}</button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-2">
                      {isProductionBan ? "Pilih produk:" : "Pilih negara:"}
                    </p>
                    
                    {isProductionBan ? (
                      <div className="relative" ref={productRef}>
                        <button type="button" onClick={() => setIsProductOpen(!isProductOpen)} className="w-full flex items-center justify-between gap-3 px-5 py-4 rounded-xl bg-[#367d7a] text-white border border-[#285e5c] shadow-md hover:brightness-110 transition-all cursor-pointer">
                          <span className="text-sm font-bold">{selectedProduct}</span>
                          <ChevronDown className={`w-4 h-4 text-white/70 transition-transform ${isProductOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isProductOpen && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#C4B49C]/50 rounded-xl shadow-xl z-30 overflow-hidden">
                            {PRODUCT_OPTIONS.map((prod) => (
                              <button key={prod} onClick={() => { setSelectedProduct(prod); setIsProductOpen(false); }} className="w-full px-5 py-3 text-left text-sm font-bold transition-colors cursor-pointer hover:bg-[#e4dac3]/50 border-b border-[#C4B49C]/10 last:border-b-0">{prod}</button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <button 
                        type="button"
                        onClick={() => setIsCountryModalOpen(true)}
                        className="w-full flex items-center justify-between gap-3 px-5 py-4 rounded-xl bg-[#367d7a] text-white border border-[#285e5c] shadow-md hover:brightness-110 transition-all cursor-pointer"
                      >
                        <div className="flex items-center gap-3 truncate">
                          {selectedTarget ? (
                            <>
                              {renderFlag(selectedTarget.iso, selectedTarget.name, "sm")}
                              <span className="text-sm font-bold truncate">{selectedTarget.name}</span>
                            </>
                          ) : (
                            <span className="text-sm font-bold opacity-80">-- Pilih Negara --</span>
                          )}
                        </div>
                        <ChevronDown className="w-4 h-4 text-white/70" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <span className="text-sm font-bold text-[#8b7e66]">Durasi pemungutan suara:</span>
                  <div className="flex items-center gap-2"><span className="text-sm font-bold text-[#5c3c10]">30 h.</span><Clock className="w-4 h-4 text-[#8b7e66]" /></div>
                </div>

                <div className="p-8 rounded-2xl bg-[#e4dac3]/30 border-2 border-[#C4B49C]/50 shadow-inner">
                  <p className="text-center text-[11px] font-black text-[#8b7e66] uppercase tracking-wider mb-4">Perkiraan Jumlah Suara</p>
                  <div className="flex justify-between items-center px-4 max-w-md mx-auto">
                    <div className="flex flex-col items-center">
                      <span className="text-[12px] font-bold text-emerald-700 uppercase tracking-wider">Setuju</span>
                      <span className="text-3xl font-black text-emerald-700">
                        {voteStats.supporters.length}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[12px] font-bold text-rose-700 uppercase tracking-wider">Menentang</span>
                      <span className="text-3xl font-black text-rose-700">
                        {voteStats.opponents.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-4 px-8 py-6 border-t-2 border-[#C4B49C]/30 bg-[#FAF6EE] relative z-10 shrink-0">
              <button onClick={() => { setShowCreateModal(false); }} className="px-8 py-3 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all font-black text-xs uppercase tracking-wider cursor-pointer">Batal</button>
              <button onClick={handleSubmitResolution} className="px-8 py-3 rounded-xl bg-[#367d7a] text-white font-black text-xs uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer">Tambahkan</button>
            </div>

          </div>
        </div>
      )}

      {/* 🔥 MODAL KHUSUS UNTUK PILIH NEGARA (BERBASIS TAB BENUA) */}
      {isCountryModalOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-transparent pointer-events-none">
          <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative pointer-events-auto animate-in fade-in zoom-in-95 duration-150">
            <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600/10 rounded-xl border border-blue-600/20"><FileText className="h-6 w-6 text-blue-600" /></div>
                <div><h3 className="text-2xl font-bold text-[#5c3c10] uppercase tracking-tight">Pilih Negara Target</h3><p className="text-xs text-[#8b7e66] font-bold mt-0.5">Pilih benua, lalu pilih negara target Anda.</p></div>
              </div>
              <button onClick={() => setIsCountryModalOpen(false)} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar flex flex-col items-center">
              <div className="w-full max-w-5xl">
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {Object.keys(groupedCountries).map((continent) => (
                    <button
                      key={continent}
                      onClick={() => setActiveContinent(continent)}
                      className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                        activeContinent === continent ? 'bg-[#5c3c10] text-[#FAF6EE] shadow-md' : 'bg-white/80 border border-[#C4B49C]/30 text-[#8b7e66] hover:bg-[#e4dac3]/40 hover:border-[#5c3c10]'
                      }`}
                    >
                      {continent} ({groupedCountries[continent].length})
                    </button>
                  ))}
                </div>
                {activeContinent && groupedCountries[activeContinent] && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {groupedCountries[activeContinent].filter(c => c.id !== selectedCountry?.id).map((c) => {
                      const isSelected = selectedTarget?.id === c.id;
                      return (
                        <button
                          key={c.id}
                          onClick={() => { setSelectedTarget(c); setIsCountryModalOpen(false); }}
                          className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all cursor-pointer ${isSelected ? 'bg-[#367d7a]/10 border-[#367d7a] text-[#367d7a] shadow-sm' : 'bg-white border-[#C4B49C]/30 hover:border-[#5c3c10]'}`}
                        >
                          {renderFlag(c.iso, c.name)}
                          <span className={`text-[10px] font-bold mt-2 text-center leading-tight ${isSelected ? 'text-[#367d7a]' : 'text-[#5c3c10]'}`}>{c.name}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-end gap-4 px-8 py-6 border-t-2 border-[#C4B49C]/30 bg-[#FAF6EE] relative z-10 shrink-0">
              <button onClick={() => setIsCountryModalOpen(false)} className="px-8 py-3 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all font-black text-xs uppercase tracking-wider cursor-pointer">Tutup</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}