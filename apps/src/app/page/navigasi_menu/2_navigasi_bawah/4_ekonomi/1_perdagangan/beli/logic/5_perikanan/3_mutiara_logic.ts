// @ts-nocheck
export const hasMutiaraBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['mutiara'] || 0) > 0;
};
