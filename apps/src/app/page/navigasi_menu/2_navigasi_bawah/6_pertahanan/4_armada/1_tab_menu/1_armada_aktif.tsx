"use client"
import React, { useState } from "react";
import { Swords, Ship, Plane, Info } from "lucide-react";
import { BARAK_TO_SOLDIERS_MULTIPLIER } from "../logic/1_barak_logic";
import { getArmadaUnitBreakdown } from "../logic/armadaLogic";
import { convertBarakToSoldiers } from "../logic/1_barak_logic";
import KonfirmasiArmadaAktifModal from "../2_modals_konfirmasi_pembangunan/1_konfirmasi_armada_aktif_modal";
import { REQUIREMENTS as INFANTERI_REQUIREMENTS, findRequirements as findInfanteriRequirements } from "../requirements_logic/1_infanteri/requirements";

interface TabProps {
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
  onCapacityFull?: (infraKey: string) => void;
  highlightKey?: string | null;
  onGotoProduction?: (tab: string, key: string) => void;
}

const armadaCatalog = {
  darat: [
    { key: "barak", label: "Pasukan Infanteri", group: "darat" },
    { key: "tank_tempur_utama", label: "Tank Tempur Utama", group: "darat" },
    { key: "apc_ifv", label: "APC / IFV", group: "darat" },
    { key: "artileri_berat", label: "Artileri Berat", group: "darat" },
    { key: "sistem_peluncur_roket", label: "Sistem Peluncur Roket", group: "darat" },
    { key: "pertahanan_udara_mobile", label: "Pertahanan Udara Mobile", group: "darat" },
    { key: "kendaraan_taktis", label: "Kendaraan Taktis", group: "darat" },
  ],
  laut: [
    { key: "kapal_induk", label: "Kapal Induk", group: "laut" },
    { key: "kapal_induk_nuklir", label: "Kapal Induk Nuklir", group: "laut" },
    { key: "kapal_destroyer", label: "Kapal Destroyer", group: "laut" },
    { key: "kapal_korvet", label: "Kapal Korvet", group: "laut" },
    { key: "kapal_selam_nuklir", label: "Kapal Selam Nuklir", group: "laut" },
    { key: "kapal_selam_regular", label: "Kapal Selam Reguler", group: "laut" },
    { key: "kapal_ranjau", label: "Kapal Ranjau", group: "laut" },
    { key: "kapal_logistik", label: "Kapal Logistik", group: "laut" },
  ],
  udara: [
    { key: "jet_tempur_siluman", label: "Jet Tempur Siluman", group: "udara" },
    { key: "jet_tempur_interceptor", label: "Jet Tempur Interceptor", group: "udara" },
    { key: "pesawat_pengebom", label: "Pesawat Pengebom", group: "udara" },
    { key: "helikopter_serang", label: "Helikopter Serang", group: "udara" },
    { key: "pesawat_pengintai", label: "Pesawat Pengintai", group: "udara" },
    { key: "drone_intai_uav", label: "Drone Intai UAV", group: "udara" },
    { key: "drone_kamikaze", label: "Drone Kamikaze", group: "udara" },
    { key: "pesawat_angkut", label: "Pesawat Angkut", group: "udara" },
  ],
};

const allArmadaItems = [...armadaCatalog.darat, ...armadaCatalog.laut, ...armadaCatalog.udara];

const groupMeta = {
  darat: { title: "Darat", icon: Swords, accent: "from-rose-700 to-orange-600" },
  laut: { title: "Laut", icon: Ship, accent: "from-sky-700 to-cyan-600" },
  udara: { title: "Udara", icon: Plane, accent: "from-indigo-700 to-violet-600" },
};
const groupKeys = Object.keys(groupMeta) as (keyof typeof groupMeta)[];

