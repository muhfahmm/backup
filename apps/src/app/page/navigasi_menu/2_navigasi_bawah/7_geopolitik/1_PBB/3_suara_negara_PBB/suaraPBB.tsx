"use client"
import React, { useMemo } from "react";
import { Vote } from "lucide-react";
import { COUNTRIES_DATA } from "../../../../../map_system/map-data";
import { STATIC_PBB_VOTES } from "./staticVoteData";

interface CountryVoteRow {
  name_id: string;
  iso?: string;
  un_vote: number;
}

const normalizeName = (value?: string) => {
  if (!value) return "";
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");
};

const renderFlag = (iso?: string, fallbackName?: string) => {
  if (!iso || iso.length !== 2) {
    return <span className="inline-block h-4 w-6 rounded-sm bg-slate-200 text-center text-[10px] leading-4">🏳️</span>;
  }

  const code = iso.toLowerCase();
  return (
    <img
      src={`https://flagcdn.com/w20/${code}.png`}
      alt={fallbackName || code}
      className="h-4 w-6 rounded-sm object-cover"
      onError={(event) => {
        const img = event.currentTarget as HTMLImageElement;
        img.src = "https://flagcdn.com/w20/un.png";
      }}
    />
  );
};

export default function SuaraPBB({ countryDetail }: { countryDetail?: any }) {
  const countryVotes = useMemo<CountryVoteRow[]>(() => {
    const byName = new Map<string, string>();
    for (const country of COUNTRIES_DATA) {
      const normalized = normalizeName(country.country);
      if (normalized) {
        byName.set(normalized, country.iso?.toLowerCase() || "");
      }
    }

    return STATIC_PBB_VOTES
      .map((entry) => {
        const normalized = normalizeName(entry.name_id);
        const iso = byName.get(normalized);
        return {
          name_id: entry.name_id,
          iso,
          un_vote: entry.un_vote,
        } satisfies CountryVoteRow;
      })
      .filter((entry) => typeof entry.un_vote === "number")
      .sort((a, b) => (b.un_vote ?? 0) - (a.un_vote ?? 0));
  }, []);

  return (
    <div className="bg-white/70 border border-[#C4B49C]/30 p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#C4B49C]/20 mb-4">
        <div className="flex items-center gap-3">
          <Vote className="h-5 w-5 text-[#5c3c10]" />
          <h4 className="text-sm font-black text-[#5c3c10] uppercase">Suara Negara di Majelis Umum</h4>
        </div>
        <div className="text-[10px] font-black uppercase tracking-widest text-[#8b7e66]">
          {countryVotes.length} negara
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead className="bg-[#5c3c10]/5 border-b border-[#C4B49C]/20">
            <tr>
              <th className="px-3 py-2 text-left font-black text-[#5c3c10] uppercase">Negara</th>
              <th className="px-3 py-2 text-left font-black text-[#5c3c10] uppercase">Bendera</th>
              <th className="px-3 py-2 text-left font-black text-[#5c3c10] uppercase">Suara PBB</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#C4B49C]/20">
            {countryVotes.map((item, idx) => {
              const selectedCountryName = countryDetail?.country || countryDetail?.nama_negara || countryDetail?.name_id || countryDetail?.name_en || "Negara";
              const isUserCountry = item.name_id.toLowerCase().trim() === selectedCountryName.toLowerCase().trim();
              
              return (
                <tr 
                  key={`${item.name_id}-${idx}`} 
                  className={`transition-colors ${
                    isUserCountry
                      ? 'bg-emerald-100/80 hover:bg-emerald-200/80 border-l-4 border-l-emerald-600'
                      : 'hover:bg-[#e4dac3]/20'
                  }`}
                >
                  <td className={`px-3 py-2 font-bold ${isUserCountry ? 'text-emerald-900' : 'text-[#5c3c10]'}`}>{item.name_id}</td>
                  <td className="px-3 py-2">{renderFlag(item.iso, item.name_id)}</td>
                  <td className={`px-3 py-2 font-bold ${isUserCountry ? 'text-emerald-600' : 'text-[#8b7e66]'}`}>{item.un_vote}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
