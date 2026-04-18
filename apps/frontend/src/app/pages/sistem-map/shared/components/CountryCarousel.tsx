'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getFlagUrl } from '../utils/countryMapping';
import { Country } from '../types/country';

// Replaced local interface with shared import

interface CountryCarouselProps {
  onSelectCountry?: (country: Country) => void;
  selectedName?: string | null;
  selectedCode?: string | null;
}

export default function CountryCarousel({ onSelectCountry, selectedName, selectedCode }: CountryCarouselProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('http://127.0.0.1:4000/api/countries')
      .then(async res => {
        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.message || 'Server Error');
        }
        return data;
      })
      .then(data => {
        setCountries(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch countries:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (loading) {
// ... existing loading state ...
  }

  if (error) {
// ... existing error state ...
  }

  return (
    <div className="absolute bottom-12 left-0 w-full z-30 pointer-events-none overflow-hidden select-none group/carousel">
      {/* Background is now fully cleared for a cleaner floating look */}
      
      {/* Navigation Chevrons */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-[#0f172a] hover:bg-[#1e293b] border border-emerald-500/30 rounded-full text-emerald-500 pointer-events-auto transition-all opacity-0 group-hover/carousel:opacity-100 shadow-[0_0_20px_rgba(16,185,129,0.2)] active:scale-90"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      <button 
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-[#0f172a] hover:bg-[#1e293b] border border-emerald-500/30 rounded-full text-emerald-500 pointer-events-auto transition-all opacity-0 group-hover/carousel:opacity-100 shadow-[0_0_20px_rgba(16,185,129,0.2)] active:scale-90"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      <div className="relative max-w-[100vw] px-20 pb-4">
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar pointer-events-auto pb-6 scroll-smooth"
        >
          {countries.map((country, index) => {
            const isActive = selectedCode 
              ? country.kode_negara === selectedCode
              : selectedName && country.nama_negara.toLowerCase() === selectedName.toLowerCase();
            
            return (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex-shrink-0 w-44 group"
              >
                <div className={`relative bg-[#0f172a] border rounded-xl p-4 overflow-hidden transition-all 
                  ${isActive ? 'border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.4)] ring-1 ring-emerald-500/50' : 'border-white/10 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]'}`}
                >
                  {/* Decorative Elements */}
                  <div className={`absolute top-0 right-0 w-16 h-16 rotate-45 translate-x-8 -translate-y-8 ${isActive ? 'bg-emerald-500/20' : 'bg-emerald-500/5'}`} />
                  <div className={`absolute bottom-0 left-0 w-1 h-1/2 bg-gradient-to-t from-emerald-500/40 to-transparent ${isActive ? 'opacity-100' : 'opacity-60'}`} />
                  
                  <div className="relative">
                    <header className="mb-0 py-4 flex flex-col items-center justify-center text-center">
                      <p className={`font-mono text-[7px] tracking-[0.4em] uppercase mb-2 ${isActive ? 'text-emerald-400 font-bold' : 'text-emerald-500/40'}`}>
                        {isActive ? 'Target Locked' : 'Target Nation'}
                      </p>
                      <h3 className={`font-black uppercase tracking-widest leading-tight line-clamp-2 min-h-[2.5rem] flex items-center justify-center transition-colors 
                        ${country.nama_negara.length > 20 ? 'text-[10px]' : country.nama_negara.length > 15 ? 'text-xs' : 'text-sm'}
                        ${isActive ? 'text-emerald-400' : 'text-white group-hover:text-emerald-400'}`}>
                        {country.nama_negara}
                      </h3>
                    </header>

                    {/* Flag Display Area */}
                    <div className="relative mt-2 mb-4 h-24 w-full flex items-center justify-center">
                        <div className={`absolute inset-0 bg-white/5 rounded-lg border border-white/10 overflow-hidden ${isActive ? 'ring-1 ring-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)]' : ''}`}>
                            {getFlagUrl(country.kode_negara) ? (
                                <img 
                                    src={getFlagUrl(country.kode_negara)!} 
                                    alt={`${country.nama_negara} flag`}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-black/40">
                                    <span className="text-[10px] text-white/20 font-mono">NO_FLAG</span>
                                </div>
                            )}
                            
                            {/* Scanning Light Effect */}
                            <motion.div 
                                animate={{ left: ['-100%', '100%'] }}
                                transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                                className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                            />
                        </div>
                        
                        {/* Overlay HUD lines */}
                        <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-emerald-500/50" />
                        <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-emerald-500/50" />
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-emerald-500/50" />
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-emerald-500/50" />
                    </div>

                    {/* Select Trigger Overlay */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      onClick={() => {
                          if (onSelectCountry) {
                              onSelectCountry(country);
                          }
                      }}
                      className="absolute inset-0 flex items-center justify-center bg-emerald-600/20 rounded-xl cursor-pointer"
                    >
                      <div className="px-5 py-2 bg-emerald-500 text-white rounded-lg font-black text-[9px] tracking-[0.2em] uppercase shadow-lg shadow-emerald-500/50">
                        {isActive ? 'Current Active' : `Select ${country.nama_negara}`}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
