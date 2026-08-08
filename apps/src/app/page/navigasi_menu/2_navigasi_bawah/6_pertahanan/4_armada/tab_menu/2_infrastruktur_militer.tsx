"use client";
import React from "react";

interface TabProps {
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
}

const infrastrukturData = {
  gudang_senjata: {
    key: "gudang_senjata",
    label: "Gudang Senjata",
    deskripsi: "Penyimpanan Amunisi",
    biaya_pembangunan: 26250,
    waktu_pembangunan: 30,
    lowongan_kerja: 100,
    kapasitas: 10000,
    satuan_kapasitas: "Unit Amunisi",
    konsumsi_listrik: 0.5
  },
  hangar_tank: {
    key: "hangar_tank",
    label: "Hangar Tank",
    deskripsi: "Garasi Tempur",
    biaya_pembangunan: 63750,
    waktu_pembangunan: 30,
    lowongan_kerja: 150,
    kapasitas: 50,
    satuan_kapasitas: "Main Battle Tank",
    konsumsi_listrik: 0.5
  },
  pangkalan_udara: {
    key: "pangkalan_udara",
    label: "Pangkalan Udara",
    deskripsi: "Fasilitas Dirgantara",
    biaya_pembangunan: 337500,
    waktu_pembangunan: 60,
    lowongan_kerja: 500,
    kapasitas: 24,
    satuan_kapasitas: "Pesawat Tempur",
    konsumsi_listrik: 0.5
  },
  pangkalan_laut: {
    key: "pangkalan_laut",
    label: "Pangkalan Laut",
    deskripsi: "Fasilitas Maritim",
    biaya_pembangunan: 412500,
    waktu_pembangunan: 120,
    lowongan_kerja: 450,
    kapasitas: 12,
    satuan_kapasitas: "Kapal Perang",
    konsumsi_listrik: 0.5
  }
};

const formatNumber = (value: unknown) => {
  const numeric = Number(value ?? 0);
  return Number.isFinite(numeric) ? numeric.toLocaleString("id-ID") : "0";
};

const getNestedValue = (obj: any, key: string): number => {
  if (obj?.[key] !== undefined && obj?.[key] !== null) return Number(obj[key]);
  if (obj?.pertahanan?.[key] !== undefined && obj?.pertahanan?.[key] !== null) return Number(obj.pertahanan[key]);
  return 0;
};

export default function InfrastrukturMiliter({ countryDetail, setCountryDetail: _setCountryDetail }: TabProps) {
  return (
    <div className="space-y-4">
      <div className="text-xs font-semibold text-[#8b7e66] leading-relaxed mb-4">
        Fasilitas pendukung logistik dan pertahanan yang menjadi tulang punggung kekuatan militer nasional.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {(Object.keys(infrastrukturData) as (keyof typeof infrastrukturData)[]).map((key) => {
          const item = infrastrukturData[key];
          const value = getNestedValue(countryDetail, key);

          return (
            <div key={key} className="rounded-xl border border-[#C4B49C]/40 bg-[#FAF6EE] p-3">
              <div className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#8b7e66]">{item.label}</div>
              
              <div className="flex items-end justify-between gap-3 border-b border-[#C4B49C]/20 pb-2 mb-2">
                <span className="text-xl font-black text-[#5c3c10]">{formatNumber(value)}</span>
                {Number(value) > 0 && <span className="text-[10px] font-bold uppercase text-[#8b7e66]">{item.satuan_kapasitas || "Unit"}</span>}
              </div>

              <div className="grid grid-cols-2 gap-y-1 text-[10px] font-bold text-[#6f5b42]">
                <div className="flex justify-between items-center rounded-md bg-[#efe7d5] px-2 py-1">
                  <span className="text-[#8b7e66]">Biaya:</span>
                  <span>{formatNumber(item.biaya_pembangunan)}</span>
                </div>
                <div className="flex justify-between items-center rounded-md bg-[#efe7d5] px-2 py-1">
                  <span className="text-[#8b7e66]">Waktu:</span>
                  <span>{item.waktu_pembangunan} h.</span>
                </div>
                <div className="flex justify-between items-center rounded-md bg-[#efe7d5] px-2 py-1">
                  <span className="text-[#8b7e66]">Pekerja:</span>
                  <span>{formatNumber(item.lowongan_kerja)}</span>
                </div>
                <div className="flex justify-between items-center rounded-md bg-[#efe7d5] px-2 py-1">
                  <span className="text-[#8b7e66]">Listrik:</span>
                  <span>{formatNumber(item.konsumsi_listrik)} kW</span>
                </div>
                {item.kapasitas && (
                  <div className="flex justify-between items-center rounded-md bg-[#efe7d5] px-2 py-1 col-span-2">
                    <span className="text-[#8b7e66]">Kapasitas:</span>
                    <span>{formatNumber(item.kapasitas)} {item.satuan_kapasitas}</span>
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