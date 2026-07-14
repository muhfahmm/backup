// @ts-nocheck
export const hasSepedaMotorBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['sepeda_motor'] || 0) > 0;
};
