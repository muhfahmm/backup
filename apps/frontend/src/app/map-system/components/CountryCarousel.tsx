'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowDownAZ, ArrowUpAZ, X } from 'lucide-react';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());

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

  // Handle Auto-Scroll when selection changes
  useEffect(() => {
    if (selectedCode && itemRefs.current.has(selectedCode)) {
      const element = itemRefs.current.get(selectedCode);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [selectedCode]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const filteredAndSortedCountries = countries
    .filter(c => c.nama_negara.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
        const nameA = a.nama_negara.toLowerCase();
        const nameB = b.nama_negara.toLowerCase();
        if (sortOrder === 'asc') return nameA.localeCompare(nameB);
        return nameB.localeCompare(nameA);
    });

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

      <div className="relative max-w-[100vw] px-20">
        {/* Search & Sort HUD Bar */}
        <div className="flex items-center gap-4 mb-6 px-4 pointer-events-auto max-w-4xl mx-auto">
            <div className="relative flex-1 group/search">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-emerald-500/40 group-focus-within/search:text-emerald-500 transition-colors">
                    <Search size={16} />
                </div>
                <input 
                    type="text" 
                    placeholder="CARI NEGARA TARGET..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#0f172a]/80 backdrop-blur-md border border-white/5 focus:border-emerald-500/50 outline-none rounded-xl py-3 pl-12 pr-10 text-xs font-black tracking-[0.2em] text-emerald-400 placeholder:text-white/10 transition-all shadow-lg"
                />
                {searchTerm && (
                    <button 
                        onClick={() => setSearchTerm('')}
                        className="absolute inset-y-0 right-4 flex items-center text-white/20 hover:text-emerald-500 transition-colors"
                    >
                        <X size={14} />
                    </button>
                )}
            </div>

            <button 
                onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                className="bg-[#0f172a]/80 backdrop-blur-md border border-white/5 hover:border-emerald-500/50 rounded-xl px-5 py-3 flex items-center gap-3 text-emerald-500 transition-all shadow-lg group/sort"
            >
                {sortOrder === 'asc' ? <ArrowDownAZ size={16} /> : <ArrowUpAZ size={16} />}
                <span className="text-[10px] font-black tracking-[0.2em] uppercase hidden sm:block">
                    {sortOrder === 'asc' ? 'A - Z' : 'Z - A'}
                </span>
            </button>
            
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3 min-w-[80px] text-center shadow-lg">
                <span className="text-[10px] font-black text-emerald-500 tracking-widest">{filteredAndSortedCountries.length}</span>
                <span className="text-[8px] text-emerald-500/40 font-black tracking-widest ml-2 uppercase">Match</span>
            </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar pointer-events-auto pb-6 scroll-smooth"
        >
          {filteredAndSortedCountries.map((country, index) => {
            const isActive = selectedCode 
              ? country.kode_negara === selectedCode
              : selectedName && country.nama_negara.toLowerCase() === selectedName.toLowerCase();
            
            return (
              <motion.div
                key={country.id}
                ref={(el) => {
                  if (el) itemRefs.current.set(country.kode_negara, el);
                }}
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
                    <header className="mb-0 py-2 flex flex-col items-center justify-center text-center">
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mb-1 text-emerald-400"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <p className={`font-mono text-[8px] tracking-[0.4em] uppercase ${isActive ? 'text-emerald-400 font-black' : 'text-emerald-500/30'}`}>
                        {isActive ? 'Target Locked' : 'Target Nation'}
                      </p>
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
                        {isActive ? 'Current Active' : 'Select Target'}
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
