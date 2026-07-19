export type RequirementItem = {
  group: string;
  label: string;
  resourceKey: string;
};

export type BuildingRequirements = {
  buildingKey: string;
  requirements: RequirementItem[];
};

export const CATEGORY = 'olahan pangan';

export const REQUIREMENTS: BuildingRequirements[] = [
  {
    buildingKey: 'air_mineral',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
    ],
  },
  {
    buildingKey: 'gula',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
    ],
  },
  {
    buildingKey: 'roti',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
    ],
  },
  {
    buildingKey: 'pengolahan_daging',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
    ],
  },
  {
    buildingKey: 'mie_instan',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
    ],
  },
  {
    buildingKey: 'minyak_goreng',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
    ],
  },
  {
    buildingKey: 'susu',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
    ],
  },
  {
    buildingKey: 'pakan_ternak',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
    ],
  },
  {
    buildingKey: 'ikan_kaleng',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
    ],
  },
  {
    buildingKey: 'kopi_teh',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
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
