'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Activity, Server, Shield, Cpu, Zap, Globe, HardDrive, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceStatus {
    name: string;
    status: string;
    url: string;
    memory_mb: number;
}

interface SystemMemory {
    used_gb: number;
    total_gb: number;
}

interface HeartbeatData {
    timestamp: string;
    services: ServiceStatus[];
    world_state: string;
    system_memory: SystemMemory;
}

/**
 * Sparkline Component
 * Simple, high-performance SVG line chart for memory trends.
 */
function Sparkline({ data }: { data: number[] }) {
    if (data.length < 2) return <div className="h-6 w-full bg-white/5 rounded animate-pulse" />;

    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const padding = 2;

    const points = data.map((val, i) => {
        const x = (i / (data.length - 1)) * 100;
        const y = 100 - ((val - min) / range) * 100;
        return `${x},${y}`;
    }).join(' ');

    return (
        <div className="h-8 w-full mt-2 relative overflow-hidden rounded-lg">
            <svg viewBox="0 0 100 100" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                    d={`M 0,100 L ${points} L 100,100 Z`}
                    fill="url(#gradient)"
                />
                <motion.polyline
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5 }}
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={points}
                />
            </svg>
        </div>
    );
}

export default function MapServerMonitor() {
    const [data, setData] = useState<HeartbeatData | null>(null);
    const [history, setHistory] = useState<Record<string, number[]>>({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchStatus = async () => {
        try {
            const response = await fetch('http://localhost:8081/api/map/heartbeat');
            if (!response.ok) throw new Error('Server Heartbeat Offline');
            const result: HeartbeatData = await response.json();
            
            setData(result);
            setError(null);

            // Update History for Charts
            setHistory(prev => {
                const next = { ...prev };
                result.services.forEach(s => {
                    if (!next[s.name]) next[s.name] = [];
                    const newHistory = [...next[s.name], s.memory_mb].slice(-20); // Keep last 20 points
                    next[s.name] = newHistory;
                });
                return next;
            });

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown Error');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchStatus();
        const interval = setInterval(fetchStatus, 3000);
        return () => clearInterval(interval);
    }, []);

    const getIconByService = (name: string) => {
        if (name.includes('CPP')) return <Cpu className="text-blue-400" />;
        if (name.includes('Go')) return <Zap className="text-cyan-400" />;
        if (name.includes('Rust')) return <Shield className="text-orange-400" />;
        if (name.includes('Java')) return <HardDrive className="text-red-400" />;
        if (name.includes('Python')) return <Globe className="text-yellow-400" />;
        return <Server className="text-emerald-400" />;
    };

    return (
        <div className="min-h-screen bg-[#070b14] text-white p-8 font-sans selection:bg-emerald-500/30">
            {/* Header */}
            <header className="mb-12 flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-black uppercase tracking-[0.2em] mb-2 flex items-center gap-4">
                        <Activity className="text-emerald-500 animate-pulse" size={32} />
                        Heartbeat Monitor
                    </h1>
                    <p className="text-white/40 uppercase text-xs font-bold tracking-[0.4em]">
                        President Simulator Central Orchestrator v1.2
                    </p>
                </div>
                
                {/* Global Memory Capacity Gauge */}
                <div className="hidden lg:flex items-center gap-6">
                    <div className="text-right">
                        <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest block mb-1">Server Capacity</span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-black text-white">{data?.system_memory?.used_gb?.toFixed(2) || '0.00' }</span>
                            <span className="text-emerald-500/50 text-xs font-bold">/ {data?.system_memory?.total_gb || '32'} GB</span>
                        </div>
                    </div>
                    <div className="w-48 h-3 bg-white/5 rounded-full overflow-hidden border border-white/5 p-[2px]">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${(data?.system_memory?.used_gb || 0) / (data?.system_memory?.total_gb || 32) * 100}%` }}
                            className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                        />
                    </div>
                </div>
            </header>

            {/* Status Summary & Charts Toggle */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-[#11141b] border border-white/5 p-6 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-emerald-500">
                        <Activity size={80} />
                     </div>
                     <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] block mb-2">Sim State</span>
                     <h2 className="text-2xl font-black text-emerald-400 uppercase tracking-tighter">{data?.world_state || 'UNKNOWN'}</h2>
                </div>
                <div className="bg-[#11141b] border border-white/5 p-6 rounded-3xl backdrop-blur-xl shadow-2xl">
                     <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] block mb-2">Total RAM Usage</span>
                     <h2 className="text-2xl font-black font-mono">{(data?.services.reduce((acc, s) => acc + s.memory_mb, 0) || 0).toFixed(1)} <span className="text-xs text-white/30 uppercase">MB</span></h2>
                </div>
                <div className="bg-[#11141b] border border-white/5 p-6 rounded-3xl backdrop-blur-xl shadow-2xl">
                     <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] block mb-2">Cluster Synchronization</span>
                     <h2 className="text-2xl font-black font-mono">100<span className="text-emerald-500">%</span></h2>
                </div>
                <div className="bg-[#11141b] border border-white/5 p-6 rounded-3xl backdrop-blur-xl shadow-2xl border-emerald-500/20">
                     <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] block mb-2">Network Health</span>
                     <h2 className={`text-2xl font-black ${error ? 'text-red-500' : 'text-emerald-400'}`}>
                        {error ? 'RECONNECTING' : 'OPTIMAL'}
                     </h2>
                </div>
            </div>

            {/* Polyglot Grid with Charts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
                {(data?.services || []).map((service, index) => (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.03 }}
                        key={service.name}
                        className="bg-[#0c0f17] border border-white/5 p-5 rounded-3xl hover:border-emerald-500/30 transition-all duration-500 group relative flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-start justify-between mb-4">
                                <div className="bg-white/5 p-2.5 rounded-2xl group-hover:bg-emerald-500/10 transition-colors">
                                    {getIconByService(service.name)}
                                </div>
                                <div className="text-right">
                                    <span className="text-[9px] font-black text-white/20 uppercase tracking-widest block">Usage</span>
                                    <span className="text-xs font-mono font-bold text-white/80">{(service.memory_mb || 0).toFixed(1)} MB</span>
                                </div>
                            </div>
                            <h3 className="text-white font-black text-xs uppercase tracking-widest mb-1 truncate">{service.name}</h3>
                            <p className="text-white/20 text-[8px] font-mono mb-4 truncate italic">{service.url}</p>
                        </div>
                        
                        <div className="space-y-4">
                            <Sparkline data={history[service.name] || []} />
                            
                            <div className="flex items-center justify-between mt-2 pt-3 border-t border-white/5">
                                <div className="flex items-center gap-1.5">
                                    <div className={`w-2 h-2 rounded-full ${
                                        service.status === 'Ready' || service.status === 'Active' 
                                        ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]' 
                                        : 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]'
                                    }`} />
                                    <span className={`text-[9px] font-black uppercase tracking-tighter ${
                                        service.status === 'Ready' || service.status === 'Active' ? 'text-emerald-400' : 'text-rose-400'
                                    }`}>
                                        {service.status}
                                    </span>
                                </div>
                                <BarChart3 size={12} className="text-white/10" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* System Synchronization Log */}
            <div className="bg-[#0c0f17] border border-white/5 rounded-[2.5rem] p-10 backdrop-blur-3xl relative overflow-hidden mb-8">
                <div className="absolute -top-24 -right-24 p-8 opacity-5 text-emerald-500 rotate-12">
                    <Zap size={400} />
                </div>
                
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 shadow-inner">
                        <Cpu className="text-emerald-500" size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black uppercase tracking-[0.2em]">Polyglot Sync Log</h2>
                        <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.4em]">Real-time Telemetry Acquisition Active</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-black/40 rounded-[2rem] p-8 border border-white/[0.03] font-mono shadow-inner">
                        <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                            <span className="text-xs text-emerald-500 font-black uppercase tracking-widest flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                                Synchronized Services
                            </span>
                            <span className="text-[10px] text-white/20 font-mono tracking-widest">ENGI_CLUSTER_REPORTS_v2.1</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            {[
                                { feat: "Geo-Spatial Visualization", engine: "Rust (Axum) + C++ Core", status: "SYNCED" },
                                { feat: "National GDP & Economy", engine: "Go (Fasthttp)", status: "SYNCED" },
                                { feat: "Foreign Policy AI Engine", engine: "Python (FastAPI)", status: "SYNCED" },
                                { feat: "Resource & Logistics Map", engine: "Go (Gin)", status: "SYNCED" },
                                { feat: "Intelligence Data Vault", engine: "Python (Sanic)", status: "SYNCED" },
                                { feat: "Global Event Dispatcher", engine: "Java (Netty)", status: "SYNCED" }
                            ].map((item, i) => (
                                <motion.div 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    key={item.feat} 
                                    className="flex items-center justify-between group py-2 border-b border-white/[0.02]"
                                >
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-white/70 group-hover:text-white transition-colors uppercase tracking-widest">{item.feat}</span>
                                        <span className="text-[8px] text-white/20 lowercase italic group-hover:text-emerald-500/50 transition-colors">{item.engine}</span>
                                    </div>
                                    <span className="text-[9px] font-black text-emerald-500 ml-4 group-hover:scale-110 transition-transform">
                                        {item.status}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="bg-emerald-500/5 border border-emerald-500/10 p-8 rounded-[2rem] relative overflow-hidden group">
                             <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <BarChart3 size={100} />
                             </div>
                             <h4 className="text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-4">Load Statistics</h4>
                             <p className="text-white/60 text-xs leading-relaxed font-medium italic">
                                Pemantauan memori per bahasa memungkinkan identifikasi kebocoran atau lonjakan beban pada layer simulasi spesifik secara instan.
                             </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex-1 flex flex-col justify-end relative shadow-2xl">
                            <Shield className="absolute top-6 right-6 text-white/5" size={60} />
                            <h4 className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-1">Central Intelligence</h4>
                            <div className="flex items-baseline gap-3">
                                <span className="text-4xl font-black text-white tracking-tighter">0.32<span className="text-lg text-white/30 ml-1">MS</span></span>
                                <span className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest animate-pulse ml-auto">LATENCY</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {error && (
                <div className="sticky bottom-8 bg-rose-500/20 border border-rose-500/30 backdrop-blur-xl p-5 rounded-[2rem] text-rose-500 text-xs font-black uppercase tracking-[0.3em] text-center shadow-[0_20px_50px_rgba(244,63,94,0.3)] border-t border-t-rose-500/50">
                    <span className="mr-4 animate-ping invisible md:visible inline-block w-2 h-2 rounded-full bg-rose-500" />
                    System Critical: {error} | Check Heartbeat Engine (8081)
                </div>
            )}
        </div>
    );
}
