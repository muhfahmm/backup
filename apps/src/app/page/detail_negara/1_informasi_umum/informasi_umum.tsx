'use client';
import { 
  Building2, 
  ShieldOff, 
  ShieldCheck, 
  Handshake, 
  FlaskConical, 
  Sword, 
  Phone, 
  Ban 
} from 'lucide-react';

interface InformasiUmumProps {
  countryName: string;
}

// Komponen tombol aksi agar kode lebih rapi
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

export default function InformasiUmum({ countryName }: InformasiUmumProps) {
  const handleAction = (action: string) => {
    // Di sini Anda bisa menghubungkan dengan logika game atau API di masa depan
    alert(`Anda memilih tindakan: ${action} untuk negara ${countryName}`);
  };

  return (
    <div className="space-y-6">
      {/* Grid Layout 4-4 (2 baris x 4 kolom pada desktop) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ActionButton icon={Building2} label="Bangun Kedutaan" onClick={() => handleAction("Bangun Kedutaan")} />
        <ActionButton icon={ShieldOff} label="Pakta Non Agresi" onClick={() => handleAction("Pakta Non Agresi")} />
        <ActionButton icon={ShieldCheck} label="Aliansi Pertahanan" onClick={() => handleAction("Aliansi Pertahanan")} />
        <ActionButton icon={Handshake} label="Perjanjian Dagang" onClick={() => handleAction("Perjanjian Dagang")} />
        
        <ActionButton icon={FlaskConical} label="Kontrak Penelitian" onClick={() => handleAction("Kontrak Penelitian")} />
        <ActionButton icon={Sword} label="Kirim Pasukan" onClick={() => handleAction("Kirim Pasukan")} />
        <ActionButton icon={Phone} label="Panggil Sekutu" onClick={() => handleAction("Panggil Sekutu")} />
        <ActionButton icon={Ban} label="Berikan Sanksi" onClick={() => handleAction("Berikan Sanksi")} />
      </div>

    </div>
  );
}