'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, Save, Trophy, Settings, Shield, Globe } from 'lucide-react';

export default function UserRoot() {
  const menuItems = [
    {
      id: 'play',
      label: 'Mulai Permainan',
      subLabel: 'Inisialisasi Teater Operasi Baru',
      icon: Play,
      href: '/pages/pilih-negara',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'hover:border-emerald-500/50',
    },
    {
      id: 'load',
      label: 'Load Game',
      subLabel: 'Pulihkan Sesi Simulasi Terakhir',
      icon: Save,
      href: '/pages/load-game',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'hover:border-blue-400/50',
    },
    {
      id: 'achievements',
      label: 'Pencapaian',
      subLabel: 'Daftar Penghargaan Strategis',
      icon: Trophy,
      href: '#',
      color: 'text-amber-400',
      bgColor: 'bg-amber-400/10',
      borderColor: 'hover:border-amber-400/50',
    },
    {
      id: 'settings',
      label: 'Pengaturan',
      subLabel: 'Kalibrasi Neural OS v4.5.1',
      icon: Settings,
      href: '#',
      color: 'text-slate-400',
      bgColor: 'bg-slate-400/10',
      borderColor: 'hover:border-slate-400/50',
    },
  ];

  return (
    <main className="min-h-screen bg-[#070b14] flex items-center justify-center p-6 font-sans relative overflow-hidden">
      {/* Tactical Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,24,39,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,24,39,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-md w-full text-center space-y-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-6"
        >
          <div className="w-24 h-24 bg-linear-to-br from-emerald-600 to-emerald-900 rounded-[2.5rem] mx-auto flex items-center justify-center shadow-[0_20px_50px_rgba(16,185,129,0.2)] border border-emerald-500/20 group cursor-pointer">
            <Globe className="w-12 h-12 text-white group-hover:rotate-12 transition-transform duration-500" strokeWidth={1.5} />
          </div>
          <div className="space-y-2">
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">
              President<br /><span className="text-emerald-500">Simulator</span>
            </h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
              <Shield className="w-3 h-3 text-emerald-500" />
              <p className="text-emerald-500 font-mono text-[9px] font-black tracking-[0.2em] uppercase text-center">Neural Interface OS v4.5.1</p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4 px-2">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                href={item.href}
                className={`group relative flex items-center justify-between p-5 bg-[#111827]/60 backdrop-blur-xl border border-white/5 rounded-[1.75rem] transition-all shadow-2xl ${item.borderColor} hover:shadow-emerald-500/5 active:scale-[0.98] overflow-hidden`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-linear-to-r from-emerald-500/[0.03] to-transparent`} />
                <div className="flex items-center gap-5 relative z-10">
                  <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center ${item.color} border border-white/5 transition-colors shadow-inner`}>
                    <item.icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-black text-white text-sm tracking-tight uppercase italic group-hover:text-emerald-400 transition-colors">{item.label}</h3>
                    <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mt-0.5">{item.subLabel}</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-emerald-500 group-hover:scale-110 transition-all relative z-10">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <footer className="text-[8px] text-slate-600 font-black tracking-[0.5em] uppercase py-4 opacity-40">
          Command-Link Cryptographic Session Active
        </footer>
      </div>
    </main>
  );
}
