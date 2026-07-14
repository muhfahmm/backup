export const hasGaramBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['garam'] || 0) > 0;
};
