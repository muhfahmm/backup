"use client"
import { Fish } from "lucide-react";
import BaseProduksiGrid from "../BaseProduksiGrid";

const KEYS = ["udang", "mutiara", "ikan"];

export default function PerikananTab(props: any) {
  return <BaseProduksiGrid {...props} keys={KEYS} title="Perikanan" Icon={Fish} isElectricityTab={false} />;
}