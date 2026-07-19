"use client"
import React, { useState, useEffect } from "react";
import { fetchBuildingMetadata } from '../../../../../../lib/buildingMetadata';
import { X, Home, TrendingUp, TrendingDown, Hammer, Eye, EyeOff, AlertCircle } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
}

// --- TIPE DATA MATERIAL ---
interface MaterialRequirement {
  resourceKey: string;
  label: string;
  group: string;
}

interface BuildingRequirements {
  requirements: MaterialRequirement[];
}

// --- DUMMY REQUIREMENTS MATERIAL (GANTI DENGAN IMPOR MODUL FOLDER SAAT SUDAH SIAP) ---
// Jika sudah ada folder: import * as hunianRequirements from "./requirements_logic/3_hunian/requirements";
const DUMMY_HUNIAN_REQUIREMENTS: Record<string, BuildingRequirements> = {
  rumah_subsidi: {
    requirements: [
      { resourceKey: 'semen_beton', label: 'Semen Beton', group: 'Manufaktur' },
      { resourceKey: 'kayu', label: 'Kayu', group: 'Manufaktur' },
      { resourceKey: 'bijih_besi', label: 'Besi', group: 'Mineral' },
    ]
  },
  apartemen: {
    requirements: [
      { resourceKey: 'semen_beton', label: 'Semen Beton', group: 'Manufaktur' },
      { resourceKey: 'kayu', label: 'Kayu', group: 'Manufaktur' },
      { resourceKey: 'tembaga', label: 'Tembaga', group: 'Mineral' },
      { resourceKey: 'aluminium', label: 'Aluminium', group: 'Mineral' },
    ]
  },
  mansion: {
    requirements: [
      { resourceKey: 'semen_beton', label: 'Semen Beton', group: 'Manufaktur' },
      { resourceKey: 'kayu', label: 'Kayu', group: 'Manufaktur' },
      { resourceKey: 'emas', label: 'Emas', group: 'Mineral' },
      { resourceKey: 'logam_tanah_jarang', label: 'Logam Tanah Jarang', group: 'Mineral' },
    ]
  }
};

// --- PEMETAAN TAB MATERIAL KE TAB PRODUKSI (Untuk Navigasi) ---
const CARD_TAB_MAP: Record<string, string> = {
  kayu: 'manufaktur',
  semen_beton: 'manufaktur',
  tembaga: 'mineral',
  aluminium: 'mineral',
  aluminium: 'mineral',
  nikel: 'mineral',
  bijih_besi: 'mineral',
  gas_alam: 'mineral',
  emas: 'mineral',
  uranium: 'mineral',
  batu_bara: 'mineral',
  minyak_bumi: 'mineral',
  garam: 'mineral',
  litium: 'mineral',
  logam_tanah_jarang: 'mineral',
  semikonduktor: 'manufaktur',
  mobil: 'manufaktur',
  sepeda_motor: 'manufaktur',
  smelter: 'manufaktur',
  pupuk: 'manufaktur',
};

const RESOURCE_KEY_ALIASES: Record<string, string> = {
  aluminium: 'aluminium',
};

const normalizeResourceKey = (key: string) => RESOURCE_KEY_ALIASES[key] || key;

