"use client"
import React, { useEffect, useState } from "react";
import { X, Shield, Atom, Rocket, Bomb } from "lucide-react";
import ProgramNuklirModals from "./modals_menu/1_program_nuklir/programNuklirModals";
import IcbmDetailModal from "./modals_menu/2_ICBM/IcbmDetailModal";
import PerangNuklirDetailModal from "./modals_menu/3_perang_nuklir/PerangNuklirDetailModal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentDate?: string | Date;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
  onOpenDebt?: () => void;
}

export default function IcbmModal({ isOpen, onClose, currentDate, countryDetail, setCountryDetail, onOpenDebt }: ModalProps) {
  if (!isOpen) return null;

  const formatDateString = (date?: string | Date) => {
    if (!date) return "";
    if (typeof date === "string") return date;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // 🔥 FUNGSI UNTUK MEMFORMAT TANGGAL MENJADI 1-jan-2026
  const formatTanggalIndo = (dateStr: string | null | undefined) => {
    if (!dateStr) return "";
    // Karena format default tanggal adalah YYYY-MM-DD, kita ubah menjadi objek Date
    const dateObj = new Date(dateStr + 'T00:00:00');
    if (isNaN(dateObj.getTime())) return dateStr;

    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const monthNames = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'ags', 'sep', 'okt', 'nov', 'des'];
    const month = monthNames[dateObj.getMonth()];
    
    return `${day}-${month}-${year}`;
  };

  const safeCurrentDate = formatDateString(currentDate) || formatDateString(new Date());

  const ongoingConstructions = countryDetail?.ongoingConstructions || [];
  const programBuildTask = ongoingConstructions.find((c: any) => c.buildingKey === "program_nuklir");
  const currentDateObj = new Date(`${safeCurrentDate}T00:00:00`);
  const buildEndDateObj = programBuildTask ? new Date(`${programBuildTask.endDate}T00:00:00`) : null;
  const buildCompleted = buildEndDateObj ? buildEndDateObj <= currentDateObj : false;
  const isNuclearProgramActive = Boolean(countryDetail?.programNuklirActive) || buildCompleted;
  const isNuclearProgramBuilding = Boolean(programBuildTask) && !buildCompleted;
  const buildEndDate = programBuildTask?.endDate || null;

  useEffect(() => {
    if (!isNuclearProgramActive && buildCompleted && programBuildTask) {
      setCountryDetail((prev: any) => {
        const ongoing = prev?.ongoingConstructions || [];
        return {
          ...prev,
          programNuklirActive: true,
          ongoingConstructions: ongoing.filter((c: any) => c.buildingKey !== "program_nuklir"),
        };
      });
    }
  }, [buildCompleted, isNuclearProgramActive, programBuildTask, setCountryDetail]);

  const status = (() => {
    if (isNuclearProgramActive) {
      return {
        isActive: true,
        message: "PROGRAM NUKLIR TELAH AKTIF",
        color: "text-emerald-700 border-emerald-600/30 bg-emerald-500/5",
      };
    }
    if (isNuclearProgramBuilding) {
      return {
        isActive: false,
        message: "PROGRAM NUKLIR DALAM PEMBANGUNAN",
        color: "text-amber-700 border-amber-600/30 bg-amber-500/5",
      };
    }
    return {
      isActive: false,
      message: "PROGRAM NUKLIR BELUM AKTIF",
      color: "text-rose-700 border-rose-600/30 bg-rose-500/5",
    };
  })();

  // 🔥 State untuk modal pembayaran program nuklir
  const [isProgramNuklirModalOpen, setIsProgramNuklirModalOpen] = useState(false);
  const [isIcbmDetailOpen, setIsIcbmDetailOpen] = useState(false);
  const [isPerangNuklirDetailOpen, setIsPerangNuklirDetailOpen] = useState(false);

  // Daftar 3 opsi strategi nuklir
  const nuclearOptions = [
    {
      id: 1,
      title: "Program Nuklir",
      icon: Atom,
      color: "text-yellow-600",
      bg: "bg-yellow-100",
      desc: "Mempercepat riset pengayaan uranium untuk membangun hulu ledak nuklir pertama.",
      isUnlocker: true 
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

  // 🔥 Handler aksi (TANPA ALERT SAMA SEKALI)
  const handleOptionClick = (option: typeof nuclearOptions[0]) => {
    if (!option.isUnlocker && !isNuclearProgramActive) {
      return;
    }

    if (option.isUnlocker) {
      if (isNuclearProgramActive) return;
      setIsProgramNuklirModalOpen(true);
      return;
    }

    if (option.id === 2) {
      setIsIcbmDetailOpen(true);
      return;
    }

    if (option.id === 3) {
      setIsPerangNuklirDetailOpen(true);
      return;
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
                  {!isNuclearProgramActive && !isNuclearProgramBuilding && (
                    <p className="text-[10px] text-[#8b7e66]">Klik kartu "Program Nuklir" untuk membuka akses</p>
                  )}
                  {isNuclearProgramBuilding && (
                    <p className="text-[10px] text-amber-700 font-bold">
                      Dalam tahap pembangunan hingga {formatTanggalIndo(buildEndDate)}
                    </p>
                  )}
                  {isNuclearProgramActive && (
                    <p className="text-[10px] text-emerald-700 font-bold">🎯 Sistem Siap Meluncur!</p>
                  )}
                </div>
              </div>
            </div>

            {/* 🔥 GRID 3 KARTU STRATEGI */}
            <div className="grid grid-cols-3 gap-6">
              {nuclearOptions.map((option) => {
                const Icon = option.icon;
                const isLockedCard = !option.isUnlocker && !isNuclearProgramActive;
                const isUnlockerCardActive = option.isUnlocker && isNuclearProgramActive;
                const isUnlockerBuilding = option.isUnlocker && isNuclearProgramBuilding;

                return (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option)}
                    disabled={isLockedCard || isUnlockerCardActive || isUnlockerBuilding}
                    className={`group flex flex-col items-center text-center p-6 bg-white/80 border-2 rounded-xl shadow-sm transition-all duration-200 h-full ${
                      isLockedCard
                        ? 'border-[#C4B49C]/20 opacity-60 !cursor-not-allowed grayscale-[50%]'
                        : isUnlockerCardActive
                        ? 'border-emerald-400/50 bg-emerald-50/50 cursor-default hover:shadow-sm hover:scale-100'
                        : 'border-[#C4B49C]/40 hover:shadow-lg hover:border-[#5c3c10] hover:scale-[1.02] active:scale-[0.98] cursor-pointer'
                    }`}
                  >
                    <div className={`p-4 rounded-full ${
                        isUnlockerCardActive ? 'bg-emerald-100 border-emerald-200' : option.bg
                      } border-2 ${option.color}/20 mb-4 ${
                        isLockedCard || isUnlockerCardActive ? '' : 'group-hover:scale-110 transition-transform'
                      }`}
                    >
                      {isUnlockerCardActive ? (
                        <div className="w-12 h-12 text-emerald-700 flex items-center justify-center">
                          <span className="text-3xl">✔️</span>
                        </div>
                      ) : (
                        <Icon className={`w-12 h-12 ${isLockedCard ? 'text-[#8b7e66]' : option.color}`} />
                      )}
                    </div>
                    
                    <span className={`text-base font-black uppercase tracking-wide mb-2 ${
                      isLockedCard ? 'text-[#8b7e66]' : isUnlockerCardActive ? 'text-emerald-700' : 'text-[#5c3c10]'
                    }`}>
                      {isUnlockerCardActive ? "Program Aktif!" : option.title}
                    </span>
                    
                    <p className={`text-[10px] leading-relaxed ${
                      isLockedCard ? 'text-[#C4B49C]/70' : isUnlockerCardActive ? 'text-emerald-600' : 'text-[#8b7e66]'
                    }`}>
                      {isLockedCard 
                        ? "🔒 Terkunci. Aktifkan Program Nuklir terlebih dahulu." 
                        : isUnlockerCardActive 
                        ? "Program nuklir telah diaktifkan. Kini Anda dapat mengakses ICBM dan Perang Nuklir."
                        : isUnlockerBuilding
                        ? "Program nuklir sedang dibangun. Tunggu hingga selesai untuk membuka ICBM dan Perang Nuklir."
                        : option.desc
                      }
                    </p>
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {/* 🔥 Panggil Modal Pembayaran Program Nuklir */}
      <ProgramNuklirModals 
        isOpen={isProgramNuklirModalOpen}
        onClose={() => setIsProgramNuklirModalOpen(false)}
        currentDate={currentDate}
        countryDetail={countryDetail}
        setCountryDetail={setCountryDetail}
        onTakeLoan={onOpenDebt}
      />

      <IcbmDetailModal
        isOpen={isIcbmDetailOpen}
        onClose={() => setIsIcbmDetailOpen(false)}
      />

      <PerangNuklirDetailModal
        isOpen={isPerangNuklirDetailOpen}
        onClose={() => setIsPerangNuklirDetailOpen(false)}
      />
    </div>
  );
}