const armadaUnitMetadata: Record<string, { biaya_pembangunan: number }> = {
  barak: { biaya_pembangunan: 5000 },
  pasukan_infanteri: { biaya_pembangunan: 5000 },
  tank_tempur_utama: { biaya_pembangunan: 15000 },
  apc_ifv: { biaya_pembangunan: 10000 },
  artileri_berat: { biaya_pembangunan: 48750 },
  sistem_peluncur_roket: { biaya_pembangunan: 71250 },
  pertahanan_udara_mobile: { biaya_pembangunan: 93750 },
  kendaraan_taktis: { biaya_pembangunan: 11250 },
  kapal_induk: { biaya_pembangunan: 1125000 },
  kapal_induk_nuklir: { biaya_pembangunan: 1875000 },
  kapal_destroyer: { biaya_pembangunan: 337500 },
  kapal_korvet: { biaya_pembangunan: 135000 },
  kapal_selam_nuklir: { biaya_pembangunan: 562500 },
  kapal_selam_regular: { biaya_pembangunan: 187500 },
  kapal_ranjau: { biaya_pembangunan: 63750 },
  kapal_logistik: { biaya_pembangunan: 90000 },
  jet_tempur_siluman: { biaya_pembangunan: 112500 },
  jet_tempur_interceptor: { biaya_pembangunan: 63750 },
  pesawat_pengebom: { biaya_pembangunan: 187500 },
  helikopter_serang: { biaya_pembangunan: 41250 },
  pesawat_pengintai: { biaya_pembangunan: 71250 },
  drone_intai_uav: { biaya_pembangunan: 11250 },
  drone_kamikaze: { biaya_pembangunan: 3750 },
  pesawat_angkut: { biaya_pembangunan: 56250 },
};

const formatNumber = (value: unknown) => {
  const numeric = Number(value ?? 0);
  return Number.isFinite(numeric) ? numeric.toLocaleString("id-ID") : "0";
};

