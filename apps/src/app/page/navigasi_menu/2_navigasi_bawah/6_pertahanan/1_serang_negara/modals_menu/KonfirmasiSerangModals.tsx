"use client"
import React, { useState } from "react";
import { X, Swords, Shield, Ship, Plane, ChevronDown, ChevronUp } from "lucide-react";
import { getArmadaPowerSummary } from "../../4_armada/logic/armadaLogic";
import { convertBarakToSoldiers } from "../../4_armada/logic/1_barak_logic";

interface SerangModalsProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: any;
  countryDetail: any;
  onConfirm: () => void;
}

type ArmadaGroup = "darat" | "laut" | "udara";

// 🔥 Katalog alutsista (Data User - Ditulis eksplisit di sini)
const armadaCatalog: Record<ArmadaGroup, Array<{ key: string; label: string }>> = {
  darat: [
    { key: "barak", label: "Pasukan Infanteri" },
    { key: "tank_tempur_utama", label: "Tank Tempur Utama" },
    { key: "apc_ifv", label: "APC / IFV" },
    { key: "artileri_berat", label: "Artileri Berat" },
    { key: "sistem_peluncur_roket", label: "Sistem Peluncur Roket" },
    { key: "pertahanan_udara_mobile", label: "Pertahanan Udara Mobile" },
    { key: "kendaraan_taktis", label: "Kendaraan Taktis" },
  ],
  laut: [
    { key: "kapal_induk", label: "Kapal Induk" },
    { key: "kapal_induk_nuklir", label: "Kapal Induk Nuklir" },
    { key: "kapal_destroyer", label: "Kapal Destroyer" },
    { key: "kapal_korvet", label: "Kapal Korvet" },
    { key: "kapal_selam_nuklir", label: "Kapal Selam Nuklir" },
    { key: "kapal_selam_regular", label: "Kapal Selam Reguler" },
    { key: "kapal_ranjau", label: "Kapal Ranjau" },
    { key: "kapal_logistik", label: "Kapal Logistik" },
  ],
  udara: [
    { key: "jet_tempur_siluman", label: "Jet Tempur Siluman" },
    { key: "jet_tempur_interceptor", label: "Jet Tempur Interceptor" },
    { key: "pesawat_pengebom", label: "Pesawat Pengebom" },
    { key: "helikopter_serang", label: "Helikopter Serang" },
    { key: "pesawat_pengintai", label: "Pesawat Pengintai" },
    { key: "drone_intai_uav", label: "Drone Intai UAV" },
    { key: "drone_kamikaze", label: "Drone Kamikaze" },
    { key: "pesawat_angkut", label: "Pesawat Angkut" },
  ],
};

const formatNumber = (value: unknown) => {
  const numeric = Number(value ?? 0);
  return Number.isFinite(numeric) ? numeric.toLocaleString("id-ID") : "0";
};

const getArmadaPayload = (source: any) => {
  if (!source || typeof source !== "object") return {};
  if (source.armada && typeof source.armada === "object") return source.armada;
  return source;
};

const resolveQuantity = (source: any, group: ArmadaGroup, key: string) => {
  const payload = getArmadaPayload(source);
  const block = payload[group] && typeof payload[group] === "object" ? payload[group] : {};

  if (key === "barak") {
    // 🔥 Gunakan logika dari 1_barak_logic.ts
    const barakCount = Number(source?.barak ?? 0) ||
                    Number(payload?.barak ?? 0) ||
                    Number(block?.barak ?? 0) ||
                    Number(source?.armada?.barak ?? 0) ||
                    0;
    return convertBarakToSoldiers(barakCount);
  }

  return (
    Number(block?.[key] ?? 0) ||
    Number(payload?.[key] ?? 0) ||
    Number(source?.[group]?.[key] ?? 0) ||
    Number(source?.armada?.[group]?.[key] ?? 0) ||
    Number(source?.[key] ?? 0) ||
    0
  );
};

const getGroupBreakdown = (source: any, group: ArmadaGroup) => {
  return armadaCatalog[group].map((item) => ({
    key: item.key,
    label: item.label,
    quantity: resolveQuantity(source, group, item.key),
  }));
};

