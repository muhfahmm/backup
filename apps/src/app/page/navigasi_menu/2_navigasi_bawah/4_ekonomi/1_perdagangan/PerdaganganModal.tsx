"use client"
import React, { useMemo, useState, useEffect } from "react";
import { X, ArrowRightLeft } from "lucide-react";
import JualModalsMenu from "./jual/modalsKonfirmasiJual";
import MitraModalsMenu, { TradePartner } from "./mitra/mitraModalsMenu";
import ModalsKonfirmasiBeli from "./beli/modalsKonfirmasiBeli";
import { getTradeAgreementsForCountry } from '../../../../../../../../json/database_mitra_perdagangan/tradeAgreementRegistry';
import TawaranPembelianTable from "./tawaran_beli/TawaranPembelianTable";

interface AgreementData {
  no: number;
  mitra: string;
  type: string;
  status: string;
}

interface ModalCountryDetail {
  [key: string]: unknown;
  country?: string;
  nama?: string;
  region?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: ModalCountryDetail | null;
  setCountryDetail: (detail: ModalCountryDetail | ((prev: ModalCountryDetail) => ModalCountryDetail)) => void;
  currentDate?: Date;
  resetTrigger?: boolean;
  prefetchedAllCountries?: any[];
}

export interface TradeHistoryItem {
  tanggal: string;
  tipe: "jual" | "beli";
  kuantitas: string;
  biaya: number;
  negara: string;
}

// --- Ekspor Interface untuk Tawaran AI ---
export interface PartnerOffer {
  id: string;
  partnerName: string;
  productKey: string;
  quantity: number;
  pricePerUnit: number;
  totalPrice: number;
  validUntil: Date;
}

const DEFAULT_PRICES: Record<string, number> = {
  uranium: 8000, batu_bara: 100, minyak_bumi: 150, gas_alam: 120, garam: 50,
  litium: 3000, logam_tanah_jarang: 5000, semikonduktor: 4000, mobil: 15000, sepeda_motor: 5000,
  semen_beton: 300, kayu: 200, ayam_unggas: 60, sapi_perah: 200,
  sapi_potong: 180, domba_kambing: 150, padi: 80, gandum: 90, jagung: 70,
  sayur: 100, umbi: 60, kedelai: 120, kelapa_sawit: 130, kopi: 300,
  teh: 250, kakao: 350, tebu: 100, karet: 200,
  udang: 500, mutiara: 1000, ikan: 300, air_mineral: 50,
  gula: 150, roti: 200, pengolahan_daging: 250, mie_instan: 180, minyak_goreng: 220,
  susu: 160
};

const ALL_IMPORT_KEYS = [
  "uranium", "batu_bara", "minyak_bumi", "gas_alam", "garam", "litium", "logam_tanah_jarang", "bijih_besi",
  "semikonduktor", "mobil", "sepeda_motor", "semen_beton", "kayu",
  "ayam_unggas", "sapi_perah", "sapi_potong", "domba_kambing",
  "padi", "gandum", "jagung", "sayur", "umbi", "kedelai", "kelapa_sawit", "kopi", "teh", "kakao", "tebu", "karet",
  "udang", "mutiara", "ikan",
  "air_mineral", "gula", "roti", "pengolahan_daging", "mie_instan", "minyak_goreng", "susu"
];

const formatLabel = (key: string) => key.replace(/_/g, " ").replace(/\b\w/g, (ch) => ch.toUpperCase());

