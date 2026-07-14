export const hasTembagaBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['tembaga'] || 0) > 0;
};
