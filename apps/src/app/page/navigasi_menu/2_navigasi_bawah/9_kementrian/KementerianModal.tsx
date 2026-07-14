"use client"
import React, { useState, useEffect } from "react";
import {
  X,
  Landmark,
  Info,
  Hammer,
  Truck,
  BookOpen,
  Microscope,
  HeartPulse,
  Trophy,
  Gavel,
  Shield,
  Globe2,
  Palette,
  Plane,
  Leaf,
  Home,
  ShieldCheck,
  Siren,
  Ambulance,
  Building2,
  Handshake,
  Banknote,
  Coins,
  ShieldAlert,
  Ship,
} from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
  resetTrigger?: boolean;
}

interface Department {
  id: string;
  name: string;
  icon: React.ElementType;
  baseIncomeCost: number;
  description: string;
  effects: string[];
}

const LEVEL_UP_COST = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const MAX_LEVEL = 10;

const KEMENTERIAN: Department[] = [
  {
    id: "infrastruktur",
    name: "Kementerian Infrastruktur",
    icon: Truck,
    baseIncomeCost: 100,
    description: "Mengelola pembangunan jalan, jembatan, dan proyek infrastruktur nasional.",
    effects: ["Meningkatkan produktivitas ekonomi jangka panjang", "Mempercepat distribusi barang antar wilayah", "Menurunkan biaya logistik nasional"],
  },
  {
    id: "pendidikan",
    name: "Kementerian Pendidikan",
    icon: BookOpen,
    baseIncomeCost: 100,
    description: "Mengatur kurikulum, sekolah, dan kualitas sumber daya manusia.",
    effects: ["Meningkatkan kualitas tenaga kerja", "Menambah pendapatan pajak jangka panjang", "Menurunkan angka pengangguran"],
  },
  {
    id: "sains",
    name: "Sains dan Penelitian",
    icon: Microscope,
    baseIncomeCost: 100,
    description: "Mendanai riset teknologi dan inovasi nasional.",
    effects: ["Membuka teknologi/industri baru", "Meningkatkan efisiensi produksi", "Menambah daya saing global"],
  },
  {
    id: "kesehatan",
    name: "Kementerian Kesehatan",
    icon: HeartPulse,
    baseIncomeCost: 100,
    description: "Mengelola rumah sakit, vaksinasi, dan kebijakan kesehatan publik.",
    effects: ["Menurunkan risiko wabah penyakit", "Meningkatkan tingkat kepuasan rakyat", "Meningkatkan harapan hidup populasi"],
  },
  {
    id: "olahraga",
    name: "Kementerian Olahraga",
    icon: Trophy,
    baseIncomeCost: 100,
    description: "Mengembangkan fasilitas olahraga dan prestasi atlet nasional.",
    effects: ["Meningkatkan popularitas & citra negara", "Menambah pendapatan dari event olahraga", "Meningkatkan kepuasan rakyat"],
  },
  {
    id: "kehakiman",
    name: "Kementerian Kehakiman",
    icon: Gavel,
    baseIncomeCost: 100,
    description: "Menjaga penegakan hukum dan sistem peradilan negara.",
    effects: ["Menurunkan tingkat kriminalitas & korupsi", "Meningkatkan kepercayaan investor", "Menambah pendapatan dari denda hukum"],
  },
  {
    id: "pertahanan",
    name: "Kementerian Pertahanan",
    icon: Shield,
    baseIncomeCost: 100,
    description: "Mengatur kekuatan militer dan pertahanan nasional.",
    effects: ["Meningkatkan kekuatan militer", "Menurunkan risiko invasi/konflik", "Menambah biaya pemeliharaan militer"],
  },
  {
    id: "luar-negeri",
    name: "Kementerian Luar Negeri",
    icon: Globe2,
    baseIncomeCost: 100,
    description: "Mengatur hubungan diplomatik dengan negara lain.",
    effects: ["Meningkatkan peluang kerja sama & hibah", "Meningkatkan reputasi internasional", "Membuka akses perdagangan baru"],
  },
  {
    id: "kebudayaan",
    name: "Kementerian Kebudayaan",
    icon: Palette,
    baseIncomeCost: 100,
    description: "Melestarikan budaya dan identitas nasional.",
    effects: ["Meningkatkan kepuasan rakyat", "Menambah daya tarik pariwisata"],
  },
  {
    id: "pariwisata",
    name: "Kementerian Pariwisata",
    icon: Plane,
    baseIncomeCost: 100,
    description: "Mengembangkan sektor wisata dan promosi destinasi.",
    effects: ["Menambah pendapatan devisa negara", "Membuka lapangan kerja baru"],
  },
  {
    id: "lingkungan",
    name: "Kementerian Lingkungan Hidup",
    icon: Leaf,
    baseIncomeCost: 100,
    description: "Mengelola kebijakan lingkungan dan sumber daya alam.",
    effects: ["Menurunkan risiko bencana alam", "Meningkatkan keberlanjutan sumber daya", "Mempengaruhi pajak lingkungan"],
  },
  {
    id: "perumahan",
    name: "Kementerian Perumahan",
    icon: Home,
    baseIncomeCost: 100,
    description: "Mengatur pembangunan perumahan rakyat dan tata kota.",
    effects: ["Menurunkan angka backlog perumahan", "Meningkatkan kepuasan rakyat"],
  },
  {
    id: "pembangunan",
    name: "Kementerian Pembangunan",
    icon: Building2,
    baseIncomeCost: 100,
    description: "Mengawasi proyek pembangunan nasional skala besar dan tata ruang wilayah.",
    effects: ["Mempercepat pembangunan fasilitas umum", "Meningkatkan nilai investasi properti nasional", "Menambah lapangan kerja konstruksi"],
  },
  {
    id: "perdagangan",
    name: "Kementerian Perdagangan",
    icon: Handshake,
    baseIncomeCost: 100,
    description: "Mengatur kebijakan ekspor-impor dan hubungan dagang antar negara.",
    effects: ["Meningkatkan pendapatan dari bea cukai", "Membuka akses pasar ekspor baru", "Menstabilkan harga barang domestik"],
  },
  {
    id: "keuangan",
    name: "Kementerian Keuangan",
    icon: Banknote,
    baseIncomeCost: 100,
    description: "Mengelola anggaran negara, pajak, dan kebijakan fiskal nasional.",
    effects: ["Meningkatkan efisiensi pengumpulan pajak", "Menurunkan risiko defisit anggaran", "Meningkatkan kepercayaan investor terhadap fiskal negara"],
  },
];

