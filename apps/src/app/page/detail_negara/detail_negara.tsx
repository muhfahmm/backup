'use client';

import { useState, useEffect, useRef } from "react";
import { X, Globe, Landmark, Shield, Users, Banknote, Scale, Home } from 'lucide-react';
import { COUNTRIES_DATA } from '../map_system/map-data';
import countryPaths from '../map_system/country-paths.json';
import { calculateCountryNetBalance } from '@/app/logic/economic_logic/treasuryUpdater';

// Import 3 komponen terpisah
import InformasiUmum from "./1_informasi_umum/informasi_umum";
import Geopolitik from "./2_geopolitik/geopolitik";
import OperasiMiliter from "./3_operasi_militer/operasi_militer";

interface CountryDetailModalProps {
  isOpen: boolean;
  countryName: string | null;
  onClose: () => void;
  countryDetail?: any; // Data detail negara dari API (negara yang sedang dimainkan)
  currentDate?: Date; // Tanggal terkini dari TimeController
}

export function CountryDetailModal({ isOpen, countryName, onClose, countryDetail, currentDate }: CountryDetailModalProps) {
  // State untuk menu tab
  const [activeTab, setActiveTab] = useState<"informasi" | "geopolitik" | "militer">("informasi");

  // State untuk data negara yang diklik
  const [fetchedDetail, setFetchedDetail] = useState<any>(null);
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);

  // State statistik Netto APBN harian negara yang ditampilkan
  const [dailyNetBalance, setDailyNetBalance] = useState<number>(0);

  // Ref untuk melacak pergantian hari khusus di modal
  const prevModalUpdateDateRef = useRef<string | null>(null);
  
  // PERBAIKAN: Ref untuk mencegah fetch ulang data saat modal dibuka/tutup (Data tetap progresif)
  const fetchedRef = useRef<string | null>(null);

  // PERBAIKAN: Fetch data hanya SEKALI saat pertama kali negara dibuka
  useEffect(() => {
    if (!isOpen || !countryName) return;

    // Jika sudah pernah fetch negara ini sebelumnya, jangan fetch lagi (mencegah reset data)
    if (fetchedRef.current === countryName) return;

    // Tandai negara ini sudah di-fetch
    fetchedRef.current = countryName;

    setFetchedDetail(null);
    setIsLoadingDetail(true);
    setActiveTab("informasi");
    prevModalUpdateDateRef.current = null;

    const loadDetail = async () => {
      // Cari path file berdasarkan countryName (case-insensitive)
      const relPath = Object.entries(countryPaths as Record<string, string>).find(
        ([name]) => name.toLowerCase() === countryName.toLowerCase()
      )?.[1];

      if (!relPath) {
        console.warn(`[detail_negara] Tidak ditemukan path untuk: ${countryName}`);
        setIsLoadingDetail(false);
        return;
      }

      try {
        const res = await fetch(`/api/country-data?path=${relPath}`);
        const data = await res.json();

        if (data?.error) {
          console.warn(`[detail_negara] Error dari API untuk ${countryName}:`, data.error);
          setIsLoadingDetail(false);
          return;
        }

        setFetchedDetail(data);

        // Hitung Netto APBN Harian awal saat data pertama dimuat
        const initialNet = calculateCountryNetBalance(data);
        setDailyNetBalance(initialNet);
      } catch (e) {
        console.error(`[detail_negara] Gagal fetch data untuk ${countryName}:`, e);
      } finally {
        setIsLoadingDetail(false);
      }
    };

    loadDetail();
  }, [isOpen, countryName]);

  // PERBAIKAN: Logika Simulasi Update Kas Harian (Tetap berjalan saat modal terbuka)
  useEffect(() => {
    if (!isOpen || !fetchedDetail || !currentDate) return;

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const currentDateStr = `${year}-${month}-${day}`;

    if (prevModalUpdateDateRef.current === null) {
      prevModalUpdateDateRef.current = currentDateStr;
      return;
    }

    if (prevModalUpdateDateRef.current === currentDateStr) return;

    prevModalUpdateDateRef.current = currentDateStr;

    const netBalance = calculateCountryNetBalance(fetchedDetail);
    setDailyNetBalance(netBalance);

    setFetchedDetail((prev: any) => {
      if (!prev) return prev;
      return {
        ...prev,
        anggaran: (Number(prev.anggaran) || 0) + netBalance,
      };
    });
  }, [currentDate, fetchedDetail, isOpen]);

  if (!isOpen || !countryName) return null;

  // Ambil data dasar (iso, capital) dari COUNTRIES_DATA (sumber peta)
  const mapData = COUNTRIES_DATA?.find(
    (c) => c.country?.toLowerCase().trim() === countryName.toLowerCase().trim()
  );

  // Gunakan fetchedDetail sebagai sumber utama, countryDetail sebagai fallback
  const detailData = fetchedDetail || countryDetail;

  // Fallback ganda untuk iso dan capital
  const iso = mapData?.iso || detailData?.iso || "";
  const capital = mapData?.capital || detailData?.capital || "Data tidak tersedia";

  // Hitung Netto APBN efektif yang ditampilkan
  const effectiveNetBalance = fetchedDetail ? dailyNetBalance : (countryDetail ? calculateCountryNetBalance(countryDetail) : 0);

  // Fungsi Helper untuk bendera di Header
  const renderFlagHeader = (iso: string | undefined, altName: string) => {
    if (!iso || iso.length !== 2) return <span className="text-xl leading-none">🌐</span>;
    return (
      <div className="w-8 h-5 rounded-sm overflow-hidden border border-[#5c3c10]/20 flex-shrink-0 shadow-sm bg-[#e4dac3] relative flex items-center justify-center">
        <img
          src={`https://flagcdn.com/w80/${iso.toLowerCase()}.png`}
          alt={altName}
          className="w-full h-full object-cover absolute inset-0"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <span className="text-sm opacity-50 select-none">🌐</span>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        {/* HEADER Modal */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              
              {/* 1. Icon Globe */}
              <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                <Globe className="h-6 w-6 text-[#5c3c10]" />
              </div>
              
              {/* 2. Judul & Subjudul */}
              <div>
                {/* Judul Utama */}
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">
                  DETAIL NEGARA
                </h2>
                
                <div className="flex items-center gap-2 mt-1">
                  {renderFlagHeader(iso, countryName)}
                  <p className="text-[10px] text-[#8b7e66] font-semibold uppercase tracking-wider">
                    {countryName}, {capital}
                  </p>
                </div>
              </div>

            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
            aria-label="Tutup detail negara"
          >
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* DATA RINGKASAN - Data diambil langsung dari JSON database berdasarkan negara yang diklik */}
        <div className="px-8 py-4 bg-[#e4dac3]/30 border-b border-[#C4B49C]/20 flex items-center gap-8 relative z-10 overflow-x-auto">
          <div className="flex items-center gap-6 min-w-max">
            {/* Ibukota */}
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-[#dcc9a3]/60 rounded-lg text-[#8b7e66]">
                <Landmark className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-[#8b7e66]/80 uppercase tracking-wider">Ibukota</span>
                <span className="text-[11px] font-bold text-[#5c3c10] uppercase">
                  {capital}
                </span>
              </div>
            </div>

            {/* Populasi */}
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-[#dcc9a3]/60 rounded-lg text-[#8b7e66]">
                <Users className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-[#8b7e66]/80 uppercase tracking-wider">Populasi</span>
                <span className="text-[11px] font-bold text-[#5c3c10] uppercase">
                  {isLoadingDetail
                    ? <span className="inline-block w-20 h-3 bg-[#8b7e66]/20 animate-pulse rounded" />
                    : detailData?.jumlah_penduduk ? detailData.jumlah_penduduk.toLocaleString('id-ID') : '-'
                  }
                </span>
              </div>
            </div>

            {/* Anggaran Negara */}
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-[#dcc9a3]/60 rounded-lg text-[#8b7e66]">
                <Banknote className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-[#8b7e66]/80 uppercase tracking-wider">Anggaran</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-bold text-[#5c3c10] uppercase">
                    {isLoadingDetail
                      ? <span className="inline-block w-16 h-3 bg-[#8b7e66]/20 animate-pulse rounded" />
                      : detailData?.anggaran !== undefined ? `${detailData.anggaran.toLocaleString('id-ID')} EM` : '-'
                    }
                  </span>
                  {!isLoadingDetail && detailData && (
                    <span className={`text-[10px] font-black ${effectiveNetBalance >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                      ({effectiveNetBalance >= 0 ? `+${effectiveNetBalance.toLocaleString('id-ID')}` : effectiveNetBalance.toLocaleString('id-ID')})
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Ideologi */}
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-[#dcc9a3]/60 rounded-lg text-[#8b7e66]">
                <Scale className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-[#8b7e66]/80 uppercase tracking-wider">Ideologi</span>
                <span className="text-[11px] font-bold text-[#5c3c10] uppercase">
                  {isLoadingDetail
                    ? <span className="inline-block w-20 h-3 bg-[#8b7e66]/20 animate-pulse rounded" />
                    : detailData?.ideology || '-'
                  }
                </span>
              </div>
            </div>

            {/* Agama */}
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-[#dcc9a3]/60 rounded-lg text-[#8b7e66]">
                <Home className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-[#8b7e66]/80 uppercase tracking-wider">Agama</span>
                <span className="text-[11px] font-bold text-[#5c3c10] uppercase">
                  {isLoadingDetail
                    ? <span className="inline-block w-16 h-3 bg-[#8b7e66]/20 animate-pulse rounded" />
                    : detailData?.religion || '-'
                  }
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BODY CONTENT */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="max-w-4xl mx-auto">
            
            {/* Menu 3 Tab Navigasi */}
            <div className="bg-[#e4dac3]/40 p-1 rounded-xl border border-[#C4B49C]/40 inline-flex mb-6 shadow-sm flex-wrap gap-1">
              <button
                onClick={() => setActiveTab("informasi")}
                className={`px-5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "informasi" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20" : "text-[#8b7e66] hover:text-[#5c3c10]"
                }`}
              >
                <Globe className="h-3.5 w-3.5" /> Informasi Umum
              </button>
              <button
                onClick={() => setActiveTab("geopolitik")}
                className={`px-5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "geopolitik" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20" : "text-[#8b7e66] hover:text-[#5c3c10]"
                }`}
              >
                <Landmark className="h-3.5 w-3.5" /> Geopolitik
              </button>
              <button
                onClick={() => setActiveTab("militer")}
                className={`px-5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "militer" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20" : "text-[#8b7e66] hover:text-[#5c3c10]"
                }`}
              >
                <Shield className="h-3.5 w-3.5" /> Operasi Militer
              </button>
            </div>

            {/* Render 3 Komponen Berdasarkan Active Tab */}
            {activeTab === "informasi" && (
              <InformasiUmum countryName={countryName} />
            )}

            {activeTab === "geopolitik" && (
              <Geopolitik countryName={countryName} />
            )}

            {activeTab === "militer" && (
              <OperasiMiliter countryName={countryName} />
            )}

          </div>
        </div>

      </div>
    </div>
  );
}