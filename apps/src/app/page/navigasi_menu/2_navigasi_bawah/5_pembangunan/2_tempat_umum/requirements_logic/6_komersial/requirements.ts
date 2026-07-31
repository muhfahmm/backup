export type RequirementItem = {
  group: string;
  label: string;
  resourceKey: string;
  amount: number; // ✅ Ditambahkan
};

export type BuildingRequirements = {
  buildingKey: string;
  requirements: RequirementItem[];
};

export const CATEGORY = 'komersial';

export const REQUIREMENTS: BuildingRequirements[] = [
  {
    buildingKey: 'mall',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 1000 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 300 },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi', amount: 200 },
    ],
  },
  {
    buildingKey: 'hotel',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 800 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 250 },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi', amount: 150 },
    ],
  },
  {
    buildingKey: 'pusat_grosir_tekstil',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 500 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 200 },
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