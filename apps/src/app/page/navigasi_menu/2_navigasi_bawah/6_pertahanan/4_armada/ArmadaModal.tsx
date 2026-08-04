"use client"
import React from "react";
import { X, ShieldAlert, Swords, Ship, Plane } from "lucide-react";
import { getArmadaUnitBreakdown } from "./logic/armadaLogic";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
}

const armadaCatalog = {
  darat: [
    { key: "barak", label: "Barak Militer" },
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

const groupMeta = {
  darat: { title: "Darat", icon: Swords, accent: "from-rose-700 to-orange-600" },
  laut: { title: "Laut", icon: Ship, accent: "from-sky-700 to-cyan-600" },
  udara: { title: "Udara", icon: Plane, accent: "from-indigo-700 to-violet-600" },
};

const formatNumber = (value: unknown) => {
  const numeric = Number(value ?? 0);
  return Number.isFinite(numeric) ? numeric.toLocaleString("id-ID") : "0";
};

export default function ArmadaModal({ isOpen, onClose, countryDetail, setCountryDetail }: ModalProps) {
  if (!isOpen) return null;

  const countryName =
    countryDetail?.country ||
    countryDetail?.nama_negara ||
    countryDetail?.name_id ||
    countryDetail?.name_en ||
    "Negara";

  const payload = countryDetail?.armada && typeof countryDetail.armada === "object" ? countryDetail.armada : countryDetail || {};
  const unitBreakdown = getArmadaUnitBreakdown(payload);

  const renderGroup = (group: keyof typeof armadaCatalog) => {
    const Icon = groupMeta[group].icon;
    const dataBlock = payload[group] && typeof payload[group] === "object" ? payload[group] : {};

    return (
      <section key={group} className="rounded-2xl border-2 border-[#C4B49C]/45 bg-white/70 p-4 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <div className={`rounded-xl bg-gradient-to-br ${groupMeta[group].accent} p-2 text-white shadow-sm`}>
            <Icon className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#5c3c10]">{groupMeta[group].title}</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {armadaCatalog[group].map((item) => {
            const value = group === "darat" && item.key === "barak"
              ? Number(payload?.barak ?? dataBlock?.barak ?? 0)
              : Number(dataBlock[item.key] ?? 0);
            const summary = unitBreakdown.find((entry) => entry.dataKey === item.key);
            
            // Kekuatan tetap dikalikan dengan jumlah unit
            const totalPower = summary?.totalPower ?? 0;

            // 🔥 PERBAIKAN: HP tidak dikalikan dengan jumlah unit!
            // Kita membagi totalHealth dari logic dengan value untuk mendapatkan Base HP per unit.
            let totalHealth = 0;
            if (summary?.totalHealth !== undefined) {
                if (value > 0) {
                    totalHealth = summary.totalHealth / value;
                } else {
                    totalHealth = 0;
                }
            }

            return (
              <div key={`${group}-${item.key}`} className="rounded-xl border border-[#C4B49C]/40 bg-[#FAF6EE] p-3">
                <div className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#8b7e66]">{item.label}</div>
                <div className="flex items-end justify-between gap-3">
                  <span className="text-xl font-black text-[#5c3c10]">{formatNumber(value)}</span>
                  <span className="text-[10px] font-bold uppercase text-[#8b7e66]">unit</span>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-[10px] font-bold text-[#6f5b42]">
                  <div className="rounded-md bg-[#efe7d5] px-2 py-1">Kekuatan: {formatNumber(totalPower)}</div>
                  <div className="rounded-md bg-[#efe7d5] px-2 py-1">HP: {formatNumber(totalHealth)}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-7xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-rose-700 animate-pulse" />
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Armada</h2>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8b7e66] mt-1">{countryName}</p>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto p-6 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="mb-4 text-xs font-semibold text-[#8b7e66] leading-relaxed">
            Inventaris alutsista negara dipisahkan berdasarkan kelompok operasional untuk memudahkan evaluasi kekuatan darat, laut, dan udara.
          </div>

          <div className="space-y-4">
            {Object.keys(groupMeta).map((group) => renderGroup(group as keyof typeof armadaCatalog))}
          </div>
        </div>
      </div>
    </div>
  );
}