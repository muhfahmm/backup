// 1_konfirmasi_armada_aktif_modal.tsx
"use client";
import React, { useEffect, useState } from "react";
import { X, Hammer, Eye, EyeOff, Calendar } from "lucide-react";
import { BARAK_TO_SOLDIERS_MULTIPLIER } from "../logic/1_barak_logic";
import { HANGAR_TANK_CAPACITY } from "../logic/2_hangar_tank_logic";
import { GUDANG_SENJATA_CAPACITY } from "../logic/3_gudang_senjata_logic";
import { PANGKALAN_LAUT_CAPACITY } from "../logic/4_pangkalan_laut_logic";
import { PANGKALAN_UDARA_CAPACITY } from "../logic/5_pangkalan_udara_logic";
import { KonfirmasiPembangunanModalProps } from "../requirements_logic/konfirmasi_pembangunan_types";
import { calculateRecruitmentDays } from "../logic/recruitmentLogic";

export default function KonfirmasiArmadaAktifModal({
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
  unitDataKey = "pasukan_infanteri",
  currentGameDate = new Date().toISOString(),
}: KonfirmasiPembangunanModalProps & { unitDataKey?: string; currentGameDate?: string }) {
  const [showMaterialGrid, setShowMaterialGrid] = useState(true);
  const [buildAmount, setBuildAmount] = useState<number>(capacityType === "infanteri" ? 10000 : 1);
  const [estimatedDays, setEstimatedDays] = useState<number>(0);
  const [completionDate, setCompletionDate] = useState<string>("");

  const hasMissingMaterials = missingMaterials.length > 0;
  const isAnggaranCukup = anggaran >= cost;

  // Hitung infanteri saat ini
  const safeCurrentInfanteriCount = typeof currentCapacity === 'number'
    ? currentCapacity
    : (currentBarakCount * BARAK_TO_SOLDIERS_MULTIPLIER);
  const remainingInfanteriCapacity = Math.max(0, maxCapacity - safeCurrentInfanteriCount);

  // Fungsi untuk mendapatkan sisa kapasitas berdasarkan tipe
  const getRemainingCapacity = (): number => {
    switch (capacityType) {
      case "infanteri":
        return remainingInfanteriCapacity;
      case "hangar_tank": {
        const totalVehicles = currentTankCount + currentApcCount;
        const maxHangar = currentHangarCount * HANGAR_TANK_CAPACITY;
        return Math.max(0, maxHangar - totalVehicles);
      }
      case "gudang_senjata": {
        const totalWeapons = currentArtileriCount + currentRoketCount + currentPertahanUdaraCount + currentKendaraanTaktisCount;
        const maxGudang = currentGudangCount * GUDANG_SENJATA_CAPACITY;
        return Math.max(0, maxGudang - totalWeapons);
      }
      case "pangkalan_laut": {
        const totalKapal = kapalIndukCount + kapalIndukNuklirCount + kapalDestroyerCount + kapalKorvetCount +
                           kapalSelamNuklirCount + kapalSelamRegulerCount + kapalRanjauCount + kapalLogistikCount;
        const maxPangkalan = currentPangkalanLautCount * PANGKALAN_LAUT_CAPACITY;
        return Math.max(0, maxPangkalan - totalKapal);
      }
      case "pangkalan_udara": {
        const totalPesawat = jetTemturSilamanCount + jetTemturInterceptorCount + pesawatPengebomCount + helikopterSerangCount +
                             pesawatPengintaiCount + droneIntaiUavCount + droneKamikazeCount + pesawatAngkutCount;
        const maxPangkalan = currentPangkalanUdaraCount * PANGKALAN_UDARA_CAPACITY;
        return Math.max(0, maxPangkalan - totalPesawat);
      }
      default:
        return 0;
    }
  };

  const remaining = getRemainingCapacity();
  const capacityFull = remaining <= 0 && (capacityType !== "infanteri" || safeCurrentInfanteriCount >= maxCapacity);

  // Batasi buildAmount agar tidak melebihi kapasitas
  useEffect(() => {
    const rem = getRemainingCapacity();
    if (rem <= 0) {
      setBuildAmount(0);
    } else if (buildAmount > rem) {
      setBuildAmount(Math.max(1, rem));
    }
  }, [capacityType, currentTankCount, currentApcCount, currentArtileriCount, currentRoketCount, currentPertahanUdaraCount, currentKendaraanTaktisCount, kapalIndukCount, kapalIndukNuklirCount, kapalDestroyerCount, kapalKorvetCount, kapalSelamNuklirCount, kapalSelamRegulerCount, kapalRanjauCount, kapalLogistikCount, jetTemturSilamanCount, jetTemturInterceptorCount, pesawatPengebomCount, helikopterSerangCount, pesawatPengintaiCount, droneIntaiUavCount, droneKamikazeCount, pesawatAngkutCount, currentBarakCount, currentCapacity, maxCapacity]);

  // Hitung estimasi waktu dan tanggal selesai
  useEffect(() => {
    if (buildAmount <= 0) {
      setEstimatedDays(0);
      setCompletionDate("");
      return;
    }

    let days = 0;
    if (capacityType === "infanteri") {
      // Logika rekrutmen infanteri
      days = calculateRecruitmentDays(buildAmount) || 1;
    } else {
      // Untuk unit non-infanteri: waktu pembangunan per unit * jumlah unit
      // waktuPembangunan dikirim dari parent (berasal dari JSON)
      const timePerUnit = waktuPembangunan || 1;
      days = Math.ceil(timePerUnit * buildAmount);
    }

    setEstimatedDays(days);
    const start = new Date(currentGameDate);
    const end = new Date(start);
    end.setDate(end.getDate() + days);
    setCompletionDate(end.toISOString());
  }, [buildAmount, capacityType, currentGameDate, waktuPembangunan]);

  if (!isOpen) return null;

  // ====== LOGIKA KAPASITAS UNTUK DITAMPILKAN ======
  let capacityDisplay = "";
  let warningText = "";
  let capacityInfoComponent = null;

  // Infanteri
  if (capacityType === "infanteri") {
    const used = safeCurrentInfanteriCount;
    const total = maxCapacity;
    capacityDisplay = `${used.toLocaleString('id-ID')} / ${total.toLocaleString('id-ID')}`;
    warningText = `Kapasitas Infanteri sudah penuh (${total.toLocaleString('id-ID')} pasukan). Anda harus membangun Barak baru untuk menambah Infanteri lebih banyak.`;
    capacityInfoComponent = (
      <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4 space-y-2">
        <p className="text-xs font-bold text-emerald-900">📊 Detail Kapasitas Barak:</p>
        <div className="text-xs text-emerald-800 space-y-1">
          <div className="flex justify-between"><span>Infanteri Saat Ini:</span><span className="font-bold">{used.toLocaleString('id-ID')} pasukan</span></div>
          <div className="flex justify-between"><span>Jumlah Barak:</span><span className="font-bold">{currentBarakCount} unit</span></div>
          <div className="flex justify-between border-t border-emerald-200 pt-1 mt-1"><span>Kapasitas Total:</span><span className="font-bold text-emerald-900">{total.toLocaleString('id-ID')} pasukan</span></div>
          <div className="flex justify-between"><span>Sisa Kapasitas:</span><span className={`font-bold ${remaining <= 0 ? 'text-rose-600' : 'text-emerald-600'}`}>{Math.max(0, remaining).toLocaleString('id-ID')} pasukan</span></div>
        </div>
      </div>
    );
  }

  // Hangar Tank
  else if (capacityType === "hangar_tank") {
    const totalVehicles = currentTankCount + currentApcCount;
    const maxHangar = currentHangarCount * HANGAR_TANK_CAPACITY;
    capacityDisplay = `${totalVehicles.toLocaleString('id-ID')} / ${maxHangar.toLocaleString('id-ID')}`;
    warningText = `Kapasitas Hangar Tank sudah penuh (${currentHangarCount} hangar × ${HANGAR_TANK_CAPACITY.toLocaleString('id-ID')} = ${maxHangar.toLocaleString('id-ID')} unit). Anda harus membangun Hangar Tank baru untuk menambah Tank/APC lebih banyak.`;
    capacityInfoComponent = (
      <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 space-y-2">
        <p className="text-xs font-bold text-amber-900">🚜 Detail Kapasitas Hangar Tank:</p>
        <div className="text-xs text-amber-800 space-y-1">
          <div className="flex justify-between"><span>Tank Tempur Utama:</span><span className="font-bold">{currentTankCount?.toLocaleString('id-ID')} unit</span></div>
          <div className="flex justify-between"><span>APC / IFV:</span><span className="font-bold">{currentApcCount?.toLocaleString('id-ID')} unit</span></div>
          <div className="flex justify-between"><span>Total Kendaraan:</span><span className="font-bold">{totalVehicles.toLocaleString('id-ID')} unit</span></div>
          <div className="flex justify-between"><span>Jumlah Hangar:</span><span className="font-bold">{currentHangarCount} unit</span></div>
          <div className="flex justify-between border-t border-amber-200 pt-1 mt-1"><span>Kapasitas Total:</span><span className="font-bold text-amber-900">{maxHangar.toLocaleString('id-ID')} unit</span></div>
          <div className="flex justify-between"><span>Sisa Kapasitas:</span><span className={`font-bold ${remaining <= 0 ? 'text-rose-600' : 'text-emerald-600'}`}>{Math.max(0, remaining).toLocaleString('id-ID')} unit</span></div>
        </div>
      </div>
    );
  }

  // Gudang Senjata
  else if (capacityType === "gudang_senjata") {
    const totalWeapons = currentArtileriCount + currentRoketCount + currentPertahanUdaraCount + currentKendaraanTaktisCount;
    const maxGudang = currentGudangCount * GUDANG_SENJATA_CAPACITY;
    capacityDisplay = `${totalWeapons.toLocaleString('id-ID')} / ${maxGudang.toLocaleString('id-ID')}`;
    warningText = `Kapasitas Gudang Senjata sudah penuh (${currentGudangCount} gudang × ${GUDANG_SENJATA_CAPACITY.toLocaleString('id-ID')} = ${maxGudang.toLocaleString('id-ID')} unit). Anda harus membangun Gudang Senjata baru untuk menambah Senjata lebih banyak.`;
    capacityInfoComponent = (
      <div className="bg-purple-50/80 border border-purple-200 rounded-xl p-4 space-y-2">
        <p className="text-xs font-bold text-purple-900">💣 Detail Kapasitas Gudang Senjata:</p>
        <div className="text-xs text-purple-800 space-y-1">
          <div className="flex justify-between"><span>Artileri Berat:</span><span className="font-bold">{currentArtileriCount?.toLocaleString('id-ID')} unit</span></div>
          <div className="flex justify-between"><span>Sistem Peluncur Roket:</span><span className="font-bold">{currentRoketCount?.toLocaleString('id-ID')} unit</span></div>
          <div className="flex justify-between"><span>Pertahanan Udara Mobile:</span><span className="font-bold">{currentPertahanUdaraCount?.toLocaleString('id-ID')} unit</span></div>
          <div className="flex justify-between"><span>Kendaraan Taktis:</span><span className="font-bold">{currentKendaraanTaktisCount?.toLocaleString('id-ID')} unit</span></div>
          <div className="flex justify-between"><span>Total Senjata:</span><span className="font-bold">{totalWeapons.toLocaleString('id-ID')} unit</span></div>
          <div className="flex justify-between"><span>Jumlah Gudang:</span><span className="font-bold">{currentGudangCount} unit</span></div>
          <div className="flex justify-between border-t border-purple-200 pt-1 mt-1"><span>Kapasitas Total:</span><span className="font-bold text-purple-900">{maxGudang.toLocaleString('id-ID')} unit</span></div>
          <div className="flex justify-between"><span>Sisa Kapasitas:</span><span className={`font-bold ${remaining <= 0 ? 'text-rose-600' : 'text-emerald-600'}`}>{Math.max(0, remaining).toLocaleString('id-ID')} unit</span></div>
        </div>
      </div>
    );
  }

  // Pangkalan Laut
  else if (capacityType === "pangkalan_laut") {
    const totalKapal = kapalIndukCount + kapalIndukNuklirCount + kapalDestroyerCount + kapalKorvetCount +
                       kapalSelamNuklirCount + kapalSelamRegulerCount + kapalRanjauCount + kapalLogistikCount;
    const maxPangkalan = currentPangkalanLautCount * PANGKALAN_LAUT_CAPACITY;
    capacityDisplay = `${totalKapal.toLocaleString('id-ID')} / ${maxPangkalan.toLocaleString('id-ID')}`;
    warningText = `Kapasitas Pangkalan Laut sudah penuh (${currentPangkalanLautCount} pangkalan × ${PANGKALAN_LAUT_CAPACITY.toLocaleString('id-ID')} = ${maxPangkalan.toLocaleString('id-ID')} unit). Anda harus membangun Pangkalan Laut baru untuk menambah Kapal lebih banyak.`;
    capacityInfoComponent = (
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
          <div className="flex justify-between"><span>Total Kapal:</span><span className="font-bold">{totalKapal.toLocaleString('id-ID')} unit</span></div>
          <div className="flex justify-between"><span>Jumlah Pangkalan:</span><span className="font-bold">{currentPangkalanLautCount} unit</span></div>
          <div className="flex justify-between border-t border-sky-200 pt-1 mt-1"><span>Kapasitas Total:</span><span className="font-bold text-sky-900">{maxPangkalan.toLocaleString('id-ID')} unit</span></div>
          <div className="flex justify-between"><span>Sisa Kapasitas:</span><span className={`font-bold ${remaining <= 0 ? 'text-rose-600' : 'text-emerald-600'}`}>{Math.max(0, remaining).toLocaleString('id-ID')} unit</span></div>
        </div>
      </div>
    );
  }

  // Pangkalan Udara
  else if (capacityType === "pangkalan_udara") {
    const totalPesawat = jetTemturSilamanCount + jetTemturInterceptorCount + pesawatPengebomCount + helikopterSerangCount +
                         pesawatPengintaiCount + droneIntaiUavCount + droneKamikazeCount + pesawatAngkutCount;
    const maxPangkalan = currentPangkalanUdaraCount * PANGKALAN_UDARA_CAPACITY;
    capacityDisplay = `${totalPesawat.toLocaleString('id-ID')} / ${maxPangkalan.toLocaleString('id-ID')}`;
    warningText = `Kapasitas Pangkalan Udara sudah penuh (${currentPangkalanUdaraCount} pangkalan × ${PANGKALAN_UDARA_CAPACITY.toLocaleString('id-ID')} = ${maxPangkalan.toLocaleString('id-ID')} unit). Anda harus membangun Pangkalan Udara baru untuk menambah Pesawat lebih banyak.`;
    capacityInfoComponent = (
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
          <div className="flex justify-between"><span>Total Pesawat:</span><span className="font-bold">{totalPesawat.toLocaleString('id-ID')} unit</span></div>
          <div className="flex justify-between"><span>Jumlah Pangkalan:</span><span className="font-bold">{currentPangkalanUdaraCount} unit</span></div>
          <div className="flex justify-between border-t border-indigo-200 pt-1 mt-1"><span>Kapasitas Total:</span><span className="font-bold text-indigo-900">{maxPangkalan.toLocaleString('id-ID')} unit</span></div>
          <div className="flex justify-between"><span>Sisa Kapasitas:</span><span className={`font-bold ${remaining <= 0 ? 'text-rose-600' : 'text-emerald-600'}`}>{Math.max(0, remaining).toLocaleString('id-ID')} unit</span></div>
        </div>
      </div>
    );
  }

  const handleNavigateToInfra = () => {
    if (onNavigateToInfra) {
      const infraKey =
        capacityType === "infanteri" ? "barak" :
        capacityType === "hangar_tank" ? "hangar_tank" :
        capacityType === "gudang_senjata" ? "gudang_senjata" :
        capacityType === "pangkalan_laut" ? "pangkalan_laut" :
        "pangkalan_udara";
      onNavigateToInfra(infraKey);
    }
    onClose();
  };

  const handleConfirmClick = () => {
    if (buildAmount <= 0) {
      alert("Jumlah unit harus lebih dari 0.");
      return;
    }
    onConfirm(buildAmount);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans animate-in fade-in zoom-in-95 duration-150 pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />

        {/* Header */}
        <div className="px-6 py-5 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-2 text-[#5c3c10]">
            <Hammer className="h-5 w-5" />
            <h3 className="text-base font-bold uppercase tracking-tight">Perekrutan / Pembangunan Militer</h3>
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

          {/* Detail Kapasitas */}
          {capacityInfoComponent}

          {/* ========== PERINGATAN KAPASITAS PENUH ========== */}
          {capacityFull && (
            <div className="bg-rose-50 border border-rose-300 text-rose-900 rounded-2xl p-4 space-y-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-700 font-black">!</div>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em]">
                    {capacityType === "infanteri" ? "Kapasitas Infanteri Penuh" :
                     capacityType === "hangar_tank" ? "Kapasitas Hangar Tank Penuh" :
                     capacityType === "gudang_senjata" ? "Kapasitas Gudang Senjata Penuh" :
                     capacityType === "pangkalan_laut" ? "Kapasitas Pangkalan Laut Penuh" :
                     "Kapasitas Pangkalan Udara Penuh"}
                  </p>
                  <p className="text-xs leading-relaxed text-rose-800 mt-2">{warningText}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleNavigateToInfra}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-xs font-black uppercase text-white transition hover:bg-emerald-700"
              >
                Buka Tab Infrastruktur dan Sorot {
                  capacityType === "infanteri" ? "Barak" :
                  capacityType === "hangar_tank" ? "Hangar Tank" :
                  capacityType === "gudang_senjata" ? "Gudang Senjata" :
                  capacityType === "pangkalan_laut" ? "Pangkalan Laut" :
                  "Pangkalan Udara"
                }
              </button>
            </div>
          )}

          {/* ========== INPUT JUMLAH (UNTUK SEMUA TIPE) ========== */}
          <div className="bg-[#FAF6EE]/80 border border-[#C4B49C]/30 rounded-xl p-4 space-y-3 text-xs text-[#5c3c10]">
            <label className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-black uppercase tracking-[0.2em]">
                  {capacityType === "infanteri" ? "Jumlah Pasukan yang Direkrut" : "Jumlah Unit yang Dibangun"}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const rem = getRemainingCapacity();
                    setBuildAmount(rem > 0 ? rem : 0);
                  }}
                  disabled={capacityFull}
                  className="px-3 py-1 bg-[#5c3c10]/10 hover:bg-[#5c3c10]/20 text-[#5c3c10] text-[9px] font-black uppercase rounded-lg transition-colors cursor-pointer border border-[#5c3c10]/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Maks
                </button>
              </div>
              <input
                type="number"
                min={0}
                step={capacityType === "infanteri" ? 1000 : 1}
                value={buildAmount}
                onChange={(event) => {
                  const value = Number(event.target.value);
                  const safeValue = Number.isFinite(value) ? Math.max(0, Math.floor(value)) : 0;
                  const rem = getRemainingCapacity();
                  setBuildAmount(Math.min(safeValue, rem));
                }}
                className="w-full rounded-xl border border-[#C4B49C]/60 bg-white/90 px-3 py-2 text-sm text-[#2e261a] focus:outline-none focus:ring-2 focus:ring-emerald-500"
                disabled={capacityFull}
              />
            </label>
            <p className="text-[10px] text-[#8b7e66]">
              Maksimal: {Math.max(0, getRemainingCapacity()).toLocaleString('id-ID')} {capacityType === "infanteri" ? "pasukan" : "unit"}.
            </p>
          </div>

          {/* ========== ESTIMASI WAKTU & TANGGAL SELESAI ========== */}
          {estimatedDays > 0 && !capacityFull && (
            <div className="bg-emerald-50/60 border border-emerald-200 rounded-lg p-3 space-y-2 mt-2">
              <div className="flex items-center gap-2 text-emerald-900 font-bold">
                <Calendar className="w-4 h-4" />
                <span>Estimasi Waktu Pembangunan</span>
              </div>
              <div className="space-y-1 text-[11px] text-emerald-800">
                <div className="flex justify-between">
                  <span>Waktu Dibutuhkan:</span>
                  <span className="font-bold">{estimatedDays} hari</span>
                </div>
                {completionDate && (
                  <div className="flex justify-between border-t border-emerald-200 pt-1">
                    <span>Selesai Tanggal:</span>
                    <span className="font-bold text-emerald-700">
                      {new Date(completionDate).toLocaleDateString('id-ID', {
                        weekday: 'short',
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ========== BIAYA & MATERIAL ========== */}
          <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 rounded-xl p-4 space-y-2.5 text-xs text-[#5c3c10]">
            <div className="flex justify-between font-bold">
              <span>Biaya Pembangunan:</span>
              <span className="text-[#2e261a]">
                {loadingMetadata ? 'Memuat...' : `${cost.toLocaleString('id-ID')} EM`}
              </span>
            </div>

            {waktuPembangunan !== undefined && capacityType !== "infanteri" && (
              <div className="flex justify-between">
                <span>Waktu Pembangunan per Unit:</span>
                <span className="text-[#2e261a] font-semibold">{waktuPembangunan} Hari</span>
              </div>
            )}

            {capacityType !== "infanteri" && (
              requirements && requirements.length > 0 ? (
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

                      return (
                        <button
                          key={`${material.resourceKey}-${material.group}`}
                          type="button"
                          onClick={() => onMaterialClick(material.resourceKey, material.label)}
                          className={`flex flex-col items-center justify-center bg-white/80 border rounded-xl p-2.5 min-h-[50px] cursor-pointer hover:border-[#5c3c10]/60 transition-all ${
                            isStockZero ? 'border-red-400 bg-red-50/70 text-red-800' : 'border-emerald-400 bg-emerald-50/70'
                          }`}
                        >
                          <div className="font-bold text-[10px] text-center">{material.label}</div>
                          {material.amount !== undefined && (
                            <div className="text-[9px] uppercase tracking-[0.15em] text-[#5c3c10] mt-1">
                              x{material.amount}
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
              )
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
            onClick={handleConfirmClick}
            disabled={capacityFull || buildAmount <= 0 || (capacityType !== "infanteri" && (hasMissingMaterials || !isAnggaranCukup || loadingMetadata || isDisabled))}
            className={`flex-1 py-2 rounded-xl text-[10px] font-black uppercase transition-all text-center cursor-pointer ${
              capacityFull || buildAmount <= 0 ? 'bg-[#8b7e66] text-white border border-[#8b7e66] cursor-not-allowed opacity-70' :
              (capacityType !== "infanteri" && (hasMissingMaterials || !isAnggaranCukup || loadingMetadata || isDisabled)) ? 'bg-[#8b7e66] text-white border border-[#8b7e66] cursor-not-allowed opacity-70' :
              'bg-[#5c3c10] text-[#FAF6EE] border border-[#5c3c10] hover:bg-[#8b7e66] hover:border-[#8b7e66]'
            }`}
          >
            {capacityFull ? 'Kapasitas Penuh' :
             buildAmount <= 0 ? 'Masukkan Jumlah' :
             capacityType !== "infanteri" && hasMissingMaterials ? 'Material Kurang' :
             capacityType !== "infanteri" && !isAnggaranCukup ? 'Dana Tidak Cukup' :
             (capacityType === "infanteri" ? 'Mulai Perekrutan' : 'Mulai Pembangunan')}
          </button>
        </div>
      </div>
    </div>
  );
}