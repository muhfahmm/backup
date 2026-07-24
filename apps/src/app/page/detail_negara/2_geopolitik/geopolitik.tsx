'use client';
import { 
  Sword, 
  Gift, 
  Heart, 
  Flag, 
  Phone, 
  Map 
} from 'lucide-react';

interface GeopolitikProps {
  countryName: string;
}

// Komponen tombol aksi agar kode lebih rapi (Persis sama dengan InformasiUmum)
const ActionButton = ({ icon: Icon, label, onClick }: { icon: any, label: string, onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="bg-white/70 border border-[#C4B49C]/30 rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:shadow-md hover:border-[#5c3c10]/50 transition-all cursor-pointer group h-32"
  >
    <Icon className="h-8 w-8 text-[#5c3c10] group-hover:scale-110 group-hover:text-[#3d2911] transition-transform" />
    <span className="text-xs font-black text-[#5c3c10] uppercase tracking-wider text-center leading-tight">
      {label}
    </span>
  </button>
);

export default function Geopolitik({ countryName }: GeopolitikProps) {
  const handleAction = (action: string) => {
    // Hubungkan dengan logika game atau API Anda di sini
    alert(`Anda memilih tindakan Geopolitik: ${action} untuk negara ${countryName}`);
  };

  return (
    <div className="space-y-6">
      {/* Grid Layout 4-4 (2 baris x 4 kolom pada desktop) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ActionButton icon={Sword} label="Beri Tentara" onClick={() => handleAction("Beri Tentara")} />
        <ActionButton icon={Gift} label="Beri Hadiah" onClick={() => handleAction("Beri Hadiah")} />
        <ActionButton icon={Heart} label="Tingkatkan Hubungan" onClick={() => handleAction("Tingkatkan Hubungan")} />
        <ActionButton icon={Flag} label="Dukung Kemerdekaan" onClick={() => handleAction("Dukung Kemerdekaan")} />
        
        <ActionButton icon={Phone} label="Minta Bantuan" onClick={() => handleAction("Minta Bantuan")} />
        <ActionButton icon={Map} label="Berikan Wilayah" onClick={() => handleAction("Berikan Wilayah")} />
      </div>
    </div>
  );
}