export default function HunianPermukimanModal({ isOpen, onClose, countryDetail, setCountryDetail }: ModalProps) {
  // --- STATE LAMA ---
  const [activeTab, setActiveTab] = useState("rumah_subsidi");
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  // --- STATE BARU UNTUK MODAL KONFIRMASI ---
  const [selectedBuilding, setSelectedBuilding] = useState<{ key: string; label: string } | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [showMaterialGrid, setShowMaterialGrid] = useState(true);
  const [showMaterialWarningModal, setShowMaterialWarningModal] = useState(false);
  const [insufficientMaterials, setInsufficientMaterials] = useState<MaterialRequirement[]>([]);

  // --- AMBIL METADATA BANGUNAN ---
  useEffect(() => {
    if (!isOpen) return;
    fetchBuildingMetadata().then((m) => setMetadata(m || {}));
  }, [isOpen]);

  if (!isOpen) return null;

  // --- FUNGSI HELPER LOGIKA MATERIAL ---
  const getSelectedBuildingRequirements = (): BuildingRequirements | undefined => {
    if (!selectedBuilding) return undefined;
    // Ganti dengan: const module = hunianRequirements; return module?.findRequirements?.(selectedBuilding.key);
    // Jika sudah memiliki file requirements di folder:
    return DUMMY_HUNIAN_REQUIREMENTS[selectedBuilding.key];
  };

  const getMaterialStock = (resourceKey: string): number => {
    const normalizedKey = normalizeResourceKey(resourceKey);
    return Number(countryDetail?.[normalizedKey]) || 0;
  };

  const handleMaterialClick = (resourceKey: string, label: string) => {
    const normalizedKey = normalizeResourceKey(resourceKey);
    const tabId = CARD_TAB_MAP[normalizedKey];
    if (!tabId) {
      setToast(`Material ${label} tidak memiliki tab produksi yang terdaftar.`);
      setTimeout(() => setToast(null), 2000);
      return;
    }
    // Kembali ke halaman produksi (pindah tab). Ini hanya simulasi.
    setToast(`🔗 ${label} diproduksi di tab ${tabId.toUpperCase()}.`);
    setTimeout(() => setToast(null), 2500);
    // Jika Anda memiliki fungsi navigasi global, panggil di sini.
  };

  // --- HANDLE BUILD ---
  const handleBuild = (key: string, label: string) => {
    setShowMaterialWarningModal(false);
    setInsufficientMaterials([]);
    setSelectedBuilding({ key, label });
    setShowConfirm(true);
  };

  const confirmBuild = () => {
    if (!selectedBuilding) return;
    const { key, label } = selectedBuilding;
    const bMeta = metadata[key] || {};

    // --- CEK MATERIAL YANG KURANG (STOK 0) ---
    const buildingReq = getSelectedBuildingRequirements();
    const missingMaterials = buildingReq?.requirements?.filter(
      (material) => getMaterialStock(material.resourceKey) <= 0
    ) || [];

    if (missingMaterials.length > 0) {
      setInsufficientMaterials(missingMaterials);
      setShowMaterialWarningModal(true);
      return; // BATAL: Pembangunan tidak dilanjutkan
    }
    // ------------------------------------------

    const cost = Number(bMeta.biaya_pembangunan) || 0;
    const anggaran = Number(countryDetail?.anggaran) || 0;
    if (anggaran < cost) {
      setToast(`Kas negara tidak mencukupi untuk membangun ${label}!`);
      setTimeout(() => setToast(null), 2500);
      return;
    }

    // Eksekusi Pembangunan
    setCountryDetail({
      ...countryDetail,
      anggaran: anggaran - cost,
      [key]: (Number(countryDetail?.[key]) || 0) + 1,
      kepuasan: Math.min(100, (Number(countryDetail?.kepuasan) || 65.0) + 1.5)
    });
    
    setShowConfirm(false);
    setSelectedBuilding(null);
    setToast(`✅ Berhasil! ${label} dibangun.`);
    setTimeout(() => setToast(null), 2500);
  };

  // --- DATA DAFTAR HUNIAN ---
  const HUNIAN_KEYS = ["rumah_subsidi", "apartemen", "mansion"];
  const labels: Record<string, { label: string; desc: string; detailDesc: string }> = {
    rumah_subsidi: {
      label: "Perumahan Subsidi",
      desc: "Hunian Terjangkau",
      detailDesc: "Rumah tapak bersubsidi yang disediakan pemerintah bagi masyarakat berpenghasilan rendah untuk mendukung pemerataan papan."
    },
    apartemen: {
      label: "Apartemen",
      desc: "Hunian Vertikal",
      detailDesc: "Kompleks hunian vertikal modern di pusat perkotaan untuk mengoptimalkan ruang lahan terbatas bagi populasi padat."
    },
    mansion: {
      label: "Mansion",
      desc: "Hunian Mewah",
      detailDesc: "Rumah mewah berukuran sangat besar dengan fasilitas premium lengkap bagi kalangan menengah ke atas."
    }
  };

  const items = HUNIAN_KEYS.map((k) => ({
    key: k,
    label: labels[k]?.label || k,
    desc: labels[k]?.desc || "",
    detailDesc: labels[k]?.detailDesc || "",
    value: Number(countryDetail?.[k]) || 0
  }));

  const activeItem = items.find((it) => it.key === activeTab) || items[0];
  const totalValue = items.reduce((sum, item) => sum + item.value, 0);

  // --- ELEKTRISITAS (HEADER) ---
  const totalProduction = Number(countryDetail?.pembangkit_listrik_tenaga_nuklir) || 0 +
    Number(countryDetail?.pembangkit_listrik_tenaga_air) || 0 +
    Number(countryDetail?.pembangkit_listrik_tenaga_surya) || 0 +
    Number(countryDetail?.pembangkit_listrik_tenaga_uap) || 0 +
    Number(countryDetail?.pembangkit_listrik_tenaga_gas) || 0 +
    Number(countryDetail?.pembangkit_listrik_tenaga_angin) || 0;
  
  const estimatedConsumption = Math.min(
    totalProduction * 1000,
    Math.max(0, Math.round((totalProduction * 1000) * 0.7 + ((countryDetail?.jumlah_penduduk ?? 0) / 50000)))
  );

  return (
    <>
      {/* MODAL UTAMA */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
        <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
          
          {/* HEADER */}
          <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                  <Home className="h-6 w-6 text-[#5c3c10]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Hunian & Permukiman</h2>
                  <p className="text-xs text-[#8b7e66]">Manajemen ketersediaan rumah dan tata kelola pemukiman warga</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 pl-8 border-l-2 border-[#C4B49C]/30">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-300 rounded-lg">
                    <TrendingUp className="h-4 w-4 text-emerald-700" />
                    <span className="text-[11px] font-black text-emerald-700 uppercase tracking-wider">Produksi</span>
                    <span className="text-[11px] font-black text-emerald-700">{(totalProduction * 1000).toLocaleString('id-ID')} MW</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 border border-rose-300 rounded-lg">
                    <TrendingDown className="h-4 w-4 text-rose-700" />
                    <span className="text-[11px] font-black text-rose-700 uppercase tracking-wider">Konsumsi</span>
                    <span className="text-[11px] font-black text-rose-700">{estimatedConsumption.toLocaleString('id-ID')} MW</span>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* BODY */}
          <div className="flex-1 flex min-h-0 relative z-10">
            {/* SIDEBAR TABS */}
            <div className="w-64 border-r-2 border-[#C4B49C]/30 bg-[#FAF6EE] p-4 flex flex-col gap-2 overflow-y-auto">
              {items.map((it) => (
                <button
                  key={it.key}
                  onClick={() => setActiveTab(it.key)}
                  className={`flex items-center justify-between w-full p-3 rounded-xl border-2 text-left transition-all cursor-pointer ${
                    activeTab === it.key
                      ? "bg-[#5c3c10] border-[#5c3c10] text-[#FAF6EE] shadow-md"
                      : "bg-white/80 border-[#C4B49C]/30 text-[#5c3c10] hover:bg-white hover:border-[#5c3c10]/50"
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider">{it.label}</span>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                    activeTab === it.key ? "bg-[#FAF6EE] text-[#5c3c10]" : "bg-[#5c3c10]/10 text-[#5c3c10]"
                  }`}>
                    {it.value > 0 ? "Tersedia" : "Kosong"}
                  </span>
                </button>
              ))}
            </div>

            {/* KONTEN UTAMA */}
            <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 flex flex-col justify-between">
              <div>
                {activeItem && (
                  <div className="max-w-3xl">
                    <div className="mb-6 flex flex-col md:flex-row gap-6">
                      <div className="flex-grow">
                        <h3 className="text-xl font-black text-[#5c3c10] uppercase tracking-wide">{activeItem.label}</h3>
                        <p className="text-xs text-[#8b7e66] mt-1">{activeItem.desc}</p>
                        <p className="text-sm text-[#5c3c10] mt-4 leading-relaxed bg-[#e4dac3]/20 border border-[#C4B49C]/20 p-4 rounded-2xl">{activeItem.detailDesc}</p>
                      </div>
                    </div>

                    <div className="bg-white/90 border border-[#C4B49C]/30 rounded-3xl p-6 shadow-sm max-w-sm">
                      <p className="text-[10px] font-black uppercase text-[#8b7e66] tracking-wider">Total Terdaftar</p>
                      <p className="text-4xl font-black text-[#2e261a] mt-3">{activeItem.value.toLocaleString('id-ID')}</p>
                      <div className="border-t border-[#C4B49C]/20 mt-6 pt-3">
                        <button
                          onClick={() => handleBuild(activeItem.key, activeItem.label)}
                          className="w-full py-2 rounded-xl bg-[#5c3c10] text-[#FAF6EE] border border-[#5c3c10] text-[10px] font-black uppercase cursor-pointer hover:bg-[#8b7e66] hover:border-[#8b7e66] transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] active:scale-[0.98]"
                        >
                          Bangun
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 border-t-2 border-[#C4B49C]/20 pt-6">
                <div className="rounded-2xl border border-[#C4B49C]/30 bg-white/70 p-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#5c3c10]">Total Keseluruhan Unit Hunian</p>
                  <p className="text-2xl font-black text-[#2e261a] mt-1">{totalValue.toLocaleString('id-ID')}</p>
                </div>
                <div className="rounded-2xl border border-[#C4B49C]/30 bg-white/70 p-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#5c3c10]">Informasi Wilayah</p>
                  <p className="text-xs text-[#8b7e66] mt-1">Data hunian direkap dari registrasi kepemilikan dan pajak bumi bangunan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TOAST GLOBAL */}
      {toast && <div className="fixed bottom-6 right-6 z-[80] bg-[#5c3c10] text-[#FAF6EE] px-4 py-2 rounded-lg shadow-md">{toast}</div>}
      
      {/* --- MODAL KONFIRMASI PEMBANGUNAN --- */}
      {showConfirm && selectedBuilding && (() => {
        const bMeta = metadata[selectedBuilding.key] || {};
        const cost = Number(bMeta.biaya_pembangunan) || 0;
        const buildingReq = getSelectedBuildingRequirements();
        const missingMaterials = buildingReq?.requirements?.filter(
          (mat) => getMaterialStock(mat.resourceKey) <= 0
        ) || [];

        return (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-transparent pointer-events-none">
            <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col relative font-sans animate-in fade-in zoom-in-95 duration-150 pointer-events-auto">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />
              
              <div className="px-6 py-5 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
                <div className="flex items-center gap-2 text-[#5c3c10]">
                  <Hammer className="h-5 w-5" />
                  <h3 className="text-base font-bold uppercase tracking-tight">Konfirmasi Pembangunan</h3>
                </div>
                <button onClick={() => { setShowConfirm(false); setSelectedBuilding(null); }} className="text-[#8b7e66] hover:text-[#5c3c10]">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 relative z-10 flex-1 space-y-4">
                <div>
                  <h4 className="text-lg font-black text-[#2e261a]">{selectedBuilding.label}</h4>
                  <p className="text-xs text-[#8b7e66] mt-1">{bMeta?.deskripsi || bMeta?.desc || 'Tidak ada deskripsi tersedia.'}</p>
                </div>

                <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 rounded-xl p-4 space-y-2.5 text-xs text-[#5c3c10]">
                  <div className="flex justify-between font-bold">
                    <span>Biaya Pembangunan:</span>
                    <span className="text-[#2e261a]">{(metadata[selectedBuilding.key] ? 'Memuat...' : `${cost.toLocaleString('id-ID')} EM`)}</span>
                  </div>
                  {bMeta?.waktu_pembangunan !== undefined && (
                    <div className="flex justify-between">
                      <span>Estimasi Waktu Pembangunan:</span>
                      <span className="text-[#2e261a] font-semibold">{bMeta.waktu_pembangunan} Hari</span>
                    </div>
                  )}
                  {bMeta?.produksi !== undefined && (
                    <div className="flex justify-between">
                      <span>Dampak ke Kepuasan:</span>
                      <span className="text-emerald-700 font-bold">+1.5</span>
                    </div>
                  )}

                  {/* SECTION MATERIAL */}
                  {buildingReq?.requirements && buildingReq.requirements.length > 0 ? (
                    <div className="space-y-3 text-xs pt-2 border-t border-[#C4B49C]/30 mt-2">
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
                        {buildingReq.requirements.map((material: MaterialRequirement) => {
                          const stock = getMaterialStock(material.resourceKey);
                          return (
                            <button
                              key={`${material.resourceKey}-${material.group}`}
                              type="button"
                              onClick={() => handleMaterialClick(material.resourceKey, material.label)}
                              className={`flex flex-col items-center justify-center bg-white/80 border rounded-xl p-2.5 min-h-[50px] cursor-pointer hover:border-[#5c3c10]/60 transition-all ${
                                stock <= 0
                                  ? 'border-red-400 bg-red-50/70 text-red-800'
                                  : 'border-[#C4B49C]/30'
                              }`}
                            >
                              <div className="font-bold text-[10px] text-center">{material.label}</div>
                              <div className={`text-[10px] font-black mt-0.5 ${stock <= 0 ? 'text-red-600' : 'text-[#8b7e66]'}`}>
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
                  <span>{(Number(countryDetail?.anggaran) || 0).toLocaleString('id-ID')}</span>
                </div>
              </div>

              <div className="p-4 bg-[#FAF6EE] border-t-2 border-[#C4B49C]/20 flex gap-3 relative z-10">
                <button onClick={() => { setShowConfirm(false); setSelectedBuilding(null); }} className="flex-1 py-2 rounded-xl border-2 border-[#C4B49C] text-[#8b7e66] text-[10px] font-black uppercase cursor-pointer hover:bg-black/5 transition-all text-center">Batal</button>
                <button 
                  onClick={confirmBuild} 
                  disabled={missingMaterials.length > 0 || (Number(countryDetail?.anggaran) || 0) < cost} 
                  className={`flex-1 py-2 rounded-xl text-[10px] font-black uppercase transition-all text-center cursor-pointer ${
                    missingMaterials.length > 0 
                      ? 'bg-[#8b7e66] text-white border border-[#8b7e66] cursor-not-allowed opacity-70'
                      : 'bg-[#5c3c10] text-[#FAF6EE] border border-[#5c3c10] hover:bg-[#8b7e66] hover:border-[#8b7e66]'
                  }`}
                >
                  {missingMaterials.length > 0 ? 'Material Kurang' : 'Mulai Pembangunan'}
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* --- MODAL PERINGATAN MATERIAL KURANG --- */}
      {showMaterialWarningModal && insufficientMaterials.length > 0 && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-transparent pointer-events-none">
          <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col relative font-sans animate-in fade-in zoom-in-95 duration-150 pointer-events-auto">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />
            
            <div className="px-6 py-5 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
              <div className="flex items-center gap-2 text-rose-600">
                <AlertCircle className="h-5 w-5" />
                <h3 className="text-base font-bold uppercase tracking-tight">⚠️ Stok Material Kosong</h3>
              </div>
              <button onClick={() => setShowMaterialWarningModal(false)} className="text-[#8b7e66] hover:text-[#5c3c10]">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 relative z-10 flex-1 space-y-4">
              <p className="text-sm text-[#5c3c10]">
                Pembangunan <strong className="font-black text-[#2e261a]">{selectedBuilding?.label}</strong> tidak dapat dilanjutkan karena material berikut ini stoknya kosong (0):
              </p>
              <div className="bg-rose-50/60 border border-rose-300 rounded-xl p-4 flex flex-col gap-2 text-xs font-bold text-[#5c3c10]">
                {insufficientMaterials.map((mat, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-[#2e261a]">{mat.label}</span>
                    <span className="text-rose-600 font-black">0</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-[#8b7e66] italic">
                Klik nama material pada daftar di atas untuk melihat informasi produksinya.
              </p>
            </div>
            <div className="p-4 bg-[#FAF6EE] border-t-2 border-[#C4B49C]/20 flex justify-end relative z-10">
              <button onClick={() => setShowMaterialWarningModal(false)} className="py-2 px-6 rounded-xl text-[10px] font-black uppercase transition-all text-center cursor-pointer bg-[#5c3c10] text-[#FAF6EE] border border-[#5c3c10] hover:bg-[#8b7e66] hover:border-[#8b7e66]">Tutup & Lengkapi Stok</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
