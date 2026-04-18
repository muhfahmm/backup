'use client';

import React from 'react';
import Link from 'next/link';

export default function UserRoot() {
  return (
    <main className="min-h-screen bg-[#070b14] flex items-center justify-center p-6 font-sans relative overflow-hidden">
      {/* Tactical Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,24,39,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,24,39,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-md w-full text-center space-y-12 relative z-10">
        <div className="space-y-6">
          <div className="w-24 h-24 bg-linear-to-br from-emerald-600 to-emerald-900 rounded-[2.5rem] mx-auto flex items-center justify-center shadow-[0_20px_50px_rgba(16,185,129,0.2)] border border-emerald-500/20 group cursor-pointer">
            <svg className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2 2 2 0 012 2v.627m1.213-9.155a5 5 0 01.904 4.414c-.115.39-.416.748-.735,1.102l-1.42 1.577a7.22 7.22 0 00-1.572 2.302l-.722 1.883" />
            </svg>
          </div>
          <div className="space-y-2">
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">
              President<br /><span className="text-emerald-500">Simulator</span>
            </h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
              <span className="w-1 h-1 rounded-full bg-emerald-500" />
              <p className="text-emerald-500 font-mono text-[9px] font-black tracking-[0.2em] uppercase">Auth: Command-Link v4</p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 px-4">
          <Link 
            href="/pages/pilih-negara"
            className="group relative flex items-center justify-between p-7 bg-[#111827]/60 backdrop-blur-xl border border-white/5 rounded-[2rem] hover:border-emerald-500/50 transition-all shadow-2xl hover:shadow-emerald-500/10 active:scale-[0.98] overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-5 relative z-10">
              <div className="w-14 h-14 bg-[#1e293b] rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-emerald-500 border border-white/5 transition-colors shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-black text-white text-base tracking-tight uppercase italic group-hover:text-emerald-400 transition-colors">Tactical Deployment</h3>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-0.5">Initialize Global View</p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-emerald-500 group-hover:scale-110 transition-all relative z-10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Link>
        </div>

        <footer className="text-[9px] text-slate-600 font-black tracking-[0.4em] uppercase py-8 opacity-40">
          Neural Interface OS v4.5.1
        </footer>
      </div>
    </main>
  );
}