export default function SerangModals({
  isOpen,
  onClose,
  targetCountry,
  countryDetail,
  onConfirm,
}: SerangModalsProps) {
  if (!isOpen || !targetCountry) return null;

  const targetSource = targetCountry?.payload || targetCountry;
  const attackerName = countryDetail?.country || countryDetail?.nama_negara || countryDetail?.name_id || countryDetail?.name_en || "Negara Anda";
  const targetName = targetCountry?.countryName ||
    targetCountry?.payload?.countryName ||
    targetSource?.country ||
    targetSource?.nama_negara ||
    targetSource?.name_id ||
    targetSource?.name_en ||
    "Target";

  const attackerSummary = getArmadaPowerSummary(countryDetail);
  const targetSummary = getArmadaPowerSummary(targetSource);

  const attackerStats = {
    darat: attackerSummary.totals.groups.darat?.power ?? 0,
    laut: attackerSummary.totals.groups.laut?.power ?? 0,
    udara: attackerSummary.totals.groups.udara?.power ?? 0,
  };
  const targetStats = {
    darat: targetSummary.totals.groups.darat?.power ?? 0,
    laut: targetSummary.totals.groups.laut?.power ?? 0,
    udara: targetSummary.totals.groups.udara?.power ?? 0,
  };

  const [expandedGroup, setExpandedGroup] = useState<ArmadaGroup | null>("darat");

  const attackerBreakdown = {
    darat: getGroupBreakdown(countryDetail, "darat"),
    laut: getGroupBreakdown(countryDetail, "laut"),
    udara: getGroupBreakdown(countryDetail, "udara"),
  };
  const targetBreakdown = {
    darat: getGroupBreakdown(targetSource, "darat"),
    laut: getGroupBreakdown(targetSource, "laut"),
    udara: getGroupBreakdown(targetSource, "udara"),
  };

  const attackerTotalPower = attackerSummary.totals.totalPower;
  const targetTotalPower = targetSummary.totals.totalPower;

  // 🔥 Hitung persentase untuk bilah keseimbangan
  const totalCombinedPower = attackerTotalPower + targetTotalPower;
  const attackerPct = totalCombinedPower > 0 ? (attackerTotalPower / totalCombinedPower) * 100 : 50;
  const targetPct = totalCombinedPower > 0 ? (targetTotalPower / totalCombinedPower) * 100 : 50;

  // Konfigurasi ikon untuk setiap matra
  const groupMeta: Record<ArmadaGroup, { icon: typeof Swords; color: string; bg: string }> = {
    darat: { icon: Swords, color: "text-rose-700", bg: "bg-rose-100" },
    laut: { icon: Ship, color: "text-sky-700", bg: "bg-sky-100" },
    udara: { icon: Plane, color: "text-indigo-700", bg: "bg-indigo-100" },
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/5 pointer-events-auto">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto animate-in fade-in zoom-in-95 duration-200">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        {/* 🔥 HEADER MODAL KONFIRMASI SERANG */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Swords className="h-6 w-6 text-rose-700 animate-pulse" />
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Konfirmasi Serangan</h2>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8b7e66] mt-1">
                  Dari: {attackerName} &rarr; Target: {targetName}
                </p>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* 🔥 BODY MODAL (Posisi Konten di Atas) */}
        <div className="flex-1 min-h-0 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar flex flex-col">
          <div className="w-full max-w-4xl mx-auto space-y-8">

            {/* ⚔️ BAGIAN 1: PERBANDINGAN TOTAL KEKUATAN */}
            <div className="flex flex-col bg-white/80 border border-[#C4B49C]/30 p-6 rounded-2xl shadow-sm gap-4">
              
              {/* Baris Atas: Kartu VS */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                
                {/* KARTU KIRI: PENYERANG */}
                <div className="flex-1 w-full flex flex-col items-center text-center space-y-2">
                  <div className="p-2 rounded-full bg-emerald-100">
                    <Shield className="w-6 h-6 text-emerald-700" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-[#8b7e66]">Pasukan Penyerang</p>
                  <p className="text-2xl font-black text-emerald-700">{attackerName}</p>
                  <p className="text-[11px] text-[#5c3c10]">
                    Kekuatan: <span className="font-black">{formatNumber(attackerTotalPower)}</span>
                  </p>
                </div>

                {/* ELEMEN TENGAH: VS */}
                <div className="flex items-center justify-center py-2 md:py-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#C4B49C] bg-[#FAF6EE] text-2xl font-black text-[#5c3c10] shadow-sm">
                    VS
                  </div>
                </div>

                {/* KARTU KANAN: TARGET */}
                <div className="flex-1 w-full flex flex-col items-center text-center space-y-2">
                  <div className="p-2 rounded-full bg-rose-100">
                    <Shield className="w-6 h-6 text-rose-700" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-[#8b7e66]">Pasukan Target</p>
                  <p className="text-2xl font-black text-rose-700">{targetName}</p>
                  <p className="text-[11px] text-[#5c3c10]">
                    Kekuatan: <span className="font-black">{formatNumber(targetTotalPower)}</span>
                  </p>
                </div>
              </div>

              {/* 🔥 BARIS BAWAH: GARIS KESEIMBANGAN PASUKAN */}
              <div className="w-full mt-2 pt-4 border-t border-[#C4B49C]/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8b7e66]">Keseimbangan Pasukan:</span>
                  <span className="text-[10px] font-bold text-[#5c3c10]">
                    {attackerTotalPower > targetTotalPower ? '🟢 Unggul' : attackerTotalPower < targetTotalPower ? '🔴 Tertinggal' : '⚖️ Seimbang'}
                  </span>
                </div>
                
                <div className="flex items-center gap-3 w-full">
                  {/* Ikon Penyerang */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 border border-emerald-200">
                    <Shield className="h-5 w-5 text-emerald-700" />
                  </div>

                  {/* Batang Garis Progress */}
                  <div className="flex-1 h-6 rounded-full bg-[#e4dac3] overflow-hidden relative border border-[#C4B49C]/40 shadow-inner">
                    {/* Bagian Hijau (Penyerang) */}
                    <div 
                      className="absolute left-0 top-0 h-full bg-emerald-500 transition-all duration-700 ease-out" 
                      style={{ width: `${attackerPct}%` }}
                    ></div>
                    {/* Bagian Merah (Target) */}
                    <div 
                      className="absolute right-0 top-0 h-full bg-rose-500 transition-all duration-700 ease-out" 
                      style={{ width: `${targetPct}%` }}
                    ></div>
                    {/* Garis Indikator Keseimbangan (Kuning) di Tengah */}
                    <div className="absolute left-1/2 top-0 h-full w-0.5 bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.6)] transform -translate-x-1/2 z-10"></div>
                  </div>

                  {/* Ikon Target */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 border border-rose-200">
                    <Shield className="h-5 w-5 text-rose-700" />
                  </div>
                </div>
              </div>

            </div>

            {/* 🛡️ BAGIAN 2: PERBANDINGAN PER MATRA (DARAT, LAUT, UDARA) */}
            <div className="bg-white/80 border border-[#C4B49C]/30 p-6 rounded-2xl shadow-sm">
              <div className="flex flex-col gap-8">
                {(['darat', 'laut', 'udara'] as ArmadaGroup[]).map((group) => {
                  const Icon = groupMeta[group].icon;
                  const colorClass = groupMeta[group].color;
                  const bgClass = groupMeta[group].bg;
                  return (
                    <div key={group} className="rounded-2xl border border-[#C4B49C]/20 bg-[#F9F4E9] p-4">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#C4B49C]/40 ${bgClass} shadow-sm`}>
                            <Icon className={`h-6 w-6 ${colorClass}`} />
                          </div>
                          <div>
                            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#5c3c10]">{group.toUpperCase()}</p>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#8b7e66]">Rincian alutsista per matra</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <button
                          type="button"
                          onClick={() => setExpandedGroup(expandedGroup === group ? null : group)}
                          className="w-full flex items-center justify-between rounded-2xl border border-[#C4B49C]/20 bg-white/90 px-4 py-3 text-left text-sm font-black text-[#5c3c10] transition hover:bg-[#f3eee0]"
                        >
                          <span>{group.toUpperCase()}</span>
                          <span className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#8b7e66]">
                            {expandedGroup === group ? "Sembunyikan" : "Lihat"}
                            {expandedGroup === group ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                          </span>
                        </button>

                        {/* 🔥 PERUBAHAN: Mengganti conditional rendering dengan CSS Transition */}
                        <div
                          className={`flex flex-col md:flex-row md:gap-6 pt-4 overflow-hidden transition-all duration-500 ease-in-out ${
                            expandedGroup === group
                              ? "opacity-100 translate-y-0 max-h-[3000px] pointer-events-auto"
                              : "opacity-0 translate-y-[-10px] max-h-0 pointer-events-none"
                          }`}
                        >
                          {/* Sisi Kiri: Penyerang */}
                          <div className="flex-1 w-full space-y-2">
                            <div className="text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700 mb-2">Penyerang</div>
                            {attackerBreakdown[group].map((item) => (
                              <div key={item.key} className="flex items-center justify-between rounded-xl border border-[#C4B49C]/20 bg-white px-3 py-2 text-xs font-semibold text-[#5c3c10]">
                                <span>{item.label}</span>
                                <span className="font-black">{formatNumber(item.quantity)}</span>
                              </div>
                            ))}
                          </div>

                          {/* Garis Pemisah Vertikal */}
                          <div className="hidden md:block w-[1px] self-stretch bg-[#C4B49C]/20 rounded-full" />

                          {/* Sisi Kanan: Target */}
                          <div className="flex-1 w-full space-y-2">
                            <div className="text-[10px] font-black uppercase tracking-[0.22em] text-rose-700 mb-2">Target</div>
                            {targetBreakdown[group].map((item) => (
                              <div key={item.key} className="flex items-center justify-between rounded-xl border border-[#C4B49C]/20 bg-white px-3 py-2 text-xs font-semibold text-[#5c3c10]">
                                <span>{item.label}</span>
                                <span className="font-black">{formatNumber(item.quantity)}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* 🔥 FOOTER MODAL (Aksi Konfirmasi / Batal) */}
        <div className="px-8 py-4 border-t-2 border-[#C4B49C]/30 bg-[#FAF6EE]/80 relative z-10 shrink-0 flex items-center justify-end gap-4">
          <button onClick={onClose} className="px-6 py-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all font-black text-xs uppercase tracking-wider cursor-pointer">
            Batal
          </button>
          <button 
            onClick={onConfirm} 
            className="px-8 py-2.5 rounded-xl bg-gradient-to-r from-rose-700 to-rose-900 text-[#FAF6EE] shadow-lg shadow-rose-900/30 font-black text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
          >
            <Swords className="w-4 w-4" />
            Konfirmasi Serangan
          </button>
        </div>

      </div>
    </div>
  );
}