import { 
  Coins, 
  Zap, 
  Flame, 
  Droplets, 
  Wind, 
  Box, 
  Cpu, 
  BatteryCharging, 
  Layers, 
  Sparkles, 
  Hammer,
  Container
} from "lucide-react";

export const sdaIcons: Record<string, { icon: any, color: string, label: string }> = {
  emas: { icon: Coins, color: "text-yellow-400", label: "Emas" },
  uranium: { icon: Zap, color: "text-lime-400", label: "Uranium" },
  batu_bara: { icon: Container, color: "text-zinc-500", label: "Batu Bara" },
  minyak_bumi: { icon: Droplets, color: "text-amber-600", label: "Minyak Bumi" },
  gas_alam: { icon: Wind, color: "text-sky-300", label: "Gas Alam" },
  garam: { icon: Box, color: "text-zinc-200", label: "Garam" },
  nikel: { icon: Cpu, color: "text-slate-400", label: "Nikel" },
  litium: { icon: BatteryCharging, color: "text-emerald-500", label: "Litium" },
  tembaga: { icon: Flame, color: "text-orange-500", label: "Tembaga" },
  aluminium: { icon: Layers, color: "text-slate-300", label: "Aluminium" },
  logam_tanah_jarang: { icon: Sparkles, color: "text-purple-400", label: "Logam Tanah Jarang" },
  bijih_besi: { icon: Hammer, color: "text-red-500", label: "Bijih Besi" },
};
