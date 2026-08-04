"use client"
import React from "react";
import { X, Shield, Atom, Rocket, Bomb } from "lucide-react";
import { useIcbmLogic } from "./icbmLogic";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
}

export default function IcbmModal({ isOpen, onClose, countryDetail, setCountryDetail }: ModalProps) {
  if (!isOpen) return null;

  // 🔥 Ambil logika dari file icbmLogic.ts
  const { isNuclearProgramActive, activateNuclearProgram, getProgramStatus } = useIcbmLogic();
  const status = getProgramStatus();

  // Daftar 3 opsi strategi nuklir
  const nuclearOptions = [
    {
      id: 1,
      title: "Program Nuklir",
      icon: Atom,
      color: "text-yellow-600",
      bg: "bg-yellow-100",
      desc: "Mempercepat riset pengayaan uranium untuk membangun hulu ledak nuklir pertama.",
      isUnlocker: true // Kartu yang berfungsi membuka akses
    },
    {
      id: 2,
      title: "ICBM",
      icon: Rocket,
      color: "text-rose-700",
      bg: "bg-rose-100",
      desc: "Mengaktifkan silo rudal balistik antarbenua untuk mencapai target di benua mana pun.",
      isUnlocker: false
    },
    {
      id: 3,
      title: "Perang Nuklir",
      icon: Bomb,
      color: "text-orange-600",
      bg: "bg-orange-100",
      desc: "Mendeklarasikan serangan nuklir pertama. Ini akan memicu bencana global yang tak terbayangkan.",
      isUnlocker: false
    }
  ];

  // Handler aksi untuk setiap kartu
  const handleOptionClick = (option: typeof nuclearOptions[0]) => {
    if (!option.isUnlocker && !isNuclearProgramActive) {
      // Jika mencoba klik yang terkunci
      alert("Anda harus mengaktifkan Program Nuklir terlebih dahulu!");
      return;
    }

    if (option.isUnlocker) {
      // Jika mengklik Program Nuklir
      const success = activateNuclearProgram();
      if (success) {
        alert("✅ Program Nuklir berhasil diaktifkan! Sekarang Anda dapat mengakses ICBM & Perang Nuklir.");
      } else {
        alert("Program Nuklir sudah aktif.");
      }
    } else {
      // Aksi untuk ICBM atau Perang Nuklir
      alert(`Anda memilih opsi strategis: ${option.title}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">

      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-rose-700 animate-pulse" />
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Komando Strategis Nuklir</h2>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8b7e66] mt-1">Pilih opsi persenjataan berat Anda</p>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="flex-1 min-h-0 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar flex flex-col items-center">
          <div className="w-full max-w-4xl space-y-6">

            {/* 🔥 KOTAK STATUS PROGRAM NUKLIR */}
            <div className="p-6 rounded-2xl bg-[#FAF6EE] border-2 border-[#C4B49C]/50 shadow-inner">
              <p className="text-center text-[10px] font-black text-[#8b7e66] uppercase tracking-wider mb-3">
                STATUS PENGEMBANGAN SENJATA NUKLIR
              </p>
              <div className="flex justify-center items-center gap-4">
                <div className={`px-6 py-3 rounded-xl border-2 ${status.color} shadow-sm min-w-[200px] text-center transition-colors duration-300`}>
                  <p className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${status.color.split(' ')[0]}`}>
                    {status.message}
                  </p>
                  {!isNuclearProgramActive && (
                    <p className="text-[10px] text-[#8b7e66]">Klik kartu "Program Nuklir" untuk membuka akses</p>
                  )}
                  {isNuclearProgramActive && (
                    <p className="text-[10px] text-emerald-700 font-bold">🎯 Sistem Siap Meluncur!</p>
                  )}
                </div>
              </div>
            </div>

            {/* 🔥 GRID 3 KARTU */}
            <div className="grid grid-cols-3 gap-6">
              {nuclearOptions.map((option) => {
                const Icon = option.icon;
                const isLocked = !option.isUnlocker && !isNuclearProgramActive;

                return (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option)}
                    disabled={isLocked}
                    className={`group flex flex-col items-center text-center p-6 bg-white/80 border-2 rounded-xl shadow-sm transition-all duration-200 h-full ${isLocked
                        ? 'border-[#C4B49C]/20 opacity-60 !cursor-not-allowed grayscale-[50%]'
                        : 'border-[#C4B49C]/40 hover:shadow-lg hover:border-[#5c3c10] hover:scale-[1.02] active:scale-[0.98] cursor-pointer'
                      }`}
                  >
                    <div className={`p-4 rounded-full ${option.bg} border-2 ${option.color}/20 mb-4 ${isLocked ? '' : 'group-hover:scale-110 transition-transform'}`}>
                      <Icon className={`w-12 h-12 ${isLocked ? 'text-[#8b7e66]' : option.color}`} />
                    </div>
                    <span className={`text-base font-black uppercase tracking-wide mb-2 ${isLocked ? 'text-[#8b7e66]' : 'text-[#5c3c10]'}`}>
                      {option.title}
                    </span>
                    <p className={`text-[10px] leading-relaxed ${isLocked ? 'text-[#C4B49C]/70' : 'text-[#8b7e66]'}`}>
                      {isLocked ? "🔒 Terkunci. Aktifkan Program Nuklir terlebih dahulu." : option.desc}
                    </p>
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}