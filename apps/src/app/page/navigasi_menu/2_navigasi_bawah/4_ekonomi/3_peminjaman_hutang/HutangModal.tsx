"use client"
import React, { useState, useEffect, useRef } from "react";
import { X, CreditCard, Search, Landmark, ArrowRight, AlertCircle } from "lucide-react";
import { COUNTRIES_DATA } from "../../../../map_system/map-data";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
  currentDate?: Date;
  resetTrigger?: boolean;
}

const LOAN_STORAGE_KEY = "hutangModalLoanSources";
const LOAN_STORAGE_REFRESH_KEY = "hutangModalLoanSourcesLastRefresh";
const LOAN_TERMS = [90, 120, 180, 240, 360];
const MIN_INTEREST = 2.0;
const MAX_INTEREST = 7.5;
const MIN_LOAN = 10_000;
const MAX_LOAN = 100_000;
const LOAN_STEP = 5_000;
const RANDOM_LOAN_COUNT = 10;

const getFlagEmoji = (iso: string) => {
  const cleaned = String(iso || "").trim().toUpperCase().replace(/[^A-Z]/g, "");
  if (cleaned.length !== 2) return "🌐";
  const codePoints = cleaned.split("").map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

const formatCountryName = (name: string) => {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const randomInterest = () => Number((MIN_INTEREST + Math.random() * (MAX_INTEREST - MIN_INTEREST)).toFixed(1));
const randomLoan = () => Math.floor(Math.random() * ((MAX_LOAN - MIN_LOAN) / LOAN_STEP + 1)) * LOAN_STEP + MIN_LOAN;
const randomTerm = () => LOAN_TERMS[Math.floor(Math.random() * LOAN_TERMS.length)];

const shuffleArray = (array: any[]) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const generateLoanSources = () => {
  const validCountries = COUNTRIES_DATA.filter((country) => country.country && country.iso && country.iso.length === 2);

  const loanSources = validCountries.map((country, index) => ({
    id: country.id ?? index,
    name: formatCountryName(country.country),
    iso: country.iso.toLowerCase(),
    flag: getFlagEmoji(country.iso || country.iso?.toString()),
    interest: randomInterest(),
    maxLoan: randomLoan(),
    term: randomTerm(),
  }));

  return shuffleArray(loanSources).slice(0, RANDOM_LOAN_COUNT);
};

// Lembaga Multilateral
const LEMBAGA_MULTILATERAL = [
  { id: 9991, name: "IMF (Dana Moneter Internasional)", flag: "🌐", interest: 4.8, maxLoan: 100_000, term: 90 },
  { id: 9992, name: "Bank Dunia (World Bank)", flag: "🏦", interest: 3.5, maxLoan: 90_000, term: 360 },
  { id: 9993, name: "ADB (Asian Development Bank)", flag: "🌏", interest: 3.2, maxLoan: 75_000, term: 180 },
];

export default function HutangModal({ isOpen, onClose, countryDetail, setCountryDetail, currentDate, resetTrigger }: ModalProps) {
  const [activeTab, setActiveTab] = useState<"bilateral" | "multilateral" | "history">("bilateral");
  const [searchQuery, setSearchQuery] = useState("");
  const [loanSources, setLoanSources] = useState<any[]>([]);
  const initialLoanLoadRef = useRef(true);

  // State untuk menampung data pinjaman yang diklik sebelum konfirmasi
  const [pendingLoan, setPendingLoan] = useState<any>(null);

  useEffect(() => {
    const loadLoanSources = () => {
      if (typeof window === "undefined") return;

      const isLoanSourceValid = (item: any) => {
        return (
          item &&
          typeof item.iso === "string" &&
          item.iso.length === 2 &&
          typeof item.flag === "string" &&
          item.flag.length > 0 &&
          typeof item.name === "string" &&
          typeof item.interest === "number" &&
          typeof item.maxLoan === "number" &&
          typeof item.term === "number"
        );
      };

      const enrichItemIso = (item: any) => {
        if (item && item.iso) return item;
        const matched = COUNTRIES_DATA.find(
          (c) => c.country && c.country.toLowerCase() === (item.name || "").toLowerCase()
        );
        return {
          ...item,
          iso: matched?.iso ? matched.iso.toLowerCase() : ""
        };
      };

      try {
        const storedSources = window.localStorage.getItem(LOAN_STORAGE_KEY);
        const storedRefresh = window.localStorage.getItem(LOAN_STORAGE_REFRESH_KEY);
        const now = currentDate instanceof Date ? currentDate : new Date();

        if (storedSources && storedRefresh) {
          const lastRefresh = new Date(storedRefresh);
          if (
            !Number.isNaN(lastRefresh.getTime()) &&
            lastRefresh.getFullYear() === now.getFullYear() &&
            lastRefresh.getMonth() === now.getMonth()
          ) {
            const parsedSources = JSON.parse(storedSources);
            if (Array.isArray(parsedSources) && parsedSources.length === RANDOM_LOAN_COUNT) {
              const enrichedSources = parsedSources.map(enrichItemIso);
              if (enrichedSources.every(isLoanSourceValid)) {
                setLoanSources(enrichedSources);
                window.localStorage.setItem(LOAN_STORAGE_KEY, JSON.stringify(enrichedSources));
                return;
              }
            }
          }
        }
      } catch (err) {
        console.warn("Gagal memuat sumber pinjaman dari localStorage:", err);
      }

      const generatedSources = generateLoanSources();
      setLoanSources(generatedSources);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(LOAN_STORAGE_KEY, JSON.stringify(generatedSources));
        window.localStorage.setItem(LOAN_STORAGE_REFRESH_KEY, (currentDate instanceof Date ? currentDate : new Date()).toISOString());
      }
    };

    loadLoanSources();
    initialLoanLoadRef.current = false;
  }, [resetTrigger, currentDate]);

  if (!isOpen) return null;

  const kasNegara = countryDetail?.anggaran || 0;
  const totalHutang = countryDetail?.totalHutang || 0;
  const riwayatPinjaman = countryDetail?.pinjamanList || [];

  const simulatedGDP = 500_000; 
  const debtRatio = Math.min(100, Math.round((totalHutang / simulatedGDP) * 100));

  // PERBAIKAN: Logika Render Bendera Anti-Broken Image
  const renderFlag = (iso: string | undefined, fallbackEmoji: string, altName: string) => {
    if (!iso || iso.length !== 2) {
      return <span className="text-xl">{fallbackEmoji}</span>;
    }

    return (
      <div className="w-8 h-5 rounded-sm overflow-hidden border border-[#5c3c10]/20 flex-shrink-0 shadow-sm bg-[#e4dac3] relative flex items-center justify-center">
        <img
          src={`https://flagcdn.com/w80/${iso.toLowerCase()}.png`}
          alt={altName}
          className="w-full h-full object-cover absolute inset-0"
          onError={(e) => {
            // Jika gambar gagal, sembunyikan gambar dan hanya tampilkan background/emoji
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        {/* Fallback Emoji yang muncul di belakang jika gambar gagal */}
        <span className="text-sm opacity-50 select-none">{fallbackEmoji}</span>
      </div>
    );
  };

  // Logika Peminjaman (dieksekusi setelah konfirmasi)
  const confirmBorrow = () => {
    if (!pendingLoan) return;
    const source = pendingLoan;
    const totalYangHarusDibayar = source.maxLoan + (source.maxLoan * (source.interest / 100));
    const newTotalHutang = totalHutang + totalYangHarusDibayar;
    const returnDate = new Date(Date.now() + source.term * 24 * 60 * 60 * 1000).toLocaleDateString('id-ID');

    const newLoanRecord = {
      id: Date.now(),
      source: source.name,
      iso: source.iso || null,
      amount: source.maxLoan,
      interest: source.interest,
      term: source.term,
      totalRepayment: totalYangHarusDibayar,
      date: new Date().toLocaleDateString('id-ID'),
      returnDate: returnDate
    };

    setCountryDetail({
      ...countryDetail,
      anggaran: kasNegara + source.maxLoan,
      totalHutang: newTotalHutang,
      pinjamanList: [newLoanRecord, ...riwayatPinjaman]
    });

    setPendingLoan(null);
  };

  const cancelBorrow = () => setPendingLoan(null);

  const filteredCountries = loanSources.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        {/* Header */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                <CreditCard className="h-6 w-6 text-[#5c3c10]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Pinjaman & Hutang</h2>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          
          {/* Section 1: Peringatan dan Monitoring Ekonomi */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            <div className="col-span-2 bg-gradient-to-br from-[#e4dac3]/30 to-[#C4B49C]/20 border-2 border-[#C4B49C]/40 p-5 rounded-2xl shadow-sm">
              <h4 className="text-[10px] text-[#8b7e66] font-black uppercase tracking-wider mb-2">Rasio Hutang terhadap PDB</h4>
              <div className="flex justify-between items-end mb-3">
                <span className="text-3xl font-black text-[#5c3c10]">{debtRatio}%</span>
                <span className="text-xs font-bold text-[#8b7e66]">Batas Aman: 60%</span>
              </div>
              <div className="h-3 bg-[#C4B49C]/30 rounded-full overflow-hidden mt-1">
                <div 
                  className={`h-full rounded-full transition-all duration-700 ${
                    debtRatio > 80 ? "bg-red-600" : debtRatio > 60 ? "bg-amber-600" : "bg-emerald-600"
                  }`}
                  style={{ width: `${debtRatio}%` }}
                />
              </div>
            </div>

            <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-5 rounded-2xl shadow-sm flex flex-col justify-center">
              <div className="flex justify-between text-sm font-bold text-[#5c3c10] py-1 border-b border-[#C4B49C]/20">
                <span>Kas Negara</span>
                <span className="text-emerald-700">{kasNegara.toLocaleString("id-ID")} EM</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#5c3c10] py-1 mt-2">
                <span>Total Beban Hutang</span>
                <span className="text-red-700">{totalHutang.toLocaleString("id-ID")} EM</span>
              </div>
            </div>
          </div>

          {/* Section 2: Tabs Peminjaman */}
          <div className="bg-[#e4dac3]/40 p-1.5 rounded-xl border border-[#C4B49C]/40 inline-flex mb-6 shadow-sm">
            <button
              onClick={() => setActiveTab("bilateral")}
              className={`px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === "bilateral" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20" : "text-[#8b7e66] hover:text-[#5c3c10]"
              }`}
            >Negara Lain</button>
            <button
              onClick={() => setActiveTab("multilateral")}
              className={`px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === "multilateral" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20" : "text-[#8b7e66] hover:text-[#5c3c10]"
              }`}
            >Lembaga Dunia</button>
            <button
              onClick={() => setActiveTab("history")}
              className={`px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === "history" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20" : "text-[#8b7e66] hover:text-[#5c3c10]"
              }`}
            >Riwayat</button>
          </div>

          {/* Section 3: Content based on Tab */}
          {activeTab === "bilateral" && (
            <div>
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#8b7e66]" />
                <input
                  type="text"
                  placeholder="Cari nama negara peminjam..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/50 border-2 border-[#C4B49C]/50 rounded-xl text-sm font-bold text-[#5c3c10] placeholder:text-[#8b7e66]/60 focus:outline-none focus:border-[#5c3c10] transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredCountries.map((negara) => (
                  <div key={negara.id} className="bg-white/60 border border-[#C4B49C]/30 p-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        
                        {/* PERBAIKAN: Render Flag dengan Function Anti-Broken Image */}
                        {renderFlag(negara.iso, negara.flag, negara.name)}

                        <span className="text-sm font-black text-[#5c3c10]">{negara.name}</span>
                      </div>
                      <span className="text-xs font-black text-red-600 bg-red-600/10 px-2 py-1 rounded-lg">{negara.interest}%</span>
                    </div>
                    <div className="space-y-1 text-[10px] font-bold text-[#8b7e66]">
                      <p className="flex justify-between"><span>Plafon Pinjaman:</span> <span className="text-[#5c3c10]">{negara.maxLoan.toLocaleString('id-ID')} EM</span></p>
                      <p className="flex justify-between"><span>Masa Tenggang:</span> <span className="text-[#5c3c10]">{negara.term} Hari</span></p>
                    </div>
                    
                    <button
                      onClick={() => setPendingLoan(negara)}
                      className="w-full mt-4 py-2.5 rounded-lg bg-gradient-to-r from-[#fcae1e] to-[#c77a00] text-white text-[10px] font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                    >
                      <span>Pinjam Dana</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

            </div>
          )}

          {activeTab === "multilateral" && (
            <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
              {LEMBAGA_MULTILATERAL.map((lembaga) => (
                <div key={lembaga.id} className="bg-gradient-to-r from-[#e4dac3]/20 to-[#C4B49C]/10 border-2 border-[#C4B49C]/30 p-5 rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-[#5c3c10]/10 border border-[#5c3c10]/20">
                      <Landmark className="h-6 w-6 text-[#5c3c10]" />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-[#5c3c10]">{lembaga.name}</h4>
                      <p className="text-[10px] text-[#8b7e66]">Bunga: {lembaga.interest}% | Masa: {lembaga.term} Hari | Maks: {lembaga.maxLoan.toLocaleString('id-ID')} EM</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setPendingLoan(lembaga)}
                    className="px-8 py-2.5 rounded-xl bg-[#5c3c10] text-[#FAF6EE] border border-[#5c3c10]/60 shadow-md text-[10px] font-black uppercase tracking-wider hover:bg-[#3d2911] active:scale-95 transition-all cursor-pointer"
                  >
                    Ajukan Kredit
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Tabel Riwayat Pinjaman */}
          {activeTab === "history" && (
            <div className="overflow-x-auto border border-[#C4B49C]/30 rounded-xl bg-[#FAF6EE]/50 shadow-sm">
              <table className="w-full text-xs">
                <thead className="bg-[#5c3c10]/5 border-b-2 border-[#C4B49C]/30">
                  <tr>
                    <th className="px-5 py-3 text-left font-black text-[#5c3c10] uppercase tracking-wider">Negara</th>
                    <th className="px-5 py-3 text-left font-black text-[#5c3c10] uppercase tracking-wider">Jumlah Pinjaman</th>
                    <th className="px-5 py-3 text-left font-black text-[#5c3c10] uppercase tracking-wider">Tanggal Pengembalian</th>
                    <th className="px-5 py-3 text-left font-black text-[#5c3c10] uppercase tracking-wider">Bunga</th>
                    <th className="px-5 py-3 text-left font-black text-[#5c3c10] uppercase tracking-wider">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C4B49C]/20">
                  {riwayatPinjaman.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-5 py-10 text-center text-sm font-bold text-[#8b7e66]">
                        Belum ada riwayat pinjaman.
                      </td>
                    </tr>
                  ) : (
                    riwayatPinjaman.map((pinjam: any, idx: number) => (
                      <tr key={pinjam.id || idx} className="hover:bg-[#e4dac3]/20 transition-colors">
                        <td className="px-5 py-3 font-bold text-[#5c3c10]">
                          <div className="flex items-center gap-2">
                            
                            {/* PERBAIKAN: Render Flag di Tabel Riwayat */}
                            {renderFlag(pinjam.iso, "🌐", pinjam.source)}

                            <span>{pinjam.source}</span>
                          </div>
                        </td>
                        <td className="px-5 py-3 font-bold text-emerald-700">+{pinjam.amount.toLocaleString('id-ID')} EM</td>
                        <td className="px-5 py-3 font-bold text-[#5c3c10]">{pinjam.returnDate}</td>
                        <td className="px-5 py-3 font-bold text-red-600">{pinjam.interest}%</td>
                        <td className="px-5 py-3 font-bold text-[#5c3c10]">{pinjam.totalRepayment.toLocaleString('id-ID')} EM</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

        </div>

        {/* Modal Konfirmasi Peminjaman */}
        {pendingLoan && (
          <div className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center p-8 pointer-events-auto backdrop-blur-sm rounded-2xl">
            <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl max-w-lg w-full p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative">
              
              <button
                onClick={cancelBorrow}
                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-black/5 text-[#8b7e66] hover:text-[#5c3c10] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-600/10 rounded-xl border border-amber-600/20">
                  <AlertCircle className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#5c3c10] uppercase tracking-tight">Konfirmasi Pinjaman</h3>
                  <p className="text-xs text-[#8b7e66] font-bold">Pastikan data sudah benar sebelum menyetujui.</p>
                </div>
              </div>

              <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 rounded-xl p-5 space-y-2.5 mb-6">
                <div className="flex justify-between text-sm font-bold text-[#5c3c10] border-b border-[#C4B49C]/20 pb-2">
                  <span>Negara Pemberi</span>
                  <span className="flex items-center gap-2">
                    {renderFlag(pendingLoan.iso, pendingLoan.flag, pendingLoan.name)} {pendingLoan.name}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#5c3c10] border-b border-[#C4B49C]/20 pb-2">
                  <span>Jumlah Pinjaman</span>
                  <span className="text-emerald-700">{pendingLoan.maxLoan.toLocaleString('id-ID')} EM</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#5c3c10] border-b border-[#C4B49C]/20 pb-2">
                  <span>Bunga Pinjaman</span>
                  <span className="text-red-600">{pendingLoan.interest}%</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#5c3c10] border-b border-[#C4B49C]/20 pb-2">
                  <span>Masa Tenggang</span>
                  <span>{pendingLoan.term} Hari</span>
                </div>
                <div className="flex justify-between text-base font-black text-[#5c3c10] pt-2">
                  <span>Total Pembayaran</span>
                  <span className="text-[#5c3c10]">
                    {(pendingLoan.maxLoan + (pendingLoan.maxLoan * (pendingLoan.interest / 100))).toLocaleString('id-ID')} EM
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={cancelBorrow}
                  className="flex-1 py-3 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all font-black text-xs uppercase tracking-wider cursor-pointer"
                >
                  Batal
                </button>
                <button
                  onClick={confirmBorrow}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#fcae1e] to-[#c77a00] text-[#FAF6EE] shadow-md shadow-[#c77a00]/30 font-black text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                >
                  Konfirmasi Pinjaman
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}