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

export const CATEGORY = 'olahraga & hiburan';

export const REQUIREMENTS: BuildingRequirements[] = [
  {
    buildingKey: 'kolam_renang',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 300 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 150 },
    ],
  },
  {
    buildingKey: 'sirkuit_balap',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 600 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 250 },
    ],
  },
  {
    buildingKey: 'stadion',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 700 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 300 },
    ],
  },
  {
    buildingKey: 'stadion_internasional',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 1000 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 400 },
    ],
  },
  {
    buildingKey: 'gym',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 200 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 100 },
    ],
  },
  {
    buildingKey: 'golf',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 500 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 200 },
    ],
  },
  {
    buildingKey: 'esports',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 250 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 100 },
    ],
  },
  {
    buildingKey: 'gokart',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 300 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 120 },
    ],
  },
  {
    buildingKey: 'bioskop',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 400 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 180 },
    ],
  },
  {
    buildingKey: 'teater',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 350 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 160 },
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