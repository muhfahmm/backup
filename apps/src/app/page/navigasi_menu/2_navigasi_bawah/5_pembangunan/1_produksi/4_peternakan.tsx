"use client"
import { Beef } from "lucide-react";
import BaseProduksiGrid from "./BaseProduksiGrid";

const KEYS = ["ayam_unggas", "sapi_perah", "sapi_potong", "domba_kambing"];

export default function PeternakanTab(props: any) {
  return <BaseProduksiGrid {...props} keys={KEYS} title="Peternakan" Icon={Beef} isElectricityTab={false} />;
}
