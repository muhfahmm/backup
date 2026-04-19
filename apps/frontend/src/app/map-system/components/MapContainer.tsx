'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { BaseMapEngine, GeoJsonData } from '../engine/ts/BaseMapEngine';
import { MainMapEngine } from '../engine/ts/MainMapEngine';
import { SDAMapEngine } from '../engine/ts/SDAMapEngine';
import { TradeMapEngine } from '../engine/ts/TradeMapEngine';
import { RelationMapEngine } from '../engine/ts/RelationMapEngine';
import { Globe, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MapContainerProps {
  mode?: 'MAIN' | 'TRADE' | 'RELATION' | 'RESOURCE';
  userCountry?: string;
  targetCoords?: { lat: number; lng: number } | null;
  selectedName?: string | null;
  selectedCode?: string | null;
  onSelectCountry?: (country: any) => void;
  onResetMode?: () => void;
}

export default function MapContainer({ mode = 'MAIN', userCountry = "Indonesia", targetCoords, selectedName, selectedCode, onSelectCountry, onResetMode }: MapContainerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<BaseMapEngine | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<GeoJsonData | null>(null);
  const [countries, setCountries] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Interaction State
  const [transform, setTransform] = useState({ scale: 1, x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringStar, setIsHoveringStar] = useState(false);

  // Animation State
  const animationRef = useRef<number | null>(null);

  // Load Map Data
  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 3;

    async function loadData() {
      try {
        const [geoRes, countryRes] = await Promise.all([
          fetch('/data/world.json'),
          fetch('/api/gateway/api/countries')
        ]);

        if (!geoRes.ok || !countryRes.ok) throw new Error('Failed to load data');

        const geoJson = await geoRes.json();
        const countryList = await countryRes.json();

        setData(geoJson);
        setCountries(countryList);
        setIsLoading(false);
      } catch (error: any) {
        if (retryCount < maxRetries) {
          retryCount++;
          setTimeout(loadData, 2000);
        } else {
          setIsLoading(false);
        }
      }
    }
    loadData();
  }, []);

  // Initialize/Swap Engine based on Mode
  useEffect(() => {
    if (!canvasRef.current || !data || !containerRef.current) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    canvasRef.current.width = width;
    canvasRef.current.height = height;

    // Engine Factory
    let engine: BaseMapEngine;
    
    if (mode === 'RESOURCE') {
      engine = new SDAMapEngine(ctx, width, height);
    } else if (mode === 'TRADE') {
      engine = new TradeMapEngine(ctx, width, height);
    } else if (mode === 'RELATION') {
      engine = new RelationMapEngine(ctx, width, height);
    } else {
      engine = new MainMapEngine(ctx, width, height);
    }

    engine.setData(data);
    engine.setCountries(countries);
    engine.setSelectedCountry(selectedName || null, selectedCode || null);
    engine.setTransform(transform.scale, transform.x, transform.y);
    engineRef.current = engine;

    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current || !engineRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      canvasRef.current.width = newWidth;
      canvasRef.current.height = newHeight;
      engineRef.current.resize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [data, countries, mode]); // Trigger swap when mode changes

  // Sync Transform & Selections
  useEffect(() => {
    if (engineRef.current) {
        engineRef.current.setSelectedCountry(selectedName || null, selectedCode || null);
        engineRef.current.setTransform(transform.scale, transform.x, transform.y);
    }
  }, [transform, selectedName, selectedCode]);

  // Handle Target Zooming Logic (Condensed)
  useEffect(() => {
    if (!targetCoords || !containerRef.current) return;
    const { lat, lng } = targetCoords;
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    
    const xNorm = (lng + 180) / 360;
    const yNorm = (90 - lat) / 180;
    const targetMapX = xNorm * width, targetMapY = yNorm * height;
    const targetScale = 6;
    const targetX = width / 2 - targetMapX * targetScale;
    const targetY = height / 2 - targetMapY * targetScale;

    let startTransform = { ...transform }, startTime: number | null = null;
    const duration = 800;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setTransform({
        scale: startTransform.scale + (targetScale - startTransform.scale) * easedProgress,
        x: startTransform.x + (targetX - startTransform.x) * easedProgress,
        y: startTransform.y + (targetY - startTransform.y) * easedProgress
      });
      if (progress < 1) animationRef.current = requestAnimationFrame(animate);
    };

    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [targetCoords]);

  // Interaction Handlers (Mouse/Wheel)
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const zoomSpeed = 0.005;
    const newScale = Math.min(Math.max(transform.scale - e.deltaY * zoomSpeed, 1.0), 10);
    const rect = canvasRef.current?.getBoundingClientRect(); if (!rect) return;
    const mouseX = e.clientX - rect.left, mouseY = e.clientY - rect.top;
    const scaleRatio = newScale / transform.scale;
    let newX = mouseX - (mouseX - transform.x) * scaleRatio, newY = mouseY - (mouseY - transform.y) * scaleRatio;
    
    // Clamp bounds
    const width = canvasRef.current?.width || 0, height = canvasRef.current?.height || 0;
    if (newScale <= 1.0) { newX = 0; newY = 0; }
    else {
      newX = Math.min(Math.max(newX, width * (1 - newScale)), 0);
      newY = Math.min(Math.max(newY, height * (1 - newScale)), 0);
    }
    setTransform({ scale: newScale, x: newX, y: newY });
  }, [transform]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true); setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || transform.scale <= 1.0) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect && engineRef.current && !isDragging) {
        const mouseX = e.clientX - rect.left, mouseY = e.clientY - rect.top;
        setIsHoveringStar(!!engineRef.current.getCountryAt(mouseX, mouseY));
      }
      return;
    }
    const dx = e.clientX - lastMousePos.x, dy = e.clientY - lastMousePos.y;
    const width = containerRef.current?.clientWidth || 0, height = containerRef.current?.clientHeight || 0;
    
    setTransform(prev => {
      let nX = Math.min(Math.max(prev.x + dx, width * (1 - prev.scale)), 0);
      let nY = Math.min(Math.max(prev.y + dy, height * (1 - prev.scale)), 0);
      return { ...prev, x: nX, y: nY };
    });
    setLastMousePos({ x: e.clientX, y: e.clientY });
  }, [isDragging, lastMousePos, transform.scale]);

  return (
    <div ref={containerRef} className="w-full h-full relative bg-[#070b14] overflow-hidden"
      onWheel={handleWheel} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}
      onMouseUp={() => setIsDragging(false)} onMouseLeave={() => setIsDragging(false)}>
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#070b14]/90 backdrop-blur-md z-50">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
            <span className="text-emerald-500 font-mono text-xs font-bold tracking-[0.3em] uppercase">Booting Command Core...</span>
          </div>
        </div>
      )}

      <canvas ref={canvasRef} 
        className={`w-full h-full block transition-opacity duration-1000 ${isDragging ? 'cursor-grabbing' : isHoveringStar ? 'cursor-pointer' : 'cursor-grab'}`}
        onClick={(e) => {
          const rect = canvasRef.current?.getBoundingClientRect();
          if (!rect || !engineRef.current || !onSelectCountry) return;
          const country = engineRef.current.getCountryAt(e.clientX - rect.left, e.clientY - rect.top);
          if (country) onSelectCountry(country);
        }}
        style={{ opacity: isLoading ? 0 : 1 }}
      />

      <AnimatePresence>
        {mode !== 'MAIN' && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }}
            className="absolute bottom-32 left-1/2 -translate-x-1/2 z-50">
            <button onClick={() => onResetMode?.()}
              className="group flex items-center gap-3 bg-[#070b14]/80 border border-emerald-500/30 backdrop-blur-xl px-6 py-3 rounded-full hover:border-emerald-400/60 hover:bg-emerald-500/10 transition-all shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <Globe size={16} className="text-emerald-400" />
              <span className="text-emerald-400 font-black text-[10px] tracking-[0.3em] uppercase">Return to Global Map</span>
              <X size={14} className="text-emerald-500/50" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
