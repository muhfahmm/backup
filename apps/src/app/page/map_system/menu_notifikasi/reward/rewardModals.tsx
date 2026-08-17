'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Gift, X, Check, Lock, Zap, RotateCcw } from 'lucide-react';

// ----------------------------------------------------------------------
// Reward data per hari (1–7)
// ----------------------------------------------------------------------
const DAILY_REWARDS = [100, 200, 300, 400, 500, 600, 1000];
const WEEKLY_BONUS = 5000; // Bonus besar jika menyelesaikan 7 hari berturut-turut

// ----------------------------------------------------------------------
// Helper: tanggal dalam format YYYY-MM-DD
// ----------------------------------------------------------------------
const getToday = (): string => new Date().toISOString().slice(0, 10);

const getYesterday = (): string => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
};

// ----------------------------------------------------------------------
// Interface props
// ----------------------------------------------------------------------
interface TopRightGiftIconProps {
  onClick?: () => void;
  isOpen?: boolean;
  onClose?: () => void;
}

// ----------------------------------------------------------------------
// Komponen utama
// ----------------------------------------------------------------------
export default function TopRightGiftIcon({ onClick, isOpen, onClose }: TopRightGiftIconProps) {
  // --------------------------------------------------------------------
  // State
  // --------------------------------------------------------------------
  const [currentDay, setCurrentDay] = useState<number>(1);
  const [claimedToday, setClaimedToday] = useState<boolean>(false);
  const [lastClaimDate, setLastClaimDate] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // --------------------------------------------------------------------
  // Load & update status dari localStorage setiap kali komponen mount
  // atau hari berganti
  // --------------------------------------------------------------------
  const loadRewardStatus = useCallback(() => {
    const stored = localStorage.getItem('dailyRewardData');
    const today = getToday();

    // Default jika belum ada data
    let day = 1;
    let claimed = false;
    let lastDate: string | null = null;

    if (stored) {
      try {
        const data = JSON.parse(stored);
        day = data.currentDay ?? 1;
        lastDate = data.lastClaimDate ?? null;
        claimed = data.claimedToday ?? false;

        // Cek apakah lastClaimDate adalah hari ini
        if (lastDate === today) {
          // Sudah klaim hari ini -> claimedToday = true
          claimed = true;
        } else if (lastDate === getYesterday()) {
          // Kemarin klaim, hari ini belum klaim
          claimed = false;
          // Jika kemarin adalah hari ke-7, maka hari ini reset ke 1
          if (day === 7) {
            day = 1;
          } else {
            day = day + 1; // maju satu hari
          }
        } else {
          // Terakhir klaim lebih dari 1 hari yang lalu → reset
          day = 1;
          claimed = false;
          lastDate = null;
        }
      } catch (e) {
        // Data rusak, reset
        day = 1;
        claimed = false;
        lastDate = null;
      }
    }

    // Simpan state yang sudah diperbarui
    setCurrentDay(day);
    setClaimedToday(claimed);
    setLastClaimDate(lastDate);
    setIsLoading(false);

    // Simpan kembali ke localStorage agar konsisten
    localStorage.setItem(
      'dailyRewardData',
      JSON.stringify({
        currentDay: day,
        lastClaimDate: lastDate,
        claimedToday: claimed,
      })
    );
  }, []);

  // Panggil saat mount dan setiap kali hari berganti (deteksi midnight)
  useEffect(() => {
    loadRewardStatus();

    // Opsional: cek setiap menit untuk mendeteksi pergantian hari
    const interval = setInterval(() => {
      const stored = localStorage.getItem('dailyRewardData');
      if (stored) {
        try {
          const data = JSON.parse(stored);
          const today = getToday();
          // Jika tanggal tersimpan berbeda dengan hari ini, reload
          if (data.lastClaimDate && data.lastClaimDate !== today) {
            loadRewardStatus();
          }
        } catch (e) {
          // ignore
        }
      }
    }, 60000); // 1 menit

    return () => clearInterval(interval);
  }, [loadRewardStatus]);

  // --------------------------------------------------------------------
  // Fungsi klaim hadiah
  // --------------------------------------------------------------------
  const handleClaim = () => {
    if (claimedToday) return; // sudah klaim hari ini

    const today = getToday();
    let newDay = currentDay;
    let newClaimed = true;
    let bonusMessage = '';

    // Tentukan reward yang didapat
    const reward = DAILY_REWARDS[currentDay - 1];

    // Jika ini hari ke-7, berikan bonus mingguan
    if (currentDay === 7) {
      bonusMessage = `🎉 Bonus Mingguan +${WEEKLY_BONUS} koin!`;
      newDay = 1; // reset ke hari 1
    } else {
      newDay = currentDay + 1;
    }

    // Update state
    setCurrentDay(newDay);
    setClaimedToday(true);
    setLastClaimDate(today);

    // Simpan ke localStorage
    localStorage.setItem(
      'dailyRewardData',
      JSON.stringify({
        currentDay: newDay,
        lastClaimDate: today,
        claimedToday: true,
      })
    );

    // Tampilkan notifikasi
    alert(`🎁 Anda mendapatkan ${reward} koin!${bonusMessage ? '\n' + bonusMessage : ''}`);
  };

  // --------------------------------------------------------------------
  // Fungsi reset (manual) – akan mengembalikan ke default
  // --------------------------------------------------------------------
  const handleReset = () => {
    const confirmReset = window.confirm(
      'Apakah Anda yakin ingin mereset semua progres hadiah harian? Data akan kembali ke hari pertama.'
    );
    if (!confirmReset) return;

    // Reset state ke default
    setCurrentDay(1);
    setClaimedToday(false);
    setLastClaimDate(null);

    // Hapus data dari localStorage
    localStorage.removeItem('dailyRewardData');

    alert('Progres hadiah harian telah direset.');
  };

  // --------------------------------------------------------------------
  // Render jika loading
  // --------------------------------------------------------------------
  if (isLoading) {
    return (
      <button
        onClick={onClick}
        title="Hadiah - Bonus dan Reward"
        className="fixed top-24 right-7 z-[100] w-14 h-14 rounded-full bg-gradient-to-b from-pink-300 via-pink-400 to-pink-600 border-3 border-pink-800 shadow-[0_4px_12px_rgba(0,0,0,0.3)] flex items-center justify-center cursor-default opacity-70"
      >
        <Gift className="w-7 h-7 text-pink-900 animate-pulse" />
      </button>
    );
  }

  // --------------------------------------------------------------------
  // Render tombol & modal
  // --------------------------------------------------------------------
  return (
    <>
      {/* Tombol hadiah di pojok kanan atas */}
      <button
        onClick={onClick}
        title="Hadiah - Bonus dan Reward"
        className="fixed top-24 right-7 z-[100] w-14 h-14 rounded-full bg-gradient-to-b from-pink-300 via-pink-400 to-pink-600 border-3 border-pink-800 shadow-[0_4px_12px_rgba(0,0,0,0.3)] flex items-center justify-center cursor-pointer hover:brightness-120 hover:scale-110 active:scale-95 transition-all group"
      >
        <Gift className="w-7 h-7 text-pink-900 font-bold transition-transform group-hover:scale-125" />
        {!claimedToday && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            !
          </span>
        )}
      </button>

      {/* Modal Hadiah */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
          <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

            {/* ---- HEADER ---- */}
            <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-rose-600/10 rounded-xl border border-rose-600/20">
                  <Gift className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-[#5c3c10] tracking-tight leading-none uppercase">
                    Hadiah Harian
                  </h2>
                  <p className="text-xs text-[#8b7e66] font-medium">
                    Klaim setiap hari & dapatkan bonus mingguan!
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
              >
                <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* ---- BODY (GRID HARIAN) ---- */}
            <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar flex flex-col items-center justify-start">
              {/* Informasi hari ini */}
              <div className="w-full max-w-4xl mb-6 text-center">
                <p className="text-sm text-[#8b7e66]">
                  Hari ke-{currentDay} dari 7
                  {claimedToday
                    ? ' ✅ Sudah diklaim hari ini'
                    : ' ⏳ Klik kotak hari ini untuk klaim!'}
                </p>
              </div>

              {/* Grid 7 hari */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full max-w-4xl">
                {DAILY_REWARDS.map((reward, index) => {
                  const day = index + 1;
                  const isPast = day < currentDay;
                  const isToday = day === currentDay;
                  const isFuture = day > currentDay;
                  const isClaimed = isPast || (isToday && claimedToday);

                  let statusIcon = null;
                  let statusColor = '';
                  let borderColor = '';
                  let bgColor = 'bg-[#FAF6EE]';
                  let cursor = 'cursor-default';
                  let onClickHandler = undefined;

                  if (isClaimed) {
                    // Sudah diklaim
                    statusIcon = <Check className="h-6 w-6 text-green-600" />;
                    statusColor = 'text-green-600';
                    borderColor = 'border-green-400';
                    bgColor = 'bg-green-50';
                  } else if (isToday && !claimedToday) {
                    // Hari ini, bisa diklaim
                    statusIcon = <Zap className="h-6 w-6 text-amber-500 animate-pulse" />;
                    statusColor = 'text-amber-500';
                    borderColor = 'border-amber-400';
                    bgColor = 'bg-amber-50';
                    cursor = 'cursor-pointer';
                    onClickHandler = handleClaim;
                  } else if (isFuture) {
                    // Belum terbuka
                    statusIcon = <Lock className="h-6 w-6 text-gray-400" />;
                    statusColor = 'text-gray-400';
                    borderColor = 'border-gray-300';
                    bgColor = 'bg-gray-100';
                  }

                  return (
                    <div
                      key={day}
                      onClick={onClickHandler}
                      className={`
                        relative flex flex-col items-center justify-center p-4 rounded-xl border-2 
                        ${borderColor} ${bgColor} ${cursor}
                        transition-all duration-200
                        ${isToday && !claimedToday ? 'hover:scale-105 hover:shadow-lg' : ''}
                      `}
                    >
                      {/* Nomor hari */}
                      <span className="text-xs font-bold text-[#8b7e66] uppercase tracking-wider">
                        Hari {day}
                      </span>

                      {/* Reward amount */}
                      <span className="text-lg font-black text-[#5c3c10] mt-1">
                        {reward}
                        <span className="text-sm font-medium text-[#8b7e66] ml-1">koin</span>
                      </span>

                      {/* Status icon */}
                      <div className={`mt-2 ${statusColor}`}>{statusIcon}</div>

                      {/* Label tambahan untuk hari ini */}
                      {isToday && !claimedToday && (
                        <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                          Klaim!
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bonus mingguan info */}
              <div className="mt-8 text-center max-w-md">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100/50 rounded-full border border-rose-200/50 text-rose-700 text-xs">
                  <Zap className="h-4 w-4" />
                  <span>
                    Selesaikan 7 hari berturut-turut dan dapatkan{' '}
                    <span className="font-black">+{WEEKLY_BONUS} koin</span> bonus!
                  </span>
                </div>
              </div>
            </div>

            {/* ---- FOOTER ---- */}
            <div className="p-4 bg-[#FAF6EE] border-t-2 border-[#C4B49C]/20 flex justify-between items-center relative z-10 shrink-0">
              {/* Tombol Reset (manual) */}
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-red-300 bg-red-50/50 text-red-600 hover:bg-red-100 hover:border-red-400 transition-all font-medium text-xs uppercase tracking-wider cursor-pointer"
                title="Reset progres hadiah harian ke awal"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </button>

              <button
                onClick={onClose}
                className="px-8 py-3 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all font-black text-xs uppercase tracking-wider cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}