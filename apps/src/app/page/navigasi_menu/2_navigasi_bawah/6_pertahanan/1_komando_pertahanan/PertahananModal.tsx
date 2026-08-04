"use client"
import React from "react";
import { 
  X, Shield, Swords, User, Bomb, Globe, Atom, Crosshair
} from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
}

export default function PertahananModal({ isOpen, onClose, countryDetail, setCountryDetail }: ModalProps) {
  if (!isOpen) return null;

  // 🔥 6 Opsi Strategi (Sesuai gambar + 1 tambahan untuk genap 6 kartu)
  const strategicOptions = [
    { id: 1, title: "Serang Negara", icon: Swords, color: "text-rose-700" },
    { id: 2, title: "Spionase", icon: User, color: "text-blue-700" },
    { id: 3, title: "Sabotase", icon: Bomb, color: "text-orange-600" },
    { id: 4, title: "Wilayah yang Direbut", icon: Globe, color: "text-emerald-700" },
    { id: 5, title: "Program Nuklir", icon: Atom, color: "text-yellow-600" },
    { id: 6, title: "Latihan Perang", icon: Crosshair, color: "text-indigo-600" }, // 🔥 Tambahan ke-6
  ];

  const handleStrategyClick = (title: string) => {
    alert(`Anda memilih strategi: ${title}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        
        {/* HEADER MODAL */}
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-rose-700 animate-pulse" />
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Komando Pertahanan Nasional</h2>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* 🔥 BODY MODAL - GRID 3x2 (6 KARTU) TANPA GAMBAR */}
        <div className="flex-1 min-h-0 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar flex items-center justify-center">
          <div className="w-full h-full grid grid-cols-3 gap-6 content-center max-w-4xl mx-auto">
            {strategicOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.id}
                  onClick={() => handleStrategyClick(option.title)}
                  className="group flex flex-col items-center justify-center p-6 bg-white/80 border-2 border-[#C4B49C]/40 rounded-xl shadow-sm hover:shadow-lg hover:border-[#5c3c10] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer h-48"
                >
                  <div className={`p-4 rounded-full ${option.color}/10 border-2 ${option.color}/20 mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-10 h-10 ${option.color}`} />
                  </div>
                  <span className="text-sm font-black text-[#5c3c10] uppercase tracking-wide text-center leading-tight">
                    {option.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}