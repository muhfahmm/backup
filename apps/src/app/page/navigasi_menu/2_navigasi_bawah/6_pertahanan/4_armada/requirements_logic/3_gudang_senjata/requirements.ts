export type RequirementItem = {
  group: string;
  label: string;
  resourceKey: string;
  amount: number;
};

export type BuildingRequirements = {
  buildingKey: string;
  requirements: RequirementItem[];
};

export const CATEGORY = 'gudang_senjata';

export const REQUIREMENTS: BuildingRequirements[] = [
  {
    buildingKey: 'gudang_senjata',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 400 },
      { group: 'pembangunan', label: 'besi', resourceKey: 'besi', amount: 300 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 250 },
      { group: 'pembangunan', label: 'batu bara', resourceKey: 'batu_bara', amount: 150 },
    ],
  },
  {
    buildingKey: 'artileri_berat',
    requirements: [
      { group: 'produksi', label: 'besi', resourceKey: 'besi', amount: 1000 },
      { group: 'produksi', label: 'minyak bumi', resourceKey: 'minyak_bumi', amount: 500 },
      { group: 'produksi', label: 'timah', resourceKey: 'timah', amount: 200 },
    ],
  },
  {
    buildingKey: 'sistem_peluncur_roket',
    requirements: [
      { group: 'produksi', label: 'besi', resourceKey: 'besi', amount: 900 },
      { group: 'produksi', label: 'minyak bumi', resourceKey: 'minyak_bumi', amount: 600 },
      { group: 'produksi', label: 'tembaga', resourceKey: 'tembaga', amount: 250 },
    ],
  },
  {
    buildingKey: 'pertahanan_udara_mobile',
    requirements: [
      { group: 'produksi', label: 'besi', resourceKey: 'besi', amount: 700 },
      { group: 'produksi', label: 'minyak bumi', resourceKey: 'minyak_bumi', amount: 400 },
      { group: 'produksi', label: 'aluminium', resourceKey: 'aluminium', amount: 200 },
    ],
  },
  {
    buildingKey: 'kendaraan_taktis',
    requirements: [
      { group: 'produksi', label: 'besi', resourceKey: 'besi', amount: 500 },
      { group: 'produksi', label: 'minyak bumi', resourceKey: 'minyak_bumi', amount: 300 },
      { group: 'produksi', label: 'karet', resourceKey: 'karet', amount: 150 },
    ],
  },
];

export function findRequirements(buildingKey: string) {
  return REQUIREMENTS.find((entry) => entry.buildingKey === buildingKey);
}

export function getTotalProduction(
  buildingKey: string,
  countryDetail: Record<string, any> | null,
  metadata: Record<string, any> | null,
) {
  const count = Number(countryDetail?.[buildingKey] ?? 0);
  const productionPerUnit = Number(metadata?.[buildingKey]?.produksi ?? 0);
  return count * productionPerUnit;
}
