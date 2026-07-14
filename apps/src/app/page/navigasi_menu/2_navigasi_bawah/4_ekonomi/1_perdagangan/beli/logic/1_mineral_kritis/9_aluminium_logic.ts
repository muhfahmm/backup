export const hasAluminiumBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['aluminium'] || 0) > 0;
};
