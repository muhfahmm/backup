"use client"
import React, { useState, useEffect, useMemo } from "react";
import { X, Star, Globe, MoonStar, Church, Sun, CircleDot, Atom } from "lucide-react";
import { COUNTRIES_DATA } from "../../../../map_system/map-data";
import { PROFILES_RELIGION_DATA } from "@/../../json/semua_fitur_negara/0_profiles/index";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail?: (detail: any | ((prev: any) => any)) => void;
}

const RELIGION_OPTIONS = [
  'Islam', 'Katolik', 'Protestan', 'Kristen Ortodoks', 'Hindu', 'Buddha', 'Yahudi', 'Shinto', 'Ateisme',
];

const RELIGION_CHANGE_COST = 50000;

// Mapping Ikon untuk Agama
const RELIGION_ICONS: Record<string, React.ReactNode> = {
  'Islam': <MoonStar className="w-4 h-4" />,
  'Katolik': <Church className="w-4 h-4" />,
  'Protestan': <Church className="w-4 h-4" />,
  'Kristen Ortodoks': <Church className="w-4 h-4" />,
  'Hindu': <Sun className="w-4 h-4" />,
  'Buddha': <CircleDot className="w-4 h-4" />,
  'Yahudi': <Star className="w-4 h-4" />,
  'Shinto': <Globe className="w-4 h-4" />,
  'Ateisme': <Atom className="w-4 h-4" />,
};

