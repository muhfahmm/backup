// detail path: c:\EM\apps\src\app\page\navigasi_menu\2_navigasi_bawah\ModalsManager.tsx
'use client';

// 1. Kepuasan
import StatistikKepuasanModal from "./1_kepuasan/StatistikKepuasanModal";
import NaikkanKepuasanModal from "./1_kepuasan/NaikkanKepuasanModal";
import TempWisataModal from "./1_kepuasan/TempWisataModal";

// 2. Populasi
import RingkasanPopulasiModal from "./2_populasi/1_ringkasan/RingkasanPopulasiModal";
import StatistikPopulasiModal from "./2_populasi/2_statistik/StatistikPopulasiModal";

// 3. Produksi & Konsumsi
import KelistrikanModal from "./3_produksi_konsumsi/KelistrikanModal";
import PerminyakanModal from "./3_produksi_konsumsi/PerminyakanModal";
import UraniumModal from "./3_produksi_konsumsi/UraniumModal";

// 4. Ekonomi
import PerdaganganModal from "./4_ekonomi/1_perdagangan/PerdaganganModal";
import PajakModal from "./4_ekonomi/2_manajemen_pajak/PajakModal";
import HutangModal from "./4_ekonomi/3_peminjaman_hutang/HutangModal";
import PemasukkanPengeluaranModal from "./4_ekonomi/4_pemasukan_pengeluaran/PemasukkanPengeluaranModal";
import PDBModal from "./4_ekonomi/5_pdb_nasional_dunia/PDBModal";
import HargaModal from "./4_ekonomi/6_harga/HargaModal";

// 5. Pembangunan
import ProduksiModal from "./5_pembangunan/ProduksiModal";
import TempatUmumModal from "./5_pembangunan/TempatUmumModal";
import HunianPermukimanModal from "./5_pembangunan/HunianPermukimanModal";

// 6. Pertahanan
import PertahananModal from "./6_pertahanan/PertahananModal";
import IntelijenModal from "./6_pertahanan/IntelijenModal";
import ArmadaMiliterModal from "./6_pertahanan/ArmadaMiliterModal";
import ArmadaPolisiModal from "./6_pertahanan/ArmadaPolisiModal";
import ManajemenPertahananModal from "./6_pertahanan/ManajemenPertahananModal";

// 7. Geopolitik
import PBBModal from "./7_geopolitik/PBBModal";
import KedutaanBesarModal from "./7_geopolitik/KedutaanBesarModal";
import OrgIntlModal from "./7_geopolitik/OrgIntlModal";
import TingkatHubunganModal from "./7_geopolitik/TingkatHubunganModal";
import BantuanModal from "./7_geopolitik/BantuanModal";

// 8. Sosial & Budaya
import AgamaModal from "./8_sosial_budaya/AgamaModal";
import IdeologiModal from "./8_sosial_budaya/IdeologiModal";

// 9. Kementerian
import KementerianModal from "./9_kementrian/KementerianModal";

interface ModalsManagerProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
  selectedCountry: any;
  currentDate?: Date;
  resetTrigger?: boolean;
}

