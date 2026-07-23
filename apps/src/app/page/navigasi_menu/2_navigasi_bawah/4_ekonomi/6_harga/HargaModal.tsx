"use client"
import React, { useEffect, useMemo, useState } from "react";
import { X, Tag, Loader2 } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
}

export default function HargaModal({ isOpen, onClose, countryDetail, setCountryDetail }: ModalProps) {
  const [prices, setPrices] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const countryName = countryDetail?.country || "";
  const anggaran = countryDetail?.anggaran || 0;
  const kepuasan = countryDetail?.kepuasan || 65.0;

  const priceOptions = useMemo(() => [10000, 25000, 50000, 75000, 100000], []);

  useEffect(() => {
    if (!isOpen || !countryName) return;

    if (countryDetail?.harga && Object.keys(countryDetail.harga).length > 0) {
      setPrices(countryDetail.harga);
      return;
    }

    const loadPrices = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`/api/price-data?country=${encodeURIComponent(countryName)}`);
        const data = await res.json();
        if (data?.prices) {
          const defaultPrices = data.prices;
          setPrices(defaultPrices);
          setCountryDetail({
            ...countryDetail,
            harga: defaultPrices,
          });
        } else {
          setPrices({});
        }
      } catch (err) {
        console.error("Failed to load price data", err);
        setError("Gagal memuat data harga dari database.");
      } finally {
        setLoading(false);
      }
    };

    loadPrices();
  }, [isOpen, countryName, countryDetail?.harga]);

  if (!isOpen) return null;

  const handlePriceChange = (key: string, value: number) => {
    const updatedPrices = { ...prices, [key]: value };
    setPrices(updatedPrices);
    setCountryDetail({
      ...countryDetail,
      harga: updatedPrices,
      ...(key === 'harga_beras' ? { price_rice: value } : {}),
      ...(key === 'harga_minyak_goreng' ? { price_fuel: value } : {}),
    });
  };

  const handleSubsidize = () => {
    if (anggaran < 20000000) {
      alert("Kas negara tidak mencukupi untuk membiayai subsidi!");
      return;
    }
    setCountryDetail({
      ...countryDetail,
      anggaran: anggaran - 20000000,
      kepuasan: Math.min(100, kepuasan + 5.0)
    });
    alert("Beras & Minyak Goreng disubsidi penuh (+5.0% Kepuasan Rakyat)!");
  };

  const priceEntries = Object.entries(prices).filter(([key]) => key.startsWith("harga_"));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                <Tag className="h-6 w-6 text-[#5c3c10]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Kontrol Harga Barang Pokok</h2>
              </div>
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

        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <p className="text-xs text-[#8b7e66] font-semibold leading-relaxed mb-6">
            Stabilkan harga bahan pangan pokok beras, minyak goreng, dan daging di pasar domestik agar inflasi terjaga dan daya beli rakyat kelas bawah tetap aman.
          </p>

          <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-4 rounded-xl mb-6">
            <div className="flex justify-between text-xs font-bold text-[#5c3c10] mb-2">
              <span>Tingkat Inflasi Sembako:</span>
              <span className="text-rose-700 font-bold">+ 4.8% (Tinggi)</span>
            </div>
            <div className="flex justify-between text-xs font-bold text-[#5c3c10]">
              <span>Kas Anggaran Negara:</span>
              <span>{anggaran.toLocaleString("id-ID")}</span>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center gap-2 text-sm text-[#5c3c10] mb-6">
              <Loader2 className="h-4 w-4 animate-spin" />
              Memuat data harga negara...
            </div>
          ) : null}

          {error ? <p className="text-sm text-rose-700 mb-4">{error}</p> : null}

          <div className="space-y-4 mb-6">
            {priceEntries.length === 0 ? (
              <p className="text-sm text-[#8b7e66]">Belum ada data harga yang tersedia untuk negara ini.</p>
            ) : (
              priceEntries.map(([key, value]) => (
                <div key={key} className="bg-white/70 border border-[#C4B49C]/30 rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-sm font-black text-[#5c3c10] uppercase">{key.replace("harga_", "").replace(/_/g, " ")}</p>
                      <p className="text-xs text-[#8b7e66]">
                        Nilai saat ini: <span className="font-black text-[#5c3c10]">{Number(value).toLocaleString("id-ID")}</span>
                      </p>
                    </div>
                  </div>

                  {/* PERBAIKAN: Hapus elemen Input, hanya gunakan tombol opsi */}
                  <div className="flex flex-wrap gap-2">
                    {priceOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => handlePriceChange(key, option)}
                        className={`px-3 py-2 rounded-lg border text-xs font-black uppercase transition cursor-pointer ${
                          value === option
                            ? "bg-[#5c3c10] text-[#FAF6EE] border-[#5c3c10] shadow-sm"
                            : "bg-[#FAF6EE] text-[#5c3c10] border-[#C4B49C] hover:bg-[#e4dac3]"
                        }`}
                      >
                        {option.toLocaleString("id-ID")}
                      </button>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>

          <button
            onClick={handleSubsidize}
            className="w-full py-3 rounded-xl bg-gradient-to-b from-[#ffe07d] via-[#fcae1e] to-[#c77a00] text-[#5c3c10] border-2 border-[#1e2f3d]/15 shadow-sm text-xs font-black uppercase cursor-pointer"
          >
            Sponsori Subsidi Pasar (20.000.000 EM)
          </button>
        </div>
      </div>
    </div>
  );
}