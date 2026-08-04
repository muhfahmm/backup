// detail path: c:\EM\apps\src\app\page\navigasi_menu\2_navigasi_bawah\ModalsManager.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { fetchBuildingMetadata } from '../../../../lib/buildingMetadata';

// 1. Kepuasan
import StatistikKepuasanModal from "./1_kepuasan/1_statistik/StatistikKepuasanModal";
import NaikkanKepuasanModal from "./1_kepuasan/2_naikkan_kepuasan/NaikkanKepuasanModal";

// 2. Populasi
import RingkasanPopulasiModal from "./2_populasi/1_ringkasan/RingkasanPopulasiModal";
import StatistikPopulasiModal from "./2_populasi/2_statistik/StatistikPopulasiModal";

// 3. Produksi & Konsumsi
import KelistrikanModal from "./3_produksi_konsumsi/1_grid_nasional/KelistrikanModal";
import IndustriPanganModal from "./3_produksi_konsumsi/2_industri_pangan/IndustriPanganModal";

// 4. Ekonomi
import PerdaganganModal from "./4_ekonomi/1_perdagangan/PerdaganganModal";
import PajakModal from "./4_ekonomi/2_manajemen_pajak/PajakModal";
import HutangModal from "./4_ekonomi/3_peminjaman_hutang/HutangModal";
import PemasukkanPengeluaranModal from "./4_ekonomi/4_pemasukan_pengeluaran/PemasukkanPengeluaranModal";
import PDBModal from "./4_ekonomi/5_pdb_nasional_dunia/PDBModal";
import HargaModal from "./4_ekonomi/6_harga/HargaModal";

// 5. Pembangunan
import ProduksiModal from "./5_pembangunan/1_produksi/ProduksiModal";
import TempatUmumModal from "./5_pembangunan/2_tempat_umum/TempatUmumModal";
import HunianPermukimanModal from "./5_pembangunan/3_hunian/HunianPermukimanModal";

// 6. Pertahanan
import PertahananModal from "./6_pertahanan/PertahananModal";
import IntelijenModal from "./6_pertahanan/IntelijenModal";
import ArmadaMiliterModal from "./6_pertahanan/ArmadaMiliterModal";
import ArmadaPolisiModal from "./6_pertahanan/ArmadaPolisiModal";
import ManajemenPertahananModal from "./6_pertahanan/ManajemenPertahananModal";

// 7. Geopolitik
import PBBModal from "./7_geopolitik/1_PBB/PBBModal";
import KedutaanBesarModal from "./7_geopolitik/KedutaanBesarModal";
import OrgIntlModal from "./7_geopolitik/3_organisasi_internasional/OrgIntlModal";
import TingkatHubunganModal from "./7_geopolitik/TingkatHubunganModal";
import BantuanModal from "./7_geopolitik/BantuanModal";

// 8. Sosial & Budaya
import AgamaModal from "./8_sosial_budaya/agama/AgamaModal";
import IdeologiModal from "./8_sosial_budaya/ideologi/IdeologiModal";

// 9. Kementerian
import KementerianModal from "./9_kementrian/KementerianModal";

interface ModalCountryDetail {
  [key: string]: unknown;
}

interface ModalsManagerProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
  countryDetail: ModalCountryDetail | null;
  setCountryDetail: (detail: ModalCountryDetail | ((prev: ModalCountryDetail) => ModalCountryDetail)) => void;
  selectedCountry: {
    country?: string;
    capital?: string;
    iso?: string;
  } | null;
  currentDate?: Date;
  resetTrigger?: boolean;
  productionDeepLink?: { tab: string; key: string } | null;
  setProductionDeepLink?: (value: { tab: string; key: string } | null) => void;
  onOpenCountryDetail?: (countryName: string) => void;
  onOpenPlayerDetail?: () => void;
}

