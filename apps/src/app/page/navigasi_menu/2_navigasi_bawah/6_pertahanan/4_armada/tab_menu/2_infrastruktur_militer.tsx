"use client";
import React, { useState } from "react";
import { Info } from "lucide-react";
import { convertBarakToSoldiers } from "../logic/1_barak_logic";
import KonfirmasiInfrastrukturModal from "../modals_konfirmasi_pembangunan/2_konfirmasi_infrastruktur_modal";
// 🔥 Import requirements dari logic folders
import { REQUIREMENTS as INFANTERI_REQUIREMENTS } from "../requirements_logic/1_infanteri/requirements";
import { REQUIREMENTS as HANGAR_REQUIREMENTS } from "../requirements_logic/2_hangar_tank/requirements";
import { REQUIREMENTS as GUDANG_REQUIREMENTS } from "../requirements_logic/3_gudang_senjata/requirements";
import { REQUIREMENTS as LAUT_REQUIREMENTS } from "../requirements_logic/4_pangkalan_laut/requirements";
import { REQUIREMENTS as UDARA_REQUIREMENTS } from "../requirements_logic/5_pangkalan_udara/requirements";

interface TabProps {
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
  onCapacityFull?: (infraKey: string) => void;
  highlightKey?: string | null;
  onGotoProduction?: (tab: string, key: string) => void;
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

export default function InfrastrukturMiliter({ countryDetail, setCountryDetail: _setCountryDetail, highlightKey, onGotoProduction }: TabProps) {
  // 🔥 State untuk Modal Konfirmasi Pembangunan
  const [selectedForBuild, setSelectedForBuild] = useState<{ key: string; label: string } | null>(null);

  // 🔥 Map resource keys to their correct Produksi tab
  const getTabForResource = (resourceKey: string): string => {
    const resourceToTab: Record<string, string> = {
      // Mineral & Energi
      emas: 'mineral',
      uranium: 'mineral',
      batu_bara: 'mineral',
      minyak_bumi: 'mineral',
      gas_alam: 'mineral',
      batu_gunung: 'mineral',
      litium: 'mineral',
      logam_tanah_jarang: 'mineral',
      bijih_besi: 'mineral',
      // Manufaktur
      semikonduktor: 'manufaktur',
      mobil: 'manufaktur',
      sepeda_motor: 'manufaktur',
      semen_beton: 'manufaktur',
      kayu: 'manufaktur',
    };
    return resourceToTab[resourceKey] || 'kelistrikan';
  };
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
              className={`relative rounded-2xl overflow-hidden flex flex-col transition-all bg-white/95 border-2 shadow-md hover:shadow-lg cursor-pointer p-5 min-h-[180px] ${highlightKey === key ? 'border-emerald-400 shadow-emerald-200 hover:border-emerald-500' : 'border-[#C4B49C]/30 hover:border-[#C4B49C]/50'}`}
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
      {selectedForBuild && getModalProps()}
    </div>
  );

