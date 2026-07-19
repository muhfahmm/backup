export type RequirementItem = {
  group: string;
  label: string;
  resourceKey: string;
};

export type BuildingRequirements = {
  buildingKey: string;
  requirements: RequirementItem[];
};

export const CATEGORY = 'pendidikan';

export const REQUIREMENTS: BuildingRequirements[] = [
  {
    buildingKey: 'prasekolah',
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
    buildingKey: 'dasar',
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
    buildingKey: 'menengah',
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
    buildingKey: 'lanjutan',
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
    buildingKey: 'universitas',
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
    buildingKey: 'lembaga_pendidikan',
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
    buildingKey: 'laboratorium',
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
    buildingKey: 'observatorium',
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
    buildingKey: 'pusat_penelitian',
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
    buildingKey: 'pusat_pengembangan',
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
    buildingKey: 'literasi',
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
