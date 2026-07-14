// @ts-nocheck
export const hasJagungBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['jagung'] || 0) > 0;
};