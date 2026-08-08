"use client";
import React, { useState, useEffect } from "react";
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
  const [isConfirmBuildOpen, setIsConfirmBuildOpen] = useState(false);
  const [infrastrukturData, setInfrastrukturData] = useState<Record<string, any>>({});

  // 🔥 Load metadata dari JSON file
  useEffect(() => {
    const loadMetadata = async () => {
      try {
        const response = await fetch('/metadata/armada_metadata.json');
        const data = await response.json();
        setInfrastrukturData(data);
      } catch (error) {
        console.error('Error loading infrastructure metadata:', error);
      }
    };
    loadMetadata();
  }, []);

  // 🔥 Helper function to get material stocks from inventory
  // Material production is accumulated in inventory_* fields, updated daily
  const calculateMaterialStocks = (countryDetailData: any) => {
    const stocks: Record<string, number> = {};
    const materialKeys = ['emas', 'uranium', 'batu_bara', 'minyak_bumi', 'gas_alam', 'garam', 
      'litium', 'logam_tanah_jarang', 'bijih_besi', 'semikonduktor', 'mobil', 'sepeda_motor', 'semen_beton', 'kayu'];
    materialKeys.forEach(key => {
      stocks[key] = Number(countryDetailData?.[`inventory_${key}`]) || 0;
    });
    return stocks;
  };

  // 🔥 Helper function to calculate missing materials
  const calculateMissingMaterials = (requirements: any[], stocks: Record<string, number>) => {
    return requirements.filter(req => {
      const stock = stocks[req.resourceKey] ?? 0;
      return stock <= 0;
    });
  };

  // 🔥 Map resource keys to their correct Produksi tab and building key for highlight
  const getTabForResource = (resourceKey: string): { tab: string; buildingKey: string } => {
    const resourceToTabAndBuilding: Record<string, { tab: string; buildingKey: string }> = {
      // Mineral & Energi
      emas: { tab: 'mineral', buildingKey: 'emas' },
      uranium: { tab: 'mineral', buildingKey: 'uranium' },
      batu_bara: { tab: 'mineral', buildingKey: 'batu_bara' },
      minyak_bumi: { tab: 'mineral', buildingKey: 'minyak_bumi' },
      gas_alam: { tab: 'mineral', buildingKey: 'gas_alam' },
      batu_gunung: { tab: 'mineral', buildingKey: 'garam' },
      litium: { tab: 'mineral', buildingKey: 'litium' },
      logam_tanah_jarang: { tab: 'mineral', buildingKey: 'logam_tanah_jarang' },
      bijah_besi: { tab: 'mineral', buildingKey: 'bijih_besi' },
      bijih_besi: { tab: 'mineral', buildingKey: 'bijih_besi' },
      // Manufaktur
      semikonduktor: { tab: 'manufaktur', buildingKey: 'semikonduktor' },
      mobil: { tab: 'manufaktur', buildingKey: 'mobil' },
      sepeda_motor: { tab: 'manufaktur', buildingKey: 'sepeda_motor' },
      semen_beton: { tab: 'manufaktur', buildingKey: 'semen_beton' },
      kayu: { tab: 'manufaktur', buildingKey: 'kayu' },
    };
    return resourceToTabAndBuilding[resourceKey] || { tab: 'kelistrikan', buildingKey: '' };
  };

  const handleInfoClick = (key: string) => {
    // 🔥 Saat klik info button, buka modal pembangunan (bukan info modal)
    const item = infrastrukturData[key];
    setSelectedForBuild({ key, label: item?.label || key });
    setIsConfirmBuildOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="text-xs font-semibold text-[#8b7e66] leading-relaxed">
        Fasilitas pendukung logistik dan pertahanan yang menjadi tulang punggung kekuatan militer nasional.
      </div>

      <div className="grid grid-cols-5 gap-6">
        {Object.keys(infrastrukturData).map((key) => {
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
    const buildingData = selectedForBuild?.key ? infrastrukturData[selectedForBuild.key] : null;
    const materialStocks = calculateMaterialStocks(countryDetail);
    const modalPropsBase = {
      isOpen: isConfirmBuildOpen,
      onClose: () => setIsConfirmBuildOpen(false),
      buildingLabel: selectedForBuild?.label || "",
      buildingDescription: selectedForBuild?.label || "",
      cost: buildingData?.biaya_pembangunan || 0,
      waktuPembangunan: buildingData?.waktu_pembangunan || 0,
      requirements: [] as any[],
      materialStocks: materialStocks,
      anggaran: Number(countryDetail?.anggaran) || 0,
      missingMaterials: calculateMissingMaterials([], materialStocks),
      onConfirm: () => setIsConfirmBuildOpen(false),
      onMaterialClick: (resourceKey: string, label: string) => {
        const { tab, buildingKey } = getTabForResource(resourceKey);
        onGotoProduction?.(tab, buildingKey || resourceKey);
        // Don't close the modal yet - let parent handle the navigation
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
      const barakRequirements = findRequirementsForBuilding("barak", INFANTERI_REQUIREMENTS);
      return (
        <KonfirmasiInfrastrukturModal
          {...modalPropsBase}
          requirements={barakRequirements}
          missingMaterials={calculateMissingMaterials(barakRequirements, materialStocks)}
          capacityType="infanteri"
          currentCapacity={convertBarakToSoldiers(Number(getNestedValue(countryDetail, "barak")))}
          maxCapacity={10000}
          currentBarakCount={Number(getNestedValue(countryDetail, "barak"))}
        />
      );
    }

    // 🔥 HANGAR TANK
    if (selectedForBuild?.key === "hangar_tank") {
      const hangarRequirements = findRequirementsForBuilding("hangar_tank", HANGAR_REQUIREMENTS);
      return (
        <KonfirmasiInfrastrukturModal
          {...modalPropsBase}
          requirements={hangarRequirements}
          missingMaterials={calculateMissingMaterials(hangarRequirements, materialStocks)}
          capacityType="hangar_tank"
          currentTankCount={Number(countryDetail?.armada?.darat?.tank_tempur_utama ?? 0)}
          currentApcCount={Number(countryDetail?.armada?.darat?.apc_ifv ?? 0)}
          currentHangarCount={Number(getNestedValue(countryDetail, "hangar_tank"))}
        />
      );
    }

    // 🔥 GUDANG SENJATA
    if (selectedForBuild?.key === "gudang_senjata") {
      const gudangRequirements = findRequirementsForBuilding("gudang_senjata", GUDANG_REQUIREMENTS);
      return (
        <KonfirmasiInfrastrukturModal
          {...modalPropsBase}
          requirements={gudangRequirements}
          missingMaterials={calculateMissingMaterials(gudangRequirements, materialStocks)}
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
      const lautRequirements = findRequirementsForBuilding("pangkalan_laut", LAUT_REQUIREMENTS);
      return (
        <KonfirmasiInfrastrukturModal
          {...modalPropsBase}
          requirements={lautRequirements}
          missingMaterials={calculateMissingMaterials(lautRequirements, materialStocks)}
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
      const udaraRequirements = findRequirementsForBuilding("pangkalan_udara", UDARA_REQUIREMENTS);
      return (
        <KonfirmasiInfrastrukturModal
          {...modalPropsBase}
          requirements={udaraRequirements}
          missingMaterials={calculateMissingMaterials(udaraRequirements, materialStocks)}
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
