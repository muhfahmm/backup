export const hasGasAlamBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['gas_alam'] || 0) > 0;
};
