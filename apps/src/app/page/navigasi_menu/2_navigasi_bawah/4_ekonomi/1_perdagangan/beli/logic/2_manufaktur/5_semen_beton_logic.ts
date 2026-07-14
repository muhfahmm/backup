// @ts-nocheck
export const hasSemenBetonBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['semen_beton'] || 0) > 0;
};
