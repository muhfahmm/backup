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
import { useState } from 'react';
import { getEmbassyButtonLabel, getEmbassyButtonClass } from './1_kedutaan_besar/logic/kedutaanBesarLogic';
import DestroyEmbassyModal from './1_kedutaan_besar/logic/DestroyEmbassyModal';
import { getTradeButtonLabel, getTradeButtonClass } from './4_perjanjian_dagang/logic/perjanjianDagangLogic';
import DestroyTradeModal from './4_perjanjian_dagang/logic/DestroyTradeModal';
import PaktaNonAgresiModal from './2_pakta_non_agresi/paktaNonAgresiModals';
import AliansiPertahananModal from './3_aliansi_pertahanan/aliansiPertahananModals';
import KontrakPenelitianModal from './5_kontrak_penelitian/kontrakPenelitianModals';
import KirimPasukanModal from './6_kirim_pasukan/kirimPasukanModals';
import PanggilSekutuModal from './7_panggil_sekutu/panggilSekutuModals';
import BerikanSanksiModal from './8_berikan_sanksi/berikanSanksiModals';

interface InformasiUmumProps {
  countryName: string;
  playerCountryDetail?: any; // data negara pemain (dipassing dari MapPage)
}

// Komponen tombol aksi
const ActionButton = ({ icon: Icon, label, onClick, className, iconClass, labelClass }: { icon: any, label: string, onClick?: () => void, className?: string, iconClass?: string, labelClass?: string }) => (
  <button
    onClick={onClick}
    className={`${className ?? 'bg-white/70 border border-[#C4B49C]/30'} rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:shadow-md hover:border-[#5c3c10]/50 transition-all cursor-pointer group h-32`}
  >
    <Icon className={`h-8 w-8 ${iconClass ?? 'text-[#5c3c10]'} group-hover:scale-110 transition-transform`} />
    <span className={`text-xs font-black ${labelClass ?? 'text-[#5c3c10]'} uppercase tracking-wider text-center leading-tight`}>
      {label}
    </span>
  </button>
);

