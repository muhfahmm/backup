"use client"
import React, { useState } from "react";
import { Shield, Plus, ChevronDown } from "lucide-react";

// 🔥 PERBAIKAN: JANGAN impor pengajuanResolusiModals di sini. 
// Cukup import komponen induk ini di PBBModal.tsx.
import KeamananResolusiModal from "./pengajuanResolusiModals";

interface KeamananPBBProps {
  selectedCountry: any;
}

export default function KeamananPBB({ selectedCountry }: KeamananPBBProps) {
  const [isResolusiModalOpen, setIsResolusiModalOpen] = useState(false);
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);

  const permanentMembers = [
    { iso: 'us', name: 'Amerika Serikat' },
    { iso: 'gb', name: 'Inggris' },
    { iso: 'fr', name: 'Perancis' },
    { iso: 'ru', name: 'Rusia' },
    { iso: 'cn', name: 'China' },
  ];
  const nonPermanentMembers = [
    { iso: 'br', name: 'Brazil' },
    { iso: 'jp', name: 'Jepang' },
    { iso: 'in', name: 'India' },
    { iso: 'de', name: 'Jerman' },
    { iso: 'za', name: 'Afrika Selatan' },
    { iso: 'eg', name: 'Mesir' },
    { iso: 'mx', name: 'Meksiko' },
    { iso: 'id', name: 'Indonesia' },
    { iso: 'pl', name: 'Polandia' },
    { iso: 'au', name: 'Australia' },
  ];

  const allCountries = [...permanentMembers, ...nonPermanentMembers];
  const alliesList: any[] = [];

  const renderFlag = (iso: string, altName: string) => {
    if (!iso || iso.length !== 2) return null;
    return (
      <div className="w-8 h-5 rounded-sm overflow-hidden border border-[#5c3c10]/20 flex-shrink-0 shadow-sm bg-[#e4dac3] relative flex items-center justify-center mx-auto mb-1">
        <img src={`https://flagcdn.com/w80/${iso.toLowerCase()}.png`} alt={altName} className="w-full h-full object-cover absolute inset-0" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
      </div>
    );
  };

  const handleSubmitResolusi = (data: any) => {
    const { type, duration, target, votes } = data;
    alert(`Resolusi baru berhasil dibuat!\nJenis: ${type}\nDurasi: ${duration}\nTarget: ${target.name}\nPrakiraan Suara: ${votes.pro} Setuju, ${votes.con} Menentang.`);
  };

  return (
    <div className="space-y-6 w-full">
      
      <KeamananResolusiModal
        isOpen={isResolusiModalOpen}
        onClose={() => setIsResolusiModalOpen(false)}
        onSubmit={handleSubmitResolusi}
        countries={allCountries}
        allies={alliesList}
      />

      <div className="bg-white/70 border border-[#C4B49C]/30 rounded-xl shadow-sm overflow-hidden">
        <button onClick={() => setIsMembershipOpen(!isMembershipOpen)} className="w-full flex items-center justify-between px-6 py-4 bg-[#FAF6EE]/80 border-b border-[#C4B49C]/30 cursor-pointer hover:bg-[#e4dac3]/40 transition-colors">
          <div className="flex items-center gap-3"><Shield className="h-5 w-5 text-[#5c3c10]" /><h4 className="text-sm font-black text-[#5c3c10] uppercase">Keanggotaan Dewan Keamanan PBB</h4><div className="flex gap-2 ml-2"><span className="text-[10px] font-bold bg-amber-600/10 text-amber-700 px-2 py-1 rounded-lg border border-amber-600/20">5 Tetap</span><span className="text-[10px] font-bold bg-blue-600/10 text-blue-700 px-2 py-1 rounded-lg border border-blue-600/20">10 Tidak Tetap</span></div></div>
          <ChevronDown className={`h-5 w-5 text-[#5c3c10] transition-transform duration-500 ease-in-out ${isMembershipOpen ? 'rotate-180' : 'rotate-0'}`} />
        </button>
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isMembershipOpen ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-6 bg-white/70 border-t border-[#C4B49C]/20">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-[#FAF6EE]/80 border border-[#C4B49C]/20 rounded-xl p-4 shadow-sm">
                <div className="flex justify-between items-center border-b border-[#C4B49C]/20 pb-2 mb-3"><span className="text-[10px] font-black text-amber-700 uppercase tracking-wider">Anggota Tetap</span><span className="text-[8px] font-black text-rose-600 bg-rose-600/10 px-2 py-0.5 rounded border border-rose-600/20">Hak Veto</span></div>
                <div className="grid grid-cols-2 gap-3">{permanentMembers.map((m) => (<div key={m.iso} className="bg-gradient-to-br from-[#fbf8ef] to-[#f2ebd7] border-2 border-[#c7ab79] p-3 rounded-lg flex flex-col items-center text-center relative shadow-sm"><div className="absolute -top-2 -right-2 bg-amber-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded-lg uppercase tracking-wider shadow-sm">Veto</div>{renderFlag(m.iso, m.name)}<span className="text-[10px] font-black text-[#5c3c10] mt-1 leading-tight">{m.name}</span></div>))}</div>
              </div>
              <div className="flex-1 bg-[#FAF6EE]/80 border border-[#C4B49C]/20 rounded-xl p-4 shadow-sm">
                <div className="border-b border-[#C4B49C]/20 pb-2 mb-3"><span className="text-[10px] font-black text-blue-700 uppercase tracking-wider">Anggota Tidak Tetap</span></div>
                <div className="grid grid-cols-2 gap-3">{nonPermanentMembers.map((m) => (<div key={m.iso} className="bg-white border border-[#C4B49C]/30 p-3 rounded-lg flex flex-col items-center text-center shadow-sm hover:bg-[#e4dac3]/20 transition-colors">{renderFlag(m.iso, m.name)}<span className="text-[10px] font-bold text-[#5c3c10] mt-1 leading-tight">{m.name}</span></div>))}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/70 border border-[#C4B49C]/30 p-8 rounded-xl shadow-sm flex flex-col items-center justify-center text-center space-y-4 mt-4">
        <button onClick={() => setIsResolusiModalOpen(true)} className="px-6 py-3 rounded-xl bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/30 text-xs font-black uppercase tracking-wider hover:bg-[#8b7e66] active:scale-95 transition-all cursor-pointer">
          <Plus className="h-4 w-4 inline mr-2 -mt-0.5" /> Buat Resolusi Baru
        </button>
      </div>

    </div>
  );
}