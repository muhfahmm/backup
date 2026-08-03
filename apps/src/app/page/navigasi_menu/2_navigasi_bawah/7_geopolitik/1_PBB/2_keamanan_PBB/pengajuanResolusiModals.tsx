"use client"
import React, { useState, useRef, useEffect } from "react";
import { 
  X, Angry, Smile, Banknote, Anchor, Lock, Package, 
  ChevronDown, Clock 
} from "lucide-react";

interface KeamananResolusiModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  countries: any[];
  allies: any[];
}

const RESOLUTION_ACTIONS = [
  { id: 'military', icon: Angry, label: 'Invasi Militer', desc: 'Semua tentara bersatu dari semua negara menyerang negara yang dipilih.' },
  { id: 'support', icon: Smile, label: 'Dukung Negara', desc: 'Dukungan kepada negara yang dipilih meningkatkan hubungan diplomatiknya dengan semua negara lain sebesar 10 unit.' },
  { id: 'economic', icon: Banknote, label: 'Blokade Ekonomi', desc: 'Selama periode yang dipilih, produksi pabrik dan tambang berkurang sebesar 50%.' },
  { id: 'naval', icon: Anchor, label: 'Blokade Laut', desc: 'Selama periode yang dipilih, produksi pabrik dan tambang berkurang sebesar 25%.' },
  { id: 'full', icon: Lock, label: 'Blokade Penuh', desc: 'Selama periode yang dipilih, negara ini tidak dapat menandatangani kontrak apa pun atau berdagang.' },
  { id: 'treasure', icon: Package, label: 'Bantuan Logistik', desc: 'Memberikan bantuan sumber daya dan logistik ke negara yang dipilih.' },
];

const DURATION_OPTIONS = ['1 bulan', '3 bulan', '6 bulan', '9 bulan', '1 tahun'];

const renderFlag = (iso: string | undefined, altName: string, size: "sm" | "md" = "md") => {
  if (!iso || iso.length !== 2) return null;
  const wClass = size === "sm" ? "w-5 h-3.5" : "w-6 h-4";
  return (
    <div className={`${wClass} rounded-sm overflow-hidden border border-[#5c3c10]/20 flex-shrink-0 shadow-sm bg-[#e4dac3] relative flex items-center justify-center`}>
      <img
        src={`https://flagcdn.com/w80/${iso.toLowerCase()}.png`}
        alt={altName}
        className="w-full h-full object-cover absolute inset-0"
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
      />
    </div>
  );
};

