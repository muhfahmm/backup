export type RequirementItem = {
  group: string;
  label: string;
  resourceKey: string;
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
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'nikel', resourceKey: 'nikel' },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi' },
    ],
  },
  {
    buildingKey: 'sirkuit_balap',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'nikel', resourceKey: 'nikel' },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi' },
    ],
  },
  {
    buildingKey: 'stadion',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'nikel', resourceKey: 'nikel' },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi' },
    ],
  },
  {
    buildingKey: 'stadion_internasional',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'nikel', resourceKey: 'nikel' },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi' },
    ],
  },
  {
    buildingKey: 'gym',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'nikel', resourceKey: 'nikel' },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi' },
    ],
  },
  {
    buildingKey: 'golf',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'nikel', resourceKey: 'nikel' },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi' },
    ],
  },
  {
    buildingKey: 'esports',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'nikel', resourceKey: 'nikel' },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi' },
    ],
  },
  {
    buildingKey: 'gokart',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'nikel', resourceKey: 'nikel' },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi' },
    ],
  },
  {
    buildingKey: 'bioskop',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'nikel', resourceKey: 'nikel' },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi' },
    ],
  },
  {
    buildingKey: 'teater',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'nikel', resourceKey: 'nikel' },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi' },
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
