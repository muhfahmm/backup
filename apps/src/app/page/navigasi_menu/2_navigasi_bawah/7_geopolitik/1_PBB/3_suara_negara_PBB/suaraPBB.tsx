"use client"
import React from "react";
import { Vote } from "lucide-react";

export default function SuaraPBB() {
  // Data dummy riwayat voting
  const votingHistory = [
    { issue: "Emisi Karbon", stance: "Setuju", date: "2 Agustus 2026" },
    { issue: "Bantuan Militer ke X", stance: "Menolak", date: "15 Juli 2026" },
    { issue: "Sanksi Ekonomi", stance: "Abstain", date: "10 Juni 2026" },
  ];

  return (
    <div className="bg-white/70 border border-[#C4B49C]/30 p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-3 pb-4 border-b border-[#C4B49C]/20 mb-4">
        <Vote className="h-5 w-5 text-[#5c3c10]" />
        <h4 className="text-sm font-black text-[#5c3c10] uppercase">Riwayat Voting Majelis Umum</h4>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead className="bg-[#5c3c10]/5 border-b border-[#C4B49C]/20">
            <tr>
              <th className="px-3 py-2 text-left font-black text-[#5c3c10] uppercase">Isu Global</th>
              <th className="px-3 py-2 text-left font-black text-[#5c3c10] uppercase">Sikap</th>
              <th className="px-3 py-2 text-left font-black text-[#5c3c10] uppercase">Tanggal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#C4B49C]/20">
            {votingHistory.map((vote, idx) => (
              <tr key={idx} className="hover:bg-[#e4dac3]/20 transition-colors">
                <td className="px-3 py-2 font-bold text-[#5c3c10]">{vote.issue}</td>
                <td className="px-3 py-2">
                  <span className={`px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider ${
                    vote.stance === "Setuju" ? "bg-emerald-600/20 text-emerald-700" : 
                    vote.stance === "Menolak" ? "bg-rose-600/20 text-rose-700" : 
                    "bg-amber-600/20 text-amber-700"
                  }`}>
                    {vote.stance}
                  </span>
                </td>
                <td className="px-3 py-2 font-bold text-[#8b7e66]">{vote.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}