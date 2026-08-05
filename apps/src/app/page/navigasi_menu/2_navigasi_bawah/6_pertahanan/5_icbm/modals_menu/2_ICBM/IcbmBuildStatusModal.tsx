"use client"
import React, { useState } from "react";
import { X, Clock, ShieldCheck } from "lucide-react";

interface IcbmBuildStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  currentDate?: string | Date;
  onOpenDetail?: () => void;
}

const formatTanggalIndo = (dateStr: string | Date) => {
  const dateObj = typeof dateStr === "string" ? new Date(`${dateStr}T00:00:00`) : dateStr;
  if (!(dateObj instanceof Date) || isNaN(dateObj.getTime())) return String(dateStr);
  const day = dateObj.getDate();
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const month = monthNames[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  return `${day} ${month} ${year}`;
};

// 🔥 PERBAIKAN: Tambahkan onOpenDetail ke dalam destrukturisasi parameter
export default function IcbmBuildStatusModal({ 
  isOpen, 
  onClose, 
  countryDetail, 
  currentDate, 
  onOpenDetail 
}: IcbmBuildStatusModalProps) {
  if (!isOpen) return null;

  const safeDateString = (() => {
    if (!currentDate) return formatTanggalIndo(new Date());
    if (typeof currentDate === 'string') return currentDate;
    if (currentDate instanceof Date && !isNaN(currentDate.getTime())) return currentDate.toISOString().slice(0, 10);
    return formatTanggalIndo(new Date());
  })();

  const icbmBuildTask = countryDetail?.icbmBuildTask || null;
  const currentIcbmCount = Number(countryDetail?.icbm) || 0;
  const buildTasks = Array.isArray(icbmBuildTask) ? icbmBuildTask : icbmBuildTask ? [icbmBuildTask] : [];

  const parseDate = (dateValue: string | Date | null | undefined) => {
    if (!dateValue) return null;
    const dateObj = typeof dateValue === 'string' ? new Date(`${dateValue}T00:00:00`) : dateValue;
    return dateObj instanceof Date && !isNaN(dateObj.getTime()) ? dateObj : null;
  };

  const getDurationDays = (start: string | Date | null | undefined, end: string | Date | null | undefined) => {
    const startDate = parseDate(start);
    const endDate = parseDate(end);
    if (!startDate || !endDate) return 0;
    const diff = Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

  const addDays = (date: Date, days: number) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const todayDate = parseDate(safeDateString);

  const scheduledEntries = (() => {
    let runningIndex = 0;
    return buildTasks.flatMap((task) => {
      const quantity = Math.max(0, Number(task?.quantity) || 0);
      const startDate = parseDate(task?.startDate) || todayDate || new Date();
      const endDate = parseDate(task?.endDate);
      const totalDurationDays = getDurationDays(startDate, endDate);
      const unitDurationDays = quantity > 0 ? Math.max(1, Math.round(totalDurationDays / quantity)) : 0;

      return Array.from({ length: quantity }, (_, idx) => {
        runningIndex += 1;
        const entryDuration = unitDurationDays * (idx + 1);
        const entryEndDate = startDate ? addDays(startDate, entryDuration) : null;

        return {
          id: `${task?.startDate || 'task'}-${idx}-${runningIndex}`,
          label: `ICBM ${runningIndex} selesai dalam ${entryDuration} hari`,
          amount: 1,
          endDate: entryEndDate,
        };
      });
    });
  })();

  const pendingEntries = scheduledEntries.filter((entry) => {
    if (!entry.endDate || !todayDate) return true;
    return entry.endDate >= todayDate;
  });

  const completedEntries = scheduledEntries.filter((entry) => {
    if (!entry.endDate || !todayDate) return false;
    return entry.endDate < todayDate;
  });

  const activeTabOptions = ['Dalam Pembangunan', 'Selesai'] as const;
  type ActiveTab = (typeof activeTabOptions)[number];
  const [activeTab, setActiveTab] = useState<ActiveTab>('Dalam Pembangunan');

  return (
    <div className="fixed inset-0 z-[92] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE]">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-[#5c3c10]" />
            <div>
              <h3 className="text-xl font-black text-[#5c3c10]">Status Pembangunan ICBM</h3>
              <p className="text-[11px] text-[#8b7e66] mt-1">Lihat jadwal penyelesaian dan jumlah ICBM yang sudah siap.</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 bg-[#FAF6EE]/40 flex-1 overflow-y-auto no-scrollbar">
          <div className="space-y-5">
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {activeTabOptions.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-5 py-2 text-sm font-black transition-all ${
                    activeTab === tab
                      ? 'bg-[#1d5c4b] text-[#FAF6EE] shadow-sm'
                      : 'bg-white/90 text-[#5c3c10] border border-[#C4B49C]/30 hover:bg-[#f4f1e1]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="rounded-2xl border border-[#C4B49C]/30 bg-white/90 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-[#C4B49C]/20 bg-[#f7f3e8]">
                <p className="text-xs font-black uppercase tracking-widest text-[#8b7e66]">{activeTab}</p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm text-[#5c3c10]">
                  <thead>
                    <tr className="bg-[#faf7ef]">
                      <th className="px-4 py-3 font-black uppercase tracking-wider text-[#8b7e66]">Keterangan</th>
                      <th className="px-4 py-3 font-black uppercase tracking-wider text-[#8b7e66]">Jumlah</th>
                      <th className="px-4 py-3 font-black uppercase tracking-wider text-[#8b7e66]">Selesai Pada</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeTab === 'Dalam Pembangunan' && pendingEntries.length === 0 && (
                      <tr className="border-t border-[#C4B49C]/20">
                        <td colSpan={3} className="px-4 py-5 text-[#8b7e66]">Tidak ada ICBM yang sedang dibangun.</td>
                      </tr>
                    )}
                    {activeTab === 'Dalam Pembangunan' && pendingEntries.map((entry) => (
                      <tr key={entry.id} className="border-t border-[#C4B49C]/20 hover:bg-[#f9f7ee]">
                        <td className="px-4 py-4 text-[#5c3c10]">{entry.label}</td>
                        <td className="px-4 py-4 font-black text-[#1d5c10]">{entry.amount}</td>
                        <td className="px-4 py-4 text-[#5c3c10]">{entry.endDate ? formatTanggalIndo(entry.endDate) : '-'}</td>
                      </tr>
                    ))}
                    {activeTab === 'Selesai' && (!completedEntries || completedEntries.length === 0) && (
                      <tr className="border-t border-[#C4B49C]/20">
                        <td colSpan={3} className="px-4 py-5 text-[#8b7e66]">Belum ada ICBM yang selesai.</td>
                      </tr>
                    )}
                    {activeTab === 'Selesai' && completedEntries && completedEntries.length > 0 && completedEntries.map((entry) => (
                      <tr key={`completed-${entry.id}`} className="border-t border-[#C4B49C]/20 hover:bg-[#f9f7ee]">
                        <td className="px-4 py-4 text-[#5c3c10]">{entry.label}</td>
                        <td className="px-4 py-4 font-black text-[#1d5c10]">{entry.amount}</td>
                        <td className="px-4 py-4 text-[#5c3c10]">{entry.endDate ? formatTanggalIndo(entry.endDate) : '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-2xl border border-[#C4B49C]/30 bg-white/90 p-5 shadow-sm">
              <div className="flex flex-col gap-3">
                <p className="text-xs font-black uppercase tracking-wide text-[#8b7e66] mb-2">Informasi tambahan</p>
                <p className="text-[13px] text-[#5c3c10] leading-relaxed">
                  Tabel tab pertama menampilkan daftar ICBM yang sedang dibangun. Tab kedua menyimpan total ICBM yang sudah selesai.
                </p>
                <button
                  onClick={onOpenDetail}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1d5c4b] px-4 py-2 text-sm font-black text-[#FAF6EE] shadow-sm hover:bg-[#154a3c] transition-all cursor-pointer"
                >
                  <Clock className="h-4 w-4" />
                  Lihat Detail Pembangunan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}