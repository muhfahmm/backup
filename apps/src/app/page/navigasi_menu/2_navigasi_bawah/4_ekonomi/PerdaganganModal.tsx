"use client"
import React from "react";
import { X, ArrowRightLeft } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
}

export default function PerdaganganModal({ isOpen, onClose, countryDetail, setCountryDetail }: ModalProps) {
  if (!isOpen) return null;
  const anggaran = countryDetail?.anggaran || 0;

  const handleExport = (amount: number, name: string) => {
    setCountryDetail({
      ...countryDetail,
      anggaran: anggaran + amount
    });
    alert(`Berhasil mengekspor komoditas ${name}! Kas Negara bertambah Rp ${amount.toLocaleString("id-ID")}.`);
  };

  return (
    <div className="fixed inset-0 bg-black/65 z-50 flex items-center justify-center p-4">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                <ArrowRightLeft className="h-6 w-6 text-[#5c3c10]" />
              </div>
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

        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <p className="text-xs text-[#8b7e66] font-semibold leading-relaxed mb-6">
            Kirim surplus komoditas pertambangan dan hasil bumi mentah ke pasar internasional untuk meningkatkan pendapatan anggaran belanja nasional.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { res: "Batubara & Emas", val: 42000000, desc: "Ekspor mineral mentah surplus ke pasar industri baja Asia Timur." },
              { res: "Minyak Kelapa Sawit", val: 28000000, desc: "Permintaan tinggi untuk industri manufaktur kosmetik global." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-4 rounded-xl flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-black text-[#5c3c10] uppercase mb-1">{item.res}</h4>
                  <p className="text-[11px] text-[#8b7e66] font-semibold mb-4 leading-relaxed">{item.desc}</p>
                </div>
                <button
                  onClick={() => handleExport(item.val, item.res)}
                  className="w-full py-2 rounded-lg bg-gradient-to-b from-[#ffe07d] via-[#fcae1e] to-[#c77a00] text-[#5c3c10] border-2 border-[#1e2f3d]/15 text-[10px] font-black uppercase cursor-pointer"
                >
                  Ekspor (Rp {item.val.toLocaleString("id-ID")})
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
