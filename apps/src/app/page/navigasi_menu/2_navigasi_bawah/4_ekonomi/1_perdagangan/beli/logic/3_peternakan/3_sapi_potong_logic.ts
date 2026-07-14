// @ts-nocheck
export const hasSapiPotongBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['sapi_potong'] || 0) > 0;
};