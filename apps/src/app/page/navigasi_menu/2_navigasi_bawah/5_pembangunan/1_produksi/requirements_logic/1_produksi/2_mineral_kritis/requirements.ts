export type RequirementItem = {
  group: string;
  label: string;
  resourceKey: string;
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
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
    ],
  },
  {
    buildingKey: 'uranium',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
    ],
  },
  {
    buildingKey: 'batu_bara',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
    ],
  },
  {
    buildingKey: 'minyak_bumi',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
    ],
  },
  {
    buildingKey: 'gas_alam',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
    ],
  },
  {
    buildingKey: 'garam',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
    ],
  },
  {
    buildingKey: 'litium',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
    ],
  },
  {
    buildingKey: 'logam_tanah_jarang',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
    ],
  },
  {
    buildingKey: 'bijah_besi',
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
