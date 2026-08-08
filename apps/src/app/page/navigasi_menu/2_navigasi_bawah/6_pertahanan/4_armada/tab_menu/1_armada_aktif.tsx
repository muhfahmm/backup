"use client"
import React from "react";
import { Swords, Ship, Plane } from "lucide-react";
import { getArmadaUnitBreakdown } from "./../logic/armadaLogic";

interface TabProps {
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
}

const armadaCatalog = {
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

const groupMeta = {
  darat: { title: "Darat", icon: Swords, accent: "from-rose-700 to-orange-600" },
  laut: { title: "Laut", icon: Ship, accent: "from-sky-700 to-cyan-600" },
  udara: { title: "Udara", icon: Plane, accent: "from-indigo-700 to-violet-600" },
};

const formatNumber = (value: unknown) => {
  const numeric = Number(value ?? 0);
  return Number.isFinite(numeric) ? numeric.toLocaleString("id-ID") : "0";
};

export default function ArmadaAktif({ countryDetail }: TabProps) {
  const payload = countryDetail?.armada && typeof countryDetail.armada === "object" ? countryDetail.armada : countryDetail || {};
  const unitBreakdown = getArmadaUnitBreakdown(payload);

  const resolveQuantity = (dataBlock: any, group: string, key: string) => {
    if (key === "barak") {
      const barakCount = Number(payload?.barak ?? dataBlock?.barak ?? 0);
      return barakCount * 10000;
    }
    return Number(dataBlock[key] ?? 0);
  };

  return (
    <div className="space-y-4">
      <div className="text-xs font-semibold text-[#8b7e66] leading-relaxed mb-4">
        Inventaris alutsista negara dipisahkan berdasarkan kelompok operasional untuk memudahkan evaluasi kekuatan darat, laut, dan udara.
      </div>

      {Object.keys(groupMeta).map((group) => {
        const Icon = groupMeta[group as keyof typeof groupMeta].icon;
        const dataBlock = payload[group] && typeof payload[group] === "object" ? payload[group] : {};

        return (
          <section key={group} className="rounded-2xl border-2 border-[#C4B49C]/45 bg-white/70 p-4 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className={`rounded-xl bg-gradient-to-br ${groupMeta[group as keyof typeof groupMeta].accent} p-2 text-white shadow-sm`}>
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#5c3c10]">{groupMeta[group as keyof typeof groupMeta].title}</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {armadaCatalog[group as keyof typeof armadaCatalog].map((item) => {
                const value = resolveQuantity(dataBlock, group, item.key);
                const summary = unitBreakdown.find((entry) => entry.dataKey === item.key);
                const totalPower = summary?.totalPower ?? 0;
                const totalHealth = summary?.totalHealth ?? 0;

                return (
                  <div key={`${group}-${item.key}`} className="rounded-xl border border-[#C4B49C]/40 bg-[#FAF6EE] p-3">
                    <div className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#8b7e66]">{item.label}</div>
                    <div className="flex items-end justify-between gap-3">
                      <span className="text-xl font-black text-[#5c3c10]">{formatNumber(value)}</span>
                      {value > 0 && <span className="text-[10px] font-bold uppercase text-[#8b7e66]">unit</span>}
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-2 text-[10px] font-bold text-[#6f5b42]">
                      <div className="rounded-md bg-[#efe7d5] px-2 py-1">Kekuatan: {formatNumber(totalPower)}</div>
                      <div className="rounded-md bg-[#efe7d5] px-2 py-1">Total HP: {formatNumber(totalHealth)}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}