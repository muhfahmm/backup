"use client"
import React, { useEffect, useMemo, useState } from "react";
import { X, Shield } from "lucide-react";
import { getArmadaPowerSummary } from "../4_armada/logic/armadaLogic";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
  prefetchedAllCountries?: any[];
}

type RankingRow = {
  countryName: string;
  totalPower: number;
  totalHealth: number;
  darat: number;
  laut: number;
  udara: number;
};

const formatNumber = (value: unknown) => {
  const numeric = Number(value ?? 0);
  return Number.isFinite(numeric) ? numeric.toLocaleString("id-ID") : "0";
};

export default function SerangNegaraModal({ isOpen, onClose, countryDetail, setCountryDetail, prefetchedAllCountries }: ModalProps) {
  const rankings = React.useMemo(() => {
    const source = Array.isArray(prefetchedAllCountries) ? prefetchedAllCountries : [];

    return source
      .map((country: any) => {
        const summary = getArmadaPowerSummary(country);
        const groupTotals = summary.totals.groups;
        const countryName = country?.nama_negara || country?.country || country?.name_id || country?.name_en || "Negara";

        return {
          countryName,
          totalPower: summary.totals.totalPower,
          totalHealth: summary.totals.totalHealth,
          darat: groupTotals?.darat?.power ?? 0,
          laut: groupTotals?.laut?.power ?? 0,
          udara: groupTotals?.udara?.power ?? 0,
        };
      })
      .sort((left, right) => right.totalPower - left.totalPower);
  }, [prefetchedAllCountries]);

  const selectedCountryName = useMemo(() => {
    return countryDetail?.country || countryDetail?.nama_negara || countryDetail?.name_id || countryDetail?.name_en || "Negara";
  }, [countryDetail]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-7xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-rose-700 animate-pulse" />
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Serang Negara</h2>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8b7e66] mt-1">{selectedCountryName}</p>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto p-4 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="mb-3 text-xs font-semibold text-[#8b7e66] leading-relaxed">
            Tabel ranking 207 negara berdasarkan total kekuatan gabungan darat, laut, dan udara. Urutan menurun dari yang paling kuat ke yang paling lemah.
          </div>

          <div className="overflow-hidden rounded-2xl border-2 border-[#C4B49C]/40 bg-white/80 shadow-sm">
            <div className="max-h-[68vh] overflow-auto">
              <table className="min-w-full text-left text-[11px]">
                <thead className="sticky top-0 z-10 bg-[#5c3c10] text-[#FAF6EE] uppercase tracking-[0.18em]">
                  <tr>
                    <th className="px-3 py-3 font-black">Rank</th>
                    <th className="px-3 py-3 font-black">Negara</th>
                    <th className="px-3 py-3 font-black">Darat</th>
                    <th className="px-3 py-3 font-black">Laut</th>
                    <th className="px-3 py-3 font-black">Udara</th>
                    <th className="px-3 py-3 font-black">Total Kekuatan</th>
                    <th className="px-3 py-3 font-black">HP</th>
                  </tr>
                </thead>
                <tbody>
                  {rankings === null ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-8 text-center text-sm font-bold text-[#8b7e66]">Memuat ranking kekuatan negara…</td>
                    </tr>
                  ) : rankings.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-8 text-center text-sm font-bold text-[#8b7e66]">Data ranking belum tersedia.</td>
                    </tr>
                  ) : (
                    rankings.map((row, index) => (
                      <tr key={`${row.countryName}-${index}`} className="border-b border-[#C4B49C]/25 odd:bg-[#FBF7EE] even:bg-white/60">
                        <td className="px-3 py-2 font-black text-[#5c3c10]">#{index + 1}</td>
                        <td className="px-3 py-2 font-bold text-[#5c3c10]">{row.countryName}</td>
                        <td className="px-3 py-2 text-[#5c3c10]">{formatNumber(row.darat)}</td>
                        <td className="px-3 py-2 text-[#5c3c10]">{formatNumber(row.laut)}</td>
                        <td className="px-3 py-2 text-[#5c3c10]">{formatNumber(row.udara)}</td>
                        <td className="px-3 py-2 font-black text-rose-700">{formatNumber(row.totalPower)}</td>
                        <td className="px-3 py-2 text-[#5c3c10]">{formatNumber(row.totalHealth)}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}