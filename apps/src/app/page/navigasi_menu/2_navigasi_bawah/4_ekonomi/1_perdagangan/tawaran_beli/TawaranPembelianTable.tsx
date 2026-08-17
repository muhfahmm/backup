"use client"
import React from "react";
import { X } from "lucide-react";
import { PartnerOffer } from "../PerdaganganModal";

import { COUNTRIES_DATA } from "../../../../../map_system/map-data";

interface TawaranPembelianTableProps {
  offers: PartnerOffer[];
  onAcceptOffer: (offer: PartnerOffer) => void;
  onClose: () => void;
  currentDate: Date; // <--- TAMBAHAN: Ambil tanggal simulasi saat ini
}

// Helper formatting
const formatLabel = (key: string) => key.replace(/_/g, " ").replace(/\b\w/g, (ch) => ch.toUpperCase());

const getFlagEmoji = (countryName: string) => {
  const matched = COUNTRIES_DATA.find(c => c.country.toLowerCase().trim() === countryName.toLowerCase().trim());
  if (!matched || !matched.iso) return "";
  const codePoints = matched.iso.toUpperCase().split('').map(c => 127397 + c.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

export default function TawaranPembelianTable({ offers, onAcceptOffer, onClose, currentDate }: TawaranPembelianTableProps) {
  return (
    <div className="mb-8 border-2 border-[#C4B49C]/40 rounded-xl overflow-hidden animate-in fade-in zoom-in duration-300">
      <div className="bg-[#2d6e6e] px-6 py-3 flex justify-between items-center text-[#FAF6EE] text-xs font-black uppercase tracking-wider">
        <span>💡 Tawaran Khusus dari Mitra Dagang</span>
        <button onClick={onClose} className="hover:text-red-300 transition-colors cursor-pointer">
          <X className="h-4 w-4" />
        </button>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="bg-[#e4dac3]/30 border-b border-[#C4B49C]/20">
            <th className="px-4 py-2 text-[10px] font-black text-[#5c3c10] uppercase tracking-wider">Mitra</th>
            <th className="px-4 py-2 text-[10px] font-black text-[#5c3c10] uppercase tracking-wider">Produk</th>
            <th className="px-4 py-2 text-[10px] font-black text-[#5c3c10] uppercase tracking-wider">Kuantitas</th>
            <th className="px-4 py-2 text-[10px] font-black text-[#5c3c10] uppercase tracking-wider">Harga/Unit</th>
            <th className="px-4 py-2 text-[10px] font-black text-[#5c3c10] uppercase tracking-wider">Total Biaya</th>
            <th className="px-4 py-2 text-[10px] font-black text-[#5c3c10] uppercase tracking-wider">Berlaku Hingga</th>
            <th className="px-4 py-2 text-[10px] font-black text-[#5c3c10] uppercase tracking-wider text-center">Aksi</th>
          </tr>
        </thead>
        <tbody className="bg-[#FAF6EE]">
          {offers.length === 0 ? (
            <tr>
              <td colSpan={7} className="px-4 py-8 text-center text-xs text-[#8b7e66] font-semibold">
                Belum ada tawaran masuk saat ini.
              </td>
            </tr>
          ) : (
            offers.map((offer) => {
              // Logika pengecekan apakah tawaran sudah melewati 30 hari
              const offerEndDate = new Date(offer.validUntil);
              const isExpired = currentDate > offerEndDate;

              return (
                <tr key={offer.id} className="border-t border-[#C4B49C]/20">
                  <td className="px-4 py-3 text-xs font-semibold text-[#5c3c10] flex items-center gap-3">
                    {(() => {
                      const matched = COUNTRIES_DATA.find(c => c.country.toLowerCase().trim() === offer.partnerName.toLowerCase().trim());
                      const iso = matched?.iso;
                      if (!iso || iso.length !== 2) {
                        return (
                          <div className="w-8 h-5 rounded-sm bg-[#e4dac3] border border-[#5c3c10]/20 flex-shrink-0 shadow-sm" />
                        );
                      }
                      return (
                        <div className="w-8 h-5 rounded-sm overflow-hidden border border-[#5c3c10]/20 flex-shrink-0 shadow-sm bg-[#e4dac3] relative">
                          <img
                            src={`https://flagcdn.com/w80/${iso.toLowerCase()}.png`}
                            alt={offer.partnerName}
                            className="w-full h-full object-cover absolute inset-0"
                          />
                        </div>
                      );
                    })()}
                    <span>{offer.partnerName}</span>
                  </td>
                  <td className="px-4 py-3 text-xs font-bold text-emerald-700">{formatLabel(offer.productKey)}</td>
                  <td className="px-4 py-3 text-xs font-semibold text-[#5c3c10]">{offer.quantity.toLocaleString()}</td>
                  <td className="px-4 py-3 text-xs text-[#8b7e66]">{offer.pricePerUnit.toLocaleString("id-ID")} EM</td>
                  <td className="px-4 py-3 text-xs font-bold text-[#5c3c10]">{offer.totalPrice.toLocaleString("id-ID")} EM</td>
                  <td className="px-4 py-3 text-[10px] font-semibold">
                    {/* Format Tanggal: 17 Sep 2026 */}
                    <span className={isExpired ? "text-rose-500 line-through" : "text-rose-600"}>
                      {offerEndDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                    {isExpired && <span className="ml-2 text-[9px] text-gray-400 uppercase font-bold">(Kadaluwarsa)</span>}
                  </td>
                  <td className="px-4 py-3 flex justify-center">
                    {!isExpired ? (
                      <button
                        onClick={() => onAcceptOffer(offer)}
                        className="px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-[#FAF6EE] text-[10px] font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                      >
                        Terima
                      </button>
                    ) : (
                      <span className="px-3 py-1.5 rounded bg-gray-200 text-gray-400 text-[10px] font-bold uppercase cursor-not-allowed">
                        Kadaluwarsa
                      </span>
                    )}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}