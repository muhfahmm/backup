"use client";
import React, { useState } from "react";
import { X, Hammer, Eye, EyeOff } from "lucide-react";
import { BARAK_TO_SOLDIERS_MULTIPLIER } from "../logic/1_barak_logic";
import { HANGAR_TANK_CAPACITY } from "../logic/2_hangar_tank_logic";
import { GUDANG_SENJATA_CAPACITY } from "../logic/3_gudang_senjata_logic";
import { PANGKALAN_LAUT_CAPACITY } from "../logic/4_pangkalan_laut_logic";
import { PANGKALAN_UDARA_CAPACITY } from "../logic/5_pangkalan_udara_logic";
import { KonfirmasiPembangunanModalProps } from "../requirements_logic/konfirmasi_pembangunan_types";

export default function KonfirmasiInfrastrukturModal({
  isOpen,
  onClose,
  buildingLabel,
  buildingDescription,
  cost,
  waktuPembangunan,
  dampakKepuasan,
  produksiPerHari,
  produksiLabel,
  requirements,
  materialStocks,
  anggaran,
  missingMaterials,
  onConfirm,
  onMaterialClick,
  loadingMetadata,
  isDisabled = false,
  capacityType = "infanteri",
  currentCapacity = 0,
  maxCapacity = 10000,
  currentBarakCount = 0,
  currentTankCount = 0,
  currentApcCount = 0,
  currentHangarCount = 0,
  currentArtileriCount = 0,
  currentRoketCount = 0,
  currentPertahanUdaraCount = 0,
  currentKendaraanTaktisCount = 0,
  currentGudangCount = 0,
  kapalIndukCount = 0,
  kapalIndukNuklirCount = 0,
  kapalDestroyerCount = 0,
  kapalKorvetCount = 0,
  kapalSelamNuklirCount = 0,
  kapalSelamRegulerCount = 0,
  kapalRanjauCount = 0,
  kapalLogistikCount = 0,
  currentPangkalanLautCount = 0,
  jetTemturSilamanCount = 0,
  jetTemturInterceptorCount = 0,
  pesawatPengebomCount = 0,
  helikopterSerangCount = 0,
  pesawatPengintaiCount = 0,
  droneIntaiUavCount = 0,
  droneKamikazeCount = 0,
  pesawatAngkutCount = 0,
  currentPangkalanUdaraCount = 0,
  onNavigateToInfra,
  infraKeyToHighlight,
}: KonfirmasiPembangunanModalProps) {
  const [showMaterialGrid, setShowMaterialGrid] = useState(true);
  const [buildQuantity, setBuildQuantity] = useState<number>(1);
  const [selectedMaterialKey, setSelectedMaterialKey] = useState<string | null>(null);

  // Reset selection when modal opens/closes
  React.useEffect(() => {
    if (!isOpen) {
      setSelectedMaterialKey(null);
      setBuildQuantity(1);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const totalCost = cost * buildQuantity;
  const totalTime = waktuPembangunan !== undefined ? waktuPembangunan * buildQuantity : undefined;
  const hasMissingMaterials = missingMaterials.length > 0;
  const isAnggaranCukup = anggaran >= totalCost;

  // 🔥 LOGIC KAPASITAS INFANTERI
  let infanteriCapacityFull = false;
  let infanteriCapacityDisplay = "";
  let infanteriWarningText = "";
  
  if (capacityType === "infanteri") {
    const isInfanteriPenuh = currentCapacity >= maxCapacity;
    infanteriCapacityFull = currentBarakCount > 0 && isInfanteriPenuh;
    infanteriCapacityDisplay = `${currentCapacity.toLocaleString('id-ID')} / ${maxCapacity.toLocaleString('id-ID')}`;
    infanteriWarningText = `Kapasitas Infanteri sudah penuh (${maxCapacity.toLocaleString('id-ID')} pasukan). Anda harus membangun Barak baru untuk menambah Infanteri lebih banyak.`;
  }

  // 🔥 LOGIC KAPASITAS HANGAR TANK
  let hangarTankCapacityFull = false;
  let hangarTankCapacityDisplay = "";
  let hangarTankWarningText = "";
  
  if (capacityType === "hangar_tank") {
    const totalVehicles = currentTankCount + currentApcCount;
    const maxHangarCapacity = currentHangarCount * HANGAR_TANK_CAPACITY;
    const isHangarPenuh = totalVehicles >= maxHangarCapacity;
    hangarTankCapacityFull = currentHangarCount > 0 && isHangarPenuh;
    hangarTankCapacityDisplay = `${totalVehicles.toLocaleString('id-ID')} / ${maxHangarCapacity.toLocaleString('id-ID')}`;
    hangarTankWarningText = `Kapasitas Hangar Tank sudah penuh (${currentHangarCount} hangar × ${HANGAR_TANK_CAPACITY.toLocaleString('id-ID')} = ${maxHangarCapacity.toLocaleString('id-ID')} unit). Anda harus membangun Hangar Tank baru untuk menambah Tank/APC lebih banyak.`;
  }

  // 🔥 LOGIC KAPASITAS GUDANG SENJATA
  let gudangSenjataCapacityFull = false;
  let gudangSenjataCapacityDisplay = "";
  let gudangSenjataCapacityWarningText = "";
  
  if (capacityType === "gudang_senjata") {
    const totalWeapons = currentArtileriCount + currentRoketCount + currentPertahanUdaraCount + currentKendaraanTaktisCount;
    const maxGudangCapacity = currentGudangCount * GUDANG_SENJATA_CAPACITY;
    const isGudangPenuh = totalWeapons >= maxGudangCapacity;
    gudangSenjataCapacityFull = currentGudangCount > 0 && isGudangPenuh;
    gudangSenjataCapacityDisplay = `${totalWeapons.toLocaleString('id-ID')} / ${maxGudangCapacity.toLocaleString('id-ID')}`;
    gudangSenjataCapacityWarningText = `Kapasitas Gudang Senjata sudah penuh (${currentGudangCount} gudang × ${GUDANG_SENJATA_CAPACITY.toLocaleString('id-ID')} = ${maxGudangCapacity.toLocaleString('id-ID')} unit). Anda harus membangun Gudang Senjata baru untuk menambah Senjata lebih banyak.`;
  }

  // 🔥 LOGIC KAPASITAS PANGKALAN LAUT
  let pangkalanLautCapacityFull = false;
  let pangkalanLautCapacityDisplay = "";
  let pangkalanLautCapacityWarningText = "";
  
  if (capacityType === "pangkalan_laut") {
    const totalKapal = kapalIndukCount + kapalIndukNuklirCount + kapalDestroyerCount + kapalKorvetCount + 
                       kapalSelamNuklirCount + kapalSelamRegulerCount + kapalRanjauCount + kapalLogistikCount;
    const maxPangkalanLautCapacity = currentPangkalanLautCount * PANGKALAN_LAUT_CAPACITY;
    const isPangkalanLautPenuh = totalKapal >= maxPangkalanLautCapacity;
    pangkalanLautCapacityFull = currentPangkalanLautCount > 0 && isPangkalanLautPenuh;
    pangkalanLautCapacityDisplay = `${totalKapal.toLocaleString('id-ID')} / ${maxPangkalanLautCapacity.toLocaleString('id-ID')}`;
    pangkalanLautCapacityWarningText = `Kapasitas Pangkalan Laut sudah penuh (${currentPangkalanLautCount} pangkalan × ${PANGKALAN_LAUT_CAPACITY.toLocaleString('id-ID')} = ${maxPangkalanLautCapacity.toLocaleString('id-ID')} unit). Anda harus membangun Pangkalan Laut baru untuk menambah Kapal lebih banyak.`;
  }

  // 🔥 LOGIC KAPASITAS PANGKALAN UDARA
  let pangkalanUdaraCapacityFull = false;
  let pangkalanUdaraCapacityDisplay = "";
  let pangkalanUdaraCapacityWarningText = "";
  
  if (capacityType === "pangkalan_udara") {
    const totalPesawat = jetTemturSilamanCount + jetTemturInterceptorCount + pesawatPengebomCount + helikopterSerangCount + 
                         pesawatPengintaiCount + droneIntaiUavCount + droneKamikazeCount + pesawatAngkutCount;
    const maxPangkalanUdaraCapacity = currentPangkalanUdaraCount * PANGKALAN_UDARA_CAPACITY;
    const isPangkalanUdaraPenuh = totalPesawat >= maxPangkalanUdaraCapacity;
    pangkalanUdaraCapacityFull = currentPangkalanUdaraCount > 0 && isPangkalanUdaraPenuh;
    pangkalanUdaraCapacityDisplay = `${totalPesawat.toLocaleString('id-ID')} / ${maxPangkalanUdaraCapacity.toLocaleString('id-ID')}`;
    pangkalanUdaraCapacityWarningText = `Kapasitas Pangkalan Udara sudah penuh (${currentPangkalanUdaraCount} pangkalan × ${PANGKALAN_UDARA_CAPACITY.toLocaleString('id-ID')} = ${maxPangkalanUdaraCapacity.toLocaleString('id-ID')} unit). Anda harus membangun Pangkalan Udara baru untuk menambah Pesawat lebih banyak.`;
  }

  const capacityFull = infanteriCapacityFull || hangarTankCapacityFull || gudangSenjataCapacityFull || pangkalanLautCapacityFull || pangkalanUdaraCapacityFull;
  const capacityDisplay = infanteriCapacityDisplay || hangarTankCapacityDisplay || gudangSenjataCapacityDisplay || pangkalanLautCapacityDisplay || pangkalanUdaraCapacityDisplay;
  const warningText = infanteriWarningText || hangarTankWarningText || gudangSenjataCapacityWarningText || pangkalanLautCapacityWarningText || pangkalanUdaraCapacityWarningText;

  // 🔥 Fungsi kalkulasi jumlah bangunan maksimal
  const calculateMaxBuildings = (): number => {
    let maxByBudget = Math.floor(anggaran / cost);
    if (maxByBudget < 1) return 1;

    // Cek batasan berdasarkan material
    let maxByMaterials = Infinity;
    for (const req of requirements) {
      const availableStock = materialStocks[req.resourceKey] ?? 0;
      const costPerBuilding = req.amount ?? 0;
      if (costPerBuilding > 0) {
        const maxForThisMaterial = Math.floor(availableStock / costPerBuilding);
        maxByMaterials = Math.min(maxByMaterials, maxForThisMaterial);
      }
    }

    if (maxByMaterials === Infinity) {
      maxByMaterials = maxByBudget;
    }

    return Math.max(1, Math.min(maxByBudget, maxByMaterials));
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans animate-in fade-in zoom-in-95 duration-150 pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />

        {/* Header */}
        <div className="px-6 py-5 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-2 text-[#5c3c10]">
            <Hammer className="h-5 w-5" />
            <h3 className="text-base font-bold uppercase tracking-tight">Pembangunan Infrastruktur Militer</h3>
          </div>
          <button onClick={onClose} className="text-[#8b7e66] hover:text-[#5c3c10] cursor-pointer">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 relative z-10 flex-1 overflow-y-auto space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-lg font-black text-[#2e261a]">{buildingLabel}</h4>
              {capacityDisplay && (
                <div className="text-sm font-black text-[#5c3c10] bg-[#FAF6EE] px-3 py-1 rounded-lg border border-[#C4B49C]/30">
                  {capacityDisplay}
                </div>
              )}
            </div>
            <p className="text-xs text-[#8b7e66]">{buildingDescription || 'Tidak ada deskripsi tersedia.'}</p>
          </div>

          {/* ================= DETAIL KAPASITAS PER JENIS ================= */}

          {/* 🔵 BARAK / INFANTERI: WARNA HIJAU */}
          {capacityType === "infanteri" && (
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4 space-y-2">
              <p className="text-xs font-bold text-emerald-900">📊 Detail Kapasitas Barak:</p>
              <div className="text-xs text-emerald-800 space-y-1">
                <div className="flex justify-between">
                  <span>Infanteri Saat Ini:</span>
                  <span className="font-bold">{currentCapacity?.toLocaleString('id-ID')} pasukan</span>
                </div>
                <div className="flex justify-between">
                  <span>Jumlah Barak:</span>
                  <span className="font-bold">{currentBarakCount} unit</span>
                </div>
                <div className="flex justify-between border-t border-emerald-200 pt-1 mt-1">
                  <span>Kapasitas Total:</span>
                  <span className="font-bold text-emerald-900">{maxCapacity?.toLocaleString('id-ID')} pasukan</span>
                </div>
                <div className="flex justify-between">
                  <span>Sisa Kapasitas:</span>
                  <span className={`font-bold ${(maxCapacity - currentCapacity) <= 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                    {Math.max(0, (maxCapacity - currentCapacity))?.toLocaleString('id-ID')} pasukan
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* 🟠 HANGAR TANK: WARNA AMBER */}
          {capacityType === "hangar_tank" && (
            <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 space-y-2">
              <p className="text-xs font-bold text-amber-900">🚜 Detail Kapasitas Hangar Tank:</p>
              <div className="text-xs text-amber-800 space-y-1">
                <div className="flex justify-between">
                  <span>Tank Tempur Utama:</span>
                  <span className="font-bold">{currentTankCount?.toLocaleString('id-ID')} unit</span>
                </div>
                <div className="flex justify-between">
                  <span>APC / IFV:</span>
                  <span className="font-bold">{currentApcCount?.toLocaleString('id-ID')} unit</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Kendaraan:</span>
                  <span className="font-bold">{(currentTankCount + currentApcCount)?.toLocaleString('id-ID')} unit</span>
                </div>
                <div className="flex justify-between">
                  <span>Jumlah Hangar:</span>
                  <span className="font-bold">{currentHangarCount} unit</span>
                </div>
                <div className="flex justify-between border-t border-amber-200 pt-1 mt-1">
                  <span>Kapasitas Total:</span>
                  <span className="font-bold text-amber-900">{(currentHangarCount * HANGAR_TANK_CAPACITY)?.toLocaleString('id-ID')} unit</span>
                </div>
                <div className="flex justify-between">
                  <span>Sisa Kapasitas:</span>
                  <span className={`font-bold ${(currentHangarCount * HANGAR_TANK_CAPACITY - currentTankCount - currentApcCount) <= 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                    {Math.max(0, (currentHangarCount * HANGAR_TANK_CAPACITY - currentTankCount - currentApcCount))?.toLocaleString('id-ID')} unit
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* 🟣 GUDANG SENJATA: WARNA UNGU */}
          {capacityType === "gudang_senjata" && (
            <div className="bg-purple-50/80 border border-purple-200 rounded-xl p-4 space-y-2">
              <p className="text-xs font-bold text-purple-900">💣 Detail Kapasitas Gudang Senjata:</p>
              <div className="text-xs text-purple-800 space-y-1">
                <div className="flex justify-between">
                  <span>Artileri Berat:</span>
                  <span className="font-bold">{currentArtileriCount?.toLocaleString('id-ID')} unit</span>
                </div>
                <div className="flex justify-between">
                  <span>Sistem Peluncur Roket:</span>
                  <span className="font-bold">{currentRoketCount?.toLocaleString('id-ID')} unit</span>
                </div>
                <div className="flex justify-between">
                  <span>Pertahanan Udara Mobile:</span>
                  <span className="font-bold">{currentPertahanUdaraCount?.toLocaleString('id-ID')} unit</span>
                </div>
                <div className="flex justify-between">
                  <span>Kendaraan Taktis:</span>
                  <span className="font-bold">{currentKendaraanTaktisCount?.toLocaleString('id-ID')} unit</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Senjata:</span>
                  <span className="font-bold">{(currentArtileriCount + currentRoketCount + currentPertahanUdaraCount + currentKendaraanTaktisCount)?.toLocaleString('id-ID')} unit</span>
                </div>
                <div className="flex justify-between">
                  <span>Jumlah Gudang:</span>
                  <span className="font-bold">{currentGudangCount} unit</span>
                </div>
                <div className="flex justify-between border-t border-purple-200 pt-1 mt-1">
                  <span>Kapasitas Total:</span>
                  <span className="font-bold text-purple-900">{(currentGudangCount * GUDANG_SENJATA_CAPACITY)?.toLocaleString('id-ID')} unit</span>
                </div>
                <div className="flex justify-between">
                  <span>Sisa Kapasitas:</span>
                  <span className={`font-bold ${(currentGudangCount * GUDANG_SENJATA_CAPACITY - currentArtileriCount - currentRoketCount - currentPertahanUdaraCount - currentKendaraanTaktisCount) <= 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                    {Math.max(0, (currentGudangCount * GUDANG_SENJATA_CAPACITY - currentArtileriCount - currentRoketCount - currentPertahanUdaraCount - currentKendaraanTaktisCount))?.toLocaleString('id-ID')} unit
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* 🔵 PANGKALAN LAUT: WARNA BIRU LANGIT (SKY) */}
          {capacityType === "pangkalan_laut" && (
            <div className="bg-sky-50/80 border border-sky-200 rounded-xl p-4 space-y-2">
              <p className="text-xs font-bold text-sky-900">⚓ Detail Kapasitas Pangkalan Laut:</p>
              <div className="text-xs text-sky-800 space-y-1">
                <div className="flex justify-between"><span>Kapal Induk:</span><span className="font-bold">{kapalIndukCount?.toLocaleString('id-ID')} unit</span></div>
                <div className="flex justify-between"><span>Kapal Induk Nuklir:</span><span className="font-bold">{kapalIndukNuklirCount?.toLocaleString('id-ID')} unit</span></div>
                <div className="flex justify-between"><span>Kapal Destroyer:</span><span className="font-bold">{kapalDestroyerCount?.toLocaleString('id-ID')} unit</span></div>
                <div className="flex justify-between"><span>Kapal Korvet:</span><span className="font-bold">{kapalKorvetCount?.toLocaleString('id-ID')} unit</span></div>
                <div className="flex justify-between"><span>Kapal Selam Nuklir:</span><span className="font-bold">{kapalSelamNuklirCount?.toLocaleString('id-ID')} unit</span></div>
                <div className="flex justify-between"><span>Kapal Selam Reguler:</span><span className="font-bold">{kapalSelamRegulerCount?.toLocaleString('id-ID')} unit</span></div>
                <div className="flex justify-between"><span>Kapal Ranjau:</span><span className="font-bold">{kapalRanjauCount?.toLocaleString('id-ID')} unit</span></div>
                <div className="flex justify-between"><span>Kapal Logistik:</span><span className="font-bold">{kapalLogistikCount?.toLocaleString('id-ID')} unit</span></div>
                <div className="flex justify-between"><span>Total Kapal:</span><span className="font-bold">{(kapalIndukCount + kapalIndukNuklirCount + kapalDestroyerCount + kapalKorvetCount + kapalSelamNuklirCount + kapalSelamRegulerCount + kapalRanjauCount + kapalLogistikCount)?.toLocaleString('id-ID')} unit</span></div>
                <div className="flex justify-between"><span>Jumlah Pangkalan:</span><span className="font-bold">{currentPangkalanLautCount} unit</span></div>
                <div className="flex justify-between border-t border-sky-200 pt-1 mt-1">
                  <span>Kapasitas Total:</span>
                  <span className="font-bold text-sky-900">{(currentPangkalanLautCount * PANGKALAN_LAUT_CAPACITY)?.toLocaleString('id-ID')} unit</span>
                </div>
                <div className="flex justify-between">
                  <span>Sisa Kapasitas:</span>
                  <span className={`font-bold ${(currentPangkalanLautCount * PANGKALAN_LAUT_CAPACITY - kapalIndukCount - kapalIndukNuklirCount - kapalDestroyerCount - kapalKorvetCount - kapalSelamNuklirCount - kapalSelamRegulerCount - kapalRanjauCount - kapalLogistikCount) <= 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                    {Math.max(0, (currentPangkalanLautCount * PANGKALAN_LAUT_CAPACITY - kapalIndukCount - kapalIndukNuklirCount - kapalDestroyerCount - kapalKorvetCount - kapalSelamNuklirCount - kapalSelamRegulerCount - kapalRanjauCount - kapalLogistikCount))?.toLocaleString('id-ID')} unit
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* 🟦 PANGKALAN UDARA: WARNA INDIGO */}
          {capacityType === "pangkalan_udara" && (
            <div className="bg-indigo-50/80 border border-indigo-200 rounded-xl p-4 space-y-2">
              <p className="text-xs font-bold text-indigo-900">✈️ Detail Kapasitas Pangkalan Udara:</p>
              <div className="text-xs text-indigo-800 space-y-1">
                <div className="flex justify-between"><span>Jet Tempur Siluman:</span><span className="font-bold">{jetTemturSilamanCount?.toLocaleString('id-ID')} unit</span></div>
                <div className="flex justify-between"><span>Jet Tempur Interceptor:</span><span className="font-bold">{jetTemturInterceptorCount?.toLocaleString('id-ID')} unit</span></div>
                <div className="flex justify-between"><span>Pesawat Pengebom:</span><span className="font-bold">{pesawatPengebomCount?.toLocaleString('id-ID')} unit</span></div>
                <div className="flex justify-between"><span>Helikopter Serang:</span><span className="font-bold">{helikopterSerangCount?.toLocaleString('id-ID')} unit</span></div>
                <div className="flex justify-between"><span>Pesawat Pengintai:</span><span className="font-bold">{pesawatPengintaiCount?.toLocaleString('id-ID')} unit</span></div>
                <div className="flex justify-between"><span>Drone Intai UAV:</span><span className="font-bold">{droneIntaiUavCount?.toLocaleString('id-ID')} unit</span></div>
                <div className="flex justify-between"><span>Drone Kamikaze:</span><span className="font-bold">{droneKamikazeCount?.toLocaleString('id-ID')} unit</span></div>
                <div className="flex justify-between"><span>Pesawat Angkut:</span><span className="font-bold">{pesawatAngkutCount?.toLocaleString('id-ID')} unit</span></div>
                <div className="flex justify-between"><span>Total Pesawat:</span><span className="font-bold">{(jetTemturSilamanCount + jetTemturInterceptorCount + pesawatPengebomCount + helikopterSerangCount + pesawatPengintaiCount + droneIntaiUavCount + droneKamikazeCount + pesawatAngkutCount)?.toLocaleString('id-ID')} unit</span></div>
                <div className="flex justify-between"><span>Jumlah Pangkalan:</span><span className="font-bold">{currentPangkalanUdaraCount} unit</span></div>
                <div className="flex justify-between border-t border-indigo-200 pt-1 mt-1">
                  <span>Kapasitas Total:</span>
                  <span className="font-bold text-indigo-900">{(currentPangkalanUdaraCount * PANGKALAN_UDARA_CAPACITY)?.toLocaleString('id-ID')} unit</span>
                </div>
                <div className="flex justify-between">
                  <span>Sisa Kapasitas:</span>
                  <span className={`font-bold ${(currentPangkalanUdaraCount * PANGKALAN_UDARA_CAPACITY - jetTemturSilamanCount - jetTemturInterceptorCount - pesawatPengebomCount - helikopterSerangCount - pesawatPengintaiCount - droneIntaiUavCount - droneKamikazeCount - pesawatAngkutCount) <= 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                    {Math.max(0, (currentPangkalanUdaraCount * PANGKALAN_UDARA_CAPACITY - jetTemturSilamanCount - jetTemturInterceptorCount - pesawatPengebomCount - helikopterSerangCount - pesawatPengintaiCount - droneIntaiUavCount - droneKamikazeCount - pesawatAngkutCount))?.toLocaleString('id-ID')} unit
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Panel Biaya & Material (Sama untuk semua jenis) */}
          <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 rounded-xl p-4 space-y-2.5 text-xs text-[#5c3c10]">
            <div className="flex justify-between font-bold">
              <span>Biaya Pembangunan (Total):</span>
              <span className="text-[#2e261a]">
                {loadingMetadata ? 'Memuat...' : `${totalCost.toLocaleString('id-ID')} EM`}
              </span>
            </div>
            <div className="flex justify-between text-xs text-[#8b7e66]">
              <span>Biaya per bangunan:</span>
              <span>{cost.toLocaleString('id-ID')} EM</span>
            </div>

            <div className="bg-[#FAF6EE]/80 border border-[#C4B49C]/30 rounded-xl p-4 mt-3 text-xs text-[#5c3c10]">
              <label className="flex flex-col gap-2">
                <span className="font-black uppercase tracking-[0.2em]">Jumlah Bangunan</span>
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    min={1}
                    step={1}
                    value={buildQuantity}
                    onChange={(event) => {
                      const value = Number(event.target.value);
                      setBuildQuantity(Number.isFinite(value) ? Math.max(1, Math.floor(value)) : 1);
                    }}
                    className="flex-1 rounded-xl border border-[#C4B49C]/60 bg-white/90 px-3 py-2 text-sm text-[#2e261a] focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    disabled={capacityFull}
                  />
                  <button
                    type="button"
                    onClick={() => setBuildQuantity(calculateMaxBuildings())}
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] font-black uppercase cursor-pointer transition-all shadow-sm hover:shadow-md"
                  >
                    Maks
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      // Hard refresh like Ctrl+F5
                      localStorage.clear();
                      sessionStorage.clear();
                      window.location.href = window.location.href;
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-400 hover:bg-slate-500 text-white text-[10px] font-black uppercase cursor-pointer transition-all shadow-sm hover:shadow-md"
                  >
                    Reset
                  </button>
                </div>
              </label>
            </div>

            {waktuPembangunan !== undefined && (
              <>
                <div className="flex justify-between">
                  <span>Estimasi Waktu Pembangunan per bangunan:</span>
                  <span className="text-[#2e261a] font-semibold">{waktuPembangunan} Hari</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimasi Waktu Pembangunan Total:</span>
                  <span className="text-[#2e261a] font-semibold">{totalTime} Hari</span>
                </div>
              </>
            )}

            {produksiPerHari !== undefined && (
              <div className="flex justify-between">
                <span>Produksi {produksiLabel || ''} per hari:</span>
                <span className="text-emerald-700 font-bold">+{produksiPerHari.toLocaleString('id-ID')}</span>
              </div>
            )}

            {dampakKepuasan !== undefined && (
              <div className="flex justify-between">
                <span>Dampak ke Kepuasan:</span>
                <span className="text-emerald-700 font-bold">+{dampakKepuasan.toFixed(1)}</span>
              </div>
            )}

            {requirements && requirements.length > 0 ? (
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <div className="font-black uppercase tracking-[0.2em] text-[#5c3c10]">Material Dibutuhkan</div>
                  <button
                    onClick={() => setShowMaterialGrid(!showMaterialGrid)}
                    className="flex items-center gap-1.5 px-2 py-1 bg-white/80 border border-[#C4B49C]/30 rounded-lg text-[#5c3c10] hover:bg-[#5c3c10]/10 transition-all cursor-pointer"
                  >
                    {showMaterialGrid ? (
                      <>
                        <EyeOff className="h-3 w-3" />
                        <span className="text-[8px] font-bold uppercase">Sembunyikan</span>
                      </>
                    ) : (
                      <>
                        <Eye className="h-3 w-3" />
                        <span className="text-[8px] font-bold uppercase">Tampilkan</span>
                      </>
                    )}
                  </button>
                </div>

                <div
                  className={`grid grid-cols-4 gap-2 overflow-hidden transition-all duration-500 ease-in-out ${
                    showMaterialGrid ? 'max-h-[1500px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
                  }`}
                >
                  {requirements.map((material) => {
                    const stock = materialStocks[material.resourceKey] ?? 0;
                    const isStockZero = stock <= 0;
                    const requiredAmount = (material.amount ?? 0) * buildQuantity;
                    const materialKey = `${material.resourceKey}-${material.group}`;
                    const isSelected = selectedMaterialKey === materialKey;

                    return (
                      <button
                        key={materialKey}
                        type="button"
                        onClick={() => {
                          setSelectedMaterialKey(materialKey);
                          onMaterialClick(material.resourceKey, material.label);
                        }}
                        className={`flex flex-col items-center justify-center bg-white/80 border rounded-xl p-2.5 min-h-[50px] cursor-pointer hover:border-[#5c3c10]/60 transition-all ${
                          isSelected
                            ? 'border-emerald-400 bg-emerald-50/70'
                            : isStockZero
                            ? 'border-red-400 bg-red-50/70 text-red-800'
                            : 'border-emerald-400 bg-emerald-50/70'
                        }`}
                      >
                        <div className="font-bold text-[10px] text-center">{material.label}</div>
                        {material.amount !== undefined && (
                          <div className="text-[9px] uppercase tracking-[0.15em] text-[#5c3c10] mt-1">
                            x{requiredAmount.toLocaleString('id-ID')}
                          </div>
                        )}
                        <div className={`text-[10px] font-black mt-0.5 ${isStockZero ? 'text-red-600' : 'text-emerald-700'}`}>
                          {stock.toLocaleString('id-ID')}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="text-[#8b7e66]">Tidak ada material yang dibutuhkan untuk bangunan ini.</div>
            )}
          </div>

          <div className="flex justify-between items-center text-xs font-black text-[#5c3c10] pt-1">
            <span>Kas Negara Saat Ini:</span>
            <span>{anggaran.toLocaleString('id-ID')}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#FAF6EE] border-t-2 border-[#C4B49C]/20 flex gap-3 relative z-10 shrink-0">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-xl border-2 border-[#C4B49C] text-[#8b7e66] text-[10px] font-black uppercase cursor-pointer hover:bg-black/5 transition-all text-center"
          >
            Batal
          </button>
          <button
            onClick={() => onConfirm(buildQuantity)}
            disabled={loadingMetadata || hasMissingMaterials || !isAnggaranCukup || isDisabled || buildQuantity <= 0}
            className={`flex-1 py-2 rounded-xl text-[10px] font-black uppercase transition-all text-center cursor-pointer ${
              hasMissingMaterials || !isAnggaranCukup || loadingMetadata || isDisabled
                ? 'bg-[#8b7e66] text-white border border-[#8b7e66] cursor-not-allowed opacity-70'
                : 'bg-[#5c3c10] text-[#FAF6EE] border border-[#5c3c10] hover:bg-[#8b7e66] hover:border-[#8b7e66]'
            }`}
          >
            {hasMissingMaterials ? 'Material Kurang' : !isAnggaranCukup ? 'Dana Tidak Cukup' : 'Mulai Pembangunan'}
          </button>
        </div>
      </div>
    </div>
  );
}