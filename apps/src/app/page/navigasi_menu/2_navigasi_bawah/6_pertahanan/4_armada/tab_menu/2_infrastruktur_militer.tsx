"use client";
import React, { useState } from "react";
import { Info } from "lucide-react";
import { convertBarakToSoldiers } from "../logic/1_barak_logic";
import KonfirmasiPembangunanModal from "../modals_konfirmasi_pembangunan/konfirmasi_pembangunan_modal";

interface TabProps {
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
}

const infrastrukturData = {
  barak: {
    key: "barak",
    label: "Barak",
    deskripsi: "Pasukan Infanteri",
    biaya_pembangunan: 0,
    waktu_pembangunan: 0,
    lowongan_kerja: 10000,
    kapasitas: 1,
    satuan_kapasitas: "Pasukan Infanteri",
    konsumsi_listrik: 0.1,
    isBarak: true
  },
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
  // 🔥 Barak di tab Infrastruktur: JANGAN dikalikan 10000 (tampilkan nilai asli)
  if (key === "barak") {
    const barakCount = Number(obj?.[key] ?? 0) || Number(obj?.pertahanan?.[key] ?? 0) || 0;
    return barakCount; // Return nilai asli, bukan convertBarakToSoldiers
  }
  
  if (obj?.[key] !== undefined && obj?.[key] !== null) return Number(obj[key]);
  if (obj?.pertahanan?.[key] !== undefined && obj?.pertahanan?.[key] !== null) return Number(obj.pertahanan[key]);
  return 0;
};

