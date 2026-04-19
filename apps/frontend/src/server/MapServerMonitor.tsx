'use client';

import React, { useState, useEffect } from 'react';
import { Activity, Server, Shield, Cpu, Zap, Globe, HardDrive } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceStatus {
    name: string;
    status: string;
    url: string;
}

interface HeartbeatData {
    timestamp: string;
    services: ServiceStatus[];
    world_state: string;
}

/**
 * MapServerMonitor
 * Komponen Dashboard untuk memantau "Jantung Aplikasi" (Backend Orchestrator).
 * Mengakses data langsung dari http://localhost:8081/api/map/heartbeat
 */
export default function MapServerMonitor() {
    const [data, setData] = useState<HeartbeatData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchStatus = async () => {
        try {
            const response = await fetch('http://localhost:8081/api/map/heartbeat');
            if (!response.ok) throw new Error('Server Heartbeat Offline');
            const result = await response.json();
            setData(result);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown Error');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchStatus();
        const interval = setInterval(fetchStatus, 3000); // Polling setiap 3 detik
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
                        President Simulator Central Orchestrator v1.0
                    </p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 px-6 py-3 rounded-2xl flex flex-col items-end">
                    <span className="text-[10px] font-black text-emerald-500/50 uppercase tracking-widest">Server Port</span>
                    <span className="text-emerald-400 font-mono font-black text-xl">:8081</span>
                </div>
            </header>

            {/* Status Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-[#11141b] border border-white/5 p-6 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <Activity size={80} />
                     </div>
                     <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] block mb-2">Sim State</span>
                     <h2 className="text-2xl font-black text-emerald-400">{data?.world_state || 'UNKNOWN'}</h2>
                </div>
                <div className="bg-[#11141b] border border-white/5 p-6 rounded-3xl backdrop-blur-xl shadow-2xl">
                     <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] block mb-2">Last Sync</span>
                     <h2 className="text-2xl font-black font-mono">{data ? new Date(data.timestamp).toLocaleTimeString() : '--:--:--'}</h2>
                </div>
                <div className="bg-[#11141b] border border-white/5 p-6 rounded-3xl backdrop-blur-xl shadow-2xl border-emerald-500/20">
                     <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] block mb-2">Network Health</span>
                     <h2 className={`text-2xl font-black ${error ? 'text-red-500' : 'text-emerald-400'}`}>
                        {error ? 'CONNECTION LOST' : 'OPTIMAL'}
                     </h2>
                </div>
            </div>

            {/* Polyglot Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {(data?.services || []).map((service, index) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        key={service.name}
                        className="bg-[#0c0f17] border border-white/5 p-4 rounded-2xl hover:border-emerald-500/20 transition-all duration-300 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                             {getIconByService(service.name)}
                        </div>
                        <div className="bg-black/40 p-2 rounded-xl w-fit mb-3">
                            {getIconByService(service.name)}
                        </div>
                        <h3 className="text-white font-black text-[10px] uppercase tracking-wider mb-0.5 truncate">{service.name}</h3>
                        <p className="text-white/20 text-[9px] font-mono mb-3 truncate">{service.url}</p>
                        <div className="flex items-center gap-2">
                             <div className={`w-1.5 h-1.5 rounded-full ${
                                 service.status === 'Ready' || service.status === 'Active' 
                                 ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]' 
                                 : service.status === 'Checking...'
                                 ? 'bg-blue-400 animate-pulse'
                                 : 'bg-rose-500'
                             }`} />
                             <span className={`text-[9px] font-bold uppercase tracking-tighter ${
                                 service.status === 'Ready' || service.status === 'Active' ? 'text-emerald-400' : 
                                 service.status === 'Checking...' ? 'text-blue-400' : 'text-rose-400'
                             }`}>
                                {service.status}
                             </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {error && (
                <div className="mt-12 bg-red-500/10 border border-red-500/20 p-4 rounded-2xl text-red-500 text-sm font-bold text-center animate-bounce">
                    CRITICAL: {error} | Ensure Go Server 8081 is running.
                </div>
            )}
        </div>
    );
}
