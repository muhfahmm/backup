export type RequirementItem = {
  group: string;
  label: string;
  resourceKey: string;
};

export type BuildingRequirements = {
  buildingKey: string;
  requirements: RequirementItem[];
};

export const CATEGORY = 'penegakan hukum';

export const REQUIREMENTS: BuildingRequirements[] = [
  {
    buildingKey: 'pusat_bantuan_hukum',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
    ],
  },
  {
    buildingKey: 'pengadilan',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
    ],
  },
  {
    buildingKey: 'kejaksaan',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
    ],
  },
  {
    buildingKey: 'pos_polisi',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
    ],
  },
  {
    buildingKey: 'armada_mobil_polisi',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
    ],
  },
  {
    buildingKey: 'akademi_polisi',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
    ],
  },
  {
    buildingKey: 'indeks_korupsi',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
    ],
  },
  {
    buildingKey: 'indeks_keamanan',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
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
