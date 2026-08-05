"use client"
import React from "react";
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
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'];
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
  const pendingQuantity = Number(icbmBuildTask?.quantity || 0);
  const buildEndDate = icbmBuildTask?.endDate || null;
  const hasPendingBuild = Boolean(icbmBuildTask && pendingQuantity > 0 && buildEndDate);
  const buildStatus = hasPendingBuild ? 'Sedang dibangun' : 'Tidak ada ICBM dalam pembangunan';

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

        <div className="p-6 bg-[#FAF6EE]/40">
          <div className="grid gap-4">
            <div className="rounded-2xl border border-[#C4B49C]/30 bg-white/90 p-5 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#8b7e66]">Status Pembangunan</p>
                  <p className="text-sm font-black text-[#5c3c10]">{buildStatus}</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700">
                  <Clock className="h-4 w-4" />
                  {hasPendingBuild ? 'Sedang berjalan' : 'Tidak aktif'}
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm text-[#5c3c10]">
                  <thead>
                    <tr>
                      <th className="px-3 py-2 font-black uppercase text-[#8b7e66] tracking-wider">Keterangan</th>
                      <th className="px-3 py-2 font-black uppercase text-[#8b7e66] tracking-wider">Jumlah</th>
                      <th className="px-3 py-2 font-black uppercase text-[#8b7e66] tracking-wider">Selesai Pada</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-[#C4B49C]/20">
                      <td className="px-3 py-3 text-[#5c3c10]">ICBM sedang dibangun</td>
                      <td className="px-3 py-3 font-black text-[#1d5c10]">{pendingQuantity > 0 ? `+${pendingQuantity}` : '0'}</td>
                      <td className="px-3 py-3 text-[#5c3c10]">{hasPendingBuild ? formatTanggalIndo(buildEndDate) : '-'}</td>
                    </tr>
                    <tr className="border-t border-[#C4B49C]/20 bg-[#f9faf7]">
                      <td className="px-3 py-3 text-[#5c3c10]">ICBM selesai</td>
                      <td className="px-3 py-3 font-black text-[#1d5c10]">{currentIcbmCount}</td>
                      <td className="px-3 py-3 text-[#5c3c10]">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="rounded-2xl border border-[#C4B49C]/30 bg-white/90 p-5 shadow-sm">
              <div className="flex flex-col gap-3">
                <p className="text-xs font-black uppercase tracking-wide text-[#8b7e66] mb-2">Informasi tambahan</p>
                <p className="text-[13px] text-[#5c3c10] leading-relaxed">
                  Gunakan tabel ini untuk melihat data ICBM yang sedang diproduksi dan jumlah persenjataan yang sudah siap.
                  Jika terdapat proyek pembangunan aktif, modal ini akan menampilkan estimasi tanggal selesai.
                </p>
                <button
                  onClick={onOpenDetail} // 🔥 Sekarang berfungsi karena onOpenDetail sudah dideklarasi di parameter
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