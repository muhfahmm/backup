export const hasLitiumBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['litium'] || 0) > 0;
};
