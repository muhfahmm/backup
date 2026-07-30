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

export const CATEGORY = 'agrikultur';

export const REQUIREMENTS: BuildingRequirements[] = [
  {
    buildingKey: 'padi',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 300 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 200 },
    ],
  },
  {
    buildingKey: 'gandum',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 280 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 210 },
    ],
  },
  {
    buildingKey: 'jagung',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 260 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 220 },
    ],
  },
  {
    buildingKey: 'sayur',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 240 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 230 },
    ],
  },
  {
    buildingKey: 'umbi',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 220 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 200 },
    ],
  },
  {
    buildingKey: 'kedelai',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 250 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 240 },
    ],
  },
  {
    buildingKey: 'kelapa_sawit',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 400 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 300 },
    ],
  },
  {
    buildingKey: 'kopi',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 350 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 280 },
    ],
  },
  {
    buildingKey: 'teh',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 320 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 270 },
    ],
  },
  {
    buildingKey: 'kakao',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 380 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 290 },
    ],
  },
  {
    buildingKey: 'tebu',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 310 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 260 },
    ],
  },
  {
    buildingKey: 'karet',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 420 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 310 },
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