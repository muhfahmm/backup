"use client"

import React from "react";

interface TabelSelesaiProps {
  entries: Array<{ id: string; label: string; amount: number; endDate: Date | null }>;
}

export default function TabelSelesai({ entries }: TabelSelesaiProps) {
  return (
    <table className="min-w-full text-left text-sm text-[#5c3c10]">
      <thead>
        <tr className="bg-[#faf7ef]">
          <th className="px-4 py-3 font-black uppercase tracking-wider text-[#8b7e66]">Keterangan</th>
          <th className="px-4 py-3 font-black uppercase tracking-wider text-[#8b7e66]">Jumlah</th>
          <th className="px-4 py-3 font-black uppercase tracking-wider text-[#8b7e66]">Selesai Pada</th>
        </tr>
      </thead>
      <tbody>
        {entries.length === 0 ? (
          <tr className="border-t border-[#C4B49C]/20">
            <td colSpan={3} className="px-4 py-5 text-[#8b7e66]">Belum ada ICBM yang selesai.</td>
          </tr>
        ) : (
          entries.map((entry) => (
            <tr key={entry.id} className="border-t border-[#C4B49C]/20 hover:bg-[#f9f7ee]">
              <td className="px-4 py-4 text-[#5c3c10]">{entry.label}</td>
              <td className="px-4 py-4 font-black text-[#1d5c10]">{entry.amount}</td>
              <td className="px-4 py-4 text-[#5c3c10]">{entry.endDate?.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) ?? '-'}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
