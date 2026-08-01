export const MINERAL_SDA_BUILDING_KEYS = [
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

export const getDisabledMineralBuildingsForCountry = (countryName: string, sdaStatus?: Record<string, boolean> | null) => {
  const disabled = new Set<string>();
  if (!countryName || !sdaStatus) return disabled;

  for (const buildingKey of MINERAL_SDA_BUILDING_KEYS) {
    if (sdaStatus[buildingKey] === false) {
      disabled.add(buildingKey);
    }
  }

  return disabled;
};

export const isMineralBuildingAvailable = (
  buildingKey: string,
  countryName: string,
  sdaStatus?: Record<string, boolean> | null
): boolean => {
  if (!MINERAL_SDA_BUILDING_KEYS.includes(buildingKey as (typeof MINERAL_SDA_BUILDING_KEYS)[number])) {
    return true;
  }

  const disabled = getDisabledMineralBuildingsForCountry(countryName, sdaStatus);
  return !disabled.has(buildingKey);
};
