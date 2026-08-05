"use client"

import React from "react";

interface TabelSelesaiProps {
  entries: Array<{ id: string; label: string; amount: number; endDate: Date | null }>;
}

export const formatTanggalIndo = (dateStr: string | Date | null) => {
  if (!dateStr) return "-";
  const dateObj = typeof dateStr === "string" ? new Date(`${dateStr}T00:00:00`) : dateStr;
  if (!(dateObj instanceof Date) || isNaN(dateObj.getTime())) return String(dateStr);
  const day = dateObj.getDate();
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const month = monthNames[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  return `${day} ${month} ${year}`;
};

export default function TabelSelesai({ entries }: TabelSelesaiProps) {
  // 🔥 EMPTY STATE (Sama seperti TabelDalamPembangunan)
  if (entries.length === 0) {
    return (
      <div className="p-8 text-center text-sm font-bold text-[#8b7e66] bg-white">
        Belum ada ICBM yang selesai.
      </div>
    );
  }

  return (
    <table className="w-full text-xs bg-white">
      {/* 🔥 HEADER COKLAT (Sama persis) */}
      <thead className="bg-[#5c3c10] text-[#FAF6EE]">
        <tr>
          <th className="px-4 py-3 text-left font-black uppercase tracking-wider">No</th>
          <th className="px-4 py-3 text-left font-black uppercase tracking-wider">Keterangan</th>
          <th className="px-4 py-3 text-left font-black uppercase tracking-wider">Selesai Pada</th>
        </tr>
      </thead>
      {/* 🔥 BODY DENGAN DIVIDER & HOVER COKLAT MUDA */}
      <tbody className="divide-y divide-[#C4B49C]/20">
        {entries.map((entry, idx) => (
          <tr key={entry.id} className="hover:bg-[#e4dac3]/20 transition-colors">
            <td className="px-4 py-3 font-bold text-[#5c3c10]">{idx + 1}</td>
            {/* 🔥 Tampilkan label yang sudah dibersihkan dari kata durasi */}
            <td className="px-4 py-3 font-bold text-[#5c3c10]">
              {entry.label.replace(/ selesai dalam \d+ hari/, '')}
            </td>
            <td className="px-4 py-3 font-bold text-[#5c3c10]">
              {entry.endDate ? formatTanggalIndo(entry.endDate) : '-'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}3