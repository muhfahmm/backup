"use client"
import React, { useState, useEffect, useRef } from "react";
import { FileText, Plus, ThumbsUp, ThumbsDown, X, CheckCircle, ChevronDown, Users } from "lucide-react";
import { COUNTRIES_DATA } from "../../../../../../map_system/map-data";

// 🔥 PERBAIKAN 1: Tambahkan Interface untuk Type Safety
interface CountryData {
  id: number;
  name: string;
  iso: string;
}

// --- HELPER FUNCTIONS ---
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

// --- MODAL VOTING ---
export function VotingListModal({ isOpen, onClose, title, icon, iconColorClass, countLabel, countries }: any) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className={`bg-[#FAF6EE] border-4 ${iconColorClass} rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col pointer-events-auto`}>
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 bg-[#FAF6EE] shrink-0 flex justify-between items-center">
          <div className="flex items-center gap-3"><div className="p-1.5 bg-white/10 rounded-full border border-current/20">{icon}</div><h3 className="text-2xl font-bold text-[#5c3c10] uppercase tracking-tight">{title}</h3><span className="ml-2 text-xs font-bold bg-black/10 px-3 py-1 rounded-full text-[#5c3c10]">{countLabel}</span></div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5">
            <span className="text-[10px] font-black uppercase tracking-widest">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* 🔥 PERBAIKAN 2: Tipe untuk c adalah CountryData */}
            {(countries as CountryData[]).map((c: CountryData) => (
              <div key={c.id} className="flex items-center gap-2 p-2 bg-white/50 border border-[#C4B49C]/20 rounded-lg">
                {renderFlag(c.iso, c.name, "sm")}
                <span className="text-[10px] font-bold text-[#5c3c10] truncate">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 bg-[#FAF6EE] border-t-2 border-[#C4B49C]/20 shrink-0">
          <button onClick={onClose} className="px-8 py-3 rounded-xl bg-[#5c3c10] text-white text-xs font-black uppercase tracking-wider hover:bg-[#8b7e66] transition-all cursor-pointer">Tutup</button>
        </div>
      </div>
    </div>
  );
}

// --- MODAL AJUKAN RESOLUSI ---
export function AjuanResolusiModal({ isOpen, onClose, resType, setResType, resDuration, setResDuration, resTarget, setResTarget, isCountryDropdownOpen, setIsCountryDropdownOpen, dropdownRef, countries, allies, onSubmit, voteStats, renderFlag, onShowSupporters, onShowOpponents }: any) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col pointer-events-auto">
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 bg-[#FAF6EE] shrink-0 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600/10 rounded-xl border border-blue-600/20"><FileText className="h-6 w-6 text-blue-600" /></div>
            <div><h3 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Ajukan Resolusi Baru</h3><p className="text-xs text-[#8b7e66] mt-1">Pilih jenis, durasi, dan target negara untuk resolusi Anda.</p></div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5">
            <span className="text-[10px] font-black uppercase tracking-widest">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 space-y-6">
          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-3">Jenis Resolusi</p>
              <div className="grid grid-cols-2 gap-3">
                {['Larangan Perang', 'Embargo Penjualan Senjata', 'Embargo Ekonomi', 'Resolusi Invasi'].map((type) => (
                  <button key={type} onClick={() => setResType(type)} className={`py-3 px-4 rounded-xl border-2 text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${resType === type ? 'bg-[#5c3c10] text-[#FAF6EE] border-[#5c3c10] shadow-md' : 'bg-white text-[#5c3c10] border-[#C4B49C]/50 hover:bg-[#e4dac3]/40'}`}>{type}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-3">Durasi Resolusi</p>
              <div className="flex flex-wrap gap-3">
                {['1 Bulan', '3 Bulan', '6 Bulan', '9 Bulan', '1 Tahun'].map((duration) => (
                  <button key={duration} onClick={() => setResDuration(duration)} className={`flex-1 min-w-[80px] py-2.5 rounded-xl border-2 text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${resDuration === duration ? 'bg-[#5c3c10] text-[#FAF6EE] border-[#5c3c10] shadow-md' : 'bg-white text-[#5c3c10] border-[#C4B49C]/50 hover:bg-[#e4dac3]/40'}`}>{duration}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-3">Pilih Negara Target</p>
              <div className="relative" ref={dropdownRef}>
                <button type="button" onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 bg-white transition-all cursor-pointer ${isCountryDropdownOpen ? 'border-[#5c3c10] shadow-md' : 'border-[#C4B49C]/50'}`}>
                  <div className="flex items-center gap-3">
                    {resTarget ? <>{renderFlag(resTarget.iso, resTarget.name)}<span className="text-sm font-bold text-[#5c3c10]">{resTarget.name}</span></> : <span className="text-sm font-bold text-[#8b7e66]">-- Pilih Negara Target --</span>}
                  </div>
                  <ChevronDown className={`h-5 w-5 text-[#5c3c10] transition-transform duration-300 ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCountryDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#C4B49C]/50 rounded-xl shadow-xl z-30 max-h-60 overflow-y-auto custom-scrollbar">
                    {/* 🔥 PERBAIKAN 3: Tipe untuk c dan ally adalah CountryData */}
                    {(countries as CountryData[]).map((c: CountryData) => (
                      <button key={c.id} onClick={() => { setResTarget(c); setIsCountryDropdownOpen(false); }} className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[#e4dac3]/50 transition-colors text-left cursor-pointer border-b border-[#C4B49C]/10 last:border-b-0">
                        {renderFlag(c.iso, c.name)}<span className="text-sm font-bold text-[#5c3c10]">{c.name}</span>
                        {(allies as CountryData[]).some((ally: CountryData) => ally.id === c.id) && <span className="ml-auto text-[8px] font-bold bg-emerald-600/10 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-600/20">Sekutu</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {resTarget && (
              <div className="pt-4 border-t border-[#C4B49C]/30">
                <div className="flex items-center gap-2 mb-3"><Users className="h-4 w-4 text-[#5c3c10]" /><p className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider">Prakiraan Suara (Berdasarkan Hubungan Dagang)</p></div>
                <div className="flex flex-wrap gap-4 mb-3">
                  <button onClick={onShowSupporters} className="flex-1 min-w-[140px] flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-emerald-600/10 border-2 border-emerald-600/30 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all cursor-pointer">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider"><ThumbsUp className="h-4 w-4" />Setuju</div><span className="font-bold">{voteStats.supporters.length} Negara</span>
                  </button>
                  <button onClick={onShowOpponents} className="flex-1 min-w-[140px] flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-rose-600/10 border-2 border-rose-600/30 text-rose-700 hover:bg-rose-600 hover:text-white transition-all cursor-pointer">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider"><ThumbsDown className="h-4 w-4" />Menolak</div><span className="font-bold">{voteStats.opponents.length} Negara</span>
                  </button>
                </div>
                <p className="text-[9px] text-[#8b7e66] font-bold mt-1">* Klik tombol untuk melihat daftar lengkap negara.</p>
              </div>
            )}
          </div>
        </div>
        <div className="p-4 bg-[#FAF6EE] border-t-2 border-[#C4B49C]/20 flex gap-3 shrink-0">
          <button onClick={onClose} className="flex-1 py-3 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all font-black text-xs uppercase tracking-wider cursor-pointer">Batal</button>
          <button onClick={onSubmit} className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#fcae1e] to-[#c77a00] text-[#FAF6EE] shadow-md shadow-[#c77a00]/30 font-black text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"><CheckCircle className="h-4 w-4" />Kirim ke Sidang</button>
        </div>
      </div>
    </div>
  );
}

// --- KOMPONEN UTAMA TAB ---
export default function ResolusiPBBTab({ selectedCountry }: { selectedCountry: any }) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [resType, setResType] = useState<string>("");
  const [resDuration, setResDuration] = useState<string>("");
  const [resTarget, setResTarget] = useState<CountryData | null>(null);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [allies, setAllies] = useState<CountryData[]>([]); 
  const [showSupportersModal, setShowSupportersModal] = useState(false);
  const [showOpponentsModal, setShowOpponentsModal] = useState(false);

  useEffect(() => {
    if (COUNTRIES_DATA && Array.isArray(COUNTRIES_DATA)) {
      const formatted: CountryData[] = COUNTRIES_DATA.filter((c: any) => c.country && c.iso).map((c: any) => ({ id: c.id, name: formatCountryName(c.country), iso: c.iso.toLowerCase() }));
      setCountries(formatted);
    }
  }, []);

  return (
    <div className="space-y-4 relative">
      <div className="bg-white/70 border border-[#C4B49C]/30 p-10 rounded-xl shadow-sm flex flex-col items-center justify-center text-center space-y-4 min-h-[300px]">
        <div className="p-3 rounded-full bg-[#5c3c10]/10 border border-[#5c3c10]/20"><FileText className="h-8 w-8 text-[#5c3c10]" /></div>
        <div><h3 className="text-lg font-black text-[#5c3c10] uppercase tracking-tight">Belum Ada Resolusi Aktif</h3><p className="text-xs text-[#8b7e66] mt-1 max-w-md">Mulailah dengan mengajukan rancangan resolusi baru untuk dibahas oleh negara-negara anggota Majelis Umum.</p></div>
        <button onClick={() => setShowCreateModal(true)} className="mt-4 px-8 py-4 rounded-xl bg-gradient-to-b from-[#ffe07d] via-[#fcae1e] to-[#c77a00] text-[#5c3c10] border-2 border-[#1e2f3d]/15 shadow-lg shadow-[#fcae1e]/20 text-sm font-black uppercase tracking-wider flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer"><Plus className="h-5 w-5" /> Buat Resolusi Baru</button>
      </div>
      <AjuanResolusiModal isOpen={showCreateModal} onClose={() => setShowCreateModal(false)} resType={resType} setResType={setResType} resDuration={resDuration} setResDuration={setResDuration} resTarget={resTarget} setResTarget={setResTarget} isCountryDropdownOpen={isCountryDropdownOpen} setIsCountryDropdownOpen={setIsCountryDropdownOpen} dropdownRef={dropdownRef} countries={countries} allies={allies} onSubmit={() => { alert("Form submitted"); setShowCreateModal(false); }} voteStats={{}} renderFlag={renderFlag} onShowSupporters={() => setShowSupportersModal(true)} onShowOpponents={() => setShowOpponentsModal(true)} />
    </div>
  );
}