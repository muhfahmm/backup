export type RequirementItem = {
  group: string;
  label: string;
  resourceKey: string;
};

export type BuildingRequirements = {
  buildingKey: string;
  requirements: RequirementItem[];
};

export const CATEGORY = 'manufaktur';

export const REQUIREMENTS: BuildingRequirements[] = [
  {
    buildingKey: 'semikonduktor',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
    ],
  },
  {
    buildingKey: 'mobil',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
    ],
  },
  {
    buildingKey: 'sepeda_motor',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
    ],
  },
  {
    buildingKey: 'semen_beton',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
    ],
  },
  {
    buildingKey: 'kayu',
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
