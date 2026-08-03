"use client"
import React, { useEffect, useMemo, useState } from "react";
import { Vote } from "lucide-react";
import { COUNTRIES_DATA } from "../../../../../map_system/map-data";

interface CountryVoteData {
  __fileName?: string;
  name_id?: string;
  country?: string;
  name_en?: string;
  un_vote?: number;
  iso?: string;
  flag?: string;
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

const getIsoByName = () => {
  const map = new Map<string, string>();
  for (const country of COUNTRIES_DATA) {
    const normalized = normalizeName(country.country);
    if (normalized) {
      map.set(normalized, country.iso?.toLowerCase() || "");
    }
  }
  return map;
};

export default function SuaraPBB() {
  const [countryVotes, setCountryVotes] = useState<CountryVoteData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const isoByName = useMemo(() => getIsoByName(), []);

  useEffect(() => {
    const loadCountryVotes = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/country-data?all=true");
        const data = await res.json();

        if (!Array.isArray(data)) {
          setCountryVotes([]);
          return;
        }

        const mapped = data
          .map((item: any) => {
            const name = item.name_id || item.country || item.name_en;
            const normalized = normalizeName(name);
            const iso = item.iso || isoByName.get(normalized);
            return {
              ...item,
              iso,
            } as CountryVoteData;
          })
          .filter((item) => typeof item.un_vote === "number")
          .sort((a, b) => (b.un_vote ?? 0) - (a.un_vote ?? 0));

        setCountryVotes(mapped);
      } catch (error) {
        console.error("Failed to load PBB vote data:", error);
        setCountryVotes([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadCountryVotes();
  }, [isoByName]);

  return (
    <div className="bg-white/70 border border-[#C4B49C]/30 p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#C4B49C]/20 mb-4">
        <div className="flex items-center gap-3">
          <Vote className="h-5 w-5 text-[#5c3c10]" />
          <h4 className="text-sm font-black text-[#5c3c10] uppercase">Suara Negara di Majelis Umum</h4>
        </div>
        <div className="text-[10px] font-black uppercase tracking-widest text-[#8b7e66]">
          {isLoading ? "Memuat data..." : `${countryVotes.length} negara`}
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
            {countryVotes.map((item, idx) => (
              <tr key={`${item.__fileName ?? item.country ?? item.name_id ?? item.name_en}-${idx}`} className="hover:bg-[#e4dac3]/20 transition-colors">
                <td className="px-3 py-2 font-bold text-[#5c3c10]">
                  {item.name_id || item.country || item.name_en || "-"}
                </td>
                <td className="px-3 py-2">
                  {renderFlag(item.iso, item.name_id || item.country || item.name_en)}
                </td>
                <td className="px-3 py-2 font-bold text-[#8b7e66]">{item.un_vote ?? 0}</td>
              </tr>
            ))}
            {!isLoading && countryVotes.length === 0 && (
              <tr>
                <td colSpan={3} className="px-3 py-4 text-center text-[#8b7e66]">
                  Data suara PBB belum tersedia.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
