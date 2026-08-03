"use client"
import React, { useState, useEffect, useRef } from "react";
import { X, FileText, CheckCircle, ChevronDown, Users, ThumbsUp, ThumbsDown } from "lucide-react";

interface PengajuanResolusiProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  countries: any[];
  allies: any[];
  selectedCountry: any;
}

// Fungsi helper render bendera (sama dengan di file induk)
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

export default function PengajuanResolusiModal({
  isOpen,
  onClose,
  onSubmit,
  countries,
  allies,
  selectedCountry,
}: PengajuanResolusiProps) {
  // 🔥 State internal untuk form
  const [resType, setResType] = useState<string>("");
  const [resDuration, setResDuration] = useState<string>("");
  const [resTarget, setResTarget] = useState<any>(null);

  // 🔥 State untuk Dropdown Pilih Negara
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 🔥 Tutup dropdown saat klik di luar area
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isOpen) return null;

  // 🔥 LOGIKA PERHITUNGAN SUARA (Dipindahkan dari file induk)
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

  // 🔥 LOGIKA SUBMIT
  const handleSubmit = () => {
    if (!resType || !resDuration || !resTarget) {
      alert("Harap lengkapi Jenis Resolusi, Durasi, dan Negara Target!");
      return;
    }
    onSubmit({ resType, resDuration, resTarget, voteStats });
    // Reset form setelah submit
    setResType("");
    setResDuration("");
    setResTarget(null);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm pointer-events-none">
      {/* 🔥 UKURAN DIPERBESAR: max-w-6xl h-[84vh] flex flex-col */}
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative pointer-events-auto animate-in fade-in zoom-in-95 duration-150">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />

        {/* 🔥 HEADER (shrink-0) */}
        <div className="flex items-center justify-between px-8 py-6 border-b-2 border-[#C4B49C]/30 bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600/10 rounded-xl border border-blue-600/20">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#5c3c10] uppercase tracking-tight">Ajukan Resolusi Baru</h3>
              <p className="text-xs text-[#8b7e66] font-bold mt-0.5">Pilih jenis, durasi, dan target negara untuk resolusi Anda.</p>
            </div>
          </div>
          <button
            onClick={() => {
              setIsCountryDropdownOpen(false);
              onClose();
            }}
            className="p-2 rounded-lg hover:bg-black/5 text-[#8b7e66] hover:text-[#5c3c10] transition-colors cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* 🔥 BODY (flex-1 overflow-y-auto) */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar space-y-8">
          
          {/* 1. JENIS RESOLUSI */}
          <div>
            <p className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-3">Jenis Resolusi</p>
            <div className="grid grid-cols-2 gap-3">
              {['Larangan Perang', 'Embargo Penjualan Senjata', 'Embargo Ekonomi', 'Resolusi Invasi'].map((type) => (
                <button
                  key={type}
                  onClick={() => setResType(type)}
                  className={`py-3.5 px-4 rounded-xl border-2 text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
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
                  className={`flex-1 min-w-[80px] py-3 rounded-xl border-2 text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
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

          {/* 3. PILIH NEGARA TARGET */}
          <div>
            <p className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-3">Pilih Negara Target</p>
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border-2 bg-white transition-all cursor-pointer ${
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

          {/* 4. PRAKIRAAN SUARA */}
          {resTarget && (
            <div className="pt-6 border-t-2 border-[#C4B49C]/30">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-[#5c3c10]" />
                <p className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider">Prakiraan Suara (Berdasarkan Hubungan Dagang)</p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[160px] flex items-center justify-between gap-2 px-5 py-3 rounded-xl bg-emerald-600/10 border-2 border-emerald-600/30 text-emerald-700">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
                    <ThumbsUp className="h-5 w-5" />
                    Setuju
                  </div>
                  <span className="font-bold text-lg">{voteStats.supporters.length} Negara</span>
                </div>

                <div className="flex-1 min-w-[160px] flex items-center justify-between gap-2 px-5 py-3 rounded-xl bg-rose-600/10 border-2 border-rose-600/30 text-rose-700">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
                    <ThumbsDown className="h-5 w-5" />
                    Menolak
                  </div>
                  <span className="font-bold text-lg">{voteStats.opponents.length} Negara</span>
                </div>
              </div>
              <p className="text-[9px] text-[#8b7e66] font-bold mt-2">* Perhitungan berdasarkan status sekutu dagang negara target terhadap Anda.</p>
            </div>
          )}
        </div>

        {/* 🔥 FOOTER (shrink-0) */}
        <div className="flex items-center justify-end gap-4 px-8 py-6 border-t-2 border-[#C4B49C]/30 bg-[#FAF6EE] relative z-10 shrink-0">
          <button
            onClick={() => {
              setIsCountryDropdownOpen(false);
              onClose();
            }}
            className="px-8 py-3 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all font-black text-xs uppercase tracking-wider cursor-pointer"
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#fcae1e] to-[#c77a00] text-[#FAF6EE] shadow-md shadow-[#c77a00]/30 font-black text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <CheckCircle className="h-4 w-4" />
            Kirim ke Sidang
          </button>
        </div>
      </div>
    </div>
  );
}