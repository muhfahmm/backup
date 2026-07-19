// @ts-nocheck
export const hasAirMineralBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['air_mineral'] || 0) > 0;
};
