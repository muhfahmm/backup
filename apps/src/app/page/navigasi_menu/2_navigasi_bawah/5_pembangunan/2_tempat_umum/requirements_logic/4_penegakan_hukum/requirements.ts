export type RequirementItem = {
  group: string;
  label: string;
  resourceKey: string;
  amount: number; // ✅ Ditambahkan
};

export type BuildingRequirements = {
  buildingKey: string;
  requirements: RequirementItem[];
};

export const CATEGORY = 'penegakan hukum';

export const REQUIREMENTS: BuildingRequirements[] = [
  {
    buildingKey: 'pusat_bantuan_hukum',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 200 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 100 },
    ],
  },
  {
    buildingKey: 'pengadilan',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 400 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 200 },
    ],
  },
  {
    buildingKey: 'kejaksaan',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 300 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 150 },
    ],
  },
  {
    buildingKey: 'pos_polisi',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 150 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 75 },
    ],
  },
  {
    buildingKey: 'armada_mobil_polisi',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 250 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 125 },
    ],
  },
  {
    buildingKey: 'akademi_polisi',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 500 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 250 },
    ],
  },
  {
    buildingKey: 'indeks_korupsi',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 200 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 100 },
    ],
  },
  {
    buildingKey: 'indeks_keamanan',
    requirements: [
      { group: 'pembangunan', label: 'semen beton', resourceKey: 'semen_beton', amount: 200 },
      { group: 'pembangunan', label: 'kayu', resourceKey: 'kayu', amount: 100 },
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