export default function KeamananResolusiModal({
  isOpen,
  onClose,
  onSubmit,
  countries,
  allies,
}: KeamananResolusiModalProps) {
  const [selectedType, setSelectedType] = useState<string>("military");
  const [selectedDuration, setSelectedDuration] = useState<string>("1 bulan");
  const [selectedTarget, setSelectedTarget] = useState<any>(null);
  
  const [isDurationOpen, setIsDurationOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  
  const durationRef = useRef<HTMLDivElement>(null);
  const countryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (durationRef.current && !durationRef.current.contains(event.target as Node)) {
        setIsDurationOpen(false);
      }
      if (countryRef.current && !countryRef.current.contains(event.target as Node)) {
        setIsCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isOpen) return null;

  const calculateVotes = () => {
    const totalCountries = countries.length || 15;
    if (!selectedTarget) return { pro: 0, con: totalCountries };
    const isTargetAlly = allies.some(ally => ally.id === selectedTarget.id);
    const proVotes = isTargetAlly ? 1 : allies.length; 
    const conVotes = Math.max(0, totalCountries - proVotes);
    return { pro: proVotes, con: conVotes };
  };

  const voteStats = calculateVotes();

  const handleSubmit = () => {
    if (!selectedTarget) {
      alert("Silakan pilih negara target terlebih dahulu!");
      return;
    }
    const activeAction = RESOLUTION_ACTIONS.find(a => a.id === selectedType);
    onSubmit({ 
      type: activeAction?.label, 
      duration: selectedDuration, 
      target: selectedTarget,
      votes: voteStats 
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/40 pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-[560px] max-h-[90vh] overflow-hidden shadow-2xl flex flex-col relative pointer-events-auto animate-in fade-in zoom-in-95 duration-150 p-6">
        <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-black/5 text-[#8b7e66] hover:text-[#5c3c10] transition-colors cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <div className="flex justify-between items-center gap-2 mt-2 px-1">
          {RESOLUTION_ACTIONS.map((action) => {
            const Icon = action.icon;
            const isActive = selectedType === action.id;
            return (
              <button key={action.id} onClick={() => setSelectedType(action.id)} className={`p-2 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-center w-10 h-10 ${isActive ? 'border-[#367d7a] bg-[#367d7a]/10 shadow-sm text-[#367d7a]' : 'border-transparent text-[#8b7e66] hover:border-[#C4B49C]/50 hover:bg-[#e4dac3]/40'}`} title={action.label}>
                <Icon className={`w-5 h-5 ${isActive ? 'fill-[#367d7a]/20' : ''}`} />
              </button>
            );
          })}
        </div>

        {selectedType && (
          <div className="text-center mt-4 mb-5">
            <h3 className="text-lg font-black text-[#2e261a] uppercase tracking-tight">{RESOLUTION_ACTIONS.find(a => a.id === selectedType)?.label}</h3>
            <p className="text-[11px] text-[#8b7e66] mt-1 leading-relaxed max-w-md mx-auto">{RESOLUTION_ACTIONS.find(a => a.id === selectedType)?.desc}</p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 mt-2">
          <div>
            <p className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-1.5">Pilih durasi:</p>
            <div className="relative" ref={durationRef}>
              <button type="button" onClick={() => setIsDurationOpen(!isDurationOpen)} className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-[#367d7a] text-white border border-[#285e5c] shadow-sm hover:brightness-110 transition-all cursor-pointer">
                <span className="text-[12px] font-bold">{selectedDuration}</span>
                <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-white/70" /></div>
              </button>
              {isDurationOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-[#C4B49C]/50 rounded-lg shadow-xl z-30 overflow-hidden">
                  {DURATION_OPTIONS.map((dur) => (
                    <button key={dur} onClick={() => { setSelectedDuration(dur); setIsDurationOpen(false); }} className={`w-full px-4 py-2 text-left text-[12px] font-bold transition-colors cursor-pointer hover:bg-[#e4dac3]/50 ${selectedDuration === dur ? 'bg-[#367d7a]/10 text-[#367d7a]' : 'text-[#5c3c10]'}`}>{dur}</button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-1.5">Pilih negara:</p>
            <div className="relative" ref={countryRef}>
              <button type="button" onClick={() => setIsCountryOpen(!isCountryOpen)} className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-[#367d7a] text-white border border-[#285e5c] shadow-sm hover:brightness-110 transition-all cursor-pointer">
                <div className="flex items-center gap-2 truncate">
                  {selectedTarget ? (<>{renderFlag(selectedTarget.iso, selectedTarget.name, "sm")}<span className="text-[12px] font-bold truncate">{selectedTarget.name}</span></>) : (<span className="text-[12px] font-bold opacity-80">-- Pilih --</span>)}
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-white/70 transition-transform ${isCountryOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCountryOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-[#C4B49C]/50 rounded-lg shadow-xl z-30 max-h-48 overflow-y-auto custom-scrollbar">
                  {countries.length > 0 ? (countries.map((c) => (<button key={c.id} onClick={() => { setSelectedTarget(c); setIsCountryOpen(false); }} className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#e4dac3]/50 transition-colors text-left cursor-pointer border-b border-[#C4B49C]/10 last:border-b-0">{renderFlag(c.iso, c.name, "sm")}<span className="text-[12px] font-bold text-[#5c3c10]">{c.name}</span></button>))) : (<div className="p-4 text-center text-[#8b7e66] text-xs font-bold">Tidak ada data negara.</div>)}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xs font-bold text-[#8b7e66]">Durasi pemungutan suara:</span>
          <div className="flex items-center gap-2"><span className="text-xs font-bold text-[#5c3c10]">30 h.</span><Clock className="w-4 h-4 text-[#8b7e66]" /></div>
        </div>

        <div className="mt-4 p-5 rounded-xl bg-[#e4dac3]/30 border border-[#C4B49C]/50 shadow-inner">
          <p className="text-center text-[10px] font-black text-[#8b7e66] uppercase tracking-wider mb-3">Perkiraan jumlah suara:</p>
          <div className="flex justify-between items-center px-2 max-w-[320px] mx-auto">
            <div className="flex flex-col items-center"><span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Setuju</span><span className="text-xl font-black text-emerald-700">{voteStats.pro}</span></div>
            <div className="flex flex-col items-center"><span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider">Menentang</span><span className="text-xl font-black text-rose-700">{voteStats.con}</span></div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button onClick={onClose} className="px-8 py-2.5 rounded-lg border-2 border-[#C4B49C] bg-white text-[#8b7e66] font-bold text-xs uppercase tracking-wider hover:bg-[#e4dac3]/50 transition-all cursor-pointer">Batal</button>
          <button onClick={handleSubmit} className="px-8 py-2.5 rounded-lg bg-[#367d7a] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer">Tambahkan</button>
        </div>
      </div>
    </div>
  );
}