export type RequirementItem = {
  group: string;
  label: string;
  resourceKey: string;
};

export type BuildingRequirements = {
  buildingKey: string;
  requirements: RequirementItem[];
};

export const CATEGORY = 'kelistrikan';

export const REQUIREMENTS: BuildingRequirements[] = [
  {
    buildingKey: 'pembangkit_listrik_tenaga_gas',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'nikel', resourceKey: 'nikel' },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi' },
      { group: 'bahan bakar', label: 'gas alam', resourceKey: 'gas_alam' },
    ],
  },
  {
    buildingKey: 'pembangkit_listrik_tenaga_air',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'ltj', resourceKey: 'logam_tanah_jarang' },
    ],
  },
  {
    buildingKey: 'pembangkit_listrik_tenaga_nuklir',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'nikel', resourceKey: 'nikel' },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi' },
      { group: 'bahan bakar', label: 'uranium', resourceKey: 'uranium' },
    ],
  },
  {
    buildingKey: 'pembangkit_listrik_tenaga_surya',
    requirements: [
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'nikel', resourceKey: 'nikel' },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi' },
    ],
  },
  {
    buildingKey: 'pembangkit_listrik_tenaga_uap',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'alumunium', resourceKey: 'alumunium' },
      { group: 'pembangunan', label: 'nikel', resourceKey: 'nikel' },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi' },
      { group: 'bahan bakar', label: 'batu bara', resourceKey: 'batu_bara' },
      { group: 'bahan bakar', label: 'minyak bumi', resourceKey: 'minyak_bumi' },
    ],
  },
  {
    buildingKey: 'pembangkit_listrik_tenaga_angin',
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