export default function InfrastrukturMiliter({ countryDetail, setCountryDetail: _setCountryDetail }: TabProps) {
  // 🔥 Setup payload dari countryDetail.armada
  const payload = countryDetail?.armada && typeof countryDetail.armada === "object" ? countryDetail.armada : countryDetail || {};

  // 🔥 State untuk Modal Konfirmasi Pembangunan
  const [selectedForBuild, setSelectedForBuild] = useState<{ key: string; label: string } | null>(null);
  const [isConfirmBuildOpen, setIsConfirmBuildOpen] = useState(false);

  const handleInfoClick = (key: string) => {
    // 🔥 Saat klik info button, buka modal pembangunan (bukan info modal)
    setSelectedForBuild({ key, label: infrastrukturData[key as keyof typeof infrastrukturData].label });
    setIsConfirmBuildOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="text-xs font-semibold text-[#8b7e66] leading-relaxed">
        Fasilitas pendukung logistik dan pertahanan yang menjadi tulang punggung kekuatan militer nasional.
      </div>

      <div className="grid grid-cols-5 gap-6">
        {(Object.keys(infrastrukturData) as (keyof typeof infrastrukturData)[]).map((key) => {
          const item = infrastrukturData[key];
          const value = getNestedValue(countryDetail, key);

          return (
            <div 
              key={key}
              onClick={() => {
                setSelectedForBuild({ key, label: item.label });
                setIsConfirmBuildOpen(true);
              }}
              className="relative rounded-2xl overflow-hidden flex flex-col transition-all bg-white/95 border-2 border-[#C4B49C]/30 shadow-md hover:shadow-lg hover:border-[#C4B49C]/50 cursor-pointer p-5 min-h-[180px]"
            >
              
              <div className="flex items-start justify-between mb-3">
                <p className="text-[11px] font-black uppercase text-[#8b7e66] tracking-wider flex-1 pr-2">
                  {item.label}
                </p>
                <button
                  onClick={() => handleInfoClick(key)}
                  className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#5c3c10]/10 hover:bg-[#5c3c10]/20 text-[#5c3c10] transition-colors cursor-pointer"
                >
                  <Info className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col justify-between flex-1">
                <div>
                  <div className="text-3xl font-black text-[#2e261a] mb-1">
                    {formatNumber(value)}
                  </div>
                  <p className="text-[10px] font-bold text-[#8b7e66]">{item.satuan_kapasitas || "Unit"}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 🔥 Modal Konfirmasi Pembangunan */}
      {selectedForBuild && (
        <KonfirmasiPembangunanModal
          isOpen={isConfirmBuildOpen}
          onClose={() => setIsConfirmBuildOpen(false)}
          buildingLabel={selectedForBuild.label}
          buildingDescription={selectedForBuild.label}
          cost={0}
          requirements={[]}
          materialStocks={{}}
          anggaran={Number(countryDetail?.anggaran) || 0}
          missingMaterials={[]}
          onConfirm={() => {
            // TODO: Implement build logic
            setIsConfirmBuildOpen(false);
          }}
          onMaterialClick={() => {}}
          loadingMetadata={false}
          isDisabled={false}
          // 🔥 PROPS KAPASITAS BARAK
          capacityType={selectedForBuild.key === "barak" ? "infanteri" : selectedForBuild.key === "hangar_tank" ? "hangar_tank" : selectedForBuild.key === "gudang_senjata" ? "gudang_senjata" : selectedForBuild.key === "pangkalan_laut" ? "pangkalan_laut" : selectedForBuild.key === "pangkalan_udara" ? "pangkalan_udara" : undefined}
          // INFANTERI CAPACITY
          currentCapacity={selectedForBuild.key === "barak" ? convertBarakToSoldiers(Number(getNestedValue(countryDetail, "barak"))) : undefined}
          maxCapacity={selectedForBuild.key === "barak" ? 10000 : undefined}
          currentBarakCount={selectedForBuild.key === "barak" ? Number(getNestedValue(countryDetail, "barak")) : undefined}
          // HANGAR TANK CAPACITY - dari armada_militer (sudah ada di countryDetail.armada)
          currentTankCount={selectedForBuild.key === "hangar_tank" ? Number(payload?.darat?.tank_tempur_utama ?? 0) : 0}
          currentApcCount={selectedForBuild.key === "hangar_tank" ? Number(payload?.darat?.apc_ifv ?? 0) : 0}
          currentHangarCount={selectedForBuild.key === "hangar_tank" ? Number(getNestedValue(countryDetail, "hangar_tank")) : 0}
          // GUDANG SENJATA CAPACITY - dari armada_militer
          currentArtileriCount={selectedForBuild.key === "gudang_senjata" ? Number(payload?.darat?.artileri_berat ?? 0) : 0}
          currentRoketCount={selectedForBuild.key === "gudang_senjata" ? Number(payload?.darat?.sistem_peluncur_roket ?? 0) : 0}
          currentPertahanUdaraCount={selectedForBuild.key === "gudang_senjata" ? Number(payload?.darat?.pertahanan_udara_mobile ?? 0) : 0}
          currentKendaraanTaktisCount={selectedForBuild.key === "gudang_senjata" ? Number(payload?.darat?.kendaraan_taktis ?? 0) : 0}
          currentGudangCount={selectedForBuild.key === "gudang_senjata" ? Number(getNestedValue(countryDetail, "gudang_senjata")) : 0}
          // PANGKALAN LAUT CAPACITY - dari armada_militer
          kapalIndukCount={selectedForBuild.key === "pangkalan_laut" ? Number(payload?.laut?.kapal_induk ?? 0) : 0}
          kapalIndukNuklirCount={selectedForBuild.key === "pangkalan_laut" ? Number(payload?.laut?.kapal_induk_nuklir ?? 0) : 0}
          kapalDestroyerCount={selectedForBuild.key === "pangkalan_laut" ? Number(payload?.laut?.kapal_destroyer ?? 0) : 0}
          kapalKorvetCount={selectedForBuild.key === "pangkalan_laut" ? Number(payload?.laut?.kapal_korvet ?? 0) : 0}
          kapalSelamNuklirCount={selectedForBuild.key === "pangkalan_laut" ? Number(payload?.laut?.kapal_selam_nuklir ?? 0) : 0}
          kapalSelamRegulerCount={selectedForBuild.key === "pangkalan_laut" ? Number(payload?.laut?.kapal_selam_regular ?? 0) : 0}
          kapalRanjauCount={selectedForBuild.key === "pangkalan_laut" ? Number(payload?.laut?.kapal_ranjau ?? 0) : 0}
          kapalLogistikCount={selectedForBuild.key === "pangkalan_laut" ? Number(payload?.laut?.kapal_logistik ?? 0) : 0}
          currentPangkalanLautCount={selectedForBuild.key === "pangkalan_laut" ? Number(getNestedValue(countryDetail, "pangkalan_laut")) : 0}
          // PANGKALAN UDARA CAPACITY - dari armada_militer
          jetTemturSilamanCount={selectedForBuild.key === "pangkalan_udara" ? Number(payload?.udara?.jet_tempur_siluman ?? 0) : 0}
          jetTemturInterceptorCount={selectedForBuild.key === "pangkalan_udara" ? Number(payload?.udara?.jet_tempur_interceptor ?? 0) : 0}
          pesawatPengebomCount={selectedForBuild.key === "pangkalan_udara" ? Number(payload?.udara?.pesawat_pengebom ?? 0) : 0}
          helikopterSerangCount={selectedForBuild.key === "pangkalan_udara" ? Number(payload?.udara?.helikopter_serang ?? 0) : 0}
          pesawatPengintaiCount={selectedForBuild.key === "pangkalan_udara" ? Number(payload?.udara?.pesawat_pengintai ?? 0) : 0}
          droneIntaiUavCount={selectedForBuild.key === "pangkalan_udara" ? Number(payload?.udara?.drone_intai_uav ?? 0) : 0}
          droneKamikazeCount={selectedForBuild.key === "pangkalan_udara" ? Number(payload?.udara?.drone_kamikaze ?? 0) : 0}
          pesawatAngkutCount={selectedForBuild.key === "pangkalan_udara" ? Number(payload?.udara?.pesawat_angkut ?? 0) : 0}
          currentPangkalanUdaraCount={selectedForBuild.key === "pangkalan_udara" ? Number(getNestedValue(countryDetail, "pangkalan_udara")) : 0}
        />
      )}
    </div>
  );
}