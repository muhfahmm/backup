"use client"
import { Pill } from "lucide-react";
import BaseProduksiGrid from "../BaseProduksiGrid";

const KEYS = ["farmasi"];

export default function FarmasiTab(props: any) {
  return <BaseProduksiGrid {...props} keys={KEYS} title="Farmasi" Icon={Pill} isElectricityTab={false} />;
}
