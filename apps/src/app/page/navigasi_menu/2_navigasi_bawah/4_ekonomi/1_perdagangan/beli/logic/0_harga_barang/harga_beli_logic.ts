// @ts-nocheck
export const hitungHargaBeli = (biayaPembangunan?: number, quantity: number = 1): number => {
  const basePrice = typeof biayaPembangunan === "number" && biayaPembangunan > 0
    ? biayaPembangunan
    : 10000000;

  const unitPrice = Math.round(basePrice * 5);
  return unitPrice * quantity;
};
