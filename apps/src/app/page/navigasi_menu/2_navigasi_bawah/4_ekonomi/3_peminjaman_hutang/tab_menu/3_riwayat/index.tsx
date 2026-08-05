"use client";
import React, { useState } from "react";
import { renderFlag, LoanRecord } from "../utils";

interface RiwayatProps {
  loanHistory: LoanRecord[];
  kasNegara: number;
  setPendingPaymentLoan: (loan: LoanRecord) => void;
}

export default function Riwayat({ loanHistory, kasNegara, setPendingPaymentLoan }: RiwayatProps) {
  const [historySubTab, setHistorySubTab] = useState<"active" | "paid">("active");
  const activeLoans = loanHistory.filter((loan) => loan.status !== "Lunas");
  const paidLoans = loanHistory.filter((loan) => loan.status === "Lunas");

  return (
    <div>
      <div className="bg-[#e4dac3]/40 p-1 rounded-xl border border-[#C4B49C]/40 inline-flex mb-4 shadow-sm">
        <button
          onClick={() => setHistorySubTab("active")}
          className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${
            historySubTab === "active" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md" : "text-[#8b7e66] hover:text-[#5c3c10]"
          }`}
        >
          Hutang Aktif ({activeLoans.length})
        </button>
        <button
          onClick={() => setHistorySubTab("paid")}
          className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${
            historySubTab === "paid" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md" : "text-[#8b7e66] hover:text-[#5c3c10]"
          }`}
        >
          Sudah Lunas ({paidLoans.length})
        </button>
      </div>

      <div className="overflow-x-auto border border-[#C4B49C]/30 rounded-xl bg-[#FAF6EE]/50 shadow-sm">
        <table className="w-full text-xs">
          <thead className="bg-[#5c3c10]/5 border-b-2 border-[#C4B49C]/30">
            <tr>
              <th className="px-4 py-3 text-left font-black text-[#5c3c10] uppercase tracking-wider">Negara</th>
              <th className="px-4 py-3 text-left font-black text-[#5c3c10] uppercase tracking-wider">Pokok Pinjaman</th>
              <th className="px-4 py-3 text-left font-black text-[#5c3c10] uppercase tracking-wider">Bunga Awal</th>
              <th className="px-4 py-3 text-left font-black text-emerald-700 uppercase tracking-wider">Sudah Dibayar</th>
              <th className="px-4 py-3 text-left font-black text-rose-600 uppercase tracking-wider">Denda</th>
              <th className="px-4 py-3 text-left font-black text-[#5c3c10] uppercase tracking-wider">Total Saat Ini</th>
              <th className="px-4 py-3 text-left font-black text-[#5c3c10] uppercase tracking-wider">Jatuh Tempo</th>
              <th className="px-4 py-3 text-left font-black text-[#5c3c10] uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#C4B49C]/20">
            {historySubTab === "active" ? (
              activeLoans.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-5 py-10 text-center text-sm font-bold text-[#8b7e66]">
                    Tidak ada hutang aktif.
                  </td>
                </tr>
              ) : (
                activeLoans.map((pinjam) => (
                  <tr key={pinjam.id} className="hover:bg-[#e4dac3]/20 transition-colors">
                    <td className="px-4 py-3 font-bold text-[#5c3c10]">
                      <div className="flex items-center gap-2">
                        {renderFlag(pinjam.iso, pinjam.source)}
                        <span>{pinjam.source}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-bold text-[#5c3c10]">{pinjam.amount?.toLocaleString('id-ID')} EM</td>
                    <td className="px-4 py-3 font-bold text-red-600">{pinjam.interest}%</td>
                    <td className="px-4 py-3 font-bold text-emerald-700">+{(pinjam.paidAmount || 0).toLocaleString('id-ID')} EM</td>
                    <td className="px-4 py-3 font-bold text-rose-600">+{(pinjam.accumulatedPenalty || 0).toLocaleString('id-ID')} EM</td>
                    <td className="px-4 py-3 font-bold text-[#5c3c10]">{(pinjam.totalRepayment || 0).toLocaleString('id-ID')} EM</td>
                    <td className="px-4 py-3 font-bold text-[#5c3c10]">{pinjam.returnDate}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setPendingPaymentLoan(pinjam)}
                        disabled={pinjam.totalRepayment <= 0 || kasNegara <= 0}
                        className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                          pinjam.totalRepayment <= 0 || kasNegara <= 0
                            ? 'bg-[#e4dac3]/50 text-[#8b7e66] cursor-not-allowed'
                            : 'bg-[#5c3c10] text-[#FAF6EE] hover:bg-[#8b7e66]'
                        }`}
                      >
                        Bayar
                      </button>
                    </td>
                  </tr>
                ))
              )
            ) : paidLoans.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-5 py-10 text-center text-sm font-bold text-[#8b7e66]">
                  Belum ada pinjaman yang dilunasi.
                </td>
              </tr>
            ) : (
              paidLoans.map((pinjam) => (
                <tr key={pinjam.id} className="bg-emerald-50/40 hover:bg-emerald-100/60 transition-colors">
                  <td className="px-4 py-3 font-bold text-[#5c3c10]">
                    <div className="flex items-center gap-2">
                      {renderFlag(pinjam.iso, pinjam.source)}
                      <span>{pinjam.source}</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-800 text-[8px] font-black uppercase">Lunas</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-bold text-[#5c3c10]">{pinjam.amount?.toLocaleString('id-ID')} EM</td>
                  <td className="px-4 py-3 font-bold text-[#5c3c10]">{pinjam.interest}%</td>
                  <td className="px-4 py-3 font-bold text-emerald-700">+{(pinjam.paidAmount || 0).toLocaleString('id-ID')} EM</td>
                  <td className="px-4 py-3 font-bold text-[#5c3c10]">+{(pinjam.accumulatedPenalty || 0).toLocaleString('id-ID')} EM</td>
                  <td className="px-4 py-3 font-bold text-emerald-700">{(pinjam.totalRepayment || 0).toLocaleString('id-ID')} EM</td>
                  <td className="px-4 py-3 font-bold text-[#5c3c10]">{pinjam.returnDate}</td>
                  <td className="px-4 py-3">
                    <span className="text-[8px] font-bold text-emerald-700 uppercase">Selesai</span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
