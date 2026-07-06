"use client"
import React, { useState, useEffect } from "react";
import { fetchBuildingMetadata } from '../../../../../lib/buildingMetadata';
import { X, Landmark, AlertTriangle } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
}

const SERVICE_GROUPS = [
  {
    label: "Infrastruktur",
    description: "Jaringan transportasi dan fasilitas publik dasar.",
    keys: [
      "jalur_sepeda",
      "jalan_raya",
      "terminal_bus",
      "stasiun_kereta_api",
      "kereta_bawah_tanah",
      "pelabuhan",
      "bandara",
      "helipad",
    ],
  },
  {
    label: "Pendidikan",
    description: "Fasilitas pembelajaran dari prasekolah hingga pusat penelitian.",
    keys: [
      "prasekolah",
      "dasar",
      "menengah",
      "lanjutan",
      "universitas",
      "lembaga_pendidikan",
      "laboratorium",
      "observatorium",
      "pusat_penelitian",
      "pusat_pengembangan",
      "literasi",
    ],
  },
  {
    label: "Kesehatan",
    description: "Sarana medis dan indeks kesehatan masyarakat.",
    keys: [
      "rumah_sakit_besar",
      "rumah_sakit_kecil",
      "pusat_diagnostik",
      "harapan_hidup",
      "indeks_kesehatan",
    ],
  },
  {
    label: "Penegakan Hukum",
    description: "Fasilitas keadilan, keamanan, dan indeks keamanan.",
    keys: [
      "pusat_bantuan_hukum",
      "pengadilan",
      "kejaksaan",
      "pos_polisi",
      "armada_mobil_polisi",
      "akademi_polisi",
      "indeks_korupsi",
      "indeks_keamanan",
    ],
  },
  {
    label: "Olahraga & Hiburan",
    description: "Fasilitas rekreasi dan olahraga publik.",
    keys: [
      "kolam_renang",
      "sirkuit_balap",
      "stadion",
      "stadion_internasional",
      "gym",
      "golf",
      "esports",
      "gokart",
      "bioskop",
      "teater",
    ],
  },
  {
    label: "Komersial",
    description: "Tempat usaha dan perhotelan.",
    keys: [
      "mall",
      "hotel",
      "pusat_grosir_tekstil",
    ],
  },
];

const formatNumber = (value: number) => value.toLocaleString("id-ID");

