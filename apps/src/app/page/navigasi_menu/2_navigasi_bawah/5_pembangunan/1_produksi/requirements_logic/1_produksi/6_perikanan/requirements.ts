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

export const CATEGORY = 'perikanan';

export const REQUIREMENTS: BuildingRequirements[] = [
  {
    buildingKey: 'udang',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 450 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 350 },
    ],
  },
  {
    buildingKey: 'mutiara',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 600 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 400 },
    ],
  },
  {
    buildingKey: 'ikan',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 380 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 300 },
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