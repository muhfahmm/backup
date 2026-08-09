"use client"
import React, { useState, useEffect } from "react";
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
  currentDate?: string | Date;
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

export default function ArmadaAktif({ countryDetail, setCountryDetail: _setCountryDetail, onCapacityFull, highlightKey, onGotoProduction, currentDate }: TabProps) {
  const unitBreakdown = getArmadaUnitBreakdown(countryDetail?.armada || countryDetail || {});

  // 🔥 DEBUG: Log nilai yang diterima
  useEffect(() => {
    console.log('[ArmadaAktif] CountryDetail armada structure:', {
      countryName: countryDetail?.country,
      armada: countryDetail?.armada,
      armada_darat: countryDetail?.armada?.darat,
      pasukan_infanteri: countryDetail?.armada?.darat?.pasukan_infanteri,
    });
  }, [countryDetail?.country, countryDetail?.armada]);

  // 🔥 PERBAIKAN UTAMA: Fungsi getData yang kokoh untuk membaca data di berbagai kemungkinan struktur database!
  const getData = (key: string, group?: string): number => {
    if (!countryDetail) return 0;
    
    // Kemungkinan 1: Data di level paling atas langsung. (Contoh: countryDetail.barak, countryDetail.hangar_tank)
    if (countryDetail?.[key] !== undefined && countryDetail?.[key] !== null) {
      const val = Number(countryDetail[key]);
      if (!Number.isNaN(val)) return val;
    }

    // Kemungkinan 2: Data di dalam `countryDetail.pertahanan`. (Jika Anda menggunakan struktur ini)
    if (countryDetail?.pertahanan?.[key] !== undefined && countryDetail?.pertahanan?.[key] !== null) {
      const val = Number(countryDetail.pertahanan[key]);
      if (!Number.isNaN(val)) return val;
    }

    // Kemungkinan 3: Data di dalam `countryDetail.armada` (Level root armada).
    if (countryDetail?.armada?.[key] !== undefined && countryDetail?.armada?.[key] !== null) {
      const val = Number(countryDetail.armada[key]);
      if (!Number.isNaN(val)) return val;
    }

    // Kemungkinan 4: Data di dalam `countryDetail.armada.[group]` (Misal: countryDetail.armada.darat.tank_tempur_utama)
    if (group && countryDetail?.armada?.[group]?.[key] !== undefined && countryDetail?.armada?.[group]?.[key] !== null) {
      const val = Number(countryDetail.armada[group][key]);
      if (!Number.isNaN(val)) return val;
    }

    // Kemungkinan 5: Data di dalam `countryDetail.[group]` (Misal: countryDetail.darat.tank_tempur_utama, jika tanpa object armada)
    if (group && countryDetail?.[group]?.[key] !== undefined && countryDetail?.[group]?.[key] !== null) {
      const val = Number(countryDetail[group][key]);
      if (!Number.isNaN(val)) return val;
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

  // ✅ PERBAIKAN UTAMA DI SINI: Tambahkan (requirements || []) agar tidak error undefined.length
  const calculateMissingMaterials = (requirements: any[] | null | undefined, stocks: Record<string, number>) => {
    const safeRequirements = requirements || []; // <-- PENTING: ubah undefined/null menjadi array kosong
    return safeRequirements.filter(req => {
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

  // 🔥 LOGIKA DETEKSI TANGGAL - MENAMBAHKAN PASUKAN SAAT WAKTU SELESAI
  useEffect(() => {
    if (!countryDetail || !_setCountryDetail) return;
    
    const currentDate = countryDetail?.game_date ? new Date(countryDetail.game_date) : new Date();
    const ongoing = countryDetail?.ongoingConstructions || [];
    
    let hasChanged = false;
    let updatedDetail = { ...countryDetail };
    let updatedConstructions = [...ongoing];

    for (let i = updatedConstructions.length - 1; i >= 0; i--) {
      const construction = updatedConstructions[i];
      
      // Hanya proses recruitment (bukan construction)
      if (construction.type !== "recruitment") continue;
      
      const endDate = new Date(construction.endDate);
      if (isNaN(endDate.getTime())) continue;

      if (endDate.getTime() <= currentDate.getTime()) {
        hasChanged = true;
        
        // Tambahkan pasukan ke countryDetail
        if (!updatedDetail.armada) updatedDetail.armada = {};
        if (!updatedDetail.armada.darat) updatedDetail.armada.darat = {};
        
        const currentCount = Number(updatedDetail.armada.darat.pasukan_infanteri || 0);
        updatedDetail.armada.darat.pasukan_infanteri = currentCount + construction.quantity;
        
        updatedConstructions.splice(i, 1);
      }
    }

    if (hasChanged) {
      updatedDetail.ongoingConstructions = updatedConstructions;
      _setCountryDetail(updatedDetail);
    }
  }, [countryDetail?.game_date, countryDetail?.ongoingConstructions, _setCountryDetail]);

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

      // Hitung jeda waktu perekrutan berdasarkan jumlah pasukan
      const recruitmentDays = Math.ceil(quantity / 10000) * 8;
      const currentDateStr = countryDetail?.game_date || new Date().toISOString();
      const startDate = new Date(currentDateStr);
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + recruitmentDays);

      // Format end date ke YYYY-MM-DD
      const endDateStr = `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(2, '0')}-${String(endDate.getDate()).padStart(2, '0')}`;

      const desiredQuantity = Math.max(0, Math.floor(quantity));
      if (desiredQuantity === 0) {
        alert("Masukkan jumlah pasukan yang ingin direkrut.");
      } else {
        // Tambahkan ke ongoingConstructions instead of directly adding
        if (!updatedDetail.ongoingConstructions) updatedDetail.ongoingConstructions = [];
        
        updatedDetail.ongoingConstructions.push({
          id: `recruitment_${Date.now()}`,
          buildingKey: "pasukan_infanteri",
          label: "Pasukan Infanteri",
          quantity: desiredQuantity,
          cost: desiredQuantity * 5000, // 5000 EM per pasukan
          startDate: currentDateStr,
          endDate: endDateStr,
          type: "recruitment",
          group: "darat"
        });

        _setCountryDetail(updatedDetail);
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
            
            {/* 🔥 Date indicator for military infrastructure - like Infrastruktur tab */}
            {currentDate && (
              <div className="bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg inline-flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700">
                  {currentDate instanceof Date
                    ? currentDate.toLocaleDateString('id-ID', {
                        weekday: 'short',
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                      })
                    : currentDate}
                </span>
              </div>
            )}

            <div className="grid grid-cols-5 gap-6">
              {armadaCatalog[group].map((item) => {
                // 🔥 Gunakan getData untuk semua item. Kini semua data Tank, Kapal, dan Jet akan terbaca!
                const value = getData(item.key, group);
                let displayText = formatNumber(value);
                
                // 🔥 LOGIKA KHUSUS UNTUK BARAK (Pasukan Infanteri)
                if (item.key === "barak") {
                  // Ambil jumlah barak yang sudah dibangun
                  const currentBarakCount = getData("barak");
                  
                  // Ambil jumlah pasukan infanteri dari countryDetail atau gunakan nilai default dari JSON
                  // getData("pasukan_infanteri", "darat") akan return nilai default dari JSON jika tidak ada di countryDetail
                  const infantryCount = getData("pasukan_infanteri", "darat");

                  // Kapasitas hanya berdasarkan barak yang sudah jadi: jangan hitung 'ongoing' sampai selesai
                  // Setiap barak bisa menampung 10,000 pasukan
                  const maxCapacity = currentBarakCount * 10000;

                  // Tampilkan jumlah pasukan saat ini vs kapasitas maksimal
                  displayText = `${formatNumber(infantryCount)} / ${formatNumber(maxCapacity)}`;
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
                          {/* 🔥 Tampilkan pending recruitment */}
                          {item.key === "barak" && countryDetail?.ongoingConstructions ? (() => {
                            const pendingRecruitments = countryDetail.ongoingConstructions.filter(
                              (c: any) => c.type === "recruitment" && c.buildingKey === "pasukan_infanteri"
                            );
                            if (pendingRecruitments.length > 0) {
                              const totalPending = pendingRecruitments.reduce((sum: number, r: any) => sum + r.quantity, 0);
                              return (
                                <span className="text-sm font-black text-emerald-600">
                                  +{formatNumber(totalPending)}
                                </span>
                              );
                            }
                            return null;
                          })() : null}
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
          // ✅ JANGAN GUNAKAN calculateMissingMaterials([], ...) karena rentan error, gunakan array kosong langsung
          missingMaterials={[]}
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
          unitDataKey={selectedForBuild.key === "barak" ? "pasukan_infanteri" : selectedForBuild.key}
          currentGameDate={
            currentDate
              ? currentDate instanceof Date
                ? currentDate.toISOString()
                : String(currentDate)
              : countryDetail?.game_date || new Date().toISOString()
          }
        />
      )}
    </div>
  );
}