export default function ArmadaAktif({ countryDetail, setCountryDetail: _setCountryDetail, onCapacityFull, highlightKey, onGotoProduction }: TabProps) {
  const unitBreakdown = getArmadaUnitBreakdown(countryDetail?.armada || countryDetail || {});

  // 🔥 PERBAIKAN UTAMA: Fungsi getData yang kokoh untuk membaca data di berbagai kemungkinan struktur database!
  const getData = (key: string, group?: string): number => {
    if (!countryDetail) return 0;
    
    // Kemungkinan 1: Data di level paling atas langsung. (Contoh: countryDetail.barak, countryDetail.hangar_tank)
    if (countryDetail?.[key] !== undefined && countryDetail?.[key] !== null) {
      return Number(countryDetail[key]);
    }

    // Kemungkinan 2: Data di dalam `countryDetail.pertahanan`. (Jika Anda menggunakan struktur ini)
    if (countryDetail?.pertahanan?.[key] !== undefined && countryDetail?.pertahanan?.[key] !== null) {
      return Number(countryDetail.pertahanan[key]);
    }

    // Kemungkinan 3: Data di dalam `countryDetail.armada` (Level root armada).
    if (countryDetail?.armada?.[key] !== undefined && countryDetail?.armada?.[key] !== null) {
      return Number(countryDetail.armada[key]);
    }

    // Kemungkinan 4: Data di dalam `countryDetail.armada.[group]` (Misal: countryDetail.armada.darat.tank_tempur_utama)
    if (group && countryDetail?.armada?.[group]?.[key] !== undefined && countryDetail?.armada?.[group]?.[key] !== null) {
      return Number(countryDetail.armada[group][key]);
    }

    // Kemungkinan 5: Data di dalam `countryDetail.[group]` (Misal: countryDetail.darat.tank_tempur_utama, jika tanpa object armada)
    if (group && countryDetail?.[group]?.[key] !== undefined && countryDetail?.[group]?.[key] !== null) {
      return Number(countryDetail[group][key]);
    }
    
    return 0;
  };

  const calculateMaterialStocks = (countryDetailData: any) => {
    const stocks: Record<string, number> = {};
    const materialKeys = ['emas', 'uranium', 'batu_bara', 'minyak_bumi', 'gas_alam', 'garam', 'litium', 'logam_tanah_jarang', 'bijih_besi', 'semikonduktor', 'mobil', 'sepeda_motor', 'semen_beton', 'kayu'];
    materialKeys.forEach(key => {
      stocks[key] = Number(countryDetailData?.[`inventory_${key}`]) || 0;
    });
    return stocks;
  };

  const calculateMissingMaterials = (requirements: any[], stocks: Record<string, number>) => {
    return requirements.filter(req => {
      const stock = stocks[req.resourceKey] ?? 0;
      return stock <= 0;
    });
  };

  const getTabForResource = (resourceKey: string): { tab: string; buildingKey: string } => {
    const resourceToTabAndBuilding: Record<string, { tab: string; buildingKey: string }> = {
      emas: { tab: 'mineral', buildingKey: 'emas' },
      uranium: { tab: 'mineral', buildingKey: 'uranium' },
      batu_bara: { tab: 'mineral', buildingKey: 'batu_bara' },
      minyak_bumi: { tab: 'mineral', buildingKey: 'minyak_bumi' },
      gas_alam: { tab: 'mineral', buildingKey: 'gas_alam' },
      batu_gunung: { tab: 'mineral', buildingKey: 'garam' },
      litium: { tab: 'mineral', buildingKey: 'litium' },
      logam_tanah_jarang: { tab: 'mineral', buildingKey: 'logam_tanah_jarang' },
      bijih_besi: { tab: 'mineral', buildingKey: 'bijih_besi' },
      semikonduktor: { tab: 'manufaktur', buildingKey: 'semikonduktor' },
      mobil: { tab: 'manufaktur', buildingKey: 'mobil' },
      sepeda_motor: { tab: 'manufaktur', buildingKey: 'sepeda_motor' },
      semen_beton: { tab: 'manufaktur', buildingKey: 'semen_beton' },
      kayu: { tab: 'manufaktur', buildingKey: 'kayu' },
    };
    return resourceToTabAndBuilding[resourceKey] || { tab: 'kelistrikan', buildingKey: '' };
  };

  const [infoKey, setInfoKey] = useState<string | null>(null);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [selectedForBuild, setSelectedForBuild] = useState<{ key: string; label: string } | null>(null);
  const [isConfirmBuildOpen, setIsConfirmBuildOpen] = useState(false);

  const handleInfoClick = (key: string) => {
    setInfoKey(key);
    setIsInfoOpen(true);
  };

  const handleConfirmRecruit = (quantity: number = 10000) => {
    if (!selectedForBuild) return;
    if (selectedForBuild.key === "barak") {
      const updatedDetail = { ...countryDetail };
      
      if (!updatedDetail.armada) updatedDetail.armada = {};
      if (!updatedDetail.armada.darat) updatedDetail.armada.darat = {};

      const storedInfantryCount = Number(getData("pasukan_infanteri", "darat") || 0);
      const currentInfantryCount = updatedDetail.armada.darat.pasukan_infanteri !== undefined
        ? Number(updatedDetail.armada.darat.pasukan_infanteri)
        : storedInfantryCount;
      const currentBarakCount = getData("barak");
      const maxCapacity = currentBarakCount * BARAK_TO_SOLDIERS_MULTIPLIER;
      
      const desiredQuantity = Math.max(0, Math.floor(quantity));
      if (desiredQuantity === 0) {
        alert("Masukkan jumlah pasukan yang ingin direkrut.");
      } else if (currentInfantryCount + desiredQuantity <= maxCapacity) {
        updatedDetail.armada.darat.pasukan_infanteri = currentInfantryCount + desiredQuantity;
        _setCountryDetail(updatedDetail);
      } else {
        alert("Kapasitas Infanteri sudah penuh atau jumlah yang diminta melebihi kapasitas.");
      }
    }
    setIsConfirmBuildOpen(false);
    setSelectedForBuild(null);
  };

  return (
    <div className="space-y-6">
      <div className="text-xs font-semibold text-[#8b7e66] leading-relaxed">
        Inventaris alutsista negara dipisahkan berdasarkan kelompok operasional untuk memudahkan evaluasi kekuatan darat, laut, dan udara.
      </div>

      {groupKeys.map((group) => {
        const Icon = groupMeta[group].icon;

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
                // 🔥 Gunakan getData untuk semua item. Kini semua data Tank, Kapal, dan Jet akan terbaca!
                const value = getData(item.key, group);
                let displayText = formatNumber(value);
                
                // 🔥 LOGIKA KHUSUS UNTUK BARAK (Pasukan Infanteri)
                if (item.key === "barak") {
                  const currentBarakCount = getData("barak");
                  const ongoingConstructions = countryDetail?.ongoingConstructions || [];
                  const ongoingBarakCount = ongoingConstructions.filter((c: any) => c.buildingKey === "barak").length;
                  
                  // Ambil jumlah pasukan dari sumber tersimpan agar tidak langsung menyesuaikan saat barak baru selesai dibangun
                  const storedInfantry = Number((countryDetail?.armada?.darat?.pasukan_infanteri ?? getData("pasukan_infanteri", "darat")) || 0);

                  // Kapasitas hanya berdasarkan barak yang sudah jadi: jangan hitung 'ongoing' sampai selesai
                  const maxCapacity = currentBarakCount * 10000;

                  // Tampilkan nilai ter-nyata dari pasukan (storedInfantry) di sisi kiri, dan kapasitas di kanan
                  const displayInfantry = storedInfantry;
                  displayText = `${formatNumber(displayInfantry)} / ${formatNumber(maxCapacity)}`;
                }

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
                      <p className="text-[10px] font-black uppercase text-[#8b7e66] tracking-wider flex-1 pr-2">
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
                        <div className="flex items-end gap-1.5 mt-2">
                          <span className="text-2xl font-black text-[#2e261a] leading-tight">
                            {displayText}
                          </span>
                        </div>
                        <p className="text-[9px] mt-1 font-bold text-[#8b7e66]">
                          {item.key === "barak" ? "Pasukan / Kapasitas" : "unit"}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* 🔥 Modal Konfirmasi Pembangunan / Rekrutmen */}
      {selectedForBuild && isConfirmBuildOpen && (
        <KonfirmasiArmadaAktifModal
          isOpen={isConfirmBuildOpen}
          onClose={() => {
            setIsConfirmBuildOpen(false);
            setSelectedForBuild(null);
          }}
          buildingLabel={selectedForBuild.label}
          buildingDescription={selectedForBuild.label}
          cost={Number(armadaUnitMetadata[selectedForBuild.key]?.biaya_pembangunan ?? 0)}
          requirements={selectedForBuild.key === "barak" ? (findInfanteriRequirements("barak")?.requirements || []) : []}
          materialStocks={calculateMaterialStocks(countryDetail)}
          anggaran={Number(countryDetail?.anggaran) || 0}
          missingMaterials={calculateMissingMaterials([], calculateMaterialStocks(countryDetail))}
          onConfirm={handleConfirmRecruit}
          onMaterialClick={(resourceKey: string, label: string) => {
            const { tab, buildingKey } = getTabForResource(resourceKey);
            onGotoProduction?.(tab, buildingKey || resourceKey);
          }}
          loadingMetadata={false}
          isDisabled={false}
          capacityType={selectedForBuild.key === "barak" ? "infanteri" : selectedForBuild.key === "tank_tempur_utama" || selectedForBuild.key === "apc_ifv" ? "hangar_tank" : selectedForBuild.key === "artileri_berat" || selectedForBuild.key === "sistem_peluncur_roket" || selectedForBuild.key === "pertahanan_udara_mobile" || selectedForBuild.key === "kendaraan_taktis" ? "gudang_senjata" : ["kapal_induk", "kapal_induk_nuklir", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"].includes(selectedForBuild.key) ? "pangkalan_laut" : ["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"].includes(selectedForBuild.key) ? "pangkalan_udara" : undefined}
          currentCapacity={selectedForBuild.key === "barak" ? Number(getData("pasukan_infanteri", "darat") || 0) : 0}
              maxCapacity={selectedForBuild.key === "barak" ? (() => {
                const cB = getData("barak");
                // Only count completed barak for capacity; ongoing constructions don't increase capacity until finished
                return cB * 10000;
              })() : 0}
          currentBarakCount={selectedForBuild.key === "barak" ? getData("barak") : undefined}
          currentTankCount={selectedForBuild.key === "tank_tempur_utama" || selectedForBuild.key === "apc_ifv" ? getData("tank_tempur_utama", "darat") : 0}
          currentApcCount={selectedForBuild.key === "tank_tempur_utama" || selectedForBuild.key === "apc_ifv" ? getData("apc_ifv", "darat") : 0}
          currentHangarCount={selectedForBuild.key === "tank_tempur_utama" || selectedForBuild.key === "apc_ifv" ? getData("hangar_tank") : 0}
          currentArtileriCount={selectedForBuild.key === "artileri_berat" || selectedForBuild.key === "sistem_peluncur_roket" || selectedForBuild.key === "pertahanan_udara_mobile" || selectedForBuild.key === "kendaraan_taktis" ? getData("artileri_berat", "darat") : 0}
          currentRoketCount={selectedForBuild.key === "artileri_berat" || selectedForBuild.key === "sistem_peluncur_roket" || selectedForBuild.key === "pertahanan_udara_mobile" || selectedForBuild.key === "kendaraan_taktis" ? getData("sistem_peluncur_roket", "darat") : 0}
          currentPertahanUdaraCount={selectedForBuild.key === "artileri_berat" || selectedForBuild.key === "sistem_peluncur_roket" || selectedForBuild.key === "pertahanan_udara_mobile" || selectedForBuild.key === "kendaraan_taktis" ? getData("pertahanan_udara_mobile", "darat") : 0}
          currentKendaraanTaktisCount={selectedForBuild.key === "artileri_berat" || selectedForBuild.key === "sistem_peluncur_roket" || selectedForBuild.key === "pertahanan_udara_mobile" || selectedForBuild.key === "kendaraan_taktis" ? getData("kendaraan_taktis", "darat") : 0}
          currentGudangCount={selectedForBuild.key === "artileri_berat" || selectedForBuild.key === "sistem_peluncur_roket" || selectedForBuild.key === "pertahanan_udara_mobile" || selectedForBuild.key === "kendaraan_taktis" ? getData("gudang_senjata") : 0}
          kapalIndukCount={["kapal_induk", "kapal_induk_nuklir", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"].includes(selectedForBuild.key) ? getData("kapal_induk", "laut") : 0}
          kapalIndukNuklirCount={["kapal_induk", "kapal_induk_nuklir", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"].includes(selectedForBuild.key) ? getData("kapal_induk_nuklir", "laut") : 0}
          kapalDestroyerCount={["kapal_induk", "kapal_induk_nuklir", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"].includes(selectedForBuild.key) ? getData("kapal_destroyer", "laut") : 0}
          kapalKorvetCount={["kapal_induk", "kapal_induk_nuklir", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"].includes(selectedForBuild.key) ? getData("kapal_korvet", "laut") : 0}
          kapalSelamNuklirCount={["kapal_induk", "kapal_induk_nuklir", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"].includes(selectedForBuild.key) ? getData("kapal_selam_nuklir", "laut") : 0}
          kapalSelamRegulerCount={["kapal_induk", "kapal_induk_nuklir", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"].includes(selectedForBuild.key) ? getData("kapal_selam_regular", "laut") : 0}
          kapalRanjauCount={["kapal_induk", "kapal_induk_nuklir", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"].includes(selectedForBuild.key) ? getData("kapal_ranjau", "laut") : 0}
          kapalLogistikCount={["kapal_induk", "kapal_induk_nuklir", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"].includes(selectedForBuild.key) ? getData("kapal_logistik", "laut") : 0}
          currentPangkalanLautCount={["kapal_induk", "kapal_induk_nuklir", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"].includes(selectedForBuild.key) ? getData("pangkalan_laut") : 0}
          jetTemturSilamanCount={["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"].includes(selectedForBuild.key) ? getData("jet_tempur_siluman", "udara") : 0}
          jetTemturInterceptorCount={["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"].includes(selectedForBuild.key) ? getData("jet_tempur_interceptor", "udara") : 0}
          pesawatPengebomCount={["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"].includes(selectedForBuild.key) ? getData("pesawat_pengebom", "udara") : 0}
          helikopterSerangCount={["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"].includes(selectedForBuild.key) ? getData("helikopter_serang", "udara") : 0}
          pesawatPengintaiCount={["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"].includes(selectedForBuild.key) ? getData("pesawat_pengintai", "udara") : 0}
          droneIntaiUavCount={["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"].includes(selectedForBuild.key) ? getData("drone_intai_uav", "udara") : 0}
          droneKamikazeCount={["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"].includes(selectedForBuild.key) ? getData("drone_kamikaze", "udara") : 0}
          pesawatAngkutCount={["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"].includes(selectedForBuild.key) ? getData("pesawat_angkut", "udara") : 0}
          currentPangkalanUdaraCount={["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"].includes(selectedForBuild.key) ? getData("pangkalan_udara") : 0}
          onNavigateToInfra={onCapacityFull}
          infraKeyToHighlight={highlightKey}
        />
      )}
    </div>
  );
}