'use client';
import {
  Crosshair,
  Eye,
  Bomb,
  Radiation,
  UserX,
  Phone,
  MessageSquare
} from 'lucide-react';

interface OperasiMiliterProps {
  countryName: string;
}

// Komponen tombol aksi (Persis sama dengan menu lainnya)
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

export default function OperasiMiliter({ countryName }: OperasiMiliterProps) {
  const handleAction = (action: string) => {
    // Ganti alert ini dengan logika game Anda nanti (pengurangan anggaran, deklarasi perang, dll)
    alert(`Anda memilih tindakan Militer: ${action} untuk negara ${countryName}`);
  };

  return (
    <div className="space-y-6">
      {/* Grid Layout 4-4 (2 baris x 4 kolom pada desktop) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ActionButton icon={Crosshair} label="Serang Negara" onClick={() => handleAction("Serang Negara")} />
        <ActionButton icon={Eye} label="Spionase" onClick={() => handleAction("Spionase")} />
        <ActionButton icon={Bomb} label="Sabotase" onClick={() => handleAction("Sabotase")} />
        <ActionButton icon={Radiation} label="Perang Nuklir" onClick={() => handleAction("Perang Nuklir")} />
        
        <ActionButton icon={UserX} label="Lakukan Kudeta" onClick={() => handleAction("Lakukan Kudeta")} />
        <ActionButton icon={Phone} label="Minta Menyerang Negara" onClick={() => handleAction("Minta Menyerang Negara")} />
        <ActionButton icon={MessageSquare} label="Hina" onClick={() => handleAction("Hina")} />
      </div>
    </div>
  );
}