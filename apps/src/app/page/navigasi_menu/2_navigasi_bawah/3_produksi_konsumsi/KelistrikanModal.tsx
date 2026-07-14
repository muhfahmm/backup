"use client"
import React from "react";
import { X, Zap, BatteryCharging, MapPin, TrendingUp, TrendingDown } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
}

const SOURCE_META: Record<string, { label: string; desc: string }> = {
  pembangkit_listrik_tenaga_nuklir: { label: "PLTN", desc: "Pembangkit nuklir dengan output besar." },
  pembangkit_listrik_tenaga_air: { label: "PLTA", desc: "Pembangkit hidroelektrik berbasis bendungan." },
  pembangkit_listrik_tenaga_uap: { label: "PLTU", desc: "Pembangkit uap yang mengandalkan bahan bakar fosil." },
  pembangkit_listrik_tenaga_gas: { label: "PLTG", desc: "Pembangkit gas alam untuk beban puncak." },
  pembangkit_listrik_tenaga_angin: { label: "PLTB", desc: "Pembangkit angin untuk energi terbarukan." },
  pembangkit_listrik_tenaga_surya: { label: "PLTS", desc: "Pembangkit surya untuk suplai energi ramah lingkungan." }
};

const SOURCE_ORDER = [
  "pembangkit_listrik_tenaga_nuklir",
  "pembangkit_listrik_tenaga_air",
    "pembangkit_listrik_tenaga_surya",
  "pembangkit_listrik_tenaga_uap",
  "pembangkit_listrik_tenaga_gas",
  "pembangkit_listrik_tenaga_angin"

];

export default function KelistrikanModal({ isOpen, onClose, countryDetail, setCountryDetail }: ModalProps) {
  if (!isOpen) return null;

  const anggaran = countryDetail?.anggaran || 0;

  const powerSourceKeys = Object.keys(countryDetail || {}).filter((key) => key.startsWith("pembangkit_listrik_tenaga_"));
  const powerSources = SOURCE_ORDER.filter((key) => powerSourceKeys.includes(key)).map((key) => ({
    key,
    label: SOURCE_META[key]?.label ?? key,
    desc: SOURCE_META[key]?.desc ?? "Sumber energi listrik nasional.",
    value: Number(countryDetail?.[key]) || 0,
  }));

  const totalCapacity = powerSources.reduce((sum, source) => sum + source.value, 0);
  const totalSources = powerSources.filter((source) => source.value > 0).length;
  const estimatedUsage = Math.min(
    totalCapacity,
    Math.max(
      0,
      Math.round(totalCapacity * 0.7 + ((countryDetail?.jumlah_penduduk ?? 0) / 50000))
    )
  );
  const balance = totalCapacity - estimatedUsage;

  return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                <Zap className="h-6 w-6 text-[#5c3c10]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Grid Kelistrikan Nasional</h2>
              </div>
            </div>
            
            {/* Produksi & Konsumsi Status */}
            <div className="flex items-center gap-4 ml-8 pl-8 border-l-2 border-[#C4B49C]/30">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-300 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-emerald-700" />
                  <span className="text-[11px] font-black text-emerald-700 uppercase tracking-wider">Produksi</span>
                  <span className="text-[11px] font-black text-emerald-700">{totalCapacity > 0 ? totalCapacity.toLocaleString('id-ID') : '0'} MW</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 border border-rose-300 rounded-lg">
                  <TrendingDown className="h-4 w-4 text-rose-700" />
                  <span className="text-[11px] font-black text-rose-700 uppercase tracking-wider">Konsumsi</span>
                  <span className="text-[11px] font-black text-rose-700">{estimatedUsage > 0 ? estimatedUsage.toLocaleString('id-ID') : '0'} MW</span>
                </div>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.95fr] gap-4">
            <div className="bg-[#e4dac3]/25 border-2 border-[#C4B49C]/40 p-4 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-2xl bg-[#c77a00]/10 text-[#c77a00]">
                  <BatteryCharging className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-[#5c3c10] uppercase tracking-wide">Statistik Grid</h3>
                  <p className="text-[10px] text-[#8b7e66] uppercase tracking-wider">Ringkasan kapasitas dan beban listrik nasional</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <div className="bg-emerald-50 border-2 border-emerald-300 p-3 rounded-2xl">
                  <p className="text-[10px] font-black uppercase tracking-widest text-emerald-700">✓ Total Produksi Listrik</p>
                  <p className="text-2xl font-black text-emerald-700 mt-3">{totalCapacity.toLocaleString('id-ID')} MW</p>
                </div>
                <div className="bg-rose-50 border-2 border-rose-300 p-3 rounded-2xl">
                  <p className="text-[10px] font-black uppercase tracking-widest text-rose-700">✗ Konsumsi Terestimasi</p>
                  <p className="text-2xl font-black text-rose-700 mt-3">{estimatedUsage.toLocaleString('id-ID')} MW</p>
                </div>
                <div className={`p-3 rounded-2xl border-2 ${balance >= 0 ? 'bg-emerald-50 border-emerald-300' : 'bg-rose-50 border-rose-300'}`}>
                  <p className={`text-[10px] font-black uppercase tracking-widest ${balance >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>Neraca Daya</p>
                  <p className={`text-2xl font-black mt-3 ${balance >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {balance >= 0 ? '+' : '-'}{Math.abs(balance).toLocaleString('id-ID')} MW
                  </p>
                </div>
                <div className="bg-[#FAF6EE] border-2 border-[#C4B49C]/30 p-3 rounded-2xl">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#5c3c10]">Kas Anggaran Negara</p>
                  <p className="text-2xl font-black text-[#2e261a] mt-3">{anggaran.toLocaleString('id-ID')}</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#FAF6EE] border border-[#C4B49C]/30 p-3 rounded-2xl">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#5c3c10]">Jumlah Sumber Energi Aktif</p>
                  <p className="text-lg font-black text-[#2e261a] mt-2">{totalSources}</p>
                </div>
                <div className="bg-[#FAF6EE] border border-[#C4B49C]/30 p-3 rounded-2xl">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#5c3c10]">Perkiraan Beban Warga</p>
                  <p className="text-lg font-black text-[#2e261a] mt-2">{((countryDetail?.jumlah_penduduk ?? 0) / 1000000).toFixed(1)} Juta Jiwa</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF6EE] border-2 border-[#C4B49C]/40 p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-[#5c3c10]/10 text-[#5c3c10]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#5c3c10] uppercase tracking-wide">Ringkasan Sumber Daya</h3>
                  <p className="text-[10px] text-[#8b7e66] uppercase tracking-wider">Detail PLTU, PLTA, PLTB, PLTN, PLTG, PLTS</p>
                </div>
              </div>
              <div className="space-y-3">
                {powerSources.length > 0 ? powerSources.map((source) => (
                  <div key={source.key} className="flex items-center justify-between gap-3 p-4 bg-[#FAF6EE] border border-[#C4B49C]/20 rounded-2xl">
                    <div>
                      <p className="text-sm font-black text-[#5c3c10] uppercase tracking-wide">{source.label}</p>
                      <p className="text-[10px] text-[#8b7e66]">{source.desc}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-[#2e261a]">{source.value.toLocaleString('id-ID')} MW</p>
                      <p className="text-[10px] text-[#8b7e66]">{source.value > 0 ? 'Aktif' : 'Tidak tersedia'}</p>
                    </div>
                  </div>
                )) : (
                  <div className="rounded-2xl border border-[#C4B49C]/20 bg-[#FAF6EE] p-4 text-sm text-[#8b7e66]">
                    Data pembangkit listrik tidak tersedia untuk negara ini.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
