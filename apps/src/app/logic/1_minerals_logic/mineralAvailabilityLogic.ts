const MINERAL_SDA_BUILDING_KEYS = [
  'emas',
  'uranium',
  'batu_bara',
  'minyak_bumi',
  'gas_alam',
  'garam',
  'litium',
  'logam_tanah_jarang',
  'bijih_besi',
] as const;

const MINERAL_SDA_LOOKUP = new Map<string, Record<string, boolean>>();

const normalizeSdaCountryName = (countryName: string) => {
  if (!countryName) return '';
  return countryName.trim().toLowerCase();
};

export const getMineralSDAStatusForCountry = async (countryName: string): Promise<Record<string, boolean> | null> => {
  const normalized = normalizeSdaCountryName(countryName);
  if (!normalized) return null;

  const cached = MINERAL_SDA_LOOKUP.get(normalized);
  if (cached) {
    return cached;
  }

  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const response = await fetch(`/api/sda-data?country=${encodeURIComponent(normalized)}`);
    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    if (data && typeof data === 'object' && !Array.isArray(data)) {
      MINERAL_SDA_LOOKUP.set(normalized, data as Record<string, boolean>);
      return data as Record<string, boolean>;
    }
  } catch {
    return null;
  }

  return null;
};

export const getDisabledMineralBuildingsForCountry = (countryName: string): Set<string> => {
  const disabled = new Set<string>();
  const normalized = normalizeSdaCountryName(countryName);
  if (!normalized) return disabled;

  const cached = MINERAL_SDA_LOOKUP.get(normalized);
  if (!cached) {
    void getMineralSDAStatusForCountry(countryName);
    return disabled;
  }

  for (const resourceKey of MINERAL_SDA_BUILDING_KEYS) {
    if (cached[resourceKey] === false) {
      disabled.add(resourceKey);
    }
  }

  return disabled;
};

export const isMineralBuildingAvailable = (buildingKey: string, countryName: string): boolean => {
  const disabled = getDisabledMineralBuildingsForCountry(countryName);
  return !disabled.has(buildingKey);
};
