"use client"
import { Factory } from "lucide-react";
import BaseProduksiGrid from "../BaseProduksiGrid";

const KEYS = ["semikonduktor", "mobil", "sepeda_motor", "smelter", "semen_beton", "kayu", "pupuk"];

export default function ManufakturTab(props: any) {
  return <BaseProduksiGrid {...props} keys={KEYS} title="Manufaktur" Icon={Factory} isElectricityTab={false} />;
}
