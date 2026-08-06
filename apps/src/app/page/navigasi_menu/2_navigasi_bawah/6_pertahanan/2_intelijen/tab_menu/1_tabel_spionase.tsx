"use client";
import React, { useMemo, useState } from "react";
import { Binoculars } from "lucide-react";
// 🔥 Sesuaikan path jika letak folder armadaLogic berbeda
import { getArmadaPowerSummary } from "../../4_armada/logic/armadaLogic";

type RankingRow = {
  countryName: string;
  totalPower: number;
  darat: number;
  laut: number;
  udara: number;
};

const formatNumber = (value: unknown) => {
  const numeric = Number(value ?? 0);
  return Number.isFinite(numeric) ? numeric.toLocaleString("id-ID") : "0";
};

interface SpionaseProps {
  prefetchedAllCountries?: any[];
  onAction: (targetCountry: any) => void;
}

export default function Spionase({ prefetchedAllCountries, onAction }: SpionaseProps) {
  const [sortConfig, setSortConfig] = useState<{ key: keyof RankingRow; direction: 'asc' | 'desc' } | null>({
    key: 'totalPower',
    direction: 'desc'
  });

  const rawRankings = useMemo(() => {
    const source = Array.isArray(prefetchedAllCountries) ? prefetchedAllCountries : [];
    return source.map((country: any) => {
      const summary = getArmadaPowerSummary(country);
      const groupTotals = summary.totals.groups;
      const countryName = country?.nama_negara || country?.country || country?.name_id || country?.name_en || "Negara";
      return {
        countryName,
        totalPower: summary.totals.totalPower,
        darat: groupTotals?.darat?.power ?? 0,
        laut: groupTotals?.laut?.power ?? 0,
        udara: groupTotals?.udara?.power ?? 0,
      };
    });
  }, [prefetchedAllCountries]);

  const rankings = useMemo(() => {
    let sortableItems = [...rawRankings];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (typeof a[sortConfig.key] === 'string') {
          const aVal = a[sortConfig.key] as string;
          const bVal = b[sortConfig.key] as string;
          if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
          if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
          return 0;
        } else {
          const aVal = a[sortConfig.key] as number;
          const bVal = b[sortConfig.key] as number;
          if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
          if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
          return 0;
        }
      });
    }
    return sortableItems;
  }, [rawRankings, sortConfig]);

  const handleSort = (key: keyof RankingRow) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortArrow = (key: keyof RankingRow) => {
    if (sortConfig?.key === key) {
      return sortConfig.direction === 'asc' ? ' ▲' : ' ▼';
    }
    return '';
  };

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl border-2 border-[#C4B49C]/40 bg-white/80 shadow-sm">
        <div className="max-h-[50vh] overflow-auto">
          <table className="min-w-full text-left text-[11px]">
            <thead className="sticky top-0 z-10 bg-[#5c3c10] text-[#FAF6EE] uppercase tracking-[0.18em]">
              <tr>
                <th className="px-3 py-3 font-black">Rank</th>
                <th className="px-3 py-3 font-black cursor-pointer hover:bg-[#4a2f0d] transition-colors" onClick={() => handleSort('countryName')}>
                  Negara{getSortArrow('countryName')}
                </th>
                <th className="px-3 py-3 font-black cursor-pointer hover:bg-[#4a2f0d] transition-colors" onClick={() => handleSort('darat')}>
                  Darat{getSortArrow('darat')}
                </th>
                <th className="px-3 py-3 font-black cursor-pointer hover:bg-[#4a2f0d] transition-colors" onClick={() => handleSort('laut')}>
                  Laut{getSortArrow('laut')}
                </th>
                <th className="px-3 py-3 font-black cursor-pointer hover:bg-[#4a2f0d] transition-colors" onClick={() => handleSort('udara')}>
                  Udara{getSortArrow('udara')}
                </th>
                <th className="px-3 py-3 font-black cursor-pointer hover:bg-[#4a2f0d] transition-colors" onClick={() => handleSort('totalPower')}>
                  Total Kekuatan{getSortArrow('totalPower')}
                </th>
                <th className="px-3 py-3 font-black text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {rankings.map((row, index) => (
                <tr key={`${row.countryName}-${index}`} className="border-b border-[#C4B49C]/25 odd:bg-[#FBF7EE] even:bg-white/60 hover:bg-[#e4dac3]/30 transition-colors">
                  <td className="px-3 py-2 font-black text-[#5c3c10]">{index + 1}</td>
                  <td className="px-3 py-2 font-bold text-[#5c3c10]">{row.countryName}</td>
                  <td className="px-3 py-2 text-[#5c3c10]">{formatNumber(row.darat)}</td>
                  <td className="px-3 py-2 text-[#5c3c10]">{formatNumber(row.laut)}</td>
                  <td className="px-3 py-2 text-[#5c3c10]">{formatNumber(row.udara)}</td>
                  <td className="px-3 py-2 font-black text-rose-700">{formatNumber(row.totalPower)}</td>
                  <td className="px-3 py-2 text-center">
                    <button
                      onClick={() => onAction(row)}
                      className="p-1.5 rounded-lg bg-indigo-600/10 text-indigo-700 hover:bg-indigo-600 hover:text-white border border-indigo-600/30 transition-all cursor-pointer"
                      title="Luncurkan misi spionase"
                    >
                      <Binoculars className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}