export default function InformasiUmum({ countryName, playerCountryDetail }: InformasiUmumProps) {
  const [isDestroyModalOpen, setIsDestroyModalOpen] = useState(false);
  const [isDestroyTradeModalOpen, setIsDestroyTradeModalOpen] = useState(false);
  const [isPaktaModalOpen, setIsPaktaModalOpen] = useState(false);
  const [isAliansiModalOpen, setIsAliansiModalOpen] = useState(false);
  const [isKontrakModalOpen, setIsKontrakModalOpen] = useState(false);
  const [isKirimPasukanModalOpen, setIsKirimPasukanModalOpen] = useState(false);
  const [isPanggilSekutuModalOpen, setIsPanggilSekutuModalOpen] = useState(false);
  const [isBerikanSanksiModalOpen, setIsBerikanSanksiModalOpen] = useState(false);

  const handleAction = (action: string) => {
    // Fallback handler if needed; most actions open dedicated modals now.
    console.log(`Aksi dipilih: ${action} untuk negara ${countryName}`);
  };

  const playerCountryName = playerCountryDetail?.country || playerCountryDetail?.nama || playerCountryDetail?.country_name || null;

  const embassyLabel = getEmbassyButtonLabel(countryName, playerCountryName);
  const embassyClass = getEmbassyButtonClass(countryName, playerCountryName);
  const embassyIconClass = embassyLabel === 'Hancurkan Kedutaan' ? 'text-emerald-700' : undefined;
  const embassyLabelClass = embassyLabel === 'Hancurkan Kedutaan' ? 'text-emerald-700' : undefined;

  // PERBAIKAN: Ganti style hijau solid menjadi border hijau modern
  const modernGreenBorderClass = 'border-2 border-emerald-500 bg-transparent text-emerald-700 hover:bg-emerald-50 hover:border-emerald-600';

  const handleEmbassyClick = () => {
    if (embassyLabel === 'Hancurkan Kedutaan') {
      setIsDestroyModalOpen(true);
    } else {
      handleAction('Bangun Kedutaan');
    }
  };

  return (
    <div className="space-y-6">
      {/* Grid Layout 4-4 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* Tombol Kedutaan */}
        <ActionButton 
          icon={Building2} 
          label={embassyLabel} 
          onClick={handleEmbassyClick} 
          className={modernGreenBorderClass} 
        />
        
        <ActionButton icon={ShieldOff} label="Pakta Non Agresi" onClick={() => setIsPaktaModalOpen(true)} />
        <ActionButton icon={ShieldCheck} label="Aliansi Pertahanan" onClick={() => setIsAliansiModalOpen(true)} />
        
        {/* PERBAIKAN: Tombol Perjanjian Dagang diubah menggunakan modernGreenBorderClass yang sama */}
        <ActionButton
          icon={Handshake}
          label={getTradeButtonLabel(countryName, playerCountryName)}
          onClick={() => {
            const label = getTradeButtonLabel(countryName, playerCountryName);
            if (label === 'Putus Hubungan Dagang') {
              setIsDestroyTradeModalOpen(true);
            } else {
              handleAction('Perjanjian Dagang');
            }
          }}
          className={modernGreenBorderClass} // Diubah di sini
          // iconClass dan labelClass dihapus karena modernGreenBorderClass sudah mengatur warnanya
        />
        
        <ActionButton icon={FlaskConical} label="Kontrak Penelitian" onClick={() => setIsKontrakModalOpen(true)} />
        <ActionButton icon={Sword} label="Kirim Pasukan" onClick={() => setIsKirimPasukanModalOpen(true)} />
        <ActionButton icon={Phone} label="Panggil Sekutu" onClick={() => setIsPanggilSekutuModalOpen(true)} />
        <ActionButton icon={Ban} label="Berikan Sanksi" onClick={() => setIsBerikanSanksiModalOpen(true)} />
      </div>

      <DestroyEmbassyModal
        isOpen={isDestroyModalOpen}
        countryName={countryName}
        onClose={() => setIsDestroyModalOpen(false)}
        onConfirm={() => {
          console.log(`Kedutaan di ${countryName} dihancurkan.`);
        }}
      />

      <DestroyTradeModal
        isOpen={isDestroyTradeModalOpen}
        countryName={countryName}
        onClose={() => setIsDestroyTradeModalOpen(false)}
        onConfirm={() => {
          console.log(`Hubungan dagang dengan ${countryName} diputus.`);
        }}
      />

      <PaktaNonAgresiModal
        isOpen={isPaktaModalOpen}
        countryName={countryName}
        onClose={() => setIsPaktaModalOpen(false)}
        onConfirm={() => {
          console.log(`Pakta Non-Agresi dengan ${countryName} dijalin.`);
        }}
      />

      <AliansiPertahananModal
        isOpen={isAliansiModalOpen}
        countryName={countryName}
        onClose={() => setIsAliansiModalOpen(false)}
        onConfirm={() => {
          console.log(`Aliansi Pertahanan dengan ${countryName} diajukan.`);
        }}
      />

      <KontrakPenelitianModal
        isOpen={isKontrakModalOpen}
        countryName={countryName}
        onClose={() => setIsKontrakModalOpen(false)}
        onConfirm={() => {
          console.log(`Kontrak Penelitian dengan ${countryName} dimulai.`);
        }}
      />

      <KirimPasukanModal
        isOpen={isKirimPasukanModalOpen}
        countryName={countryName}
        onClose={() => setIsKirimPasukanModalOpen(false)}
        onConfirm={() => {
          console.log(`Perintah kirim pasukan ke ${countryName} dikonfirmasi.`);
        }}
      />

      <PanggilSekutuModal
        isOpen={isPanggilSekutuModalOpen}
        countryName={countryName}
        onClose={() => setIsPanggilSekutuModalOpen(false)}
        onConfirm={() => {
          console.log(`Sekutu dipanggil terkait ${countryName}.`);
        }}
      />

      <BerikanSanksiModal
        isOpen={isBerikanSanksiModalOpen}
        countryName={countryName}
        onClose={() => setIsBerikanSanksiModalOpen(false)}
        onConfirm={() => {
          console.log(`Sanksi terhadap ${countryName} diterapkan.`);
        }}
      />

    </div>
  );
}