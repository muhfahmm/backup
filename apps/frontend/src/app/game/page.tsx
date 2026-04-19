'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { MapContainer, MapNavbar, Country } from './index';
import ResourceHUD from './components/ResourceHUD';
import BottomNav from './components/1_navigasi_menu/2_navigasi_bawah/BottomNav';
import MapCategorySelector from './components/1_navigasi_menu/1_navigasi_atas/MapCategorySelector';
import SDADetailModal from './components/1_navigasi_menu/1_navigasi_atas/modals_SDA/SDADetailModal';
import { handleTogglePause, handleSpeedChange, getNextDate } from '../map-system/actions/time/simulation';
import CountryDetailDashboard from '../map-system/components/CountryDetailDashboard';
import StatistikKepuasanModal from './components/1_navigasi_menu/2_navigasi_bawah/1_kepuasan/1_statistik_kepuasan/StatistikKepuasanModal';
import NaikkanKepuasanModal from './components/1_navigasi_menu/2_navigasi_bawah/1_kepuasan/2_naikkan_kepuasan/NaikkanKepuasanModal';
import StatistikPopulasiModal from './components/1_navigasi_menu/2_navigasi_bawah/2_sosial/1_data_sosial/StatistikPopulasiModal';
import AgamaModal from './components/1_navigasi_menu/2_navigasi_bawah/2_sosial/3_agama/AgamaModal';
import IdeologiModal from './components/1_navigasi_menu/2_navigasi_bawah/2_sosial/4_ideologi/IdeologiModal';
import LaporanEkonomiModal from './components/1_navigasi_menu/2_navigasi_bawah/4_ekonomi/1_laporan_ekonomi/LaporanEkonomiModal';
import StimulusFiskalModal from './components/1_navigasi_menu/2_navigasi_bawah/4_ekonomi/2_stimulus_fiskal/StimulusFiskalModal';
import PerdaganganModal from './components/1_navigasi_menu/2_navigasi_bawah/4_ekonomi/3_perdagangan/PerdaganganModal';
import HargaModal from './components/1_navigasi_menu/2_navigasi_bawah/4_ekonomi/4_harga/HargaModal';
import ProyekStrategisModal from './components/1_navigasi_menu/2_navigasi_bawah/5_infrastruktur/1_proyek_strategis/ProyekStrategisModal';
import PembangunanBaruModal from './components/1_navigasi_menu/2_navigasi_bawah/5_infrastruktur/2_pembangunan_baru/PembangunanBaruModal';
import ProduksiMiliterModal from './components/1_navigasi_menu/2_navigasi_bawah/5_infrastruktur/3_produksi_militer/ProduksiMiliterModal';
import KelistrikanModal from './components/1_navigasi_menu/2_navigasi_bawah/10_energi/1_kelistrikan/KelistrikanModal';
import PerminyakanModal from './components/1_navigasi_menu/2_navigasi_bawah/10_energi/2_perminyakan/PerminyakanModal';
import UraniumModal from './components/1_navigasi_menu/2_navigasi_bawah/10_energi/3_uranium/UraniumModal';
import KekuatanPatroliModal from './components/1_navigasi_menu/2_navigasi_bawah/6_militer/1_kekuatan_patroli/KekuatanPatroliModal';
import OperasiTaktisModal from './components/1_navigasi_menu/2_navigasi_bawah/6_militer/2_operasi_taktis/OperasiTaktisModal';
import IntelijenModal from './components/1_navigasi_menu/2_navigasi_bawah/6_militer/3_intelijen/IntelijenModal';
import ArmadaPolisiModal from './components/1_navigasi_menu/2_navigasi_bawah/6_militer/4_armada_polisi/ArmadaPolisiModal';
import ManajemenPertahananModal from './components/1_navigasi_menu/2_navigasi_bawah/6_militer/5_manajemen_pertahanan/ManajemenPertahananModal';
import PengaruhGlobalModal from './components/1_navigasi_menu/2_navigasi_bawah/7_geopolitik/1_pengaruh_global/PengaruhGlobalModal';
import DiplomasiAktifModal from './components/1_navigasi_menu/2_navigasi_bawah/7_geopolitik/2_diplomasi_aktif/DiplomasiAktifModal';
import KedutaanModal from './components/1_navigasi_menu/2_navigasi_bawah/7_geopolitik/3_kedutaan/KedutaanModal';
import OrganisasiModal from './components/1_navigasi_menu/2_navigasi_bawah/7_geopolitik/4_organisasi/OrganisasiModal';
import HubunganModal from './components/1_navigasi_menu/2_navigasi_bawah/7_geopolitik/5_hubungan/HubunganModal';
import BantuanModal from './components/1_navigasi_menu/2_navigasi_bawah/7_geopolitik/6_bantuan/BantuanModal';
import CadanganNasionalModal from './components/1_navigasi_menu/2_navigasi_bawah/8_sumber_daya/1_cadangan_nasional/CadanganNasionalModal';
import EksplorasiProduksiModal from './components/1_navigasi_menu/2_navigasi_bawah/8_sumber_daya/2_eksplorasi_produksi/EksplorasiProduksiModal';
import PemerintahanPusatModal from './components/1_navigasi_menu/2_navigasi_bawah/9_kementrian/1_pemerintahan_pusat/PemerintahanPusatModal';
import AnggaranKabinetModal from './components/1_navigasi_menu/2_navigasi_bawah/9_kementrian/2_anggaran_kabinet/AnggaranKabinetModal';

