"use client"
import { Zap } from "lucide-react";
import BaseProduksiGrid from "../BaseProduksiGrid";

const KEYS = [
  "pembangkit_listrik_tenaga_nuklir",
  "pembangkit_listrik_tenaga_air",
  "pembangkit_listrik_tenaga_surya",
  "pembangkit_listrik_tenaga_uap",
  "pembangkit_listrik_tenaga_gas",
  "pembangkit_listrik_tenaga_angin",
];

export default function KelistrikanTab(props: any) {
  return <BaseProduksiGrid {...props} keys={KEYS} title="Kelistrikan" Icon={Zap} isElectricityTab={true} />;
}
