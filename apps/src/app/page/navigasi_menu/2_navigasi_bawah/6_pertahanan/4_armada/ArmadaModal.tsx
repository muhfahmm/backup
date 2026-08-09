"use client"
import React, { useState, useEffect } from "react";
import { X, ShieldAlert, Swords, Building2, Shield } from "lucide-react";
import ArmadaAktif from "./1_tab_menu/1_armada_aktif";
import InfrastrukturMiliter from "./1_tab_menu/2_infrastruktur_militer";
import ArmadaPolisi from "./1_tab_menu/3_armada_polisi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail: (detail: any) => void;
  onGotoProduction?: (tab: string, key: string) => void;
  currentDate?: string | Date;
}

export default function ArmadaModal({ isOpen, onClose, countryDetail, setCountryDetail, onGotoProduction, currentDate }: ModalProps) {
  const [activeTab, setActiveTab] = useState<'aktif' | 'infrastruktur' | 'polisi'>('aktif');
  const [highlightInfraKey, setHighlightInfraKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const countryName =
    countryDetail?.country ||
    countryDetail?.nama_negara ||
    countryDetail?.name_id ||
    countryDetail?.name_en ||
    "Negara";

  // 🔥 Clear highlight after animation using useEffect
  useEffect(() => {
    if (highlightInfraKey) {
      const timer = setTimeout(() => setHighlightInfraKey(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [highlightInfraKey]);

  // 🔥 Logika: Cek konstruksi/rekrutmen/pembelian selesai dan tambah ke count
  useEffect(() => {
    if (!currentDate || !countryDetail?.ongoingConstructions) return;

    try {
      // Convert currentDate ke format YYYY-MM-DD
      let currentDateStr: string;
      if (currentDate instanceof Date) {
        const y = currentDate.getFullYear();
        const m = String(currentDate.getMonth() + 1).padStart(2, '0');
        const d = String(currentDate.getDate()).padStart(2, '0');
        currentDateStr = `${y}-${m}-${d}`;
      } else {
        currentDateStr = String(currentDate);
      }

      const ongoing = countryDetail.ongoingConstructions || [];
      const [cy, cm, cd] = currentDateStr.split('-').map(Number);
      const currentDateObj = new Date(cy, cm - 1, cd);

      const completed = ongoing.filter((c: any) => {
        if (!c.endDate) return false;
        const [ey, em, ed] = c.endDate.split('-').map(Number);
        const endDate = new Date(ey, em - 1, ed);
        return !isNaN(endDate.getTime()) && endDate.getTime() <= currentDateObj.getTime();
      });

      if (completed.length === 0) return;

      const newDetail = { ...countryDetail };
      const newOngoing = ongoing.filter((c: any) => {
        if (!c.endDate) return true;
        const [ey, em, ed] = c.endDate.split('-').map(Number);
        const endDate = new Date(ey, em - 1, ed);
        return isNaN(endDate.getTime()) || endDate.getTime() > currentDateObj.getTime();
      });

      // Tambah setiap konstruksi/rekrutmen/pembelian yang selesai ke count
      completed.forEach((c: any) => {
        const key = c.buildingKey;
        if (c.type === "recruitment" || c.type === "purchase") {
          const group = c.group || "darat";
          if (!newDetail.armada) newDetail.armada = {};
          if (!newDetail.armada[group]) newDetail.armada[group] = {};
          const currentCount = Number(newDetail.armada[group]?.[key] || 0);
          newDetail.armada[group][key] = currentCount + c.quantity;
        } else {
          newDetail[key] = (Number(newDetail[key]) || 0) + 1;
        }
      });

      newDetail.ongoingConstructions = newOngoing;
      setCountryDetail(newDetail);
    } catch (error) {
      console.error('Error processing completed constructions:', error);
    }
  }, [currentDate, countryDetail?.ongoingConstructions, countryDetail, setCountryDetail]);

  const handleNavigateToInfra = (infraKey: string) => {
    setActiveTab("infrastruktur");
    setHighlightInfraKey(infraKey);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />

        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-rose-700 animate-pulse" />
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Pertahanan & Keamanan</h2>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8b7e66] mt-1">{countryName}</p>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto p-6 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <div className="bg-[#e4dac3]/40 p-1 rounded-xl border border-[#C4B49C]/40 inline-flex mb-6 shadow-sm">
            <button onClick={() => setActiveTab("aktif")} className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${activeTab === "aktif" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20" : "text-[#8b7e66] hover:text-[#5c3c10]"}`}>
              <Swords className="w-4 h-4" /> Armada Aktif
            </button>
            <button onClick={() => setActiveTab("infrastruktur")} className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${activeTab === "infrastruktur" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20" : "text-[#8b7e66] hover:text-[#5c3c10]"}`}>
              <Building2 className="w-4 h-4" /> Infrastruktur
            </button>
            <button onClick={() => setActiveTab("polisi")} className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${activeTab === "polisi" ? "bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20" : "text-[#8b7e66] hover:text-[#5c3c10]"}`}>
              <Shield className="w-4 h-4" /> Armada Polisi
            </button>
          </div>

          <div className="space-y-4">
            {activeTab === "aktif" && <ArmadaAktif countryDetail={countryDetail} setCountryDetail={setCountryDetail} onCapacityFull={handleNavigateToInfra} onGotoProduction={onGotoProduction} currentDate={currentDate} />}
            {activeTab === "infrastruktur" && <InfrastrukturMiliter countryDetail={countryDetail} setCountryDetail={setCountryDetail} highlightKey={highlightInfraKey} onGotoProduction={onGotoProduction} ongoingConstructions={countryDetail?.ongoingConstructions || []} currentDate={currentDate} />}
            {activeTab === "polisi" && <ArmadaPolisi countryDetail={countryDetail} setCountryDetail={setCountryDetail} />}
          </div>
        </div>
      </div>
    </div>
  );
}