export default function MainPagesSimulation() {
  const searchParams = useSearchParams();
  const idRaw = searchParams.get('id') || '';
  const idParts = idRaw.split('/');
  const countryId = idParts[0];
  const modeSlug = idParts[1];
  const fullPath = idParts.slice(1).join('/');
  
  // Mapping between internal state and URL slugs
  const slugToMode: Record<string, 'default' | 'sda' | 'hubungan' | 'trade'> = {
    'peta_utama': 'default',
    'sda': 'sda',
    'hubungan': 'hubungan',
    'perdagangan': 'trade'
  };

  const modeToSlug: Record<string, string> = {
    'default': 'peta_utama',
    'sda': 'sda',
    'hubungan': 'hubungan',
    'trade': 'perdagangan'
  };

  // Mapping internal menu IDs to URL paths (Indonesian)
  const menuToPath: Record<string, string> = {
    // First Level Path (Categories)
    'Kepuasan': 'kepuasan',
    'Populasi': 'populasi',
    'ProduksiKonsumsi': 'energi',
    'Ekonomi': 'ekonomi',
    'Pembangunan': 'pembangunan',
    'Pertahanan': 'militer',
    'Geopolitik': 'geopolitik',
    'Sosial & Budaya': 'sosial',
    'Kementerian': 'kementrian',

    // Second Level Path (Detailed Modals)
    'Dashboard:Kepuasan': 'kepuasan/statistik_kepuasan',
    'Action:NaikkanKepuasan': 'kepuasan/naikkan_kepuasan',
    'Dashboard:Populasi': 'populasi/statistik_populasi',
    'Menu:Agama': 'sosial/agama',
    'Menu:Ideologi': 'sosial/ideologi',
    'Menu:Pajak': 'ekonomi/pajak_dan_laporan',
    'Menu:Hutang': 'ekonomi/hutang_dan_stimulus',
    'Menu:Perdagangan': 'ekonomi/perdagangan',
    'Menu:Harga': 'ekonomi/kontrol_harga',
    'Menu:Budget': 'ekonomi/anggaran_nasional',
    'Menu:Produksi': 'infrastruktur/proyek_strategis',
    'Menu:TempatUmum': 'infrastruktur/pembangunan_umum',
    'Menu:ProduksiMiliter': 'infrastruktur/produksi_militer',
    'Menu:Kelistrikan': 'energi/grid_nasional',
    'Menu:Perminyakan': 'energi/perminyakan',
    'Menu:Uranium': 'energi/uranium',
    'Komando Pertahanan': 'militer/kekuatan_patroli',
    'Menu:ArmadaMiliter': 'militer/operasi_taktis',
    'Menu:Intelijen': 'militer/intelijen_pusat',
    'Menu:ArmadaPolisi': 'militer/armada_polisi',
    'Menu:ManajemenPertahanan': 'militer/manajemen_pertahanan',
    'Menu:PBB': 'geopolitik/pbb',
    'Menu:Diplomasi': 'geopolitik/diplomasi_aktif',
    'Menu:KedutaanBesar': 'geopolitik/kedutaan_besar',
    'Menu:OrganisasiInternasional': 'geopolitik/organisasi_internasional',
    'Menu:TingkatHubungan': 'geopolitik/tingkat_hubungan',
    'Menu:Bantuan': 'geopolitik/bantuan_luar_negeri',
    'Dashboard:Kementerian': 'kementrian/pemerintahan_pusat',
  };

  // Reverse mapping for initial load
  const pathToMenu: Record<string, string> = Object.fromEntries(
    Object.entries(menuToPath).map(([k, v]) => [v, k])
  );

  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [resources, setResources] = useState<any | null>(null);
  const [worldRelations, setWorldRelations] = useState<any[]>([]);
  const [isLoadingResources, setIsLoadingResources] = useState(false);

  // Parse initial menu from URL
  const initialMenu = fullPath && pathToMenu[fullPath] ? pathToMenu[fullPath] : 'Peta Taktis';
  
  const [activeMenu, setActiveMenu] = useState(initialMenu);
  const [mapMode, setMapMode] = useState<'default' | 'sda' | 'hubungan' | 'trade'>(
    (modeSlug && slugToMode[modeSlug]) || 'default'
  );
  const [tacticalSelectedCountry, setTacticalSelectedCountry] = useState<string | null>(null);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  // Sync URL when mapMode or activeMenu changes
  useEffect(() => {
    if (countryId) {
      let finalSlug = modeToSlug[mapMode];
      
      // If a menu is active, use its path instead of the basic map mode slug
      if (activeMenu !== 'Peta Taktis' && menuToPath[activeMenu]) {
        finalSlug = menuToPath[activeMenu];
      }
      
      const newIdParam = `${countryId}/${finalSlug}`;
      const newUrl = `${window.location.pathname}?id=${newIdParam}`;
      window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl);
    }
  }, [mapMode, countryId, activeMenu]);

  const getEngineMode = () => {
    switch (mapMode) {
        case 'sda': return 'RESOURCE';
        case 'hubungan': return 'RELATION';
        case 'trade': return 'TRADE';
        default: return 'MAIN';
    }
  };

  const [stats, setStats] = useState({
    satisfaction: 50,
    stability: 50
  });

  const [simState, setSimState] = useState({
    isPaused: true,
    speed: 1,
    date: '01-01-2026'
  });

  // Simulation Clock Tick Logic
  useEffect(() => {
    let interval: any = null;
    
    if (!simState.isPaused) {
      // 1x = 1000ms, 2x = 500ms, 3x = 250ms
      const tickRate = 1000 / simState.speed;
      
      interval = setInterval(() => {
        setSimState(prev => ({
          ...prev,
          date: getNextDate(prev.date)
        }));
      }, tickRate);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [simState.isPaused, simState.speed]);

  useEffect(() => {
    if (countryId) {
      fetch('/api/gateway/api/countries')
        .then(res => res.json())
        .then(data => {
          let targetCountry: Country | null = null;

          if (countryId.startsWith('save_')) {
            // Jika ID adalah Save ID, cari nama negara dari localStorage
            try {
              const savedDataRaw = localStorage.getItem('president_simulator_saves');
              if (savedDataRaw) {
                const saves = JSON.parse(savedDataRaw);
                const currentSave = saves.find((s: any) => s.id === countryId);
                if (currentSave) {
                  // Cari negara berdasarkan nama yang tersimpan di save
                  targetCountry = data.find((c: Country) => 
                    c.nama_negara.toLowerCase() === currentSave.country.toLowerCase()
                  );
                }
              }
            } catch (err) {
              console.error('Failed to parse saves from localStorage:', err);
            }
          } else {
            // Jika ID numerik biasa
            targetCountry = data.find((c: Country) => c.id.toString() === countryId);
          }

          if (targetCountry) {
            setSelectedCountry(targetCountry);
          }
        })
        .catch(err => console.error('Failed to fetch country data:', err));
    }
  }, [countryId]);

  // Fetch relations for the selected country
  useEffect(() => {
    if (mapMode === 'hubungan' && selectedCountry) {
      fetch(`/api/gateway/api/relations/${selectedCountry.id}`)
        .then(res => res.json())
        .then(data => setWorldRelations(data))
        .catch(err => console.error('Failed to fetch relations:', err));
    } else if (mapMode !== 'hubungan') {
      setWorldRelations([]); // Clear when not in use
    }
  }, [mapMode, selectedCountry]);

  useEffect(() => {
    // Fetch resources specifically when the Produksi sub-menu is active
    if (activeMenu === 'Menu:Produksi' && selectedCountry && !resources) {
      setIsLoadingResources(true);
      fetch(`/api/gateway/api/resources/${selectedCountry.nama_negara}`)
        .then(res => res.json())
        .then(data => {
          setResources(data);
          setIsLoadingResources(false);
        })
        .catch(err => {
          console.error('Failed to fetch resource data:', err);
          setIsLoadingResources(false);
        });
    }
  }, [activeMenu, selectedCountry, resources]);

  const handleMapCountrySelect = (country: any) => {
    console.log('Map Clicked:', country.nama_negara, 'ID:', country.id);
    console.log('Player Country:', selectedCountry?.nama_negara, 'ID:', selectedCountry?.id);
    
    // Jika user mengklik negaranya sendiri, buka dashboard detail
    // Gunakan perbandingan ID untuk presisi yang lebih tinggi
    if (selectedCountry && String(country.id) === String(selectedCountry.id)) {
      console.log('SUCCESS: Opening Dashboard');
      setIsDashboardOpen(true);
      return;
    }

    if (mapMode === 'sda') {
        setTacticalSelectedCountry(country.nama_negara);
    }
    // Handle other tactical clicks here if needed
  };

  return (
    <main className="fixed inset-0 bg-[#070b14] overflow-hidden">
      {/* Simulation Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.02)_0%,transparent_100%)] pointer-events-none" />
      
      {/* HUD Navbar for Simulation Phase - Hidden when dashboard is open */}
      <div className={`transition-all duration-500 z-50 fixed top-0 left-0 w-full ${isDashboardOpen ? 'opacity-0 pointer-events-none -translate-y-20' : 'opacity-100'}`}>
        <MapNavbar 
          selectedCountry={selectedCountry} 
          isSimulation={true}
          satisfaction={stats.satisfaction}
          stability={stats.stability}
          simDate={simState.date}
          simSpeed={simState.speed}
          isPaused={simState.isPaused}
          onSpeedChange={(speed) => handleSpeedChange(speed, setSimState)}
          onTogglePause={() => handleTogglePause(setSimState)}
        />
      </div>

      <div className="w-full h-full pt-20">
        {/* Map Visualization Selectors - Hidden when dashboard is open */}
        <div className={`transition-all duration-300 ${isDashboardOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <MapCategorySelector currentMode={mapMode} onModeChange={setMapMode} />
        </div>

        {/* Advanced Multi-Level Navigation - Hidden when dashboard is open */}
        <div className={`transition-all duration-500 ${isDashboardOpen ? 'opacity-0 pointer-events-none translate-y-20' : 'opacity-100'}`}>
            <BottomNav activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </div>

        {/* Floating Intelligence Panels - Triggered by Sub-Menus */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-30 w-full max-w-4xl px-8 flex justify-center pointer-events-none">
            {/* Dashboard:Kepuasan has been removed for refactoring */}

            {activeMenu === 'Menu:Produksi' && (
                <motion.div 
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="bg-[#070b14]/90 border border-emerald-500/30 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl w-full max-w-2xl pointer-events-auto"
                >
                    <h3 className="text-emerald-500 font-black text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
                       <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                       Resource Network
                    </h3>
                    <ResourceHUD resources={resources} isLoading={isLoadingResources} />
                </motion.div>
            )}
        </div>
        <MapContainer 
          mode={getEngineMode()} 
          userCountry={selectedCountry?.nama_negara}
          selectedName={selectedCountry?.nama_negara}
          selectedCode={selectedCountry?.kode_negara}
          relations={worldRelations}
          onSelectCountry={handleMapCountrySelect}
          onResetMode={() => setMapMode('default')}
        />

        {/* Dashboard Overlay */}
        <CountryDetailDashboard 
            isOpen={isDashboardOpen} 
            onClose={() => setIsDashboardOpen(false)} 
            country={selectedCountry} 
        />

        {/* Tactical Modals */}
        <StatistikKepuasanModal 
            isOpen={activeMenu === 'Dashboard:Kepuasan'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <NaikkanKepuasanModal 
            isOpen={activeMenu === 'Action:NaikkanKepuasan'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <StatistikPopulasiModal 
            isOpen={activeMenu === 'Dashboard:Populasi'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <AgamaModal 
            isOpen={activeMenu === 'Menu:Agama'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <IdeologiModal 
            isOpen={activeMenu === 'Menu:Ideologi'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <LaporanEkonomiModal 
            isOpen={activeMenu === 'Menu:Pajak'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <StimulusFiskalModal 
            isOpen={activeMenu === 'Menu:Hutang'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <PerdaganganModal 
            isOpen={activeMenu === 'Menu:Perdagangan'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <HargaModal 
            isOpen={activeMenu === 'Menu:Harga'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <ProyekStrategisModal 
            isOpen={activeMenu === 'Menu:Produksi'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <PembangunanBaruModal 
            isOpen={activeMenu === 'Menu:TempatUmum'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <ProduksiMiliterModal 
            isOpen={activeMenu === 'Menu:ProduksiMiliter'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <KelistrikanModal 
            isOpen={activeMenu === 'Menu:Kelistrikan'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <PerminyakanModal 
            isOpen={activeMenu === 'Menu:Perminyakan'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <UraniumModal 
            isOpen={activeMenu === 'Menu:Uranium'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <KekuatanPatroliModal 
            isOpen={activeMenu === 'Komando Pertahanan'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <OperasiTaktisModal 
            isOpen={activeMenu === 'Menu:ArmadaMiliter'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <IntelijenModal 
            isOpen={activeMenu === 'Menu:Intelijen'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <ArmadaPolisiModal 
            isOpen={activeMenu === 'Menu:ArmadaPolisi'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <ManajemenPertahananModal 
            isOpen={activeMenu === 'Menu:ManajemenPertahanan'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <PengaruhGlobalModal 
            isOpen={activeMenu === 'Menu:PBB'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <DiplomasiAktifModal 
            isOpen={activeMenu === 'Menu:Diplomasi'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <KedutaanModal 
            isOpen={activeMenu === 'Menu:KedutaanBesar'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <OrganisasiModal 
            isOpen={activeMenu === 'Menu:OrganisasiInternasional'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <HubunganModal 
            isOpen={activeMenu === 'Menu:TingkatHubungan'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <BantuanModal 
            isOpen={activeMenu === 'Menu:Bantuan'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <CadanganNasionalModal 
            isOpen={activeMenu === '8_sumber_daya'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <EksplorasiProduksiModal 
            isOpen={activeMenu === '2_eksplorasi_produksi'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <PemerintahanPusatModal 
            isOpen={activeMenu === 'Dashboard:Kementerian'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <AnggaranKabinetModal 
            isOpen={activeMenu === 'Menu:Budget'} 
            onClose={() => setActiveMenu('Peta Taktis')} 
        />

        <SDADetailModal 
            countryName={tacticalSelectedCountry} 
            onClose={() => setTacticalSelectedCountry(null)} 
        />

        {/* Global FX */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.6)] vignette-gradient" />
      </div>
    </main>
  );
}