export default function PerdaganganModal({ 
  isOpen, 
  onClose, 
  countryDetail, 
  setCountryDetail, 
  currentDate, 
  resetTrigger,
  prefetchedAllCountries 
}: ModalProps) {
  const [historyFilter, setHistoryFilter] = useState<"semua" | "jual" | "beli">("semua");
  const [history, setHistory] = useState<TradeHistoryItem[]>([]);
  const [historyResetVersion, setHistoryResetVersion] = useState(0);

  // State untuk modal anak
  const [isConfirmBeliOpen, setIsConfirmBeliOpen] = useState(false);
  const [isJualOpen, setIsJualOpen] = useState(false);
  const [isMitraOpen, setIsMitraOpen] = useState(false);
  const [activeTradePartner, setActiveTradePartner] = useState<TradePartner | null>(null);

  // --- State untuk fitur Tawaran AI ---
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const [partnerOffers, setPartnerOffers] = useState<PartnerOffer[]>([]);
  const [activeOfferProduct, setActiveOfferProduct] = useState<string | undefined>(undefined);

  // Fungsi trigger dari Mitra
  const openBeliModals = (partner: TradePartner) => {
    setActiveTradePartner(partner);
    setActiveOfferProduct(undefined);
    setIsMitraOpen(false);
    setIsConfirmBeliOpen(true);
  };

  const openJualModals = (partner: TradePartner) => {
    setActiveTradePartner(partner);
    setIsMitraOpen(false);
    setIsJualOpen(true);
  };

  const getTodayString = () => {
    const d = new Date();
    return `${String(d.getDate()).padStart(2, "0")}.${String(d.getMonth() + 1).padStart(2, "0")}.${d.getFullYear()}`;
  };

  const addHistoryEntry = (tipe: "jual" | "beli", biaya: number, kuantitas: string = "1x") => {
    setHistory((prev) => [
      {
        tanggal: getTodayString(),
        tipe,
        kuantitas,
        biaya,
        negara: countryDetail?.country || countryDetail?.nama || "-"
      },
      ...prev
    ]);
  };

  const countryName = countryDetail?.country || countryDetail?.nama || "";

  const effectiveHistory = useMemo(() => {
    if (!resetTrigger) return history;
    return [];
  }, [history, resetTrigger]);

  const effectiveFilter = useMemo(() => {
    if (!resetTrigger) return historyFilter;
    return "semua" as const;
  }, [historyFilter, resetTrigger]);

  const handleResetHistory = () => {
    setHistory([]);
    setHistoryFilter("semua");
    setHistoryResetVersion((prev) => prev + 1);
  };

  useEffect(() => {
    if (!resetTrigger || historyResetVersion >= 1) return;
    handleResetHistory();
  }, [resetTrigger, historyResetVersion]);

  const allPartners = useMemo((): TradePartner[] => {
    const agreements = getTradeAgreementsForCountry(countryName);
    return agreements.map((item: AgreementData) => ({
      id: item.no,
      nama_negara: item.mitra,
      region: countryDetail?.region || "Internasional",
      status_hubungan: item.status,
      jenis_perjanjian: item.type,
      total_nilai_dagang: undefined,
    }));
  }, [countryDetail?.region, countryName]);

  const [partnersState, setPartnersState] = useState<TradePartner[]>([]);

  useEffect(() => {
    setPartnersState(allPartners);
  }, [allPartners]);

  const handleRemovePartner = (partnerId: number) => {
    setPartnersState((prev) => prev.filter(p => p.id !== partnerId));
  };

  // --- PERBAIKAN: Logika AI Menghasilkan Tawaran 30 Hari ke Depan ---
  useEffect(() => {
    if (!isOpen || partnersState.length === 0) {
      setPartnerOffers([]);
      return;
    }

    // Simulasi AI: Mitra menawarkan barang secara acak saat modal dibuka
    const generateOffers = () => {
      const newOffers: PartnerOffer[] = [];
      const shuffledPartners = [...partnersState].sort(() => 0.5 - Math.random()).slice(0, 3);
      
      shuffledPartners.forEach((partner) => {
        const randomProduct = ALL_IMPORT_KEYS[Math.floor(Math.random() * ALL_IMPORT_KEYS.length)];
        const basePrice = DEFAULT_PRICES[randomProduct] || 100;
        const priceMultiplier = 0.8 + (Math.random() * 0.4);
        const pricePerUnit = Math.round(basePrice * priceMultiplier * 100) / 100;
        const quantity = Math.floor(Math.random() * 500) + 10;

        // PERBAIKAN: Tentukan tanggal berlaku 30 hari ke depan berdasarkan SIMULATION CALENDAR (currentDate)
        const validUntil = currentDate ? new Date(currentDate) : new Date();
        validUntil.setDate(validUntil.getDate() + 30);

        newOffers.push({
          id: `offer-${Date.now()}-${partner.id}`,
          partnerName: partner.nama_negara,
          productKey: randomProduct,
          quantity: quantity,
          pricePerUnit: pricePerUnit,
          totalPrice: pricePerUnit * quantity,
          validUntil: validUntil
        });
      });
      setPartnerOffers(newOffers);
    };

    generateOffers();
    // Jika tanggal simulasi berubah, tawaran akan dibuat ulang
  }, [isOpen, partnersState, currentDate]);

  // --- Fungsi Terima Tawaran ---
  const handleAcceptOffer = (offer: PartnerOffer) => {
    const targetPartner = partnersState.find(p => p.nama_negara === offer.partnerName);
    if (targetPartner) {
      setActiveTradePartner(targetPartner);
      setActiveOfferProduct(offer.productKey);
      setIsOfferOpen(false); // Tutup tabel tawaran
      setIsConfirmBeliOpen(true); // Buka modal beli
    } else {
      alert("Mitra tidak ditemukan.");
    }
  };

  const filteredHistory = effectiveHistory.filter((item) => {
    if (effectiveFilter === "semua") return true;
    return item.tipe === effectiveFilter;
  });

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

          <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                  <ArrowRightLeft className="h-6 w-6 text-[#5c3c10]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Pasar Perdagangan Global</h2>
                </div>
              </div>
            </div>
            <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
            <p className="text-xs text-[#8b7e66] font-semibold leading-relaxed mb-6">
              Kelola aktivitas jual dan beli komoditas nasional untuk mengoptimalkan pendapatan dan kebutuhan anggaran belanja negara.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => setIsMitraOpen(true)}
                className="flex-1 min-w-[150px] py-3 rounded-lg bg-[#8b7e66] hover:bg-[#756a54] active:bg-[#605747] text-[#FAF6EE] text-xs font-bold uppercase tracking-wide cursor-pointer transition-all shadow-sm"
              >
                Mitra
              </button>
              <button
                onClick={() => setIsJualOpen(true)}
                className="flex-1 min-w-[150px] py-3 rounded-lg bg-[#2d6e6e] hover:bg-[#255c5c] active:bg-[#1f4f4f] text-[#FAF6EE] text-xs font-bold uppercase tracking-wide cursor-pointer transition-all shadow-sm"
              >
                Jual
              </button>
              <button
                onClick={() => { setActiveTradePartner(null); setActiveOfferProduct(undefined); setIsConfirmBeliOpen(true); }}
                className="flex-1 min-w-[150px] py-3 rounded-lg bg-[#2d6e6e] hover:bg-[#255c5c] active:bg-[#1f4f4f] text-[#FAF6EE] text-xs font-bold uppercase tracking-wide cursor-pointer transition-all shadow-sm"
              >
                Beli
              </button>
              <button
                onClick={() => setIsJualOpen(true)}
                className="flex-1 min-w-[150px] py-3 rounded-lg bg-[#2d6e6e] hover:bg-[#255c5c] active:bg-[#1f4f4f] text-[#FAF6EE] text-xs font-bold uppercase tracking-wide cursor-pointer transition-all shadow-sm"
              >
                Jual Semuanya
              </button>
              <button
                onClick={() => setIsOfferOpen(!isOfferOpen)}
                className={`flex-1 min-w-[150px] py-3 rounded-lg text-xs font-bold uppercase tracking-wide cursor-pointer transition-all shadow-sm ${isOfferOpen ? 'bg-amber-700 text-white' : 'bg-[#2d6e6e] hover:bg-[#255c5c] text-[#FAF6EE]'}`}
              >
                Tawaran Pembelian
              </button>
            </div>

            {/* --- PERBAIKAN: Kirim currentDate ke komponen tabel agar bisa mengecek kadaluwarsa --- */}
            {isOfferOpen && (
              <TawaranPembelianTable 
                offers={partnerOffers} 
                onAcceptOffer={handleAcceptOffer} 
                onClose={() => setIsOfferOpen(false)} 
                currentDate={currentDate || new Date()} 
              />
            )}

            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[10px] font-black text-[#5c3c10] uppercase tracking-widest">Riwayat 180 Hari Terakhir</h3>
              <div className="inline-flex rounded-lg overflow-hidden border-2 border-[#C4B49C]/50">
                <button onClick={() => setHistoryFilter(effectiveFilter === "jual" ? "semua" : "jual")} className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${effectiveFilter === "jual" ? "bg-rose-600 text-white" : "bg-rose-600/15 text-rose-700 hover:bg-rose-600/25"}`}>Jual</button>
                <button onClick={() => setHistoryFilter(effectiveFilter === "beli" ? "semua" : "beli")} className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${effectiveFilter === "beli" ? "bg-emerald-600 text-white" : "bg-emerald-600/15 text-emerald-700 hover:bg-emerald-600/25"}`}>Beli</button>
              </div>
            </div>

            <div className="border-2 border-[#C4B49C]/40 rounded-xl overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#2d6e6e]">
                    <th className="px-4 py-3 text-[10px] font-black text-[#FAF6EE] uppercase tracking-wider">Tanggal</th>
                    <th className="px-4 py-3 text-[10px] font-black text-[#FAF6EE] uppercase tracking-wider">Tipe</th>
                    <th className="px-4 py-3 text-[10px] font-black text-[#FAF6EE] uppercase tracking-wider">Kuantitas</th>
                    <th className="px-4 py-3 text-[10px] font-black text-[#FAF6EE] uppercase tracking-wider">Biaya</th>
                    <th className="px-4 py-3 text-[10px] font-black text-[#FAF6EE] uppercase tracking-wider">Negara</th>
                  </tr>
                </thead>
                <tbody className="bg-[#FAF6EE]">
                  {filteredHistory.length === 0 ? (
                    <tr><td colSpan={5} className="px-4 py-8 text-center text-xs text-[#8b7e66] font-semibold">Belum ada riwayat transaksi.</td></tr>
                  ) : (
                    filteredHistory.map((item, idx) => (
                      <tr key={idx} className="border-t border-[#C4B49C]/20">
                        <td className="px-4 py-3 text-xs font-semibold text-[#5c3c10]">{item.tanggal}</td>
                        <td className="px-4 py-3 text-xs font-bold uppercase"><span className={item.tipe === "jual" ? "text-rose-700" : "text-emerald-700"}>{item.tipe}</span></td>
                        <td className="px-4 py-3 text-xs font-semibold text-[#5c3c10]">{item.kuantitas}</td>
                        <td className="px-4 py-3 text-xs font-bold text-[#5c3c10]">{item.tipe === "jual" ? "+" : "-"} {item.biaya.toLocaleString("id-ID")} EM</td>
                        <td className="px-4 py-3 text-xs font-semibold text-[#5c3c10]">{item.negara}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <ModalsKonfirmasiBeli
        isOpen={isConfirmBeliOpen}
        onClose={() => { setIsConfirmBeliOpen(false); setActiveTradePartner(null); setActiveOfferProduct(undefined); }}
        countryDetail={countryDetail}
        setCountryDetail={setCountryDetail}
        onConfirm={(biaya, kuantitas) => addHistoryEntry("beli", biaya, kuantitas)}
        partners={allPartners}
        currentDate={currentDate}
        initialPartnerName={activeTradePartner?.nama_negara}
        initialProductKey={activeOfferProduct}
        prefetchedAllCountries={prefetchedAllCountries}
      />

      <JualModalsMenu 
        isOpen={isJualOpen} 
        onClose={() => { setIsJualOpen(false); setActiveTradePartner(null); }} 
        countryDetail={countryDetail} 
        setCountryDetail={setCountryDetail} 
        onConfirm={(biaya, kuantitas) => addHistoryEntry("jual", biaya, kuantitas)} 
        currentDate={currentDate}
        partners={allPartners}
        initialPartnerName={activeTradePartner?.nama_negara}
        prefetchedAllCountries={prefetchedAllCountries}
      />

      <MitraModalsMenu 
        isOpen={isMitraOpen} 
        onClose={() => setIsMitraOpen(false)} 
        partners={partnersState}
        onOpenBeli={openBeliModals}
        onOpenJual={openJualModals}
        onRemovePartner={handleRemovePartner}
        currentUserCountry={countryName}
        onAddPartner={(name, region) => {
          setPartnersState(prev => [
            ...prev,
            {
              id: Date.now(),
              nama_negara: name,
              region: region,
              status_hubungan: "Aktif",
              total_nilai_dagang: 0,
              jenis_perjanjian: "Bilateral"
            }
          ]);
        }}
      />
    </>
  );
}