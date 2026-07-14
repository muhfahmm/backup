export const hasBijihBesiBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['bijih_besi'] || 0) > 0;
};
