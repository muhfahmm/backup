'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { CanvasEngine, GeoJsonData } from '../engine/CanvasEngine';

interface MapContainerProps {
  mode?: 'MAIN' | 'TRADE' | 'RELATION' | 'RESOURCE';
}

export default function MapContainer({ mode = 'MAIN' }: MapContainerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<CanvasEngine | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<GeoJsonData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Interaction State
  const [transform, setTransform] = useState({ scale: 1, x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  // Load Map Data
  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch('/data/world.json');
        const json = await response.json();
        setData(json);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load map data:', error);
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
  }, [data]);

  // Sync Transform with Engine
  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.setTransform(transform.scale, transform.x, transform.y);
    }
  }, [transform]);

  // Interaction Handlers
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const zoomSpeed = 0.001;
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
  }, [isDragging, lastMousePos, transform.scale]);

  const handleMouseUp = () => {
    setIsDragging(false);
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
      <canvas 
        ref={canvasRef} 
        className={`w-full h-full block cursor-${isDragging ? 'grabbing' : 'grab'} transition-opacity duration-1000`}
        style={{ opacity: isLoading ? 0 : 1 }}
      />
      

    </div>
  );
}
