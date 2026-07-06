import { ProdResult } from '../index';

// Mineral & Energi: default production should start at 0 and increase per day.
// Placeholder: for now return total = 0 (UI will show 0 until daily logic implemented).
export function computeMineralEnergi(key: string, countryDetail: any, metadata: Record<string, any>): ProdResult {
  const per = Number(metadata[key]?.produksi) || 0;
  const count = Number(countryDetail?.[key]) || 0;
  const unit = metadata[key]?.satuan || 'TON';
  // TODO: implement daily-accumulation logic using simulation date
  return { perBuilding: per, total: 0, unit };
}
