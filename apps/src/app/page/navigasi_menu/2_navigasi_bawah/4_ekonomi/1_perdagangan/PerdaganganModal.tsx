"use client"
import React, { useState, useMemo } from "react";
import { X, ArrowRightLeft, Info } from "lucide-react";
import BeliModalsMenu from "./beli/beliModalsMenu";
import JualModalsMenu from "./jual/jualModalsMenu";
import MitraModalsMenu, { TradePartner } from "./mitra/mitraModalsMenu";
import { getTradeAgreementsForCountry } from '../../../../../../../../json/database_mitra_perdagangan/tradeAgreementRegistry';

// PERBAIKAN 2: Buat Interface untuk data dari file JSON agar "item" tidak error any
interface AgreementData {
  no: number;
  mitra: string;
  type: string;
  status: string;
}

// =========================================================================
// === SAAT ANDA SUDAH PUNYA FILE LAIN (MISAL: 2_ALJAZAIR), TAMBAHKAN DI SINI ===
// import { aljazairAgreements } from '../../../../../../json/database_mitra_perdagangan/afrika/2_aljazair';
// =========================================================================

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
}

export interface TradeHistoryItem {
  tanggal: string;
  tipe: "ekspor" | "impor";
  kuantitas: string;
  biaya: number;
  negara: string;
}

export default function PerdaganganModal({ isOpen, onClose, countryDetail, setCountryDetail, currentDate }: ModalProps) {
  const [historyFilter, setHistoryFilter] = useState<"semua" | "ekspor" | "impor">("semua");
  const [history, setHistory] = useState<TradeHistoryItem[]>([]);

  const [isImporOpen, setIsImporOpen] = useState(false);
  const [isEksporOpen, setIsEksporOpen] = useState(false);
  const [isMitraOpen, setIsMitraOpen] = useState(false);

  const getTodayString = () => {
    const d = new Date();
    return `${String(d.getDate()).padStart(2, "0")}.${String(d.getMonth() + 1).padStart(2, "0")}.${d.getFullYear()}`;
  };

  const addHistoryEntry = (tipe: "ekspor" | "impor", biaya: number, kuantitas: string = "1x") => {
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

  const filteredHistory = history.filter((item) => {
    if (historyFilter === "semua") return true;
    return item.tipe === historyFilter;
  });

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/65 z-50 flex items-center justify-center p-4">
        <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

          {/* Header */}
          <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                  <ArrowRightLeft className="h-6 w-6 text-[#5c3c10]" />
                </div>

                <button
                  type="button"
                  title="Informasi Perdagangan"
                  className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-[#5c3c10]/30 text-[#5c3c10] hover:bg-[#5c3c10]/10 active:bg-[#5c3c10]/20 transition-all cursor-pointer flex-shrink-0"
                >
                  <Info className="h-4 w-4" />
                </button>

                <div>
                  <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Pasar Perdagangan Ekspor Global</h2>
                </div>
              </div>
            </div>
            <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
            <p className="text-xs text-[#8b7e66] font-semibold leading-relaxed mb-6">
              Kelola aktivitas ekspor dan impor komoditas nasional untuk mengoptimalkan pendapatan dan kebutuhan anggaran belanja negara.
            </p>

            {/* 4 Tombol Aksi: Mitra, Ekspor, Impor, Ekspor Semua */}
            <div className="flex flex-wrap gap-3 mb-8">
              {/* BUTTON MITRA */}
              <button
                onClick={() => setIsMitraOpen(true)}
                className="flex-1 min-w-[150px] py-3 rounded-lg bg-[#8b7e66] hover:bg-[#756a54] active:bg-[#605747] text-[#FAF6EE] text-xs font-bold uppercase tracking-wide cursor-pointer transition-all shadow-sm"
              >
                Mitra
              </button>
              
              <button
                onClick={() => setIsEksporOpen(true)}
                className="flex-1 min-w-[150px] py-3 rounded-lg bg-[#2d6e6e] hover:bg-[#255c5c] active:bg-[#1f4f4f] text-[#FAF6EE] text-xs font-bold uppercase tracking-wide cursor-pointer transition-all shadow-sm"
              >
                Ekspor
              </button>
              
              <button
                onClick={() => setIsImporOpen(true)}
                className="flex-1 min-w-[150px] py-3 rounded-lg bg-[#2d6e6e] hover:bg-[#255c5c] active:bg-[#1f4f4f] text-[#FAF6EE] text-xs font-bold uppercase tracking-wide cursor-pointer transition-all shadow-sm"
              >
                Impor
              </button>
              
              <button
                onClick={() => setIsEksporOpen(true)}
                className="flex-1 min-w-[150px] py-3 rounded-lg bg-[#2d6e6e] hover:bg-[#255c5c] active:bg-[#1f4f4f] text-[#FAF6EE] text-xs font-bold uppercase tracking-wide cursor-pointer transition-all shadow-sm"
              >
                Ekspor Semuanya
              </button>
            </div>

            {/* Filter dan Tabel Riwayat (SAMA SEPERTI SEBELUMNYA) */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[10px] font-black text-[#5c3c10] uppercase tracking-widest">Riwayat 180 Hari Terakhir</h3>
              <div className="inline-flex rounded-lg overflow-hidden border-2 border-[#C4B49C]/50">
                <button onClick={() => setHistoryFilter(historyFilter === "ekspor" ? "semua" : "ekspor")} className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${historyFilter === "ekspor" ? "bg-rose-600 text-white" : "bg-rose-600/15 text-rose-700 hover:bg-rose-600/25"}`}>Ekspor</button>
                <button onClick={() => setHistoryFilter(historyFilter === "impor" ? "semua" : "impor")} className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${historyFilter === "impor" ? "bg-emerald-600 text-white" : "bg-emerald-600/15 text-emerald-700 hover:bg-emerald-600/25"}`}>Impor</button>
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
                        <td className="px-4 py-3 text-xs font-bold uppercase"><span className={item.tipe === "ekspor" ? "text-rose-700" : "text-emerald-700"}>{item.tipe}</span></td>
                        <td className="px-4 py-3 text-xs font-semibold text-[#5c3c10]">{item.kuantitas}</td>
                        <td className="px-4 py-3 text-xs font-bold text-[#5c3c10]">{item.tipe === "ekspor" ? "+" : "-"} {item.biaya.toLocaleString("id-ID")} EM</td>
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

      {/* Modal-modal anak */}
      <BeliModalsMenu isOpen={isImporOpen} onClose={() => setIsImporOpen(false)} countryDetail={countryDetail} setCountryDetail={setCountryDetail} onConfirm={(biaya, kuantitas) => addHistoryEntry("impor", biaya, kuantitas)} />
      <JualModalsMenu isOpen={isEksporOpen} onClose={() => setIsEksporOpen(false)} countryDetail={countryDetail} setCountryDetail={setCountryDetail} onConfirm={(biaya, kuantitas) => addHistoryEntry("ekspor", biaya, kuantitas)} currentDate={currentDate} />
      
      {/* Modal Mitra */}
      <MitraModalsMenu isOpen={isMitraOpen} onClose={() => setIsMitraOpen(false)} partners={allPartners} />
    </>
  );
}