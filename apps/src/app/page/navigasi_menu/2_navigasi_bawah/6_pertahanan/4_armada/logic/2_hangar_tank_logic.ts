// 🔥 HANGAR TANK LOGIC
// Hangar Tank capacity: 3.000 per unit
// Digunakan untuk: Tank Tempur Utama, APC / IFV

export const HANGAR_TANK_CAPACITY = 3000;

export function convertHangarTankToCapacity(hangarCount: number): number {
  return hangarCount * HANGAR_TANK_CAPACITY;
}

export function isHangarTankCapacityFull(
  currentTankCount: number,
  currentApcCount: number,
  hangarCount: number
): boolean {
  if (hangarCount <= 0) return false;
  const totalVehicles = currentTankCount + currentApcCount;
  const maxCapacity = hangarCount * HANGAR_TANK_CAPACITY;
  return totalVehicles >= maxCapacity;
}

export function getRemainingHangarCapacity(
  currentTankCount: number,
  currentApcCount: number,
  hangarCount: number
): number {
  if (hangarCount <= 0) return 0;
  const totalVehicles = currentTankCount + currentApcCount;
  const maxCapacity = hangarCount * HANGAR_TANK_CAPACITY;
  return Math.max(0, maxCapacity - totalVehicles);
}
