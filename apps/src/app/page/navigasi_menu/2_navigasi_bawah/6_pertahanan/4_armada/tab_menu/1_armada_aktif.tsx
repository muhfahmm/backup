"use client"
import React, { useState } from "react";
import { Swords, Ship, Plane, Info } from "lucide-react";
import { getArmadaUnitBreakdown } from "../logic/armadaLogic";
import { convertBarakToSoldiers } from "../logic/1_barak_logic";
import KonfirmasiArmadaAktifModal from "../modals_konfirmasi_pembangunan/1_konfirmasi_armada_aktif_modal";
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

// 🔥 Flat list untuk mencari item
const allArmadaItems = [...armadaCatalog.darat, ...armadaCatalog.laut, ...armadaCatalog.udara];

const groupMeta = {
  darat: { title: "Darat", icon: Swords, accent: "from-rose-700 to-orange-600" },
  laut: { title: "Laut", icon: Ship, accent: "from-sky-700 to-cyan-600" },
  udara: { title: "Udara", icon: Plane, accent: "from-indigo-700 to-violet-600" },
};
const groupKeys = Object.keys(groupMeta) as (keyof typeof groupMeta)[];

const formatNumber = (value: unknown) => {
  const numeric = Number(value ?? 0);
  return Number.isFinite(numeric) ? numeric.toLocaleString("id-ID") : "0";
};

