"use client"

import { useState, useEffect } from "react";
import {
  Star, Wallet, Wrench, Shield, Globe, Landmark, LayoutGrid, ChevronLeft,
  Hammer, Swords as MilitaryIcon, Users2, BarChart3, TrendingUp,
  ArrowRightLeft, FileText, CreditCard, Zap, Package, Home, ShieldAlert, Gem, Tag, Smile, Eye, HeartHandshake, HandHelping, Handshake,
  Droplet, Activity, Bolt, Radiation
} from "lucide-react";

interface BottomNavProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export default function BottomNav({ activeMenu, setActiveMenu }: BottomNavProps) {
  const [isTemporarilyHidden, setIsTemporarilyHidden] = useState(false);

  useEffect(() => {
    const handleHide = () => setIsTemporarilyHidden(true);
    const handleShow = () => setIsTemporarilyHidden(false);
    
    window.addEventListener('hide_strategy_modal', handleHide);
    window.addEventListener('show_strategy_modal', handleShow);
    
    return () => {
      window.removeEventListener('hide_strategy_modal', handleHide);
      window.removeEventListener('show_strategy_modal', handleShow);
    };
  }, []);

  const menuItems = [
    { id: "Kepuasan", icon: Smile, label: "Kepuasan" },
    { id: "Populasi", icon: Users2, label: "Populasi" },
    { id: "ProduksiKonsumsi", label: "Produksi & Konsumsi", icon: Activity },
    { id: "Ekonomi", icon: Wallet, label: "Ekonomi" },
    { id: "Pembangunan", icon: Wrench, label: "Pembangunan" },
    { id: "Pertahanan", icon: Shield, label: "Pertahanan" },
    { id: "Geopolitik", icon: Globe, label: "Geopolitik" },
    { id: "Sosial & Budaya", icon: Star, label: "Sosial & Budaya" },
    { id: "Kementerian", icon: Landmark, label: "Kementerian" },
  ];

  const subMenuItems: Record<string, any> = {
    "Kepuasan": [
      { id: "Dashboard:Kepuasan", label: "Statistik Kepuasan", icon: BarChart3 },
      { id: "Action:NaikkanKepuasan", label: "Naikkan Kepuasan", icon: TrendingUp },
    ],
    "Populasi": [
      { id: "Dashboard:Populasi", label: "Statistik Populasi", icon: Users2 },
    ],
    "Ekonomi": [
      { id: "Menu:Perdagangan", label: "Perdagangan", icon: ArrowRightLeft },
      { id: "Menu:Pajak", label: "Manajemen Pajak", icon: FileText },
      { id: "Menu:Hutang", label: "Pinjaman & Hutang", icon: CreditCard },
      { id: "Menu:Budget", label: "Pemasukkan & Pengeluaran", icon: BarChart3 },
      { id: "Menu:Harga", label: "Kontrol Harga Rakyat", icon: Tag },
    ],
    "Pembangunan": [
      { id: "Menu:Produksi", label: "Produksi", icon: Hammer },
      { id: "Menu:ProduksiMiliter", label: "Produksi Militer", icon: MilitaryIcon },
      { id: "Menu:TempatUmum", label: "Tempat Umum", icon: Users2 },
    ],
    "ProduksiKonsumsi": [
      { id: "Menu:Kelistrikan", label: "Grid Nasional", icon: Bolt },
      { id: "Menu:Perminyakan", label: "Perminyakan", icon: Droplet },
      { id: "Menu:Uranium", label: "Uranium", icon: Radiation },
    ],
    "Pertahanan": [
      { id: "Komando Pertahanan", label: "Komando Pertahanan", icon: Shield },
      { id: "Menu:Intelijen", label: "Intelijen", icon: Eye },
      { id: "Menu:ArmadaMiliter", label: "Armada Militer", icon: MilitaryIcon },
      { id: "Menu:ArmadaPolisi", label: "Armada Polisi", icon: ShieldAlert },
      { id: "Menu:ManajemenPertahanan", label: "Manajemen Pertahanan", icon: Shield },
    ],
    "Geopolitik": [
      { id: "Menu:PBB", label: "PBB", icon: Globe },
      { id: "Menu:Diplomasi", label: "Diplomasi", icon: Handshake },
      { id: "Menu:KedutaanBesar", label: "Kedutaan Besar", icon: Landmark },
      { id: "Menu:OrganisasiInternasional", label: "Organisasi Internasional", icon: Landmark },
      { id: "Menu:TingkatHubungan", label: "Tingkat Hubungan", icon: HeartHandshake },
      { id: "Menu:Bantuan", label: "Bantuan", icon: HandHelping },
    ],
    "Sosial & Budaya": [
      { id: "Menu:Agama", label: "Agama & Kepercayaan", icon: Star },
      { id: "Menu:Ideologi", label: "Ideologi Negara", icon: Shield },
    ],
    "Kementerian": [
      { id: "Dashboard:Kementerian", label: "Kementerian", icon: Landmark },
    ],
  };