function ModalsManager({
  activeMenu,
  setActiveMenu,
  countryDetail,
  setCountryDetail,
  selectedCountry,
  currentDate,
  resetTrigger,
  productionDeepLink,
  setProductionDeepLink,
  onOpenCountryDetail,
  onOpenPlayerDetail,
}: ModalsManagerProps) {
  const [metadata, setMetadata] = useState<Record<string, any>>({});
  const [prefetchedAllCountries, setPrefetchedAllCountries] = useState<any[] | null>(null);

  useEffect(() => {
    fetchBuildingMetadata()
      .then((data) => setMetadata(data || {}))
      .catch((err) => console.error('ModalsManager: failed to load building metadata', err));
    // Prefetch full country dataset for modals that need global lists (e.g., Kelistrikan)
    (async () => {
      try {
        const res = await fetch('/api/country-data?all=true', { cache: 'no-store' });
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) setPrefetchedAllCountries(data);
      } catch (e) {
        console.warn('ModalsManager: failed to prefetch all countries', e);
      }
    })();
  }, []);

  // Jika tidak ada negara yang dipilih, jangan render apapun
  if (!selectedCountry) return null;

  // Fungsi penutup modal yang seragam
  const onClose = () => setActiveMenu("Peta Taktis");

  // Render modal yang sesuai berdasarkan activeMenu
  switch (activeMenu) {
    // 1. Kepuasan
    case "Dashboard:Kepuasan":
      return (
        <StatistikKepuasanModal
          isOpen={true}
          onClose={onClose}
          setActiveMenu={setActiveMenu}
          countryDetail={countryDetail}
          selectedCountry={selectedCountry}
        />
      );
    case "Action:NaikkanKepuasan":
      return (
        <NaikkanKepuasanModal
          isOpen={true}
          onClose={onClose}
          setActiveMenu={setActiveMenu}
          countryDetail={countryDetail}
          setCountryDetail={setCountryDetail}
          selectedCountry={selectedCountry}
        />
      );
    // 2. Populasi
    case "Dashboard:Populasi:Overview":
      return (
        <RingkasanPopulasiModal
          isOpen={true}
          onClose={onClose}
          setActiveMenu={setActiveMenu}
          countryDetail={countryDetail}
          selectedCountry={selectedCountry}
        />
      );
    case "Dashboard:Populasi":
      return (
        <StatistikPopulasiModal
          isOpen={true}
          onClose={onClose}
          setActiveMenu={setActiveMenu}
          countryDetail={countryDetail}
          selectedCountry={selectedCountry}
        />
      );

    // 3. Produksi & Konsumsi
    case "Menu:Kelistrikan":
      return (
        <KelistrikanModal
          isOpen={true}
          onClose={onClose}
          countryDetail={countryDetail}
          setCountryDetail={setCountryDetail}
          metadata={metadata}
          prefetchedAllCountries={prefetchedAllCountries || undefined}
        />
      );
    case "Menu:IndustriPangan":
      return (
        <IndustriPanganModal
          isOpen={true}
          onClose={onClose}
          countryDetail={countryDetail}
          setCountryDetail={setCountryDetail}
          metadata={metadata}
          onGotoProduction={(tab, key) => {
            setActiveMenu("Menu:Produksi");
            setProductionDeepLink?.({ tab, key });
          }}
          prefetchedAllCountries={prefetchedAllCountries || undefined}
        />
      );

    // 4. Ekonomi
    case "Menu:Perdagangan":
      return (
        <PerdaganganModal
          isOpen={true}
          onClose={onClose}
          countryDetail={countryDetail}
          setCountryDetail={setCountryDetail}
          currentDate={currentDate}
          resetTrigger={resetTrigger}
        />
      );
    case "Menu:Pajak":
      return (
        <PajakModal
          isOpen={true}
          onClose={onClose}
          countryDetail={countryDetail}
          setCountryDetail={setCountryDetail}
        />
      );
    case "Menu:Hutang":
      return (
        <HutangModal
          isOpen={true}
          onClose={onClose}
          countryDetail={countryDetail}
          setCountryDetail={setCountryDetail}
          currentDate={currentDate}
          resetTrigger={resetTrigger}
        />
      );
    case "Menu:Budget":
      return (
        <PemasukkanPengeluaranModal
          isOpen={true}
          onClose={onClose}
          countryDetail={countryDetail}
          selectedCountry={selectedCountry}
          onGotoPajak={() => setActiveMenu("Menu:Pajak")}
          onGotoProduction={(tab, key) => {
            setActiveMenu("Menu:Produksi");
            setProductionDeepLink?.({ tab, key });
          }}
        />
      );
    case "Menu:PDB":
      return (
        <PDBModal
          isOpen={true}
          onClose={onClose}
          countryDetail={countryDetail}
          selectedCountry={selectedCountry}
        />
      );
    case "Menu:Harga":
      return (
        <HargaModal
          isOpen={true}
          onClose={onClose}
          countryDetail={countryDetail}
          setCountryDetail={setCountryDetail}
        />
      );

    // 5. Pembangunan
    case "Menu:Produksi":
      return (
        <ProduksiModal
          isOpen={true}
          onClose={onClose}
          countryDetail={countryDetail}
          setCountryDetail={setCountryDetail}
          currentDate={currentDate}
          targetTab={productionDeepLink?.tab}
          targetHighlightedKey={productionDeepLink?.key}
          onProductionDeepLinkHandled={() => setProductionDeepLink?.(null)}
        />
      );
    case "Menu:TempatUmum":
      return (
        <TempatUmumModal
          isOpen={true}
          onClose={onClose}
          countryDetail={countryDetail}
          setCountryDetail={setCountryDetail}
          currentDate={currentDate}
          onGotoProduction={(tab, key) => {
            setActiveMenu("Menu:Produksi");
            setProductionDeepLink?.({ tab, key });
          }}
        />
      );
    case "Menu:HunianPermukiman":
      return (
        <HunianPermukimanModal
          isOpen={true}
          onClose={onClose}
          countryDetail={countryDetail}
          setCountryDetail={setCountryDetail}
          currentDate={currentDate}
          onGotoProduction={(tab, key) => {
            setActiveMenu("Menu:Produksi");
            setProductionDeepLink?.({ tab, key });
          }}
        />
      );

    // 6. Pertahanan
    case "Komando Pertahanan":
      return (
        <PertahananModal
          isOpen={true}
          onClose={onClose}
          countryDetail={countryDetail}
          setCountryDetail={setCountryDetail}
        />
      );
    case "Menu:Intelijen":
      return (
        <IntelijenModal
          isOpen={true}
          onClose={onClose}
          countryDetail={countryDetail}
          setCountryDetail={setCountryDetail}
        />
      );
    case "Menu:ArmadaMiliter":
      return (
        <ArmadaMiliterModal
          isOpen={true}
          onClose={onClose}
          countryDetail={countryDetail}
        />
      );
    case "Menu:ArmadaPolisi":
      return (
        <ArmadaPolisiModal
          isOpen={true}
          onClose={onClose}
          countryDetail={countryDetail}
        />
      );
    case "Menu:ManajemenPertahanan":
      return (
        <ManajemenPertahananModal
          isOpen={true}
          onClose={onClose}
          countryDetail={countryDetail}
        />
      );

    // 7. Geopolitik
    case "Menu:PBB":
      return (
        <PBBModal
          isOpen={true}
          onClose={onClose}
          selectedCountry={selectedCountry}
        />
      );
    case "Menu:KedutaanBesar":
      return (
        <KedutaanBesarModal
          isOpen={true}
          onClose={onClose}
          countryDetail={countryDetail}
          setCountryDetail={setCountryDetail}
          onOpenCountryDetail={onOpenCountryDetail}
        />
      );
    case "Menu:OrganisasiInternasional:organisasi_pbb":
      return (
        <OrgIntlModal
          isOpen={true}
          onClose={onClose}
          selectedCountry={selectedCountry}
          onOpenCountryDetail={onOpenCountryDetail}
          onOpenPlayerDetail={onOpenPlayerDetail}
        />
      );
    case "Menu:TingkatHubungan":
      return (
        <TingkatHubunganModal
          isOpen={true}
          onClose={onClose}
          selectedCountry={selectedCountry}
          countryDetail={countryDetail}
        />
      );
    case "Menu:Bantuan":
      return (
        <BantuanModal
          isOpen={true}
          onClose={onClose}
          countryDetail={countryDetail}
          setCountryDetail={setCountryDetail}
        />
      );

    // 8. Sosial & Budaya
    case "Menu:Agama":
      return (
        <AgamaModal
          isOpen={true}
          onClose={onClose}
          countryDetail={countryDetail}
          setCountryDetail={setCountryDetail}
          onOpenDebt={() => setActiveMenu("Menu:Hutang")}
        />
      );
    case "Menu:Ideologi":
      return (
        <IdeologiModal
          isOpen={true}
          onClose={onClose}
          countryDetail={countryDetail}
          setCountryDetail={setCountryDetail}
          onOpenDebt={() => setActiveMenu("Menu:Hutang")}
        />
      );

    // 9. Kementerian
    case "Dashboard:Kementerian":
      return (
        <KementerianModal
          isOpen={true}
          onClose={onClose}
          countryDetail={countryDetail}
          setCountryDetail={setCountryDetail}
          resetTrigger={resetTrigger}
        />
      );

    default:
      // Jika tidak ada menu yang cocok, tidak render apapun
      return null;
  }
}

// Membungkus dengan React.memo untuk menghindari render ulang yang tidak perlu
export default React.memo(ModalsManager);