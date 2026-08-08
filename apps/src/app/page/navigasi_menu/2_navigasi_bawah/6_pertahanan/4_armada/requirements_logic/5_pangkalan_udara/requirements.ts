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

export const CATEGORY = 'pangkalan_udara';

export const REQUIREMENTS: BuildingRequirements[] = [
  {
    buildingKey: 'pangkalan_udara',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 700 },
      { group: 'pembangunan', label: 'besi', resourceKey: 'besi', amount: 500 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 400 },
      { group: 'pembangunan', label: 'batu bara', resourceKey: 'batu_bara', amount: 250 },
    ],
  },
  {
    buildingKey: 'jet_tempur_siluman',
    requirements: [
      { group: 'produksi', label: 'besi', resourceKey: 'besi', amount: 2000 },
      { group: 'produksi', label: 'minyak bumi', resourceKey: 'minyak_bumi', amount: 1200 },
      { group: 'produksi', label: 'aluminium', resourceKey: 'aluminium', amount: 400 },
    ],
  },
  {
    buildingKey: 'jet_tempur_interceptor',
    requirements: [
      { group: 'produksi', label: 'besi', resourceKey: 'besi', amount: 1800 },
      { group: 'produksi', label: 'minyak bumi', resourceKey: 'minyak_bumi', amount: 1000 },
      { group: 'produksi', label: 'aluminium', resourceKey: 'aluminium', amount: 350 },
    ],
  },
  {
    buildingKey: 'pesawat_pengebom',
    requirements: [
      { group: 'produksi', label: 'besi', resourceKey: 'besi', amount: 2200 },
      { group: 'produksi', label: 'minyak bumi', resourceKey: 'minyak_bumi', amount: 1300 },
      { group: 'produksi', label: 'tembaga', resourceKey: 'tembaga', amount: 300 },
    ],
  },
  {
    buildingKey: 'helikopter_serang',
    requirements: [
      { group: 'produksi', label: 'besi', resourceKey: 'besi', amount: 1400 },
      { group: 'produksi', label: 'minyak bumi', resourceKey: 'minyak_bumi', amount: 800 },
      { group: 'produksi', label: 'aluminium', resourceKey: 'aluminium', amount: 250 },
    ],
  },
  {
    buildingKey: 'pesawat_pengintai',
    requirements: [
      { group: 'produksi', label: 'besi', resourceKey: 'besi', amount: 1000 },
      { group: 'produksi', label: 'minyak bumi', resourceKey: 'minyak_bumi', amount: 600 },
      { group: 'produksi', label: 'aluminium', resourceKey: 'aluminium', amount: 200 },
    ],
  },
  {
    buildingKey: 'drone_intai_uav',
    requirements: [
      { group: 'produksi', label: 'besi', resourceKey: 'besi', amount: 400 },
      { group: 'produksi', label: 'minyak bumi', resourceKey: 'minyak_bumi', amount: 200 },
      { group: 'produksi', label: 'aluminium', resourceKey: 'aluminium', amount: 100 },
    ],
  },
  {
    buildingKey: 'drone_kamikaze',
    requirements: [
      { group: 'produksi', label: 'besi', resourceKey: 'besi', amount: 300 },
      { group: 'produksi', label: 'minyak bumi', resourceKey: 'minyak_bumi', amount: 150 },
      { group: 'produksi', label: 'timah', resourceKey: 'timah', amount: 80 },
    ],
  },
  {
    buildingKey: 'pesawat_angkut',
    requirements: [
      { group: 'produksi', label: 'besi', resourceKey: 'besi', amount: 1600 },
      { group: 'produksi', label: 'minyak bumi', resourceKey: 'minyak_bumi', amount: 900 },
      { group: 'produksi', label: 'aluminium', resourceKey: 'aluminium', amount: 300 },
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
