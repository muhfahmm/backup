/**
 * logic Tunawisma
 * Menghitung tingkat tunawisma dan rasionya terhadap kematian berdasarkan infrastruktur hunian / komersial.
 * Semakin banyak pembangunan perumahan/infrastruktur komersial, maka rasio/nilai tunawisma semakin kecil.
 */

export interface TunawismaCalculationResult {
  populasi: number;
  homelessCount: number; // Jumlah tunawisma dasar (agar konsisten dengan modal kependudukan)
  totalBangunanHunian: number; // Bangunan hunian pendukung dari komersial/infrastruktur
  idealHunian: number;
  hunianRatio: number;
  homelessFactor: number; // Pengali kematian (semakin kecil jika bangunan semakin banyak)
}

export function calculateTunawismaLogic(
  countryDetail: any,
  populasi: number,
  propsHomelessCount?: number
): TunawismaCalculationResult {
  // Gunakan data tunawisma dasar atau hitung dari parameter
  const baseHomelessCount = propsHomelessCount ?? countryDetail?.tunawisma ?? 0;

  // Bangunan penunjang hunian/penampungan di komersial atau infrastruktur (misalnya mall, hotel, dll.)
  const hotel = Number(countryDetail?.hotel ?? 0);
  const mall = Number(countryDetail?.mall ?? 0);
  const pusatGrosir = Number(countryDetail?.pusat_grosir_tekstil ?? 0);

  const totalBangunanHunian = hotel + mall + pusatGrosir;

  // Target ideal bangunan komersial/penyedia kesejahteraan ekonomi per populasi (misal 1 per 100.000 jiwa)
  const idealHunian = Math.ceil(populasi / 100000) || 1;

  // Rasio hunian penunjang (maksimal 1)
  const hunianRatio = Math.min(1, totalBangunanHunian / idealHunian);

  // Rasio tunawisma murni terhadap populasi
  const homelessRatio = baseHomelessCount / populasi;

  // Faktor pengali kematian akibat tunawisma:
  // Semakin banyak bangunan (hunianRatio tinggi), efek buruk kematian dari tunawisma berkurang (dikali dengan 1 - 0.5 * hunianRatio)
  const homelessFactor = 1 + (homelessRatio * 5 * (1 - 0.5 * hunianRatio));

  return {
    populasi,
    homelessCount: baseHomelessCount, // Kembalikan nilai asli agar tampilan UI sama dengan modal Kependudukan
    totalBangunanHunian,
    idealHunian,
    hunianRatio,
    homelessFactor,
  };
}