const KEAMANAN: Department[] = [
  {
    id: "dinas-keamanan",
    name: "Dinas Keamanan",
    icon: ShieldCheck,
    baseIncomeCost: 100,
    description: "Mengoordinasikan intelijen dan keamanan dalam negeri.",
    effects: ["Menurunkan risiko terorisme & sabotase", "Meningkatkan stabilitas politik"],
  },
  {
    id: "polisi",
    name: "Polisi",
    icon: Siren,
    baseIncomeCost: 100,
    description: "Menjaga ketertiban umum dan penegakan hukum sehari-hari.",
    effects: ["Menurunkan tingkat kriminalitas", "Meningkatkan rasa aman masyarakat"],
  },
  {
    id: "garda-nasional",
    name: "Garda Nasional",
    icon: Shield,
    baseIncomeCost: 100,
    description: "Pasukan cadangan untuk keadaan darurat dan bencana.",
    effects: ["Mempercepat respons saat krisis internal", "Menambah kekuatan cadangan militer"],
  },
  {
    id: "komandan-angkatan-darat",
    name: "Komandan Angkatan Darat",
    icon: ShieldAlert,
    baseIncomeCost: 100,
    description: "Memimpin kekuatan militer darat negara dalam pertahanan wilayah.",
    effects: ["Meningkatkan kekuatan tempur darat", "Menurunkan risiko invasi darat", "Mempercepat respons terhadap konflik internal"],
  },
  {
    id: "komandan-armada",
    name: "Komandan Armada",
    icon: Ship,
    baseIncomeCost: 100,
    description: "Memimpin kekuatan angkatan laut dan menjaga perairan negara.",
    effects: ["Meningkatkan kekuatan militer laut", "Mengamankan jalur perdagangan laut", "Menurunkan risiko pembajakan & pelanggaran wilayah maritim"],
  },
];

const LAYANAN: Department[] = [
  {
    id: "layanan-darurat",
    name: "Layanan Darurat",
    icon: Ambulance,
    baseIncomeCost: 100,
    description: "Menangani respons cepat bencana, kecelakaan, dan kondisi darurat.",
    effects: ["Menurunkan angka korban jiwa saat bencana", "Meningkatkan kepuasan rakyat"],
  },
  {
    id: "bank-sentral",
    name: "Kepala Bank Sentral",
    icon: Coins,
    baseIncomeCost: 100,
    description: "Mengendalikan kebijakan moneter, suku bunga, dan stabilitas nilai tukar.",
    effects: ["Mengendalikan tingkat inflasi nasional", "Menstabilkan nilai tukar mata uang", "Mempengaruhi suku bunga pinjaman negara"],
  },
];

