"use client"
import { Sprout } from "lucide-react";
import BaseProduksiGrid from "../BaseProduksiGrid";

const KEYS = [
  "padi", "gandum", "jagung", "sayur", "umbi", "kedelai", "kelapa_sawit", 
  "kopi", "teh", "kakao", "tebu", "karet"
];

export default function AgrikulturTab(props: any) {
  return <BaseProduksiGrid {...props} keys={KEYS} title="Agrikultur" Icon={Sprout} isElectricityTab={false} />;
}
