// @ts-nocheck
export const hitungHargaJual = (biayaPembangunan?: number, quantity: number = 1): number => {
  const basePrice = typeof biayaPembangunan === "number" && biayaPembangunan > 0
    ? biayaPembangunan
    : 5000000;

  const unitPrice = Math.round(basePrice * 2);
  return unitPrice * quantity;
};
