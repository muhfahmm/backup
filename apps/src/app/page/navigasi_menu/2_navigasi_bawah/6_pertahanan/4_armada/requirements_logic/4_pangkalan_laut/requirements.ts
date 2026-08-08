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

export const CATEGORY = 'pangkalan_laut';

export const REQUIREMENTS: BuildingRequirements[] = [
  {
    buildingKey: 'pangkalan_laut',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 600 },
      { group: 'pembangunan', label: 'besi', resourceKey: 'besi', amount: 400 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 500 },
      { group: 'pembangunan', label: 'batu bara', resourceKey: 'batu_bara', amount: 200 },
    ],
  },
  {
    buildingKey: 'kapal_induk',
    requirements: [
      { group: 'produksi', label: 'besi', resourceKey: 'besi', amount: 3000 },
      { group: 'produksi', label: 'minyak bumi', resourceKey: 'minyak_bumi', amount: 1500 },
      { group: 'produksi', label: 'tembaga', resourceKey: 'tembaga', amount: 500 },
    ],
  },
  {
    buildingKey: 'kapal_induk_nuklir',
    requirements: [
      { group: 'produksi', label: 'besi', resourceKey: 'besi', amount: 4000 },
      { group: 'produksi', label: 'minyak bumi', resourceKey: 'minyak_bumi', amount: 2000 },
      { group: 'produksi', label: 'uranium', resourceKey: 'uranium', amount: 300 },
    ],
  },
  {
    buildingKey: 'kapal_destroyer',
    requirements: [
      { group: 'produksi', label: 'besi', resourceKey: 'besi', amount: 2000 },
      { group: 'produksi', label: 'minyak bumi', resourceKey: 'minyak_bumi', amount: 1000 },
      { group: 'produksi', label: 'tembaga', resourceKey: 'tembaga', amount: 400 },
    ],
  },
  {
    buildingKey: 'kapal_korvet',
    requirements: [
      { group: 'produksi', label: 'besi', resourceKey: 'besi', amount: 1200 },
      { group: 'produksi', label: 'minyak bumi', resourceKey: 'minyak_bumi', amount: 600 },
      { group: 'produksi', label: 'aluminium', resourceKey: 'aluminium', amount: 250 },
    ],
  },
  {
    buildingKey: 'kapal_selam_nuklir',
    requirements: [
      { group: 'produksi', label: 'besi', resourceKey: 'besi', amount: 2500 },
      { group: 'produksi', label: 'minyak bumi', resourceKey: 'minyak_bumi', amount: 1200 },
      { group: 'produksi', label: 'uranium', resourceKey: 'uranium', amount: 250 },
    ],
  },
  {
    buildingKey: 'kapal_selam_regular',
    requirements: [
      { group: 'produksi', label: 'besi', resourceKey: 'besi', amount: 1500 },
      { group: 'produksi', label: 'minyak bumi', resourceKey: 'minyak_bumi', amount: 800 },
      { group: 'produksi', label: 'tembaga', resourceKey: 'tembaga', amount: 300 },
    ],
  },
  {
    buildingKey: 'kapal_ranjau',
    requirements: [
      { group: 'produksi', label: 'besi', resourceKey: 'besi', amount: 800 },
      { group: 'produksi', label: 'minyak bumi', resourceKey: 'minyak_bumi', amount: 400 },
      { group: 'produksi', label: 'timah', resourceKey: 'timah', amount: 150 },
    ],
  },
  {
    buildingKey: 'kapal_logistik',
    requirements: [
      { group: 'produksi', label: 'besi', resourceKey: 'besi', amount: 1000 },
      { group: 'produksi', label: 'minyak bumi', resourceKey: 'minyak_bumi', amount: 500 },
      { group: 'produksi', label: 'kayu', resourceKey: 'kayu', amount: 300 },
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
