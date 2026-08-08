"use client";
import React from "react";

interface TabProps {
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
}

const polisiData = {
  markas_besar_polri: {
    key: "markas_besar_polri",
    label: "Markas Besar Polri",
    biaya_pembangunan: 93750,
    waktu_pembangunan: 90,
    konsumsi_listrik: 1,
    satuan: "Unit"
  },
  akademi_kepolisian: {
    key: "akademi_kepolisian",
    label: "Akademi Kepolisian",
    biaya_pembangunan: 33750,
    waktu_pembangunan: 60,
    konsumsi_listrik: 0.8,
    satuan: "Unit"
  },
  pusat_forensik: {
    key: "pusat_forensik",
    label: "Pusat Forensik",
    biaya_pembangunan: 26250,
    waktu_pembangunan: 60,
    konsumsi_listrik: 0.5,
    satuan: "Unit"
  },
  kantor_polisi: {
    key: "kantor_polisi",
    label: "Kantor Polisi",
    biaya_pembangunan: 18750,
    waktu_pembangunan: 30,
    konsumsi_listrik: 0.5,
    satuan: "Unit"
  },
  pos_polisi: {
    key: "pos_polisi",
    label: "Pos Polisi",
    biaya_pembangunan: 7500,
    waktu_pembangunan: 30,
    konsumsi_listrik: 0.1,
    satuan: "Unit"
  },
  network_cctv: {
    key: "network_cctv",
    label: "Network CCTV",
    biaya_pembangunan: 11250,
    waktu_pembangunan: 5,
    konsumsi_listrik: 0.1,
    satuan: "Unit"
  },
  armada_mobil_polisi: {
    key: "armada_mobil_polisi",
    label: "Armada Mobil Polisi",
    biaya_pembangunan: 3750,
    waktu_pembangunan: 15,
    satuan: "Unit"
  },
  mobil_patroli_interceptor: {
    key: "mobil_patroli_interceptor",
    label: "Mobil Patroli Interceptor",
    biaya_pembangunan: 2250,
    waktu_pembangunan: 15,
    satuan: "Unit"
  },
  unit_roda_dua: {
    key: "unit_roda_dua",
    label: "Unit Roda Dua",
    biaya_pembangunan: 1125,
    waktu_pembangunan: 7,
    satuan: "Unit"
  },
  helikopter_polisi: {
    key: "helikopter_polisi",
    label: "Helikopter Polisi",
    biaya_pembangunan: 33750,
    waktu_pembangunan: 90,
    satuan: "Unit"
  },
  unit_k9: {
    key: "unit_k9",
    label: "Unit K9",
    biaya_pembangunan: 2250,
    waktu_pembangunan: 7,
    satuan: "Unit"
  },
  pasukan_swat: {
    key: "pasukan_swat",
    label: "Pasukan SWAT",
    biaya_pembangunan: 26250,
    waktu_pembangunan: 60,
    satuan: "Unit"
  }
};

const formatNumber = (value: unknown) => {
  const numeric = Number(value ?? 0);
  return Number.isFinite(numeric) ? numeric.toLocaleString("id-ID") : "0";
};

const getNestedValue = (obj: any, key: string): number => {
  if (obj?.[key] !== undefined && obj?.[key] !== null) return Number(obj[key]);
  if (obj?.armada_polisi?.[key] !== undefined && obj?.armada_polisi?.[key] !== null) return Number(obj.armada_polisi[key]);
  return 0;
};

export default function ArmadaPolisi({ countryDetail, setCountryDetail: _setCountryDetail }: TabProps) {
  return (
    <div className="space-y-4">
      <div className="text-xs font-semibold text-[#8b7e66] leading-relaxed mb-4">
        Perangkat keamanan dalam negeri yang berperan menjaga stabilitas dan ketertiban masyarakat dari tingkat nasional hingga daerah.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {(Object.keys(polisiData) as (keyof typeof polisiData)[]).map((key) => {
          const item = polisiData[key];
          const value = getNestedValue(countryDetail, key);

          return (
            <div key={key} className="rounded-xl border border-[#C4B49C]/40 bg-[#FAF6EE] p-3">
              <div className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#8b7e66]">{item.label}</div>
              
              <div className="flex items-end justify-between gap-3 border-b border-[#C4B49C]/20 pb-2 mb-2">
                <span className="text-xl font-black text-[#5c3c10]">{formatNumber(value)}</span>
                {Number(value) > 0 && <span className="text-[10px] font-bold uppercase text-[#8b7e66]">{item.satuan}</span>}
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px] font-bold text-[#6f5b42]">
                <div className="flex justify-between items-center rounded-md bg-[#efe7d5] px-2 py-1">
                  <span className="text-[#8b7e66]">Biaya:</span>
                  <span>{formatNumber(item.biaya_pembangunan)}</span>
                </div>
                <div className="flex justify-between items-center rounded-md bg-[#efe7d5] px-2 py-1">
                  <span className="text-[#8b7e66]">Waktu:</span>
                  <span>{item.waktu_pembangunan} h.</span>
                </div>
                {(item as any).konsumsi_listrik !== undefined && (item as any).konsumsi_listrik !== null && Number((item as any).konsumsi_listrik) > 0 && (
                  <div className="flex justify-between items-center rounded-md bg-[#efe7d5] px-2 py-1 col-span-2">
                    <span className="text-[#8b7e66]">Listrik:</span>
                    <span>{formatNumber((item as any).konsumsi_listrik)} kW</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}