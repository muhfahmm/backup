// 🔥 PANGKALAN UDARA LOGIC
// Pangkalan Udara capacity: 5.000 per unit
// Digunakan untuk: Jet Tempur Siluman, Jet Tempur Interceptor, Pesawat Pengebom, Helikopter Serang, Pesawat Pengintai, Drone Intai UAV, Drone Kamikaze, Pesawat Angkut

export const PANGKALAN_UDARA_CAPACITY = 500;

export function convertPangkalanUdaraToCapacity(pangkalanCount: number): number {
  return pangkalanCount * PANGKALAN_UDARA_CAPACITY;
}

export function isPangkalanUdaraCapacityFull(
  jetTemturSilamanCount: number,
  jetTemturInterceptorCount: number,
  pesawatPengebomCount: number,
  helikopterSerangCount: number,
  pesawatPengintaiCount: number,
  droneIntaiUavCount: number,
  droneKamikazeCount: number,
  pesawatAngkutCount: number,
  pangkalanCount: number
): boolean {
  if (pangkalanCount <= 0) return false;
  const totalPesawat = jetTemturSilamanCount + jetTemturInterceptorCount + pesawatPengebomCount + helikopterSerangCount + 
                       pesawatPengintaiCount + droneIntaiUavCount + droneKamikazeCount + pesawatAngkutCount;
  const maxCapacity = pangkalanCount * PANGKALAN_UDARA_CAPACITY;
  return totalPesawat >= maxCapacity;
}

export function getRemainingPangkalanUdaraCapacity(
  jetTemturSilamanCount: number,
  jetTemturInterceptorCount: number,
  pesawatPengebomCount: number,
  helikopterSerangCount: number,
  pesawatPengintaiCount: number,
  droneIntaiUavCount: number,
  droneKamikazeCount: number,
  pesawatAngkutCount: number,
  pangkalanCount: number
): number {
  if (pangkalanCount <= 0) return 0;
  const totalPesawat = jetTemturSilamanCount + jetTemturInterceptorCount + pesawatPengebomCount + helikopterSerangCount + 
                       pesawatPengintaiCount + droneIntaiUavCount + droneKamikazeCount + pesawatAngkutCount;
  const maxCapacity = pangkalanCount * PANGKALAN_UDARA_CAPACITY;
  return Math.max(0, maxCapacity - totalPesawat);
}
