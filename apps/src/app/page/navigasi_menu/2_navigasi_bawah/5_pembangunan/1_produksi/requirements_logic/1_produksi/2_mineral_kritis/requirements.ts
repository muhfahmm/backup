export type RequirementItem = {
  group: string;
  label: string;
  resourceKey: string;
  amount: number; // wajib
};

export type BuildingRequirements = {
  buildingKey: string;
  requirements: RequirementItem[];
};

export const CATEGORY = 'mineral kritis';

export const REQUIREMENTS: BuildingRequirements[] = [
  {
    buildingKey: 'emas',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 600 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 350 },
    ],
  },
  {
    buildingKey: 'uranium',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 900 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 400 },
    ],
  },
  {
    buildingKey: 'batu_bara',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 500 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 250 },
    ],
  },
  {
    buildingKey: 'minyak_bumi',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 800 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 450 },
    ],
  },
  {
    buildingKey: 'gas_alam',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 750 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 300 },
    ],
  },
  {
    buildingKey: 'garam',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 300 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 200 },
    ],
  },
  {
    buildingKey: 'litium',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 850 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 380 },
    ],
  },
  {
    buildingKey: 'logam_tanah_jarang',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 950 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 420 },
    ],
  },
  {
    buildingKey: 'bijih_besi',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 700 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 320 },
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