type TabKey = "kementerian" | "keamanan" | "layanan";

const TABS: { key: TabKey; label: string; data: Department[] }[] = [
  { key: "kementerian", label: "Kementerian", data: KEMENTERIAN },
  { key: "keamanan", label: "Keamanan", data: KEAMANAN },
  { key: "layanan", label: "Layanan", data: LAYANAN },
];

const getTotalUpgradeCost = (currentLevel: number, targetLevel: number) => {
  let total = 0;
  for (let lvl = currentLevel; lvl < targetLevel; lvl++) {
    total += LEVEL_UP_COST[lvl];
  }
  return total;
};

export default function KementerianModal({ isOpen, onClose, countryDetail, setCountryDetail, resetTrigger }: ModalProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("kementerian");
  const [levels, setLevels] = useState<Record<string, number>>({});
  const [infoTarget, setInfoTarget] = useState<Department | null>(null);
  const [confirmUpgrade, setConfirmUpgrade] = useState<{
    dept: Department;
    fromLevel: number;
    targetLevel: number;
    cost: number;
  } | null>(null);

  const money = countryDetail?.anggaran ?? 325800;

  useEffect(() => {
    if (resetTrigger) {
      setLevels({});
    }
  }, [resetTrigger]);

  if (!isOpen) return null;

  const getLevel = (id: string) => {
    const stored = countryDetail?.[`level_${id}`] as number | undefined;
    return levels[id] ?? stored ?? 1;
  };

  const getNextStepCost = (level: number) => {
    if (level >= MAX_LEVEL) return null;
    return LEVEL_UP_COST[level + 1] ?? 100;
  };

  const getDailyCost = (level: number) => {
    return LEVEL_UP_COST[level] ?? 100;
  };

  const handleLevelBoxClick = (dept: Department, targetLevel: number) => {
    const currentLevel = getLevel(dept.id);

    if (targetLevel <= currentLevel) return;
    if (targetLevel > MAX_LEVEL) return;

    const totalCost = getTotalUpgradeCost(currentLevel, targetLevel);
    if (money < totalCost) return;

    setConfirmUpgrade({ dept, fromLevel: currentLevel, targetLevel, cost: totalCost });
  };

  const handleConfirmUpgrade = () => {
    if (!confirmUpgrade) return;

    const { dept, targetLevel, cost } = confirmUpgrade;

    const newAnggaran = money - cost;
    setCountryDetail({
      ...countryDetail,
      anggaran: newAnggaran,
      [`level_${dept.id}`]: targetLevel,
    });

    setLevels((prev) => ({ ...prev, [dept.id]: targetLevel }));

    setConfirmUpgrade(null);
  };

  const activeData = TABS.find((t) => t.key === activeTab)?.data ?? [];

  return (
    <>
      {/* ========== MODAL UTAMA ========== */}
      {/* PERBAIKAN: Hapus bg-black/65 */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
        {/* PERBAIKAN: Tambahkan pointer-events-auto */}
        <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

          {/* Header */}
          <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <Landmark className="h-6 w-6 text-amber-700 animate-pulse" />
                <div>
                  <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">
                    Dewan Kabinet Menteri
                  </h2>
                </div>
              </div>
              <div className="text-xs font-bold text-[#5c3c10] bg-[#e4dac3]/40 px-3 py-1.5 rounded-lg border border-[#C4B49C]/30">
                Kas: {money.toLocaleString("id-ID")} EM
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
            >
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 px-8 pt-4 border-b-2 border-[#C4B49C]/20 relative z-10">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 text-xs font-black uppercase tracking-wide rounded-t-lg border-b-2 transition-all cursor-pointer ${
                  activeTab === tab.key
                    ? "border-amber-700 text-[#5c3c10] bg-[#e4dac3]/40"
                    : "border-transparent text-[#8b7e66] hover:text-[#5c3c10]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 min-h-0 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
            <p className="text-xs text-[#8b7e66] font-semibold leading-relaxed mb-6">
              Kelola kabinet pemerintahan tertinggi negara untuk menjaga kinerja pelayanan birokrasi
              Anda tetap berintegritas. Tekan salah satu kotak level untuk melompat langsung ke level
              tersebut — biaya akan dijumlahkan dari semua level yang dilewati.
            </p>

            <div className="space-y-4">
              {activeData.map((dept) => {
                const level = getLevel(dept.id);
                const nextStepCost = getNextStepCost(level);
                const income = getDailyCost(level);
                const Icon = dept.icon;
                const maxed = level >= MAX_LEVEL;

                return (
                  <div
                    key={dept.id}
                    className="bg-[#FAF6EE] border border-[#C4B49C]/40 rounded-xl overflow-hidden shadow-sm"
                  >
                    {/* Header hijau */}
                    <div className="bg-[#2f5f5c] px-4 py-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setInfoTarget(dept)}
                          className="text-white/80 hover:text-white cursor-pointer"
                        >
                          <Info className="h-4 w-4" />
                        </button>
                        <span className="text-white text-sm font-bold">{dept.name}</span>
                      </div>
                      <span className="text-white/80 text-[10px] font-bold uppercase">
                        Level {level}/{MAX_LEVEL}
                      </span>
                    </div>

                    <div className="p-4 flex items-center gap-4">
                      <div className="h-16 w-16 rounded-lg bg-[#e4dac3]/50 border border-[#C4B49C]/40 flex items-center justify-center shrink-0">
                        <Icon className="h-8 w-8 text-[#5c3c10]" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-2 text-[#5c3c10] font-bold text-sm">
                          <span className="h-4 w-4 rounded-full bg-amber-500 inline-block" />
                          {income.toLocaleString("id-ID")} per hari
                        </div>

                        {/* 10 kotak level */}
                        <div className="flex gap-1">
                          {Array.from({ length: MAX_LEVEL }).map((_, i) => {
                            const boxLevel = i + 1;
                            const filled = boxLevel <= level;
                            const isJumpTarget = boxLevel > level;
                            const jumpCost = isJumpTarget ? getTotalUpgradeCost(level, boxLevel) : 0;
                            const canAffordJump = isJumpTarget && money >= jumpCost;

                            return (
                              <button
                                key={i}
                                type="button"
                                onClick={() => {
                                  if (isJumpTarget && canAffordJump) {
                                    handleLevelBoxClick(dept, boxLevel);
                                  }
                                }}
                                disabled={!isJumpTarget || !canAffordJump}
                                title={
                                  filled
                                    ? `Level ${boxLevel} sudah tercapai`
                                    : canAffordJump
                                    ? `Lompat ke level ${boxLevel}: ${jumpCost.toLocaleString("id-ID")} EM`
                                    : `Kas tidak cukup untuk level ${boxLevel} (butuh ${jumpCost.toLocaleString("id-ID")} EM)`
                                }
                                className={`h-4 flex-1 rounded-sm transition-all ${
                                  filled
                                    ? "bg-amber-500 cursor-default"
                                    : canAffordJump
                                    ? "bg-[#1e3b39] hover:bg-amber-700/60 cursor-pointer"
                                    : "bg-[#1e3b39] cursor-not-allowed opacity-60"
                                }`}
                              />
                            );
                          })}
                        </div>
                      </div>

                      <div
                        title={
                          maxed
                            ? "Level maksimum"
                            : `Upgrade 1 level: ${LEVEL_UP_COST[level + 1]?.toLocaleString("id-ID")} EM`
                        }
                        className={`h-12 w-12 shrink-0 rounded-lg border-2 flex items-center justify-center ${
                          maxed
                            ? "border-[#C4B49C]/40 bg-[#e4dac3]/30 text-[#8b7e66]"
                            : "border-amber-700 bg-amber-600 text-white"
                        }`}
                      >
                        <Hammer className="h-5 w-5" />
                      </div>
                    </div>

                    {!maxed && (
                      <div className="px-4 pb-3 -mt-1 text-[10px] font-bold text-[#8b7e66]">
                        Upgrade ke level {level + 1}: {LEVEL_UP_COST[level + 1]?.toLocaleString("id-ID")} EM &nbsp;•&nbsp;
                        Tekan kotak level manapun untuk lompat langsung ke level tersebut
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ========== INFO POPUP ========== */}
      {/* PERBAIKAN: Hapus bg-black/50 */}
      {infoTarget && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-transparent pointer-events-none"
          onClick={() => setInfoTarget(null)}
        >
          {/* PERBAIKAN: Tambahkan pointer-events-auto */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-md p-6 shadow-2xl relative pointer-events-auto"
          >
            <button
              onClick={() => setInfoTarget(null)}
              className="absolute top-3 right-3 text-[#8b7e66] hover:text-[#5c3c10] cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-lg font-bold text-[#5c3c10] mb-2 uppercase">{infoTarget.name}</h3>
            <p className="text-xs text-[#8b7e66] font-semibold mb-4">{infoTarget.description}</p>
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-wide text-[#5c3c10]">
                Dampak:
              </p>
              <ul className="space-y-1.5">
                {infoTarget.effects.map((effect, i) => (
                  <li key={i} className="text-xs text-[#5c3c10] font-semibold flex gap-2">
                    <span className="text-amber-700">•</span>
                    {effect}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ========== CONFIRMATION UPGRADE POPUP ========== */}
      {/* PERBAIKAN: Hapus bg-black/50 */}
      {confirmUpgrade && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-transparent pointer-events-none"
          onClick={() => setConfirmUpgrade(null)}
        >
          {/* PERBAIKAN: Tambahkan pointer-events-auto */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-md p-6 shadow-2xl relative pointer-events-auto"
          >
            <button
              onClick={() => setConfirmUpgrade(null)}
              className="absolute top-3 right-3 text-[#8b7e66] hover:text-[#5c3c10] cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-lg bg-[#e4dac3]/50 border border-[#C4B49C]/40 flex items-center justify-center shrink-0">
                <confirmUpgrade.dept.icon className="h-6 w-6 text-[#5c3c10]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#5c3c10] uppercase leading-none">
                  {confirmUpgrade.dept.name}
                </h3>
                <p className="text-[10px] text-[#8b7e66] font-semibold mt-1">
                  Level {confirmUpgrade.fromLevel} → {confirmUpgrade.targetLevel}
                  {confirmUpgrade.targetLevel - confirmUpgrade.fromLevel > 1 && (
                    <span className="ml-1">
                      (melewati {confirmUpgrade.targetLevel - confirmUpgrade.fromLevel} level)
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Rincian biaya */}
            <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 rounded-lg p-4 mb-4">
              <div className="space-y-1.5 mb-3">
                {Array.from(
                  { length: confirmUpgrade.targetLevel - confirmUpgrade.fromLevel },
                  (_, idx) => confirmUpgrade.fromLevel + idx
                ).map((stepLevel) => (
                  <div key={stepLevel} className="flex justify-between text-[11px] font-bold text-[#8b7e66]">
                    <span>Biaya dari level {stepLevel} ke {stepLevel + 1}:</span>
                    <span className="text-[#5c3c10]">
                      {LEVEL_UP_COST[stepLevel + 1].toLocaleString("id-ID")} EM
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center border-t border-[#C4B49C]/30 pt-3 mb-3">
                <span className="text-xs font-bold text-[#8b7e66] uppercase">Total Biaya:</span>
                <span className="text-lg font-black text-[#5c3c10]">
                  {confirmUpgrade.cost.toLocaleString("id-ID")} EM
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#8b7e66] uppercase">Kas Negara Sekarang:</span>
                <span className="text-lg font-black text-[#5c3c10]">
                  {money.toLocaleString("id-ID")} EM
                </span>
              </div>
              <div className="border-t border-[#C4B49C]/20 mt-3 pt-3 flex justify-between items-center">
                <span className="text-xs font-bold text-[#8b7e66] uppercase">Kas Setelah Upgrade:</span>
                <span className="text-lg font-black text-amber-700">
                  {(money - confirmUpgrade.cost).toLocaleString("id-ID")} EM
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8b7e66] font-semibold mb-6">
              {confirmUpgrade.dept.description}
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setConfirmUpgrade(null)}
                className="flex-1 px-4 py-2.5 rounded-lg border-2 border-[#C4B49C] bg-[#FAF6EE] text-[#8b7e66] hover:bg-[#e4dac3]/40 active:bg-[#e4dac3] transition-all font-bold text-sm uppercase cursor-pointer"
              >
                Batal
              </button>
              <button
                onClick={handleConfirmUpgrade}
                className="flex-1 px-4 py-2.5 rounded-lg bg-amber-600 text-white hover:bg-amber-500 active:bg-amber-700 transition-all font-bold text-sm uppercase cursor-pointer border-2 border-amber-700 shadow-md"
              >
                Upgrade
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}