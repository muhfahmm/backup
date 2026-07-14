"use client"
import { Gem } from "lucide-react";
import BaseProduksiGrid from "../BaseProduksiGrid";

const KEYS = [
  "emas", "uranium", "batu_bara", "minyak_bumi", "gas_alam", "garam",
  "nikel", "litium", "tembaga", "aluminium", "logam_tanah_jarang", "bijih_besi"
];

export default function MineralEnergiTab(props: any) {
  return <BaseProduksiGrid {...props} keys={KEYS} title="Mineral & Energi" Icon={Gem} isElectricityTab={false} />;
}