export default function TempatUmumModal({ isOpen, onClose, countryDetail, setCountryDetail }: ModalProps) {
  const [activeTab, setActiveTab] = useState("Infrastruktur");
  const [selectedBuilding, setSelectedBuilding] = useState<{ key: string; label: string } | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  const handleBuild = (key: string, label: string) => {
    setSelectedBuilding({ key, label });
    setShowConfirm(true);
  };

  const confirmBuild = () => {
    if (!selectedBuilding) return;
    const dataKey = selectedBuilding.key;
    const bMeta = metadata[dataKey] || {};
    const cost = Number(bMeta.biaya_pembangunan) || 10000000;
    const anggaran = Number(countryDetail?.anggaran) || 0;
    if (anggaran < cost) {
      alert(`Kas negara tidak mencukupi untuk membangun ${selectedBuilding.label}!`);
      setShowConfirm(false);
      return;
    }

    setCountryDetail({
      ...countryDetail,
      anggaran: anggaran - cost,
      [selectedBuilding.key]: (Number(countryDetail?.[selectedBuilding.key]) || 0) + 1,
      kepuasan: Math.min(100, (Number(countryDetail?.kepuasan) || 65.0) + 1.0)
    });
    setShowConfirm(false);
    setSelectedBuilding(null);
  };

  useEffect(() => {
    fetchBuildingMetadata().then((m) => setMetadata(m || {}));
  }, []);

  if (!isOpen) return null;
  const data = countryDetail || {};

  const groups = SERVICE_GROUPS.map((group) => {
    const items = group.keys
      .map((key) => ({
        key,
        label: key.replace(/_/g, " ").replace(/\b\w/g, (ch) => ch.toUpperCase()),
        value: data[key] !== undefined ? Number(data[key]) : null,
      }))
      .filter((item) => item.value !== null);

    return {
      ...group,
      items,
      activeCount: items.length
    };
  }).filter((group) => group.items.length > 0);

  const activeGroup = groups.find((g) => g.label === activeTab) || groups[0];

  const totalItems = groups.reduce((sum, group) => sum + group.items.length, 0);
  const totalValue = groups.reduce((sum, group) => sum + group.items.reduce((inner, item) => inner + (item.value || 0), 0), 0);

  return (
    <div className="fixed inset-0 bg-black/65 z-50 flex items-center justify-center p-4">
      {showConfirm && (
        <div className="absolute inset-0 bg-black/80 z-[60] flex items-center justify-center p-4">
          <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl">
            <AlertTriangle className="w-12 h-12 text-[#5c3c10] mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[#5c3c10] uppercase">Konfirmasi Pembangunan</h3>
            <p className="text-xs text-[#8b7e66] my-4">Apakah Anda yakin ingin membangun <span className="font-bold text-[#5c3c10]">{selectedBuilding?.label}</span> dengan biaya Rp {((metadata[selectedBuilding?.key || '']?.biaya_pembangunan) || 10000000).toLocaleString('id-ID')}?</p>
            <div className="flex gap-3">
              <button onClick={() => setShowConfirm(false)} className="flex-1 py-2 rounded-xl border-2 border-[#C4B49C] text-[#8b7e66] font-bold text-xs uppercase">Batal</button>
              <button onClick={confirmBuild} className="flex-1 py-2 rounded-xl bg-[#5c3c10] text-[#FAF6EE] font-bold text-xs uppercase">Yakin</button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        
        {/* Header */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                <Landmark className="h-6 w-6 text-[#5c3c10]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Tempat Umum & Layanan Publik</h2>
                <p className="text-xs text-[#8b7e66]">Fasilitas sosial, kesehatan, pendidikan, and penegakan hukum</p>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tabs and Grid content */}
        <div className="flex-1 flex min-h-0 relative z-10">
          {/* Sidebar Tabs */}
          <div className="w-64 border-r-2 border-[#C4B49C]/30 bg-[#FAF6EE] p-4 flex flex-col gap-2 overflow-y-auto">
            {groups.map((group) => {
              return (
                <button
                  key={group.label}
                  onClick={() => setActiveTab(group.label)}
                  className={`flex items-center justify-between w-full p-3 rounded-xl border-2 text-left transition-all cursor-pointer ${
                    activeTab === group.label
                      ? "bg-[#5c3c10] border-[#5c3c10] text-[#FAF6EE] shadow-md"
                      : "bg-white/80 border-[#C4B49C]/30 text-[#5c3c10] hover:bg-white hover:border-[#5c3c10]/50"
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider">{group.label}</span>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                    activeTab === group.label ? "bg-[#FAF6EE] text-[#5c3c10]" : "bg-[#5c3c10]/10 text-[#5c3c10]"
                  }`}>
                    {group.activeCount}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content */}
          <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 flex flex-col justify-between">
            <div>
              {activeGroup && (
                <>
                  <div className="mb-6">
                    <h3 className="text-lg font-black text-[#5c3c10] uppercase tracking-wide">{activeGroup.label}</h3>
                    <p className="text-xs text-[#8b7e66] mt-1">{activeGroup.description}</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {activeGroup.items.map((it) => {
                      return (
                        <div key={it.key} className="bg-white/90 border border-[#C4B49C]/30 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                          <div className="p-4 flex flex-col flex-grow justify-between">
                            <div>
                              <p className="text-[10px] font-black uppercase text-[#8b7e66] tracking-wider">{it.label}</p>
                              <p className="text-2xl font-black text-[#2e261a] mt-2">{formatNumber(it.value || 0)}</p>
                            </div>
                            <div className="border-t border-[#C4B49C]/20 mt-4 pt-2">
                              <button
                                onClick={() => handleBuild(it.key, it.label)}
                                className="w-full py-1.5 rounded-xl bg-[#5c3c10] text-[#FAF6EE] border border-[#5c3c10] text-[9px] font-black uppercase cursor-pointer hover:bg-[#8b7e66] hover:border-[#8b7e66] transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] active:scale-[0.98]"
                              >
                                Bangun
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              {(!activeGroup || activeGroup.items.length === 0) && (
                <div className="rounded-xl border border-[#C4B49C]/30 bg-[#FAF6EE] p-4 text-sm text-[#8b7e66]">
                  Data untuk kategori ini tidak tersedia.
                </div>
              )}
            </div>

            {/* Footer summary info inside panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 border-t-2 border-[#C4B49C]/20 pt-6">
              <div className="rounded-2xl border border-[#C4B49C]/30 bg-white/70 p-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#5c3c10]">Total Fasilitas Publik</p>
                <p className="text-2xl font-black text-[#2e261a] mt-1">{formatNumber(totalValue)}</p>
              </div>
              <div className="rounded-2xl border border-[#C4B49C]/30 bg-white/70 p-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#5c3c10]">Catatan Pembangunan</p>
                <p className="text-xs text-[#8b7e66] mt-1">Data fasilitas umum disinkronisasi secara berkala dari laporan statistik nasional.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
