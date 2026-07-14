"use client"
import React, { useState, useEffect } from "react";
import { X, ChevronDown, Plus, Minus } from "lucide-react";
import { TradePartner } from "../mitra/mitraModalsMenu";
import { fetchBuildingMetadata } from '../../../../../../../lib/buildingMetadata';

interface ModalsKonfirmasiBeliProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (biaya: number, kuantitas: string) => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
  partners: TradePartner[];
  initialKey: string; // Komoditas yang dipilih di langkah 1
}

export default function ModalsKonfirmasiBeli({ 
  isOpen, 
  onClose, 
  onConfirm, 
  countryDetail, 
  setCountryDetail, 
  partners, 
  initialKey 
}: ModalsKonfirmasiBeliProps) {
  const [metadata, setMetadata] = useState<Record<string, any>>({});
  const [selectedProduct, setSelectedProduct] = useState<string>(initialKey);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  // Load metadata
  useEffect(() => {
    if (!isOpen) return;
    fetchBuildingMetadata().then((data) => setMetadata(data || {}));
  }, [isOpen]);

  // Reset state saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      setSelectedProduct(initialKey);
      if (partners.length > 0) setSelectedCountry(partners[0].nama_negara);
      setQuantity(1);
    }
  }, [isOpen, partners, initialKey]);

  if (!isOpen) return null;

  const formatLabel = (key: string) => key.replace(/_/g, " ").replace(/\b\w/g, (ch) => ch.toUpperCase());
  const findMeta = (key: string) => metadata[key] || undefined;

  const currentMeta = findMeta(selectedProduct);
  const unitPrice = currentMeta?.biaya_pembangunan ? Math.round(currentMeta.biaya_pembangunan * 5) : 10000000;
  const totalPrice = unitPrice * quantity;

  const handleConfirm = () => {
    if (countryDetail?.anggaran < totalPrice) {
      alert(`Kas Negara tidak mencukupi! Butuh ${totalPrice.toLocaleString("id-ID")} EM.`);
      return;
    }
    setCountryDetail({ ...countryDetail, anggaran: countryDetail.anggaran - totalPrice });
    onConfirm(totalPrice, `${quantity}x Satuan`);
    alert(`Berhasil membeli ${quantity} ${formatLabel(selectedProduct)} dari ${selectedCountry}.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-[70] flex items-center justify-center p-4">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-md overflow-hidden shadow-2xl flex flex-col relative font-sans pb-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />
        
        {/* Header */}
        <div className="px-5 py-4 flex items-center justify-between relative z-10 border-b border-[#C4B49C]/30">
          <h2 className="text-lg font-bold text-[#5c3c10] tracking-tight uppercase">Konfirmasi Pembelian</h2>
          <button onClick={onClose} className="p-1.5 rounded-full bg-[#4a5f5f] hover:bg-[#3a4f4f] text-white transition-colors cursor-pointer shadow-sm">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 relative z-10 space-y-4">
          {/* Baris 1: Produk & Negara */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[#5c3c10] font-bold text-sm tracking-wide">Produk:</label>
              <div className="relative">
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-3 py-2 rounded-md bg-[#3b7d7d] text-white text-sm font-bold border-none focus:ring-2 focus:ring-[#c77a00] appearance-none"
                >
                  <option value={selectedProduct}>{formatLabel(selectedProduct)}</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#5c3c10] font-bold text-sm tracking-wide">Negara:</label>
              <div className="relative">
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full px-3 py-2 rounded-md bg-[#3b7d7d] text-white text-sm font-bold border-none focus:ring-2 focus:ring-[#c77a00] appearance-none"
                >
                  {partners.map((p) => (
                    <option key={p.id} value={p.nama_negara}>{p.nama_negara}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Baris 2: Kuantitas */}
          <div className="flex items-center justify-between gap-2 pt-2">
            <label className="text-[#5c3c10] font-bold text-sm tracking-wide">Kuantitas:</label>
            <div className="flex items-center gap-1.5">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1.5 rounded bg-[#3b7d7d] text-white hover:bg-[#2e6363] shadow-sm"><Minus className="h-3.5 w-3.5" /></button>
              <input type="number" min={1} value={quantity} onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))} className="w-16 px-2 py-1.5 text-center rounded bg-[#3b7d7d] text-white text-sm font-bold border-none focus:ring-2 focus:ring-[#c77a00]" />
              <button onClick={() => setQuantity(quantity + 1)} className="p-1.5 rounded bg-[#3b7d7d] text-white hover:bg-[#2e6363] shadow-sm"><Plus className="h-3.5 w-3.5" /></button>
              <button onClick={() => setQuantity(quantity + 1000)} className="px-2.5 py-1.5 rounded bg-[#3b7d7d] text-white text-[10px] font-bold hover:bg-[#2e6363] shadow-sm uppercase tracking-wide">+1k</button>
            </div>
          </div>

          {/* Baris 3: Harga */}
          <div className="flex justify-between items-center pt-3 border-t border-[#C4B49C]/20">
            <span className="text-[#5c3c10] font-bold text-sm tracking-wide">Harga:</span>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-black text-[#2e261a]">{totalPrice.toLocaleString("id-ID")}</span>
              <span className="text-[10px] text-[#8b7e66] font-bold mt-0.5">EM</span>
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="flex gap-3 pt-2">
            <button onClick={onClose} className="flex-1 py-2.5 rounded-lg bg-[#c49e6c] hover:bg-[#b08d5d] text-[#FAF6EE] text-xs font-black uppercase tracking-wide shadow-sm">Batal</button>
            <button onClick={handleConfirm} className="flex-1 py-2.5 rounded-lg bg-[#3b7d7d] hover:bg-[#2e6363] text-[#FAF6EE] text-xs font-black uppercase tracking-wide shadow-sm">Beli</button>
          </div>
        </div>
      </div>
    </div>
  );
}