export type ProdResult = {
  perBuilding: number;
  total: number;
  unit: string;
};

import { computeKelistrikan } from './logic_kelistrikan';
import { computeMineralEnergi } from './logic_mineral_energi';
import { computeManufaktur } from './logic_manufaktur';
import { computePeternakan } from './logic_peternakan';
import { computeAgrikultur } from './logic_agrikultur';
import { computePerikanan } from './logic_perikanan';
import { computeOlahanPangan } from './logic_olahan_pangan';
import { computeFarmasi } from './logic_farmasi';

export function computeDisplayedProduction(
  key: string,
  countryDetail: any,
  metadata: Record<string, any>,
  sectionId: string,
  currentDate?: Date
): ProdResult {
  switch (sectionId) {
    case 'kelistrikan':
      return computeKelistrikan(key, countryDetail, metadata);
    case 'mineral':
      return computeMineralEnergi(key, countryDetail, metadata);
    case 'manufaktur':
      return computeManufaktur(key, countryDetail, metadata);
    case 'peternakan':
      return computePeternakan(key, countryDetail, metadata, currentDate);
    case 'agrikultur':
      return computeAgrikultur(key, countryDetail, metadata, currentDate);
    case 'perikanan':
      return computePerikanan(key, countryDetail, metadata);
    case 'olahan pangan':
    case 'olahan_pangan':
      return computeOlahanPangan(key, countryDetail, metadata);
    case 'farmasi':
      return computeFarmasi(key, countryDetail, metadata);
    default:
      // Generic fallback
      const per = Number(metadata[key]?.produksi) || 0;
      const count = Number(countryDetail?.[key]) || 0;
      const unit = metadata[key]?.satuan || '';
      return { perBuilding: per, total: per * count, unit };
  }
}
