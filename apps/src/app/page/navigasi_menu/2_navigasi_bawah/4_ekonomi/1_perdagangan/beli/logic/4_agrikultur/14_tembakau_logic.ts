// @ts-nocheck
export const hasTembakauBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['tembakau'] || 0) > 0;
};
