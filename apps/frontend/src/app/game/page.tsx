'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { MapContainer, MapNavbar, Country } from './index';
import ResourceHUD from './components/ResourceHUD';
import BottomNav from './components/1_navigasi_menu/2_navigasi_bawah/BottomNav';
import MapCategorySelector from './components/1_navigasi_menu/1_navigasi_atas/MapCategorySelector';
import SDADetailModal from './components/1_navigasi_menu/1_navigasi_atas/modals_SDA/SDADetailModal';

export default function MainPagesSimulation() {
  const searchParams = useSearchParams();
  const idRaw = searchParams.get('id') || '';
  const [countryId, modeSlug] = idRaw.split('/');
  
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

  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [resources, setResources] = useState<any | null>(null);
  const [worldRelations, setWorldRelations] = useState<any[]>([]);
  const [isLoadingResources, setIsLoadingResources] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Peta Taktis');
  const [mapMode, setMapMode] = useState<'default' | 'sda' | 'hubungan' | 'trade'>(
    (modeSlug && slugToMode[modeSlug]) || 'default'
  );
  const [tacticalSelectedCountry, setTacticalSelectedCountry] = useState<string | null>(null);

  // Sync URL when mapMode changes
  useEffect(() => {
    if (countryId) {
      const currentSlug = modeToSlug[mapMode];
      const newIdParam = `${countryId}/${currentSlug}`;
      const newUrl = `${window.location.pathname}?id=${newIdParam}`;
      window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl);
    }
  }, [mapMode, countryId]);

  const getEngineMode = () => {
    switch (mapMode) {
        case 'sda': return 'RESOURCE';
        case 'hubungan': return 'RELATION';
        case 'trade': return 'TRADE';
        default: return 'MAIN';
    }
  };

  const [stats, setStats] = useState({
    satisfaction: 66,
    stability: 80
  });

  const [simState, setSimState] = useState({
    isPaused: true,
    speed: 1,
    date: '01-01-2026'
  });

  useEffect(() => {
    if (countryId) {
      fetch('/api/gateway/api/countries')
        .then(res => res.json())
        .then(data => {
          const country = data.find((c: Country) => c.id.toString() === countryId);
          if (country) {
            setSelectedCountry(country);
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
    if (mapMode === 'sda') {
        setTacticalSelectedCountry(country.nama_negara);
    }
    // Handle other tactical clicks here if needed
  };

  return (
    <main className="fixed inset-0 bg-[#070b14] overflow-hidden">
      {/* Simulation Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.02)_0%,transparent_100%)] pointer-events-none" />
      
      {/* HUD Navbar for Simulation Phase */}
      <MapNavbar 
        selectedCountry={selectedCountry} 
        isSimulation={true}
        satisfaction={stats.satisfaction}
        stability={stats.stability}
        simDate={simState.date}
        simSpeed={simState.speed}
        isPaused={simState.isPaused}
        onSpeedChange={(speed) => setSimState(prev => ({ ...prev, speed }))}
        onTogglePause={() => setSimState(prev => ({ ...prev, isPaused: !prev.isPaused }))}
      />

      <div className="w-full h-full pt-20">
        {/* Map Visualization Selectors */}
        <MapCategorySelector currentMode={mapMode} onModeChange={setMapMode} />

        {/* Advanced Multi-Level Navigation */}
        <BottomNav activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

        {/* Floating Intelligence Panels - Triggered by Sub-Menus */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-30 w-full max-w-4xl px-8 flex justify-center pointer-events-none">
            {activeMenu === 'Dashboard:Kepuasan' && (
                <motion.div 
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="bg-[#070b14]/90 border border-emerald-500/30 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl w-full max-w-md pointer-events-auto"
                >
                    <div className="flex justify-between items-end mb-6">
                        <div className="flex flex-col">
                            <span className="text-emerald-500/50 font-black text-[10px] uppercase tracking-[0.2em] mb-1">Societal Pulse</span>
                            <h3 className="text-white font-black text-xl uppercase tracking-wider">Kepuasan Rakyat</h3>
                        </div>
                        <span className="text-emerald-400 font-mono text-3xl font-black">{stats.satisfaction}%</span>
                    </div>

                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-8 border border-white/5">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${stats.satisfaction}%` }}
                            className="h-full bg-linear-to-r from-emerald-600 to-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]" 
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                            <span className="text-[9px] font-black uppercase text-white/30 block mb-1">Ideologi Dominan</span>
                            <span className="text-white font-mono text-xs uppercase tracking-tight">{selectedCountry?.ideologi || 'N/A'}</span>
                        </div>
                        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                            <span className="text-[9px] font-black uppercase text-white/30 block mb-1">Afiliasi Religi</span>
                            <span className="text-white font-mono text-xs uppercase tracking-tight">{selectedCountry?.agama || 'N/A'}</span>
                        </div>
                    </div>
                </motion.div>
            )}

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

        {/* Tactical Modals */}
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
