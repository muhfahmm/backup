import { useState, useEffect } from "react";

interface TradeRouteLegendProps {
  isVisible: boolean;
}

export default function TradeRouteLegend({ isVisible }: TradeRouteLegendProps) {
  const [isTemporarilyHidden, setIsTemporarilyHidden] = useState(false);

  useEffect(() => {
    const handleHide = () => setIsTemporarilyHidden(true);
    const handleShow = () => setIsTemporarilyHidden(false);
    
    window.addEventListener('hide_strategy_modal', handleHide);
    window.addEventListener('show_strategy_modal', handleShow);
    
    return () => {
      window.removeEventListener('hide_strategy_modal', handleHide);
      window.removeEventListener('show_strategy_modal', handleShow);
    };
  }, []);

  if (!isVisible || isTemporarilyHidden) return null;

  return (
    <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-zinc-950/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-zinc-800 shadow-2xl animate-in slide-in-from-top-2 fade-in duration-300">
      <div className="flex items-center gap-1.5">
        <div className="h-1.5 w-6 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.4)] animate-pulse"></div>
        <span className="text-[10px] font-bold text-zinc-300 tracking-wider">INTERNASIONAL</span>
      </div>
      <div className="h-3 w-[1px] bg-zinc-800" />
      <div className="flex items-center gap-1.5">
        <div className="h-1.5 w-6 bg-zinc-500 rounded-full"></div>
        <span className="text-[10px] font-bold text-zinc-500 tracking-wider">REGIONAL</span>
      </div>
    </div>
  );
}