export default function AgamaModal({ isOpen, onClose, countryDetail, setCountryDetail }: ModalProps) {
  const [activeTab, setActiveTab] = useState<"agama" | "dunia">("agama");
  const [selectedReligion, setSelectedReligion] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success"; message: string } | null>(null);

  const [worldReligions, setWorldReligions] = useState<{ country: string; religion: string }[]>([]);
  const [sortMode, setSortMode] = useState<"default" | "unavailable-last" | "az" | "za">("default");

  useEffect(() => {
    if (!isOpen) return;
    const profileLookup = new Map<string, string>();
    for (const p of PROFILES_RELIGION_DATA) {
      profileLookup.set(p.name_id.toLowerCase().trim(), p.religion);
    }

    const data = COUNTRIES_DATA.map((c) => {
      const countryNameLower = c.country.toLowerCase().trim();
      if (
        countryDetail?.country &&
        c.country.toLowerCase().trim() === countryDetail.country.toLowerCase().trim() &&
        countryDetail?.religion
      ) {
        return { country: c.country, religion: countryDetail.religion };
      }
      const profileReligion = profileLookup.get(countryNameLower);
      return { country: c.country, religion: profileReligion || 'Belum tersedia' };
    });
    setWorldReligions(data);
  }, [isOpen, countryDetail]);

  const sortedWorldReligions = useMemo(() => {
    if (sortMode === "default") return worldReligions;
    return [...worldReligions].sort((a, b) => {
      const aUnav = a.religion === 'Belum tersedia';
      const bUnav = b.religion === 'Belum tersedia';

      if (sortMode === "unavailable-last") {
        if (aUnav && !bUnav) return 1;
        if (!aUnav && bUnav) return -1;
        return a.religion.localeCompare(b.religion);
      }
      const compare = a.religion.localeCompare(b.religion);
      return sortMode === "az" ? compare : -compare;
    });
  }, [worldReligions, sortMode]);

  const cycleSortMode = () => {
    setSortMode((prev) => {
      if (prev === "default") return "unavailable-last";
      if (prev === "unavailable-last") return "az";
      if (prev === "az") return "za";
      return "default";
    });
  };

  if (!isOpen) return null;
  const religion = countryDetail?.religion || "Mayoritas Muslim";
  const anggaran = Number(countryDetail?.anggaran) || 0;

  const handleSelectReligion = (religionName: string) => {
    setSelectedReligion(religionName);
    setShowConfirm(true);
  };

  const handleConfirmChange = () => {
    if (!selectedReligion) return;
    if (anggaran < RELIGION_CHANGE_COST) {
      setShowErrorModal(true);
      return;
    }
    setCountryDetail?.((prev: any) => ({
      ...(prev || {}),
      religion: selectedReligion,
      anggaran: (Number(prev?.anggaran) || 0) - RELIGION_CHANGE_COST,
      message: `Agama negara diubah ke ${selectedReligion}. Biaya perubahan ${RELIGION_CHANGE_COST.toLocaleString('id-ID')} EM.`
    }));
    setFeedback({
      type: "success",
      message: `Agama berhasil diubah menjadi ${selectedReligion}. Biaya ${RELIGION_CHANGE_COST.toLocaleString('id-ID')} EM telah dipotong.`
    });
    setShowConfirm(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
              <Star className="h-6 w-6 text-[#5c3c10] animate-spin" style={{ animationDuration: '12s' }} />
            </div>
            <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Agama & Kebebasan Berkeyakinan</h2>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] transition-all cursor-pointer font-black text-xs uppercase">
            <span className="text-[10px] tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="bg-[#e4dac3]/40 p-1 rounded-xl border border-[#C4B49C]/40 inline-flex mb-6 shadow-sm">
            <button onClick={() => setActiveTab("agama")}
              className={`px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${activeTab === "agama" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md" : "text-[#8b7e66] hover:text-[#5c3c10]"}`}>
              Agama & Kebebasan Berkeyakinan
            </button>
            <button onClick={() => setActiveTab("dunia")}
              className={`px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${activeTab === "dunia" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md" : "text-[#8b7e66] hover:text-[#5c3c10]"}`}>
              Agama Dunia
            </button>
          </div>

          {activeTab === "agama" && (
            <div className="space-y-6">
              <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-4 rounded-xl">
                <div className="flex justify-between text-xs font-bold text-[#5c3c10]">
                  <span>Agama Saat Ini:</span>
                  <span>{religion}</span>
                </div>
                <div className="flex justify-between text-xs font-bold text-[#5c3c10] mt-1">
                  <span>Anggaran tersedia:</span>
                  <span className="text-[#2e261a] font-bold">{anggaran.toLocaleString('id-ID')} EM</span>
                </div>
              </div>

              <h3 className="text-sm font-bold text-[#5c3c10] mb-3">Pilih Agama Baru (biaya {RELIGION_CHANGE_COST.toLocaleString('id-ID')} EM)</h3>
              <div className="grid grid-cols-3 gap-4">
                {RELIGION_OPTIONS.map((r) => {
                  const isActive = String(countryDetail?.religion || '').toLowerCase() === String(r).toLowerCase();
                  const isSelected = String(selectedReligion || '').toLowerCase() === String(r).toLowerCase();
                  return (
                    <button key={r} type="button" onClick={() => handleSelectReligion(r)}
                      className={`p-4 rounded-2xl border transition text-left flex flex-col justify-between h-24 cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-b from-[#ffe07d] via-[#fcae1e] to-[#c77a00] font-black shadow-md border-transparent'
                          : isSelected
                          ? 'bg-[#f2e4b8] border-[#c7ab79]'
                          : 'bg-white border-[#C4B49C]/30 hover:bg-[#e4dac3]/40'
                      }`}>
                      
                      {/* BAGIAN INI DIPERBAIKI WARNA IKONNYA AGAR GELAP */}
                      <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-lg border flex items-center justify-center ${
                          isActive
                            ? 'bg-white/20 border-white/30 text-[#2e261a]'
                            : 'bg-[#e4dac3] border-[#C4B49C] text-[#2e261a]'
                        }`}>
                          {RELIGION_ICONS[r] || <Globe className="w-4 h-4" />}
                        </div>
                        <div className={`text-sm font-semibold ${isActive ? 'text-[#2e261a]' : 'text-[#5c3c10]'}`}>{r}</div>
                      </div>

                      <div className="text-[10px] uppercase tracking-[0.18em] text-[#5c3c10]">
                        {isActive ? 'Aktif' : isSelected ? 'Dipilih' : 'Klik untuk pilih'}
                      </div>
                    </button>
                  );
                })}
              </div>

              {showConfirm && selectedReligion && (
                <div className="mt-6 bg-white/90 border border-[#C4B49C]/40 rounded-2xl p-5 shadow-lg">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between text-sm font-bold text-[#5c3c10]">
                      <span>Konfirmasi Perubahan Agama</span>
                      <span>Biaya: {RELIGION_CHANGE_COST.toLocaleString('id-ID')} EM</span>
                    </div>
                    <p className="text-xs text-[#8b7e66] leading-relaxed">
                      Anda akan mengubah agama mayoritas negara menjadi <span className="font-semibold text-[#5c3c10]">{selectedReligion}</span>.
                    </p>
                    <div className="flex gap-3 flex-wrap">
                      <button onClick={handleConfirmChange} className="flex-1 py-3 rounded-xl bg-[#3b7d7d] text-[#FAF6EE] text-xs font-black uppercase tracking-widest hover:bg-[#2e6363] transition-all cursor-pointer">Konfirmasi Ubah</button>
                      <button onClick={() => setShowConfirm(false)} className="flex-1 py-3 rounded-xl border-2 border-[#C4B49C] text-[#5c3c10] text-xs font-black uppercase tracking-widest hover:bg-[#e4dac3]/50 transition-all cursor-pointer">Batal</button>
                    </div>
                  </div>
                </div>
              )}
              {feedback && feedback.type === 'success' && (
                <div className="mt-6 p-4 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-900">{feedback.message}</div>
              )}
            </div>
          )}

          {activeTab === "dunia" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#C4B49C]/20 mb-4">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-[#5c3c10]" />
                  <h4 className="text-sm font-black text-[#5c3c10] uppercase tracking-wider">Daftar Agama Seluruh Negara ({worldReligions.length} Negara)</h4>
                </div>
              </div>

              <div className="overflow-x-auto border border-[#C4B49C]/30 rounded-xl bg-[#FAF6EE]/50 shadow-sm max-h-[400px]">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#e4dac3] border-b-2 border-[#C4B49C] sticky top-0 z-10">
                    <tr>
                      <th className="px-4 py-3 font-black text-[#5c3c10] uppercase tracking-wider w-12 text-center">No</th>
                      <th className="px-4 py-3 font-black text-[#5c3c10] uppercase tracking-wider">Negara</th>
                      <th onClick={cycleSortMode} className="px-4 py-3 font-black text-[#5c3c10] uppercase tracking-wider cursor-pointer hover:bg-[#d6c8b0] transition-colors">
                        Agama
                        <span className="ml-2 text-[10px] text-[#8b7e66]">
                          {sortMode === "default" && "↕"}
                          {sortMode === "unavailable-last" && "↑↓"}
                          {sortMode === "az" && "↑"}
                          {sortMode === "za" && "↓"}
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#C4B49C]/20">
                    {sortedWorldReligions.map((item, idx) => {
                      const isUserCountry = countryDetail?.country &&
                        item.country.toLowerCase().trim() === countryDetail.country.toLowerCase().trim();
                      return (
                        <tr key={idx} className={`transition-colors ${isUserCountry ? 'bg-[#ffe07d]/30 border-l-4 border-[#fcae1e]' : 'hover:bg-[#e4dac3]/20'}`}>
                          <td className="px-4 py-2.5 text-center font-bold text-[#8b7e66]">{idx + 1}</td>
                          <td className="px-4 py-2.5 font-bold text-[#5c3c10]">
                            {isUserCountry && <span className="mr-1 text-[#c77a00]">★</span>}
                            {item.country}
                          </td>
                          <td className="px-4 py-2.5">
                            {item.religion === 'Belum tersedia' ? (
                              <span className="text-[#C4B49C] italic font-medium">Belum tersedia</span>
                            ) : (
                              <div className="flex items-center gap-2 text-[#5c3c10] font-bold">
                                {RELIGION_ICONS[item.religion] || <Globe className="w-4 h-4 text-[#2e261a]" />}
                                {item.religion}
                              </div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}