'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { CanvasEngine, GeoJsonData } from '../engine/CanvasEngine';
import MapSDA from './MapSDA';
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
  const engineRef = useRef<CanvasEngine | null>(null);
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
        console.log(`[Map] Initiating data fetch (Attempt ${retryCount + 1})...`);
        const [geoRes, countryRes] = await Promise.all([
          fetch('/data/world.json'),
          fetch('/api/gateway/api/countries')
        ]);

        if (!geoRes.ok || !countryRes.ok) {
          let details = '';
          try {
            const errorData = !countryRes.ok ? await countryRes.json() : await geoRes.json();
            details = errorData.details || errorData.error || '';
          } catch (e) { }

          throw new Error(`Network response error: Geo(${geoRes.status}) Country(${countryRes.status})${details ? ' - ' + details : ''}`);
        }

        const geoJson = await geoRes.json();
        const countryList = await countryRes.json();

        console.log(`[Map] Data loaded successfully: ${countryList.length} countries found.`);
        setData(geoJson);
        setCountries(countryList);
        setIsLoading(false);
      } catch (error: any) {
        console.error('[Map] ERROR LOADING DATA:', error.message);

        if (retryCount < maxRetries) {
          retryCount++;
          console.log(`[Map] Retrying in 2s... (${retryCount}/${maxRetries})`);
          setTimeout(loadData, 2000);
          return;
        }

        if (error.message.includes('Failed to fetch')) {
          console.warn('[Map] GATEWAY IS UNREACHABLE. Ensure Node.js gateway is running on localhost:4000');
        }
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  // Initialize Engine
  useEffect(() => {
    if (!canvasRef.current || !data || !containerRef.current) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    canvasRef.current.width = width;
    canvasRef.current.height = height;

    const engine = new CanvasEngine(ctx, width, height);
    engine.setData(data);
    engine.setCountries(countries);
    engine.setTransform(transform.scale, transform.x, transform.y);
    engineRef.current = engine;

    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current || !engineRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;

      canvasRef.current.width = newWidth;
      canvasRef.current.height = newHeight;
      engineRef.current.resize(newWidth, newHeight);
      engineRef.current.setTransform(transform.scale, transform.x, transform.y);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [data, countries]);

  // Sync Countries with Engine (Secondary Sync)
  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.setCountries(countries);
      engineRef.current.render();
    }
  }, [countries]);

  // Sync Transform with Engine
  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.setTransform(transform.scale, transform.x, transform.y);
    }
  }, [transform]);

  // Sync Selected Country Name & ISO Code
  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.setSelectedCountry(selectedName || null, selectedCode || null);
      engineRef.current.render();
    }
  }, [selectedName, selectedCode]);

  // Handle Target Zooming
  useEffect(() => {
    if (!targetCoords || !engineRef.current || !canvasRef.current || !containerRef.current) return;

    const { lat, lng } = targetCoords;
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Get target projection from Projector (re-using engine logic)
    // We can't access engine.projector easily here, so we recreate the simple projection logic
    // normalized Lng [-180, 180] -> [0, 1], Lat [90, -90] -> [0, 1]
    const xNorm = (lng + 180) / 360;
    const yNorm = (90 - lat) / 180;
    const targetMapX = xNorm * width;
    const targetMapY = yNorm * height;

    const targetScale = 6; // Perfect zoom level for individual nations
    const targetX = width / 2 - targetMapX * targetScale;
    const targetY = height / 2 - targetMapY * targetScale;

    // Smooth Animation Loop
    let startTransform = { ...transform };
    let startTime: number | null = null;
    const duration = 800; // Accelerated from 1500ms for a more responsive feel

    const animate = (time: number) => {
      if (startTime === null) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);

      // Easing: easeOutCubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const nextScale = startTransform.scale + (targetScale - startTransform.scale) * easedProgress;
      const nextX = startTransform.x + (targetX - startTransform.x) * easedProgress;
      const nextY = startTransform.y + (targetY - startTransform.y) * easedProgress;

      setTransform({ scale: nextScale, x: nextX, y: nextY });

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [targetCoords]);

  // Interaction Handlers
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const zoomSpeed = 0.005; // Snappier, faster zoom response
    const newScale = Math.min(Math.max(transform.scale - e.deltaY * zoomSpeed, 1.0), 10);

    // Zoom focus on mouse position
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const scaleRatio = newScale / transform.scale;
    let newX = mouseX - (mouseX - transform.x) * scaleRatio;
    let newY = mouseY - (mouseY - transform.y) * scaleRatio;

    // Perfection: Invisible Barrier Logic 
    // This ensures that even during zoom, we don't see the background gap
    const width = canvasRef.current?.width || 0;
    const height = canvasRef.current?.height || 0;

    if (newScale <= 1.0) {
      newX = 0;
      newY = 0;
    } else {
      // Clamp offsets after zoom
      newX = Math.min(newX, 0);
      newY = Math.min(newY, 0);

      const minX = width * (1 - newScale);
      const minY = height * (1 - newScale);

      newX = Math.max(newX, minX);
      newY = Math.max(newY, minY);
    }

    setTransform({ scale: newScale, x: newX, y: newY });
  }, [transform]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    // Perfection: Prevent panning if we are at the default zoom level
    if (!isDragging || transform.scale <= 1.0) return;

    const dx = e.clientX - lastMousePos.x;
    const dy = e.clientY - lastMousePos.y;

    const width = containerRef.current?.clientWidth || 0;
    const height = containerRef.current?.clientHeight || 0;

    setTransform(prev => {
      let newX = prev.x + dx;
      let newY = prev.y + dy;

      // Invisible Barrier Logic:
      // Left/Top bounds
      newX = Math.min(newX, 0);
      newY = Math.min(newY, 0);

      // Right/Bottom bounds (Width * (1 - scale))
      const minX = width * (1 - prev.scale);
      const minY = height * (1 - prev.scale);

      newX = Math.max(newX, minX);
      newY = Math.max(newY, minY);

      return { ...prev, x: newX, y: newY };
    });

    setLastMousePos({ x: e.clientX, y: e.clientY });

    // Handle Star Hover Effect
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect && engineRef.current && !isDragging) {
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const hoveredCountry = engineRef.current.getCountryAt(mouseX, mouseY);
      setIsHoveringStar(!!hoveredCountry);
    }
  }, [isDragging, lastMousePos, transform.scale]);

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    // Only trigger click if we weren't dragging (or moved very little)
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect || !engineRef.current || !onSelectCountry) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const country = engineRef.current.getCountryAt(mouseX, mouseY);

    if (country) {
      onSelectCountry(country);
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative bg-[#070b14] overflow-hidden"
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#070b14]/90 backdrop-blur-md z-50">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
            <span className="text-emerald-500 font-mono text-xs font-bold tracking-[0.3em] uppercase">Booting Command Core...</span>
          </div>
        </div>
      )}
      {mode === 'RESOURCE' ? (
        <MapSDA
          userCountry={userCountry}
          targetCountry={selectedName || null}
          onSelect={(name) => {
            // Find country by name and select it
            const country = countries.find(c => c.nama_negara === name || c.name_en === name);
            if (country && onSelectCountry) onSelectCountry(country);
          }}
          geoData={data}
          active={!isLoading}
        />
      ) : (
        <canvas
          ref={canvasRef}
          className={`w-full h-full block transition-opacity duration-1000 ${isDragging ? 'cursor-grabbing' : isHoveringStar ? 'cursor-pointer' : 'cursor-grab'
            }`}
          onClick={handleClick}
          style={{ opacity: isLoading ? 0 : 1 }}
        />
      )}

      {/* Floating Tactical Exit Button */}
      <AnimatePresence>
        {mode !== 'MAIN' && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute bottom-32 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
          >
            <button
              onClick={() => onResetMode?.()}
              className="group flex items-center gap-3 bg-[#070b14]/80 border border-emerald-500/30 backdrop-blur-xl px-6 py-3 rounded-full hover:border-emerald-400/60 hover:bg-emerald-500/10 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]"
            >
              <div className="bg-emerald-500/20 p-1.5 rounded-full group-hover:scale-110 transition-transform">
                <Globe size={16} className="text-emerald-400" />
              </div>
              <span className="text-emerald-400 font-black text-[10px] tracking-[0.3em] uppercase">Return to Global Map</span>
              <X size={14} className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
