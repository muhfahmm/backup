"use client"
import React from "react";
import { X, FileText, CheckCircle, ChevronDown, Users, ThumbsUp, ThumbsDown } from "lucide-react";

interface VotingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon: React.ReactNode;
  iconColorClass: string;
  countLabel: string;
  countries: any[];
  renderFlag: (iso: string | undefined, altName: string, size?: "sm" | "md") => React.ReactNode;
}

interface AjuanResolusiModalProps {
  isOpen: boolean;
  onClose: () => void;
  resType: string;
  setResType: (val: string) => void;
  resDuration: string;
  setResDuration: (val: string) => void;
  resTarget: any;
  setResTarget: (val: any) => void;
  isCountryDropdownOpen: boolean;
  setIsCountryDropdownOpen: (val: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  countries: any[];
  allies: any[];
  onSubmit: () => void;
  voteStats: { supporters: any[]; opponents: any[] };
  renderFlag: (iso: string | undefined, altName: string, size?: "sm" | "md") => React.ReactNode;
  onShowSupporters: () => void;
  onShowOpponents: () => void;
}

// --- MODAL VOTING (Daftar Setuju / Menolak) ---
export function VotingListModal({
  isOpen,
  onClose,
  title,
  icon,
  iconColorClass,
  countLabel,
  countries,
  renderFlag,
}: VotingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className={`bg-[#FAF6EE] border-4 ${iconColorClass} rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col pointer-events-auto`}>
        {/* HEADER */}
        <div className="flex items-center justify-between px-8 py-6 border-b-2 border-[#C4B49C]/30 bg-[#FAF6EE] shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-white/10 rounded-full border border-current/20">
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-[#5c3c10] uppercase tracking-tight">{title}</h3>
            <span className="ml-2 text-xs font-bold bg-black/10 px-3 py-1 rounded-full text-[#5c3c10]">
              {countLabel}
            </span>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5">
            <span className="text-[10px] font-black uppercase tracking-widest">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {countries.map((c) => (
              <div key={c.id} className="flex items-center gap-2 p-2 bg-white/50 border border-[#C4B49C]/20 rounded-lg">
                {renderFlag(c.iso, c.name, "sm")}
                <span className="text-[10px] font-bold text-[#5c3c10] truncate">{c.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="p-4 bg-[#FAF6EE] border-t-2 border-[#C4B49C]/20 shrink-0">
          <button onClick={onClose} className="px-8 py-3 rounded-xl bg-[#5c3c10] text-white text-xs font-black uppercase tracking-wider hover:bg-[#8b7e66] transition-all cursor-pointer">
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}

// --- MODAL AJUKAN RESOLUSI BARU ---
export default function AjuanResolusiModal({
  isOpen,
  onClose,
  resType,
  setResType,
  resDuration,
  setResDuration,
  resTarget,
  setResTarget,
  isCountryDropdownOpen,
  setIsCountryDropdownOpen,
  dropdownRef,
  countries,
  allies,
  onSubmit,
  voteStats,
  renderFlag,
  onShowSupporters,
  onShowOpponents,
}: AjuanResolusiModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col pointer-events-auto">
        
        {/* HEADER */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600/10 rounded-xl border border-blue-600/20">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Ajukan Resolusi Baru</h3>
              <p className="text-xs text-[#8b7e66] mt-1">Pilih jenis, durasi, dan target negara untuk resolusi Anda.</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5">
            <span className="text-[10px] font-black uppercase tracking-widest">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 space-y-6">
          <div className="space-y-6">
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

            {/* 3. PILIH NEGARA TARGET */}
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

            {/* PRAKIRAAN SUARA */}
            {resTarget && (
              <div className="pt-4 border-t border-[#C4B49C]/30">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="h-4 w-4 text-[#5c3c10]" />
                  <p className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider">Prakiraan Suara (Berdasarkan Hubungan Dagang)</p>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-3">
                  <button
                    onClick={onShowSupporters}
                    className="flex-1 min-w-[140px] flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-emerald-600/10 border-2 border-emerald-600/30 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
                      <ThumbsUp className="h-4 w-4" />
                      Setuju
                    </div>
                    <span className="font-bold">{voteStats.supporters.length} Negara</span>
                  </button>

                  <button
                    onClick={onShowOpponents}
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
        </div>

        {/* FOOTER */}
        <div className="p-4 bg-[#FAF6EE] border-t-2 border-[#C4B49C]/20 flex gap-3 shrink-0">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all font-black text-xs uppercase tracking-wider cursor-pointer"
          >
            Batal
          </button>
          <button
            onClick={onSubmit}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#fcae1e] to-[#c77a00] text-[#FAF6EE] shadow-md shadow-[#c77a00]/30 font-black text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <CheckCircle className="h-4 w-4" />
            Kirim ke Sidang
          </button>
        </div>
      </div>
    </div>
  );
}