export default function ArmadaAktif({ countryDetail, setCountryDetail: _setCountryDetail, onCapacityFull, highlightKey, onGotoProduction }: TabProps) {
  const payload = countryDetail?.armada && typeof countryDetail.armada === "object" ? countryDetail.armada : countryDetail || {};
  const unitBreakdown = getArmadaUnitBreakdown(payload);

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

  const [infoKey, setInfoKey] = useState<string | null>(null);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [selectedForBuild, setSelectedForBuild] = useState<{ key: string; label: string } | null>(null);
  const [isConfirmBuildOpen, setIsConfirmBuildOpen] = useState(false);

  const resolveQuantity = (dataBlock: any, group: string, key: string) => {
    if (key === "barak") {
      const barakCount = Number(payload?.barak ?? dataBlock?.barak ?? 0);
      return convertBarakToSoldiers(barakCount);
    }
    return Number(dataBlock[key] ?? 0);
  };

  const handleInfoClick = (key: string) => {
    setInfoKey(key);
    setIsInfoOpen(true);
  };

  // 🔥 Temukan item yang dipilih
  const selectedItem = infoKey ? allArmadaItems.find((i) => i.key === infoKey) : null;

  // 🔥 Temukan kategori dari item yang dipilih
  const selectedCategory = selectedItem
    ? groupKeys.find((g) => armadaCatalog[g].some((i) => i.key === selectedItem.key))
    : undefined;

  const findMeta = (key: string) => {
    // Untuk armada, meta biasanya kosong karena armada tidak memiliki biaya/produksi
    return {};
  };

  return (
    <div className="space-y-6">
      <div className="text-xs font-semibold text-[#8b7e66] leading-relaxed">
        Inventaris alutsista negara dipisahkan berdasarkan kelompok operasional untuk memudahkan evaluasi kekuatan darat, laut, dan udara.
      </div>

      {groupKeys.map((group) => {
        const Icon = groupMeta[group].icon;
        const dataBlock = payload[group] && typeof payload[group] === "object" ? payload[group] : {};

        return (
          <section key={group} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className={`rounded-xl bg-gradient-to-br ${groupMeta[group].accent} p-2 text-white shadow-sm`}>
                <Icon className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#5c3c10]">{groupMeta[group].title}</h3>
            </div>

            <div className="grid grid-cols-5 gap-6">
              {armadaCatalog[group].map((item) => {
                const value = resolveQuantity(dataBlock, group, item.key);
                const summary = unitBreakdown.find((entry) => entry.dataKey === item.key);
                const totalPower = summary?.totalPower ?? 0;
                const totalHealth = summary?.totalHealth ?? 0;

                return (
                  <div
                    key={`${group}-${item.key}`}
                    onClick={() => {
                      setSelectedForBuild({ key: item.key, label: item.label });
                      setIsConfirmBuildOpen(true);
                    }}
                    className="relative rounded-2xl overflow-hidden flex flex-col transition-all bg-white/95 border-2 border-[#C4B49C]/30 shadow-md hover:shadow-lg hover:border-[#C4B49C]/50 cursor-pointer p-5 min-h-[180px]"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <p className="text-[11px] font-black uppercase text-[#8b7e66] tracking-wider flex-1 pr-2">
                        {item.label}
                      </p>
                      <button
                        onClick={() => handleInfoClick(item.key)}
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
                        <p className="text-[10px] font-bold text-[#8b7e66]">unit</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* 🔥 Modal Konfirmasi Pembangunan */}
      {selectedForBuild && (
        <KonfirmasiArmadaAktifModal
          isOpen={isConfirmBuildOpen}
          onClose={() => setIsConfirmBuildOpen(false)}
          buildingLabel={selectedForBuild.label}
          buildingDescription={selectedForBuild.label}
          cost={0}
          requirements={getRequirementsForArmada(selectedForBuild.key)}
          materialStocks={countryDetail?.resources || {}}
          anggaran={Number(countryDetail?.anggaran) || 0}
          missingMaterials={[]}
          onConfirm={() => {
            // TODO: Implement build logic
            setIsConfirmBuildOpen(false);
          }}
          onMaterialClick={(resourceKey, label) => {
            setIsConfirmBuildOpen(false);
            const tab = getTabForResource(resourceKey);
            onGotoProduction?.(tab, resourceKey);
          }}
          loadingMetadata={false}
          isDisabled={false}
          // 🔥 PROPS KAPASITAS INFANTERI - hanya untuk barak
          capacityType={selectedForBuild.key === "barak" ? "infanteri" : selectedForBuild.key === "tank_tempur_utama" || selectedForBuild.key === "apc_ifv" ? "hangar_tank" : selectedForBuild.key === "artileri_berat" || selectedForBuild.key === "sistem_peluncur_roket" || selectedForBuild.key === "pertahanan_udara_mobile" || selectedForBuild.key === "kendaraan_taktis" ? "gudang_senjata" : ["kapal_induk", "kapal_induk_nuklir", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"].includes(selectedForBuild.key) ? "pangkalan_laut" : ["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"].includes(selectedForBuild.key) ? "pangkalan_udara" : undefined}
          // INFANTERI CAPACITY
          currentCapacity={selectedForBuild.key === "barak" ? convertBarakToSoldiers(Number(payload?.barak ?? 0)) : undefined}
          maxCapacity={selectedForBuild.key === "barak" ? 10000 : undefined}
          currentBarakCount={selectedForBuild.key === "barak" ? Number(payload?.barak ?? 0) : undefined}
          // HANGAR TANK CAPACITY - Ambil dari countryDetail level atas OR countryDetail.pertahanan
          currentTankCount={selectedForBuild.key === "tank_tempur_utama" || selectedForBuild.key === "apc_ifv" ? Number(payload?.darat?.tank_tempur_utama ?? 0) : 0}
          currentApcCount={selectedForBuild.key === "tank_tempur_utama" || selectedForBuild.key === "apc_ifv" ? Number(payload?.darat?.apc_ifv ?? 0) : 0}
          currentHangarCount={selectedForBuild.key === "tank_tempur_utama" || selectedForBuild.key === "apc_ifv" ? Number(countryDetail?.hangar_tank ?? countryDetail?.pertahanan?.hangar_tank ?? 0) : 0}
          // GUDANG SENJATA CAPACITY - Ambil dari countryDetail level atas OR countryDetail.pertahanan
          currentArtileriCount={selectedForBuild.key === "artileri_berat" || selectedForBuild.key === "sistem_peluncur_roket" || selectedForBuild.key === "pertahanan_udara_mobile" || selectedForBuild.key === "kendaraan_taktis" ? Number(payload?.darat?.artileri_berat ?? 0) : 0}
          currentRoketCount={selectedForBuild.key === "artileri_berat" || selectedForBuild.key === "sistem_peluncur_roket" || selectedForBuild.key === "pertahanan_udara_mobile" || selectedForBuild.key === "kendaraan_taktis" ? Number(payload?.darat?.sistem_peluncur_roket ?? 0) : 0}
          currentPertahanUdaraCount={selectedForBuild.key === "artileri_berat" || selectedForBuild.key === "sistem_peluncur_roket" || selectedForBuild.key === "pertahanan_udara_mobile" || selectedForBuild.key === "kendaraan_taktis" ? Number(payload?.darat?.pertahanan_udara_mobile ?? 0) : 0}
          currentKendaraanTaktisCount={selectedForBuild.key === "artileri_berat" || selectedForBuild.key === "sistem_peluncur_roket" || selectedForBuild.key === "pertahanan_udara_mobile" || selectedForBuild.key === "kendaraan_taktis" ? Number(payload?.darat?.kendaraan_taktis ?? 0) : 0}
          currentGudangCount={selectedForBuild.key === "artileri_berat" || selectedForBuild.key === "sistem_peluncur_roket" || selectedForBuild.key === "pertahanan_udara_mobile" || selectedForBuild.key === "kendaraan_taktis" ? Number(countryDetail?.gudang_senjata ?? countryDetail?.pertahanan?.gudang_senjata ?? 0) : 0}
          // PANGKALAN LAUT CAPACITY - Untuk semua kapal
          kapalIndukCount={["kapal_induk", "kapal_induk_nuklir", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"].includes(selectedForBuild.key) ? Number(payload?.laut?.kapal_induk ?? 0) : 0}
          kapalIndukNuklirCount={["kapal_induk", "kapal_induk_nuklir", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"].includes(selectedForBuild.key) ? Number(payload?.laut?.kapal_induk_nuklir ?? 0) : 0}
          kapalDestroyerCount={["kapal_induk", "kapal_induk_nuklir", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"].includes(selectedForBuild.key) ? Number(payload?.laut?.kapal_destroyer ?? 0) : 0}
          kapalKorvetCount={["kapal_induk", "kapal_induk_nuklir", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"].includes(selectedForBuild.key) ? Number(payload?.laut?.kapal_korvet ?? 0) : 0}
          kapalSelamNuklirCount={["kapal_induk", "kapal_induk_nuklir", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"].includes(selectedForBuild.key) ? Number(payload?.laut?.kapal_selam_nuklir ?? 0) : 0}
          kapalSelamRegulerCount={["kapal_induk", "kapal_induk_nuklir", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"].includes(selectedForBuild.key) ? Number(payload?.laut?.kapal_selam_regular ?? 0) : 0}
          kapalRanjauCount={["kapal_induk", "kapal_induk_nuklir", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"].includes(selectedForBuild.key) ? Number(payload?.laut?.kapal_ranjau ?? 0) : 0}
          kapalLogistikCount={["kapal_induk", "kapal_induk_nuklir", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"].includes(selectedForBuild.key) ? Number(payload?.laut?.kapal_logistik ?? 0) : 0}
          currentPangkalanLautCount={["kapal_induk", "kapal_induk_nuklir", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"].includes(selectedForBuild.key) ? Number(countryDetail?.pangkalan_laut ?? countryDetail?.pertahanan?.pangkalan_laut ?? 0) : 0}
          // PANGKALAN UDARA CAPACITY - Untuk semua pesawat
          jetTemturSilamanCount={["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"].includes(selectedForBuild.key) ? Number(payload?.udara?.jet_tempur_siluman ?? 0) : 0}
          jetTemturInterceptorCount={["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"].includes(selectedForBuild.key) ? Number(payload?.udara?.jet_tempur_interceptor ?? 0) : 0}
          pesawatPengebomCount={["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"].includes(selectedForBuild.key) ? Number(payload?.udara?.pesawat_pengebom ?? 0) : 0}
          helikopterSerangCount={["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"].includes(selectedForBuild.key) ? Number(payload?.udara?.helikopter_serang ?? 0) : 0}
          pesawatPengintaiCount={["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"].includes(selectedForBuild.key) ? Number(payload?.udara?.pesawat_pengintai ?? 0) : 0}
          droneIntaiUavCount={["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"].includes(selectedForBuild.key) ? Number(payload?.udara?.drone_intai_uav ?? 0) : 0}
          droneKamikazeCount={["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"].includes(selectedForBuild.key) ? Number(payload?.udara?.drone_kamikaze ?? 0) : 0}
          pesawatAngkutCount={["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"].includes(selectedForBuild.key) ? Number(payload?.udara?.pesawat_angkut ?? 0) : 0}
          currentPangkalanUdaraCount={["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"].includes(selectedForBuild.key) ? Number(countryDetail?.pangkalan_udara ?? countryDetail?.pertahanan?.pangkalan_udara ?? 0) : 0}
          // 🔥 CALLBACK UNTUK NAVIGATE KE INFRASTRUKTUR
          onNavigateToInfra={onCapacityFull}
          infraKeyToHighlight={highlightKey}
        />
      )}
    </div>
  );

  // 🔥 Helper function untuk get requirements berdasarkan armada key
  function getRequirementsForArmada(key: string) {
    const findRequirements = (buildingKey: string, requirementsArray: any[]) => {
      const found = requirementsArray.find((r) => r.buildingKey === buildingKey);
      return found?.requirements || [];
    };

    // Barak dari infanteri
    if (key === "barak") return findRequirements("barak", INFANTERI_REQUIREMENTS);
    
    // Tank dari hangar
    if (["tank_tempur_utama", "apc_ifv"].includes(key)) {
      return findRequirements(key, HANGAR_REQUIREMENTS);
    }
    
    // Senjata dari gudang
    if (["artileri_berat", "sistem_peluncur_roket", "pertahanan_udara_mobile", "kendaraan_taktis"].includes(key)) {
      return findRequirements(key, GUDANG_REQUIREMENTS);
    }
    
    // Kapal dari pangkalan laut
    if (["kapal_induk", "kapal_induk_nuklir", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"].includes(key)) {
      return findRequirements(key, LAUT_REQUIREMENTS);
    }
    
    // Pesawat dari pangkalan udara
    if (["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"].includes(key)) {
      return findRequirements(key, UDARA_REQUIREMENTS);
    }
    
    return [];
  }
}