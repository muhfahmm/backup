export const hasNikelBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['nikel'] || 0) > 0;
};
