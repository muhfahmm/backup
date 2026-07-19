export type RequirementItem = {
  group: string;
  label: string;
  resourceKey: string;
};

export type BuildingRequirements = {
  buildingKey: string;
  requirements: RequirementItem[];
};

export const CATEGORY = 'infrastruktur';

export const REQUIREMENTS: BuildingRequirements[] = [
  {
    buildingKey: 'jalur_sepeda',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'aluminium', resourceKey: 'aluminium' },
      { group: 'pembangunan', label: 'nikel', resourceKey: 'nikel' },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi' },
    ],
  },
  {
    buildingKey: 'jalan_raya',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'aluminium', resourceKey: 'aluminium' },
      { group: 'pembangunan', label: 'nikel', resourceKey: 'nikel' },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi' },
    ],
  },
  {
    buildingKey: 'terminal_bus',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'aluminium', resourceKey: 'aluminium' },
      { group: 'pembangunan', label: 'nikel', resourceKey: 'nikel' },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi' },
    ],
  },
  {
    buildingKey: 'stasiun_kereta_api',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'aluminium', resourceKey: 'aluminium' },
      { group: 'pembangunan', label: 'nikel', resourceKey: 'nikel' },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi' },
    ],
  },
  {
    buildingKey: 'kereta_bawah_tanah',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'aluminium', resourceKey: 'aluminium' },
      { group: 'pembangunan', label: 'nikel', resourceKey: 'nikel' },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi' },
    ],
  },
  {
    buildingKey: 'pelabuhan',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'aluminium', resourceKey: 'aluminium' },
      { group: 'pembangunan', label: 'nikel', resourceKey: 'nikel' },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi' },
    ],
  },
  {
    buildingKey: 'bandara',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'aluminium', resourceKey: 'aluminium' },
      { group: 'pembangunan', label: 'nikel', resourceKey: 'nikel' },
      { group: 'pembangunan', label: 'besi', resourceKey: 'bijih_besi' },
    ],
  },
  {
    buildingKey: 'helipad',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton' },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu' },
      { group: 'pembangunan', label: 'tembaga', resourceKey: 'tembaga' },
      { group: 'pembangunan', label: 'aluminium', resourceKey: 'aluminium' },
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
