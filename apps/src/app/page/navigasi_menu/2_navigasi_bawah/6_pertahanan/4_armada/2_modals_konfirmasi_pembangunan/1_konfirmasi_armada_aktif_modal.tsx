"use client";
import React, { useState } from "react";
import { X, Hammer, Eye, EyeOff } from "lucide-react";
import { BARAK_TO_SOLDIERS_MULTIPLIER } from "../logic/1_barak_logic";
import { HANGAR_TANK_CAPACITY } from "../logic/2_hangar_tank_logic";
import { GUDANG_SENJATA_CAPACITY } from "../logic/3_gudang_senjata_logic";
import { PANGKALAN_LAUT_CAPACITY } from "../logic/4_pangkalan_laut_logic";
import { PANGKALAN_UDARA_CAPACITY } from "../logic/5_pangkalan_udara_logic";
import { KonfirmasiPembangunanModalProps } from "../requirements_logic/konfirmasi_pembangunan_types";

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
}: KonfirmasiPembangunanModalProps) {
  const [showMaterialGrid, setShowMaterialGrid] = useState(true);

  if (!isOpen) return null;

  const hasMissingMaterials = missingMaterials.length > 0;
  const isAnggaranCukup = anggaran >= cost;

  // 🔥 LOGIC KAPASITAS INFANTERI DI MODAL
  let infanteriCapacityFull = false;
  let infanteriCapacityDisplay = "";
  let infanteriWarningText = "";
  
  if (capacityType === "infanteri") {
    // Jika currentCapacity adalah 0 (misal data pasukan belum tersimpan), gunakan fallback
    const safeCurrentCapacity = currentCapacity > 0 ? currentCapacity : (currentBarakCount * BARAK_TO_SOLDIERS_MULTIPLIER);
    
    infanteriCapacityFull = safeCurrentCapacity >= maxCapacity;
    infanteriCapacityDisplay = `${safeCurrentCapacity.toLocaleString('id-ID')} / ${maxCapacity.toLocaleString('id-ID')}`;
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

  const handleNavigateToInfra = () => {
    if (onNavigateToInfra) {
      onNavigateToInfra('barak');
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans animate-in fade-in zoom-in-95 duration-150 pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />

        {/* Header */}
        <div className="px-6 py-5 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-2 text-[#5c3c10]">
            <Hammer className="h-5 w-5" />
            <h3 className="text-base font-bold uppercase tracking-tight">Perekrutan Militers</h3>
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

          {/* DETAIL KAPASITAS INFANTERI */}
          {capacityType === "infanteri" && (
            <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-4 space-y-2">
              <p className="text-xs font-bold text-blue-900">📊 Detail Kapasitas Barak:</p>
              <div className="text-xs text-blue-800 space-y-1">
                <div className="flex justify-between">
                  <span>Infanteri Saat Ini:</span>
                  <span className="font-bold">{(currentCapacity > 0 ? currentCapacity : currentBarakCount * 10000).toLocaleString('id-ID')} pasukan</span>
                </div>
                <div className="flex justify-between">
                  <span>Jumlah Barak:</span>
                  <span className="font-bold">{currentBarakCount} unit</span>
                </div>
                <div className="flex justify-between border-t border-blue-200 pt-1 mt-1">
                  <span>Kapasitas Total:</span>
                  <span className="font-bold text-blue-900">{maxCapacity?.toLocaleString('id-ID')} pasukan</span>
                </div>
                <div className="flex justify-between">
                  <span>Sisa Kapasitas:</span>
                  <span className={`font-bold ${(maxCapacity - (currentCapacity > 0 ? currentCapacity : currentBarakCount * 10000)) <= 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                    {Math.max(0, (maxCapacity - (currentCapacity > 0 ? currentCapacity : currentBarakCount * 10000)))?.toLocaleString('id-ID')} pasukan
                  </span>
                </div>
              </div>
            </div>
          )}

          {capacityFull && capacityType === "infanteri" && (
            <div className="bg-rose-50 border border-rose-300 text-rose-900 rounded-2xl p-4 space-y-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-700 font-black">!</div>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em]">Kapasitas Infanteri Penuh</p>
                  <p className="text-xs leading-relaxed text-rose-800 mt-2">{warningText}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleNavigateToInfra}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-xs font-black uppercase text-white transition hover:bg-emerald-700"
              >
                Buka Tab Infrastruktur dan Sorot Barak
              </button>
            </div>
          )}

          {buildingLabel !== "Pasukan Infanteri" && (
            <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 rounded-xl p-4 space-y-2.5 text-xs text-[#5c3c10]">
              <div className="flex justify-between font-bold">
                <span>Biaya Pembangunan:</span>
                <span className="text-[#2e261a]">
                  {loadingMetadata ? 'Memuat...' : `${cost.toLocaleString('id-ID')} EM`}
                </span>
              </div>

              {waktuPembangunan !== undefined && (
                <div className="flex justify-between">
                  <span>Estimasi Waktu Pembangunan:</span>
                  <span className="text-[#2e261a] font-semibold">{waktuPembangunan} Hari</span>
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
              )}
            </div>
          )}

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
            onClick={onConfirm}
            disabled={buildingLabel === "Pasukan Infanteri" ? isDisabled || capacityFull : loadingMetadata || hasMissingMaterials || !isAnggaranCukup || isDisabled || capacityFull}
            className={`flex-1 py-2 rounded-xl text-[10px] font-black uppercase transition-all text-center cursor-pointer ${
              buildingLabel === "Pasukan Infanteri" 
                ? (isDisabled || capacityFull ? 'bg-[#8b7e66] text-white border border-[#8b7e66] cursor-not-allowed opacity-70' : 'bg-[#5c3c10] text-[#FAF6EE] border border-[#5c3c10] hover:bg-[#8b7e66] hover:border-[#8b7e66]')
                : (hasMissingMaterials || !isAnggaranCukup || loadingMetadata || isDisabled || capacityFull ? 'bg-[#8b7e66] text-white border border-[#8b7e66] cursor-not-allowed opacity-70' : 'bg-[#5c3c10] text-[#FAF6EE] border border-[#5c3c10] hover:bg-[#8b7e66] hover:border-[#8b7e66]')
            }`}
          >
            {capacityFull && capacityType === "infanteri" ? 'Kapasitas Penuh - Buat Barak' : capacityFull && capacityType === "hangar_tank" ? 'Kapasitas Penuh - Buat Hangar Tank' : capacityFull && capacityType === "gudang_senjata" ? 'Kapasitas Penuh - Buat Gudang Senjata' : capacityFull && capacityType === "pangkalan_laut" ? 'Kapasitas Penuh - Buat Pangkalan Laut' : capacityFull && capacityType === "pangkalan_udara" ? 'Kapasitas Penuh - Buat Pangkalan Udara' : buildingLabel === "Pasukan Infanteri" ? 'Mulai Perekrutan' : hasMissingMaterials ? 'Material Kurang' : !isAnggaranCukup ? 'Dana Tidak Cukup' : 'Mulai Pembangunan'}
          </button>
        </div>
      </div>
    </div>
  );
}