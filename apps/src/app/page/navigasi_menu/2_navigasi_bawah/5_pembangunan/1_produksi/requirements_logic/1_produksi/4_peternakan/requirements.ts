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

export const CATEGORY = 'peternakan';

export const REQUIREMENTS: BuildingRequirements[] = [
  {
    buildingKey: 'ayam_unggas',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 250 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 350 },
    ],
  },
  {
    buildingKey: 'sapi_perah',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 500 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 400 },
    ],
  },
  {
    buildingKey: 'sapi_potong',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 550 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 380 },
    ],
  },
  {
    buildingKey: 'domba_kambing',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 300 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 250 },
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