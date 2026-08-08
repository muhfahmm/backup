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

export const CATEGORY = 'infanteri';

export const REQUIREMENTS: BuildingRequirements[] = [
  {
    buildingKey: 'barak',
    requirements: [
      { group: 'produksi', label: 'Biaya Produksi EM', resourceKey: 'em_cost', amount: 5000 },
    ],
  },
  {
    buildingKey: 'pasukan_infanteri',
    requirements: [
      { group: 'produksi', label: 'Biaya Produksi EM', resourceKey: 'em_cost', amount: 5000 },
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
