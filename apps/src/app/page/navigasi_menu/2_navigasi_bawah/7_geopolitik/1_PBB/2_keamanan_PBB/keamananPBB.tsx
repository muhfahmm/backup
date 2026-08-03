"use client"
import React, { useState, useEffect, useRef } from "react";
import { 
  X, Shield, Angry, Smile, Banknote, Anchor, Lock, Package, 
  ChevronDown, Clock 
} from "lucide-react";

interface KeamananPBBProps {
  selectedCountry: any;
}

// 1. Daftar Aksi & Ikon (Sesuai 6 ikon di gambar)
const RESOLUTION_ACTIONS = [
  { id: 'military', icon: Angry, label: 'Invasi Militer', desc: 'Semua tentara bersatu dari semua negara menyerang negara yang dipilih.' },
  { id: 'support', icon: Smile, label: 'Dukung Negara', desc: 'Dukungan kepada negara yang dipilih meningkatkan hubungan diplomatiknya dengan semua negara lain sebesar 10 unit.' },
  { id: 'economic', icon: Banknote, label: 'Blokade Ekonomi', desc: 'Selama periode yang dipilih, produksi pabrik dan tambang berkurang sebesar 50%.' },
  { id: 'naval', icon: Anchor, label: 'Blokade Laut', desc: 'Selama periode yang dipilih, produksi pabrik dan tambang berkurang sebesar 25%.' },
  { id: 'full', icon: Lock, label: 'Blokade Penuh', desc: 'Selama periode yang dipilih, negara ini tidak dapat menandatangani kontrak apa pun atau berdagang.' },
  { id: 'treasure', icon: Package, label: 'Bantuan Logistik', desc: 'Memberikan bantuan sumber daya dan logistik ke negara yang dipilih.' },
];

const DURATION_OPTIONS = ['1 bulan', '3 bulan', '6 bulan', '9 bulan', '1 tahun'];