  const [activeTab, setActiveTab] = useState<string | null>(null);

  // Sync activeTab with activeMenu for external changes
  useEffect(() => {
    if (activeMenu === "Peta Taktis") {
      // Do nothing, allow manual reset via Grid Icon click
    } else {
      // Check if activeMenu is a group itself (Step Back state)
      if (subMenuItems[activeMenu]) {
        setActiveTab(activeMenu);
      } else {
        // Check if activeMenu is a sub-item
        for (const [mainId, subs] of Object.entries(subMenuItems)) {
          if (subs.some((s: any) => s.id === activeMenu)) {
            setActiveTab(mainId);
            break;
          }
        }
      }
    }
  }, [activeMenu]);

  const handleMainClick = (id: string) => {
    if (activeTab === id) {
      setActiveTab(null);
      setActiveMenu("Peta Taktis");
    } else {
      setActiveTab(id);
      setActiveMenu(id);
    }
  };

  const handleFullReset = () => {
    setActiveTab(null);
    setActiveMenu("Peta Taktis");
  };

  const isMenuSelected = activeTab !== null;
  const currentSubItems = activeTab ? subMenuItems[activeTab] : [];

  if (isTemporarilyHidden) return null;

  // Modals checking (optional - from user snippet)
  const isOtherModalOpen = activeMenu.startsWith("CountryModal:") || activeMenu.startsWith("Menu:") || activeMenu.startsWith("Dashboard:");

  return (
    <div className={`fixed bottom-12 left-1/2 -translate-x-1/2 w-max max-w-[95vw] transition-all duration-500 ${
      isOtherModalOpen ? 'z-0 opacity-50' : 'z-[100] opacity-100'
    }`}>
      <nav className={`flex items-center gap-2 bg-zinc-950/90 backdrop-blur-xl px-2.5 py-2 rounded-2xl border border-zinc-800/80 shadow-2xl transition-all duration-500 ease-in-out ${isMenuSelected ? 'min-w-[320px]' : ''}`}>

        {/* Main Navigation Section */}
        <div className="flex items-center gap-2">
          {(isMenuSelected
            ? [{ id: "Peta Taktis", icon: LayoutGrid, label: "Peta Taktis" }, menuItems.find(item => item.id === activeTab)]
            : menuItems
          ).filter(Boolean).map((item: any) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            const isMap = item.id === "Peta Taktis";

            return (
              <div key={item.id} className="group relative" style={{ zIndex: 110 }}>
                <button
                  onClick={() => isMap ? handleFullReset() : handleMainClick(item.id)}
                  className={`px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-2.5 justify-center ${isActive
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg scale-105 min-w-[7rem]"
                    : isMap
                      ? "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                      : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/40"
                    }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? "animate-pulse" : ""}`} />
                  {isActive && (
                    <span className="text-[11px] font-black uppercase tracking-widest whitespace-nowrap animate-in fade-in slide-in-from-left-2 duration-300">
                      {item.label}
                    </span>
                  )}
                </button>
                {!isActive && <Tooltip label={item.label} />}
              </div>
            );
          })}
        </div>

        {/* Vertical Divider */}
        {isMenuSelected && currentSubItems?.length > 0 && (
          <div className="h-8 w-[1px] bg-zinc-800/80 mx-2 animate-in fade-in duration-500" />
        )}

        {/* Sub-Menu Extension Section */}
        {isMenuSelected && currentSubItems?.length > 0 && (
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar max-w-[65vw] py-1">
            {currentSubItems.map((sub: any) => (
              <div key={sub.id} className="group/sub relative">
                <button
                  onClick={() => setActiveMenu(sub.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all group/btn whitespace-nowrap cursor-pointer border ${activeMenu === sub.id
                    ? 'bg-zinc-800 border-cyan-500/50 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.1)]'
                    : 'bg-zinc-900/40 hover:bg-zinc-800/80 border-zinc-800/50 hover:border-zinc-700 text-zinc-400'
                    }`}
                >
                  <sub.icon className={`h-4 w-4 ${activeMenu === sub.id ? 'text-cyan-400' : 'text-zinc-500 group-hover/btn:text-cyan-400'} transition-colors`} />
                  <span className={`text-[11px] font-bold ${activeMenu === sub.id ? 'text-zinc-100' : 'text-zinc-400 group-hover/btn:text-zinc-100'} transition-colors uppercase tracking-tight`}>
                    {sub.label}
                  </span>
                </button>
                <Tooltip label={sub.label} small />
              </div>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}

function Tooltip({ label, small = false }: { label: string, small?: boolean }) {
  return (
    <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 ${small ? 'text-[8.5px]' : 'text-[10px]'} font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap shadow-xl z-[150]`}>
      {label}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-zinc-900"></div>
    </div>
  );
}