function ModalsManager({
  activeMenu,
  setActiveMenu,
  countryDetail,
  setCountryDetail,
  selectedCountry,
  currentDate,
  resetTrigger
}: ModalsManagerProps) {
  
  if (!selectedCountry) return null;

  return (
    <>
      {/* 1. Kepuasan */}
      <StatistikKepuasanModal
        isOpen={activeMenu === "Dashboard:Kepuasan"}
        onClose={() => setActiveMenu("Peta Taktis")}
        setActiveMenu={setActiveMenu}
        countryDetail={countryDetail}
        selectedCountry={selectedCountry}
      />
      <NaikkanKepuasanModal
        isOpen={activeMenu === "Action:NaikkanKepuasan"}
        onClose={() => setActiveMenu("Peta Taktis")}
        setActiveMenu={setActiveMenu}
        countryDetail={countryDetail}
        setCountryDetail={setCountryDetail}
        selectedCountry={selectedCountry}
      />
      <TempWisataModal
        isOpen={activeMenu === "Menu:TempWisata"}
        onClose={() => setActiveMenu("Peta Taktis")}
        setActiveMenu={setActiveMenu}
        countryDetail={countryDetail}
        selectedCountry={selectedCountry}
      />

      {/* 2. Populasi */}
      <RingkasanPopulasiModal
        isOpen={activeMenu === "Dashboard:Populasi:Overview"}
        onClose={() => setActiveMenu("Peta Taktis")}
        setActiveMenu={setActiveMenu}
        countryDetail={countryDetail}
        selectedCountry={selectedCountry}
      />
      <StatistikPopulasiModal
        isOpen={activeMenu === "Dashboard:Populasi"}
        onClose={() => setActiveMenu("Peta Taktis")}
        setActiveMenu={setActiveMenu}
        countryDetail={countryDetail}
        selectedCountry={selectedCountry}
      />

      {/* 3. Produksi & Konsumsi */}
      <KelistrikanModal
        isOpen={activeMenu === "Menu:Kelistrikan"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
        setCountryDetail={setCountryDetail}
      />
      <PerminyakanModal
        isOpen={activeMenu === "Menu:Perminyakan"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
        setCountryDetail={setCountryDetail}
      />
      <UraniumModal
        isOpen={activeMenu === "Menu:Uranium"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
        setCountryDetail={setCountryDetail}
      />

      {/* 4. Ekonomi */}
      <PerdaganganModal
        isOpen={activeMenu === "Menu:Perdagangan"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
        setCountryDetail={setCountryDetail}
      />
      <PajakModal
        isOpen={activeMenu === "Menu:Pajak"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
        setCountryDetail={setCountryDetail}
      />
      <HutangModal
        isOpen={activeMenu === "Menu:Hutang"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
        setCountryDetail={setCountryDetail}
      />
      <PemasukkanPengeluaranModal
        isOpen={activeMenu === "Menu:Budget"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
        selectedCountry={selectedCountry}
      />
      <PDBModal
        isOpen={activeMenu === "Menu:PDB"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
        selectedCountry={selectedCountry}
      />
      <HargaModal
        isOpen={activeMenu === "Menu:Harga"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
        setCountryDetail={setCountryDetail}
      />

      {/* 5. Pembangunan */}
      <ProduksiModal
        isOpen={activeMenu === "Menu:Produksi"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
        setCountryDetail={setCountryDetail}
        currentDate={currentDate}
      />
      <TempatUmumModal
        isOpen={activeMenu === "Menu:TempatUmum"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
        setCountryDetail={setCountryDetail}
      />
      <HunianPermukimanModal
        isOpen={activeMenu === "Menu:HunianPermukiman"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
        setCountryDetail={setCountryDetail}
      />

      {/* 6. Pertahanan */}
      <PertahananModal
        isOpen={activeMenu === "Komando Pertahanan"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
        setCountryDetail={setCountryDetail}
      />
      <IntelijenModal
        isOpen={activeMenu === "Menu:Intelijen"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
        setCountryDetail={setCountryDetail}
      />
      <ArmadaMiliterModal
        isOpen={activeMenu === "Menu:ArmadaMiliter"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
      />
      <ArmadaPolisiModal
        isOpen={activeMenu === "Menu:ArmadaPolisi"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
      />
      <ManajemenPertahananModal
        isOpen={activeMenu === "Menu:ManajemenPertahanan"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
      />

      {/* 7. Geopolitik */}
      <PBBModal
        isOpen={activeMenu === "Menu:PBB"}
        onClose={() => setActiveMenu("Peta Taktis")}
        selectedCountry={selectedCountry}
      />
      <KedutaanBesarModal
        isOpen={activeMenu === "Menu:KedutaanBesar"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
        setCountryDetail={setCountryDetail}
      />
      <OrgIntlModal
        isOpen={activeMenu === "Menu:OrganisasiInternasional:organisasi_pbb"}
        onClose={() => setActiveMenu("Peta Taktis")}
        selectedCountry={selectedCountry}
      />
      <TingkatHubunganModal
        isOpen={activeMenu === "Menu:TingkatHubungan"}
        onClose={() => setActiveMenu("Peta Taktis")}
        selectedCountry={selectedCountry}
      />
      <BantuanModal
        isOpen={activeMenu === "Menu:Bantuan"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
        setCountryDetail={setCountryDetail}
      />

      {/* 8. Sosial & Budaya */}
      <AgamaModal
        isOpen={activeMenu === "Menu:Agama"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
      />
      <IdeologiModal
        isOpen={activeMenu === "Menu:Ideologi"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
      />

      {/* 9. Kementerian */}
      <KementerianModal
        isOpen={activeMenu === "Dashboard:Kementerian"}
        onClose={() => setActiveMenu("Peta Taktis")}
        countryDetail={countryDetail}
        setCountryDetail={setCountryDetail}
        resetTrigger={resetTrigger}
      />
    </>
  );
}

export default ModalsManager;