export default function KeamananPBB({ selectedCountry }: KeamananPBBProps) {
  // State Modal & Accordion
  const [isResolusiModalOpen, setIsResolusiModalOpen] = useState(false);
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);

  // State Pilihan Aksi
  const [selectedType, setSelectedType] = useState<string>("military");
  const [selectedDuration, setSelectedDuration] = useState<string>("1 bulan");
  const [selectedTarget, setSelectedTarget] = useState<any>(null);
  
  // State untuk Dropdown
  const [isDurationOpen, setIsDurationOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  
  const durationRef = useRef<HTMLDivElement>(null);
  const countryRef = useRef<HTMLDivElement>(null);

  // State untuk Data Negara
  const [countries, setCountries] = useState<any[]>([]);
  const [allies, setAllies] = useState<any[]>([]);

  // Daftar Anggota Dewan Keamanan
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

  // ===== LOGIKA DATA NEGARA & HUBUNGAN DAGANG =====
  useEffect(() => {
    setCountries(allCountries);
    
    if (allCountries.length > 0) {
      const userCountryId = selectedCountry?.id || 0;
      const seed = (userCountryId * 31 + 7) % allCountries.length;
      const totalAllies = Math.floor(20 + (seed % 20));
      const alliesList = [];
      const usedIndices = new Set();
      usedIndices.add(userCountryId);
      
      let attempts = 0;
      while (alliesList.length < totalAllies && attempts < 1000) {
        const randomIndex = (seed + attempts * 13) % allCountries.length;
        if (!usedIndices.has(randomIndex)) {
          usedIndices.add(randomIndex);
          alliesList.push(allCountries[randomIndex]);
        }
        attempts++;
      }
      setAllies(alliesList);
    }
  }, [selectedCountry]);

  // ===== UI DROPDOWN CLOSE =====
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

  // ===== HELPER RENDER BENDERA =====
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

  // ===== LOGIKA PERHITUNGAN SUARA =====
  const calculateVotes = () => {
    const totalCountries = countries.length || 15;
    if (!selectedTarget) return { pro: 0, con: totalCountries };
    const isTargetAlly = allies.some(ally => ally.id === selectedTarget.id);
    const proVotes = isTargetAlly ? 1 : allies.length; 
    const conVotes = Math.max(0, totalCountries - proVotes);
    return { pro: proVotes, con: conVotes };
  };

  const voteStats = calculateVotes();

  // ===== LOGIKA SUBMIT =====
  const handleSubmit = () => {
    if (!selectedTarget) {
      alert("Silakan pilih negara target terlebih dahulu!");
      return;
    }
    const activeAction = RESOLUTION_ACTIONS.find(a => a.id === selectedType);
    alert(`Resolusi berhasil diajukan ke Dewan Keamanan!\n\nJenis: ${activeAction?.label}\nDurasi: ${selectedDuration}\nTarget: ${selectedTarget.name}\nPrakiraan Suara: ${voteStats.pro} Setuju, ${voteStats.con} Menentang.`);
    
    setIsResolusiModalOpen(false);
    setSelectedTarget(null);
  };

  return (
    <div className="space-y-6 w-full">
      
      {/* Bagian 1: Keanggotaan Dewan Keamanan */}
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

      {/* Bagian 2: Tombol Buat Resolusi Baru */}
      <div className="bg-white/70 border border-[#C4B49C]/30 p-10 rounded-xl shadow-sm flex flex-col items-center justify-center text-center space-y-4 mt-4">
        <button onClick={() => setIsResolusiModalOpen(true)} className="px-6 py-3 rounded-xl bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/30 text-xs font-black uppercase tracking-wider hover:bg-[#8b7e66] active:scale-95 transition-all cursor-pointer"><Shield className="h-4 w-4 inline mr-2 -mt-0.5" /> Buat Resolusi Baru</button>
      </div>

      {/* 🔥 PERBAIKAN UKURAN MODAL: DIPERBESAR SETARA DENGAN PARENT (max-w-6xl h-[84vh]) */}
      {isResolusiModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-transparent pointer-events-none">
          <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative pointer-events-auto animate-in fade-in zoom-in-95 duration-150">
            
            {/* HEADER MODAL (shrink-0) */}
            <div className="flex items-center justify-between px-8 py-6 border-b-2 border-[#C4B49C]/30 bg-[#FAF6EE] relative z-10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600/10 rounded-xl border border-blue-600/20">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#5c3c10] uppercase tracking-tight">Resolusi Dewan Keamanan</h3>
                  <p className="text-xs text-[#8b7e66] font-bold mt-0.5">Pilih jenis resolusi, durasi, dan negara target.</p>
                </div>
              </div>
              <button onClick={() => setIsResolusiModalOpen(false)} className="p-2 rounded-lg hover:bg-black/5 text-[#8b7e66] hover:text-[#5c3c10] transition-colors cursor-pointer">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* BODY MODAL (flex-1, konten dibatasi di tengah agar tidak terlalu tersebar) */}
            <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 flex flex-col items-center">
              <div className="w-full max-w-4xl space-y-8">
                
                {/* 1. ROW IKON AKSI */}
                <div>
                  <p className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-4 text-center">Jenis Aksi Resolusi</p>
                  <div className="flex flex-wrap justify-center items-center gap-4">
                    {RESOLUTION_ACTIONS.map((action) => {
                      const Icon = action.icon;
                      const isActive = selectedType === action.id;
                      return (
                        <button
                          key={action.id}
                          onClick={() => setSelectedType(action.id)}
                          className={`p-3 rounded-xl border-2 transition-all cursor-pointer flex flex-col items-center justify-center w-16 h-16 group ${
                            isActive
                              ? 'border-[#367d7a] bg-[#367d7a]/10 shadow-sm text-[#367d7a]'
                              : 'border-transparent text-[#8b7e66] hover:border-[#C4B49C]/50 hover:bg-[#e4dac3]/40'
                          }`}
                          title={action.label}
                        >
                          <Icon className={`w-6 h-6 ${isActive ? 'fill-[#367d7a]/20' : ''}`} />
                          <span className="text-[8px] font-bold mt-1 text-center leading-tight">{action.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. JUDUL & DESKRIPSI AKSI */}
                {selectedType && (
                  <div className="text-center">
                    <h3 className="text-2xl font-black text-[#2e261a] uppercase tracking-tight">
                      {RESOLUTION_ACTIONS.find(a => a.id === selectedType)?.label}
                    </h3>
                    <p className="text-sm text-[#8b7e66] mt-2 leading-relaxed max-w-2xl mx-auto">
                      {RESOLUTION_ACTIONS.find(a => a.id === selectedType)?.desc}
                    </p>
                  </div>
                )}

                {/* 3. DROPDOWN DURASI & NEGARA (Layout 2 Kolom) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-2">Pilih durasi:</p>
                    <div className="relative" ref={durationRef}>
                      <button type="button" onClick={() => setIsDurationOpen(!isDurationOpen)} className="w-full flex items-center justify-between gap-3 px-5 py-4 rounded-xl bg-[#367d7a] text-white border border-[#285e5c] shadow-md hover:brightness-110 transition-all cursor-pointer">
                        <span className="text-sm font-bold">{selectedDuration}</span>
                        <div className="flex items-center gap-1"><Clock className="w-4 h-4 text-white/70" /></div>
                      </button>
                      {isDurationOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#C4B49C]/50 rounded-xl shadow-xl z-30 overflow-hidden">
                          {DURATION_OPTIONS.map((dur) => (
                            <button key={dur} onClick={() => { setSelectedDuration(dur); setIsDurationOpen(false); }} className={`w-full px-5 py-3 text-left text-sm font-bold transition-colors cursor-pointer hover:bg-[#e4dac3]/50 ${selectedDuration === dur ? 'bg-[#367d7a]/10 text-[#367d7a]' : 'text-[#5c3c10]'}`}>{dur}</button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-2">Pilih negara target:</p>
                    <div className="relative" ref={countryRef}>
                      <button type="button" onClick={() => setIsCountryOpen(!isCountryOpen)} className="w-full flex items-center justify-between gap-3 px-5 py-4 rounded-xl bg-[#367d7a] text-white border border-[#285e5c] shadow-md hover:brightness-110 transition-all cursor-pointer">
                        <div className="flex items-center gap-3 truncate">
                          {selectedTarget ? (<>{renderFlag(selectedTarget.iso, selectedTarget.name, "sm")}<span className="text-sm font-bold truncate">{selectedTarget.name}</span></>) : (<span className="text-sm font-bold opacity-80">-- Pilih Negara --</span>)}
                        </div>
                        <ChevronDown className={`w-4 h-4 text-white/70 transition-transform ${isCountryOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isCountryOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#C4B49C]/50 rounded-xl shadow-xl z-30 max-h-60 overflow-y-auto custom-scrollbar">
                          {countries.length > 0 ? (countries.map((c) => (<button key={c.id} onClick={() => { setSelectedTarget(c); setIsCountryOpen(false); }} className="w-full flex items-center gap-3 px-5 py-3 hover:bg-[#e4dac3]/50 transition-colors text-left cursor-pointer border-b border-[#C4B49C]/10 last:border-b-0">{renderFlag(c.iso, c.name, "sm")}<span className="text-sm font-bold text-[#5c3c10]">{c.name}</span></button>))) : (<div className="p-4 text-center text-[#8b7e66] text-xs font-bold">Tidak ada data negara.</div>)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* 4. DURASI VOTING */}
                <div className="flex items-center justify-center gap-4">
                  <span className="text-sm font-bold text-[#8b7e66]">Durasi pemungutan suara:</span>
                  <div className="flex items-center gap-2"><span className="text-sm font-bold text-[#5c3c10]">30 h.</span><Clock className="w-4 h-4 text-[#8b7e66]" /></div>
                </div>

                {/* 5. KOTAK PRAKIRAAN SUARA */}
                <div className="p-8 rounded-2xl bg-[#e4dac3]/30 border-2 border-[#C4B49C]/50 shadow-inner">
                  <p className="text-center text-[11px] font-black text-[#8b7e66] uppercase tracking-wider mb-4">Perkiraan Jumlah Suara</p>
                  <div className="flex justify-between items-center px-4 max-w-md mx-auto">
                    <div className="flex flex-col items-center"><span className="text-[12px] font-bold text-emerald-700 uppercase tracking-wider">Setuju</span><span className="text-3xl font-black text-emerald-700">{voteStats.pro}</span></div>
                    <div className="flex flex-col items-center"><span className="text-[12px] font-bold text-rose-700 uppercase tracking-wider">Menentang</span><span className="text-3xl font-black text-rose-700">{voteStats.con}</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER MODAL (shrink-0) */}
            <div className="flex items-center justify-end gap-4 px-8 py-6 border-t-2 border-[#C4B49C]/30 bg-[#FAF6EE] relative z-10 shrink-0">
              <button onClick={() => setIsResolusiModalOpen(false)} className="px-8 py-3 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all font-black text-xs uppercase tracking-wider cursor-pointer">Batal</button>
              <button onClick={handleSubmit} className="px-8 py-3 rounded-xl bg-[#367d7a] text-white font-black text-xs uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer">Tambahkan Resolusi</button>
            </div>

          </div>
        </div>
      )}
      
    </div>
  );
}