  // 🔥 Helper function untuk generate modal props berdasarkan selectedForBuild.key
  function getModalProps() {
    const modalPropsBase = {
      isOpen: isConfirmBuildOpen,
      onClose: () => setIsConfirmBuildOpen(false),
      buildingLabel: selectedForBuild?.label || "",
      buildingDescription: selectedForBuild?.label || "",
      cost: 0,
      requirements: [] as any[],
      materialStocks: countryDetail?.resources || {},
      anggaran: Number(countryDetail?.anggaran) || 0,
      missingMaterials: [] as any[],
      onConfirm: () => setIsConfirmBuildOpen(false),
      onMaterialClick: (resourceKey, label) => {
        setIsConfirmBuildOpen(false);
        const tab = getTabForResource(resourceKey);
        onGotoProduction?.(tab, resourceKey);
      },
      loadingMetadata: false,
      isDisabled: false,
    };

    // 🔥 Helper: Find requirements untuk specific building
    const findRequirementsForBuilding = (buildingKey: string, requirementsArray: any[]) => {
      const found = requirementsArray.find((r) => r.buildingKey === buildingKey);
      return found?.requirements || [];
    };

    // 🔥 INFANTERI (BARAK)
    if (selectedForBuild?.key === "barak") {
      return (
        <KonfirmasiInfrastrukturModal
          {...modalPropsBase}
          requirements={findRequirementsForBuilding("barak", INFANTERI_REQUIREMENTS)}
          capacityType="infanteri"
          currentCapacity={convertBarakToSoldiers(Number(getNestedValue(countryDetail, "barak")))}
          maxCapacity={10000}
          currentBarakCount={Number(getNestedValue(countryDetail, "barak"))}
        />
      );
    }

    // 🔥 HANGAR TANK
    if (selectedForBuild?.key === "hangar_tank") {
      return (
        <KonfirmasiInfrastrukturModal
          {...modalPropsBase}
          requirements={findRequirementsForBuilding("hangar_tank", HANGAR_REQUIREMENTS)}
          capacityType="hangar_tank"
          currentTankCount={Number(countryDetail?.armada?.darat?.tank_tempur_utama ?? 0)}
          currentApcCount={Number(countryDetail?.armada?.darat?.apc_ifv ?? 0)}
          currentHangarCount={Number(getNestedValue(countryDetail, "hangar_tank"))}
        />
      );
    }

    // 🔥 GUDANG SENJATA
    if (selectedForBuild?.key === "gudang_senjata") {
      return (
        <KonfirmasiInfrastrukturModal
          {...modalPropsBase}
          requirements={findRequirementsForBuilding("gudang_senjata", GUDANG_REQUIREMENTS)}
          capacityType="gudang_senjata"
          currentArtileriCount={Number(countryDetail?.armada?.darat?.artileri_berat ?? 0)}
          currentRoketCount={Number(countryDetail?.armada?.darat?.sistem_peluncur_roket ?? 0)}
          currentPertahanUdaraCount={Number(countryDetail?.armada?.darat?.pertahanan_udara_mobile ?? 0)}
          currentKendaraanTaktisCount={Number(countryDetail?.armada?.darat?.kendaraan_taktis ?? 0)}
          currentGudangCount={Number(getNestedValue(countryDetail, "gudang_senjata"))}
        />
      );
    }

    // 🔥 PANGKALAN LAUT
    if (selectedForBuild?.key === "pangkalan_laut") {
      return (
        <KonfirmasiInfrastrukturModal
          {...modalPropsBase}
          requirements={findRequirementsForBuilding("pangkalan_laut", LAUT_REQUIREMENTS)}
          capacityType="pangkalan_laut"
          kapalIndukCount={Number(countryDetail?.armada?.laut?.kapal_induk ?? 0)}
          kapalIndukNuklirCount={Number(countryDetail?.armada?.laut?.kapal_induk_nuklir ?? 0)}
          kapalDestroyerCount={Number(countryDetail?.armada?.laut?.kapal_destroyer ?? 0)}
          kapalKorvetCount={Number(countryDetail?.armada?.laut?.kapal_korvet ?? 0)}
          kapalSelamNuklirCount={Number(countryDetail?.armada?.laut?.kapal_selam_nuklir ?? 0)}
          kapalSelamRegulerCount={Number(countryDetail?.armada?.laut?.kapal_selam_regular ?? 0)}
          kapalRanjauCount={Number(countryDetail?.armada?.laut?.kapal_ranjau ?? 0)}
          kapalLogistikCount={Number(countryDetail?.armada?.laut?.kapal_logistik ?? 0)}
          currentPangkalanLautCount={Number(getNestedValue(countryDetail, "pangkalan_laut"))}
        />
      );
    }

    // 🔥 PANGKALAN UDARA
    if (selectedForBuild?.key === "pangkalan_udara") {
      return (
        <KonfirmasiInfrastrukturModal
          {...modalPropsBase}
          requirements={findRequirementsForBuilding("pangkalan_udara", UDARA_REQUIREMENTS)}
          capacityType="pangkalan_udara"
          jetTemturSilamanCount={Number(countryDetail?.armada?.udara?.jet_tempur_siluman ?? 0)}
          jetTemturInterceptorCount={Number(countryDetail?.armada?.udara?.jet_tempur_interceptor ?? 0)}
          pesawatPengebomCount={Number(countryDetail?.armada?.udara?.pesawat_pengebom ?? 0)}
          helikopterSerangCount={Number(countryDetail?.armada?.udara?.helikopter_serang ?? 0)}
          pesawatPengintaiCount={Number(countryDetail?.armada?.udara?.pesawat_pengintai ?? 0)}
          droneIntaiUavCount={Number(countryDetail?.armada?.udara?.drone_intai_uav ?? 0)}
          droneKamikazeCount={Number(countryDetail?.armada?.udara?.drone_kamikaze ?? 0)}
          pesawatAngkutCount={Number(countryDetail?.armada?.udara?.pesawat_angkut ?? 0)}
          currentPangkalanUdaraCount={Number(getNestedValue(countryDetail, "pangkalan_udara"))}
        />
      );
    }

    return null;
  }
}